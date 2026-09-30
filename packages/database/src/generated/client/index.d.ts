
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>
/**
 * Model SystemSetting
 * 
 */
export type SystemSetting = $Result.DefaultSelection<Prisma.$SystemSettingPayload>
/**
 * Model BusinessEntity
 * 
 */
export type BusinessEntity = $Result.DefaultSelection<Prisma.$BusinessEntityPayload>
/**
 * Model Prospect
 * 
 */
export type Prospect = $Result.DefaultSelection<Prisma.$ProspectPayload>
/**
 * Model LeadNote
 * 
 */
export type LeadNote = $Result.DefaultSelection<Prisma.$LeadNotePayload>
/**
 * Model SearchJob
 * 
 */
export type SearchJob = $Result.DefaultSelection<Prisma.$SearchJobPayload>
/**
 * Model ExportJob
 * 
 */
export type ExportJob = $Result.DefaultSelection<Prisma.$ExportJobPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  SALES: 'SALES',
  ANALYST: 'ANALYST',
  VIEWER: 'VIEWER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const JobStatus: {
  QUEUED: 'QUEUED',
  RUNNING: 'RUNNING',
  PAUSED: 'PAUSED',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  CANCELLED: 'CANCELLED'
};

export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus]


export const WebsiteStatus: {
  WEBSITE_LISTED: 'WEBSITE_LISTED',
  WEBSITE_DISCOVERED: 'WEBSITE_DISCOVERED',
  NO_WEBSITE_LISTED: 'NO_WEBSITE_LISTED',
  POSSIBLE_WEBSITE: 'POSSIBLE_WEBSITE',
  WEBSITE_UNCERTAIN: 'WEBSITE_UNCERTAIN',
  SOCIAL_ONLY: 'SOCIAL_ONLY'
};

export type WebsiteStatus = (typeof WebsiteStatus)[keyof typeof WebsiteStatus]


export const EntityMatchConfidence: {
  EXACT_MATCH: 'EXACT_MATCH',
  HIGH_CONFIDENCE_MATCH: 'HIGH_CONFIDENCE_MATCH',
  PROBABLE_MATCH: 'PROBABLE_MATCH',
  POSSIBLE_MATCH: 'POSSIBLE_MATCH',
  NO_MATCH: 'NO_MATCH'
};

export type EntityMatchConfidence = (typeof EntityMatchConfidence)[keyof typeof EntityMatchConfidence]


export const LeadPriority: {
  HOT: 'HOT',
  HIGH: 'HIGH',
  MEDIUM: 'MEDIUM',
  LOW: 'LOW',
  VERY_LOW: 'VERY_LOW'
};

export type LeadPriority = (typeof LeadPriority)[keyof typeof LeadPriority]


export const LeadStatus: {
  NEW: 'NEW',
  RESEARCHED: 'RESEARCHED',
  DEMO_CREATED: 'DEMO_CREATED',
  DEMO_READY: 'DEMO_READY',
  CONTACTED: 'CONTACTED',
  FOLLOW_UP: 'FOLLOW_UP',
  INTERESTED: 'INTERESTED',
  NEGOTIATION: 'NEGOTIATION',
  CLIENT: 'CLIENT',
  NO_RESPONSE: 'NO_RESPONSE',
  NOT_INTERESTED: 'NOT_INTERESTED',
  LOST: 'LOST',
  ARCHIVED: 'ARCHIVED'
};

export type LeadStatus = (typeof LeadStatus)[keyof typeof LeadStatus]


