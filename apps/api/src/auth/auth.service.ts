import { Injectable, OnModuleInit, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SecurityUtil } from '@prospecthunter/security';
import { LoginDto, RegisterDto, AuthResponse, UserDto, UserRole } from '@prospecthunter/shared';

@Injectable()
export class AuthService implements OnModuleInit {
  constructor(private prisma: PrismaService) {}

  async onModuleInit() {
    await this.seedDefaultUsers();
  }

  private async seedDefaultUsers() {
    const count = await this.prisma.user.count();
    if (count === 0) {
      console.log('Seeding initial system users...');
      await this.prisma.user.createMany({
        data: [
          {
            email: 'admin@prospecthunter.com',
            name: 'System Administrator',
            passwordHash: SecurityUtil.hashPassword('admin123'),
            role: 'ADMIN',
          },
          {
            email: 'sales@prospecthunter.com',
            name: 'Sarah Connor (Sales Lead)',
            passwordHash: SecurityUtil.hashPassword('sales123'),
            role: 'SALES',
          },
          {
            email: 'analyst@prospecthunter.com',
            name: 'Alan Turing (Market Analyst)',
            passwordHash: SecurityUtil.hashPassword('analyst123'),
            role: 'ANALYST',
          },
        ],
      });
      console.log('Default users created successfully.');
    }
  }

  async login(dto: LoginDto): Promise<AuthResponse> {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email.toLowerCase().trim() },
    });

    if (!user || !user.isActive) {
      throw new UnauthorizedException('Invalid email or password.');
    }

    const isValid = SecurityUtil.verifyPassword(dto.password, user.passwordHash);
    if (!isValid) {
      throw new UnauthorizedException('Invalid email or password.');
    }

    const userDto: UserDto = {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role as UserRole,
      isActive: user.isActive,
      createdAt: user.createdAt,
    };

    const token = SecurityUtil.signJwt({
      sub: user.id,
      email: user.email,
      role: user.role,
      name: user.name,
    });

    // Record audit log
    await this.prisma.auditLog.create({
      data: {
        action: 'LOGIN',
        userId: user.id,
        details: { email: user.email },
      },
    });

    return { user: userDto, token };
  }

  async register(dto: RegisterDto): Promise<AuthResponse> {
    const existing = await this.prisma.user.findUnique({
      where: { email: dto.email.toLowerCase().trim() },
    });

    if (existing) {
      throw new BadRequestException('User with this email already exists.');
    }

    const created = await this.prisma.user.create({
      data: {
        email: dto.email.toLowerCase().trim(),
        name: dto.name,
        passwordHash: SecurityUtil.hashPassword(dto.password),
        role: dto.role || 'SALES',
      },
    });

    const userDto: UserDto = {
      id: created.id,
      email: created.email,
      name: created.name,
      role: created.role as UserRole,
      isActive: created.isActive,
      createdAt: created.createdAt,
    };

    const token = SecurityUtil.signJwt({
      sub: created.id,
      email: created.email,
      role: created.role,
      name: created.name,
    });

    return { user: userDto, token };
  }

  async validateUser(userId: string): Promise<UserDto | null> {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user || !user.isActive) return null;
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role as UserRole,
      isActive: user.isActive,
      createdAt: user.createdAt,
    };
  }
}
