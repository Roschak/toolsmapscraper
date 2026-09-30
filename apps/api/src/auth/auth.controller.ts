import { Controller, Post, Get, Body, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import type { LoginDto, RegisterDto } from '@prospecthunter/shared';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() body: LoginDto) {
    return this.authService.login(body);
  }

  @Post('register')
  async register(@Body() body: RegisterDto) {
    return this.authService.register(body);
  }

  @UseGuards(AuthGuard)
  @Get('me')
  async getProfile(@Req() req: any) {
    return this.authService.validateUser(req.user.sub);
  }
}