export const DemoStatus: {
  NOT_CREATED: 'NOT_CREATED',
  IN_PROGRESS: 'IN_PROGRESS',
  READY: 'READY',
  SENT: 'SENT',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type DemoStatus = (typeof DemoStatus)[keyof typeof DemoStatus]


export const SourceType: {
  GOOGLE_PLACES: 'GOOGLE_PLACES',
  FOURSQUARE: 'FOURSQUARE',
  OVERTURE: 'OVERTURE',
  GEOAPIFY: 'GEOAPIFY',
  USER_IMPORT: 'USER_IMPORT',
  MANUAL: 'MANUAL',
  MOCK_PROVIDER: 'MOCK_PROVIDER',
  OTHER_APPROVED_SOURCE: 'OTHER_APPROVED_SOURCE'
};

export type SourceType = (typeof SourceType)[keyof typeof SourceType]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type JobStatus = $Enums.JobStatus

export const JobStatus: typeof $Enums.JobStatus

export type WebsiteStatus = $Enums.WebsiteStatus

export const WebsiteStatus: typeof $Enums.WebsiteStatus

export type EntityMatchConfidence = $Enums.EntityMatchConfidence

export const EntityMatchConfidence: typeof $Enums.EntityMatchConfidence

export type LeadPriority = $Enums.LeadPriority

export const LeadPriority: typeof $Enums.LeadPriority

export type LeadStatus = $Enums.LeadStatus

export const LeadStatus: typeof $Enums.LeadStatus

export type DemoStatus = $Enums.DemoStatus

export const DemoStatus: typeof $Enums.DemoStatus

export type SourceType = $Enums.SourceType

export const SourceType: typeof $Enums.SourceType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.systemSetting`: Exposes CRUD operations for the **SystemSetting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SystemSettings
    * const systemSettings = await prisma.systemSetting.findMany()
    * ```
    */
  get systemSetting(): Prisma.SystemSettingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.businessEntity`: Exposes CRUD operations for the **BusinessEntity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BusinessEntities
    * const businessEntities = await prisma.businessEntity.findMany()
    * ```
    */
  get businessEntity(): Prisma.BusinessEntityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prospect`: Exposes CRUD operations for the **Prospect** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prospects
    * const prospects = await prisma.prospect.findMany()
    * ```
    */
  get prospect(): Prisma.ProspectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leadNote`: Exposes CRUD operations for the **LeadNote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LeadNotes
    * const leadNotes = await prisma.leadNote.findMany()
    * ```
    */
  get leadNote(): Prisma.LeadNoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.searchJob`: Exposes CRUD operations for the **SearchJob** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SearchJobs
    * const searchJobs = await prisma.searchJob.findMany()
    * ```
    */
  get searchJob(): Prisma.SearchJobDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exportJob`: Exposes CRUD operations for the **ExportJob** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExportJobs
    * const exportJobs = await prisma.exportJob.findMany()
    * ```
    */
  get exportJob(): Prisma.ExportJobDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.9.1
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    AuditLog: 'AuditLog',
    SystemSetting: 'SystemSetting',
    BusinessEntity: 'BusinessEntity',
    Prospect: 'Prospect',
    LeadNote: 'LeadNote',
    SearchJob: 'SearchJob',
    ExportJob: 'ExportJob'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "auditLog" | "systemSetting" | "businessEntity" | "prospect" | "leadNote" | "searchJob" | "exportJob"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
      SystemSetting: {
        payload: Prisma.$SystemSettingPayload<ExtArgs>
        fields: Prisma.SystemSettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemSettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemSettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>
          }
          findFirst: {
            args: Prisma.SystemSettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemSettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>
          }
          findMany: {
            args: Prisma.SystemSettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>[]
          }
          create: {
            args: Prisma.SystemSettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>
          }
          createMany: {
            args: Prisma.SystemSettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SystemSettingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>[]
          }
          delete: {
            args: Prisma.SystemSettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>
          }
          update: {
            args: Prisma.SystemSettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>
          }
          deleteMany: {
            args: Prisma.SystemSettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SystemSettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SystemSettingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>[]
          }
          upsert: {
            args: Prisma.SystemSettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>
          }
          aggregate: {
            args: Prisma.SystemSettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSystemSetting>
          }
          groupBy: {
            args: Prisma.SystemSettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<SystemSettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.SystemSettingCountArgs<ExtArgs>
            result: $Utils.Optional<SystemSettingCountAggregateOutputType> | number
          }
        }
      }
      BusinessEntity: {
        payload: Prisma.$BusinessEntityPayload<ExtArgs>
        fields: Prisma.BusinessEntityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusinessEntityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessEntityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusinessEntityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessEntityPayload>
          }
          findFirst: {
            args: Prisma.BusinessEntityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessEntityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusinessEntityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessEntityPayload>
          }
          findMany: {
            args: Prisma.BusinessEntityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessEntityPayload>[]
          }
          create: {
            args: Prisma.BusinessEntityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessEntityPayload>
          }
          createMany: {
            args: Prisma.BusinessEntityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BusinessEntityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessEntityPayload>[]
          }
          delete: {
            args: Prisma.BusinessEntityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessEntityPayload>
          }
          update: {
            args: Prisma.BusinessEntityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessEntityPayload>
          }
          deleteMany: {
            args: Prisma.BusinessEntityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BusinessEntityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BusinessEntityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessEntityPayload>[]
          }
          upsert: {
            args: Prisma.BusinessEntityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessEntityPayload>
          }
          aggregate: {
            args: Prisma.BusinessEntityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBusinessEntity>
          }
          groupBy: {
            args: Prisma.BusinessEntityGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusinessEntityGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusinessEntityCountArgs<ExtArgs>
            result: $Utils.Optional<BusinessEntityCountAggregateOutputType> | number
          }
        }
      }
      Prospect: {
        payload: Prisma.$ProspectPayload<ExtArgs>
        fields: Prisma.ProspectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProspectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProspectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProspectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProspectPayload>
          }
          findFirst: {
            args: Prisma.ProspectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProspectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProspectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProspectPayload>
          }
          findMany: {
            args: Prisma.ProspectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProspectPayload>[]
          }
          create: {
            args: Prisma.ProspectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProspectPayload>
          }
          createMany: {
            args: Prisma.ProspectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProspectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProspectPayload>[]
          }
          delete: {
            args: Prisma.ProspectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProspectPayload>
          }
          update: {
            args: Prisma.ProspectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProspectPayload>
          }
          deleteMany: {
            args: Prisma.ProspectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProspectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProspectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProspectPayload>[]
          }
          upsert: {
            args: Prisma.ProspectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProspectPayload>
          }
          aggregate: {
            args: Prisma.ProspectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProspect>
          }
          groupBy: {
            args: Prisma.ProspectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProspectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProspectCountArgs<ExtArgs>
            result: $Utils.Optional<ProspectCountAggregateOutputType> | number
          }
        }
      }
      LeadNote: {
        payload: Prisma.$LeadNotePayload<ExtArgs>
        fields: Prisma.LeadNoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeadNoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadNotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeadNoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadNotePayload>
          }
          findFirst: {
            args: Prisma.LeadNoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadNotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeadNoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadNotePayload>
          }
          findMany: {
            args: Prisma.LeadNoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadNotePayload>[]
          }
          create: {
            args: Prisma.LeadNoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadNotePayload>
          }
          createMany: {
            args: Prisma.LeadNoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeadNoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadNotePayload>[]
          }
          delete: {
            args: Prisma.LeadNoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadNotePayload>
          }
          update: {
            args: Prisma.LeadNoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadNotePayload>
          }
          deleteMany: {
            args: Prisma.LeadNoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeadNoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeadNoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadNotePayload>[]
          }
          upsert: {
            args: Prisma.LeadNoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadNotePayload>
          }
          aggregate: {
            args: Prisma.LeadNoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeadNote>
          }
          groupBy: {
            args: Prisma.LeadNoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeadNoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeadNoteCountArgs<ExtArgs>
            result: $Utils.Optional<LeadNoteCountAggregateOutputType> | number
          }
        }
      }
      SearchJob: {
        payload: Prisma.$SearchJobPayload<ExtArgs>
        fields: Prisma.SearchJobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SearchJobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchJobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SearchJobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchJobPayload>
          }
          findFirst: {
            args: Prisma.SearchJobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchJobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SearchJobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchJobPayload>
          }
          findMany: {
            args: Prisma.SearchJobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchJobPayload>[]
          }
          create: {
            args: Prisma.SearchJobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchJobPayload>
          }
          createMany: {
            args: Prisma.SearchJobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SearchJobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchJobPayload>[]
          }
          delete: {
            args: Prisma.SearchJobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchJobPayload>
          }
          update: {
            args: Prisma.SearchJobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchJobPayload>
          }
          deleteMany: {
            args: Prisma.SearchJobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SearchJobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SearchJobUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchJobPayload>[]
          }
          upsert: {
            args: Prisma.SearchJobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchJobPayload>
          }
          aggregate: {
            args: Prisma.SearchJobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSearchJob>
          }
          groupBy: {
            args: Prisma.SearchJobGroupByArgs<ExtArgs>
            result: $Utils.Optional<SearchJobGroupByOutputType>[]
          }
          count: {
            args: Prisma.SearchJobCountArgs<ExtArgs>
            result: $Utils.Optional<SearchJobCountAggregateOutputType> | number
          }
        }
      }
      ExportJob: {
        payload: Prisma.$ExportJobPayload<ExtArgs>
        fields: Prisma.ExportJobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExportJobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportJobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExportJobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportJobPayload>
          }
          findFirst: {
            args: Prisma.ExportJobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportJobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExportJobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportJobPayload>
          }
          findMany: {
            args: Prisma.ExportJobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportJobPayload>[]
          }
          create: {
            args: Prisma.ExportJobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportJobPayload>
          }
          createMany: {
            args: Prisma.ExportJobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExportJobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportJobPayload>[]
          }
          delete: {
            args: Prisma.ExportJobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportJobPayload>
          }
          update: {
            args: Prisma.ExportJobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportJobPayload>
          }
          deleteMany: {
            args: Prisma.ExportJobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExportJobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExportJobUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportJobPayload>[]
          }
          upsert: {
            args: Prisma.ExportJobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportJobPayload>
          }
          aggregate: {
            args: Prisma.ExportJobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExportJob>
          }
          groupBy: {
            args: Prisma.ExportJobGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExportJobGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExportJobCountArgs<ExtArgs>
            result: $Utils.Optional<ExportJobCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    auditLog?: AuditLogOmit
    systemSetting?: SystemSettingOmit
    businessEntity?: BusinessEntityOmit
    prospect?: ProspectOmit
    leadNote?: LeadNoteOmit
    searchJob?: SearchJobOmit
    exportJob?: ExportJobOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    auditLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auditLogs?: boolean | UserCountOutputTypeCountAuditLogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }


  /**
   * Count Type BusinessEntityCountOutputType
   */

  export type BusinessEntityCountOutputType = {
    prospects: number
  }

  export type BusinessEntityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prospects?: boolean | BusinessEntityCountOutputTypeCountProspectsArgs
  }

  // Custom InputTypes
  /**
   * BusinessEntityCountOutputType without action
   */
  export type BusinessEntityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessEntityCountOutputType
     */
    select?: BusinessEntityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BusinessEntityCountOutputType without action
   */
  export type BusinessEntityCountOutputTypeCountProspectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProspectWhereInput
  }


  /**
   * Count Type ProspectCountOutputType
   */

  export type ProspectCountOutputType = {
    leadNotes: number
  }

  export type ProspectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leadNotes?: boolean | ProspectCountOutputTypeCountLeadNotesArgs
  }

  // Custom InputTypes
  /**
   * ProspectCountOutputType without action
   */
  export type ProspectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProspectCountOutputType
     */
    select?: ProspectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProspectCountOutputType without action
   */
  export type ProspectCountOutputTypeCountLeadNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadNoteWhereInput
  }


  /**
   * Count Type SearchJobCountOutputType
   */

  export type SearchJobCountOutputType = {
    prospects: number
  }

  export type SearchJobCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prospects?: boolean | SearchJobCountOutputTypeCountProspectsArgs
  }

  // Custom InputTypes
  /**
   * SearchJobCountOutputType without action
   */
  export type SearchJobCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchJobCountOutputType
     */
    select?: SearchJobCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SearchJobCountOutputType without action
   */
  export type SearchJobCountOutputTypeCountProspectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProspectWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    name: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    name: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    name: number
    role: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.UserRole
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "name" | "role" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      name: string
      role: $Enums.UserRole
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auditLogs<T extends User$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.auditLogs
   */
  export type User$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    action: string | null
    userId: string | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    action: string | null
    userId: string | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    action: number
    userId: number
    details: number
    ipAddress: number
    userAgent: number
    createdAt: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    action?: true
    userId?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    action?: true
    userId?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    action?: true
    userId?: true
    details?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    action: string
    userId: string | null
    details: JsonValue | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    userId?: boolean
    details?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    userId?: boolean
    details?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    userId?: boolean
    details?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    action?: boolean
    userId?: boolean
    details?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "action" | "userId" | "details" | "ipAddress" | "userAgent" | "createdAt", ExtArgs["result"]["auditLog"]>
  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }
  export type AuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }
  export type AuditLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      action: string
      userId: string | null
      details: Prisma.JsonValue | null
      ipAddress: string | null
      userAgent: string | null
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends AuditLog$userArgs<ExtArgs> = {}>(args?: Subset<T, AuditLog$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly userId: FieldRef<"AuditLog", 'String'>
    readonly details: FieldRef<"AuditLog", 'Json'>
    readonly ipAddress: FieldRef<"AuditLog", 'String'>
    readonly userAgent: FieldRef<"AuditLog", 'String'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog.user
   */
  export type AuditLog$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
  }


  /**
   * Model SystemSetting
   */

  export type AggregateSystemSetting = {
    _count: SystemSettingCountAggregateOutputType | null
    _min: SystemSettingMinAggregateOutputType | null
    _max: SystemSettingMaxAggregateOutputType | null
  }

  export type SystemSettingMinAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    description: string | null
    updatedAt: Date | null
  }

  export type SystemSettingMaxAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    description: string | null
    updatedAt: Date | null
  }

  export type SystemSettingCountAggregateOutputType = {
    id: number
    key: number
    value: number
    description: number
    updatedAt: number
    _all: number
  }


  export type SystemSettingMinAggregateInputType = {
    id?: true
    key?: true
    value?: true
    description?: true
    updatedAt?: true
  }

  export type SystemSettingMaxAggregateInputType = {
    id?: true
    key?: true
    value?: true
    description?: true
    updatedAt?: true
  }

  export type SystemSettingCountAggregateInputType = {
    id?: true
    key?: true
    value?: true
    description?: true
    updatedAt?: true
    _all?: true
  }

  export type SystemSettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemSetting to aggregate.
     */
    where?: SystemSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingOrderByWithRelationInput | SystemSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SystemSettings
    **/
    _count?: true | SystemSettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemSettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemSettingMaxAggregateInputType
  }

  export type GetSystemSettingAggregateType<T extends SystemSettingAggregateArgs> = {
        [P in keyof T & keyof AggregateSystemSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystemSetting[P]>
      : GetScalarType<T[P], AggregateSystemSetting[P]>
  }




  export type SystemSettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemSettingWhereInput
    orderBy?: SystemSettingOrderByWithAggregationInput | SystemSettingOrderByWithAggregationInput[]
    by: SystemSettingScalarFieldEnum[] | SystemSettingScalarFieldEnum
    having?: SystemSettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemSettingCountAggregateInputType | true
    _min?: SystemSettingMinAggregateInputType
    _max?: SystemSettingMaxAggregateInputType
  }

  export type SystemSettingGroupByOutputType = {
    id: string
    key: string
    value: string
    description: string | null
    updatedAt: Date
    _count: SystemSettingCountAggregateOutputType | null
    _min: SystemSettingMinAggregateOutputType | null
    _max: SystemSettingMaxAggregateOutputType | null
  }

  type GetSystemSettingGroupByPayload<T extends SystemSettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemSettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemSettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemSettingGroupByOutputType[P]>
            : GetScalarType<T[P], SystemSettingGroupByOutputType[P]>
        }
      >
    >


  export type SystemSettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    description?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["systemSetting"]>

  export type SystemSettingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    description?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["systemSetting"]>

  export type SystemSettingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    description?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["systemSetting"]>

  export type SystemSettingSelectScalar = {
    id?: boolean
    key?: boolean
    value?: boolean
    description?: boolean
    updatedAt?: boolean
  }

  export type SystemSettingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "value" | "description" | "updatedAt", ExtArgs["result"]["systemSetting"]>

  export type $SystemSettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SystemSetting"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      value: string
      description: string | null
      updatedAt: Date
    }, ExtArgs["result"]["systemSetting"]>
    composites: {}
  }

  type SystemSettingGetPayload<S extends boolean | null | undefined | SystemSettingDefaultArgs> = $Result.GetResult<Prisma.$SystemSettingPayload, S>

  type SystemSettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SystemSettingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SystemSettingCountAggregateInputType | true
    }

  export interface SystemSettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SystemSetting'], meta: { name: 'SystemSetting' } }
    /**
     * Find zero or one SystemSetting that matches the filter.
     * @param {SystemSettingFindUniqueArgs} args - Arguments to find a SystemSetting
     * @example
     * // Get one SystemSetting
     * const systemSetting = await prisma.systemSetting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SystemSettingFindUniqueArgs>(args: SelectSubset<T, SystemSettingFindUniqueArgs<ExtArgs>>): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SystemSetting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SystemSettingFindUniqueOrThrowArgs} args - Arguments to find a SystemSetting
     * @example
     * // Get one SystemSetting
     * const systemSetting = await prisma.systemSetting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SystemSettingFindUniqueOrThrowArgs>(args: SelectSubset<T, SystemSettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemSetting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingFindFirstArgs} args - Arguments to find a SystemSetting
     * @example
     * // Get one SystemSetting
     * const systemSetting = await prisma.systemSetting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SystemSettingFindFirstArgs>(args?: SelectSubset<T, SystemSettingFindFirstArgs<ExtArgs>>): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemSetting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingFindFirstOrThrowArgs} args - Arguments to find a SystemSetting
     * @example
     * // Get one SystemSetting
     * const systemSetting = await prisma.systemSetting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SystemSettingFindFirstOrThrowArgs>(args?: SelectSubset<T, SystemSettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SystemSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SystemSettings
     * const systemSettings = await prisma.systemSetting.findMany()
     * 
     * // Get first 10 SystemSettings
     * const systemSettings = await prisma.systemSetting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const systemSettingWithIdOnly = await prisma.systemSetting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SystemSettingFindManyArgs>(args?: SelectSubset<T, SystemSettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SystemSetting.
     * @param {SystemSettingCreateArgs} args - Arguments to create a SystemSetting.
     * @example
     * // Create one SystemSetting
     * const SystemSetting = await prisma.systemSetting.create({
     *   data: {
     *     // ... data to create a SystemSetting
     *   }
     * })
     * 
     */
    create<T extends SystemSettingCreateArgs>(args: SelectSubset<T, SystemSettingCreateArgs<ExtArgs>>): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SystemSettings.
     * @param {SystemSettingCreateManyArgs} args - Arguments to create many SystemSettings.
     * @example
     * // Create many SystemSettings
     * const systemSetting = await prisma.systemSetting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SystemSettingCreateManyArgs>(args?: SelectSubset<T, SystemSettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SystemSettings and returns the data saved in the database.
     * @param {SystemSettingCreateManyAndReturnArgs} args - Arguments to create many SystemSettings.
     * @example
     * // Create many SystemSettings
     * const systemSetting = await prisma.systemSetting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SystemSettings and only return the `id`
     * const systemSettingWithIdOnly = await prisma.systemSetting.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SystemSettingCreateManyAndReturnArgs>(args?: SelectSubset<T, SystemSettingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SystemSetting.
     * @param {SystemSettingDeleteArgs} args - Arguments to delete one SystemSetting.
     * @example
     * // Delete one SystemSetting
     * const SystemSetting = await prisma.systemSetting.delete({
     *   where: {
     *     // ... filter to delete one SystemSetting
     *   }
     * })
     * 
     */
    delete<T extends SystemSettingDeleteArgs>(args: SelectSubset<T, SystemSettingDeleteArgs<ExtArgs>>): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SystemSetting.
     * @param {SystemSettingUpdateArgs} args - Arguments to update one SystemSetting.
     * @example
     * // Update one SystemSetting
     * const systemSetting = await prisma.systemSetting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SystemSettingUpdateArgs>(args: SelectSubset<T, SystemSettingUpdateArgs<ExtArgs>>): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SystemSettings.
     * @param {SystemSettingDeleteManyArgs} args - Arguments to filter SystemSettings to delete.
     * @example
     * // Delete a few SystemSettings
     * const { count } = await prisma.systemSetting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SystemSettingDeleteManyArgs>(args?: SelectSubset<T, SystemSettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SystemSettings
     * const systemSetting = await prisma.systemSetting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SystemSettingUpdateManyArgs>(args: SelectSubset<T, SystemSettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemSettings and returns the data updated in the database.
     * @param {SystemSettingUpdateManyAndReturnArgs} args - Arguments to update many SystemSettings.
     * @example
     * // Update many SystemSettings
     * const systemSetting = await prisma.systemSetting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SystemSettings and only return the `id`
     * const systemSettingWithIdOnly = await prisma.systemSetting.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SystemSettingUpdateManyAndReturnArgs>(args: SelectSubset<T, SystemSettingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SystemSetting.
     * @param {SystemSettingUpsertArgs} args - Arguments to update or create a SystemSetting.
     * @example
     * // Update or create a SystemSetting
     * const systemSetting = await prisma.systemSetting.upsert({
     *   create: {
     *     // ... data to create a SystemSetting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SystemSetting we want to update
     *   }
     * })
     */
    upsert<T extends SystemSettingUpsertArgs>(args: SelectSubset<T, SystemSettingUpsertArgs<ExtArgs>>): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SystemSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingCountArgs} args - Arguments to filter SystemSettings to count.
     * @example
     * // Count the number of SystemSettings
     * const count = await prisma.systemSetting.count({
     *   where: {
     *     // ... the filter for the SystemSettings we want to count
     *   }
     * })
    **/
    count<T extends SystemSettingCountArgs>(
      args?: Subset<T, SystemSettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemSettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SystemSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SystemSettingAggregateArgs>(args: Subset<T, SystemSettingAggregateArgs>): Prisma.PrismaPromise<GetSystemSettingAggregateType<T>>

    /**
     * Group by SystemSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SystemSettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemSettingGroupByArgs['orderBy'] }
        : { orderBy?: SystemSettingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SystemSettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SystemSetting model
   */
  readonly fields: SystemSettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SystemSetting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemSettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SystemSetting model
   */
  interface SystemSettingFieldRefs {
    readonly id: FieldRef<"SystemSetting", 'String'>
    readonly key: FieldRef<"SystemSetting", 'String'>
    readonly value: FieldRef<"SystemSetting", 'String'>
    readonly description: FieldRef<"SystemSetting", 'String'>
    readonly updatedAt: FieldRef<"SystemSetting", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SystemSetting findUnique
   */
  export type SystemSettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSetting
     */
    omit?: SystemSettingOmit<ExtArgs> | null
    /**
     * Filter, which SystemSetting to fetch.
     */
    where: SystemSettingWhereUniqueInput
  }

  /**
   * SystemSetting findUniqueOrThrow
   */
  export type SystemSettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSetting
     */
    omit?: SystemSettingOmit<ExtArgs> | null
    /**
     * Filter, which SystemSetting to fetch.
     */
    where: SystemSettingWhereUniqueInput
  }

  /**
   * SystemSetting findFirst
   */
  export type SystemSettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSetting
     */
    omit?: SystemSettingOmit<ExtArgs> | null
    /**
     * Filter, which SystemSetting to fetch.
     */
    where?: SystemSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingOrderByWithRelationInput | SystemSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemSettings.
     */
    cursor?: SystemSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemSettings.
     */
    distinct?: SystemSettingScalarFieldEnum | SystemSettingScalarFieldEnum[]
  }

  /**
   * SystemSetting findFirstOrThrow
   */
  export type SystemSettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSetting
     */
    omit?: SystemSettingOmit<ExtArgs> | null
    /**
     * Filter, which SystemSetting to fetch.
     */
    where?: SystemSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingOrderByWithRelationInput | SystemSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemSettings.
     */
    cursor?: SystemSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemSettings.
     */
    distinct?: SystemSettingScalarFieldEnum | SystemSettingScalarFieldEnum[]
  }

  /**
   * SystemSetting findMany
   */
  export type SystemSettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSetting
     */
    omit?: SystemSettingOmit<ExtArgs> | null
    /**
     * Filter, which SystemSettings to fetch.
     */
    where?: SystemSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingOrderByWithRelationInput | SystemSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SystemSettings.
     */
    cursor?: SystemSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemSettings.
     */
    distinct?: SystemSettingScalarFieldEnum | SystemSettingScalarFieldEnum[]
  }

  /**
   * SystemSetting create
   */
  export type SystemSettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSetting
     */
    omit?: SystemSettingOmit<ExtArgs> | null
    /**
     * The data needed to create a SystemSetting.
     */
    data: XOR<SystemSettingCreateInput, SystemSettingUncheckedCreateInput>
  }

  /**
   * SystemSetting createMany
   */
  export type SystemSettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SystemSettings.
     */
    data: SystemSettingCreateManyInput | SystemSettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemSetting createManyAndReturn
   */
  export type SystemSettingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSetting
     */
    omit?: SystemSettingOmit<ExtArgs> | null
    /**
     * The data used to create many SystemSettings.
     */
    data: SystemSettingCreateManyInput | SystemSettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemSetting update
   */
  export type SystemSettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSetting
     */
    omit?: SystemSettingOmit<ExtArgs> | null
    /**
     * The data needed to update a SystemSetting.
     */
    data: XOR<SystemSettingUpdateInput, SystemSettingUncheckedUpdateInput>
    /**
     * Choose, which SystemSetting to update.
     */
    where: SystemSettingWhereUniqueInput
  }

  /**
   * SystemSetting updateMany
   */
  export type SystemSettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SystemSettings.
     */
    data: XOR<SystemSettingUpdateManyMutationInput, SystemSettingUncheckedUpdateManyInput>
    /**
     * Filter which SystemSettings to update
     */
    where?: SystemSettingWhereInput
    /**
     * Limit how many SystemSettings to update.
     */
    limit?: number
  }

  /**
   * SystemSetting updateManyAndReturn
   */
  export type SystemSettingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSetting
     */
    omit?: SystemSettingOmit<ExtArgs> | null
    /**
     * The data used to update SystemSettings.
     */
    data: XOR<SystemSettingUpdateManyMutationInput, SystemSettingUncheckedUpdateManyInput>
    /**
     * Filter which SystemSettings to update
     */
    where?: SystemSettingWhereInput
    /**
     * Limit how many SystemSettings to update.
     */
    limit?: number
  }

  /**
   * SystemSetting upsert
   */
  export type SystemSettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSetting
     */
    omit?: SystemSettingOmit<ExtArgs> | null
    /**
     * The filter to search for the SystemSetting to update in case it exists.
     */
    where: SystemSettingWhereUniqueInput
    /**
     * In case the SystemSetting found by the `where` argument doesn't exist, create a new SystemSetting with this data.
     */
    create: XOR<SystemSettingCreateInput, SystemSettingUncheckedCreateInput>
    /**
     * In case the SystemSetting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemSettingUpdateInput, SystemSettingUncheckedUpdateInput>
  }

  /**
   * SystemSetting delete
   */
  export type SystemSettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSetting
     */
    omit?: SystemSettingOmit<ExtArgs> | null
    /**
     * Filter which SystemSetting to delete.
     */
    where: SystemSettingWhereUniqueInput
  }

  /**
   * SystemSetting deleteMany
   */
  export type SystemSettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemSettings to delete
     */
    where?: SystemSettingWhereInput
    /**
     * Limit how many SystemSettings to delete.
     */
    limit?: number
  }

  /**
   * SystemSetting without action
   */
  export type SystemSettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSetting
     */
    omit?: SystemSettingOmit<ExtArgs> | null
  }


  /**
   * Model BusinessEntity
   */

  export type AggregateBusinessEntity = {
    _count: BusinessEntityCountAggregateOutputType | null
    _avg: BusinessEntityAvgAggregateOutputType | null
    _sum: BusinessEntitySumAggregateOutputType | null
    _min: BusinessEntityMinAggregateOutputType | null
    _max: BusinessEntityMaxAggregateOutputType | null
  }

  export type BusinessEntityAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    rating: number | null
    reviewCount: number | null
  }

  export type BusinessEntitySumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    rating: number | null
    reviewCount: number | null
  }

  export type BusinessEntityMinAggregateOutputType = {
    id: string | null
    canonicalName: string | null
    country: string | null
    region: string | null
    city: string | null
    district: string | null
    address: string | null
    latitude: number | null
    longitude: number | null
    primaryCategory: string | null
    businessModel: string | null
    legalEntity: string | null
    phone: string | null
    website: string | null
    rating: number | null
    reviewCount: number | null
    businessStatus: string | null
    dataConfidence: string | null
    createdAt: Date | null
    updatedAt: Date | null
    lastVerifiedAt: Date | null
  }

  export type BusinessEntityMaxAggregateOutputType = {
    id: string | null
    canonicalName: string | null
    country: string | null
    region: string | null
    city: string | null
    district: string | null
    address: string | null
    latitude: number | null
    longitude: number | null
    primaryCategory: string | null
    businessModel: string | null
    legalEntity: string | null
    phone: string | null
    website: string | null
    rating: number | null
    reviewCount: number | null
    businessStatus: string | null
    dataConfidence: string | null
    createdAt: Date | null
    updatedAt: Date | null
    lastVerifiedAt: Date | null
  }

  export type BusinessEntityCountAggregateOutputType = {
    id: number
    canonicalName: number
    providerIds: number
    country: number
    region: number
    city: number
    district: number
    address: number
    latitude: number
    longitude: number
    categories: number
    primaryCategory: number
    businessModel: number
    legalEntity: number
    phone: number
    website: number
    socialLinks: number
    rating: number
    reviewCount: number
    businessStatus: number
    sourceProviders: number
    dataConfidence: number
    createdAt: number
    updatedAt: number
    lastVerifiedAt: number
    _all: number
  }


  export type BusinessEntityAvgAggregateInputType = {
    latitude?: true
    longitude?: true
    rating?: true
    reviewCount?: true
  }

  export type BusinessEntitySumAggregateInputType = {
    latitude?: true
    longitude?: true
    rating?: true
    reviewCount?: true
  }

  export type BusinessEntityMinAggregateInputType = {
    id?: true
    canonicalName?: true
    country?: true
    region?: true
    city?: true
    district?: true
    address?: true
    latitude?: true
    longitude?: true
    primaryCategory?: true
    businessModel?: true
    legalEntity?: true
    phone?: true
    website?: true
    rating?: true
    reviewCount?: true
    businessStatus?: true
    dataConfidence?: true
    createdAt?: true
    updatedAt?: true
    lastVerifiedAt?: true
  }

  export type BusinessEntityMaxAggregateInputType = {
    id?: true
    canonicalName?: true
    country?: true
    region?: true
    city?: true
    district?: true
    address?: true
    latitude?: true
    longitude?: true
    primaryCategory?: true
    businessModel?: true
    legalEntity?: true
    phone?: true
    website?: true
    rating?: true
    reviewCount?: true
    businessStatus?: true
    dataConfidence?: true
    createdAt?: true
    updatedAt?: true
    lastVerifiedAt?: true
  }

  export type BusinessEntityCountAggregateInputType = {
    id?: true
    canonicalName?: true
    providerIds?: true
    country?: true
    region?: true
    city?: true
    district?: true
    address?: true
    latitude?: true
    longitude?: true
    categories?: true
    primaryCategory?: true
    businessModel?: true
    legalEntity?: true
    phone?: true
    website?: true
    socialLinks?: true
    rating?: true
    reviewCount?: true
    businessStatus?: true
    sourceProviders?: true
    dataConfidence?: true
    createdAt?: true
    updatedAt?: true
    lastVerifiedAt?: true
    _all?: true
  }

  export type BusinessEntityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessEntity to aggregate.
     */
    where?: BusinessEntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessEntities to fetch.
     */
    orderBy?: BusinessEntityOrderByWithRelationInput | BusinessEntityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusinessEntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessEntities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessEntities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BusinessEntities
    **/
    _count?: true | BusinessEntityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BusinessEntityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BusinessEntitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusinessEntityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusinessEntityMaxAggregateInputType
  }

  export type GetBusinessEntityAggregateType<T extends BusinessEntityAggregateArgs> = {
        [P in keyof T & keyof AggregateBusinessEntity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusinessEntity[P]>
      : GetScalarType<T[P], AggregateBusinessEntity[P]>
  }




  export type BusinessEntityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessEntityWhereInput
    orderBy?: BusinessEntityOrderByWithAggregationInput | BusinessEntityOrderByWithAggregationInput[]
    by: BusinessEntityScalarFieldEnum[] | BusinessEntityScalarFieldEnum
    having?: BusinessEntityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusinessEntityCountAggregateInputType | true
    _avg?: BusinessEntityAvgAggregateInputType
    _sum?: BusinessEntitySumAggregateInputType
    _min?: BusinessEntityMinAggregateInputType
    _max?: BusinessEntityMaxAggregateInputType
  }

  export type BusinessEntityGroupByOutputType = {
    id: string
    canonicalName: string
    providerIds: JsonValue | null
    country: string | null
    region: string | null
    city: string | null
    district: string | null
    address: string | null
    latitude: number | null
    longitude: number | null
    categories: string[]
    primaryCategory: string | null
    businessModel: string | null
    legalEntity: string | null
    phone: string | null
    website: string | null
    socialLinks: JsonValue | null
    rating: number | null
    reviewCount: number | null
    businessStatus: string | null
    sourceProviders: string[]
    dataConfidence: string | null
    createdAt: Date
    updatedAt: Date
    lastVerifiedAt: Date | null
    _count: BusinessEntityCountAggregateOutputType | null
    _avg: BusinessEntityAvgAggregateOutputType | null
    _sum: BusinessEntitySumAggregateOutputType | null
    _min: BusinessEntityMinAggregateOutputType | null
    _max: BusinessEntityMaxAggregateOutputType | null
  }

  type GetBusinessEntityGroupByPayload<T extends BusinessEntityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusinessEntityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusinessEntityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusinessEntityGroupByOutputType[P]>
            : GetScalarType<T[P], BusinessEntityGroupByOutputType[P]>
        }
      >
    >


  export type BusinessEntitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    canonicalName?: boolean
    providerIds?: boolean
    country?: boolean
    region?: boolean
    city?: boolean
    district?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    categories?: boolean
    primaryCategory?: boolean
    businessModel?: boolean
    legalEntity?: boolean
    phone?: boolean
    website?: boolean
    socialLinks?: boolean
    rating?: boolean
    reviewCount?: boolean
    businessStatus?: boolean
    sourceProviders?: boolean
    dataConfidence?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastVerifiedAt?: boolean
    prospects?: boolean | BusinessEntity$prospectsArgs<ExtArgs>
    _count?: boolean | BusinessEntityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["businessEntity"]>

  export type BusinessEntitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    canonicalName?: boolean
    providerIds?: boolean
    country?: boolean
    region?: boolean
    city?: boolean
    district?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    categories?: boolean
    primaryCategory?: boolean
    businessModel?: boolean
    legalEntity?: boolean
    phone?: boolean
    website?: boolean
    socialLinks?: boolean
    rating?: boolean
    reviewCount?: boolean
    businessStatus?: boolean
    sourceProviders?: boolean
    dataConfidence?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastVerifiedAt?: boolean
  }, ExtArgs["result"]["businessEntity"]>

  export type BusinessEntitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    canonicalName?: boolean
    providerIds?: boolean
    country?: boolean
    region?: boolean
    city?: boolean
    district?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    categories?: boolean
    primaryCategory?: boolean
    businessModel?: boolean
    legalEntity?: boolean
    phone?: boolean
    website?: boolean
    socialLinks?: boolean
    rating?: boolean
    reviewCount?: boolean
    businessStatus?: boolean
    sourceProviders?: boolean
    dataConfidence?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastVerifiedAt?: boolean
  }, ExtArgs["result"]["businessEntity"]>

  export type BusinessEntitySelectScalar = {
    id?: boolean
    canonicalName?: boolean
    providerIds?: boolean
    country?: boolean
    region?: boolean
    city?: boolean
    district?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    categories?: boolean
    primaryCategory?: boolean
    businessModel?: boolean
    legalEntity?: boolean
    phone?: boolean
    website?: boolean
    socialLinks?: boolean
    rating?: boolean
    reviewCount?: boolean
    businessStatus?: boolean
    sourceProviders?: boolean
    dataConfidence?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastVerifiedAt?: boolean
  }

  export type BusinessEntityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "canonicalName" | "providerIds" | "country" | "region" | "city" | "district" | "address" | "latitude" | "longitude" | "categories" | "primaryCategory" | "businessModel" | "legalEntity" | "phone" | "website" | "socialLinks" | "rating" | "reviewCount" | "businessStatus" | "sourceProviders" | "dataConfidence" | "createdAt" | "updatedAt" | "lastVerifiedAt", ExtArgs["result"]["businessEntity"]>
  export type BusinessEntityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prospects?: boolean | BusinessEntity$prospectsArgs<ExtArgs>
    _count?: boolean | BusinessEntityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BusinessEntityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BusinessEntityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BusinessEntityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BusinessEntity"
    objects: {
      prospects: Prisma.$ProspectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      canonicalName: string
      providerIds: Prisma.JsonValue | null
      country: string | null
      region: string | null
      city: string | null
      district: string | null
      address: string | null
      latitude: number | null
      longitude: number | null
      categories: string[]
      primaryCategory: string | null
      businessModel: string | null
      legalEntity: string | null
      phone: string | null
      website: string | null
      socialLinks: Prisma.JsonValue | null
      rating: number | null
      reviewCount: number | null
      businessStatus: string | null
      sourceProviders: string[]
      dataConfidence: string | null
      createdAt: Date
      updatedAt: Date
      lastVerifiedAt: Date | null
    }, ExtArgs["result"]["businessEntity"]>
    composites: {}
  }

  type BusinessEntityGetPayload<S extends boolean | null | undefined | BusinessEntityDefaultArgs> = $Result.GetResult<Prisma.$BusinessEntityPayload, S>

  type BusinessEntityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BusinessEntityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BusinessEntityCountAggregateInputType | true
    }

  export interface BusinessEntityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BusinessEntity'], meta: { name: 'BusinessEntity' } }
    /**
     * Find zero or one BusinessEntity that matches the filter.
     * @param {BusinessEntityFindUniqueArgs} args - Arguments to find a BusinessEntity
     * @example
     * // Get one BusinessEntity
     * const businessEntity = await prisma.businessEntity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BusinessEntityFindUniqueArgs>(args: SelectSubset<T, BusinessEntityFindUniqueArgs<ExtArgs>>): Prisma__BusinessEntityClient<$Result.GetResult<Prisma.$BusinessEntityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BusinessEntity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BusinessEntityFindUniqueOrThrowArgs} args - Arguments to find a BusinessEntity
     * @example
     * // Get one BusinessEntity
     * const businessEntity = await prisma.businessEntity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BusinessEntityFindUniqueOrThrowArgs>(args: SelectSubset<T, BusinessEntityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BusinessEntityClient<$Result.GetResult<Prisma.$BusinessEntityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusinessEntity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessEntityFindFirstArgs} args - Arguments to find a BusinessEntity
     * @example
     * // Get one BusinessEntity
     * const businessEntity = await prisma.businessEntity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BusinessEntityFindFirstArgs>(args?: SelectSubset<T, BusinessEntityFindFirstArgs<ExtArgs>>): Prisma__BusinessEntityClient<$Result.GetResult<Prisma.$BusinessEntityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusinessEntity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessEntityFindFirstOrThrowArgs} args - Arguments to find a BusinessEntity
     * @example
     * // Get one BusinessEntity
     * const businessEntity = await prisma.businessEntity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BusinessEntityFindFirstOrThrowArgs>(args?: SelectSubset<T, BusinessEntityFindFirstOrThrowArgs<ExtArgs>>): Prisma__BusinessEntityClient<$Result.GetResult<Prisma.$BusinessEntityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BusinessEntities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessEntityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BusinessEntities
     * const businessEntities = await prisma.businessEntity.findMany()
     * 
     * // Get first 10 BusinessEntities
     * const businessEntities = await prisma.businessEntity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const businessEntityWithIdOnly = await prisma.businessEntity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BusinessEntityFindManyArgs>(args?: SelectSubset<T, BusinessEntityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessEntityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BusinessEntity.
     * @param {BusinessEntityCreateArgs} args - Arguments to create a BusinessEntity.
     * @example
     * // Create one BusinessEntity
     * const BusinessEntity = await prisma.businessEntity.create({
     *   data: {
     *     // ... data to create a BusinessEntity
     *   }
     * })
     * 
     */
    create<T extends BusinessEntityCreateArgs>(args: SelectSubset<T, BusinessEntityCreateArgs<ExtArgs>>): Prisma__BusinessEntityClient<$Result.GetResult<Prisma.$BusinessEntityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BusinessEntities.
     * @param {BusinessEntityCreateManyArgs} args - Arguments to create many BusinessEntities.
     * @example
     * // Create many BusinessEntities
     * const businessEntity = await prisma.businessEntity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BusinessEntityCreateManyArgs>(args?: SelectSubset<T, BusinessEntityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BusinessEntities and returns the data saved in the database.
     * @param {BusinessEntityCreateManyAndReturnArgs} args - Arguments to create many BusinessEntities.
     * @example
     * // Create many BusinessEntities
     * const businessEntity = await prisma.businessEntity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BusinessEntities and only return the `id`
     * const businessEntityWithIdOnly = await prisma.businessEntity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BusinessEntityCreateManyAndReturnArgs>(args?: SelectSubset<T, BusinessEntityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessEntityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BusinessEntity.
     * @param {BusinessEntityDeleteArgs} args - Arguments to delete one BusinessEntity.
     * @example
     * // Delete one BusinessEntity
     * const BusinessEntity = await prisma.businessEntity.delete({
     *   where: {
     *     // ... filter to delete one BusinessEntity
     *   }
     * })
     * 
     */
    delete<T extends BusinessEntityDeleteArgs>(args: SelectSubset<T, BusinessEntityDeleteArgs<ExtArgs>>): Prisma__BusinessEntityClient<$Result.GetResult<Prisma.$BusinessEntityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BusinessEntity.
     * @param {BusinessEntityUpdateArgs} args - Arguments to update one BusinessEntity.
     * @example
     * // Update one BusinessEntity
     * const businessEntity = await prisma.businessEntity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BusinessEntityUpdateArgs>(args: SelectSubset<T, BusinessEntityUpdateArgs<ExtArgs>>): Prisma__BusinessEntityClient<$Result.GetResult<Prisma.$BusinessEntityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BusinessEntities.
     * @param {BusinessEntityDeleteManyArgs} args - Arguments to filter BusinessEntities to delete.
     * @example
     * // Delete a few BusinessEntities
     * const { count } = await prisma.businessEntity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BusinessEntityDeleteManyArgs>(args?: SelectSubset<T, BusinessEntityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusinessEntities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessEntityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BusinessEntities
     * const businessEntity = await prisma.businessEntity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BusinessEntityUpdateManyArgs>(args: SelectSubset<T, BusinessEntityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusinessEntities and returns the data updated in the database.
     * @param {BusinessEntityUpdateManyAndReturnArgs} args - Arguments to update many BusinessEntities.
     * @example
     * // Update many BusinessEntities
     * const businessEntity = await prisma.businessEntity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BusinessEntities and only return the `id`
     * const businessEntityWithIdOnly = await prisma.businessEntity.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BusinessEntityUpdateManyAndReturnArgs>(args: SelectSubset<T, BusinessEntityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessEntityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BusinessEntity.
     * @param {BusinessEntityUpsertArgs} args - Arguments to update or create a BusinessEntity.
     * @example
     * // Update or create a BusinessEntity
     * const businessEntity = await prisma.businessEntity.upsert({
     *   create: {
     *     // ... data to create a BusinessEntity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BusinessEntity we want to update
     *   }
     * })
     */
    upsert<T extends BusinessEntityUpsertArgs>(args: SelectSubset<T, BusinessEntityUpsertArgs<ExtArgs>>): Prisma__BusinessEntityClient<$Result.GetResult<Prisma.$BusinessEntityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BusinessEntities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessEntityCountArgs} args - Arguments to filter BusinessEntities to count.
     * @example
     * // Count the number of BusinessEntities
     * const count = await prisma.businessEntity.count({
     *   where: {
     *     // ... the filter for the BusinessEntities we want to count
     *   }
     * })
    **/
    count<T extends BusinessEntityCountArgs>(
      args?: Subset<T, BusinessEntityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessEntityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BusinessEntity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessEntityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BusinessEntityAggregateArgs>(args: Subset<T, BusinessEntityAggregateArgs>): Prisma.PrismaPromise<GetBusinessEntityAggregateType<T>>

    /**
     * Group by BusinessEntity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessEntityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BusinessEntityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusinessEntityGroupByArgs['orderBy'] }
        : { orderBy?: BusinessEntityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BusinessEntityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessEntityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BusinessEntity model
   */
  readonly fields: BusinessEntityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BusinessEntity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusinessEntityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prospects<T extends BusinessEntity$prospectsArgs<ExtArgs> = {}>(args?: Subset<T, BusinessEntity$prospectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProspectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BusinessEntity model
   */
  interface BusinessEntityFieldRefs {
    readonly id: FieldRef<"BusinessEntity", 'String'>
    readonly canonicalName: FieldRef<"BusinessEntity", 'String'>
    readonly providerIds: FieldRef<"BusinessEntity", 'Json'>
    readonly country: FieldRef<"BusinessEntity", 'String'>
    readonly region: FieldRef<"BusinessEntity", 'String'>
    readonly city: FieldRef<"BusinessEntity", 'String'>
    readonly district: FieldRef<"BusinessEntity", 'String'>
    readonly address: FieldRef<"BusinessEntity", 'String'>
    readonly latitude: FieldRef<"BusinessEntity", 'Float'>
    readonly longitude: FieldRef<"BusinessEntity", 'Float'>
    readonly categories: FieldRef<"BusinessEntity", 'String[]'>
    readonly primaryCategory: FieldRef<"BusinessEntity", 'String'>
    readonly businessModel: FieldRef<"BusinessEntity", 'String'>
    readonly legalEntity: FieldRef<"BusinessEntity", 'String'>
    readonly phone: FieldRef<"BusinessEntity", 'String'>
    readonly website: FieldRef<"BusinessEntity", 'String'>
    readonly socialLinks: FieldRef<"BusinessEntity", 'Json'>
    readonly rating: FieldRef<"BusinessEntity", 'Float'>
    readonly reviewCount: FieldRef<"BusinessEntity", 'Int'>
    readonly businessStatus: FieldRef<"BusinessEntity", 'String'>
    readonly sourceProviders: FieldRef<"BusinessEntity", 'String[]'>
    readonly dataConfidence: FieldRef<"BusinessEntity", 'String'>
    readonly createdAt: FieldRef<"BusinessEntity", 'DateTime'>
    readonly updatedAt: FieldRef<"BusinessEntity", 'DateTime'>
    readonly lastVerifiedAt: FieldRef<"BusinessEntity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BusinessEntity findUnique
   */
  export type BusinessEntityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessEntity
     */
    select?: BusinessEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessEntity
     */
    omit?: BusinessEntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessEntityInclude<ExtArgs> | null
    /**
     * Filter, which BusinessEntity to fetch.
     */
    where: BusinessEntityWhereUniqueInput
  }

  /**
   * BusinessEntity findUniqueOrThrow
   */
  export type BusinessEntityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessEntity
     */
    select?: BusinessEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessEntity
     */
    omit?: BusinessEntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessEntityInclude<ExtArgs> | null
    /**
     * Filter, which BusinessEntity to fetch.
     */
    where: BusinessEntityWhereUniqueInput
  }

  /**
   * BusinessEntity findFirst
   */
  export type BusinessEntityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessEntity
     */
    select?: BusinessEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessEntity
     */
    omit?: BusinessEntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessEntityInclude<ExtArgs> | null
    /**
     * Filter, which BusinessEntity to fetch.
     */
    where?: BusinessEntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessEntities to fetch.
     */
    orderBy?: BusinessEntityOrderByWithRelationInput | BusinessEntityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessEntities.
     */
    cursor?: BusinessEntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessEntities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessEntities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessEntities.
     */
    distinct?: BusinessEntityScalarFieldEnum | BusinessEntityScalarFieldEnum[]
  }

  /**
   * BusinessEntity findFirstOrThrow
   */
  export type BusinessEntityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessEntity
     */
    select?: BusinessEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessEntity
     */
    omit?: BusinessEntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessEntityInclude<ExtArgs> | null
    /**
     * Filter, which BusinessEntity to fetch.
     */
    where?: BusinessEntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessEntities to fetch.
     */
    orderBy?: BusinessEntityOrderByWithRelationInput | BusinessEntityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessEntities.
     */
    cursor?: BusinessEntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessEntities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessEntities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessEntities.
     */
    distinct?: BusinessEntityScalarFieldEnum | BusinessEntityScalarFieldEnum[]
  }

  /**
   * BusinessEntity findMany
   */
  export type BusinessEntityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessEntity
     */
    select?: BusinessEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessEntity
     */
    omit?: BusinessEntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessEntityInclude<ExtArgs> | null
    /**
     * Filter, which BusinessEntities to fetch.
     */
    where?: BusinessEntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessEntities to fetch.
     */
    orderBy?: BusinessEntityOrderByWithRelationInput | BusinessEntityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BusinessEntities.
     */
    cursor?: BusinessEntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessEntities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessEntities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessEntities.
     */
    distinct?: BusinessEntityScalarFieldEnum | BusinessEntityScalarFieldEnum[]
  }

  /**
   * BusinessEntity create
   */
  export type BusinessEntityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessEntity
     */
    select?: BusinessEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessEntity
     */
    omit?: BusinessEntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessEntityInclude<ExtArgs> | null
    /**
     * The data needed to create a BusinessEntity.
     */
    data: XOR<BusinessEntityCreateInput, BusinessEntityUncheckedCreateInput>
  }

  /**
   * BusinessEntity createMany
   */
  export type BusinessEntityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BusinessEntities.
     */
    data: BusinessEntityCreateManyInput | BusinessEntityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BusinessEntity createManyAndReturn
   */
  export type BusinessEntityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessEntity
     */
    select?: BusinessEntitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessEntity
     */
    omit?: BusinessEntityOmit<ExtArgs> | null
    /**
     * The data used to create many BusinessEntities.
     */
    data: BusinessEntityCreateManyInput | BusinessEntityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BusinessEntity update
   */
  export type BusinessEntityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessEntity
     */
    select?: BusinessEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessEntity
     */
    omit?: BusinessEntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessEntityInclude<ExtArgs> | null
    /**
     * The data needed to update a BusinessEntity.
     */
    data: XOR<BusinessEntityUpdateInput, BusinessEntityUncheckedUpdateInput>
    /**
     * Choose, which BusinessEntity to update.
     */
    where: BusinessEntityWhereUniqueInput
  }

  /**
   * BusinessEntity updateMany
   */
  export type BusinessEntityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BusinessEntities.
     */
    data: XOR<BusinessEntityUpdateManyMutationInput, BusinessEntityUncheckedUpdateManyInput>
    /**
     * Filter which BusinessEntities to update
     */
    where?: BusinessEntityWhereInput
    /**
     * Limit how many BusinessEntities to update.
     */
    limit?: number
  }

  /**
   * BusinessEntity updateManyAndReturn
   */
  export type BusinessEntityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessEntity
     */
    select?: BusinessEntitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessEntity
     */
    omit?: BusinessEntityOmit<ExtArgs> | null
    /**
     * The data used to update BusinessEntities.
     */
    data: XOR<BusinessEntityUpdateManyMutationInput, BusinessEntityUncheckedUpdateManyInput>
    /**
     * Filter which BusinessEntities to update
     */
    where?: BusinessEntityWhereInput
    /**
     * Limit how many BusinessEntities to update.
     */
    limit?: number
  }

  /**
   * BusinessEntity upsert
   */
  export type BusinessEntityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessEntity
     */
    select?: BusinessEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessEntity
     */
    omit?: BusinessEntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessEntityInclude<ExtArgs> | null
    /**
     * The filter to search for the BusinessEntity to update in case it exists.
     */
    where: BusinessEntityWhereUniqueInput
    /**
     * In case the BusinessEntity found by the `where` argument doesn't exist, create a new BusinessEntity with this data.
     */
    create: XOR<BusinessEntityCreateInput, BusinessEntityUncheckedCreateInput>
    /**
     * In case the BusinessEntity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusinessEntityUpdateInput, BusinessEntityUncheckedUpdateInput>
  }

  /**
   * BusinessEntity delete
   */
  export type BusinessEntityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessEntity
     */
    select?: BusinessEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessEntity
     */
    omit?: BusinessEntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessEntityInclude<ExtArgs> | null
    /**
     * Filter which BusinessEntity to delete.
     */
    where: BusinessEntityWhereUniqueInput
  }

  /**
   * BusinessEntity deleteMany
   */
  export type BusinessEntityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessEntities to delete
     */
    where?: BusinessEntityWhereInput
    /**
     * Limit how many BusinessEntities to delete.
     */
    limit?: number
  }

  /**
   * BusinessEntity.prospects
   */
  export type BusinessEntity$prospectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prospect
     */
    select?: ProspectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prospect
     */
    omit?: ProspectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProspectInclude<ExtArgs> | null
    where?: ProspectWhereInput
    orderBy?: ProspectOrderByWithRelationInput | ProspectOrderByWithRelationInput[]
    cursor?: ProspectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProspectScalarFieldEnum | ProspectScalarFieldEnum[]
  }

  /**
   * BusinessEntity without action
   */
  export type BusinessEntityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessEntity
     */
    select?: BusinessEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessEntity
     */
    omit?: BusinessEntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessEntityInclude<ExtArgs> | null
  }


  /**
   * Model Prospect
   */

  export type AggregateProspect = {
    _count: ProspectCountAggregateOutputType | null
    _avg: ProspectAvgAggregateOutputType | null
    _sum: ProspectSumAggregateOutputType | null
    _min: ProspectMinAggregateOutputType | null
    _max: ProspectMaxAggregateOutputType | null
  }

  export type ProspectAvgAggregateOutputType = {
    classificationConfidence: number | null
    businessModelConfidence: number | null
    websiteConfidence: number | null
    latitude: number | null
    longitude: number | null
    rating: number | null
    reviewCount: number | null
    leadScore: number | null
  }

  export type ProspectSumAggregateOutputType = {
    classificationConfidence: number | null
    businessModelConfidence: number | null
    websiteConfidence: number | null
    latitude: number | null
    longitude: number | null
    rating: number | null
    reviewCount: number | null
    leadScore: number | null
  }

  export type ProspectMinAggregateOutputType = {
    id: string | null
    businessEntityId: string | null
    searchJobId: string | null
    sourceType: $Enums.SourceType | null
    businessName: string | null
    classification: string | null
    classificationConfidence: number | null
    businessModel: string | null
    businessModelConfidence: number | null
    websiteStatus: $Enums.WebsiteStatus | null
    websiteUrl: string | null
    websiteConfidence: number | null
    phone: string | null
    country: string | null
    region: string | null
    city: string | null
    address: string | null
    latitude: number | null
    longitude: number | null
    rating: number | null
    reviewCount: number | null
    businessStatus: string | null
    leadScore: number | null
    priority: $Enums.LeadPriority | null
    leadStatus: $Enums.LeadStatus | null
    demoStatus: $Enums.DemoStatus | null
    demoUrl: string | null
    notes: string | null
    assignedTo: string | null
    createdAt: Date | null
    updatedAt: Date | null
    lastVerifiedAt: Date | null
  }

  export type ProspectMaxAggregateOutputType = {
    id: string | null
    businessEntityId: string | null
    searchJobId: string | null
    sourceType: $Enums.SourceType | null
    businessName: string | null
    classification: string | null
    classificationConfidence: number | null
    businessModel: string | null
    businessModelConfidence: number | null
    websiteStatus: $Enums.WebsiteStatus | null
    websiteUrl: string | null
    websiteConfidence: number | null
    phone: string | null
    country: string | null
    region: string | null
    city: string | null
    address: string | null
    latitude: number | null
    longitude: number | null
    rating: number | null
    reviewCount: number | null
    businessStatus: string | null
    leadScore: number | null
    priority: $Enums.LeadPriority | null
    leadStatus: $Enums.LeadStatus | null
    demoStatus: $Enums.DemoStatus | null
    demoUrl: string | null
    notes: string | null
    assignedTo: string | null
    createdAt: Date | null
    updatedAt: Date | null
    lastVerifiedAt: Date | null
  }

  export type ProspectCountAggregateOutputType = {
    id: number
    businessEntityId: number
    searchJobId: number
    sourceType: number
    businessName: number
    classification: number
    classificationConfidence: number
    businessModel: number
    businessModelConfidence: number
    websiteStatus: number
    websiteUrl: number
    websiteConfidence: number
    phone: number
    country: number
    region: number
    city: number
    address: number
    latitude: number
    longitude: number
    rating: number
    reviewCount: number
    businessStatus: number
    leadScore: number
    priority: number
    leadStatus: number
    demoStatus: number
    demoUrl: number
    notes: number
    assignedTo: number
    tags: number
    customFields: number
    createdAt: number
    updatedAt: number
    lastVerifiedAt: number
    _all: number
  }


  export type ProspectAvgAggregateInputType = {
    classificationConfidence?: true
    businessModelConfidence?: true
    websiteConfidence?: true
    latitude?: true
    longitude?: true
    rating?: true
    reviewCount?: true
    leadScore?: true
  }

  export type ProspectSumAggregateInputType = {
    classificationConfidence?: true
    businessModelConfidence?: true
    websiteConfidence?: true
    latitude?: true
    longitude?: true
    rating?: true
    reviewCount?: true
    leadScore?: true
  }

  export type ProspectMinAggregateInputType = {
    id?: true
    businessEntityId?: true
    searchJobId?: true
    sourceType?: true
    businessName?: true
    classification?: true
    classificationConfidence?: true
    businessModel?: true
    businessModelConfidence?: true
    websiteStatus?: true
    websiteUrl?: true
    websiteConfidence?: true
    phone?: true
    country?: true
    region?: true
    city?: true
    address?: true
    latitude?: true
    longitude?: true
    rating?: true
    reviewCount?: true
    businessStatus?: true
    leadScore?: true
    priority?: true
    leadStatus?: true
    demoStatus?: true
    demoUrl?: true
    notes?: true
    assignedTo?: true
    createdAt?: true
    updatedAt?: true
    lastVerifiedAt?: true
  }

  export type ProspectMaxAggregateInputType = {
    id?: true
    businessEntityId?: true
    searchJobId?: true
    sourceType?: true
    businessName?: true
    classification?: true
    classificationConfidence?: true
    businessModel?: true
    businessModelConfidence?: true
    websiteStatus?: true
    websiteUrl?: true
    websiteConfidence?: true
    phone?: true
    country?: true
    region?: true
    city?: true
    address?: true
    latitude?: true
    longitude?: true
    rating?: true
    reviewCount?: true
    businessStatus?: true
    leadScore?: true
    priority?: true
    leadStatus?: true
    demoStatus?: true
    demoUrl?: true
    notes?: true
    assignedTo?: true
    createdAt?: true
    updatedAt?: true
    lastVerifiedAt?: true
  }

  export type ProspectCountAggregateInputType = {
    id?: true
    businessEntityId?: true
    searchJobId?: true
    sourceType?: true
    businessName?: true
    classification?: true
    classificationConfidence?: true
    businessModel?: true
    businessModelConfidence?: true
    websiteStatus?: true
    websiteUrl?: true
    websiteConfidence?: true
    phone?: true
    country?: true
    region?: true
    city?: true
    address?: true
    latitude?: true
    longitude?: true
    rating?: true
    reviewCount?: true
    businessStatus?: true
    leadScore?: true
    priority?: true
    leadStatus?: true
    demoStatus?: true
    demoUrl?: true
    notes?: true
    assignedTo?: true
    tags?: true
    customFields?: true
    createdAt?: true
    updatedAt?: true
    lastVerifiedAt?: true
    _all?: true
  }

  export type ProspectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prospect to aggregate.
     */
    where?: ProspectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prospects to fetch.
     */
    orderBy?: ProspectOrderByWithRelationInput | ProspectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProspectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prospects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prospects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prospects
    **/
    _count?: true | ProspectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProspectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProspectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProspectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProspectMaxAggregateInputType
  }

  export type GetProspectAggregateType<T extends ProspectAggregateArgs> = {
        [P in keyof T & keyof AggregateProspect]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProspect[P]>
      : GetScalarType<T[P], AggregateProspect[P]>
  }




  export type ProspectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProspectWhereInput
    orderBy?: ProspectOrderByWithAggregationInput | ProspectOrderByWithAggregationInput[]
    by: ProspectScalarFieldEnum[] | ProspectScalarFieldEnum
    having?: ProspectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProspectCountAggregateInputType | true
    _avg?: ProspectAvgAggregateInputType
    _sum?: ProspectSumAggregateInputType
    _min?: ProspectMinAggregateInputType
    _max?: ProspectMaxAggregateInputType
  }

  export type ProspectGroupByOutputType = {
    id: string
    businessEntityId: string | null
    searchJobId: string | null
    sourceType: $Enums.SourceType
    businessName: string
    classification: string | null
    classificationConfidence: number | null
    businessModel: string | null
    businessModelConfidence: number | null
    websiteStatus: $Enums.WebsiteStatus
    websiteUrl: string | null
    websiteConfidence: number | null
    phone: string | null
    country: string | null
    region: string | null
    city: string | null
    address: string | null
    latitude: number | null
    longitude: number | null
    rating: number | null
    reviewCount: number | null
    businessStatus: string | null
    leadScore: number | null
    priority: $Enums.LeadPriority | null
    leadStatus: $Enums.LeadStatus
    demoStatus: $Enums.DemoStatus
    demoUrl: string | null
    notes: string | null
    assignedTo: string | null
    tags: string[]
    customFields: JsonValue | null
    createdAt: Date
    updatedAt: Date
    lastVerifiedAt: Date | null
    _count: ProspectCountAggregateOutputType | null
    _avg: ProspectAvgAggregateOutputType | null
    _sum: ProspectSumAggregateOutputType | null
    _min: ProspectMinAggregateOutputType | null
    _max: ProspectMaxAggregateOutputType | null
  }

  type GetProspectGroupByPayload<T extends ProspectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProspectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProspectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProspectGroupByOutputType[P]>
            : GetScalarType<T[P], ProspectGroupByOutputType[P]>
        }
      >
    >


  export type ProspectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessEntityId?: boolean
    searchJobId?: boolean
    sourceType?: boolean
    businessName?: boolean
    classification?: boolean
    classificationConfidence?: boolean
    businessModel?: boolean
    businessModelConfidence?: boolean
    websiteStatus?: boolean
    websiteUrl?: boolean
    websiteConfidence?: boolean
    phone?: boolean
    country?: boolean
    region?: boolean
    city?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    rating?: boolean
    reviewCount?: boolean
    businessStatus?: boolean
    leadScore?: boolean
    priority?: boolean
    leadStatus?: boolean
    demoStatus?: boolean
    demoUrl?: boolean
    notes?: boolean
    assignedTo?: boolean
    tags?: boolean
    customFields?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastVerifiedAt?: boolean
    businessEntity?: boolean | Prospect$businessEntityArgs<ExtArgs>
    searchJob?: boolean | Prospect$searchJobArgs<ExtArgs>
    leadNotes?: boolean | Prospect$leadNotesArgs<ExtArgs>
    _count?: boolean | ProspectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prospect"]>

  export type ProspectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessEntityId?: boolean
    searchJobId?: boolean
    sourceType?: boolean
    businessName?: boolean
    classification?: boolean
    classificationConfidence?: boolean
    businessModel?: boolean
    businessModelConfidence?: boolean
    websiteStatus?: boolean
    websiteUrl?: boolean
    websiteConfidence?: boolean
    phone?: boolean
    country?: boolean
    region?: boolean
    city?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    rating?: boolean
    reviewCount?: boolean
    businessStatus?: boolean
    leadScore?: boolean
    priority?: boolean
    leadStatus?: boolean
    demoStatus?: boolean
    demoUrl?: boolean
    notes?: boolean
    assignedTo?: boolean
    tags?: boolean
    customFields?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastVerifiedAt?: boolean
    businessEntity?: boolean | Prospect$businessEntityArgs<ExtArgs>
    searchJob?: boolean | Prospect$searchJobArgs<ExtArgs>
  }, ExtArgs["result"]["prospect"]>

  export type ProspectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessEntityId?: boolean
    searchJobId?: boolean
    sourceType?: boolean
    businessName?: boolean
    classification?: boolean
    classificationConfidence?: boolean
    businessModel?: boolean
    businessModelConfidence?: boolean
    websiteStatus?: boolean
    websiteUrl?: boolean
    websiteConfidence?: boolean
    phone?: boolean
    country?: boolean
    region?: boolean
    city?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    rating?: boolean
    reviewCount?: boolean
    businessStatus?: boolean
    leadScore?: boolean
    priority?: boolean
    leadStatus?: boolean
    demoStatus?: boolean
    demoUrl?: boolean
    notes?: boolean
    assignedTo?: boolean
    tags?: boolean
    customFields?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastVerifiedAt?: boolean
    businessEntity?: boolean | Prospect$businessEntityArgs<ExtArgs>
    searchJob?: boolean | Prospect$searchJobArgs<ExtArgs>
  }, ExtArgs["result"]["prospect"]>

  export type ProspectSelectScalar = {
    id?: boolean
    businessEntityId?: boolean
    searchJobId?: boolean
    sourceType?: boolean
    businessName?: boolean
    classification?: boolean
    classificationConfidence?: boolean
    businessModel?: boolean
    businessModelConfidence?: boolean
    websiteStatus?: boolean
    websiteUrl?: boolean
    websiteConfidence?: boolean
    phone?: boolean
    country?: boolean
    region?: boolean
    city?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    rating?: boolean
    reviewCount?: boolean
    businessStatus?: boolean
    leadScore?: boolean
    priority?: boolean
    leadStatus?: boolean
    demoStatus?: boolean
    demoUrl?: boolean
    notes?: boolean
    assignedTo?: boolean
    tags?: boolean
    customFields?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastVerifiedAt?: boolean
  }

  export type ProspectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "businessEntityId" | "searchJobId" | "sourceType" | "businessName" | "classification" | "classificationConfidence" | "businessModel" | "businessModelConfidence" | "websiteStatus" | "websiteUrl" | "websiteConfidence" | "phone" | "country" | "region" | "city" | "address" | "latitude" | "longitude" | "rating" | "reviewCount" | "businessStatus" | "leadScore" | "priority" | "leadStatus" | "demoStatus" | "demoUrl" | "notes" | "assignedTo" | "tags" | "customFields" | "createdAt" | "updatedAt" | "lastVerifiedAt", ExtArgs["result"]["prospect"]>
  export type ProspectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    businessEntity?: boolean | Prospect$businessEntityArgs<ExtArgs>
    searchJob?: boolean | Prospect$searchJobArgs<ExtArgs>
    leadNotes?: boolean | Prospect$leadNotesArgs<ExtArgs>
    _count?: boolean | ProspectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProspectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    businessEntity?: boolean | Prospect$businessEntityArgs<ExtArgs>
    searchJob?: boolean | Prospect$searchJobArgs<ExtArgs>
  }
  export type ProspectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    businessEntity?: boolean | Prospect$businessEntityArgs<ExtArgs>
    searchJob?: boolean | Prospect$searchJobArgs<ExtArgs>
  }

  export type $ProspectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prospect"
    objects: {
      businessEntity: Prisma.$BusinessEntityPayload<ExtArgs> | null
      searchJob: Prisma.$SearchJobPayload<ExtArgs> | null
      leadNotes: Prisma.$LeadNotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      businessEntityId: string | null
      searchJobId: string | null
      sourceType: $Enums.SourceType
      businessName: string
      classification: string | null
      classificationConfidence: number | null
      businessModel: string | null
      businessModelConfidence: number | null
      websiteStatus: $Enums.WebsiteStatus
      websiteUrl: string | null
      websiteConfidence: number | null
      phone: string | null
      country: string | null
      region: string | null
      city: string | null
      address: string | null
      latitude: number | null
      longitude: number | null
      rating: number | null
      reviewCount: number | null
      businessStatus: string | null
      leadScore: number | null
      priority: $Enums.LeadPriority | null
      leadStatus: $Enums.LeadStatus
      demoStatus: $Enums.DemoStatus
      demoUrl: string | null
      notes: string | null
      assignedTo: string | null
      tags: string[]
      customFields: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
      lastVerifiedAt: Date | null
    }, ExtArgs["result"]["prospect"]>
    composites: {}
  }

  type ProspectGetPayload<S extends boolean | null | undefined | ProspectDefaultArgs> = $Result.GetResult<Prisma.$ProspectPayload, S>

  type ProspectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProspectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProspectCountAggregateInputType | true
    }

  export interface ProspectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prospect'], meta: { name: 'Prospect' } }
    /**
     * Find zero or one Prospect that matches the filter.
     * @param {ProspectFindUniqueArgs} args - Arguments to find a Prospect
     * @example
     * // Get one Prospect
     * const prospect = await prisma.prospect.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProspectFindUniqueArgs>(args: SelectSubset<T, ProspectFindUniqueArgs<ExtArgs>>): Prisma__ProspectClient<$Result.GetResult<Prisma.$ProspectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prospect that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProspectFindUniqueOrThrowArgs} args - Arguments to find a Prospect
     * @example
     * // Get one Prospect
     * const prospect = await prisma.prospect.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProspectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProspectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProspectClient<$Result.GetResult<Prisma.$ProspectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prospect that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProspectFindFirstArgs} args - Arguments to find a Prospect
     * @example
     * // Get one Prospect
     * const prospect = await prisma.prospect.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProspectFindFirstArgs>(args?: SelectSubset<T, ProspectFindFirstArgs<ExtArgs>>): Prisma__ProspectClient<$Result.GetResult<Prisma.$ProspectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prospect that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProspectFindFirstOrThrowArgs} args - Arguments to find a Prospect
     * @example
     * // Get one Prospect
     * const prospect = await prisma.prospect.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProspectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProspectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProspectClient<$Result.GetResult<Prisma.$ProspectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prospects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProspectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prospects
     * const prospects = await prisma.prospect.findMany()
     * 
     * // Get first 10 Prospects
     * const prospects = await prisma.prospect.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const prospectWithIdOnly = await prisma.prospect.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProspectFindManyArgs>(args?: SelectSubset<T, ProspectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProspectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prospect.
     * @param {ProspectCreateArgs} args - Arguments to create a Prospect.
     * @example
     * // Create one Prospect
     * const Prospect = await prisma.prospect.create({
     *   data: {
     *     // ... data to create a Prospect
     *   }
     * })
     * 
     */
    create<T extends ProspectCreateArgs>(args: SelectSubset<T, ProspectCreateArgs<ExtArgs>>): Prisma__ProspectClient<$Result.GetResult<Prisma.$ProspectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prospects.
     * @param {ProspectCreateManyArgs} args - Arguments to create many Prospects.
     * @example
     * // Create many Prospects
     * const prospect = await prisma.prospect.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProspectCreateManyArgs>(args?: SelectSubset<T, ProspectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prospects and returns the data saved in the database.
     * @param {ProspectCreateManyAndReturnArgs} args - Arguments to create many Prospects.
     * @example
     * // Create many Prospects
     * const prospect = await prisma.prospect.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prospects and only return the `id`
     * const prospectWithIdOnly = await prisma.prospect.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProspectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProspectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProspectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prospect.
     * @param {ProspectDeleteArgs} args - Arguments to delete one Prospect.
     * @example
     * // Delete one Prospect
     * const Prospect = await prisma.prospect.delete({
     *   where: {
     *     // ... filter to delete one Prospect
     *   }
     * })
     * 
     */
    delete<T extends ProspectDeleteArgs>(args: SelectSubset<T, ProspectDeleteArgs<ExtArgs>>): Prisma__ProspectClient<$Result.GetResult<Prisma.$ProspectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prospect.
     * @param {ProspectUpdateArgs} args - Arguments to update one Prospect.
     * @example
     * // Update one Prospect
     * const prospect = await prisma.prospect.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProspectUpdateArgs>(args: SelectSubset<T, ProspectUpdateArgs<ExtArgs>>): Prisma__ProspectClient<$Result.GetResult<Prisma.$ProspectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prospects.
     * @param {ProspectDeleteManyArgs} args - Arguments to filter Prospects to delete.
     * @example
     * // Delete a few Prospects
     * const { count } = await prisma.prospect.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProspectDeleteManyArgs>(args?: SelectSubset<T, ProspectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prospects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProspectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prospects
     * const prospect = await prisma.prospect.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProspectUpdateManyArgs>(args: SelectSubset<T, ProspectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prospects and returns the data updated in the database.
     * @param {ProspectUpdateManyAndReturnArgs} args - Arguments to update many Prospects.
     * @example
     * // Update many Prospects
     * const prospect = await prisma.prospect.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prospects and only return the `id`
     * const prospectWithIdOnly = await prisma.prospect.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProspectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProspectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProspectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prospect.
     * @param {ProspectUpsertArgs} args - Arguments to update or create a Prospect.
     * @example
     * // Update or create a Prospect
     * const prospect = await prisma.prospect.upsert({
     *   create: {
     *     // ... data to create a Prospect
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prospect we want to update
     *   }
     * })
     */
    upsert<T extends ProspectUpsertArgs>(args: SelectSubset<T, ProspectUpsertArgs<ExtArgs>>): Prisma__ProspectClient<$Result.GetResult<Prisma.$ProspectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prospects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProspectCountArgs} args - Arguments to filter Prospects to count.
     * @example
     * // Count the number of Prospects
     * const count = await prisma.prospect.count({
     *   where: {
     *     // ... the filter for the Prospects we want to count
     *   }
     * })
    **/
    count<T extends ProspectCountArgs>(
      args?: Subset<T, ProspectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProspectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prospect.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProspectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProspectAggregateArgs>(args: Subset<T, ProspectAggregateArgs>): Prisma.PrismaPromise<GetProspectAggregateType<T>>

    /**
     * Group by Prospect.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProspectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProspectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProspectGroupByArgs['orderBy'] }
        : { orderBy?: ProspectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProspectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProspectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prospect model
   */
  readonly fields: ProspectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prospect.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProspectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    businessEntity<T extends Prospect$businessEntityArgs<ExtArgs> = {}>(args?: Subset<T, Prospect$businessEntityArgs<ExtArgs>>): Prisma__BusinessEntityClient<$Result.GetResult<Prisma.$BusinessEntityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    searchJob<T extends Prospect$searchJobArgs<ExtArgs> = {}>(args?: Subset<T, Prospect$searchJobArgs<ExtArgs>>): Prisma__SearchJobClient<$Result.GetResult<Prisma.$SearchJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    leadNotes<T extends Prospect$leadNotesArgs<ExtArgs> = {}>(args?: Subset<T, Prospect$leadNotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Prospect model
   */
  interface ProspectFieldRefs {
    readonly id: FieldRef<"Prospect", 'String'>
    readonly businessEntityId: FieldRef<"Prospect", 'String'>
    readonly searchJobId: FieldRef<"Prospect", 'String'>
    readonly sourceType: FieldRef<"Prospect", 'SourceType'>
    readonly businessName: FieldRef<"Prospect", 'String'>
    readonly classification: FieldRef<"Prospect", 'String'>
    readonly classificationConfidence: FieldRef<"Prospect", 'Float'>
    readonly businessModel: FieldRef<"Prospect", 'String'>
    readonly businessModelConfidence: FieldRef<"Prospect", 'Float'>
    readonly websiteStatus: FieldRef<"Prospect", 'WebsiteStatus'>
    readonly websiteUrl: FieldRef<"Prospect", 'String'>
    readonly websiteConfidence: FieldRef<"Prospect", 'Float'>
    readonly phone: FieldRef<"Prospect", 'String'>
    readonly country: FieldRef<"Prospect", 'String'>
    readonly region: FieldRef<"Prospect", 'String'>
    readonly city: FieldRef<"Prospect", 'String'>
    readonly address: FieldRef<"Prospect", 'String'>
    readonly latitude: FieldRef<"Prospect", 'Float'>
    readonly longitude: FieldRef<"Prospect", 'Float'>
    readonly rating: FieldRef<"Prospect", 'Float'>
    readonly reviewCount: FieldRef<"Prospect", 'Int'>
    readonly businessStatus: FieldRef<"Prospect", 'String'>
    readonly leadScore: FieldRef<"Prospect", 'Float'>
    readonly priority: FieldRef<"Prospect", 'LeadPriority'>
    readonly leadStatus: FieldRef<"Prospect", 'LeadStatus'>
    readonly demoStatus: FieldRef<"Prospect", 'DemoStatus'>
    readonly demoUrl: FieldRef<"Prospect", 'String'>
    readonly notes: FieldRef<"Prospect", 'String'>
    readonly assignedTo: FieldRef<"Prospect", 'String'>
    readonly tags: FieldRef<"Prospect", 'String[]'>
    readonly customFields: FieldRef<"Prospect", 'Json'>
    readonly createdAt: FieldRef<"Prospect", 'DateTime'>
    readonly updatedAt: FieldRef<"Prospect", 'DateTime'>
    readonly lastVerifiedAt: FieldRef<"Prospect", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Prospect findUnique
   */
  export type ProspectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prospect
     */
    select?: ProspectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prospect
     */
    omit?: ProspectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProspectInclude<ExtArgs> | null
    /**
     * Filter, which Prospect to fetch.
     */
    where: ProspectWhereUniqueInput
  }

  /**
   * Prospect findUniqueOrThrow
   */
  export type ProspectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prospect
     */
    select?: ProspectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prospect
     */
    omit?: ProspectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProspectInclude<ExtArgs> | null
    /**
     * Filter, which Prospect to fetch.
     */
    where: ProspectWhereUniqueInput
  }

  /**
   * Prospect findFirst
   */
  export type ProspectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prospect
     */
    select?: ProspectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prospect
     */
    omit?: ProspectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProspectInclude<ExtArgs> | null
    /**
     * Filter, which Prospect to fetch.
     */
    where?: ProspectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prospects to fetch.
     */
    orderBy?: ProspectOrderByWithRelationInput | ProspectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prospects.
     */
    cursor?: ProspectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prospects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prospects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prospects.
     */
    distinct?: ProspectScalarFieldEnum | ProspectScalarFieldEnum[]
  }

  /**
   * Prospect findFirstOrThrow
   */
  export type ProspectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prospect
     */
    select?: ProspectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prospect
     */
    omit?: ProspectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProspectInclude<ExtArgs> | null
    /**
     * Filter, which Prospect to fetch.
     */
    where?: ProspectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prospects to fetch.
     */
    orderBy?: ProspectOrderByWithRelationInput | ProspectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prospects.
     */
    cursor?: ProspectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prospects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prospects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prospects.
     */
    distinct?: ProspectScalarFieldEnum | ProspectScalarFieldEnum[]
  }

  /**
   * Prospect findMany
   */
  export type ProspectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prospect
     */
    select?: ProspectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prospect
     */
    omit?: ProspectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProspectInclude<ExtArgs> | null
    /**
     * Filter, which Prospects to fetch.
     */
    where?: ProspectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prospects to fetch.
     */
    orderBy?: ProspectOrderByWithRelationInput | ProspectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prospects.
     */
    cursor?: ProspectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prospects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prospects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prospects.
     */
    distinct?: ProspectScalarFieldEnum | ProspectScalarFieldEnum[]
  }

  /**
   * Prospect create
   */
  export type ProspectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prospect
     */
    select?: ProspectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prospect
     */
    omit?: ProspectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProspectInclude<ExtArgs> | null
    /**
     * The data needed to create a Prospect.
     */
    data: XOR<ProspectCreateInput, ProspectUncheckedCreateInput>
  }

  /**
   * Prospect createMany
   */
  export type ProspectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prospects.
     */
    data: ProspectCreateManyInput | ProspectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prospect createManyAndReturn
   */
  export type ProspectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prospect
     */
    select?: ProspectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prospect
     */
    omit?: ProspectOmit<ExtArgs> | null
    /**
     * The data used to create many Prospects.
     */
    data: ProspectCreateManyInput | ProspectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProspectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prospect update
   */
  export type ProspectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prospect
     */
    select?: ProspectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prospect
     */
    omit?: ProspectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProspectInclude<ExtArgs> | null
    /**
     * The data needed to update a Prospect.
     */
    data: XOR<ProspectUpdateInput, ProspectUncheckedUpdateInput>
    /**
     * Choose, which Prospect to update.
     */
    where: ProspectWhereUniqueInput
  }

  /**
   * Prospect updateMany
   */
  export type ProspectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prospects.
     */
    data: XOR<ProspectUpdateManyMutationInput, ProspectUncheckedUpdateManyInput>
    /**
     * Filter which Prospects to update
     */
    where?: ProspectWhereInput
    /**
     * Limit how many Prospects to update.
     */
    limit?: number
  }

  /**
   * Prospect updateManyAndReturn
   */
  export type ProspectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prospect
     */
    select?: ProspectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prospect
     */
    omit?: ProspectOmit<ExtArgs> | null
    /**
     * The data used to update Prospects.
     */
    data: XOR<ProspectUpdateManyMutationInput, ProspectUncheckedUpdateManyInput>
    /**
     * Filter which Prospects to update
     */
    where?: ProspectWhereInput
    /**
     * Limit how many Prospects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProspectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prospect upsert
   */
  export type ProspectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prospect
     */
    select?: ProspectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prospect
     */
    omit?: ProspectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProspectInclude<ExtArgs> | null
    /**
     * The filter to search for the Prospect to update in case it exists.
     */
    where: ProspectWhereUniqueInput
    /**
     * In case the Prospect found by the `where` argument doesn't exist, create a new Prospect with this data.
     */
    create: XOR<ProspectCreateInput, ProspectUncheckedCreateInput>
    /**
     * In case the Prospect was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProspectUpdateInput, ProspectUncheckedUpdateInput>
  }

  /**
   * Prospect delete
   */
  export type ProspectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prospect
     */
    select?: ProspectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prospect
     */
    omit?: ProspectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProspectInclude<ExtArgs> | null
    /**
     * Filter which Prospect to delete.
     */
    where: ProspectWhereUniqueInput
  }

  /**
   * Prospect deleteMany
   */
  export type ProspectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prospects to delete
     */
    where?: ProspectWhereInput
    /**
     * Limit how many Prospects to delete.
     */
    limit?: number
  }

  /**
   * Prospect.businessEntity
   */
  export type Prospect$businessEntityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessEntity
     */
    select?: BusinessEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessEntity
     */
    omit?: BusinessEntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessEntityInclude<ExtArgs> | null
    where?: BusinessEntityWhereInput
  }

  /**
   * Prospect.searchJob
   */
  export type Prospect$searchJobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchJob
     */
    select?: SearchJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchJob
     */
    omit?: SearchJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchJobInclude<ExtArgs> | null
    where?: SearchJobWhereInput
  }

  /**
   * Prospect.leadNotes
   */
  export type Prospect$leadNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadNote
     */
    select?: LeadNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadNote
     */
    omit?: LeadNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadNoteInclude<ExtArgs> | null
    where?: LeadNoteWhereInput
    orderBy?: LeadNoteOrderByWithRelationInput | LeadNoteOrderByWithRelationInput[]
    cursor?: LeadNoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeadNoteScalarFieldEnum | LeadNoteScalarFieldEnum[]
  }

  /**
   * Prospect without action
   */
  export type ProspectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prospect
     */
    select?: ProspectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prospect
     */
    omit?: ProspectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProspectInclude<ExtArgs> | null
  }


  /**
   * Model LeadNote
   */

  export type AggregateLeadNote = {
    _count: LeadNoteCountAggregateOutputType | null
    _min: LeadNoteMinAggregateOutputType | null
    _max: LeadNoteMaxAggregateOutputType | null
  }

  export type LeadNoteMinAggregateOutputType = {
    id: string | null
    prospectId: string | null
    authorId: string | null
    authorName: string | null
    content: string | null
    createdAt: Date | null
  }

  export type LeadNoteMaxAggregateOutputType = {
    id: string | null
    prospectId: string | null
    authorId: string | null
    authorName: string | null
    content: string | null
    createdAt: Date | null
  }

  export type LeadNoteCountAggregateOutputType = {
    id: number
    prospectId: number
    authorId: number
    authorName: number
    content: number
    createdAt: number
    _all: number
  }


  export type LeadNoteMinAggregateInputType = {
    id?: true
    prospectId?: true
    authorId?: true
    authorName?: true
    content?: true
    createdAt?: true
  }

  export type LeadNoteMaxAggregateInputType = {
    id?: true
    prospectId?: true
    authorId?: true
    authorName?: true
    content?: true
    createdAt?: true
  }

  export type LeadNoteCountAggregateInputType = {
    id?: true
    prospectId?: true
    authorId?: true
    authorName?: true
    content?: true
    createdAt?: true
    _all?: true
  }

  export type LeadNoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeadNote to aggregate.
     */
    where?: LeadNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeadNotes to fetch.
     */
    orderBy?: LeadNoteOrderByWithRelationInput | LeadNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeadNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeadNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeadNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LeadNotes
    **/
    _count?: true | LeadNoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeadNoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeadNoteMaxAggregateInputType
  }

  export type GetLeadNoteAggregateType<T extends LeadNoteAggregateArgs> = {
        [P in keyof T & keyof AggregateLeadNote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeadNote[P]>
      : GetScalarType<T[P], AggregateLeadNote[P]>
  }




  export type LeadNoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadNoteWhereInput
    orderBy?: LeadNoteOrderByWithAggregationInput | LeadNoteOrderByWithAggregationInput[]
    by: LeadNoteScalarFieldEnum[] | LeadNoteScalarFieldEnum
    having?: LeadNoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeadNoteCountAggregateInputType | true
    _min?: LeadNoteMinAggregateInputType
    _max?: LeadNoteMaxAggregateInputType
  }

  export type LeadNoteGroupByOutputType = {
    id: string
    prospectId: string
    authorId: string | null
    authorName: string | null
    content: string
    createdAt: Date
    _count: LeadNoteCountAggregateOutputType | null
    _min: LeadNoteMinAggregateOutputType | null
    _max: LeadNoteMaxAggregateOutputType | null
  }

  type GetLeadNoteGroupByPayload<T extends LeadNoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeadNoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeadNoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeadNoteGroupByOutputType[P]>
            : GetScalarType<T[P], LeadNoteGroupByOutputType[P]>
        }
      >
    >


  export type LeadNoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prospectId?: boolean
    authorId?: boolean
    authorName?: boolean
    content?: boolean
    createdAt?: boolean
    prospect?: boolean | ProspectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leadNote"]>

  export type LeadNoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prospectId?: boolean
    authorId?: boolean
    authorName?: boolean
    content?: boolean
    createdAt?: boolean
    prospect?: boolean | ProspectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leadNote"]>

  export type LeadNoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prospectId?: boolean
    authorId?: boolean
    authorName?: boolean
    content?: boolean
    createdAt?: boolean
    prospect?: boolean | ProspectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leadNote"]>

  export type LeadNoteSelectScalar = {
    id?: boolean
    prospectId?: boolean
    authorId?: boolean
    authorName?: boolean
    content?: boolean
    createdAt?: boolean
  }

  export type LeadNoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "prospectId" | "authorId" | "authorName" | "content" | "createdAt", ExtArgs["result"]["leadNote"]>
  export type LeadNoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prospect?: boolean | ProspectDefaultArgs<ExtArgs>
  }
  export type LeadNoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prospect?: boolean | ProspectDefaultArgs<ExtArgs>
  }
  export type LeadNoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prospect?: boolean | ProspectDefaultArgs<ExtArgs>
  }

  export type $LeadNotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LeadNote"
    objects: {
      prospect: Prisma.$ProspectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      prospectId: string
      authorId: string | null
      authorName: string | null
      content: string
      createdAt: Date
    }, ExtArgs["result"]["leadNote"]>
    composites: {}
  }

  type LeadNoteGetPayload<S extends boolean | null | undefined | LeadNoteDefaultArgs> = $Result.GetResult<Prisma.$LeadNotePayload, S>

  type LeadNoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeadNoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeadNoteCountAggregateInputType | true
    }

  export interface LeadNoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LeadNote'], meta: { name: 'LeadNote' } }
    /**
     * Find zero or one LeadNote that matches the filter.
     * @param {LeadNoteFindUniqueArgs} args - Arguments to find a LeadNote
     * @example
     * // Get one LeadNote
     * const leadNote = await prisma.leadNote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeadNoteFindUniqueArgs>(args: SelectSubset<T, LeadNoteFindUniqueArgs<ExtArgs>>): Prisma__LeadNoteClient<$Result.GetResult<Prisma.$LeadNotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LeadNote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeadNoteFindUniqueOrThrowArgs} args - Arguments to find a LeadNote
     * @example
     * // Get one LeadNote
     * const leadNote = await prisma.leadNote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeadNoteFindUniqueOrThrowArgs>(args: SelectSubset<T, LeadNoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeadNoteClient<$Result.GetResult<Prisma.$LeadNotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeadNote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadNoteFindFirstArgs} args - Arguments to find a LeadNote
     * @example
     * // Get one LeadNote
     * const leadNote = await prisma.leadNote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeadNoteFindFirstArgs>(args?: SelectSubset<T, LeadNoteFindFirstArgs<ExtArgs>>): Prisma__LeadNoteClient<$Result.GetResult<Prisma.$LeadNotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeadNote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadNoteFindFirstOrThrowArgs} args - Arguments to find a LeadNote
     * @example
     * // Get one LeadNote
     * const leadNote = await prisma.leadNote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeadNoteFindFirstOrThrowArgs>(args?: SelectSubset<T, LeadNoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeadNoteClient<$Result.GetResult<Prisma.$LeadNotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LeadNotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadNoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LeadNotes
     * const leadNotes = await prisma.leadNote.findMany()
     * 
     * // Get first 10 LeadNotes
     * const leadNotes = await prisma.leadNote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leadNoteWithIdOnly = await prisma.leadNote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeadNoteFindManyArgs>(args?: SelectSubset<T, LeadNoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LeadNote.
     * @param {LeadNoteCreateArgs} args - Arguments to create a LeadNote.
     * @example
     * // Create one LeadNote
     * const LeadNote = await prisma.leadNote.create({
     *   data: {
     *     // ... data to create a LeadNote
     *   }
     * })
     * 
     */
    create<T extends LeadNoteCreateArgs>(args: SelectSubset<T, LeadNoteCreateArgs<ExtArgs>>): Prisma__LeadNoteClient<$Result.GetResult<Prisma.$LeadNotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LeadNotes.
     * @param {LeadNoteCreateManyArgs} args - Arguments to create many LeadNotes.
     * @example
     * // Create many LeadNotes
     * const leadNote = await prisma.leadNote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeadNoteCreateManyArgs>(args?: SelectSubset<T, LeadNoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LeadNotes and returns the data saved in the database.
     * @param {LeadNoteCreateManyAndReturnArgs} args - Arguments to create many LeadNotes.
     * @example
     * // Create many LeadNotes
     * const leadNote = await prisma.leadNote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LeadNotes and only return the `id`
     * const leadNoteWithIdOnly = await prisma.leadNote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeadNoteCreateManyAndReturnArgs>(args?: SelectSubset<T, LeadNoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadNotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LeadNote.
     * @param {LeadNoteDeleteArgs} args - Arguments to delete one LeadNote.
     * @example
     * // Delete one LeadNote
     * const LeadNote = await prisma.leadNote.delete({
     *   where: {
     *     // ... filter to delete one LeadNote
     *   }
     * })
     * 
     */
    delete<T extends LeadNoteDeleteArgs>(args: SelectSubset<T, LeadNoteDeleteArgs<ExtArgs>>): Prisma__LeadNoteClient<$Result.GetResult<Prisma.$LeadNotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LeadNote.
     * @param {LeadNoteUpdateArgs} args - Arguments to update one LeadNote.
     * @example
     * // Update one LeadNote
     * const leadNote = await prisma.leadNote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeadNoteUpdateArgs>(args: SelectSubset<T, LeadNoteUpdateArgs<ExtArgs>>): Prisma__LeadNoteClient<$Result.GetResult<Prisma.$LeadNotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LeadNotes.
     * @param {LeadNoteDeleteManyArgs} args - Arguments to filter LeadNotes to delete.
     * @example
     * // Delete a few LeadNotes
     * const { count } = await prisma.leadNote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeadNoteDeleteManyArgs>(args?: SelectSubset<T, LeadNoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeadNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadNoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LeadNotes
     * const leadNote = await prisma.leadNote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeadNoteUpdateManyArgs>(args: SelectSubset<T, LeadNoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeadNotes and returns the data updated in the database.
     * @param {LeadNoteUpdateManyAndReturnArgs} args - Arguments to update many LeadNotes.
     * @example
     * // Update many LeadNotes
     * const leadNote = await prisma.leadNote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LeadNotes and only return the `id`
     * const leadNoteWithIdOnly = await prisma.leadNote.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LeadNoteUpdateManyAndReturnArgs>(args: SelectSubset<T, LeadNoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadNotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LeadNote.
     * @param {LeadNoteUpsertArgs} args - Arguments to update or create a LeadNote.
     * @example
     * // Update or create a LeadNote
     * const leadNote = await prisma.leadNote.upsert({
     *   create: {
     *     // ... data to create a LeadNote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LeadNote we want to update
     *   }
     * })
     */
    upsert<T extends LeadNoteUpsertArgs>(args: SelectSubset<T, LeadNoteUpsertArgs<ExtArgs>>): Prisma__LeadNoteClient<$Result.GetResult<Prisma.$LeadNotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LeadNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadNoteCountArgs} args - Arguments to filter LeadNotes to count.
     * @example
     * // Count the number of LeadNotes
     * const count = await prisma.leadNote.count({
     *   where: {
     *     // ... the filter for the LeadNotes we want to count
     *   }
     * })
    **/
    count<T extends LeadNoteCountArgs>(
      args?: Subset<T, LeadNoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeadNoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LeadNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadNoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LeadNoteAggregateArgs>(args: Subset<T, LeadNoteAggregateArgs>): Prisma.PrismaPromise<GetLeadNoteAggregateType<T>>

    /**
     * Group by LeadNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadNoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LeadNoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeadNoteGroupByArgs['orderBy'] }
        : { orderBy?: LeadNoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LeadNoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeadNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LeadNote model
   */
  readonly fields: LeadNoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LeadNote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeadNoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prospect<T extends ProspectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProspectDefaultArgs<ExtArgs>>): Prisma__ProspectClient<$Result.GetResult<Prisma.$ProspectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LeadNote model
   */
  interface LeadNoteFieldRefs {
    readonly id: FieldRef<"LeadNote", 'String'>
    readonly prospectId: FieldRef<"LeadNote", 'String'>
    readonly authorId: FieldRef<"LeadNote", 'String'>
    readonly authorName: FieldRef<"LeadNote", 'String'>
    readonly content: FieldRef<"LeadNote", 'String'>
    readonly createdAt: FieldRef<"LeadNote", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LeadNote findUnique
   */
  export type LeadNoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadNote
     */
    select?: LeadNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadNote
     */
    omit?: LeadNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadNoteInclude<ExtArgs> | null
    /**
     * Filter, which LeadNote to fetch.
     */
    where: LeadNoteWhereUniqueInput
  }

  /**
   * LeadNote findUniqueOrThrow
   */
  export type LeadNoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadNote
     */
    select?: LeadNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadNote
     */
    omit?: LeadNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadNoteInclude<ExtArgs> | null
    /**
     * Filter, which LeadNote to fetch.
     */
    where: LeadNoteWhereUniqueInput
  }

  /**
   * LeadNote findFirst
   */
  export type LeadNoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadNote
     */
    select?: LeadNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadNote
     */
    omit?: LeadNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadNoteInclude<ExtArgs> | null
    /**
     * Filter, which LeadNote to fetch.
     */
    where?: LeadNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeadNotes to fetch.
     */
    orderBy?: LeadNoteOrderByWithRelationInput | LeadNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeadNotes.
     */
    cursor?: LeadNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeadNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeadNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeadNotes.
     */
    distinct?: LeadNoteScalarFieldEnum | LeadNoteScalarFieldEnum[]
  }

  /**
   * LeadNote findFirstOrThrow
   */
  export type LeadNoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadNote
     */
    select?: LeadNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadNote
     */
    omit?: LeadNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadNoteInclude<ExtArgs> | null
    /**
     * Filter, which LeadNote to fetch.
     */
    where?: LeadNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeadNotes to fetch.
     */
    orderBy?: LeadNoteOrderByWithRelationInput | LeadNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeadNotes.
     */
    cursor?: LeadNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeadNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeadNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeadNotes.
     */
    distinct?: LeadNoteScalarFieldEnum | LeadNoteScalarFieldEnum[]
  }

  /**
   * LeadNote findMany
   */
  export type LeadNoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadNote
     */
    select?: LeadNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadNote
     */
    omit?: LeadNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadNoteInclude<ExtArgs> | null
    /**
     * Filter, which LeadNotes to fetch.
     */
    where?: LeadNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeadNotes to fetch.
     */
    orderBy?: LeadNoteOrderByWithRelationInput | LeadNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LeadNotes.
     */
    cursor?: LeadNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeadNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeadNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeadNotes.
     */
    distinct?: LeadNoteScalarFieldEnum | LeadNoteScalarFieldEnum[]
  }

  /**
   * LeadNote create
   */
  export type LeadNoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadNote
     */
    select?: LeadNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadNote
     */
    omit?: LeadNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadNoteInclude<ExtArgs> | null
    /**
     * The data needed to create a LeadNote.
     */
    data: XOR<LeadNoteCreateInput, LeadNoteUncheckedCreateInput>
  }

  /**
   * LeadNote createMany
   */
  export type LeadNoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LeadNotes.
     */
    data: LeadNoteCreateManyInput | LeadNoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LeadNote createManyAndReturn
   */
  export type LeadNoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadNote
     */
    select?: LeadNoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeadNote
     */
    omit?: LeadNoteOmit<ExtArgs> | null
    /**
     * The data used to create many LeadNotes.
     */
    data: LeadNoteCreateManyInput | LeadNoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadNoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeadNote update
   */
  export type LeadNoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadNote
     */
    select?: LeadNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadNote
     */
    omit?: LeadNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadNoteInclude<ExtArgs> | null
    /**
     * The data needed to update a LeadNote.
     */
    data: XOR<LeadNoteUpdateInput, LeadNoteUncheckedUpdateInput>
    /**
     * Choose, which LeadNote to update.
     */
    where: LeadNoteWhereUniqueInput
  }

  /**
   * LeadNote updateMany
   */
  export type LeadNoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LeadNotes.
     */
    data: XOR<LeadNoteUpdateManyMutationInput, LeadNoteUncheckedUpdateManyInput>
    /**
     * Filter which LeadNotes to update
     */
    where?: LeadNoteWhereInput
    /**
     * Limit how many LeadNotes to update.
     */
    limit?: number
  }

  /**
   * LeadNote updateManyAndReturn
   */
  export type LeadNoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadNote
     */
    select?: LeadNoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeadNote
     */
    omit?: LeadNoteOmit<ExtArgs> | null
    /**
     * The data used to update LeadNotes.
     */
    data: XOR<LeadNoteUpdateManyMutationInput, LeadNoteUncheckedUpdateManyInput>
    /**
     * Filter which LeadNotes to update
     */
    where?: LeadNoteWhereInput
    /**
     * Limit how many LeadNotes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadNoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeadNote upsert
   */
  export type LeadNoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadNote
     */
    select?: LeadNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadNote
     */
    omit?: LeadNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadNoteInclude<ExtArgs> | null
    /**
     * The filter to search for the LeadNote to update in case it exists.
     */
    where: LeadNoteWhereUniqueInput
    /**
     * In case the LeadNote found by the `where` argument doesn't exist, create a new LeadNote with this data.
     */
    create: XOR<LeadNoteCreateInput, LeadNoteUncheckedCreateInput>
    /**
     * In case the LeadNote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeadNoteUpdateInput, LeadNoteUncheckedUpdateInput>
  }

  /**
   * LeadNote delete
   */
  export type LeadNoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadNote
     */
    select?: LeadNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadNote
     */
    omit?: LeadNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadNoteInclude<ExtArgs> | null
    /**
     * Filter which LeadNote to delete.
     */
    where: LeadNoteWhereUniqueInput
  }

  /**
   * LeadNote deleteMany
   */
  export type LeadNoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeadNotes to delete
     */
    where?: LeadNoteWhereInput
    /**
     * Limit how many LeadNotes to delete.
     */
    limit?: number
  }

  /**
   * LeadNote without action
   */
  export type LeadNoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadNote
     */
    select?: LeadNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadNote
     */
    omit?: LeadNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadNoteInclude<ExtArgs> | null
  }


  /**
   * Model SearchJob
   */

  export type AggregateSearchJob = {
    _count: SearchJobCountAggregateOutputType | null
    _avg: SearchJobAvgAggregateOutputType | null
    _sum: SearchJobSumAggregateOutputType | null
    _min: SearchJobMinAggregateOutputType | null
    _max: SearchJobMaxAggregateOutputType | null
  }

  export type SearchJobAvgAggregateOutputType = {
    progress: number | null
    totalTasks: number | null
    completedTasks: number | null
    failedTasks: number | null
    resultCount: number | null
    duplicateCount: number | null
    websiteListedCount: number | null
    websiteOpportunityCount: number | null
  }

  export type SearchJobSumAggregateOutputType = {
    progress: number | null
    totalTasks: number | null
    completedTasks: number | null
    failedTasks: number | null
    resultCount: number | null
    duplicateCount: number | null
    websiteListedCount: number | null
    websiteOpportunityCount: number | null
  }

  export type SearchJobMinAggregateOutputType = {
    id: string | null
    name: string | null
    country: string | null
    region: string | null
    city: string | null
    district: string | null
    category: string | null
    keywords: string | null
    query: string | null
    scope: string | null
    provider: string | null
    status: $Enums.JobStatus | null
    progress: number | null
    totalTasks: number | null
    completedTasks: number | null
    failedTasks: number | null
    resultCount: number | null
    duplicateCount: number | null
    websiteListedCount: number | null
    websiteOpportunityCount: number | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
    error: string | null
  }

  export type SearchJobMaxAggregateOutputType = {
    id: string | null
    name: string | null
    country: string | null
    region: string | null
    city: string | null
    district: string | null
    category: string | null
    keywords: string | null
    query: string | null
    scope: string | null
    provider: string | null
    status: $Enums.JobStatus | null
    progress: number | null
    totalTasks: number | null
    completedTasks: number | null
    failedTasks: number | null
    resultCount: number | null
    duplicateCount: number | null
    websiteListedCount: number | null
    websiteOpportunityCount: number | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
    error: string | null
  }

  export type SearchJobCountAggregateOutputType = {
    id: number
    name: number
    country: number
    region: number
    city: number
    district: number
    category: number
    keywords: number
    query: number
    scope: number
    provider: number
    status: number
    progress: number
    totalTasks: number
    completedTasks: number
    failedTasks: number
    resultCount: number
    duplicateCount: number
    websiteListedCount: number
    websiteOpportunityCount: number
    startedAt: number
    completedAt: number
    createdAt: number
    error: number
    _all: number
  }


  export type SearchJobAvgAggregateInputType = {
    progress?: true
    totalTasks?: true
    completedTasks?: true
    failedTasks?: true
    resultCount?: true
    duplicateCount?: true
    websiteListedCount?: true
    websiteOpportunityCount?: true
  }

  export type SearchJobSumAggregateInputType = {
    progress?: true
    totalTasks?: true
    completedTasks?: true
    failedTasks?: true
    resultCount?: true
    duplicateCount?: true
    websiteListedCount?: true
    websiteOpportunityCount?: true
  }

  export type SearchJobMinAggregateInputType = {
    id?: true
    name?: true
    country?: true
    region?: true
    city?: true
    district?: true
    category?: true
    keywords?: true
    query?: true
    scope?: true
    provider?: true
    status?: true
    progress?: true
    totalTasks?: true
    completedTasks?: true
    failedTasks?: true
    resultCount?: true
    duplicateCount?: true
    websiteListedCount?: true
    websiteOpportunityCount?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    error?: true
  }

  export type SearchJobMaxAggregateInputType = {
    id?: true
    name?: true
    country?: true
    region?: true
    city?: true
    district?: true
    category?: true
    keywords?: true
    query?: true
    scope?: true
    provider?: true
    status?: true
    progress?: true
    totalTasks?: true
    completedTasks?: true
    failedTasks?: true
    resultCount?: true
    duplicateCount?: true
    websiteListedCount?: true
    websiteOpportunityCount?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    error?: true
  }

  export type SearchJobCountAggregateInputType = {
    id?: true
    name?: true
    country?: true
    region?: true
    city?: true
    district?: true
    category?: true
    keywords?: true
    query?: true
    scope?: true
    provider?: true
    status?: true
    progress?: true
    totalTasks?: true
    completedTasks?: true
    failedTasks?: true
    resultCount?: true
    duplicateCount?: true
    websiteListedCount?: true
    websiteOpportunityCount?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    error?: true
    _all?: true
  }

  export type SearchJobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SearchJob to aggregate.
     */
    where?: SearchJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchJobs to fetch.
     */
    orderBy?: SearchJobOrderByWithRelationInput | SearchJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SearchJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SearchJobs
    **/
    _count?: true | SearchJobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SearchJobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SearchJobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SearchJobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SearchJobMaxAggregateInputType
  }

  export type GetSearchJobAggregateType<T extends SearchJobAggregateArgs> = {
        [P in keyof T & keyof AggregateSearchJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSearchJob[P]>
      : GetScalarType<T[P], AggregateSearchJob[P]>
  }




  export type SearchJobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SearchJobWhereInput
    orderBy?: SearchJobOrderByWithAggregationInput | SearchJobOrderByWithAggregationInput[]
    by: SearchJobScalarFieldEnum[] | SearchJobScalarFieldEnum
    having?: SearchJobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SearchJobCountAggregateInputType | true
    _avg?: SearchJobAvgAggregateInputType
    _sum?: SearchJobSumAggregateInputType
    _min?: SearchJobMinAggregateInputType
    _max?: SearchJobMaxAggregateInputType
  }

  export type SearchJobGroupByOutputType = {
    id: string
    name: string
    country: string | null
    region: string | null
    city: string | null
    district: string | null
    category: string | null
    keywords: string | null
    query: string | null
    scope: string | null
    provider: string | null
    status: $Enums.JobStatus
    progress: number
    totalTasks: number
    completedTasks: number
    failedTasks: number
    resultCount: number
    duplicateCount: number
    websiteListedCount: number
    websiteOpportunityCount: number
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date
    error: string | null
    _count: SearchJobCountAggregateOutputType | null
    _avg: SearchJobAvgAggregateOutputType | null
    _sum: SearchJobSumAggregateOutputType | null
    _min: SearchJobMinAggregateOutputType | null
    _max: SearchJobMaxAggregateOutputType | null
  }

  type GetSearchJobGroupByPayload<T extends SearchJobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SearchJobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SearchJobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SearchJobGroupByOutputType[P]>
            : GetScalarType<T[P], SearchJobGroupByOutputType[P]>
        }
      >
    >


  export type SearchJobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    country?: boolean
    region?: boolean
    city?: boolean
    district?: boolean
    category?: boolean
    keywords?: boolean
    query?: boolean
    scope?: boolean
    provider?: boolean
    status?: boolean
    progress?: boolean
    totalTasks?: boolean
    completedTasks?: boolean
    failedTasks?: boolean
    resultCount?: boolean
    duplicateCount?: boolean
    websiteListedCount?: boolean
    websiteOpportunityCount?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    error?: boolean
    prospects?: boolean | SearchJob$prospectsArgs<ExtArgs>
    _count?: boolean | SearchJobCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["searchJob"]>

  export type SearchJobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    country?: boolean
    region?: boolean
    city?: boolean
    district?: boolean
    category?: boolean
    keywords?: boolean
    query?: boolean
    scope?: boolean
    provider?: boolean
    status?: boolean
    progress?: boolean
    totalTasks?: boolean
    completedTasks?: boolean
    failedTasks?: boolean
    resultCount?: boolean
    duplicateCount?: boolean
    websiteListedCount?: boolean
    websiteOpportunityCount?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    error?: boolean
  }, ExtArgs["result"]["searchJob"]>

  export type SearchJobSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    country?: boolean
    region?: boolean
    city?: boolean
    district?: boolean
    category?: boolean
    keywords?: boolean
    query?: boolean
    scope?: boolean
    provider?: boolean
    status?: boolean
    progress?: boolean
    totalTasks?: boolean
    completedTasks?: boolean
    failedTasks?: boolean
    resultCount?: boolean
    duplicateCount?: boolean
    websiteListedCount?: boolean
    websiteOpportunityCount?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    error?: boolean
  }, ExtArgs["result"]["searchJob"]>

  export type SearchJobSelectScalar = {
    id?: boolean
    name?: boolean
    country?: boolean
    region?: boolean
    city?: boolean
    district?: boolean
    category?: boolean
    keywords?: boolean
    query?: boolean
    scope?: boolean
    provider?: boolean
    status?: boolean
    progress?: boolean
    totalTasks?: boolean
    completedTasks?: boolean
    failedTasks?: boolean
    resultCount?: boolean
    duplicateCount?: boolean
    websiteListedCount?: boolean
    websiteOpportunityCount?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    error?: boolean
  }

  export type SearchJobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "country" | "region" | "city" | "district" | "category" | "keywords" | "query" | "scope" | "provider" | "status" | "progress" | "totalTasks" | "completedTasks" | "failedTasks" | "resultCount" | "duplicateCount" | "websiteListedCount" | "websiteOpportunityCount" | "startedAt" | "completedAt" | "createdAt" | "error", ExtArgs["result"]["searchJob"]>
  export type SearchJobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prospects?: boolean | SearchJob$prospectsArgs<ExtArgs>
    _count?: boolean | SearchJobCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SearchJobIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SearchJobIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SearchJobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SearchJob"
    objects: {
      prospects: Prisma.$ProspectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      country: string | null
      region: string | null
      city: string | null
      district: string | null
      category: string | null
      keywords: string | null
      query: string | null
      scope: string | null
      provider: string | null
      status: $Enums.JobStatus
      progress: number
      totalTasks: number
      completedTasks: number
      failedTasks: number
      resultCount: number
      duplicateCount: number
      websiteListedCount: number
      websiteOpportunityCount: number
      startedAt: Date | null
      completedAt: Date | null
      createdAt: Date
      error: string | null
    }, ExtArgs["result"]["searchJob"]>
    composites: {}
  }

  type SearchJobGetPayload<S extends boolean | null | undefined | SearchJobDefaultArgs> = $Result.GetResult<Prisma.$SearchJobPayload, S>

  type SearchJobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SearchJobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SearchJobCountAggregateInputType | true
    }

  export interface SearchJobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SearchJob'], meta: { name: 'SearchJob' } }
    /**
     * Find zero or one SearchJob that matches the filter.
     * @param {SearchJobFindUniqueArgs} args - Arguments to find a SearchJob
     * @example
     * // Get one SearchJob
     * const searchJob = await prisma.searchJob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SearchJobFindUniqueArgs>(args: SelectSubset<T, SearchJobFindUniqueArgs<ExtArgs>>): Prisma__SearchJobClient<$Result.GetResult<Prisma.$SearchJobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SearchJob that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SearchJobFindUniqueOrThrowArgs} args - Arguments to find a SearchJob
     * @example
     * // Get one SearchJob
     * const searchJob = await prisma.searchJob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SearchJobFindUniqueOrThrowArgs>(args: SelectSubset<T, SearchJobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SearchJobClient<$Result.GetResult<Prisma.$SearchJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SearchJob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchJobFindFirstArgs} args - Arguments to find a SearchJob
     * @example
     * // Get one SearchJob
     * const searchJob = await prisma.searchJob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SearchJobFindFirstArgs>(args?: SelectSubset<T, SearchJobFindFirstArgs<ExtArgs>>): Prisma__SearchJobClient<$Result.GetResult<Prisma.$SearchJobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SearchJob that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchJobFindFirstOrThrowArgs} args - Arguments to find a SearchJob
     * @example
     * // Get one SearchJob
     * const searchJob = await prisma.searchJob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SearchJobFindFirstOrThrowArgs>(args?: SelectSubset<T, SearchJobFindFirstOrThrowArgs<ExtArgs>>): Prisma__SearchJobClient<$Result.GetResult<Prisma.$SearchJobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SearchJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchJobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SearchJobs
     * const searchJobs = await prisma.searchJob.findMany()
     * 
     * // Get first 10 SearchJobs
     * const searchJobs = await prisma.searchJob.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const searchJobWithIdOnly = await prisma.searchJob.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SearchJobFindManyArgs>(args?: SelectSubset<T, SearchJobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SearchJob.
     * @param {SearchJobCreateArgs} args - Arguments to create a SearchJob.
     * @example
     * // Create one SearchJob
     * const SearchJob = await prisma.searchJob.create({
     *   data: {
     *     // ... data to create a SearchJob
     *   }
     * })
     * 
     */
    create<T extends SearchJobCreateArgs>(args: SelectSubset<T, SearchJobCreateArgs<ExtArgs>>): Prisma__SearchJobClient<$Result.GetResult<Prisma.$SearchJobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SearchJobs.
     * @param {SearchJobCreateManyArgs} args - Arguments to create many SearchJobs.
     * @example
     * // Create many SearchJobs
     * const searchJob = await prisma.searchJob.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SearchJobCreateManyArgs>(args?: SelectSubset<T, SearchJobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SearchJobs and returns the data saved in the database.
     * @param {SearchJobCreateManyAndReturnArgs} args - Arguments to create many SearchJobs.
     * @example
     * // Create many SearchJobs
     * const searchJob = await prisma.searchJob.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SearchJobs and only return the `id`
     * const searchJobWithIdOnly = await prisma.searchJob.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SearchJobCreateManyAndReturnArgs>(args?: SelectSubset<T, SearchJobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchJobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SearchJob.
     * @param {SearchJobDeleteArgs} args - Arguments to delete one SearchJob.
     * @example
     * // Delete one SearchJob
     * const SearchJob = await prisma.searchJob.delete({
     *   where: {
     *     // ... filter to delete one SearchJob
     *   }
     * })
     * 
     */
    delete<T extends SearchJobDeleteArgs>(args: SelectSubset<T, SearchJobDeleteArgs<ExtArgs>>): Prisma__SearchJobClient<$Result.GetResult<Prisma.$SearchJobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SearchJob.
     * @param {SearchJobUpdateArgs} args - Arguments to update one SearchJob.
     * @example
     * // Update one SearchJob
     * const searchJob = await prisma.searchJob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SearchJobUpdateArgs>(args: SelectSubset<T, SearchJobUpdateArgs<ExtArgs>>): Prisma__SearchJobClient<$Result.GetResult<Prisma.$SearchJobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SearchJobs.
     * @param {SearchJobDeleteManyArgs} args - Arguments to filter SearchJobs to delete.
     * @example
     * // Delete a few SearchJobs
     * const { count } = await prisma.searchJob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SearchJobDeleteManyArgs>(args?: SelectSubset<T, SearchJobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SearchJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchJobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SearchJobs
     * const searchJob = await prisma.searchJob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SearchJobUpdateManyArgs>(args: SelectSubset<T, SearchJobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SearchJobs and returns the data updated in the database.
     * @param {SearchJobUpdateManyAndReturnArgs} args - Arguments to update many SearchJobs.
     * @example
     * // Update many SearchJobs
     * const searchJob = await prisma.searchJob.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SearchJobs and only return the `id`
     * const searchJobWithIdOnly = await prisma.searchJob.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SearchJobUpdateManyAndReturnArgs>(args: SelectSubset<T, SearchJobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchJobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SearchJob.
     * @param {SearchJobUpsertArgs} args - Arguments to update or create a SearchJob.
     * @example
     * // Update or create a SearchJob
     * const searchJob = await prisma.searchJob.upsert({
     *   create: {
     *     // ... data to create a SearchJob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SearchJob we want to update
     *   }
     * })
     */
    upsert<T extends SearchJobUpsertArgs>(args: SelectSubset<T, SearchJobUpsertArgs<ExtArgs>>): Prisma__SearchJobClient<$Result.GetResult<Prisma.$SearchJobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SearchJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchJobCountArgs} args - Arguments to filter SearchJobs to count.
     * @example
     * // Count the number of SearchJobs
     * const count = await prisma.searchJob.count({
     *   where: {
     *     // ... the filter for the SearchJobs we want to count
     *   }
     * })
    **/
    count<T extends SearchJobCountArgs>(
      args?: Subset<T, SearchJobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SearchJobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SearchJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchJobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SearchJobAggregateArgs>(args: Subset<T, SearchJobAggregateArgs>): Prisma.PrismaPromise<GetSearchJobAggregateType<T>>

    /**
     * Group by SearchJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchJobGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SearchJobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SearchJobGroupByArgs['orderBy'] }
        : { orderBy?: SearchJobGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SearchJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSearchJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SearchJob model
   */
  readonly fields: SearchJobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SearchJob.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SearchJobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prospects<T extends SearchJob$prospectsArgs<ExtArgs> = {}>(args?: Subset<T, SearchJob$prospectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProspectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SearchJob model
   */
  interface SearchJobFieldRefs {
    readonly id: FieldRef<"SearchJob", 'String'>
    readonly name: FieldRef<"SearchJob", 'String'>
    readonly country: FieldRef<"SearchJob", 'String'>
    readonly region: FieldRef<"SearchJob", 'String'>
    readonly city: FieldRef<"SearchJob", 'String'>
    readonly district: FieldRef<"SearchJob", 'String'>
    readonly category: FieldRef<"SearchJob", 'String'>
    readonly keywords: FieldRef<"SearchJob", 'String'>
    readonly query: FieldRef<"SearchJob", 'String'>
    readonly scope: FieldRef<"SearchJob", 'String'>
    readonly provider: FieldRef<"SearchJob", 'String'>
    readonly status: FieldRef<"SearchJob", 'JobStatus'>
    readonly progress: FieldRef<"SearchJob", 'Float'>
    readonly totalTasks: FieldRef<"SearchJob", 'Int'>
    readonly completedTasks: FieldRef<"SearchJob", 'Int'>
    readonly failedTasks: FieldRef<"SearchJob", 'Int'>
    readonly resultCount: FieldRef<"SearchJob", 'Int'>
    readonly duplicateCount: FieldRef<"SearchJob", 'Int'>
    readonly websiteListedCount: FieldRef<"SearchJob", 'Int'>
    readonly websiteOpportunityCount: FieldRef<"SearchJob", 'Int'>
    readonly startedAt: FieldRef<"SearchJob", 'DateTime'>
    readonly completedAt: FieldRef<"SearchJob", 'DateTime'>
    readonly createdAt: FieldRef<"SearchJob", 'DateTime'>
    readonly error: FieldRef<"SearchJob", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SearchJob findUnique
   */
  export type SearchJobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchJob
     */
    select?: SearchJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchJob
     */
    omit?: SearchJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchJobInclude<ExtArgs> | null
    /**
     * Filter, which SearchJob to fetch.
     */
    where: SearchJobWhereUniqueInput
  }

  /**
   * SearchJob findUniqueOrThrow
   */
  export type SearchJobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchJob
     */
    select?: SearchJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchJob
     */
    omit?: SearchJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchJobInclude<ExtArgs> | null
    /**
     * Filter, which SearchJob to fetch.
     */
    where: SearchJobWhereUniqueInput
  }

  /**
   * SearchJob findFirst
   */
  export type SearchJobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchJob
     */
    select?: SearchJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchJob
     */
    omit?: SearchJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchJobInclude<ExtArgs> | null
    /**
     * Filter, which SearchJob to fetch.
     */
    where?: SearchJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchJobs to fetch.
     */
    orderBy?: SearchJobOrderByWithRelationInput | SearchJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SearchJobs.
     */
    cursor?: SearchJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SearchJobs.
     */
    distinct?: SearchJobScalarFieldEnum | SearchJobScalarFieldEnum[]
  }

  /**
   * SearchJob findFirstOrThrow
   */
  export type SearchJobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchJob
     */
    select?: SearchJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchJob
     */
    omit?: SearchJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchJobInclude<ExtArgs> | null
    /**
     * Filter, which SearchJob to fetch.
     */
    where?: SearchJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchJobs to fetch.
     */
    orderBy?: SearchJobOrderByWithRelationInput | SearchJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SearchJobs.
     */
    cursor?: SearchJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SearchJobs.
     */
    distinct?: SearchJobScalarFieldEnum | SearchJobScalarFieldEnum[]
  }

  /**
   * SearchJob findMany
   */
  export type SearchJobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchJob
     */
    select?: SearchJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchJob
     */
    omit?: SearchJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchJobInclude<ExtArgs> | null
    /**
     * Filter, which SearchJobs to fetch.
     */
    where?: SearchJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchJobs to fetch.
     */
    orderBy?: SearchJobOrderByWithRelationInput | SearchJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SearchJobs.
     */
    cursor?: SearchJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SearchJobs.
     */
    distinct?: SearchJobScalarFieldEnum | SearchJobScalarFieldEnum[]
  }

  /**
   * SearchJob create
   */
  export type SearchJobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchJob
     */
    select?: SearchJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchJob
     */
    omit?: SearchJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchJobInclude<ExtArgs> | null
    /**
     * The data needed to create a SearchJob.
     */
    data: XOR<SearchJobCreateInput, SearchJobUncheckedCreateInput>
  }

  /**
   * SearchJob createMany
   */
  export type SearchJobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SearchJobs.
     */
    data: SearchJobCreateManyInput | SearchJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SearchJob createManyAndReturn
   */
  export type SearchJobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchJob
     */
    select?: SearchJobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SearchJob
     */
    omit?: SearchJobOmit<ExtArgs> | null
    /**
     * The data used to create many SearchJobs.
     */
    data: SearchJobCreateManyInput | SearchJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SearchJob update
   */
  export type SearchJobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchJob
     */
    select?: SearchJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchJob
     */
    omit?: SearchJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchJobInclude<ExtArgs> | null
    /**
     * The data needed to update a SearchJob.
     */
    data: XOR<SearchJobUpdateInput, SearchJobUncheckedUpdateInput>
    /**
     * Choose, which SearchJob to update.
     */
    where: SearchJobWhereUniqueInput
  }

  /**
   * SearchJob updateMany
   */
  export type SearchJobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SearchJobs.
     */
    data: XOR<SearchJobUpdateManyMutationInput, SearchJobUncheckedUpdateManyInput>
    /**
     * Filter which SearchJobs to update
     */
    where?: SearchJobWhereInput
    /**
     * Limit how many SearchJobs to update.
     */
    limit?: number
  }

  /**
   * SearchJob updateManyAndReturn
   */
  export type SearchJobUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchJob
     */
    select?: SearchJobSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SearchJob
     */
    omit?: SearchJobOmit<ExtArgs> | null
    /**
     * The data used to update SearchJobs.
     */
    data: XOR<SearchJobUpdateManyMutationInput, SearchJobUncheckedUpdateManyInput>
    /**
     * Filter which SearchJobs to update
     */
    where?: SearchJobWhereInput
    /**
     * Limit how many SearchJobs to update.
     */
    limit?: number
  }

  /**
   * SearchJob upsert
   */
  export type SearchJobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchJob
     */
    select?: SearchJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchJob
     */
    omit?: SearchJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchJobInclude<ExtArgs> | null
    /**
     * The filter to search for the SearchJob to update in case it exists.
     */
    where: SearchJobWhereUniqueInput
    /**
     * In case the SearchJob found by the `where` argument doesn't exist, create a new SearchJob with this data.
     */
    create: XOR<SearchJobCreateInput, SearchJobUncheckedCreateInput>
    /**
     * In case the SearchJob was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SearchJobUpdateInput, SearchJobUncheckedUpdateInput>
  }

  /**
   * SearchJob delete
   */
  export type SearchJobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchJob
     */
    select?: SearchJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchJob
     */
    omit?: SearchJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchJobInclude<ExtArgs> | null
    /**
     * Filter which SearchJob to delete.
     */
    where: SearchJobWhereUniqueInput
  }

  /**
   * SearchJob deleteMany
   */
  export type SearchJobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SearchJobs to delete
     */
    where?: SearchJobWhereInput
    /**
     * Limit how many SearchJobs to delete.
     */
    limit?: number
  }

  /**
   * SearchJob.prospects
   */
  export type SearchJob$prospectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prospect
     */
    select?: ProspectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prospect
     */
    omit?: ProspectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProspectInclude<ExtArgs> | null
    where?: ProspectWhereInput
    orderBy?: ProspectOrderByWithRelationInput | ProspectOrderByWithRelationInput[]
    cursor?: ProspectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProspectScalarFieldEnum | ProspectScalarFieldEnum[]
  }

  /**
   * SearchJob without action
   */
  export type SearchJobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchJob
     */
    select?: SearchJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchJob
     */
    omit?: SearchJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchJobInclude<ExtArgs> | null
  }


  /**
   * Model ExportJob
   */

  export type AggregateExportJob = {
    _count: ExportJobCountAggregateOutputType | null
    _avg: ExportJobAvgAggregateOutputType | null
    _sum: ExportJobSumAggregateOutputType | null
    _min: ExportJobMinAggregateOutputType | null
    _max: ExportJobMaxAggregateOutputType | null
  }

  export type ExportJobAvgAggregateOutputType = {
    recordCount: number | null
  }

  export type ExportJobSumAggregateOutputType = {
    recordCount: number | null
  }

  export type ExportJobMinAggregateOutputType = {
    id: string | null
    format: string | null
    status: $Enums.JobStatus | null
    fileUrl: string | null
    recordCount: number | null
    error: string | null
    createdAt: Date | null
    completedAt: Date | null
  }

  export type ExportJobMaxAggregateOutputType = {
    id: string | null
    format: string | null
    status: $Enums.JobStatus | null
    fileUrl: string | null
    recordCount: number | null
    error: string | null
    createdAt: Date | null
    completedAt: Date | null
  }

  export type ExportJobCountAggregateOutputType = {
    id: number
    format: number
    query: number
    status: number
    fileUrl: number
    recordCount: number
    error: number
    createdAt: number
    completedAt: number
    _all: number
  }


  export type ExportJobAvgAggregateInputType = {
    recordCount?: true
  }

  export type ExportJobSumAggregateInputType = {
    recordCount?: true
  }

  export type ExportJobMinAggregateInputType = {
    id?: true
    format?: true
    status?: true
    fileUrl?: true
    recordCount?: true
    error?: true
    createdAt?: true
    completedAt?: true
  }

  export type ExportJobMaxAggregateInputType = {
    id?: true
    format?: true
    status?: true
    fileUrl?: true
    recordCount?: true
    error?: true
    createdAt?: true
    completedAt?: true
  }

  export type ExportJobCountAggregateInputType = {
    id?: true
    format?: true
    query?: true
    status?: true
    fileUrl?: true
    recordCount?: true
    error?: true
    createdAt?: true
    completedAt?: true
    _all?: true
  }

  export type ExportJobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExportJob to aggregate.
     */
    where?: ExportJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExportJobs to fetch.
     */
    orderBy?: ExportJobOrderByWithRelationInput | ExportJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExportJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExportJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExportJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExportJobs
    **/
    _count?: true | ExportJobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExportJobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExportJobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExportJobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExportJobMaxAggregateInputType
  }

  export type GetExportJobAggregateType<T extends ExportJobAggregateArgs> = {
        [P in keyof T & keyof AggregateExportJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExportJob[P]>
      : GetScalarType<T[P], AggregateExportJob[P]>
  }




  export type ExportJobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExportJobWhereInput
    orderBy?: ExportJobOrderByWithAggregationInput | ExportJobOrderByWithAggregationInput[]
    by: ExportJobScalarFieldEnum[] | ExportJobScalarFieldEnum
    having?: ExportJobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExportJobCountAggregateInputType | true
    _avg?: ExportJobAvgAggregateInputType
    _sum?: ExportJobSumAggregateInputType
    _min?: ExportJobMinAggregateInputType
    _max?: ExportJobMaxAggregateInputType
  }

  export type ExportJobGroupByOutputType = {
    id: string
    format: string
    query: JsonValue | null
    status: $Enums.JobStatus
    fileUrl: string | null
    recordCount: number
    error: string | null
    createdAt: Date
    completedAt: Date | null
    _count: ExportJobCountAggregateOutputType | null
    _avg: ExportJobAvgAggregateOutputType | null
    _sum: ExportJobSumAggregateOutputType | null
    _min: ExportJobMinAggregateOutputType | null
    _max: ExportJobMaxAggregateOutputType | null
  }

  type GetExportJobGroupByPayload<T extends ExportJobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExportJobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExportJobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExportJobGroupByOutputType[P]>
            : GetScalarType<T[P], ExportJobGroupByOutputType[P]>
        }
      >
    >


  export type ExportJobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    format?: boolean
    query?: boolean
    status?: boolean
    fileUrl?: boolean
    recordCount?: boolean
    error?: boolean
    createdAt?: boolean
    completedAt?: boolean
  }, ExtArgs["result"]["exportJob"]>

  export type ExportJobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    format?: boolean
    query?: boolean
    status?: boolean
    fileUrl?: boolean
    recordCount?: boolean
    error?: boolean
    createdAt?: boolean
    completedAt?: boolean
  }, ExtArgs["result"]["exportJob"]>

  export type ExportJobSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    format?: boolean
    query?: boolean
    status?: boolean
    fileUrl?: boolean
    recordCount?: boolean
    error?: boolean
    createdAt?: boolean
    completedAt?: boolean
  }, ExtArgs["result"]["exportJob"]>

  export type ExportJobSelectScalar = {
    id?: boolean
    format?: boolean
    query?: boolean
    status?: boolean
    fileUrl?: boolean
    recordCount?: boolean
    error?: boolean
    createdAt?: boolean
    completedAt?: boolean
  }

  export type ExportJobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "format" | "query" | "status" | "fileUrl" | "recordCount" | "error" | "createdAt" | "completedAt", ExtArgs["result"]["exportJob"]>

  export type $ExportJobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExportJob"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      format: string
      query: Prisma.JsonValue | null
      status: $Enums.JobStatus
      fileUrl: string | null
      recordCount: number
      error: string | null
      createdAt: Date
      completedAt: Date | null
    }, ExtArgs["result"]["exportJob"]>
    composites: {}
  }

  type ExportJobGetPayload<S extends boolean | null | undefined | ExportJobDefaultArgs> = $Result.GetResult<Prisma.$ExportJobPayload, S>

  type ExportJobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExportJobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExportJobCountAggregateInputType | true
    }

  export interface ExportJobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExportJob'], meta: { name: 'ExportJob' } }
    /**
     * Find zero or one ExportJob that matches the filter.
     * @param {ExportJobFindUniqueArgs} args - Arguments to find a ExportJob
     * @example
     * // Get one ExportJob
     * const exportJob = await prisma.exportJob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExportJobFindUniqueArgs>(args: SelectSubset<T, ExportJobFindUniqueArgs<ExtArgs>>): Prisma__ExportJobClient<$Result.GetResult<Prisma.$ExportJobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExportJob that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExportJobFindUniqueOrThrowArgs} args - Arguments to find a ExportJob
     * @example
     * // Get one ExportJob
     * const exportJob = await prisma.exportJob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExportJobFindUniqueOrThrowArgs>(args: SelectSubset<T, ExportJobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExportJobClient<$Result.GetResult<Prisma.$ExportJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExportJob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExportJobFindFirstArgs} args - Arguments to find a ExportJob
     * @example
     * // Get one ExportJob
     * const exportJob = await prisma.exportJob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExportJobFindFirstArgs>(args?: SelectSubset<T, ExportJobFindFirstArgs<ExtArgs>>): Prisma__ExportJobClient<$Result.GetResult<Prisma.$ExportJobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExportJob that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExportJobFindFirstOrThrowArgs} args - Arguments to find a ExportJob
     * @example
     * // Get one ExportJob
     * const exportJob = await prisma.exportJob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExportJobFindFirstOrThrowArgs>(args?: SelectSubset<T, ExportJobFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExportJobClient<$Result.GetResult<Prisma.$ExportJobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExportJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExportJobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExportJobs
     * const exportJobs = await prisma.exportJob.findMany()
     * 
     * // Get first 10 ExportJobs
     * const exportJobs = await prisma.exportJob.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exportJobWithIdOnly = await prisma.exportJob.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExportJobFindManyArgs>(args?: SelectSubset<T, ExportJobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExportJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExportJob.
     * @param {ExportJobCreateArgs} args - Arguments to create a ExportJob.
     * @example
     * // Create one ExportJob
     * const ExportJob = await prisma.exportJob.create({
     *   data: {
     *     // ... data to create a ExportJob
     *   }
     * })
     * 
     */
    create<T extends ExportJobCreateArgs>(args: SelectSubset<T, ExportJobCreateArgs<ExtArgs>>): Prisma__ExportJobClient<$Result.GetResult<Prisma.$ExportJobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExportJobs.
     * @param {ExportJobCreateManyArgs} args - Arguments to create many ExportJobs.
     * @example
     * // Create many ExportJobs
     * const exportJob = await prisma.exportJob.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExportJobCreateManyArgs>(args?: SelectSubset<T, ExportJobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExportJobs and returns the data saved in the database.
     * @param {ExportJobCreateManyAndReturnArgs} args - Arguments to create many ExportJobs.
     * @example
     * // Create many ExportJobs
     * const exportJob = await prisma.exportJob.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExportJobs and only return the `id`
     * const exportJobWithIdOnly = await prisma.exportJob.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExportJobCreateManyAndReturnArgs>(args?: SelectSubset<T, ExportJobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExportJobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExportJob.
     * @param {ExportJobDeleteArgs} args - Arguments to delete one ExportJob.
     * @example
     * // Delete one ExportJob
     * const ExportJob = await prisma.exportJob.delete({
     *   where: {
     *     // ... filter to delete one ExportJob
     *   }
     * })
     * 
     */
    delete<T extends ExportJobDeleteArgs>(args: SelectSubset<T, ExportJobDeleteArgs<ExtArgs>>): Prisma__ExportJobClient<$Result.GetResult<Prisma.$ExportJobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExportJob.
     * @param {ExportJobUpdateArgs} args - Arguments to update one ExportJob.
     * @example
     * // Update one ExportJob
     * const exportJob = await prisma.exportJob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExportJobUpdateArgs>(args: SelectSubset<T, ExportJobUpdateArgs<ExtArgs>>): Prisma__ExportJobClient<$Result.GetResult<Prisma.$ExportJobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExportJobs.
     * @param {ExportJobDeleteManyArgs} args - Arguments to filter ExportJobs to delete.
     * @example
     * // Delete a few ExportJobs
     * const { count } = await prisma.exportJob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExportJobDeleteManyArgs>(args?: SelectSubset<T, ExportJobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExportJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExportJobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExportJobs
     * const exportJob = await prisma.exportJob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExportJobUpdateManyArgs>(args: SelectSubset<T, ExportJobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExportJobs and returns the data updated in the database.
     * @param {ExportJobUpdateManyAndReturnArgs} args - Arguments to update many ExportJobs.
     * @example
     * // Update many ExportJobs
     * const exportJob = await prisma.exportJob.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExportJobs and only return the `id`
     * const exportJobWithIdOnly = await prisma.exportJob.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExportJobUpdateManyAndReturnArgs>(args: SelectSubset<T, ExportJobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExportJobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExportJob.
     * @param {ExportJobUpsertArgs} args - Arguments to update or create a ExportJob.
     * @example
     * // Update or create a ExportJob
     * const exportJob = await prisma.exportJob.upsert({
     *   create: {
     *     // ... data to create a ExportJob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExportJob we want to update
     *   }
     * })
     */
    upsert<T extends ExportJobUpsertArgs>(args: SelectSubset<T, ExportJobUpsertArgs<ExtArgs>>): Prisma__ExportJobClient<$Result.GetResult<Prisma.$ExportJobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExportJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExportJobCountArgs} args - Arguments to filter ExportJobs to count.
     * @example
     * // Count the number of ExportJobs
     * const count = await prisma.exportJob.count({
     *   where: {
     *     // ... the filter for the ExportJobs we want to count
     *   }
     * })
    **/
    count<T extends ExportJobCountArgs>(
      args?: Subset<T, ExportJobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExportJobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExportJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExportJobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExportJobAggregateArgs>(args: Subset<T, ExportJobAggregateArgs>): Prisma.PrismaPromise<GetExportJobAggregateType<T>>

    /**
     * Group by ExportJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExportJobGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExportJobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExportJobGroupByArgs['orderBy'] }
        : { orderBy?: ExportJobGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExportJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExportJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExportJob model
   */
  readonly fields: ExportJobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExportJob.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExportJobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExportJob model
   */
  interface ExportJobFieldRefs {
    readonly id: FieldRef<"ExportJob", 'String'>
    readonly format: FieldRef<"ExportJob", 'String'>
    readonly query: FieldRef<"ExportJob", 'Json'>
    readonly status: FieldRef<"ExportJob", 'JobStatus'>
    readonly fileUrl: FieldRef<"ExportJob", 'String'>
    readonly recordCount: FieldRef<"ExportJob", 'Int'>
    readonly error: FieldRef<"ExportJob", 'String'>
    readonly createdAt: FieldRef<"ExportJob", 'DateTime'>
    readonly completedAt: FieldRef<"ExportJob", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ExportJob findUnique
   */
  export type ExportJobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportJob
     */
    select?: ExportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExportJob
     */
    omit?: ExportJobOmit<ExtArgs> | null
    /**
     * Filter, which ExportJob to fetch.
     */
    where: ExportJobWhereUniqueInput
  }

  /**
   * ExportJob findUniqueOrThrow
   */
  export type ExportJobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportJob
     */
    select?: ExportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExportJob
     */
    omit?: ExportJobOmit<ExtArgs> | null
    /**
     * Filter, which ExportJob to fetch.
     */
    where: ExportJobWhereUniqueInput
  }

  /**
   * ExportJob findFirst
   */
  export type ExportJobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportJob
     */
    select?: ExportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExportJob
     */
    omit?: ExportJobOmit<ExtArgs> | null
    /**
     * Filter, which ExportJob to fetch.
     */
    where?: ExportJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExportJobs to fetch.
     */
    orderBy?: ExportJobOrderByWithRelationInput | ExportJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExportJobs.
     */
    cursor?: ExportJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExportJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExportJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExportJobs.
     */
    distinct?: ExportJobScalarFieldEnum | ExportJobScalarFieldEnum[]
  }

  /**
   * ExportJob findFirstOrThrow
   */
  export type ExportJobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportJob
     */
    select?: ExportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExportJob
     */
    omit?: ExportJobOmit<ExtArgs> | null
    /**
     * Filter, which ExportJob to fetch.
     */
    where?: ExportJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExportJobs to fetch.
     */
    orderBy?: ExportJobOrderByWithRelationInput | ExportJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExportJobs.
     */
    cursor?: ExportJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExportJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExportJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExportJobs.
     */
    distinct?: ExportJobScalarFieldEnum | ExportJobScalarFieldEnum[]
  }

  /**
   * ExportJob findMany
   */
  export type ExportJobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportJob
     */
    select?: ExportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExportJob
     */
    omit?: ExportJobOmit<ExtArgs> | null
    /**
     * Filter, which ExportJobs to fetch.
     */
    where?: ExportJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExportJobs to fetch.
     */
    orderBy?: ExportJobOrderByWithRelationInput | ExportJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExportJobs.
     */
    cursor?: ExportJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExportJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExportJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExportJobs.
     */
    distinct?: ExportJobScalarFieldEnum | ExportJobScalarFieldEnum[]
  }

  /**
   * ExportJob create
   */
  export type ExportJobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportJob
     */
    select?: ExportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExportJob
     */
    omit?: ExportJobOmit<ExtArgs> | null
    /**
     * The data needed to create a ExportJob.
     */
    data?: XOR<ExportJobCreateInput, ExportJobUncheckedCreateInput>
  }

  /**
   * ExportJob createMany
   */
  export type ExportJobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExportJobs.
     */
    data: ExportJobCreateManyInput | ExportJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExportJob createManyAndReturn
   */
  export type ExportJobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportJob
     */
    select?: ExportJobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExportJob
     */
    omit?: ExportJobOmit<ExtArgs> | null
    /**
     * The data used to create many ExportJobs.
     */
    data: ExportJobCreateManyInput | ExportJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExportJob update
   */
  export type ExportJobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportJob
     */
    select?: ExportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExportJob
     */
    omit?: ExportJobOmit<ExtArgs> | null
    /**
     * The data needed to update a ExportJob.
     */
    data: XOR<ExportJobUpdateInput, ExportJobUncheckedUpdateInput>
    /**
     * Choose, which ExportJob to update.
     */
    where: ExportJobWhereUniqueInput
  }

  /**
   * ExportJob updateMany
   */
  export type ExportJobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExportJobs.
     */
    data: XOR<ExportJobUpdateManyMutationInput, ExportJobUncheckedUpdateManyInput>
    /**
     * Filter which ExportJobs to update
     */
    where?: ExportJobWhereInput
    /**
     * Limit how many ExportJobs to update.
     */
    limit?: number
  }

  /**
   * ExportJob updateManyAndReturn
   */
  export type ExportJobUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportJob
     */
    select?: ExportJobSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExportJob
     */
    omit?: ExportJobOmit<ExtArgs> | null
    /**
     * The data used to update ExportJobs.
     */
    data: XOR<ExportJobUpdateManyMutationInput, ExportJobUncheckedUpdateManyInput>
    /**
     * Filter which ExportJobs to update
     */
    where?: ExportJobWhereInput
    /**
     * Limit how many ExportJobs to update.
     */
    limit?: number
  }

  /**
   * ExportJob upsert
   */
  export type ExportJobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportJob
     */
    select?: ExportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExportJob
     */
    omit?: ExportJobOmit<ExtArgs> | null
    /**
     * The filter to search for the ExportJob to update in case it exists.
     */
    where: ExportJobWhereUniqueInput
    /**
     * In case the ExportJob found by the `where` argument doesn't exist, create a new ExportJob with this data.
     */
    create: XOR<ExportJobCreateInput, ExportJobUncheckedCreateInput>
    /**
     * In case the ExportJob was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExportJobUpdateInput, ExportJobUncheckedUpdateInput>
  }

  /**
   * ExportJob delete
   */
  export type ExportJobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportJob
     */
    select?: ExportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExportJob
     */
    omit?: ExportJobOmit<ExtArgs> | null
    /**
     * Filter which ExportJob to delete.
     */
    where: ExportJobWhereUniqueInput
  }

  /**
   * ExportJob deleteMany
   */
  export type ExportJobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExportJobs to delete
     */
    where?: ExportJobWhereInput
    /**
     * Limit how many ExportJobs to delete.
     */
    limit?: number
  }

  /**
   * ExportJob without action
   */
  export type ExportJobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportJob
     */
    select?: ExportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExportJob
     */
    omit?: ExportJobOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    name: 'name',
    role: 'role',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    action: 'action',
    userId: 'userId',
    details: 'details',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const SystemSettingScalarFieldEnum: {
    id: 'id',
    key: 'key',
    value: 'value',
    description: 'description',
    updatedAt: 'updatedAt'
  };

  export type SystemSettingScalarFieldEnum = (typeof SystemSettingScalarFieldEnum)[keyof typeof SystemSettingScalarFieldEnum]


  export const BusinessEntityScalarFieldEnum: {
    id: 'id',
    canonicalName: 'canonicalName',
    providerIds: 'providerIds',
    country: 'country',
    region: 'region',
    city: 'city',
    district: 'district',
    address: 'address',
    latitude: 'latitude',
    longitude: 'longitude',
    categories: 'categories',
    primaryCategory: 'primaryCategory',
    businessModel: 'businessModel',
    legalEntity: 'legalEntity',
    phone: 'phone',
    website: 'website',
    socialLinks: 'socialLinks',
    rating: 'rating',
    reviewCount: 'reviewCount',
    businessStatus: 'businessStatus',
    sourceProviders: 'sourceProviders',
    dataConfidence: 'dataConfidence',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    lastVerifiedAt: 'lastVerifiedAt'
  };

  export type BusinessEntityScalarFieldEnum = (typeof BusinessEntityScalarFieldEnum)[keyof typeof BusinessEntityScalarFieldEnum]


  export const ProspectScalarFieldEnum: {
    id: 'id',
    businessEntityId: 'businessEntityId',
    searchJobId: 'searchJobId',
    sourceType: 'sourceType',
    businessName: 'businessName',
    classification: 'classification',
    classificationConfidence: 'classificationConfidence',
    businessModel: 'businessModel',
    businessModelConfidence: 'businessModelConfidence',
    websiteStatus: 'websiteStatus',
    websiteUrl: 'websiteUrl',
    websiteConfidence: 'websiteConfidence',
    phone: 'phone',
    country: 'country',
    region: 'region',
    city: 'city',
    address: 'address',
    latitude: 'latitude',
    longitude: 'longitude',
    rating: 'rating',
    reviewCount: 'reviewCount',
    businessStatus: 'businessStatus',
    leadScore: 'leadScore',
    priority: 'priority',
    leadStatus: 'leadStatus',
    demoStatus: 'demoStatus',
    demoUrl: 'demoUrl',
    notes: 'notes',
    assignedTo: 'assignedTo',
    tags: 'tags',
    customFields: 'customFields',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    lastVerifiedAt: 'lastVerifiedAt'
  };

  export type ProspectScalarFieldEnum = (typeof ProspectScalarFieldEnum)[keyof typeof ProspectScalarFieldEnum]


  export const LeadNoteScalarFieldEnum: {
    id: 'id',
    prospectId: 'prospectId',
    authorId: 'authorId',
    authorName: 'authorName',
    content: 'content',
    createdAt: 'createdAt'
  };

  export type LeadNoteScalarFieldEnum = (typeof LeadNoteScalarFieldEnum)[keyof typeof LeadNoteScalarFieldEnum]


  export const SearchJobScalarFieldEnum: {
    id: 'id',
    name: 'name',
    country: 'country',
    region: 'region',
    city: 'city',
    district: 'district',
    category: 'category',
    keywords: 'keywords',
    query: 'query',
    scope: 'scope',
    provider: 'provider',
    status: 'status',
    progress: 'progress',
    totalTasks: 'totalTasks',
    completedTasks: 'completedTasks',
    failedTasks: 'failedTasks',
    resultCount: 'resultCount',
    duplicateCount: 'duplicateCount',
    websiteListedCount: 'websiteListedCount',
    websiteOpportunityCount: 'websiteOpportunityCount',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    createdAt: 'createdAt',
    error: 'error'
  };

  export type SearchJobScalarFieldEnum = (typeof SearchJobScalarFieldEnum)[keyof typeof SearchJobScalarFieldEnum]


  export const ExportJobScalarFieldEnum: {
    id: 'id',
    format: 'format',
    query: 'query',
    status: 'status',
    fileUrl: 'fileUrl',
    recordCount: 'recordCount',
    error: 'error',
    createdAt: 'createdAt',
    completedAt: 'completedAt'
  };

  export type ExportJobScalarFieldEnum = (typeof ExportJobScalarFieldEnum)[keyof typeof ExportJobScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'SourceType'
   */
  export type EnumSourceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SourceType'>
    


  /**
   * Reference to a field of type 'SourceType[]'
   */
  export type ListEnumSourceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SourceType[]'>
    


  /**
   * Reference to a field of type 'WebsiteStatus'
   */
  export type EnumWebsiteStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WebsiteStatus'>
    


  /**
   * Reference to a field of type 'WebsiteStatus[]'
   */
  export type ListEnumWebsiteStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WebsiteStatus[]'>
    


  /**
   * Reference to a field of type 'LeadPriority'
   */
  export type EnumLeadPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeadPriority'>
    


  /**
   * Reference to a field of type 'LeadPriority[]'
   */
  export type ListEnumLeadPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeadPriority[]'>
    


  /**
   * Reference to a field of type 'LeadStatus'
   */
  export type EnumLeadStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeadStatus'>
    


  /**
   * Reference to a field of type 'LeadStatus[]'
   */
  export type ListEnumLeadStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeadStatus[]'>
    


  /**
   * Reference to a field of type 'DemoStatus'
   */
  export type EnumDemoStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DemoStatus'>
    


  /**
   * Reference to a field of type 'DemoStatus[]'
   */
  export type ListEnumDemoStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DemoStatus[]'>
    


  /**
   * Reference to a field of type 'JobStatus'
   */
  export type EnumJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobStatus'>
    


  /**
   * Reference to a field of type 'JobStatus[]'
   */
  export type ListEnumJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    auditLogs?: AuditLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    auditLogs?: AuditLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    auditLogs?: AuditLogListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    userId?: StringNullableFilter<"AuditLog"> | string | null
    details?: JsonNullableFilter<"AuditLog">
    ipAddress?: StringNullableFilter<"AuditLog"> | string | null
    userAgent?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    action?: SortOrder
    userId?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    action?: StringFilter<"AuditLog"> | string
    userId?: StringNullableFilter<"AuditLog"> | string | null
    details?: JsonNullableFilter<"AuditLog">
    ipAddress?: StringNullableFilter<"AuditLog"> | string | null
    userAgent?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    action?: SortOrder
    userId?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    userId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    details?: JsonNullableWithAggregatesFilter<"AuditLog">
    ipAddress?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type SystemSettingWhereInput = {
    AND?: SystemSettingWhereInput | SystemSettingWhereInput[]
    OR?: SystemSettingWhereInput[]
    NOT?: SystemSettingWhereInput | SystemSettingWhereInput[]
    id?: StringFilter<"SystemSetting"> | string
    key?: StringFilter<"SystemSetting"> | string
    value?: StringFilter<"SystemSetting"> | string
    description?: StringNullableFilter<"SystemSetting"> | string | null
    updatedAt?: DateTimeFilter<"SystemSetting"> | Date | string
  }

  export type SystemSettingOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
  }

  export type SystemSettingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: SystemSettingWhereInput | SystemSettingWhereInput[]
    OR?: SystemSettingWhereInput[]
    NOT?: SystemSettingWhereInput | SystemSettingWhereInput[]
    value?: StringFilter<"SystemSetting"> | string
    description?: StringNullableFilter<"SystemSetting"> | string | null
    updatedAt?: DateTimeFilter<"SystemSetting"> | Date | string
  }, "id" | "key">

  export type SystemSettingOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: SystemSettingCountOrderByAggregateInput
    _max?: SystemSettingMaxOrderByAggregateInput
    _min?: SystemSettingMinOrderByAggregateInput
  }

  export type SystemSettingScalarWhereWithAggregatesInput = {
    AND?: SystemSettingScalarWhereWithAggregatesInput | SystemSettingScalarWhereWithAggregatesInput[]
    OR?: SystemSettingScalarWhereWithAggregatesInput[]
    NOT?: SystemSettingScalarWhereWithAggregatesInput | SystemSettingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SystemSetting"> | string
    key?: StringWithAggregatesFilter<"SystemSetting"> | string
    value?: StringWithAggregatesFilter<"SystemSetting"> | string
    description?: StringNullableWithAggregatesFilter<"SystemSetting"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"SystemSetting"> | Date | string
  }

  export type BusinessEntityWhereInput = {
    AND?: BusinessEntityWhereInput | BusinessEntityWhereInput[]
    OR?: BusinessEntityWhereInput[]
    NOT?: BusinessEntityWhereInput | BusinessEntityWhereInput[]
    id?: StringFilter<"BusinessEntity"> | string
    canonicalName?: StringFilter<"BusinessEntity"> | string
    providerIds?: JsonNullableFilter<"BusinessEntity">
    country?: StringNullableFilter<"BusinessEntity"> | string | null
    region?: StringNullableFilter<"BusinessEntity"> | string | null
    city?: StringNullableFilter<"BusinessEntity"> | string | null
    district?: StringNullableFilter<"BusinessEntity"> | string | null
    address?: StringNullableFilter<"BusinessEntity"> | string | null
    latitude?: FloatNullableFilter<"BusinessEntity"> | number | null
    longitude?: FloatNullableFilter<"BusinessEntity"> | number | null
    categories?: StringNullableListFilter<"BusinessEntity">
    primaryCategory?: StringNullableFilter<"BusinessEntity"> | string | null
    businessModel?: StringNullableFilter<"BusinessEntity"> | string | null
    legalEntity?: StringNullableFilter<"BusinessEntity"> | string | null
    phone?: StringNullableFilter<"BusinessEntity"> | string | null
    website?: StringNullableFilter<"BusinessEntity"> | string | null
    socialLinks?: JsonNullableFilter<"BusinessEntity">
    rating?: FloatNullableFilter<"BusinessEntity"> | number | null
    reviewCount?: IntNullableFilter<"BusinessEntity"> | number | null
    businessStatus?: StringNullableFilter<"BusinessEntity"> | string | null
    sourceProviders?: StringNullableListFilter<"BusinessEntity">
    dataConfidence?: StringNullableFilter<"BusinessEntity"> | string | null
    createdAt?: DateTimeFilter<"BusinessEntity"> | Date | string
    updatedAt?: DateTimeFilter<"BusinessEntity"> | Date | string
    lastVerifiedAt?: DateTimeNullableFilter<"BusinessEntity"> | Date | string | null
    prospects?: ProspectListRelationFilter
  }

  export type BusinessEntityOrderByWithRelationInput = {
    id?: SortOrder
    canonicalName?: SortOrder
    providerIds?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    categories?: SortOrder
    primaryCategory?: SortOrderInput | SortOrder
    businessModel?: SortOrderInput | SortOrder
    legalEntity?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    socialLinks?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    reviewCount?: SortOrderInput | SortOrder
    businessStatus?: SortOrderInput | SortOrder
    sourceProviders?: SortOrder
    dataConfidence?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastVerifiedAt?: SortOrderInput | SortOrder
    prospects?: ProspectOrderByRelationAggregateInput
  }

  export type BusinessEntityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BusinessEntityWhereInput | BusinessEntityWhereInput[]
    OR?: BusinessEntityWhereInput[]
    NOT?: BusinessEntityWhereInput | BusinessEntityWhereInput[]
    canonicalName?: StringFilter<"BusinessEntity"> | string
    providerIds?: JsonNullableFilter<"BusinessEntity">
    country?: StringNullableFilter<"BusinessEntity"> | string | null
    region?: StringNullableFilter<"BusinessEntity"> | string | null
    city?: StringNullableFilter<"BusinessEntity"> | string | null
    district?: StringNullableFilter<"BusinessEntity"> | string | null
    address?: StringNullableFilter<"BusinessEntity"> | string | null
    latitude?: FloatNullableFilter<"BusinessEntity"> | number | null
    longitude?: FloatNullableFilter<"BusinessEntity"> | number | null
    categories?: StringNullableListFilter<"BusinessEntity">
    primaryCategory?: StringNullableFilter<"BusinessEntity"> | string | null
    businessModel?: StringNullableFilter<"BusinessEntity"> | string | null
    legalEntity?: StringNullableFilter<"BusinessEntity"> | string | null
    phone?: StringNullableFilter<"BusinessEntity"> | string | null
    website?: StringNullableFilter<"BusinessEntity"> | string | null
    socialLinks?: JsonNullableFilter<"BusinessEntity">
    rating?: FloatNullableFilter<"BusinessEntity"> | number | null
    reviewCount?: IntNullableFilter<"BusinessEntity"> | number | null
    businessStatus?: StringNullableFilter<"BusinessEntity"> | string | null
    sourceProviders?: StringNullableListFilter<"BusinessEntity">
    dataConfidence?: StringNullableFilter<"BusinessEntity"> | string | null
    createdAt?: DateTimeFilter<"BusinessEntity"> | Date | string
    updatedAt?: DateTimeFilter<"BusinessEntity"> | Date | string
    lastVerifiedAt?: DateTimeNullableFilter<"BusinessEntity"> | Date | string | null
    prospects?: ProspectListRelationFilter
  }, "id">

  export type BusinessEntityOrderByWithAggregationInput = {
    id?: SortOrder
    canonicalName?: SortOrder
    providerIds?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    categories?: SortOrder
    primaryCategory?: SortOrderInput | SortOrder
    businessModel?: SortOrderInput | SortOrder
    legalEntity?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    socialLinks?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    reviewCount?: SortOrderInput | SortOrder
    businessStatus?: SortOrderInput | SortOrder
    sourceProviders?: SortOrder
    dataConfidence?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastVerifiedAt?: SortOrderInput | SortOrder
    _count?: BusinessEntityCountOrderByAggregateInput
    _avg?: BusinessEntityAvgOrderByAggregateInput
    _max?: BusinessEntityMaxOrderByAggregateInput
    _min?: BusinessEntityMinOrderByAggregateInput
    _sum?: BusinessEntitySumOrderByAggregateInput
  }

  export type BusinessEntityScalarWhereWithAggregatesInput = {
    AND?: BusinessEntityScalarWhereWithAggregatesInput | BusinessEntityScalarWhereWithAggregatesInput[]
    OR?: BusinessEntityScalarWhereWithAggregatesInput[]
    NOT?: BusinessEntityScalarWhereWithAggregatesInput | BusinessEntityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BusinessEntity"> | string
    canonicalName?: StringWithAggregatesFilter<"BusinessEntity"> | string
    providerIds?: JsonNullableWithAggregatesFilter<"BusinessEntity">
    country?: StringNullableWithAggregatesFilter<"BusinessEntity"> | string | null
    region?: StringNullableWithAggregatesFilter<"BusinessEntity"> | string | null
    city?: StringNullableWithAggregatesFilter<"BusinessEntity"> | string | null
    district?: StringNullableWithAggregatesFilter<"BusinessEntity"> | string | null
    address?: StringNullableWithAggregatesFilter<"BusinessEntity"> | string | null
    latitude?: FloatNullableWithAggregatesFilter<"BusinessEntity"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"BusinessEntity"> | number | null
    categories?: StringNullableListFilter<"BusinessEntity">
    primaryCategory?: StringNullableWithAggregatesFilter<"BusinessEntity"> | string | null
    businessModel?: StringNullableWithAggregatesFilter<"BusinessEntity"> | string | null
    legalEntity?: StringNullableWithAggregatesFilter<"BusinessEntity"> | string | null
    phone?: StringNullableWithAggregatesFilter<"BusinessEntity"> | string | null
    website?: StringNullableWithAggregatesFilter<"BusinessEntity"> | string | null
    socialLinks?: JsonNullableWithAggregatesFilter<"BusinessEntity">
    rating?: FloatNullableWithAggregatesFilter<"BusinessEntity"> | number | null
    reviewCount?: IntNullableWithAggregatesFilter<"BusinessEntity"> | number | null
    businessStatus?: StringNullableWithAggregatesFilter<"BusinessEntity"> | string | null
    sourceProviders?: StringNullableListFilter<"BusinessEntity">
    dataConfidence?: StringNullableWithAggregatesFilter<"BusinessEntity"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"BusinessEntity"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BusinessEntity"> | Date | string
    lastVerifiedAt?: DateTimeNullableWithAggregatesFilter<"BusinessEntity"> | Date | string | null
  }

  export type ProspectWhereInput = {
    AND?: ProspectWhereInput | ProspectWhereInput[]
    OR?: ProspectWhereInput[]
    NOT?: ProspectWhereInput | ProspectWhereInput[]
    id?: StringFilter<"Prospect"> | string
    businessEntityId?: StringNullableFilter<"Prospect"> | string | null
    searchJobId?: StringNullableFilter<"Prospect"> | string | null
    sourceType?: EnumSourceTypeFilter<"Prospect"> | $Enums.SourceType
    businessName?: StringFilter<"Prospect"> | string
    classification?: StringNullableFilter<"Prospect"> | string | null
    classificationConfidence?: FloatNullableFilter<"Prospect"> | number | null
    businessModel?: StringNullableFilter<"Prospect"> | string | null
    businessModelConfidence?: FloatNullableFilter<"Prospect"> | number | null
    websiteStatus?: EnumWebsiteStatusFilter<"Prospect"> | $Enums.WebsiteStatus
    websiteUrl?: StringNullableFilter<"Prospect"> | string | null
    websiteConfidence?: FloatNullableFilter<"Prospect"> | number | null
    phone?: StringNullableFilter<"Prospect"> | string | null
    country?: StringNullableFilter<"Prospect"> | string | null
    region?: StringNullableFilter<"Prospect"> | string | null
    city?: StringNullableFilter<"Prospect"> | string | null
    address?: StringNullableFilter<"Prospect"> | string | null
    latitude?: FloatNullableFilter<"Prospect"> | number | null
    longitude?: FloatNullableFilter<"Prospect"> | number | null
    rating?: FloatNullableFilter<"Prospect"> | number | null
    reviewCount?: IntNullableFilter<"Prospect"> | number | null
    businessStatus?: StringNullableFilter<"Prospect"> | string | null
    leadScore?: FloatNullableFilter<"Prospect"> | number | null
    priority?: EnumLeadPriorityNullableFilter<"Prospect"> | $Enums.LeadPriority | null
    leadStatus?: EnumLeadStatusFilter<"Prospect"> | $Enums.LeadStatus
    demoStatus?: EnumDemoStatusFilter<"Prospect"> | $Enums.DemoStatus
    demoUrl?: StringNullableFilter<"Prospect"> | string | null
    notes?: StringNullableFilter<"Prospect"> | string | null
    assignedTo?: StringNullableFilter<"Prospect"> | string | null
    tags?: StringNullableListFilter<"Prospect">
    customFields?: JsonNullableFilter<"Prospect">
    createdAt?: DateTimeFilter<"Prospect"> | Date | string
    updatedAt?: DateTimeFilter<"Prospect"> | Date | string
    lastVerifiedAt?: DateTimeNullableFilter<"Prospect"> | Date | string | null
    businessEntity?: XOR<BusinessEntityNullableScalarRelationFilter, BusinessEntityWhereInput> | null
    searchJob?: XOR<SearchJobNullableScalarRelationFilter, SearchJobWhereInput> | null
    leadNotes?: LeadNoteListRelationFilter
  }

  export type ProspectOrderByWithRelationInput = {
    id?: SortOrder
    businessEntityId?: SortOrderInput | SortOrder
    searchJobId?: SortOrderInput | SortOrder
    sourceType?: SortOrder
    businessName?: SortOrder
    classification?: SortOrderInput | SortOrder
    classificationConfidence?: SortOrderInput | SortOrder
    businessModel?: SortOrderInput | SortOrder
    businessModelConfidence?: SortOrderInput | SortOrder
    websiteStatus?: SortOrder
    websiteUrl?: SortOrderInput | SortOrder
    websiteConfidence?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    reviewCount?: SortOrderInput | SortOrder
    businessStatus?: SortOrderInput | SortOrder
    leadScore?: SortOrderInput | SortOrder
    priority?: SortOrderInput | SortOrder
    leadStatus?: SortOrder
    demoStatus?: SortOrder
    demoUrl?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    assignedTo?: SortOrderInput | SortOrder
    tags?: SortOrder
    customFields?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastVerifiedAt?: SortOrderInput | SortOrder
    businessEntity?: BusinessEntityOrderByWithRelationInput
    searchJob?: SearchJobOrderByWithRelationInput
    leadNotes?: LeadNoteOrderByRelationAggregateInput
  }

  export type ProspectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProspectWhereInput | ProspectWhereInput[]
    OR?: ProspectWhereInput[]
    NOT?: ProspectWhereInput | ProspectWhereInput[]
    businessEntityId?: StringNullableFilter<"Prospect"> | string | null
    searchJobId?: StringNullableFilter<"Prospect"> | string | null
    sourceType?: EnumSourceTypeFilter<"Prospect"> | $Enums.SourceType
    businessName?: StringFilter<"Prospect"> | string
    classification?: StringNullableFilter<"Prospect"> | string | null
    classificationConfidence?: FloatNullableFilter<"Prospect"> | number | null
    businessModel?: StringNullableFilter<"Prospect"> | string | null
    businessModelConfidence?: FloatNullableFilter<"Prospect"> | number | null
    websiteStatus?: EnumWebsiteStatusFilter<"Prospect"> | $Enums.WebsiteStatus
    websiteUrl?: StringNullableFilter<"Prospect"> | string | null
    websiteConfidence?: FloatNullableFilter<"Prospect"> | number | null
    phone?: StringNullableFilter<"Prospect"> | string | null
    country?: StringNullableFilter<"Prospect"> | string | null
    region?: StringNullableFilter<"Prospect"> | string | null
    city?: StringNullableFilter<"Prospect"> | string | null
    address?: StringNullableFilter<"Prospect"> | string | null
    latitude?: FloatNullableFilter<"Prospect"> | number | null
    longitude?: FloatNullableFilter<"Prospect"> | number | null
    rating?: FloatNullableFilter<"Prospect"> | number | null
    reviewCount?: IntNullableFilter<"Prospect"> | number | null
    businessStatus?: StringNullableFilter<"Prospect"> | string | null
    leadScore?: FloatNullableFilter<"Prospect"> | number | null
    priority?: EnumLeadPriorityNullableFilter<"Prospect"> | $Enums.LeadPriority | null
    leadStatus?: EnumLeadStatusFilter<"Prospect"> | $Enums.LeadStatus
    demoStatus?: EnumDemoStatusFilter<"Prospect"> | $Enums.DemoStatus
    demoUrl?: StringNullableFilter<"Prospect"> | string | null
    notes?: StringNullableFilter<"Prospect"> | string | null
    assignedTo?: StringNullableFilter<"Prospect"> | string | null
    tags?: StringNullableListFilter<"Prospect">
    customFields?: JsonNullableFilter<"Prospect">
    createdAt?: DateTimeFilter<"Prospect"> | Date | string
    updatedAt?: DateTimeFilter<"Prospect"> | Date | string
    lastVerifiedAt?: DateTimeNullableFilter<"Prospect"> | Date | string | null
    businessEntity?: XOR<BusinessEntityNullableScalarRelationFilter, BusinessEntityWhereInput> | null
    searchJob?: XOR<SearchJobNullableScalarRelationFilter, SearchJobWhereInput> | null
    leadNotes?: LeadNoteListRelationFilter
  }, "id">

  export type ProspectOrderByWithAggregationInput = {
    id?: SortOrder
    businessEntityId?: SortOrderInput | SortOrder
    searchJobId?: SortOrderInput | SortOrder
    sourceType?: SortOrder
    businessName?: SortOrder
    classification?: SortOrderInput | SortOrder
    classificationConfidence?: SortOrderInput | SortOrder
    businessModel?: SortOrderInput | SortOrder
    businessModelConfidence?: SortOrderInput | SortOrder
    websiteStatus?: SortOrder
    websiteUrl?: SortOrderInput | SortOrder
    websiteConfidence?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    reviewCount?: SortOrderInput | SortOrder
    businessStatus?: SortOrderInput | SortOrder
    leadScore?: SortOrderInput | SortOrder
    priority?: SortOrderInput | SortOrder
    leadStatus?: SortOrder
    demoStatus?: SortOrder
    demoUrl?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    assignedTo?: SortOrderInput | SortOrder
    tags?: SortOrder
    customFields?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastVerifiedAt?: SortOrderInput | SortOrder
    _count?: ProspectCountOrderByAggregateInput
    _avg?: ProspectAvgOrderByAggregateInput
    _max?: ProspectMaxOrderByAggregateInput
    _min?: ProspectMinOrderByAggregateInput
    _sum?: ProspectSumOrderByAggregateInput
  }

  export type ProspectScalarWhereWithAggregatesInput = {
    AND?: ProspectScalarWhereWithAggregatesInput | ProspectScalarWhereWithAggregatesInput[]
    OR?: ProspectScalarWhereWithAggregatesInput[]
    NOT?: ProspectScalarWhereWithAggregatesInput | ProspectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Prospect"> | string
    businessEntityId?: StringNullableWithAggregatesFilter<"Prospect"> | string | null
    searchJobId?: StringNullableWithAggregatesFilter<"Prospect"> | string | null
    sourceType?: EnumSourceTypeWithAggregatesFilter<"Prospect"> | $Enums.SourceType
    businessName?: StringWithAggregatesFilter<"Prospect"> | string
    classification?: StringNullableWithAggregatesFilter<"Prospect"> | string | null
    classificationConfidence?: FloatNullableWithAggregatesFilter<"Prospect"> | number | null
    businessModel?: StringNullableWithAggregatesFilter<"Prospect"> | string | null
    businessModelConfidence?: FloatNullableWithAggregatesFilter<"Prospect"> | number | null
    websiteStatus?: EnumWebsiteStatusWithAggregatesFilter<"Prospect"> | $Enums.WebsiteStatus
    websiteUrl?: StringNullableWithAggregatesFilter<"Prospect"> | string | null
    websiteConfidence?: FloatNullableWithAggregatesFilter<"Prospect"> | number | null
    phone?: StringNullableWithAggregatesFilter<"Prospect"> | string | null
    country?: StringNullableWithAggregatesFilter<"Prospect"> | string | null
    region?: StringNullableWithAggregatesFilter<"Prospect"> | string | null
    city?: StringNullableWithAggregatesFilter<"Prospect"> | string | null
    address?: StringNullableWithAggregatesFilter<"Prospect"> | string | null
    latitude?: FloatNullableWithAggregatesFilter<"Prospect"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"Prospect"> | number | null
    rating?: FloatNullableWithAggregatesFilter<"Prospect"> | number | null
    reviewCount?: IntNullableWithAggregatesFilter<"Prospect"> | number | null
    businessStatus?: StringNullableWithAggregatesFilter<"Prospect"> | string | null
    leadScore?: FloatNullableWithAggregatesFilter<"Prospect"> | number | null
    priority?: EnumLeadPriorityNullableWithAggregatesFilter<"Prospect"> | $Enums.LeadPriority | null
    leadStatus?: EnumLeadStatusWithAggregatesFilter<"Prospect"> | $Enums.LeadStatus
    demoStatus?: EnumDemoStatusWithAggregatesFilter<"Prospect"> | $Enums.DemoStatus
    demoUrl?: StringNullableWithAggregatesFilter<"Prospect"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Prospect"> | string | null
    assignedTo?: StringNullableWithAggregatesFilter<"Prospect"> | string | null
    tags?: StringNullableListFilter<"Prospect">
    customFields?: JsonNullableWithAggregatesFilter<"Prospect">
    createdAt?: DateTimeWithAggregatesFilter<"Prospect"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Prospect"> | Date | string
    lastVerifiedAt?: DateTimeNullableWithAggregatesFilter<"Prospect"> | Date | string | null
  }

  export type LeadNoteWhereInput = {
    AND?: LeadNoteWhereInput | LeadNoteWhereInput[]
    OR?: LeadNoteWhereInput[]
    NOT?: LeadNoteWhereInput | LeadNoteWhereInput[]
    id?: StringFilter<"LeadNote"> | string
    prospectId?: StringFilter<"LeadNote"> | string
    authorId?: StringNullableFilter<"LeadNote"> | string | null
    authorName?: StringNullableFilter<"LeadNote"> | string | null
    content?: StringFilter<"LeadNote"> | string
    createdAt?: DateTimeFilter<"LeadNote"> | Date | string
    prospect?: XOR<ProspectScalarRelationFilter, ProspectWhereInput>
  }

  export type LeadNoteOrderByWithRelationInput = {
    id?: SortOrder
    prospectId?: SortOrder
    authorId?: SortOrderInput | SortOrder
    authorName?: SortOrderInput | SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    prospect?: ProspectOrderByWithRelationInput
  }

  export type LeadNoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LeadNoteWhereInput | LeadNoteWhereInput[]
    OR?: LeadNoteWhereInput[]
    NOT?: LeadNoteWhereInput | LeadNoteWhereInput[]
    prospectId?: StringFilter<"LeadNote"> | string
    authorId?: StringNullableFilter<"LeadNote"> | string | null
    authorName?: StringNullableFilter<"LeadNote"> | string | null
    content?: StringFilter<"LeadNote"> | string
    createdAt?: DateTimeFilter<"LeadNote"> | Date | string
    prospect?: XOR<ProspectScalarRelationFilter, ProspectWhereInput>
  }, "id">

  export type LeadNoteOrderByWithAggregationInput = {
    id?: SortOrder
    prospectId?: SortOrder
    authorId?: SortOrderInput | SortOrder
    authorName?: SortOrderInput | SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    _count?: LeadNoteCountOrderByAggregateInput
    _max?: LeadNoteMaxOrderByAggregateInput
    _min?: LeadNoteMinOrderByAggregateInput
  }

  export type LeadNoteScalarWhereWithAggregatesInput = {
    AND?: LeadNoteScalarWhereWithAggregatesInput | LeadNoteScalarWhereWithAggregatesInput[]
    OR?: LeadNoteScalarWhereWithAggregatesInput[]
    NOT?: LeadNoteScalarWhereWithAggregatesInput | LeadNoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LeadNote"> | string
    prospectId?: StringWithAggregatesFilter<"LeadNote"> | string
    authorId?: StringNullableWithAggregatesFilter<"LeadNote"> | string | null
    authorName?: StringNullableWithAggregatesFilter<"LeadNote"> | string | null
    content?: StringWithAggregatesFilter<"LeadNote"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LeadNote"> | Date | string
  }

  export type SearchJobWhereInput = {
    AND?: SearchJobWhereInput | SearchJobWhereInput[]
    OR?: SearchJobWhereInput[]
    NOT?: SearchJobWhereInput | SearchJobWhereInput[]
    id?: StringFilter<"SearchJob"> | string
    name?: StringFilter<"SearchJob"> | string
    country?: StringNullableFilter<"SearchJob"> | string | null
    region?: StringNullableFilter<"SearchJob"> | string | null
    city?: StringNullableFilter<"SearchJob"> | string | null
    district?: StringNullableFilter<"SearchJob"> | string | null
    category?: StringNullableFilter<"SearchJob"> | string | null
    keywords?: StringNullableFilter<"SearchJob"> | string | null
    query?: StringNullableFilter<"SearchJob"> | string | null
    scope?: StringNullableFilter<"SearchJob"> | string | null
    provider?: StringNullableFilter<"SearchJob"> | string | null
    status?: EnumJobStatusFilter<"SearchJob"> | $Enums.JobStatus
    progress?: FloatFilter<"SearchJob"> | number
    totalTasks?: IntFilter<"SearchJob"> | number
    completedTasks?: IntFilter<"SearchJob"> | number
    failedTasks?: IntFilter<"SearchJob"> | number
    resultCount?: IntFilter<"SearchJob"> | number
    duplicateCount?: IntFilter<"SearchJob"> | number
    websiteListedCount?: IntFilter<"SearchJob"> | number
    websiteOpportunityCount?: IntFilter<"SearchJob"> | number
    startedAt?: DateTimeNullableFilter<"SearchJob"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"SearchJob"> | Date | string | null
    createdAt?: DateTimeFilter<"SearchJob"> | Date | string
    error?: StringNullableFilter<"SearchJob"> | string | null
    prospects?: ProspectListRelationFilter
  }

  export type SearchJobOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    keywords?: SortOrderInput | SortOrder
    query?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    provider?: SortOrderInput | SortOrder
    status?: SortOrder
    progress?: SortOrder
    totalTasks?: SortOrder
    completedTasks?: SortOrder
    failedTasks?: SortOrder
    resultCount?: SortOrder
    duplicateCount?: SortOrder
    websiteListedCount?: SortOrder
    websiteOpportunityCount?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    error?: SortOrderInput | SortOrder
    prospects?: ProspectOrderByRelationAggregateInput
  }

  export type SearchJobWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SearchJobWhereInput | SearchJobWhereInput[]
    OR?: SearchJobWhereInput[]
    NOT?: SearchJobWhereInput | SearchJobWhereInput[]
    name?: StringFilter<"SearchJob"> | string
    country?: StringNullableFilter<"SearchJob"> | string | null
    region?: StringNullableFilter<"SearchJob"> | string | null
    city?: StringNullableFilter<"SearchJob"> | string | null
    district?: StringNullableFilter<"SearchJob"> | string | null
    category?: StringNullableFilter<"SearchJob"> | string | null
    keywords?: StringNullableFilter<"SearchJob"> | string | null
    query?: StringNullableFilter<"SearchJob"> | string | null
    scope?: StringNullableFilter<"SearchJob"> | string | null
    provider?: StringNullableFilter<"SearchJob"> | string | null
    status?: EnumJobStatusFilter<"SearchJob"> | $Enums.JobStatus
    progress?: FloatFilter<"SearchJob"> | number
    totalTasks?: IntFilter<"SearchJob"> | number
    completedTasks?: IntFilter<"SearchJob"> | number
    failedTasks?: IntFilter<"SearchJob"> | number
    resultCount?: IntFilter<"SearchJob"> | number
    duplicateCount?: IntFilter<"SearchJob"> | number
    websiteListedCount?: IntFilter<"SearchJob"> | number
    websiteOpportunityCount?: IntFilter<"SearchJob"> | number
    startedAt?: DateTimeNullableFilter<"SearchJob"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"SearchJob"> | Date | string | null
    createdAt?: DateTimeFilter<"SearchJob"> | Date | string
    error?: StringNullableFilter<"SearchJob"> | string | null
    prospects?: ProspectListRelationFilter
  }, "id">

  export type SearchJobOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    keywords?: SortOrderInput | SortOrder
    query?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    provider?: SortOrderInput | SortOrder
    status?: SortOrder
    progress?: SortOrder
    totalTasks?: SortOrder
    completedTasks?: SortOrder
    failedTasks?: SortOrder
    resultCount?: SortOrder
    duplicateCount?: SortOrder
    websiteListedCount?: SortOrder
    websiteOpportunityCount?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    error?: SortOrderInput | SortOrder
    _count?: SearchJobCountOrderByAggregateInput
    _avg?: SearchJobAvgOrderByAggregateInput
    _max?: SearchJobMaxOrderByAggregateInput
    _min?: SearchJobMinOrderByAggregateInput
    _sum?: SearchJobSumOrderByAggregateInput
  }

  export type SearchJobScalarWhereWithAggregatesInput = {
    AND?: SearchJobScalarWhereWithAggregatesInput | SearchJobScalarWhereWithAggregatesInput[]
    OR?: SearchJobScalarWhereWithAggregatesInput[]
    NOT?: SearchJobScalarWhereWithAggregatesInput | SearchJobScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SearchJob"> | string
    name?: StringWithAggregatesFilter<"SearchJob"> | string
    country?: StringNullableWithAggregatesFilter<"SearchJob"> | string | null
    region?: StringNullableWithAggregatesFilter<"SearchJob"> | string | null
    city?: StringNullableWithAggregatesFilter<"SearchJob"> | string | null
    district?: StringNullableWithAggregatesFilter<"SearchJob"> | string | null
    category?: StringNullableWithAggregatesFilter<"SearchJob"> | string | null
    keywords?: StringNullableWithAggregatesFilter<"SearchJob"> | string | null
    query?: StringNullableWithAggregatesFilter<"SearchJob"> | string | null
    scope?: StringNullableWithAggregatesFilter<"SearchJob"> | string | null
    provider?: StringNullableWithAggregatesFilter<"SearchJob"> | string | null
    status?: EnumJobStatusWithAggregatesFilter<"SearchJob"> | $Enums.JobStatus
    progress?: FloatWithAggregatesFilter<"SearchJob"> | number
    totalTasks?: IntWithAggregatesFilter<"SearchJob"> | number
    completedTasks?: IntWithAggregatesFilter<"SearchJob"> | number
    failedTasks?: IntWithAggregatesFilter<"SearchJob"> | number
    resultCount?: IntWithAggregatesFilter<"SearchJob"> | number
    duplicateCount?: IntWithAggregatesFilter<"SearchJob"> | number
    websiteListedCount?: IntWithAggregatesFilter<"SearchJob"> | number
    websiteOpportunityCount?: IntWithAggregatesFilter<"SearchJob"> | number
    startedAt?: DateTimeNullableWithAggregatesFilter<"SearchJob"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"SearchJob"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SearchJob"> | Date | string
    error?: StringNullableWithAggregatesFilter<"SearchJob"> | string | null
  }

  export type ExportJobWhereInput = {
    AND?: ExportJobWhereInput | ExportJobWhereInput[]
    OR?: ExportJobWhereInput[]
    NOT?: ExportJobWhereInput | ExportJobWhereInput[]
    id?: StringFilter<"ExportJob"> | string
    format?: StringFilter<"ExportJob"> | string
    query?: JsonNullableFilter<"ExportJob">
    status?: EnumJobStatusFilter<"ExportJob"> | $Enums.JobStatus
    fileUrl?: StringNullableFilter<"ExportJob"> | string | null
    recordCount?: IntFilter<"ExportJob"> | number
    error?: StringNullableFilter<"ExportJob"> | string | null
    createdAt?: DateTimeFilter<"ExportJob"> | Date | string
    completedAt?: DateTimeNullableFilter<"ExportJob"> | Date | string | null
  }

  export type ExportJobOrderByWithRelationInput = {
    id?: SortOrder
    format?: SortOrder
    query?: SortOrderInput | SortOrder
    status?: SortOrder
    fileUrl?: SortOrderInput | SortOrder
    recordCount?: SortOrder
    error?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
  }

  export type ExportJobWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExportJobWhereInput | ExportJobWhereInput[]
    OR?: ExportJobWhereInput[]
    NOT?: ExportJobWhereInput | ExportJobWhereInput[]
    format?: StringFilter<"ExportJob"> | string
    query?: JsonNullableFilter<"ExportJob">
    status?: EnumJobStatusFilter<"ExportJob"> | $Enums.JobStatus
    fileUrl?: StringNullableFilter<"ExportJob"> | string | null
    recordCount?: IntFilter<"ExportJob"> | number
    error?: StringNullableFilter<"ExportJob"> | string | null
    createdAt?: DateTimeFilter<"ExportJob"> | Date | string
    completedAt?: DateTimeNullableFilter<"ExportJob"> | Date | string | null
  }, "id">

  export type ExportJobOrderByWithAggregationInput = {
    id?: SortOrder
    format?: SortOrder
    query?: SortOrderInput | SortOrder
    status?: SortOrder
    fileUrl?: SortOrderInput | SortOrder
    recordCount?: SortOrder
    error?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    _count?: ExportJobCountOrderByAggregateInput
    _avg?: ExportJobAvgOrderByAggregateInput
    _max?: ExportJobMaxOrderByAggregateInput
    _min?: ExportJobMinOrderByAggregateInput
    _sum?: ExportJobSumOrderByAggregateInput
  }

  export type ExportJobScalarWhereWithAggregatesInput = {
    AND?: ExportJobScalarWhereWithAggregatesInput | ExportJobScalarWhereWithAggregatesInput[]
    OR?: ExportJobScalarWhereWithAggregatesInput[]
    NOT?: ExportJobScalarWhereWithAggregatesInput | ExportJobScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExportJob"> | string
    format?: StringWithAggregatesFilter<"ExportJob"> | string
    query?: JsonNullableWithAggregatesFilter<"ExportJob">
    status?: EnumJobStatusWithAggregatesFilter<"ExportJob"> | $Enums.JobStatus
    fileUrl?: StringNullableWithAggregatesFilter<"ExportJob"> | string | null
    recordCount?: IntWithAggregatesFilter<"ExportJob"> | number
    error?: StringNullableWithAggregatesFilter<"ExportJob"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ExportJob"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"ExportJob"> | Date | string | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    id?: string
    action: string
    details?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    action: string
    userId?: string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    action: string
    userId?: string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemSettingCreateInput = {
    id?: string
    key: string
    value: string
    description?: string | null
    updatedAt?: Date | string
  }

  export type SystemSettingUncheckedCreateInput = {
    id?: string
    key: string
    value: string
    description?: string | null
    updatedAt?: Date | string
  }

  export type SystemSettingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemSettingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemSettingCreateManyInput = {
    id?: string
    key: string
    value: string
    description?: string | null
    updatedAt?: Date | string
  }

  export type SystemSettingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemSettingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessEntityCreateInput = {
    id?: string
    canonicalName: string
    providerIds?: NullableJsonNullValueInput | InputJsonValue
    country?: string | null
    region?: string | null
    city?: string | null
    district?: string | null
    address?: string | null
    latitude?: number | null
    longitude?: number | null
    categories?: BusinessEntityCreatecategoriesInput | string[]
    primaryCategory?: string | null
    businessModel?: string | null
    legalEntity?: string | null
    phone?: string | null
    website?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    rating?: number | null
    reviewCount?: number | null
    businessStatus?: string | null
    sourceProviders?: BusinessEntityCreatesourceProvidersInput | string[]
    dataConfidence?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastVerifiedAt?: Date | string | null
    prospects?: ProspectCreateNestedManyWithoutBusinessEntityInput
  }

  export type BusinessEntityUncheckedCreateInput = {
    id?: string
    canonicalName: string
    providerIds?: NullableJsonNullValueInput | InputJsonValue
    country?: string | null
    region?: string | null
    city?: string | null
    district?: string | null
    address?: string | null
    latitude?: number | null
    longitude?: number | null
    categories?: BusinessEntityCreatecategoriesInput | string[]
    primaryCategory?: string | null
    businessModel?: string | null
    legalEntity?: string | null
    phone?: string | null
    website?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    rating?: number | null
    reviewCount?: number | null
    businessStatus?: string | null
    sourceProviders?: BusinessEntityCreatesourceProvidersInput | string[]
    dataConfidence?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastVerifiedAt?: Date | string | null
    prospects?: ProspectUncheckedCreateNestedManyWithoutBusinessEntityInput
  }

  export type BusinessEntityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    canonicalName?: StringFieldUpdateOperationsInput | string
    providerIds?: NullableJsonNullValueInput | InputJsonValue
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    categories?: BusinessEntityUpdatecategoriesInput | string[]
    primaryCategory?: NullableStringFieldUpdateOperationsInput | string | null
    businessModel?: NullableStringFieldUpdateOperationsInput | string | null
    legalEntity?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    businessStatus?: NullableStringFieldUpdateOperationsInput | string | null
    sourceProviders?: BusinessEntityUpdatesourceProvidersInput | string[]
    dataConfidence?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prospects?: ProspectUpdateManyWithoutBusinessEntityNestedInput
  }

  export type BusinessEntityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    canonicalName?: StringFieldUpdateOperationsInput | string
    providerIds?: NullableJsonNullValueInput | InputJsonValue
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    categories?: BusinessEntityUpdatecategoriesInput | string[]
    primaryCategory?: NullableStringFieldUpdateOperationsInput | string | null
    businessModel?: NullableStringFieldUpdateOperationsInput | string | null
    legalEntity?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    businessStatus?: NullableStringFieldUpdateOperationsInput | string | null
    sourceProviders?: BusinessEntityUpdatesourceProvidersInput | string[]
    dataConfidence?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prospects?: ProspectUncheckedUpdateManyWithoutBusinessEntityNestedInput
  }

  export type BusinessEntityCreateManyInput = {
    id?: string
    canonicalName: string
    providerIds?: NullableJsonNullValueInput | InputJsonValue
    country?: string | null
    region?: string | null
    city?: string | null
    district?: string | null
    address?: string | null
    latitude?: number | null
    longitude?: number | null
    categories?: BusinessEntityCreatecategoriesInput | string[]
    primaryCategory?: string | null
    businessModel?: string | null
    legalEntity?: string | null
    phone?: string | null
    website?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    rating?: number | null
    reviewCount?: number | null
    businessStatus?: string | null
    sourceProviders?: BusinessEntityCreatesourceProvidersInput | string[]
    dataConfidence?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastVerifiedAt?: Date | string | null
  }

  export type BusinessEntityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    canonicalName?: StringFieldUpdateOperationsInput | string
    providerIds?: NullableJsonNullValueInput | InputJsonValue
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    categories?: BusinessEntityUpdatecategoriesInput | string[]
    primaryCategory?: NullableStringFieldUpdateOperationsInput | string | null
    businessModel?: NullableStringFieldUpdateOperationsInput | string | null
    legalEntity?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    businessStatus?: NullableStringFieldUpdateOperationsInput | string | null
    sourceProviders?: BusinessEntityUpdatesourceProvidersInput | string[]
    dataConfidence?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BusinessEntityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    canonicalName?: StringFieldUpdateOperationsInput | string
    providerIds?: NullableJsonNullValueInput | InputJsonValue
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    categories?: BusinessEntityUpdatecategoriesInput | string[]
    primaryCategory?: NullableStringFieldUpdateOperationsInput | string | null
    businessModel?: NullableStringFieldUpdateOperationsInput | string | null
    legalEntity?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    businessStatus?: NullableStringFieldUpdateOperationsInput | string | null
    sourceProviders?: BusinessEntityUpdatesourceProvidersInput | string[]
    dataConfidence?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProspectCreateInput = {
    id?: string
    sourceType: $Enums.SourceType
    businessName: string
    classification?: string | null
    classificationConfidence?: number | null
    businessModel?: string | null
    businessModelConfidence?: number | null
    websiteStatus?: $Enums.WebsiteStatus
    websiteUrl?: string | null
    websiteConfidence?: number | null
    phone?: string | null
    country?: string | null
    region?: string | null
    city?: string | null
    address?: string | null
    latitude?: number | null
    longitude?: number | null
    rating?: number | null
    reviewCount?: number | null
    businessStatus?: string | null
    leadScore?: number | null
    priority?: $Enums.LeadPriority | null
    leadStatus?: $Enums.LeadStatus
    demoStatus?: $Enums.DemoStatus
    demoUrl?: string | null
    notes?: string | null
    assignedTo?: string | null
    tags?: ProspectCreatetagsInput | string[]
    customFields?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    lastVerifiedAt?: Date | string | null
    businessEntity?: BusinessEntityCreateNestedOneWithoutProspectsInput
    searchJob?: SearchJobCreateNestedOneWithoutProspectsInput
    leadNotes?: LeadNoteCreateNestedManyWithoutProspectInput
  }

  export type ProspectUncheckedCreateInput = {
    id?: string
    businessEntityId?: string | null
    searchJobId?: string | null
    sourceType: $Enums.SourceType
    businessName: string
    classification?: string | null
    classificationConfidence?: number | null
    businessModel?: string | null
    businessModelConfidence?: number | null
    websiteStatus?: $Enums.WebsiteStatus
    websiteUrl?: string | null
    websiteConfidence?: number | null
    phone?: string | null
    country?: string | null
    region?: string | null
    city?: string | null
    address?: string | null
    latitude?: number | null
    longitude?: number | null
    rating?: number | null
    reviewCount?: number | null
    businessStatus?: string | null
    leadScore?: number | null
    priority?: $Enums.LeadPriority | null
    leadStatus?: $Enums.LeadStatus
    demoStatus?: $Enums.DemoStatus
    demoUrl?: string | null
    notes?: string | null
    assignedTo?: string | null
    tags?: ProspectCreatetagsInput | string[]
    customFields?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    lastVerifiedAt?: Date | string | null
    leadNotes?: LeadNoteUncheckedCreateNestedManyWithoutProspectInput
  }

  export type ProspectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceType?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    businessName?: StringFieldUpdateOperationsInput | string
    classification?: NullableStringFieldUpdateOperationsInput | string | null
    classificationConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    businessModel?: NullableStringFieldUpdateOperationsInput | string | null
    businessModelConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    websiteStatus?: EnumWebsiteStatusFieldUpdateOperationsInput | $Enums.WebsiteStatus
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    businessStatus?: NullableStringFieldUpdateOperationsInput | string | null
    leadScore?: NullableFloatFieldUpdateOperationsInput | number | null
    priority?: NullableEnumLeadPriorityFieldUpdateOperationsInput | $Enums.LeadPriority | null
    leadStatus?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    demoStatus?: EnumDemoStatusFieldUpdateOperationsInput | $Enums.DemoStatus
    demoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ProspectUpdatetagsInput | string[]
    customFields?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    businessEntity?: BusinessEntityUpdateOneWithoutProspectsNestedInput
    searchJob?: SearchJobUpdateOneWithoutProspectsNestedInput
    leadNotes?: LeadNoteUpdateManyWithoutProspectNestedInput
  }

  export type ProspectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessEntityId?: NullableStringFieldUpdateOperationsInput | string | null
    searchJobId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceType?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    businessName?: StringFieldUpdateOperationsInput | string
    classification?: NullableStringFieldUpdateOperationsInput | string | null
    classificationConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    businessModel?: NullableStringFieldUpdateOperationsInput | string | null
    businessModelConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    websiteStatus?: EnumWebsiteStatusFieldUpdateOperationsInput | $Enums.WebsiteStatus
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    businessStatus?: NullableStringFieldUpdateOperationsInput | string | null
    leadScore?: NullableFloatFieldUpdateOperationsInput | number | null
    priority?: NullableEnumLeadPriorityFieldUpdateOperationsInput | $Enums.LeadPriority | null
    leadStatus?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    demoStatus?: EnumDemoStatusFieldUpdateOperationsInput | $Enums.DemoStatus
    demoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ProspectUpdatetagsInput | string[]
    customFields?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leadNotes?: LeadNoteUncheckedUpdateManyWithoutProspectNestedInput
  }

  export type ProspectCreateManyInput = {
    id?: string
    businessEntityId?: string | null
    searchJobId?: string | null
    sourceType: $Enums.SourceType
    businessName: string
    classification?: string | null
    classificationConfidence?: number | null
    businessModel?: string | null
    businessModelConfidence?: number | null
    websiteStatus?: $Enums.WebsiteStatus
    websiteUrl?: string | null
    websiteConfidence?: number | null
    phone?: string | null
    country?: string | null
    region?: string | null
    city?: string | null
    address?: string | null
    latitude?: number | null
    longitude?: number | null
    rating?: number | null
    reviewCount?: number | null
    businessStatus?: string | null
    leadScore?: number | null
    priority?: $Enums.LeadPriority | null
    leadStatus?: $Enums.LeadStatus
    demoStatus?: $Enums.DemoStatus
    demoUrl?: string | null
    notes?: string | null
    assignedTo?: string | null
    tags?: ProspectCreatetagsInput | string[]
    customFields?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    lastVerifiedAt?: Date | string | null
  }

  export type ProspectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceType?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    businessName?: StringFieldUpdateOperationsInput | string
    classification?: NullableStringFieldUpdateOperationsInput | string | null
    classificationConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    businessModel?: NullableStringFieldUpdateOperationsInput | string | null
    businessModelConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    websiteStatus?: EnumWebsiteStatusFieldUpdateOperationsInput | $Enums.WebsiteStatus
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    businessStatus?: NullableStringFieldUpdateOperationsInput | string | null
    leadScore?: NullableFloatFieldUpdateOperationsInput | number | null
    priority?: NullableEnumLeadPriorityFieldUpdateOperationsInput | $Enums.LeadPriority | null
    leadStatus?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    demoStatus?: EnumDemoStatusFieldUpdateOperationsInput | $Enums.DemoStatus
    demoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ProspectUpdatetagsInput | string[]
    customFields?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProspectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessEntityId?: NullableStringFieldUpdateOperationsInput | string | null
    searchJobId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceType?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    businessName?: StringFieldUpdateOperationsInput | string
    classification?: NullableStringFieldUpdateOperationsInput | string | null
    classificationConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    businessModel?: NullableStringFieldUpdateOperationsInput | string | null
    businessModelConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    websiteStatus?: EnumWebsiteStatusFieldUpdateOperationsInput | $Enums.WebsiteStatus
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    businessStatus?: NullableStringFieldUpdateOperationsInput | string | null
    leadScore?: NullableFloatFieldUpdateOperationsInput | number | null
    priority?: NullableEnumLeadPriorityFieldUpdateOperationsInput | $Enums.LeadPriority | null
    leadStatus?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    demoStatus?: EnumDemoStatusFieldUpdateOperationsInput | $Enums.DemoStatus
    demoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ProspectUpdatetagsInput | string[]
    customFields?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LeadNoteCreateInput = {
    id?: string
    authorId?: string | null
    authorName?: string | null
    content: string
    createdAt?: Date | string
    prospect: ProspectCreateNestedOneWithoutLeadNotesInput
  }

  export type LeadNoteUncheckedCreateInput = {
    id?: string
    prospectId: string
    authorId?: string | null
    authorName?: string | null
    content: string
    createdAt?: Date | string
  }

  export type LeadNoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    authorName?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prospect?: ProspectUpdateOneRequiredWithoutLeadNotesNestedInput
  }

  export type LeadNoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    prospectId?: StringFieldUpdateOperationsInput | string
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    authorName?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadNoteCreateManyInput = {
    id?: string
    prospectId: string
    authorId?: string | null
    authorName?: string | null
    content: string
    createdAt?: Date | string
  }

  export type LeadNoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    authorName?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadNoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    prospectId?: StringFieldUpdateOperationsInput | string
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    authorName?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchJobCreateInput = {
    id?: string
    name: string
    country?: string | null
    region?: string | null
    city?: string | null
    district?: string | null
    category?: string | null
    keywords?: string | null
    query?: string | null
    scope?: string | null
    provider?: string | null
    status?: $Enums.JobStatus
    progress?: number
    totalTasks?: number
    completedTasks?: number
    failedTasks?: number
    resultCount?: number
    duplicateCount?: number
    websiteListedCount?: number
    websiteOpportunityCount?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    error?: string | null
    prospects?: ProspectCreateNestedManyWithoutSearchJobInput
  }

  export type SearchJobUncheckedCreateInput = {
    id?: string
    name: string
    country?: string | null
    region?: string | null
    city?: string | null
    district?: string | null
    category?: string | null
    keywords?: string | null
    query?: string | null
    scope?: string | null
    provider?: string | null
    status?: $Enums.JobStatus
    progress?: number
    totalTasks?: number
    completedTasks?: number
    failedTasks?: number
    resultCount?: number
    duplicateCount?: number
    websiteListedCount?: number
    websiteOpportunityCount?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    error?: string | null
    prospects?: ProspectUncheckedCreateNestedManyWithoutSearchJobInput
  }

  export type SearchJobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    query?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    progress?: FloatFieldUpdateOperationsInput | number
    totalTasks?: IntFieldUpdateOperationsInput | number
    completedTasks?: IntFieldUpdateOperationsInput | number
    failedTasks?: IntFieldUpdateOperationsInput | number
    resultCount?: IntFieldUpdateOperationsInput | number
    duplicateCount?: IntFieldUpdateOperationsInput | number
    websiteListedCount?: IntFieldUpdateOperationsInput | number
    websiteOpportunityCount?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    prospects?: ProspectUpdateManyWithoutSearchJobNestedInput
  }

  export type SearchJobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    query?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    progress?: FloatFieldUpdateOperationsInput | number
    totalTasks?: IntFieldUpdateOperationsInput | number
    completedTasks?: IntFieldUpdateOperationsInput | number
    failedTasks?: IntFieldUpdateOperationsInput | number
    resultCount?: IntFieldUpdateOperationsInput | number
    duplicateCount?: IntFieldUpdateOperationsInput | number
    websiteListedCount?: IntFieldUpdateOperationsInput | number
    websiteOpportunityCount?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    prospects?: ProspectUncheckedUpdateManyWithoutSearchJobNestedInput
  }

  export type SearchJobCreateManyInput = {
    id?: string
    name: string
    country?: string | null
    region?: string | null
    city?: string | null
    district?: string | null
    category?: string | null
    keywords?: string | null
    query?: string | null
    scope?: string | null
    provider?: string | null
    status?: $Enums.JobStatus
    progress?: number
    totalTasks?: number
    completedTasks?: number
    failedTasks?: number
    resultCount?: number
    duplicateCount?: number
    websiteListedCount?: number
    websiteOpportunityCount?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    error?: string | null
  }

  export type SearchJobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    query?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    progress?: FloatFieldUpdateOperationsInput | number
    totalTasks?: IntFieldUpdateOperationsInput | number
    completedTasks?: IntFieldUpdateOperationsInput | number
    failedTasks?: IntFieldUpdateOperationsInput | number
    resultCount?: IntFieldUpdateOperationsInput | number
    duplicateCount?: IntFieldUpdateOperationsInput | number
    websiteListedCount?: IntFieldUpdateOperationsInput | number
    websiteOpportunityCount?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SearchJobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    query?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    progress?: FloatFieldUpdateOperationsInput | number
    totalTasks?: IntFieldUpdateOperationsInput | number
    completedTasks?: IntFieldUpdateOperationsInput | number
    failedTasks?: IntFieldUpdateOperationsInput | number
    resultCount?: IntFieldUpdateOperationsInput | number
    duplicateCount?: IntFieldUpdateOperationsInput | number
    websiteListedCount?: IntFieldUpdateOperationsInput | number
    websiteOpportunityCount?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExportJobCreateInput = {
    id?: string
    format?: string
    query?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.JobStatus
    fileUrl?: string | null
    recordCount?: number
    error?: string | null
    createdAt?: Date | string
    completedAt?: Date | string | null
  }

  export type ExportJobUncheckedCreateInput = {
    id?: string
    format?: string
    query?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.JobStatus
    fileUrl?: string | null
    recordCount?: number
    error?: string | null
    createdAt?: Date | string
    completedAt?: Date | string | null
  }

  export type ExportJobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    query?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    recordCount?: IntFieldUpdateOperationsInput | number
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ExportJobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    query?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    recordCount?: IntFieldUpdateOperationsInput | number
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ExportJobCreateManyInput = {
    id?: string
    format?: string
    query?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.JobStatus
    fileUrl?: string | null
    recordCount?: number
    error?: string | null
    createdAt?: Date | string
    completedAt?: Date | string | null
  }

  export type ExportJobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    query?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    recordCount?: IntFieldUpdateOperationsInput | number
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ExportJobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    query?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    recordCount?: IntFieldUpdateOperationsInput | number
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    userId?: SortOrder
    details?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    userId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    userId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type SystemSettingCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemSettingMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemSettingMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ProspectListRelationFilter = {
    every?: ProspectWhereInput
    some?: ProspectWhereInput
    none?: ProspectWhereInput
  }

  export type ProspectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BusinessEntityCountOrderByAggregateInput = {
    id?: SortOrder
    canonicalName?: SortOrder
    providerIds?: SortOrder
    country?: SortOrder
    region?: SortOrder
    city?: SortOrder
    district?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    categories?: SortOrder
    primaryCategory?: SortOrder
    businessModel?: SortOrder
    legalEntity?: SortOrder
    phone?: SortOrder
    website?: SortOrder
    socialLinks?: SortOrder
    rating?: SortOrder
    reviewCount?: SortOrder
    businessStatus?: SortOrder
    sourceProviders?: SortOrder
    dataConfidence?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastVerifiedAt?: SortOrder
  }

  export type BusinessEntityAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    rating?: SortOrder
    reviewCount?: SortOrder
  }

  export type BusinessEntityMaxOrderByAggregateInput = {
    id?: SortOrder
    canonicalName?: SortOrder
    country?: SortOrder
    region?: SortOrder
    city?: SortOrder
    district?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    primaryCategory?: SortOrder
    businessModel?: SortOrder
    legalEntity?: SortOrder
    phone?: SortOrder
    website?: SortOrder
    rating?: SortOrder
    reviewCount?: SortOrder
    businessStatus?: SortOrder
    dataConfidence?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastVerifiedAt?: SortOrder
  }

  export type BusinessEntityMinOrderByAggregateInput = {
    id?: SortOrder
    canonicalName?: SortOrder
    country?: SortOrder
    region?: SortOrder
    city?: SortOrder
    district?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    primaryCategory?: SortOrder
    businessModel?: SortOrder
    legalEntity?: SortOrder
    phone?: SortOrder
    website?: SortOrder
    rating?: SortOrder
    reviewCount?: SortOrder
    businessStatus?: SortOrder
    dataConfidence?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastVerifiedAt?: SortOrder
  }

  export type BusinessEntitySumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    rating?: SortOrder
    reviewCount?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumSourceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SourceType | EnumSourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SourceType[] | ListEnumSourceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SourceType[] | ListEnumSourceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSourceTypeFilter<$PrismaModel> | $Enums.SourceType
  }

  export type EnumWebsiteStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WebsiteStatus | EnumWebsiteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WebsiteStatus[] | ListEnumWebsiteStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebsiteStatus[] | ListEnumWebsiteStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWebsiteStatusFilter<$PrismaModel> | $Enums.WebsiteStatus
  }

  export type EnumLeadPriorityNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadPriority | EnumLeadPriorityFieldRefInput<$PrismaModel> | null
    in?: $Enums.LeadPriority[] | ListEnumLeadPriorityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.LeadPriority[] | ListEnumLeadPriorityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumLeadPriorityNullableFilter<$PrismaModel> | $Enums.LeadPriority | null
  }

  export type EnumLeadStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadStatus | EnumLeadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadStatusFilter<$PrismaModel> | $Enums.LeadStatus
  }

  export type EnumDemoStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DemoStatus | EnumDemoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DemoStatus[] | ListEnumDemoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DemoStatus[] | ListEnumDemoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDemoStatusFilter<$PrismaModel> | $Enums.DemoStatus
  }

  export type BusinessEntityNullableScalarRelationFilter = {
    is?: BusinessEntityWhereInput | null
    isNot?: BusinessEntityWhereInput | null
  }

  export type SearchJobNullableScalarRelationFilter = {
    is?: SearchJobWhereInput | null
    isNot?: SearchJobWhereInput | null
  }

  export type LeadNoteListRelationFilter = {
    every?: LeadNoteWhereInput
    some?: LeadNoteWhereInput
    none?: LeadNoteWhereInput
  }

  export type LeadNoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProspectCountOrderByAggregateInput = {
    id?: SortOrder
    businessEntityId?: SortOrder
    searchJobId?: SortOrder
    sourceType?: SortOrder
    businessName?: SortOrder
    classification?: SortOrder
    classificationConfidence?: SortOrder
    businessModel?: SortOrder
    businessModelConfidence?: SortOrder
    websiteStatus?: SortOrder
    websiteUrl?: SortOrder
    websiteConfidence?: SortOrder
    phone?: SortOrder
    country?: SortOrder
    region?: SortOrder
    city?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    rating?: SortOrder
    reviewCount?: SortOrder
    businessStatus?: SortOrder
    leadScore?: SortOrder
    priority?: SortOrder
    leadStatus?: SortOrder
    demoStatus?: SortOrder
    demoUrl?: SortOrder
    notes?: SortOrder
    assignedTo?: SortOrder
    tags?: SortOrder
    customFields?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastVerifiedAt?: SortOrder
  }

  export type ProspectAvgOrderByAggregateInput = {
    classificationConfidence?: SortOrder
    businessModelConfidence?: SortOrder
    websiteConfidence?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    rating?: SortOrder
    reviewCount?: SortOrder
    leadScore?: SortOrder
  }

  export type ProspectMaxOrderByAggregateInput = {
    id?: SortOrder
    businessEntityId?: SortOrder
    searchJobId?: SortOrder
    sourceType?: SortOrder
    businessName?: SortOrder
    classification?: SortOrder
    classificationConfidence?: SortOrder
    businessModel?: SortOrder
    businessModelConfidence?: SortOrder
    websiteStatus?: SortOrder
    websiteUrl?: SortOrder
    websiteConfidence?: SortOrder
    phone?: SortOrder
    country?: SortOrder
    region?: SortOrder
    city?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    rating?: SortOrder
    reviewCount?: SortOrder
    businessStatus?: SortOrder
    leadScore?: SortOrder
    priority?: SortOrder
    leadStatus?: SortOrder
    demoStatus?: SortOrder
    demoUrl?: SortOrder
    notes?: SortOrder
    assignedTo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastVerifiedAt?: SortOrder
  }

  export type ProspectMinOrderByAggregateInput = {
    id?: SortOrder
    businessEntityId?: SortOrder
    searchJobId?: SortOrder
    sourceType?: SortOrder
    businessName?: SortOrder
    classification?: SortOrder
    classificationConfidence?: SortOrder
    businessModel?: SortOrder
    businessModelConfidence?: SortOrder
    websiteStatus?: SortOrder
    websiteUrl?: SortOrder
    websiteConfidence?: SortOrder
    phone?: SortOrder
    country?: SortOrder
    region?: SortOrder
    city?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    rating?: SortOrder
    reviewCount?: SortOrder
    businessStatus?: SortOrder
    leadScore?: SortOrder
    priority?: SortOrder
    leadStatus?: SortOrder
    demoStatus?: SortOrder
    demoUrl?: SortOrder
    notes?: SortOrder
    assignedTo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastVerifiedAt?: SortOrder
  }

  export type ProspectSumOrderByAggregateInput = {
    classificationConfidence?: SortOrder
    businessModelConfidence?: SortOrder
    websiteConfidence?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    rating?: SortOrder
    reviewCount?: SortOrder
    leadScore?: SortOrder
  }

  export type EnumSourceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SourceType | EnumSourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SourceType[] | ListEnumSourceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SourceType[] | ListEnumSourceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSourceTypeWithAggregatesFilter<$PrismaModel> | $Enums.SourceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSourceTypeFilter<$PrismaModel>
    _max?: NestedEnumSourceTypeFilter<$PrismaModel>
  }

  export type EnumWebsiteStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WebsiteStatus | EnumWebsiteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WebsiteStatus[] | ListEnumWebsiteStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebsiteStatus[] | ListEnumWebsiteStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWebsiteStatusWithAggregatesFilter<$PrismaModel> | $Enums.WebsiteStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWebsiteStatusFilter<$PrismaModel>
    _max?: NestedEnumWebsiteStatusFilter<$PrismaModel>
  }

  export type EnumLeadPriorityNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadPriority | EnumLeadPriorityFieldRefInput<$PrismaModel> | null
    in?: $Enums.LeadPriority[] | ListEnumLeadPriorityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.LeadPriority[] | ListEnumLeadPriorityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumLeadPriorityNullableWithAggregatesFilter<$PrismaModel> | $Enums.LeadPriority | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumLeadPriorityNullableFilter<$PrismaModel>
    _max?: NestedEnumLeadPriorityNullableFilter<$PrismaModel>
  }

  export type EnumLeadStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadStatus | EnumLeadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadStatusWithAggregatesFilter<$PrismaModel> | $Enums.LeadStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeadStatusFilter<$PrismaModel>
    _max?: NestedEnumLeadStatusFilter<$PrismaModel>
  }

  export type EnumDemoStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DemoStatus | EnumDemoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DemoStatus[] | ListEnumDemoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DemoStatus[] | ListEnumDemoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDemoStatusWithAggregatesFilter<$PrismaModel> | $Enums.DemoStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDemoStatusFilter<$PrismaModel>
    _max?: NestedEnumDemoStatusFilter<$PrismaModel>
  }

  export type ProspectScalarRelationFilter = {
    is?: ProspectWhereInput
    isNot?: ProspectWhereInput
  }

  export type LeadNoteCountOrderByAggregateInput = {
    id?: SortOrder
    prospectId?: SortOrder
    authorId?: SortOrder
    authorName?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type LeadNoteMaxOrderByAggregateInput = {
    id?: SortOrder
    prospectId?: SortOrder
    authorId?: SortOrder
    authorName?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type LeadNoteMinOrderByAggregateInput = {
    id?: SortOrder
    prospectId?: SortOrder
    authorId?: SortOrder
    authorName?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusFilter<$PrismaModel> | $Enums.JobStatus
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type SearchJobCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    region?: SortOrder
    city?: SortOrder
    district?: SortOrder
    category?: SortOrder
    keywords?: SortOrder
    query?: SortOrder
    scope?: SortOrder
    provider?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    totalTasks?: SortOrder
    completedTasks?: SortOrder
    failedTasks?: SortOrder
    resultCount?: SortOrder
    duplicateCount?: SortOrder
    websiteListedCount?: SortOrder
    websiteOpportunityCount?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    error?: SortOrder
  }

  export type SearchJobAvgOrderByAggregateInput = {
    progress?: SortOrder
    totalTasks?: SortOrder
    completedTasks?: SortOrder
    failedTasks?: SortOrder
    resultCount?: SortOrder
    duplicateCount?: SortOrder
    websiteListedCount?: SortOrder
    websiteOpportunityCount?: SortOrder
  }

  export type SearchJobMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    region?: SortOrder
    city?: SortOrder
    district?: SortOrder
    category?: SortOrder
    keywords?: SortOrder
    query?: SortOrder
    scope?: SortOrder
    provider?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    totalTasks?: SortOrder
    completedTasks?: SortOrder
    failedTasks?: SortOrder
    resultCount?: SortOrder
    duplicateCount?: SortOrder
    websiteListedCount?: SortOrder
    websiteOpportunityCount?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    error?: SortOrder
  }

  export type SearchJobMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    region?: SortOrder
    city?: SortOrder
    district?: SortOrder
    category?: SortOrder
    keywords?: SortOrder
    query?: SortOrder
    scope?: SortOrder
    provider?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    totalTasks?: SortOrder
    completedTasks?: SortOrder
    failedTasks?: SortOrder
    resultCount?: SortOrder
    duplicateCount?: SortOrder
    websiteListedCount?: SortOrder
    websiteOpportunityCount?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    error?: SortOrder
  }

  export type SearchJobSumOrderByAggregateInput = {
    progress?: SortOrder
    totalTasks?: SortOrder
    completedTasks?: SortOrder
    failedTasks?: SortOrder
    resultCount?: SortOrder
    duplicateCount?: SortOrder
    websiteListedCount?: SortOrder
    websiteOpportunityCount?: SortOrder
  }

  export type EnumJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.JobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobStatusFilter<$PrismaModel>
    _max?: NestedEnumJobStatusFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ExportJobCountOrderByAggregateInput = {
    id?: SortOrder
    format?: SortOrder
    query?: SortOrder
    status?: SortOrder
    fileUrl?: SortOrder
    recordCount?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrder
  }

  export type ExportJobAvgOrderByAggregateInput = {
    recordCount?: SortOrder
  }

  export type ExportJobMaxOrderByAggregateInput = {
    id?: SortOrder
    format?: SortOrder
    status?: SortOrder
    fileUrl?: SortOrder
    recordCount?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrder
  }

  export type ExportJobMinOrderByAggregateInput = {
    id?: SortOrder
    format?: SortOrder
    status?: SortOrder
    fileUrl?: SortOrder
    recordCount?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrder
  }

  export type ExportJobSumOrderByAggregateInput = {
    recordCount?: SortOrder
  }

  export type AuditLogCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AuditLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneWithoutAuditLogsNestedInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    upsert?: UserUpsertWithoutAuditLogsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuditLogsInput, UserUpdateWithoutAuditLogsInput>, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type BusinessEntityCreatecategoriesInput = {
    set: string[]
  }

  export type BusinessEntityCreatesourceProvidersInput = {
    set: string[]
  }

  export type ProspectCreateNestedManyWithoutBusinessEntityInput = {
    create?: XOR<ProspectCreateWithoutBusinessEntityInput, ProspectUncheckedCreateWithoutBusinessEntityInput> | ProspectCreateWithoutBusinessEntityInput[] | ProspectUncheckedCreateWithoutBusinessEntityInput[]
    connectOrCreate?: ProspectCreateOrConnectWithoutBusinessEntityInput | ProspectCreateOrConnectWithoutBusinessEntityInput[]
    createMany?: ProspectCreateManyBusinessEntityInputEnvelope
    connect?: ProspectWhereUniqueInput | ProspectWhereUniqueInput[]
  }

  export type ProspectUncheckedCreateNestedManyWithoutBusinessEntityInput = {
    create?: XOR<ProspectCreateWithoutBusinessEntityInput, ProspectUncheckedCreateWithoutBusinessEntityInput> | ProspectCreateWithoutBusinessEntityInput[] | ProspectUncheckedCreateWithoutBusinessEntityInput[]
    connectOrCreate?: ProspectCreateOrConnectWithoutBusinessEntityInput | ProspectCreateOrConnectWithoutBusinessEntityInput[]
    createMany?: ProspectCreateManyBusinessEntityInputEnvelope
    connect?: ProspectWhereUniqueInput | ProspectWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BusinessEntityUpdatecategoriesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BusinessEntityUpdatesourceProvidersInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ProspectUpdateManyWithoutBusinessEntityNestedInput = {
    create?: XOR<ProspectCreateWithoutBusinessEntityInput, ProspectUncheckedCreateWithoutBusinessEntityInput> | ProspectCreateWithoutBusinessEntityInput[] | ProspectUncheckedCreateWithoutBusinessEntityInput[]
    connectOrCreate?: ProspectCreateOrConnectWithoutBusinessEntityInput | ProspectCreateOrConnectWithoutBusinessEntityInput[]
    upsert?: ProspectUpsertWithWhereUniqueWithoutBusinessEntityInput | ProspectUpsertWithWhereUniqueWithoutBusinessEntityInput[]
    createMany?: ProspectCreateManyBusinessEntityInputEnvelope
    set?: ProspectWhereUniqueInput | ProspectWhereUniqueInput[]
    disconnect?: ProspectWhereUniqueInput | ProspectWhereUniqueInput[]
    delete?: ProspectWhereUniqueInput | ProspectWhereUniqueInput[]
    connect?: ProspectWhereUniqueInput | ProspectWhereUniqueInput[]
    update?: ProspectUpdateWithWhereUniqueWithoutBusinessEntityInput | ProspectUpdateWithWhereUniqueWithoutBusinessEntityInput[]
    updateMany?: ProspectUpdateManyWithWhereWithoutBusinessEntityInput | ProspectUpdateManyWithWhereWithoutBusinessEntityInput[]
    deleteMany?: ProspectScalarWhereInput | ProspectScalarWhereInput[]
  }

  export type ProspectUncheckedUpdateManyWithoutBusinessEntityNestedInput = {
    create?: XOR<ProspectCreateWithoutBusinessEntityInput, ProspectUncheckedCreateWithoutBusinessEntityInput> | ProspectCreateWithoutBusinessEntityInput[] | ProspectUncheckedCreateWithoutBusinessEntityInput[]
    connectOrCreate?: ProspectCreateOrConnectWithoutBusinessEntityInput | ProspectCreateOrConnectWithoutBusinessEntityInput[]
    upsert?: ProspectUpsertWithWhereUniqueWithoutBusinessEntityInput | ProspectUpsertWithWhereUniqueWithoutBusinessEntityInput[]
    createMany?: ProspectCreateManyBusinessEntityInputEnvelope
    set?: ProspectWhereUniqueInput | ProspectWhereUniqueInput[]
    disconnect?: ProspectWhereUniqueInput | ProspectWhereUniqueInput[]
    delete?: ProspectWhereUniqueInput | ProspectWhereUniqueInput[]
    connect?: ProspectWhereUniqueInput | ProspectWhereUniqueInput[]
    update?: ProspectUpdateWithWhereUniqueWithoutBusinessEntityInput | ProspectUpdateWithWhereUniqueWithoutBusinessEntityInput[]
    updateMany?: ProspectUpdateManyWithWhereWithoutBusinessEntityInput | ProspectUpdateManyWithWhereWithoutBusinessEntityInput[]
    deleteMany?: ProspectScalarWhereInput | ProspectScalarWhereInput[]
  }

  export type ProspectCreatetagsInput = {
    set: string[]
  }

  export type BusinessEntityCreateNestedOneWithoutProspectsInput = {
    create?: XOR<BusinessEntityCreateWithoutProspectsInput, BusinessEntityUncheckedCreateWithoutProspectsInput>
    connectOrCreate?: BusinessEntityCreateOrConnectWithoutProspectsInput
    connect?: BusinessEntityWhereUniqueInput
  }

  export type SearchJobCreateNestedOneWithoutProspectsInput = {
    create?: XOR<SearchJobCreateWithoutProspectsInput, SearchJobUncheckedCreateWithoutProspectsInput>
    connectOrCreate?: SearchJobCreateOrConnectWithoutProspectsInput
    connect?: SearchJobWhereUniqueInput
  }

  export type LeadNoteCreateNestedManyWithoutProspectInput = {
    create?: XOR<LeadNoteCreateWithoutProspectInput, LeadNoteUncheckedCreateWithoutProspectInput> | LeadNoteCreateWithoutProspectInput[] | LeadNoteUncheckedCreateWithoutProspectInput[]
    connectOrCreate?: LeadNoteCreateOrConnectWithoutProspectInput | LeadNoteCreateOrConnectWithoutProspectInput[]
    createMany?: LeadNoteCreateManyProspectInputEnvelope
    connect?: LeadNoteWhereUniqueInput | LeadNoteWhereUniqueInput[]
  }

  export type LeadNoteUncheckedCreateNestedManyWithoutProspectInput = {
    create?: XOR<LeadNoteCreateWithoutProspectInput, LeadNoteUncheckedCreateWithoutProspectInput> | LeadNoteCreateWithoutProspectInput[] | LeadNoteUncheckedCreateWithoutProspectInput[]
    connectOrCreate?: LeadNoteCreateOrConnectWithoutProspectInput | LeadNoteCreateOrConnectWithoutProspectInput[]
    createMany?: LeadNoteCreateManyProspectInputEnvelope
    connect?: LeadNoteWhereUniqueInput | LeadNoteWhereUniqueInput[]
  }

  export type EnumSourceTypeFieldUpdateOperationsInput = {
    set?: $Enums.SourceType
  }

  export type EnumWebsiteStatusFieldUpdateOperationsInput = {
    set?: $Enums.WebsiteStatus
  }

  export type NullableEnumLeadPriorityFieldUpdateOperationsInput = {
    set?: $Enums.LeadPriority | null
  }

  export type EnumLeadStatusFieldUpdateOperationsInput = {
    set?: $Enums.LeadStatus
  }

  export type EnumDemoStatusFieldUpdateOperationsInput = {
    set?: $Enums.DemoStatus
  }

  export type ProspectUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BusinessEntityUpdateOneWithoutProspectsNestedInput = {
    create?: XOR<BusinessEntityCreateWithoutProspectsInput, BusinessEntityUncheckedCreateWithoutProspectsInput>
    connectOrCreate?: BusinessEntityCreateOrConnectWithoutProspectsInput
    upsert?: BusinessEntityUpsertWithoutProspectsInput
    disconnect?: BusinessEntityWhereInput | boolean
    delete?: BusinessEntityWhereInput | boolean
    connect?: BusinessEntityWhereUniqueInput
    update?: XOR<XOR<BusinessEntityUpdateToOneWithWhereWithoutProspectsInput, BusinessEntityUpdateWithoutProspectsInput>, BusinessEntityUncheckedUpdateWithoutProspectsInput>
  }

  export type SearchJobUpdateOneWithoutProspectsNestedInput = {
    create?: XOR<SearchJobCreateWithoutProspectsInput, SearchJobUncheckedCreateWithoutProspectsInput>
    connectOrCreate?: SearchJobCreateOrConnectWithoutProspectsInput
    upsert?: SearchJobUpsertWithoutProspectsInput
    disconnect?: SearchJobWhereInput | boolean
    delete?: SearchJobWhereInput | boolean
    connect?: SearchJobWhereUniqueInput
    update?: XOR<XOR<SearchJobUpdateToOneWithWhereWithoutProspectsInput, SearchJobUpdateWithoutProspectsInput>, SearchJobUncheckedUpdateWithoutProspectsInput>
  }

  export type LeadNoteUpdateManyWithoutProspectNestedInput = {
    create?: XOR<LeadNoteCreateWithoutProspectInput, LeadNoteUncheckedCreateWithoutProspectInput> | LeadNoteCreateWithoutProspectInput[] | LeadNoteUncheckedCreateWithoutProspectInput[]
    connectOrCreate?: LeadNoteCreateOrConnectWithoutProspectInput | LeadNoteCreateOrConnectWithoutProspectInput[]
    upsert?: LeadNoteUpsertWithWhereUniqueWithoutProspectInput | LeadNoteUpsertWithWhereUniqueWithoutProspectInput[]
    createMany?: LeadNoteCreateManyProspectInputEnvelope
    set?: LeadNoteWhereUniqueInput | LeadNoteWhereUniqueInput[]
    disconnect?: LeadNoteWhereUniqueInput | LeadNoteWhereUniqueInput[]
    delete?: LeadNoteWhereUniqueInput | LeadNoteWhereUniqueInput[]
    connect?: LeadNoteWhereUniqueInput | LeadNoteWhereUniqueInput[]
    update?: LeadNoteUpdateWithWhereUniqueWithoutProspectInput | LeadNoteUpdateWithWhereUniqueWithoutProspectInput[]
    updateMany?: LeadNoteUpdateManyWithWhereWithoutProspectInput | LeadNoteUpdateManyWithWhereWithoutProspectInput[]
    deleteMany?: LeadNoteScalarWhereInput | LeadNoteScalarWhereInput[]
  }

  export type LeadNoteUncheckedUpdateManyWithoutProspectNestedInput = {
    create?: XOR<LeadNoteCreateWithoutProspectInput, LeadNoteUncheckedCreateWithoutProspectInput> | LeadNoteCreateWithoutProspectInput[] | LeadNoteUncheckedCreateWithoutProspectInput[]
    connectOrCreate?: LeadNoteCreateOrConnectWithoutProspectInput | LeadNoteCreateOrConnectWithoutProspectInput[]
    upsert?: LeadNoteUpsertWithWhereUniqueWithoutProspectInput | LeadNoteUpsertWithWhereUniqueWithoutProspectInput[]
    createMany?: LeadNoteCreateManyProspectInputEnvelope
    set?: LeadNoteWhereUniqueInput | LeadNoteWhereUniqueInput[]
    disconnect?: LeadNoteWhereUniqueInput | LeadNoteWhereUniqueInput[]
    delete?: LeadNoteWhereUniqueInput | LeadNoteWhereUniqueInput[]
    connect?: LeadNoteWhereUniqueInput | LeadNoteWhereUniqueInput[]
    update?: LeadNoteUpdateWithWhereUniqueWithoutProspectInput | LeadNoteUpdateWithWhereUniqueWithoutProspectInput[]
    updateMany?: LeadNoteUpdateManyWithWhereWithoutProspectInput | LeadNoteUpdateManyWithWhereWithoutProspectInput[]
    deleteMany?: LeadNoteScalarWhereInput | LeadNoteScalarWhereInput[]
  }

  export type ProspectCreateNestedOneWithoutLeadNotesInput = {
    create?: XOR<ProspectCreateWithoutLeadNotesInput, ProspectUncheckedCreateWithoutLeadNotesInput>
    connectOrCreate?: ProspectCreateOrConnectWithoutLeadNotesInput
    connect?: ProspectWhereUniqueInput
  }

  export type ProspectUpdateOneRequiredWithoutLeadNotesNestedInput = {
    create?: XOR<ProspectCreateWithoutLeadNotesInput, ProspectUncheckedCreateWithoutLeadNotesInput>
    connectOrCreate?: ProspectCreateOrConnectWithoutLeadNotesInput
    upsert?: ProspectUpsertWithoutLeadNotesInput
    connect?: ProspectWhereUniqueInput
    update?: XOR<XOR<ProspectUpdateToOneWithWhereWithoutLeadNotesInput, ProspectUpdateWithoutLeadNotesInput>, ProspectUncheckedUpdateWithoutLeadNotesInput>
  }

  export type ProspectCreateNestedManyWithoutSearchJobInput = {
    create?: XOR<ProspectCreateWithoutSearchJobInput, ProspectUncheckedCreateWithoutSearchJobInput> | ProspectCreateWithoutSearchJobInput[] | ProspectUncheckedCreateWithoutSearchJobInput[]
    connectOrCreate?: ProspectCreateOrConnectWithoutSearchJobInput | ProspectCreateOrConnectWithoutSearchJobInput[]
    createMany?: ProspectCreateManySearchJobInputEnvelope
    connect?: ProspectWhereUniqueInput | ProspectWhereUniqueInput[]
  }

  export type ProspectUncheckedCreateNestedManyWithoutSearchJobInput = {
    create?: XOR<ProspectCreateWithoutSearchJobInput, ProspectUncheckedCreateWithoutSearchJobInput> | ProspectCreateWithoutSearchJobInput[] | ProspectUncheckedCreateWithoutSearchJobInput[]
    connectOrCreate?: ProspectCreateOrConnectWithoutSearchJobInput | ProspectCreateOrConnectWithoutSearchJobInput[]
    createMany?: ProspectCreateManySearchJobInputEnvelope
    connect?: ProspectWhereUniqueInput | ProspectWhereUniqueInput[]
  }

  export type EnumJobStatusFieldUpdateOperationsInput = {
    set?: $Enums.JobStatus
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProspectUpdateManyWithoutSearchJobNestedInput = {
    create?: XOR<ProspectCreateWithoutSearchJobInput, ProspectUncheckedCreateWithoutSearchJobInput> | ProspectCreateWithoutSearchJobInput[] | ProspectUncheckedCreateWithoutSearchJobInput[]
    connectOrCreate?: ProspectCreateOrConnectWithoutSearchJobInput | ProspectCreateOrConnectWithoutSearchJobInput[]
    upsert?: ProspectUpsertWithWhereUniqueWithoutSearchJobInput | ProspectUpsertWithWhereUniqueWithoutSearchJobInput[]
    createMany?: ProspectCreateManySearchJobInputEnvelope
    set?: ProspectWhereUniqueInput | ProspectWhereUniqueInput[]
    disconnect?: ProspectWhereUniqueInput | ProspectWhereUniqueInput[]
    delete?: ProspectWhereUniqueInput | ProspectWhereUniqueInput[]
    connect?: ProspectWhereUniqueInput | ProspectWhereUniqueInput[]
    update?: ProspectUpdateWithWhereUniqueWithoutSearchJobInput | ProspectUpdateWithWhereUniqueWithoutSearchJobInput[]
    updateMany?: ProspectUpdateManyWithWhereWithoutSearchJobInput | ProspectUpdateManyWithWhereWithoutSearchJobInput[]
    deleteMany?: ProspectScalarWhereInput | ProspectScalarWhereInput[]
  }

  export type ProspectUncheckedUpdateManyWithoutSearchJobNestedInput = {
    create?: XOR<ProspectCreateWithoutSearchJobInput, ProspectUncheckedCreateWithoutSearchJobInput> | ProspectCreateWithoutSearchJobInput[] | ProspectUncheckedCreateWithoutSearchJobInput[]
    connectOrCreate?: ProspectCreateOrConnectWithoutSearchJobInput | ProspectCreateOrConnectWithoutSearchJobInput[]
    upsert?: ProspectUpsertWithWhereUniqueWithoutSearchJobInput | ProspectUpsertWithWhereUniqueWithoutSearchJobInput[]
    createMany?: ProspectCreateManySearchJobInputEnvelope
    set?: ProspectWhereUniqueInput | ProspectWhereUniqueInput[]
    disconnect?: ProspectWhereUniqueInput | ProspectWhereUniqueInput[]
    delete?: ProspectWhereUniqueInput | ProspectWhereUniqueInput[]
    connect?: ProspectWhereUniqueInput | ProspectWhereUniqueInput[]
    update?: ProspectUpdateWithWhereUniqueWithoutSearchJobInput | ProspectUpdateWithWhereUniqueWithoutSearchJobInput[]
    updateMany?: ProspectUpdateManyWithWhereWithoutSearchJobInput | ProspectUpdateManyWithWhereWithoutSearchJobInput[]
    deleteMany?: ProspectScalarWhereInput | ProspectScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumSourceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SourceType | EnumSourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SourceType[] | ListEnumSourceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SourceType[] | ListEnumSourceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSourceTypeFilter<$PrismaModel> | $Enums.SourceType
  }

  export type NestedEnumWebsiteStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WebsiteStatus | EnumWebsiteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WebsiteStatus[] | ListEnumWebsiteStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebsiteStatus[] | ListEnumWebsiteStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWebsiteStatusFilter<$PrismaModel> | $Enums.WebsiteStatus
  }

  export type NestedEnumLeadPriorityNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadPriority | EnumLeadPriorityFieldRefInput<$PrismaModel> | null
    in?: $Enums.LeadPriority[] | ListEnumLeadPriorityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.LeadPriority[] | ListEnumLeadPriorityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumLeadPriorityNullableFilter<$PrismaModel> | $Enums.LeadPriority | null
  }

  export type NestedEnumLeadStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadStatus | EnumLeadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadStatusFilter<$PrismaModel> | $Enums.LeadStatus
  }

  export type NestedEnumDemoStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DemoStatus | EnumDemoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DemoStatus[] | ListEnumDemoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DemoStatus[] | ListEnumDemoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDemoStatusFilter<$PrismaModel> | $Enums.DemoStatus
  }

  export type NestedEnumSourceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SourceType | EnumSourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SourceType[] | ListEnumSourceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SourceType[] | ListEnumSourceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSourceTypeWithAggregatesFilter<$PrismaModel> | $Enums.SourceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSourceTypeFilter<$PrismaModel>
    _max?: NestedEnumSourceTypeFilter<$PrismaModel>
  }

  export type NestedEnumWebsiteStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WebsiteStatus | EnumWebsiteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WebsiteStatus[] | ListEnumWebsiteStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebsiteStatus[] | ListEnumWebsiteStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWebsiteStatusWithAggregatesFilter<$PrismaModel> | $Enums.WebsiteStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWebsiteStatusFilter<$PrismaModel>
    _max?: NestedEnumWebsiteStatusFilter<$PrismaModel>
  }

  export type NestedEnumLeadPriorityNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadPriority | EnumLeadPriorityFieldRefInput<$PrismaModel> | null
    in?: $Enums.LeadPriority[] | ListEnumLeadPriorityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.LeadPriority[] | ListEnumLeadPriorityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumLeadPriorityNullableWithAggregatesFilter<$PrismaModel> | $Enums.LeadPriority | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumLeadPriorityNullableFilter<$PrismaModel>
    _max?: NestedEnumLeadPriorityNullableFilter<$PrismaModel>
  }

  export type NestedEnumLeadStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadStatus | EnumLeadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadStatusWithAggregatesFilter<$PrismaModel> | $Enums.LeadStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeadStatusFilter<$PrismaModel>
    _max?: NestedEnumLeadStatusFilter<$PrismaModel>
  }

  export type NestedEnumDemoStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DemoStatus | EnumDemoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DemoStatus[] | ListEnumDemoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DemoStatus[] | ListEnumDemoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDemoStatusWithAggregatesFilter<$PrismaModel> | $Enums.DemoStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDemoStatusFilter<$PrismaModel>
    _max?: NestedEnumDemoStatusFilter<$PrismaModel>
  }

  export type NestedEnumJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusFilter<$PrismaModel> | $Enums.JobStatus
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.JobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobStatusFilter<$PrismaModel>
    _max?: NestedEnumJobStatusFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type AuditLogCreateWithoutUserInput = {
    id?: string
    action: string
    details?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateWithoutUserInput = {
    id?: string
    action: string
    details?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogCreateManyUserInputEnvelope = {
    data: AuditLogCreateManyUserInput | AuditLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AuditLogUpsertWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutUserInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutUserInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    userId?: StringNullableFilter<"AuditLog"> | string | null
    details?: JsonNullableFilter<"AuditLog">
    ipAddress?: StringNullableFilter<"AuditLog"> | string | null
    userAgent?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type UserCreateWithoutAuditLogsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutAuditLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
  }

  export type UserUpsertWithoutAuditLogsInput = {
    update: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type UserUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProspectCreateWithoutBusinessEntityInput = {
    id?: string
    sourceType: $Enums.SourceType
    businessName: string
    classification?: string | null
    classificationConfidence?: number | null
    businessModel?: string | null
    businessModelConfidence?: number | null
    websiteStatus?: $Enums.WebsiteStatus
    websiteUrl?: string | null
    websiteConfidence?: number | null
    phone?: string | null
    country?: string | null
    region?: string | null
    city?: string | null
    address?: string | null
    latitude?: number | null
    longitude?: number | null
    rating?: number | null
    reviewCount?: number | null
    businessStatus?: string | null
    leadScore?: number | null
    priority?: $Enums.LeadPriority | null
    leadStatus?: $Enums.LeadStatus
    demoStatus?: $Enums.DemoStatus
    demoUrl?: string | null
    notes?: string | null
    assignedTo?: string | null
    tags?: ProspectCreatetagsInput | string[]
    customFields?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    lastVerifiedAt?: Date | string | null
    searchJob?: SearchJobCreateNestedOneWithoutProspectsInput
    leadNotes?: LeadNoteCreateNestedManyWithoutProspectInput
  }

  export type ProspectUncheckedCreateWithoutBusinessEntityInput = {
    id?: string
    searchJobId?: string | null
    sourceType: $Enums.SourceType
    businessName: string
    classification?: string | null
    classificationConfidence?: number | null
    businessModel?: string | null
    businessModelConfidence?: number | null
    websiteStatus?: $Enums.WebsiteStatus
    websiteUrl?: string | null
    websiteConfidence?: number | null
    phone?: string | null
    country?: string | null
    region?: string | null
    city?: string | null
    address?: string | null
    latitude?: number | null
    longitude?: number | null
    rating?: number | null
    reviewCount?: number | null
    businessStatus?: string | null
    leadScore?: number | null
    priority?: $Enums.LeadPriority | null
    leadStatus?: $Enums.LeadStatus
    demoStatus?: $Enums.DemoStatus
    demoUrl?: string | null
    notes?: string | null
    assignedTo?: string | null
    tags?: ProspectCreatetagsInput | string[]
    customFields?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    lastVerifiedAt?: Date | string | null
    leadNotes?: LeadNoteUncheckedCreateNestedManyWithoutProspectInput
  }

  export type ProspectCreateOrConnectWithoutBusinessEntityInput = {
    where: ProspectWhereUniqueInput
    create: XOR<ProspectCreateWithoutBusinessEntityInput, ProspectUncheckedCreateWithoutBusinessEntityInput>
  }

  export type ProspectCreateManyBusinessEntityInputEnvelope = {
    data: ProspectCreateManyBusinessEntityInput | ProspectCreateManyBusinessEntityInput[]
    skipDuplicates?: boolean
  }

  export type ProspectUpsertWithWhereUniqueWithoutBusinessEntityInput = {
    where: ProspectWhereUniqueInput
    update: XOR<ProspectUpdateWithoutBusinessEntityInput, ProspectUncheckedUpdateWithoutBusinessEntityInput>
    create: XOR<ProspectCreateWithoutBusinessEntityInput, ProspectUncheckedCreateWithoutBusinessEntityInput>
  }

  export type ProspectUpdateWithWhereUniqueWithoutBusinessEntityInput = {
    where: ProspectWhereUniqueInput
    data: XOR<ProspectUpdateWithoutBusinessEntityInput, ProspectUncheckedUpdateWithoutBusinessEntityInput>
  }

  export type ProspectUpdateManyWithWhereWithoutBusinessEntityInput = {
    where: ProspectScalarWhereInput
    data: XOR<ProspectUpdateManyMutationInput, ProspectUncheckedUpdateManyWithoutBusinessEntityInput>
  }

  export type ProspectScalarWhereInput = {
    AND?: ProspectScalarWhereInput | ProspectScalarWhereInput[]
    OR?: ProspectScalarWhereInput[]
    NOT?: ProspectScalarWhereInput | ProspectScalarWhereInput[]
    id?: StringFilter<"Prospect"> | string
    businessEntityId?: StringNullableFilter<"Prospect"> | string | null
    searchJobId?: StringNullableFilter<"Prospect"> | string | null
    sourceType?: EnumSourceTypeFilter<"Prospect"> | $Enums.SourceType
    businessName?: StringFilter<"Prospect"> | string
    classification?: StringNullableFilter<"Prospect"> | string | null
    classificationConfidence?: FloatNullableFilter<"Prospect"> | number | null
    businessModel?: StringNullableFilter<"Prospect"> | string | null
    businessModelConfidence?: FloatNullableFilter<"Prospect"> | number | null
    websiteStatus?: EnumWebsiteStatusFilter<"Prospect"> | $Enums.WebsiteStatus
    websiteUrl?: StringNullableFilter<"Prospect"> | string | null
    websiteConfidence?: FloatNullableFilter<"Prospect"> | number | null
    phone?: StringNullableFilter<"Prospect"> | string | null
    country?: StringNullableFilter<"Prospect"> | string | null
    region?: StringNullableFilter<"Prospect"> | string | null
    city?: StringNullableFilter<"Prospect"> | string | null
    address?: StringNullableFilter<"Prospect"> | string | null
    latitude?: FloatNullableFilter<"Prospect"> | number | null
    longitude?: FloatNullableFilter<"Prospect"> | number | null
    rating?: FloatNullableFilter<"Prospect"> | number | null
    reviewCount?: IntNullableFilter<"Prospect"> | number | null
    businessStatus?: StringNullableFilter<"Prospect"> | string | null
    leadScore?: FloatNullableFilter<"Prospect"> | number | null
    priority?: EnumLeadPriorityNullableFilter<"Prospect"> | $Enums.LeadPriority | null
    leadStatus?: EnumLeadStatusFilter<"Prospect"> | $Enums.LeadStatus
    demoStatus?: EnumDemoStatusFilter<"Prospect"> | $Enums.DemoStatus
    demoUrl?: StringNullableFilter<"Prospect"> | string | null
    notes?: StringNullableFilter<"Prospect"> | string | null
    assignedTo?: StringNullableFilter<"Prospect"> | string | null
    tags?: StringNullableListFilter<"Prospect">
    customFields?: JsonNullableFilter<"Prospect">
    createdAt?: DateTimeFilter<"Prospect"> | Date | string
    updatedAt?: DateTimeFilter<"Prospect"> | Date | string
    lastVerifiedAt?: DateTimeNullableFilter<"Prospect"> | Date | string | null
  }

  export type BusinessEntityCreateWithoutProspectsInput = {
    id?: string
    canonicalName: string
    providerIds?: NullableJsonNullValueInput | InputJsonValue
    country?: string | null
    region?: string | null
    city?: string | null
    district?: string | null
    address?: string | null
    latitude?: number | null
    longitude?: number | null
    categories?: BusinessEntityCreatecategoriesInput | string[]
    primaryCategory?: string | null
    businessModel?: string | null
    legalEntity?: string | null
    phone?: string | null
    website?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    rating?: number | null
    reviewCount?: number | null
    businessStatus?: string | null
    sourceProviders?: BusinessEntityCreatesourceProvidersInput | string[]
    dataConfidence?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastVerifiedAt?: Date | string | null
  }

  export type BusinessEntityUncheckedCreateWithoutProspectsInput = {
    id?: string
    canonicalName: string
    providerIds?: NullableJsonNullValueInput | InputJsonValue
    country?: string | null
    region?: string | null
    city?: string | null
    district?: string | null
    address?: string | null
    latitude?: number | null
    longitude?: number | null
    categories?: BusinessEntityCreatecategoriesInput | string[]
    primaryCategory?: string | null
    businessModel?: string | null
    legalEntity?: string | null
    phone?: string | null
    website?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    rating?: number | null
    reviewCount?: number | null
    businessStatus?: string | null
    sourceProviders?: BusinessEntityCreatesourceProvidersInput | string[]
    dataConfidence?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastVerifiedAt?: Date | string | null
  }

  export type BusinessEntityCreateOrConnectWithoutProspectsInput = {
    where: BusinessEntityWhereUniqueInput
    create: XOR<BusinessEntityCreateWithoutProspectsInput, BusinessEntityUncheckedCreateWithoutProspectsInput>
  }

  export type SearchJobCreateWithoutProspectsInput = {
    id?: string
    name: string
    country?: string | null
    region?: string | null
    city?: string | null
    district?: string | null
    category?: string | null
    keywords?: string | null
    query?: string | null
    scope?: string | null
    provider?: string | null
    status?: $Enums.JobStatus
    progress?: number
    totalTasks?: number
    completedTasks?: number
    failedTasks?: number
    resultCount?: number
    duplicateCount?: number
    websiteListedCount?: number
    websiteOpportunityCount?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    error?: string | null
  }

  export type SearchJobUncheckedCreateWithoutProspectsInput = {
    id?: string
    name: string
    country?: string | null
    region?: string | null
    city?: string | null
    district?: string | null
    category?: string | null
    keywords?: string | null
    query?: string | null
    scope?: string | null
    provider?: string | null
    status?: $Enums.JobStatus
    progress?: number
    totalTasks?: number
    completedTasks?: number
    failedTasks?: number
    resultCount?: number
    duplicateCount?: number
    websiteListedCount?: number
    websiteOpportunityCount?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    error?: string | null
  }

  export type SearchJobCreateOrConnectWithoutProspectsInput = {
    where: SearchJobWhereUniqueInput
    create: XOR<SearchJobCreateWithoutProspectsInput, SearchJobUncheckedCreateWithoutProspectsInput>
  }

  export type LeadNoteCreateWithoutProspectInput = {
    id?: string
    authorId?: string | null
    authorName?: string | null
    content: string
    createdAt?: Date | string
  }

  export type LeadNoteUncheckedCreateWithoutProspectInput = {
    id?: string
    authorId?: string | null
    authorName?: string | null
    content: string
    createdAt?: Date | string
  }

  export type LeadNoteCreateOrConnectWithoutProspectInput = {
    where: LeadNoteWhereUniqueInput
    create: XOR<LeadNoteCreateWithoutProspectInput, LeadNoteUncheckedCreateWithoutProspectInput>
  }

  export type LeadNoteCreateManyProspectInputEnvelope = {
    data: LeadNoteCreateManyProspectInput | LeadNoteCreateManyProspectInput[]
    skipDuplicates?: boolean
  }

  export type BusinessEntityUpsertWithoutProspectsInput = {
    update: XOR<BusinessEntityUpdateWithoutProspectsInput, BusinessEntityUncheckedUpdateWithoutProspectsInput>
    create: XOR<BusinessEntityCreateWithoutProspectsInput, BusinessEntityUncheckedCreateWithoutProspectsInput>
    where?: BusinessEntityWhereInput
  }

  export type BusinessEntityUpdateToOneWithWhereWithoutProspectsInput = {
    where?: BusinessEntityWhereInput
    data: XOR<BusinessEntityUpdateWithoutProspectsInput, BusinessEntityUncheckedUpdateWithoutProspectsInput>
  }

  export type BusinessEntityUpdateWithoutProspectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    canonicalName?: StringFieldUpdateOperationsInput | string
    providerIds?: NullableJsonNullValueInput | InputJsonValue
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    categories?: BusinessEntityUpdatecategoriesInput | string[]
    primaryCategory?: NullableStringFieldUpdateOperationsInput | string | null
    businessModel?: NullableStringFieldUpdateOperationsInput | string | null
    legalEntity?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    businessStatus?: NullableStringFieldUpdateOperationsInput | string | null
    sourceProviders?: BusinessEntityUpdatesourceProvidersInput | string[]
    dataConfidence?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BusinessEntityUncheckedUpdateWithoutProspectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    canonicalName?: StringFieldUpdateOperationsInput | string
    providerIds?: NullableJsonNullValueInput | InputJsonValue
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    categories?: BusinessEntityUpdatecategoriesInput | string[]
    primaryCategory?: NullableStringFieldUpdateOperationsInput | string | null
    businessModel?: NullableStringFieldUpdateOperationsInput | string | null
    legalEntity?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    businessStatus?: NullableStringFieldUpdateOperationsInput | string | null
    sourceProviders?: BusinessEntityUpdatesourceProvidersInput | string[]
    dataConfidence?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SearchJobUpsertWithoutProspectsInput = {
    update: XOR<SearchJobUpdateWithoutProspectsInput, SearchJobUncheckedUpdateWithoutProspectsInput>
    create: XOR<SearchJobCreateWithoutProspectsInput, SearchJobUncheckedCreateWithoutProspectsInput>
    where?: SearchJobWhereInput
  }

  export type SearchJobUpdateToOneWithWhereWithoutProspectsInput = {
    where?: SearchJobWhereInput
    data: XOR<SearchJobUpdateWithoutProspectsInput, SearchJobUncheckedUpdateWithoutProspectsInput>
  }

  export type SearchJobUpdateWithoutProspectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    query?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    progress?: FloatFieldUpdateOperationsInput | number
    totalTasks?: IntFieldUpdateOperationsInput | number
    completedTasks?: IntFieldUpdateOperationsInput | number
    failedTasks?: IntFieldUpdateOperationsInput | number
    resultCount?: IntFieldUpdateOperationsInput | number
    duplicateCount?: IntFieldUpdateOperationsInput | number
    websiteListedCount?: IntFieldUpdateOperationsInput | number
    websiteOpportunityCount?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SearchJobUncheckedUpdateWithoutProspectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    query?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    progress?: FloatFieldUpdateOperationsInput | number
    totalTasks?: IntFieldUpdateOperationsInput | number
    completedTasks?: IntFieldUpdateOperationsInput | number
    failedTasks?: IntFieldUpdateOperationsInput | number
    resultCount?: IntFieldUpdateOperationsInput | number
    duplicateCount?: IntFieldUpdateOperationsInput | number
    websiteListedCount?: IntFieldUpdateOperationsInput | number
    websiteOpportunityCount?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LeadNoteUpsertWithWhereUniqueWithoutProspectInput = {
    where: LeadNoteWhereUniqueInput
    update: XOR<LeadNoteUpdateWithoutProspectInput, LeadNoteUncheckedUpdateWithoutProspectInput>
    create: XOR<LeadNoteCreateWithoutProspectInput, LeadNoteUncheckedCreateWithoutProspectInput>
  }

  export type LeadNoteUpdateWithWhereUniqueWithoutProspectInput = {
    where: LeadNoteWhereUniqueInput
    data: XOR<LeadNoteUpdateWithoutProspectInput, LeadNoteUncheckedUpdateWithoutProspectInput>
  }

  export type LeadNoteUpdateManyWithWhereWithoutProspectInput = {
    where: LeadNoteScalarWhereInput
    data: XOR<LeadNoteUpdateManyMutationInput, LeadNoteUncheckedUpdateManyWithoutProspectInput>
  }

  export type LeadNoteScalarWhereInput = {
    AND?: LeadNoteScalarWhereInput | LeadNoteScalarWhereInput[]
    OR?: LeadNoteScalarWhereInput[]
    NOT?: LeadNoteScalarWhereInput | LeadNoteScalarWhereInput[]
    id?: StringFilter<"LeadNote"> | string
    prospectId?: StringFilter<"LeadNote"> | string
    authorId?: StringNullableFilter<"LeadNote"> | string | null
    authorName?: StringNullableFilter<"LeadNote"> | string | null
    content?: StringFilter<"LeadNote"> | string
    createdAt?: DateTimeFilter<"LeadNote"> | Date | string
  }

  export type ProspectCreateWithoutLeadNotesInput = {
    id?: string
    sourceType: $Enums.SourceType
    businessName: string
    classification?: string | null
    classificationConfidence?: number | null
    businessModel?: string | null
    businessModelConfidence?: number | null
    websiteStatus?: $Enums.WebsiteStatus
    websiteUrl?: string | null
    websiteConfidence?: number | null
    phone?: string | null
    country?: string | null
    region?: string | null
    city?: string | null
    address?: string | null
    latitude?: number | null
    longitude?: number | null
    rating?: number | null
    reviewCount?: number | null
    businessStatus?: string | null
    leadScore?: number | null
    priority?: $Enums.LeadPriority | null
    leadStatus?: $Enums.LeadStatus
    demoStatus?: $Enums.DemoStatus
    demoUrl?: string | null
    notes?: string | null
    assignedTo?: string | null
    tags?: ProspectCreatetagsInput | string[]
    customFields?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    lastVerifiedAt?: Date | string | null
    businessEntity?: BusinessEntityCreateNestedOneWithoutProspectsInput
    searchJob?: SearchJobCreateNestedOneWithoutProspectsInput
  }

  export type ProspectUncheckedCreateWithoutLeadNotesInput = {
    id?: string
    businessEntityId?: string | null
    searchJobId?: string | null
    sourceType: $Enums.SourceType
    businessName: string
    classification?: string | null
    classificationConfidence?: number | null
    businessModel?: string | null
    businessModelConfidence?: number | null
    websiteStatus?: $Enums.WebsiteStatus
    websiteUrl?: string | null
    websiteConfidence?: number | null
    phone?: string | null
    country?: string | null
    region?: string | null
    city?: string | null
    address?: string | null
    latitude?: number | null
    longitude?: number | null
    rating?: number | null
    reviewCount?: number | null
    businessStatus?: string | null
    leadScore?: number | null
    priority?: $Enums.LeadPriority | null
    leadStatus?: $Enums.LeadStatus
    demoStatus?: $Enums.DemoStatus
    demoUrl?: string | null
    notes?: string | null
    assignedTo?: string | null
    tags?: ProspectCreatetagsInput | string[]
    customFields?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    lastVerifiedAt?: Date | string | null
  }

  export type ProspectCreateOrConnectWithoutLeadNotesInput = {
    where: ProspectWhereUniqueInput
    create: XOR<ProspectCreateWithoutLeadNotesInput, ProspectUncheckedCreateWithoutLeadNotesInput>
  }

  export type ProspectUpsertWithoutLeadNotesInput = {
    update: XOR<ProspectUpdateWithoutLeadNotesInput, ProspectUncheckedUpdateWithoutLeadNotesInput>
    create: XOR<ProspectCreateWithoutLeadNotesInput, ProspectUncheckedCreateWithoutLeadNotesInput>
    where?: ProspectWhereInput
  }

  export type ProspectUpdateToOneWithWhereWithoutLeadNotesInput = {
    where?: ProspectWhereInput
    data: XOR<ProspectUpdateWithoutLeadNotesInput, ProspectUncheckedUpdateWithoutLeadNotesInput>
  }

  export type ProspectUpdateWithoutLeadNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceType?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    businessName?: StringFieldUpdateOperationsInput | string
    classification?: NullableStringFieldUpdateOperationsInput | string | null
    classificationConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    businessModel?: NullableStringFieldUpdateOperationsInput | string | null
    businessModelConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    websiteStatus?: EnumWebsiteStatusFieldUpdateOperationsInput | $Enums.WebsiteStatus
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    businessStatus?: NullableStringFieldUpdateOperationsInput | string | null
    leadScore?: NullableFloatFieldUpdateOperationsInput | number | null
    priority?: NullableEnumLeadPriorityFieldUpdateOperationsInput | $Enums.LeadPriority | null
    leadStatus?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    demoStatus?: EnumDemoStatusFieldUpdateOperationsInput | $Enums.DemoStatus
    demoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ProspectUpdatetagsInput | string[]
    customFields?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    businessEntity?: BusinessEntityUpdateOneWithoutProspectsNestedInput
    searchJob?: SearchJobUpdateOneWithoutProspectsNestedInput
  }

  export type ProspectUncheckedUpdateWithoutLeadNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessEntityId?: NullableStringFieldUpdateOperationsInput | string | null
    searchJobId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceType?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    businessName?: StringFieldUpdateOperationsInput | string
    classification?: NullableStringFieldUpdateOperationsInput | string | null
    classificationConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    businessModel?: NullableStringFieldUpdateOperationsInput | string | null
    businessModelConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    websiteStatus?: EnumWebsiteStatusFieldUpdateOperationsInput | $Enums.WebsiteStatus
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    businessStatus?: NullableStringFieldUpdateOperationsInput | string | null
    leadScore?: NullableFloatFieldUpdateOperationsInput | number | null
    priority?: NullableEnumLeadPriorityFieldUpdateOperationsInput | $Enums.LeadPriority | null
    leadStatus?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    demoStatus?: EnumDemoStatusFieldUpdateOperationsInput | $Enums.DemoStatus
    demoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ProspectUpdatetagsInput | string[]
    customFields?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProspectCreateWithoutSearchJobInput = {
    id?: string
    sourceType: $Enums.SourceType
    businessName: string
    classification?: string | null
    classificationConfidence?: number | null
    businessModel?: string | null
    businessModelConfidence?: number | null
    websiteStatus?: $Enums.WebsiteStatus
    websiteUrl?: string | null
    websiteConfidence?: number | null
    phone?: string | null
    country?: string | null
    region?: string | null
    city?: string | null
    address?: string | null
    latitude?: number | null
    longitude?: number | null
    rating?: number | null
    reviewCount?: number | null
    businessStatus?: string | null
    leadScore?: number | null
    priority?: $Enums.LeadPriority | null
    leadStatus?: $Enums.LeadStatus
    demoStatus?: $Enums.DemoStatus
    demoUrl?: string | null
    notes?: string | null
    assignedTo?: string | null
    tags?: ProspectCreatetagsInput | string[]
    customFields?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    lastVerifiedAt?: Date | string | null
    businessEntity?: BusinessEntityCreateNestedOneWithoutProspectsInput
    leadNotes?: LeadNoteCreateNestedManyWithoutProspectInput
  }

  export type ProspectUncheckedCreateWithoutSearchJobInput = {
    id?: string
    businessEntityId?: string | null
    sourceType: $Enums.SourceType
    businessName: string
    classification?: string | null
    classificationConfidence?: number | null
    businessModel?: string | null
    businessModelConfidence?: number | null
    websiteStatus?: $Enums.WebsiteStatus
    websiteUrl?: string | null
    websiteConfidence?: number | null
    phone?: string | null
    country?: string | null
    region?: string | null
    city?: string | null
    address?: string | null
    latitude?: number | null
    longitude?: number | null
    rating?: number | null
    reviewCount?: number | null
    businessStatus?: string | null
    leadScore?: number | null
    priority?: $Enums.LeadPriority | null
    leadStatus?: $Enums.LeadStatus
    demoStatus?: $Enums.DemoStatus
    demoUrl?: string | null
    notes?: string | null
    assignedTo?: string | null
    tags?: ProspectCreatetagsInput | string[]
    customFields?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    lastVerifiedAt?: Date | string | null
    leadNotes?: LeadNoteUncheckedCreateNestedManyWithoutProspectInput
  }

  export type ProspectCreateOrConnectWithoutSearchJobInput = {
    where: ProspectWhereUniqueInput
    create: XOR<ProspectCreateWithoutSearchJobInput, ProspectUncheckedCreateWithoutSearchJobInput>
  }

  export type ProspectCreateManySearchJobInputEnvelope = {
    data: ProspectCreateManySearchJobInput | ProspectCreateManySearchJobInput[]
    skipDuplicates?: boolean
  }

  export type ProspectUpsertWithWhereUniqueWithoutSearchJobInput = {
    where: ProspectWhereUniqueInput
    update: XOR<ProspectUpdateWithoutSearchJobInput, ProspectUncheckedUpdateWithoutSearchJobInput>
    create: XOR<ProspectCreateWithoutSearchJobInput, ProspectUncheckedCreateWithoutSearchJobInput>
  }

  export type ProspectUpdateWithWhereUniqueWithoutSearchJobInput = {
    where: ProspectWhereUniqueInput
    data: XOR<ProspectUpdateWithoutSearchJobInput, ProspectUncheckedUpdateWithoutSearchJobInput>
  }

  export type ProspectUpdateManyWithWhereWithoutSearchJobInput = {
    where: ProspectScalarWhereInput
    data: XOR<ProspectUpdateManyMutationInput, ProspectUncheckedUpdateManyWithoutSearchJobInput>
  }

  export type AuditLogCreateManyUserInput = {
    id?: string
    action: string
    details?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProspectCreateManyBusinessEntityInput = {
    id?: string
    searchJobId?: string | null
    sourceType: $Enums.SourceType
    businessName: string
    classification?: string | null
    classificationConfidence?: number | null
    businessModel?: string | null
    businessModelConfidence?: number | null
    websiteStatus?: $Enums.WebsiteStatus
    websiteUrl?: string | null
    websiteConfidence?: number | null
    phone?: string | null
    country?: string | null
    region?: string | null
    city?: string | null
    address?: string | null
    latitude?: number | null
    longitude?: number | null
    rating?: number | null
    reviewCount?: number | null
    businessStatus?: string | null
    leadScore?: number | null
    priority?: $Enums.LeadPriority | null
    leadStatus?: $Enums.LeadStatus
    demoStatus?: $Enums.DemoStatus
    demoUrl?: string | null
    notes?: string | null
    assignedTo?: string | null
    tags?: ProspectCreatetagsInput | string[]
    customFields?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    lastVerifiedAt?: Date | string | null
  }

  export type ProspectUpdateWithoutBusinessEntityInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceType?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    businessName?: StringFieldUpdateOperationsInput | string
    classification?: NullableStringFieldUpdateOperationsInput | string | null
    classificationConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    businessModel?: NullableStringFieldUpdateOperationsInput | string | null
    businessModelConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    websiteStatus?: EnumWebsiteStatusFieldUpdateOperationsInput | $Enums.WebsiteStatus
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    businessStatus?: NullableStringFieldUpdateOperationsInput | string | null
    leadScore?: NullableFloatFieldUpdateOperationsInput | number | null
    priority?: NullableEnumLeadPriorityFieldUpdateOperationsInput | $Enums.LeadPriority | null
    leadStatus?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    demoStatus?: EnumDemoStatusFieldUpdateOperationsInput | $Enums.DemoStatus
    demoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ProspectUpdatetagsInput | string[]
    customFields?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    searchJob?: SearchJobUpdateOneWithoutProspectsNestedInput
    leadNotes?: LeadNoteUpdateManyWithoutProspectNestedInput
  }

  export type ProspectUncheckedUpdateWithoutBusinessEntityInput = {
    id?: StringFieldUpdateOperationsInput | string
    searchJobId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceType?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    businessName?: StringFieldUpdateOperationsInput | string
    classification?: NullableStringFieldUpdateOperationsInput | string | null
    classificationConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    businessModel?: NullableStringFieldUpdateOperationsInput | string | null
    businessModelConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    websiteStatus?: EnumWebsiteStatusFieldUpdateOperationsInput | $Enums.WebsiteStatus
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    businessStatus?: NullableStringFieldUpdateOperationsInput | string | null
    leadScore?: NullableFloatFieldUpdateOperationsInput | number | null
    priority?: NullableEnumLeadPriorityFieldUpdateOperationsInput | $Enums.LeadPriority | null
    leadStatus?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    demoStatus?: EnumDemoStatusFieldUpdateOperationsInput | $Enums.DemoStatus
    demoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ProspectUpdatetagsInput | string[]
    customFields?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leadNotes?: LeadNoteUncheckedUpdateManyWithoutProspectNestedInput
  }

  export type ProspectUncheckedUpdateManyWithoutBusinessEntityInput = {
    id?: StringFieldUpdateOperationsInput | string
    searchJobId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceType?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    businessName?: StringFieldUpdateOperationsInput | string
    classification?: NullableStringFieldUpdateOperationsInput | string | null
    classificationConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    businessModel?: NullableStringFieldUpdateOperationsInput | string | null
    businessModelConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    websiteStatus?: EnumWebsiteStatusFieldUpdateOperationsInput | $Enums.WebsiteStatus
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    businessStatus?: NullableStringFieldUpdateOperationsInput | string | null
    leadScore?: NullableFloatFieldUpdateOperationsInput | number | null
    priority?: NullableEnumLeadPriorityFieldUpdateOperationsInput | $Enums.LeadPriority | null
    leadStatus?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    demoStatus?: EnumDemoStatusFieldUpdateOperationsInput | $Enums.DemoStatus
    demoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ProspectUpdatetagsInput | string[]
    customFields?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LeadNoteCreateManyProspectInput = {
    id?: string
    authorId?: string | null
    authorName?: string | null
    content: string
    createdAt?: Date | string
  }

  export type LeadNoteUpdateWithoutProspectInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    authorName?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadNoteUncheckedUpdateWithoutProspectInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    authorName?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadNoteUncheckedUpdateManyWithoutProspectInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    authorName?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProspectCreateManySearchJobInput = {
    id?: string
    businessEntityId?: string | null
    sourceType: $Enums.SourceType
    businessName: string
    classification?: string | null
    classificationConfidence?: number | null
    businessModel?: string | null
    businessModelConfidence?: number | null
    websiteStatus?: $Enums.WebsiteStatus
    websiteUrl?: string | null
    websiteConfidence?: number | null
    phone?: string | null
    country?: string | null
    region?: string | null
    city?: string | null
    address?: string | null
    latitude?: number | null
    longitude?: number | null
    rating?: number | null
    reviewCount?: number | null
    businessStatus?: string | null
    leadScore?: number | null
    priority?: $Enums.LeadPriority | null
    leadStatus?: $Enums.LeadStatus
    demoStatus?: $Enums.DemoStatus
    demoUrl?: string | null
    notes?: string | null
    assignedTo?: string | null
    tags?: ProspectCreatetagsInput | string[]
    customFields?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    lastVerifiedAt?: Date | string | null
  }

  export type ProspectUpdateWithoutSearchJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceType?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    businessName?: StringFieldUpdateOperationsInput | string
    classification?: NullableStringFieldUpdateOperationsInput | string | null
    classificationConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    businessModel?: NullableStringFieldUpdateOperationsInput | string | null
    businessModelConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    websiteStatus?: EnumWebsiteStatusFieldUpdateOperationsInput | $Enums.WebsiteStatus
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    businessStatus?: NullableStringFieldUpdateOperationsInput | string | null
    leadScore?: NullableFloatFieldUpdateOperationsInput | number | null
    priority?: NullableEnumLeadPriorityFieldUpdateOperationsInput | $Enums.LeadPriority | null
    leadStatus?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    demoStatus?: EnumDemoStatusFieldUpdateOperationsInput | $Enums.DemoStatus
    demoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ProspectUpdatetagsInput | string[]
    customFields?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    businessEntity?: BusinessEntityUpdateOneWithoutProspectsNestedInput
    leadNotes?: LeadNoteUpdateManyWithoutProspectNestedInput
  }

  export type ProspectUncheckedUpdateWithoutSearchJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessEntityId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceType?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    businessName?: StringFieldUpdateOperationsInput | string
    classification?: NullableStringFieldUpdateOperationsInput | string | null
    classificationConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    businessModel?: NullableStringFieldUpdateOperationsInput | string | null
    businessModelConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    websiteStatus?: EnumWebsiteStatusFieldUpdateOperationsInput | $Enums.WebsiteStatus
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    businessStatus?: NullableStringFieldUpdateOperationsInput | string | null
    leadScore?: NullableFloatFieldUpdateOperationsInput | number | null
    priority?: NullableEnumLeadPriorityFieldUpdateOperationsInput | $Enums.LeadPriority | null
    leadStatus?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    demoStatus?: EnumDemoStatusFieldUpdateOperationsInput | $Enums.DemoStatus
    demoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ProspectUpdatetagsInput | string[]
    customFields?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leadNotes?: LeadNoteUncheckedUpdateManyWithoutProspectNestedInput
  }

  export type ProspectUncheckedUpdateManyWithoutSearchJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessEntityId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceType?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    businessName?: StringFieldUpdateOperationsInput | string
    classification?: NullableStringFieldUpdateOperationsInput | string | null
    classificationConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    businessModel?: NullableStringFieldUpdateOperationsInput | string | null
    businessModelConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    websiteStatus?: EnumWebsiteStatusFieldUpdateOperationsInput | $Enums.WebsiteStatus
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    businessStatus?: NullableStringFieldUpdateOperationsInput | string | null
    leadScore?: NullableFloatFieldUpdateOperationsInput | number | null
    priority?: NullableEnumLeadPriorityFieldUpdateOperationsInput | $Enums.LeadPriority | null
    leadStatus?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    demoStatus?: EnumDemoStatusFieldUpdateOperationsInput | $Enums.DemoStatus
    demoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ProspectUpdatetagsInput | string[]
    customFields?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}