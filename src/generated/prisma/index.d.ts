
/**
 * Client
**/

import * as runtime from './runtime/library.js';
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
 * Model ftp
 * 
 */
export type ftp = $Result.DefaultSelection<Prisma.$ftpPayload>
/**
 * Model Organization
 * 
 */
export type Organization = $Result.DefaultSelection<Prisma.$OrganizationPayload>
/**
 * Model Batch
 * 
 */
export type Batch = $Result.DefaultSelection<Prisma.$BatchPayload>
/**
 * Model Imagecollections
 * 
 */
export type Imagecollections = $Result.DefaultSelection<Prisma.$ImagecollectionsPayload>
/**
 * Model Template
 * 
 */
export type Template = $Result.DefaultSelection<Prisma.$TemplatePayload>
/**
 * Model TemplateField
 * 
 */
export type TemplateField = $Result.DefaultSelection<Prisma.$TemplateFieldPayload>
/**
 * Model TemplateChild
 * 
 */
export type TemplateChild = $Result.DefaultSelection<Prisma.$TemplateChildPayload>
/**
 * Model FormSubmission
 * 
 */
export type FormSubmission = $Result.DefaultSelection<Prisma.$FormSubmissionPayload>
/**
 * Model QcFormSubmission
 * 
 */
export type QcFormSubmission = $Result.DefaultSelection<Prisma.$QcFormSubmissionPayload>
/**
 * Model UserLog
 * 
 */
export type UserLog = $Result.DefaultSelection<Prisma.$UserLogPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

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
   * `prisma.ftp`: Exposes CRUD operations for the **ftp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ftps
    * const ftps = await prisma.ftp.findMany()
    * ```
    */
  get ftp(): Prisma.ftpDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.OrganizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.batch`: Exposes CRUD operations for the **Batch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Batches
    * const batches = await prisma.batch.findMany()
    * ```
    */
  get batch(): Prisma.BatchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.imagecollections`: Exposes CRUD operations for the **Imagecollections** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Imagecollections
    * const imagecollections = await prisma.imagecollections.findMany()
    * ```
    */
  get imagecollections(): Prisma.ImagecollectionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.template`: Exposes CRUD operations for the **Template** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Templates
    * const templates = await prisma.template.findMany()
    * ```
    */
  get template(): Prisma.TemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.templateField`: Exposes CRUD operations for the **TemplateField** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TemplateFields
    * const templateFields = await prisma.templateField.findMany()
    * ```
    */
  get templateField(): Prisma.TemplateFieldDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.templateChild`: Exposes CRUD operations for the **TemplateChild** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TemplateChildren
    * const templateChildren = await prisma.templateChild.findMany()
    * ```
    */
  get templateChild(): Prisma.TemplateChildDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.formSubmission`: Exposes CRUD operations for the **FormSubmission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FormSubmissions
    * const formSubmissions = await prisma.formSubmission.findMany()
    * ```
    */
  get formSubmission(): Prisma.FormSubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.qcFormSubmission`: Exposes CRUD operations for the **QcFormSubmission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QcFormSubmissions
    * const qcFormSubmissions = await prisma.qcFormSubmission.findMany()
    * ```
    */
  get qcFormSubmission(): Prisma.QcFormSubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userLog`: Exposes CRUD operations for the **UserLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserLogs
    * const userLogs = await prisma.userLog.findMany()
    * ```
    */
  get userLog(): Prisma.UserLogDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
      (Without<T, U> & U) | (Without<U, T> & T)
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
    ftp: 'ftp',
    Organization: 'Organization',
    Batch: 'Batch',
    Imagecollections: 'Imagecollections',
    Template: 'Template',
    TemplateField: 'TemplateField',
    TemplateChild: 'TemplateChild',
    FormSubmission: 'FormSubmission',
    QcFormSubmission: 'QcFormSubmission',
    UserLog: 'UserLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "ftp" | "organization" | "batch" | "imagecollections" | "template" | "templateField" | "templateChild" | "formSubmission" | "qcFormSubmission" | "userLog"
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
      ftp: {
        payload: Prisma.$ftpPayload<ExtArgs>
        fields: Prisma.ftpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ftpFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ftpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ftpFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ftpPayload>
          }
          findFirst: {
            args: Prisma.ftpFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ftpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ftpFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ftpPayload>
          }
          findMany: {
            args: Prisma.ftpFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ftpPayload>[]
          }
          create: {
            args: Prisma.ftpCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ftpPayload>
          }
          createMany: {
            args: Prisma.ftpCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ftpCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ftpPayload>[]
          }
          delete: {
            args: Prisma.ftpDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ftpPayload>
          }
          update: {
            args: Prisma.ftpUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ftpPayload>
          }
          deleteMany: {
            args: Prisma.ftpDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ftpUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ftpUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ftpPayload>[]
          }
          upsert: {
            args: Prisma.ftpUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ftpPayload>
          }
          aggregate: {
            args: Prisma.FtpAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFtp>
          }
          groupBy: {
            args: Prisma.ftpGroupByArgs<ExtArgs>
            result: $Utils.Optional<FtpGroupByOutputType>[]
          }
          count: {
            args: Prisma.ftpCountArgs<ExtArgs>
            result: $Utils.Optional<FtpCountAggregateOutputType> | number
          }
        }
      }
      Organization: {
        payload: Prisma.$OrganizationPayload<ExtArgs>
        fields: Prisma.OrganizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findFirst: {
            args: Prisma.OrganizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findMany: {
            args: Prisma.OrganizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          create: {
            args: Prisma.OrganizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          createMany: {
            args: Prisma.OrganizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          delete: {
            args: Prisma.OrganizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          update: {
            args: Prisma.OrganizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganizationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          upsert: {
            args: Prisma.OrganizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganization>
          }
          groupBy: {
            args: Prisma.OrganizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number
          }
        }
      }
      Batch: {
        payload: Prisma.$BatchPayload<ExtArgs>
        fields: Prisma.BatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          findFirst: {
            args: Prisma.BatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          findMany: {
            args: Prisma.BatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>[]
          }
          create: {
            args: Prisma.BatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          createMany: {
            args: Prisma.BatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BatchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>[]
          }
          delete: {
            args: Prisma.BatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          update: {
            args: Prisma.BatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          deleteMany: {
            args: Prisma.BatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BatchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>[]
          }
          upsert: {
            args: Prisma.BatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          aggregate: {
            args: Prisma.BatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBatch>
          }
          groupBy: {
            args: Prisma.BatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<BatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.BatchCountArgs<ExtArgs>
            result: $Utils.Optional<BatchCountAggregateOutputType> | number
          }
        }
      }
      Imagecollections: {
        payload: Prisma.$ImagecollectionsPayload<ExtArgs>
        fields: Prisma.ImagecollectionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImagecollectionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagecollectionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImagecollectionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagecollectionsPayload>
          }
          findFirst: {
            args: Prisma.ImagecollectionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagecollectionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImagecollectionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagecollectionsPayload>
          }
          findMany: {
            args: Prisma.ImagecollectionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagecollectionsPayload>[]
          }
          create: {
            args: Prisma.ImagecollectionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagecollectionsPayload>
          }
          createMany: {
            args: Prisma.ImagecollectionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImagecollectionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagecollectionsPayload>[]
          }
          delete: {
            args: Prisma.ImagecollectionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagecollectionsPayload>
          }
          update: {
            args: Prisma.ImagecollectionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagecollectionsPayload>
          }
          deleteMany: {
            args: Prisma.ImagecollectionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImagecollectionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImagecollectionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagecollectionsPayload>[]
          }
          upsert: {
            args: Prisma.ImagecollectionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagecollectionsPayload>
          }
          aggregate: {
            args: Prisma.ImagecollectionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImagecollections>
          }
          groupBy: {
            args: Prisma.ImagecollectionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImagecollectionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImagecollectionsCountArgs<ExtArgs>
            result: $Utils.Optional<ImagecollectionsCountAggregateOutputType> | number
          }
        }
      }
      Template: {
        payload: Prisma.$TemplatePayload<ExtArgs>
        fields: Prisma.TemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          findFirst: {
            args: Prisma.TemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          findMany: {
            args: Prisma.TemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          create: {
            args: Prisma.TemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          createMany: {
            args: Prisma.TemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          delete: {
            args: Prisma.TemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          update: {
            args: Prisma.TemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          deleteMany: {
            args: Prisma.TemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          upsert: {
            args: Prisma.TemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          aggregate: {
            args: Prisma.TemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTemplate>
          }
          groupBy: {
            args: Prisma.TemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<TemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.TemplateCountArgs<ExtArgs>
            result: $Utils.Optional<TemplateCountAggregateOutputType> | number
          }
        }
      }
      TemplateField: {
        payload: Prisma.$TemplateFieldPayload<ExtArgs>
        fields: Prisma.TemplateFieldFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TemplateFieldFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateFieldPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TemplateFieldFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateFieldPayload>
          }
          findFirst: {
            args: Prisma.TemplateFieldFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateFieldPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TemplateFieldFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateFieldPayload>
          }
          findMany: {
            args: Prisma.TemplateFieldFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateFieldPayload>[]
          }
          create: {
            args: Prisma.TemplateFieldCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateFieldPayload>
          }
          createMany: {
            args: Prisma.TemplateFieldCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TemplateFieldCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateFieldPayload>[]
          }
          delete: {
            args: Prisma.TemplateFieldDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateFieldPayload>
          }
          update: {
            args: Prisma.TemplateFieldUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateFieldPayload>
          }
          deleteMany: {
            args: Prisma.TemplateFieldDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TemplateFieldUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TemplateFieldUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateFieldPayload>[]
          }
          upsert: {
            args: Prisma.TemplateFieldUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateFieldPayload>
          }
          aggregate: {
            args: Prisma.TemplateFieldAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTemplateField>
          }
          groupBy: {
            args: Prisma.TemplateFieldGroupByArgs<ExtArgs>
            result: $Utils.Optional<TemplateFieldGroupByOutputType>[]
          }
          count: {
            args: Prisma.TemplateFieldCountArgs<ExtArgs>
            result: $Utils.Optional<TemplateFieldCountAggregateOutputType> | number
          }
        }
      }
      TemplateChild: {
        payload: Prisma.$TemplateChildPayload<ExtArgs>
        fields: Prisma.TemplateChildFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TemplateChildFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateChildPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TemplateChildFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateChildPayload>
          }
          findFirst: {
            args: Prisma.TemplateChildFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateChildPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TemplateChildFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateChildPayload>
          }
          findMany: {
            args: Prisma.TemplateChildFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateChildPayload>[]
          }
          create: {
            args: Prisma.TemplateChildCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateChildPayload>
          }
          createMany: {
            args: Prisma.TemplateChildCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TemplateChildCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateChildPayload>[]
          }
          delete: {
            args: Prisma.TemplateChildDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateChildPayload>
          }
          update: {
            args: Prisma.TemplateChildUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateChildPayload>
          }
          deleteMany: {
            args: Prisma.TemplateChildDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TemplateChildUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TemplateChildUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateChildPayload>[]
          }
          upsert: {
            args: Prisma.TemplateChildUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateChildPayload>
          }
          aggregate: {
            args: Prisma.TemplateChildAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTemplateChild>
          }
          groupBy: {
            args: Prisma.TemplateChildGroupByArgs<ExtArgs>
            result: $Utils.Optional<TemplateChildGroupByOutputType>[]
          }
          count: {
            args: Prisma.TemplateChildCountArgs<ExtArgs>
            result: $Utils.Optional<TemplateChildCountAggregateOutputType> | number
          }
        }
      }
      FormSubmission: {
        payload: Prisma.$FormSubmissionPayload<ExtArgs>
        fields: Prisma.FormSubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FormSubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FormSubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionPayload>
          }
          findFirst: {
            args: Prisma.FormSubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FormSubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionPayload>
          }
          findMany: {
            args: Prisma.FormSubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionPayload>[]
          }
          create: {
            args: Prisma.FormSubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionPayload>
          }
          createMany: {
            args: Prisma.FormSubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FormSubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionPayload>[]
          }
          delete: {
            args: Prisma.FormSubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionPayload>
          }
          update: {
            args: Prisma.FormSubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionPayload>
          }
          deleteMany: {
            args: Prisma.FormSubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FormSubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FormSubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionPayload>[]
          }
          upsert: {
            args: Prisma.FormSubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionPayload>
          }
          aggregate: {
            args: Prisma.FormSubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFormSubmission>
          }
          groupBy: {
            args: Prisma.FormSubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormSubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.FormSubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<FormSubmissionCountAggregateOutputType> | number
          }
        }
      }
      QcFormSubmission: {
        payload: Prisma.$QcFormSubmissionPayload<ExtArgs>
        fields: Prisma.QcFormSubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QcFormSubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QcFormSubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QcFormSubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QcFormSubmissionPayload>
          }
          findFirst: {
            args: Prisma.QcFormSubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QcFormSubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QcFormSubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QcFormSubmissionPayload>
          }
          findMany: {
            args: Prisma.QcFormSubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QcFormSubmissionPayload>[]
          }
          create: {
            args: Prisma.QcFormSubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QcFormSubmissionPayload>
          }
          createMany: {
            args: Prisma.QcFormSubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QcFormSubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QcFormSubmissionPayload>[]
          }
          delete: {
            args: Prisma.QcFormSubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QcFormSubmissionPayload>
          }
          update: {
            args: Prisma.QcFormSubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QcFormSubmissionPayload>
          }
          deleteMany: {
            args: Prisma.QcFormSubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QcFormSubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QcFormSubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QcFormSubmissionPayload>[]
          }
          upsert: {
            args: Prisma.QcFormSubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QcFormSubmissionPayload>
          }
          aggregate: {
            args: Prisma.QcFormSubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQcFormSubmission>
          }
          groupBy: {
            args: Prisma.QcFormSubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QcFormSubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QcFormSubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<QcFormSubmissionCountAggregateOutputType> | number
          }
        }
      }
      UserLog: {
        payload: Prisma.$UserLogPayload<ExtArgs>
        fields: Prisma.UserLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLogPayload>
          }
          findFirst: {
            args: Prisma.UserLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLogPayload>
          }
          findMany: {
            args: Prisma.UserLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLogPayload>[]
          }
          create: {
            args: Prisma.UserLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLogPayload>
          }
          createMany: {
            args: Prisma.UserLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLogPayload>[]
          }
          delete: {
            args: Prisma.UserLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLogPayload>
          }
          update: {
            args: Prisma.UserLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLogPayload>
          }
          deleteMany: {
            args: Prisma.UserLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLogPayload>[]
          }
          upsert: {
            args: Prisma.UserLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLogPayload>
          }
          aggregate: {
            args: Prisma.UserLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserLog>
          }
          groupBy: {
            args: Prisma.UserLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserLogCountArgs<ExtArgs>
            result: $Utils.Optional<UserLogCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    ftp?: ftpOmit
    organization?: OrganizationOmit
    batch?: BatchOmit
    imagecollections?: ImagecollectionsOmit
    template?: TemplateOmit
    templateField?: TemplateFieldOmit
    templateChild?: TemplateChildOmit
    formSubmission?: FormSubmissionOmit
    qcFormSubmission?: QcFormSubmissionOmit
    userLog?: UserLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
    userLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userLogs?: boolean | UserCountOutputTypeCountUserLogsArgs
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
  export type UserCountOutputTypeCountUserLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLogWhereInput
  }


  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    users: number
    ftps: number
  }

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | OrganizationCountOutputTypeCountUsersArgs
    ftps?: boolean | OrganizationCountOutputTypeCountFtpsArgs
  }

  // Custom InputTypes
  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountFtpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ftpWhereInput
  }


  /**
   * Count Type TemplateCountOutputType
   */

  export type TemplateCountOutputType = {
    templateFields: number
  }

  export type TemplateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    templateFields?: boolean | TemplateCountOutputTypeCountTemplateFieldsArgs
  }

  // Custom InputTypes
  /**
   * TemplateCountOutputType without action
   */
  export type TemplateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateCountOutputType
     */
    select?: TemplateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TemplateCountOutputType without action
   */
  export type TemplateCountOutputTypeCountTemplateFieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateFieldWhereInput
  }


  /**
   * Count Type TemplateFieldCountOutputType
   */

  export type TemplateFieldCountOutputType = {
    children: number
  }

  export type TemplateFieldCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | TemplateFieldCountOutputTypeCountChildrenArgs
  }

  // Custom InputTypes
  /**
   * TemplateFieldCountOutputType without action
   */
  export type TemplateFieldCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateFieldCountOutputType
     */
    select?: TemplateFieldCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TemplateFieldCountOutputType without action
   */
  export type TemplateFieldCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateChildWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    organizationId: number | null
  }

  export type UserSumAggregateOutputType = {
    organizationId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    organizationId: number | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
    fullname: string | null
    username: string | null
    designation: string | null
    tl: string | null
    am: string | null
    manager: string | null
    shift: string | null
    datapopulation: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    organizationId: number | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
    fullname: string | null
    username: string | null
    designation: string | null
    tl: string | null
    am: string | null
    manager: string | null
    shift: string | null
    datapopulation: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    full_data: number
    organizationId: number
    role: number
    createdAt: number
    updatedAt: number
    fullname: number
    username: number
    designation: number
    tl: number
    am: number
    manager: number
    shift: number
    datapopulation: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    organizationId?: true
  }

  export type UserSumAggregateInputType = {
    organizationId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    organizationId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    fullname?: true
    username?: true
    designation?: true
    tl?: true
    am?: true
    manager?: true
    shift?: true
    datapopulation?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    organizationId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    fullname?: true
    username?: true
    designation?: true
    tl?: true
    am?: true
    manager?: true
    shift?: true
    datapopulation?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    full_data?: true
    organizationId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    fullname?: true
    username?: true
    designation?: true
    tl?: true
    am?: true
    manager?: true
    shift?: true
    datapopulation?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    full_data: JsonValue
    organizationId: number | null
    role: string
    createdAt: Date
    updatedAt: Date
    fullname: string | null
    username: string | null
    designation: string | null
    tl: string | null
    am: string | null
    manager: string | null
    shift: string | null
    datapopulation: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    full_data?: boolean
    organizationId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fullname?: boolean
    username?: boolean
    designation?: boolean
    tl?: boolean
    am?: boolean
    manager?: boolean
    shift?: boolean
    datapopulation?: boolean
    organization?: boolean | User$organizationArgs<ExtArgs>
    userLogs?: boolean | User$userLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    full_data?: boolean
    organizationId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fullname?: boolean
    username?: boolean
    designation?: boolean
    tl?: boolean
    am?: boolean
    manager?: boolean
    shift?: boolean
    datapopulation?: boolean
    organization?: boolean | User$organizationArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    full_data?: boolean
    organizationId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fullname?: boolean
    username?: boolean
    designation?: boolean
    tl?: boolean
    am?: boolean
    manager?: boolean
    shift?: boolean
    datapopulation?: boolean
    organization?: boolean | User$organizationArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    full_data?: boolean
    organizationId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fullname?: boolean
    username?: boolean
    designation?: boolean
    tl?: boolean
    am?: boolean
    manager?: boolean
    shift?: boolean
    datapopulation?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "full_data" | "organizationId" | "role" | "createdAt" | "updatedAt" | "fullname" | "username" | "designation" | "tl" | "am" | "manager" | "shift" | "datapopulation", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | User$organizationArgs<ExtArgs>
    userLogs?: boolean | User$userLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | User$organizationArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | User$organizationArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs> | null
      userLogs: Prisma.$UserLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      full_data: Prisma.JsonValue
      organizationId: number | null
      role: string
      createdAt: Date
      updatedAt: Date
      fullname: string | null
      username: string | null
      designation: string | null
      tl: string | null
      am: string | null
      manager: string | null
      shift: string | null
      datapopulation: string | null
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
    organization<T extends User$organizationArgs<ExtArgs> = {}>(args?: Subset<T, User$organizationArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    userLogs<T extends User$userLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$userLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly full_data: FieldRef<"User", 'Json'>
    readonly organizationId: FieldRef<"User", 'Int'>
    readonly role: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly fullname: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly designation: FieldRef<"User", 'String'>
    readonly tl: FieldRef<"User", 'String'>
    readonly am: FieldRef<"User", 'String'>
    readonly manager: FieldRef<"User", 'String'>
    readonly shift: FieldRef<"User", 'String'>
    readonly datapopulation: FieldRef<"User", 'String'>
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * User.organization
   */
  export type User$organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    where?: OrganizationWhereInput
  }

  /**
   * User.userLogs
   */
  export type User$userLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLog
     */
    select?: UserLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLog
     */
    omit?: UserLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLogInclude<ExtArgs> | null
    where?: UserLogWhereInput
    orderBy?: UserLogOrderByWithRelationInput | UserLogOrderByWithRelationInput[]
    cursor?: UserLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserLogScalarFieldEnum | UserLogScalarFieldEnum[]
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
   * Model ftp
   */

  export type AggregateFtp = {
    _count: FtpCountAggregateOutputType | null
    _avg: FtpAvgAggregateOutputType | null
    _sum: FtpSumAggregateOutputType | null
    _min: FtpMinAggregateOutputType | null
    _max: FtpMaxAggregateOutputType | null
  }

  export type FtpAvgAggregateOutputType = {
    id: number | null
    port: number | null
    organizationId: number | null
  }

  export type FtpSumAggregateOutputType = {
    id: number | null
    port: number | null
    organizationId: number | null
  }

  export type FtpMinAggregateOutputType = {
    id: number | null
    host: string | null
    port: number | null
    username: string | null
    password: string | null
    ftppath: string | null
    organizationId: number | null
    ocr: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FtpMaxAggregateOutputType = {
    id: number | null
    host: string | null
    port: number | null
    username: string | null
    password: string | null
    ftppath: string | null
    organizationId: number | null
    ocr: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FtpCountAggregateOutputType = {
    id: number
    host: number
    port: number
    username: number
    password: number
    ftppath: number
    organizationId: number
    ocr: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FtpAvgAggregateInputType = {
    id?: true
    port?: true
    organizationId?: true
  }

  export type FtpSumAggregateInputType = {
    id?: true
    port?: true
    organizationId?: true
  }

  export type FtpMinAggregateInputType = {
    id?: true
    host?: true
    port?: true
    username?: true
    password?: true
    ftppath?: true
    organizationId?: true
    ocr?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FtpMaxAggregateInputType = {
    id?: true
    host?: true
    port?: true
    username?: true
    password?: true
    ftppath?: true
    organizationId?: true
    ocr?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FtpCountAggregateInputType = {
    id?: true
    host?: true
    port?: true
    username?: true
    password?: true
    ftppath?: true
    organizationId?: true
    ocr?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FtpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ftp to aggregate.
     */
    where?: ftpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ftps to fetch.
     */
    orderBy?: ftpOrderByWithRelationInput | ftpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ftpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ftps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ftps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ftps
    **/
    _count?: true | FtpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FtpAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FtpSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FtpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FtpMaxAggregateInputType
  }

  export type GetFtpAggregateType<T extends FtpAggregateArgs> = {
        [P in keyof T & keyof AggregateFtp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFtp[P]>
      : GetScalarType<T[P], AggregateFtp[P]>
  }




  export type ftpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ftpWhereInput
    orderBy?: ftpOrderByWithAggregationInput | ftpOrderByWithAggregationInput[]
    by: FtpScalarFieldEnum[] | FtpScalarFieldEnum
    having?: ftpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FtpCountAggregateInputType | true
    _avg?: FtpAvgAggregateInputType
    _sum?: FtpSumAggregateInputType
    _min?: FtpMinAggregateInputType
    _max?: FtpMaxAggregateInputType
  }

  export type FtpGroupByOutputType = {
    id: number
    host: string
    port: number
    username: string
    password: string
    ftppath: string
    organizationId: number
    ocr: boolean
    createdAt: Date
    updatedAt: Date
    _count: FtpCountAggregateOutputType | null
    _avg: FtpAvgAggregateOutputType | null
    _sum: FtpSumAggregateOutputType | null
    _min: FtpMinAggregateOutputType | null
    _max: FtpMaxAggregateOutputType | null
  }

  type GetFtpGroupByPayload<T extends ftpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FtpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FtpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FtpGroupByOutputType[P]>
            : GetScalarType<T[P], FtpGroupByOutputType[P]>
        }
      >
    >


  export type ftpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    host?: boolean
    port?: boolean
    username?: boolean
    password?: boolean
    ftppath?: boolean
    organizationId?: boolean
    ocr?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ftp"]>

  export type ftpSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    host?: boolean
    port?: boolean
    username?: boolean
    password?: boolean
    ftppath?: boolean
    organizationId?: boolean
    ocr?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ftp"]>

  export type ftpSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    host?: boolean
    port?: boolean
    username?: boolean
    password?: boolean
    ftppath?: boolean
    organizationId?: boolean
    ocr?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ftp"]>

  export type ftpSelectScalar = {
    id?: boolean
    host?: boolean
    port?: boolean
    username?: boolean
    password?: boolean
    ftppath?: boolean
    organizationId?: boolean
    ocr?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ftpOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "host" | "port" | "username" | "password" | "ftppath" | "organizationId" | "ocr" | "createdAt" | "updatedAt", ExtArgs["result"]["ftp"]>
  export type ftpInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type ftpIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type ftpIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $ftpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ftp"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      host: string
      port: number
      username: string
      password: string
      ftppath: string
      organizationId: number
      ocr: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ftp"]>
    composites: {}
  }

  type ftpGetPayload<S extends boolean | null | undefined | ftpDefaultArgs> = $Result.GetResult<Prisma.$ftpPayload, S>

  type ftpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ftpFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FtpCountAggregateInputType | true
    }

  export interface ftpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ftp'], meta: { name: 'ftp' } }
    /**
     * Find zero or one Ftp that matches the filter.
     * @param {ftpFindUniqueArgs} args - Arguments to find a Ftp
     * @example
     * // Get one Ftp
     * const ftp = await prisma.ftp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ftpFindUniqueArgs>(args: SelectSubset<T, ftpFindUniqueArgs<ExtArgs>>): Prisma__ftpClient<$Result.GetResult<Prisma.$ftpPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ftp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ftpFindUniqueOrThrowArgs} args - Arguments to find a Ftp
     * @example
     * // Get one Ftp
     * const ftp = await prisma.ftp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ftpFindUniqueOrThrowArgs>(args: SelectSubset<T, ftpFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ftpClient<$Result.GetResult<Prisma.$ftpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ftp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ftpFindFirstArgs} args - Arguments to find a Ftp
     * @example
     * // Get one Ftp
     * const ftp = await prisma.ftp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ftpFindFirstArgs>(args?: SelectSubset<T, ftpFindFirstArgs<ExtArgs>>): Prisma__ftpClient<$Result.GetResult<Prisma.$ftpPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ftp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ftpFindFirstOrThrowArgs} args - Arguments to find a Ftp
     * @example
     * // Get one Ftp
     * const ftp = await prisma.ftp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ftpFindFirstOrThrowArgs>(args?: SelectSubset<T, ftpFindFirstOrThrowArgs<ExtArgs>>): Prisma__ftpClient<$Result.GetResult<Prisma.$ftpPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ftps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ftpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ftps
     * const ftps = await prisma.ftp.findMany()
     * 
     * // Get first 10 Ftps
     * const ftps = await prisma.ftp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ftpWithIdOnly = await prisma.ftp.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ftpFindManyArgs>(args?: SelectSubset<T, ftpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ftpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ftp.
     * @param {ftpCreateArgs} args - Arguments to create a Ftp.
     * @example
     * // Create one Ftp
     * const Ftp = await prisma.ftp.create({
     *   data: {
     *     // ... data to create a Ftp
     *   }
     * })
     * 
     */
    create<T extends ftpCreateArgs>(args: SelectSubset<T, ftpCreateArgs<ExtArgs>>): Prisma__ftpClient<$Result.GetResult<Prisma.$ftpPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ftps.
     * @param {ftpCreateManyArgs} args - Arguments to create many Ftps.
     * @example
     * // Create many Ftps
     * const ftp = await prisma.ftp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ftpCreateManyArgs>(args?: SelectSubset<T, ftpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ftps and returns the data saved in the database.
     * @param {ftpCreateManyAndReturnArgs} args - Arguments to create many Ftps.
     * @example
     * // Create many Ftps
     * const ftp = await prisma.ftp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ftps and only return the `id`
     * const ftpWithIdOnly = await prisma.ftp.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ftpCreateManyAndReturnArgs>(args?: SelectSubset<T, ftpCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ftpPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ftp.
     * @param {ftpDeleteArgs} args - Arguments to delete one Ftp.
     * @example
     * // Delete one Ftp
     * const Ftp = await prisma.ftp.delete({
     *   where: {
     *     // ... filter to delete one Ftp
     *   }
     * })
     * 
     */
    delete<T extends ftpDeleteArgs>(args: SelectSubset<T, ftpDeleteArgs<ExtArgs>>): Prisma__ftpClient<$Result.GetResult<Prisma.$ftpPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ftp.
     * @param {ftpUpdateArgs} args - Arguments to update one Ftp.
     * @example
     * // Update one Ftp
     * const ftp = await prisma.ftp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ftpUpdateArgs>(args: SelectSubset<T, ftpUpdateArgs<ExtArgs>>): Prisma__ftpClient<$Result.GetResult<Prisma.$ftpPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ftps.
     * @param {ftpDeleteManyArgs} args - Arguments to filter Ftps to delete.
     * @example
     * // Delete a few Ftps
     * const { count } = await prisma.ftp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ftpDeleteManyArgs>(args?: SelectSubset<T, ftpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ftps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ftpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ftps
     * const ftp = await prisma.ftp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ftpUpdateManyArgs>(args: SelectSubset<T, ftpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ftps and returns the data updated in the database.
     * @param {ftpUpdateManyAndReturnArgs} args - Arguments to update many Ftps.
     * @example
     * // Update many Ftps
     * const ftp = await prisma.ftp.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ftps and only return the `id`
     * const ftpWithIdOnly = await prisma.ftp.updateManyAndReturn({
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
    updateManyAndReturn<T extends ftpUpdateManyAndReturnArgs>(args: SelectSubset<T, ftpUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ftpPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ftp.
     * @param {ftpUpsertArgs} args - Arguments to update or create a Ftp.
     * @example
     * // Update or create a Ftp
     * const ftp = await prisma.ftp.upsert({
     *   create: {
     *     // ... data to create a Ftp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ftp we want to update
     *   }
     * })
     */
    upsert<T extends ftpUpsertArgs>(args: SelectSubset<T, ftpUpsertArgs<ExtArgs>>): Prisma__ftpClient<$Result.GetResult<Prisma.$ftpPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ftps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ftpCountArgs} args - Arguments to filter Ftps to count.
     * @example
     * // Count the number of Ftps
     * const count = await prisma.ftp.count({
     *   where: {
     *     // ... the filter for the Ftps we want to count
     *   }
     * })
    **/
    count<T extends ftpCountArgs>(
      args?: Subset<T, ftpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FtpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ftp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FtpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FtpAggregateArgs>(args: Subset<T, FtpAggregateArgs>): Prisma.PrismaPromise<GetFtpAggregateType<T>>

    /**
     * Group by Ftp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ftpGroupByArgs} args - Group by arguments.
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
      T extends ftpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ftpGroupByArgs['orderBy'] }
        : { orderBy?: ftpGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ftpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFtpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ftp model
   */
  readonly fields: ftpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ftp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ftpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ftp model
   */
  interface ftpFieldRefs {
    readonly id: FieldRef<"ftp", 'Int'>
    readonly host: FieldRef<"ftp", 'String'>
    readonly port: FieldRef<"ftp", 'Int'>
    readonly username: FieldRef<"ftp", 'String'>
    readonly password: FieldRef<"ftp", 'String'>
    readonly ftppath: FieldRef<"ftp", 'String'>
    readonly organizationId: FieldRef<"ftp", 'Int'>
    readonly ocr: FieldRef<"ftp", 'Boolean'>
    readonly createdAt: FieldRef<"ftp", 'DateTime'>
    readonly updatedAt: FieldRef<"ftp", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ftp findUnique
   */
  export type ftpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ftp
     */
    select?: ftpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ftp
     */
    omit?: ftpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ftpInclude<ExtArgs> | null
    /**
     * Filter, which ftp to fetch.
     */
    where: ftpWhereUniqueInput
  }

  /**
   * ftp findUniqueOrThrow
   */
  export type ftpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ftp
     */
    select?: ftpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ftp
     */
    omit?: ftpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ftpInclude<ExtArgs> | null
    /**
     * Filter, which ftp to fetch.
     */
    where: ftpWhereUniqueInput
  }

  /**
   * ftp findFirst
   */
  export type ftpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ftp
     */
    select?: ftpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ftp
     */
    omit?: ftpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ftpInclude<ExtArgs> | null
    /**
     * Filter, which ftp to fetch.
     */
    where?: ftpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ftps to fetch.
     */
    orderBy?: ftpOrderByWithRelationInput | ftpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ftps.
     */
    cursor?: ftpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ftps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ftps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ftps.
     */
    distinct?: FtpScalarFieldEnum | FtpScalarFieldEnum[]
  }

  /**
   * ftp findFirstOrThrow
   */
  export type ftpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ftp
     */
    select?: ftpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ftp
     */
    omit?: ftpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ftpInclude<ExtArgs> | null
    /**
     * Filter, which ftp to fetch.
     */
    where?: ftpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ftps to fetch.
     */
    orderBy?: ftpOrderByWithRelationInput | ftpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ftps.
     */
    cursor?: ftpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ftps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ftps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ftps.
     */
    distinct?: FtpScalarFieldEnum | FtpScalarFieldEnum[]
  }

  /**
   * ftp findMany
   */
  export type ftpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ftp
     */
    select?: ftpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ftp
     */
    omit?: ftpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ftpInclude<ExtArgs> | null
    /**
     * Filter, which ftps to fetch.
     */
    where?: ftpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ftps to fetch.
     */
    orderBy?: ftpOrderByWithRelationInput | ftpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ftps.
     */
    cursor?: ftpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ftps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ftps.
     */
    skip?: number
    distinct?: FtpScalarFieldEnum | FtpScalarFieldEnum[]
  }

  /**
   * ftp create
   */
  export type ftpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ftp
     */
    select?: ftpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ftp
     */
    omit?: ftpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ftpInclude<ExtArgs> | null
    /**
     * The data needed to create a ftp.
     */
    data: XOR<ftpCreateInput, ftpUncheckedCreateInput>
  }

  /**
   * ftp createMany
   */
  export type ftpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ftps.
     */
    data: ftpCreateManyInput | ftpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ftp createManyAndReturn
   */
  export type ftpCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ftp
     */
    select?: ftpSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ftp
     */
    omit?: ftpOmit<ExtArgs> | null
    /**
     * The data used to create many ftps.
     */
    data: ftpCreateManyInput | ftpCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ftpIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ftp update
   */
  export type ftpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ftp
     */
    select?: ftpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ftp
     */
    omit?: ftpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ftpInclude<ExtArgs> | null
    /**
     * The data needed to update a ftp.
     */
    data: XOR<ftpUpdateInput, ftpUncheckedUpdateInput>
    /**
     * Choose, which ftp to update.
     */
    where: ftpWhereUniqueInput
  }

  /**
   * ftp updateMany
   */
  export type ftpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ftps.
     */
    data: XOR<ftpUpdateManyMutationInput, ftpUncheckedUpdateManyInput>
    /**
     * Filter which ftps to update
     */
    where?: ftpWhereInput
    /**
     * Limit how many ftps to update.
     */
    limit?: number
  }

  /**
   * ftp updateManyAndReturn
   */
  export type ftpUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ftp
     */
    select?: ftpSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ftp
     */
    omit?: ftpOmit<ExtArgs> | null
    /**
     * The data used to update ftps.
     */
    data: XOR<ftpUpdateManyMutationInput, ftpUncheckedUpdateManyInput>
    /**
     * Filter which ftps to update
     */
    where?: ftpWhereInput
    /**
     * Limit how many ftps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ftpIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ftp upsert
   */
  export type ftpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ftp
     */
    select?: ftpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ftp
     */
    omit?: ftpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ftpInclude<ExtArgs> | null
    /**
     * The filter to search for the ftp to update in case it exists.
     */
    where: ftpWhereUniqueInput
    /**
     * In case the ftp found by the `where` argument doesn't exist, create a new ftp with this data.
     */
    create: XOR<ftpCreateInput, ftpUncheckedCreateInput>
    /**
     * In case the ftp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ftpUpdateInput, ftpUncheckedUpdateInput>
  }

  /**
   * ftp delete
   */
  export type ftpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ftp
     */
    select?: ftpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ftp
     */
    omit?: ftpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ftpInclude<ExtArgs> | null
    /**
     * Filter which ftp to delete.
     */
    where: ftpWhereUniqueInput
  }

  /**
   * ftp deleteMany
   */
  export type ftpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ftps to delete
     */
    where?: ftpWhereInput
    /**
     * Limit how many ftps to delete.
     */
    limit?: number
  }

  /**
   * ftp without action
   */
  export type ftpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ftp
     */
    select?: ftpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ftp
     */
    omit?: ftpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ftpInclude<ExtArgs> | null
  }


  /**
   * Model Organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _avg: OrganizationAvgAggregateOutputType | null
    _sum: OrganizationSumAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationAvgAggregateOutputType = {
    id: number | null
  }

  export type OrganizationSumAggregateOutputType = {
    id: number | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    Org_ID: string | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    Org_ID: string | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    Org_ID: number
    _all: number
  }


  export type OrganizationAvgAggregateInputType = {
    id?: true
  }

  export type OrganizationSumAggregateInputType = {
    id?: true
  }

  export type OrganizationMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    Org_ID?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    Org_ID?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    Org_ID?: true
    _all?: true
  }

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organization to aggregate.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrganizationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrganizationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithAggregationInput | OrganizationOrderByWithAggregationInput[]
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum
    having?: OrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _avg?: OrganizationAvgAggregateInputType
    _sum?: OrganizationSumAggregateInputType
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    Org_ID: string
    _count: OrganizationCountAggregateOutputType | null
    _avg: OrganizationAvgAggregateOutputType | null
    _sum: OrganizationSumAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    Org_ID?: boolean
    users?: boolean | Organization$usersArgs<ExtArgs>
    ftps?: boolean | Organization$ftpsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    Org_ID?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    Org_ID?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    Org_ID?: boolean
  }

  export type OrganizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "Org_ID", ExtArgs["result"]["organization"]>
  export type OrganizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Organization$usersArgs<ExtArgs>
    ftps?: boolean | Organization$ftpsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrganizationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OrganizationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OrganizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organization"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      ftps: Prisma.$ftpPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      Org_ID: string
    }, ExtArgs["result"]["organization"]>
    composites: {}
  }

  type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = $Result.GetResult<Prisma.$OrganizationPayload, S>

  type OrganizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface OrganizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organization'], meta: { name: 'Organization' } }
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationFindUniqueArgs>(args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationFindFirstArgs>(args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationFindManyArgs>(args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
     */
    create<T extends OrganizationCreateArgs>(args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organizations.
     * @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationCreateManyArgs>(args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organizations and returns the data saved in the database.
     * @param {OrganizationCreateManyAndReturnArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
     */
    delete<T extends OrganizationDeleteArgs>(args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationUpdateArgs>(args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationDeleteManyArgs>(args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationUpdateManyArgs>(args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations and returns the data updated in the database.
     * @param {OrganizationUpdateManyAndReturnArgs} args - Arguments to update many Organizations.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrganizationUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganizationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationUpsertArgs>(args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
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
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organization model
   */
  readonly fields: OrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Organization$usersArgs<ExtArgs> = {}>(args?: Subset<T, Organization$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ftps<T extends Organization$ftpsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$ftpsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ftpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Organization model
   */
  interface OrganizationFieldRefs {
    readonly id: FieldRef<"Organization", 'Int'>
    readonly name: FieldRef<"Organization", 'String'>
    readonly createdAt: FieldRef<"Organization", 'DateTime'>
    readonly Org_ID: FieldRef<"Organization", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization create
   */
  export type OrganizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Organization.
     */
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
  }

  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization createManyAndReturn
   */
  export type OrganizationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization update
   */
  export type OrganizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Organization.
     */
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
    /**
     * Choose, which Organization to update.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization updateManyAndReturn
   */
  export type OrganizationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Organization to update in case it exists.
     */
    where: OrganizationWhereUniqueInput
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     */
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
  }

  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter which Organization to delete.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to delete.
     */
    limit?: number
  }

  /**
   * Organization.users
   */
  export type Organization$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Organization.ftps
   */
  export type Organization$ftpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ftp
     */
    select?: ftpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ftp
     */
    omit?: ftpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ftpInclude<ExtArgs> | null
    where?: ftpWhereInput
    orderBy?: ftpOrderByWithRelationInput | ftpOrderByWithRelationInput[]
    cursor?: ftpWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FtpScalarFieldEnum | FtpScalarFieldEnum[]
  }

  /**
   * Organization without action
   */
  export type OrganizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
  }


  /**
   * Model Batch
   */

  export type AggregateBatch = {
    _count: BatchCountAggregateOutputType | null
    _avg: BatchAvgAggregateOutputType | null
    _sum: BatchSumAggregateOutputType | null
    _min: BatchMinAggregateOutputType | null
    _max: BatchMaxAggregateOutputType | null
  }

  export type BatchAvgAggregateOutputType = {
    id: number | null
    status: number | null
    uniqueid: number | null
    priority: number | null
    engineToPriority: number | null
    organizationId: number | null
  }

  export type BatchSumAggregateOutputType = {
    id: number | null
    status: number | null
    uniqueid: number | null
    priority: number | null
    engineToPriority: number | null
    organizationId: number | null
  }

  export type BatchMinAggregateOutputType = {
    id: number | null
    batchname: string | null
    status: number | null
    folderpath: string | null
    uniqueid: number | null
    isactive: boolean | null
    createdat: Date | null
    updatedat: Date | null
    priority: number | null
    county: string | null
    engineToPriority: number | null
    organizationId: number | null
  }

  export type BatchMaxAggregateOutputType = {
    id: number | null
    batchname: string | null
    status: number | null
    folderpath: string | null
    uniqueid: number | null
    isactive: boolean | null
    createdat: Date | null
    updatedat: Date | null
    priority: number | null
    county: string | null
    engineToPriority: number | null
    organizationId: number | null
  }

  export type BatchCountAggregateOutputType = {
    id: number
    batchname: number
    status: number
    folderpath: number
    uniqueid: number
    isactive: number
    createdat: number
    updatedat: number
    priority: number
    county: number
    engineToPriority: number
    organizationId: number
    _all: number
  }


  export type BatchAvgAggregateInputType = {
    id?: true
    status?: true
    uniqueid?: true
    priority?: true
    engineToPriority?: true
    organizationId?: true
  }

  export type BatchSumAggregateInputType = {
    id?: true
    status?: true
    uniqueid?: true
    priority?: true
    engineToPriority?: true
    organizationId?: true
  }

  export type BatchMinAggregateInputType = {
    id?: true
    batchname?: true
    status?: true
    folderpath?: true
    uniqueid?: true
    isactive?: true
    createdat?: true
    updatedat?: true
    priority?: true
    county?: true
    engineToPriority?: true
    organizationId?: true
  }

  export type BatchMaxAggregateInputType = {
    id?: true
    batchname?: true
    status?: true
    folderpath?: true
    uniqueid?: true
    isactive?: true
    createdat?: true
    updatedat?: true
    priority?: true
    county?: true
    engineToPriority?: true
    organizationId?: true
  }

  export type BatchCountAggregateInputType = {
    id?: true
    batchname?: true
    status?: true
    folderpath?: true
    uniqueid?: true
    isactive?: true
    createdat?: true
    updatedat?: true
    priority?: true
    county?: true
    engineToPriority?: true
    organizationId?: true
    _all?: true
  }

  export type BatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Batch to aggregate.
     */
    where?: BatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Batches to fetch.
     */
    orderBy?: BatchOrderByWithRelationInput | BatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Batches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Batches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Batches
    **/
    _count?: true | BatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BatchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BatchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BatchMaxAggregateInputType
  }

  export type GetBatchAggregateType<T extends BatchAggregateArgs> = {
        [P in keyof T & keyof AggregateBatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBatch[P]>
      : GetScalarType<T[P], AggregateBatch[P]>
  }




  export type BatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BatchWhereInput
    orderBy?: BatchOrderByWithAggregationInput | BatchOrderByWithAggregationInput[]
    by: BatchScalarFieldEnum[] | BatchScalarFieldEnum
    having?: BatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BatchCountAggregateInputType | true
    _avg?: BatchAvgAggregateInputType
    _sum?: BatchSumAggregateInputType
    _min?: BatchMinAggregateInputType
    _max?: BatchMaxAggregateInputType
  }

  export type BatchGroupByOutputType = {
    id: number
    batchname: string
    status: number
    folderpath: string
    uniqueid: number
    isactive: boolean
    createdat: Date
    updatedat: Date
    priority: number | null
    county: string | null
    engineToPriority: number | null
    organizationId: number
    _count: BatchCountAggregateOutputType | null
    _avg: BatchAvgAggregateOutputType | null
    _sum: BatchSumAggregateOutputType | null
    _min: BatchMinAggregateOutputType | null
    _max: BatchMaxAggregateOutputType | null
  }

  type GetBatchGroupByPayload<T extends BatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BatchGroupByOutputType[P]>
            : GetScalarType<T[P], BatchGroupByOutputType[P]>
        }
      >
    >


  export type BatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    batchname?: boolean
    status?: boolean
    folderpath?: boolean
    uniqueid?: boolean
    isactive?: boolean
    createdat?: boolean
    updatedat?: boolean
    priority?: boolean
    county?: boolean
    engineToPriority?: boolean
    organizationId?: boolean
  }, ExtArgs["result"]["batch"]>

  export type BatchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    batchname?: boolean
    status?: boolean
    folderpath?: boolean
    uniqueid?: boolean
    isactive?: boolean
    createdat?: boolean
    updatedat?: boolean
    priority?: boolean
    county?: boolean
    engineToPriority?: boolean
    organizationId?: boolean
  }, ExtArgs["result"]["batch"]>

  export type BatchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    batchname?: boolean
    status?: boolean
    folderpath?: boolean
    uniqueid?: boolean
    isactive?: boolean
    createdat?: boolean
    updatedat?: boolean
    priority?: boolean
    county?: boolean
    engineToPriority?: boolean
    organizationId?: boolean
  }, ExtArgs["result"]["batch"]>

  export type BatchSelectScalar = {
    id?: boolean
    batchname?: boolean
    status?: boolean
    folderpath?: boolean
    uniqueid?: boolean
    isactive?: boolean
    createdat?: boolean
    updatedat?: boolean
    priority?: boolean
    county?: boolean
    engineToPriority?: boolean
    organizationId?: boolean
  }

  export type BatchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "batchname" | "status" | "folderpath" | "uniqueid" | "isactive" | "createdat" | "updatedat" | "priority" | "county" | "engineToPriority" | "organizationId", ExtArgs["result"]["batch"]>

  export type $BatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Batch"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      batchname: string
      status: number
      folderpath: string
      uniqueid: number
      isactive: boolean
      createdat: Date
      updatedat: Date
      priority: number | null
      county: string | null
      engineToPriority: number | null
      organizationId: number
    }, ExtArgs["result"]["batch"]>
    composites: {}
  }

  type BatchGetPayload<S extends boolean | null | undefined | BatchDefaultArgs> = $Result.GetResult<Prisma.$BatchPayload, S>

  type BatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BatchCountAggregateInputType | true
    }

  export interface BatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Batch'], meta: { name: 'Batch' } }
    /**
     * Find zero or one Batch that matches the filter.
     * @param {BatchFindUniqueArgs} args - Arguments to find a Batch
     * @example
     * // Get one Batch
     * const batch = await prisma.batch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BatchFindUniqueArgs>(args: SelectSubset<T, BatchFindUniqueArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Batch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BatchFindUniqueOrThrowArgs} args - Arguments to find a Batch
     * @example
     * // Get one Batch
     * const batch = await prisma.batch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BatchFindUniqueOrThrowArgs>(args: SelectSubset<T, BatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Batch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchFindFirstArgs} args - Arguments to find a Batch
     * @example
     * // Get one Batch
     * const batch = await prisma.batch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BatchFindFirstArgs>(args?: SelectSubset<T, BatchFindFirstArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Batch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchFindFirstOrThrowArgs} args - Arguments to find a Batch
     * @example
     * // Get one Batch
     * const batch = await prisma.batch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BatchFindFirstOrThrowArgs>(args?: SelectSubset<T, BatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Batches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Batches
     * const batches = await prisma.batch.findMany()
     * 
     * // Get first 10 Batches
     * const batches = await prisma.batch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const batchWithIdOnly = await prisma.batch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BatchFindManyArgs>(args?: SelectSubset<T, BatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Batch.
     * @param {BatchCreateArgs} args - Arguments to create a Batch.
     * @example
     * // Create one Batch
     * const Batch = await prisma.batch.create({
     *   data: {
     *     // ... data to create a Batch
     *   }
     * })
     * 
     */
    create<T extends BatchCreateArgs>(args: SelectSubset<T, BatchCreateArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Batches.
     * @param {BatchCreateManyArgs} args - Arguments to create many Batches.
     * @example
     * // Create many Batches
     * const batch = await prisma.batch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BatchCreateManyArgs>(args?: SelectSubset<T, BatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Batches and returns the data saved in the database.
     * @param {BatchCreateManyAndReturnArgs} args - Arguments to create many Batches.
     * @example
     * // Create many Batches
     * const batch = await prisma.batch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Batches and only return the `id`
     * const batchWithIdOnly = await prisma.batch.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BatchCreateManyAndReturnArgs>(args?: SelectSubset<T, BatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Batch.
     * @param {BatchDeleteArgs} args - Arguments to delete one Batch.
     * @example
     * // Delete one Batch
     * const Batch = await prisma.batch.delete({
     *   where: {
     *     // ... filter to delete one Batch
     *   }
     * })
     * 
     */
    delete<T extends BatchDeleteArgs>(args: SelectSubset<T, BatchDeleteArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Batch.
     * @param {BatchUpdateArgs} args - Arguments to update one Batch.
     * @example
     * // Update one Batch
     * const batch = await prisma.batch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BatchUpdateArgs>(args: SelectSubset<T, BatchUpdateArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Batches.
     * @param {BatchDeleteManyArgs} args - Arguments to filter Batches to delete.
     * @example
     * // Delete a few Batches
     * const { count } = await prisma.batch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BatchDeleteManyArgs>(args?: SelectSubset<T, BatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Batches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Batches
     * const batch = await prisma.batch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BatchUpdateManyArgs>(args: SelectSubset<T, BatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Batches and returns the data updated in the database.
     * @param {BatchUpdateManyAndReturnArgs} args - Arguments to update many Batches.
     * @example
     * // Update many Batches
     * const batch = await prisma.batch.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Batches and only return the `id`
     * const batchWithIdOnly = await prisma.batch.updateManyAndReturn({
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
    updateManyAndReturn<T extends BatchUpdateManyAndReturnArgs>(args: SelectSubset<T, BatchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Batch.
     * @param {BatchUpsertArgs} args - Arguments to update or create a Batch.
     * @example
     * // Update or create a Batch
     * const batch = await prisma.batch.upsert({
     *   create: {
     *     // ... data to create a Batch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Batch we want to update
     *   }
     * })
     */
    upsert<T extends BatchUpsertArgs>(args: SelectSubset<T, BatchUpsertArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Batches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchCountArgs} args - Arguments to filter Batches to count.
     * @example
     * // Count the number of Batches
     * const count = await prisma.batch.count({
     *   where: {
     *     // ... the filter for the Batches we want to count
     *   }
     * })
    **/
    count<T extends BatchCountArgs>(
      args?: Subset<T, BatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Batch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BatchAggregateArgs>(args: Subset<T, BatchAggregateArgs>): Prisma.PrismaPromise<GetBatchAggregateType<T>>

    /**
     * Group by Batch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchGroupByArgs} args - Group by arguments.
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
      T extends BatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BatchGroupByArgs['orderBy'] }
        : { orderBy?: BatchGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Batch model
   */
  readonly fields: BatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Batch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Batch model
   */
  interface BatchFieldRefs {
    readonly id: FieldRef<"Batch", 'Int'>
    readonly batchname: FieldRef<"Batch", 'String'>
    readonly status: FieldRef<"Batch", 'Int'>
    readonly folderpath: FieldRef<"Batch", 'String'>
    readonly uniqueid: FieldRef<"Batch", 'Int'>
    readonly isactive: FieldRef<"Batch", 'Boolean'>
    readonly createdat: FieldRef<"Batch", 'DateTime'>
    readonly updatedat: FieldRef<"Batch", 'DateTime'>
    readonly priority: FieldRef<"Batch", 'Int'>
    readonly county: FieldRef<"Batch", 'String'>
    readonly engineToPriority: FieldRef<"Batch", 'Int'>
    readonly organizationId: FieldRef<"Batch", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Batch findUnique
   */
  export type BatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Filter, which Batch to fetch.
     */
    where: BatchWhereUniqueInput
  }

  /**
   * Batch findUniqueOrThrow
   */
  export type BatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Filter, which Batch to fetch.
     */
    where: BatchWhereUniqueInput
  }

  /**
   * Batch findFirst
   */
  export type BatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Filter, which Batch to fetch.
     */
    where?: BatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Batches to fetch.
     */
    orderBy?: BatchOrderByWithRelationInput | BatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Batches.
     */
    cursor?: BatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Batches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Batches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Batches.
     */
    distinct?: BatchScalarFieldEnum | BatchScalarFieldEnum[]
  }

  /**
   * Batch findFirstOrThrow
   */
  export type BatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Filter, which Batch to fetch.
     */
    where?: BatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Batches to fetch.
     */
    orderBy?: BatchOrderByWithRelationInput | BatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Batches.
     */
    cursor?: BatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Batches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Batches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Batches.
     */
    distinct?: BatchScalarFieldEnum | BatchScalarFieldEnum[]
  }

  /**
   * Batch findMany
   */
  export type BatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Filter, which Batches to fetch.
     */
    where?: BatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Batches to fetch.
     */
    orderBy?: BatchOrderByWithRelationInput | BatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Batches.
     */
    cursor?: BatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Batches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Batches.
     */
    skip?: number
    distinct?: BatchScalarFieldEnum | BatchScalarFieldEnum[]
  }

  /**
   * Batch create
   */
  export type BatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * The data needed to create a Batch.
     */
    data: XOR<BatchCreateInput, BatchUncheckedCreateInput>
  }

  /**
   * Batch createMany
   */
  export type BatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Batches.
     */
    data: BatchCreateManyInput | BatchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Batch createManyAndReturn
   */
  export type BatchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * The data used to create many Batches.
     */
    data: BatchCreateManyInput | BatchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Batch update
   */
  export type BatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * The data needed to update a Batch.
     */
    data: XOR<BatchUpdateInput, BatchUncheckedUpdateInput>
    /**
     * Choose, which Batch to update.
     */
    where: BatchWhereUniqueInput
  }

  /**
   * Batch updateMany
   */
  export type BatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Batches.
     */
    data: XOR<BatchUpdateManyMutationInput, BatchUncheckedUpdateManyInput>
    /**
     * Filter which Batches to update
     */
    where?: BatchWhereInput
    /**
     * Limit how many Batches to update.
     */
    limit?: number
  }

  /**
   * Batch updateManyAndReturn
   */
  export type BatchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * The data used to update Batches.
     */
    data: XOR<BatchUpdateManyMutationInput, BatchUncheckedUpdateManyInput>
    /**
     * Filter which Batches to update
     */
    where?: BatchWhereInput
    /**
     * Limit how many Batches to update.
     */
    limit?: number
  }

  /**
   * Batch upsert
   */
  export type BatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * The filter to search for the Batch to update in case it exists.
     */
    where: BatchWhereUniqueInput
    /**
     * In case the Batch found by the `where` argument doesn't exist, create a new Batch with this data.
     */
    create: XOR<BatchCreateInput, BatchUncheckedCreateInput>
    /**
     * In case the Batch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BatchUpdateInput, BatchUncheckedUpdateInput>
  }

  /**
   * Batch delete
   */
  export type BatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Filter which Batch to delete.
     */
    where: BatchWhereUniqueInput
  }

  /**
   * Batch deleteMany
   */
  export type BatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Batches to delete
     */
    where?: BatchWhereInput
    /**
     * Limit how many Batches to delete.
     */
    limit?: number
  }

  /**
   * Batch without action
   */
  export type BatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
  }


  /**
   * Model Imagecollections
   */

  export type AggregateImagecollections = {
    _count: ImagecollectionsCountAggregateOutputType | null
    _avg: ImagecollectionsAvgAggregateOutputType | null
    _sum: ImagecollectionsSumAggregateOutputType | null
    _min: ImagecollectionsMinAggregateOutputType | null
    _max: ImagecollectionsMaxAggregateOutputType | null
  }

  export type ImagecollectionsAvgAggregateOutputType = {
    id: number | null
    uniqueid: number | null
    indexing_assigned: number | null
    header_assigned: number | null
    propertyindex_assigned: number | null
    qc_assigned: number | null
    organizationId: number | null
  }

  export type ImagecollectionsSumAggregateOutputType = {
    id: number | null
    uniqueid: number | null
    indexing_assigned: number | null
    header_assigned: number | null
    propertyindex_assigned: number | null
    qc_assigned: number | null
    organizationId: number | null
  }

  export type ImagecollectionsMinAggregateOutputType = {
    id: number | null
    filename: string | null
    image: string | null
    status: string | null
    created_date: Date | null
    batchname: string | null
    stage: string | null
    uniqueid: number | null
    file_type: string | null
    ocr_full_text: string | null
    processed_date: Date | null
    isactive: boolean | null
    createdat: Date | null
    updatedat: Date | null
    header_locked: boolean | null
    party_locked: boolean | null
    legal_locked: boolean | null
    headerstatus: string | null
    legalstatus: string | null
    partystatus: string | null
    headerlocked_timing: Date | null
    legallocked_timing: Date | null
    partylocked_timing: Date | null
    indexing_assigned: number | null
    header_assigned: number | null
    propertyindex_assigned: number | null
    indexing_locked: boolean | null
    propertyindex_locked: boolean | null
    propertyindexstatus: string | null
    indexinglocked_timing: Date | null
    propertyindexlocked_timing: Date | null
    indexing_completed: Date | null
    propertyindex_completed: Date | null
    header_completed: Date | null
    party_completed: Date | null
    legal_completed: Date | null
    qc_locked: boolean | null
    qc_assigned: number | null
    qc_completed: Date | null
    indexlocked_timing: Date | null
    pilocked_timing: Date | null
    duplicatestatus: string | null
    pi_pending_queue: string | null
    legal_pending_queue: string | null
    qcstatus: string | null
    indexingcompleted_timing: Date | null
    propertyindexcompleted_timing: Date | null
    headercompleted_timing: Date | null
    partycompleted_timing: Date | null
    legalcompleted_timing: Date | null
    qccompleted_timing: Date | null
    organizationId: number | null
    assigned: string | null
    completed: string | null
    imagestatus: boolean | null
    userid: string | null
  }

  export type ImagecollectionsMaxAggregateOutputType = {
    id: number | null
    filename: string | null
    image: string | null
    status: string | null
    created_date: Date | null
    batchname: string | null
    stage: string | null
    uniqueid: number | null
    file_type: string | null
    ocr_full_text: string | null
    processed_date: Date | null
    isactive: boolean | null
    createdat: Date | null
    updatedat: Date | null
    header_locked: boolean | null
    party_locked: boolean | null
    legal_locked: boolean | null
    headerstatus: string | null
    legalstatus: string | null
    partystatus: string | null
    headerlocked_timing: Date | null
    legallocked_timing: Date | null
    partylocked_timing: Date | null
    indexing_assigned: number | null
    header_assigned: number | null
    propertyindex_assigned: number | null
    indexing_locked: boolean | null
    propertyindex_locked: boolean | null
    propertyindexstatus: string | null
    indexinglocked_timing: Date | null
    propertyindexlocked_timing: Date | null
    indexing_completed: Date | null
    propertyindex_completed: Date | null
    header_completed: Date | null
    party_completed: Date | null
    legal_completed: Date | null
    qc_locked: boolean | null
    qc_assigned: number | null
    qc_completed: Date | null
    indexlocked_timing: Date | null
    pilocked_timing: Date | null
    duplicatestatus: string | null
    pi_pending_queue: string | null
    legal_pending_queue: string | null
    qcstatus: string | null
    indexingcompleted_timing: Date | null
    propertyindexcompleted_timing: Date | null
    headercompleted_timing: Date | null
    partycompleted_timing: Date | null
    legalcompleted_timing: Date | null
    qccompleted_timing: Date | null
    organizationId: number | null
    assigned: string | null
    completed: string | null
    imagestatus: boolean | null
    userid: string | null
  }

  export type ImagecollectionsCountAggregateOutputType = {
    id: number
    filename: number
    image: number
    status: number
    created_date: number
    batchname: number
    stage: number
    uniqueid: number
    file_type: number
    ocr_full_text: number
    processed_date: number
    isactive: number
    createdat: number
    updatedat: number
    header_locked: number
    party_locked: number
    legal_locked: number
    headerstatus: number
    legalstatus: number
    partystatus: number
    headerlocked_timing: number
    legallocked_timing: number
    partylocked_timing: number
    indexing_assigned: number
    header_assigned: number
    propertyindex_assigned: number
    indexing_locked: number
    propertyindex_locked: number
    propertyindexstatus: number
    indexinglocked_timing: number
    propertyindexlocked_timing: number
    indexing_completed: number
    propertyindex_completed: number
    header_completed: number
    party_completed: number
    legal_completed: number
    qc_locked: number
    qc_assigned: number
    qc_completed: number
    indexlocked_timing: number
    pilocked_timing: number
    duplicatestatus: number
    pi_pending_queue: number
    legal_pending_queue: number
    qcstatus: number
    indexingcompleted_timing: number
    propertyindexcompleted_timing: number
    headercompleted_timing: number
    partycompleted_timing: number
    legalcompleted_timing: number
    qccompleted_timing: number
    organizationId: number
    assigned: number
    completed: number
    imagestatus: number
    userid: number
    _all: number
  }


  export type ImagecollectionsAvgAggregateInputType = {
    id?: true
    uniqueid?: true
    indexing_assigned?: true
    header_assigned?: true
    propertyindex_assigned?: true
    qc_assigned?: true
    organizationId?: true
  }

  export type ImagecollectionsSumAggregateInputType = {
    id?: true
    uniqueid?: true
    indexing_assigned?: true
    header_assigned?: true
    propertyindex_assigned?: true
    qc_assigned?: true
    organizationId?: true
  }

  export type ImagecollectionsMinAggregateInputType = {
    id?: true
    filename?: true
    image?: true
    status?: true
    created_date?: true
    batchname?: true
    stage?: true
    uniqueid?: true
    file_type?: true
    ocr_full_text?: true
    processed_date?: true
    isactive?: true
    createdat?: true
    updatedat?: true
    header_locked?: true
    party_locked?: true
    legal_locked?: true
    headerstatus?: true
    legalstatus?: true
    partystatus?: true
    headerlocked_timing?: true
    legallocked_timing?: true
    partylocked_timing?: true
    indexing_assigned?: true
    header_assigned?: true
    propertyindex_assigned?: true
    indexing_locked?: true
    propertyindex_locked?: true
    propertyindexstatus?: true
    indexinglocked_timing?: true
    propertyindexlocked_timing?: true
    indexing_completed?: true
    propertyindex_completed?: true
    header_completed?: true
    party_completed?: true
    legal_completed?: true
    qc_locked?: true
    qc_assigned?: true
    qc_completed?: true
    indexlocked_timing?: true
    pilocked_timing?: true
    duplicatestatus?: true
    pi_pending_queue?: true
    legal_pending_queue?: true
    qcstatus?: true
    indexingcompleted_timing?: true
    propertyindexcompleted_timing?: true
    headercompleted_timing?: true
    partycompleted_timing?: true
    legalcompleted_timing?: true
    qccompleted_timing?: true
    organizationId?: true
    assigned?: true
    completed?: true
    imagestatus?: true
    userid?: true
  }

  export type ImagecollectionsMaxAggregateInputType = {
    id?: true
    filename?: true
    image?: true
    status?: true
    created_date?: true
    batchname?: true
    stage?: true
    uniqueid?: true
    file_type?: true
    ocr_full_text?: true
    processed_date?: true
    isactive?: true
    createdat?: true
    updatedat?: true
    header_locked?: true
    party_locked?: true
    legal_locked?: true
    headerstatus?: true
    legalstatus?: true
    partystatus?: true
    headerlocked_timing?: true
    legallocked_timing?: true
    partylocked_timing?: true
    indexing_assigned?: true
    header_assigned?: true
    propertyindex_assigned?: true
    indexing_locked?: true
    propertyindex_locked?: true
    propertyindexstatus?: true
    indexinglocked_timing?: true
    propertyindexlocked_timing?: true
    indexing_completed?: true
    propertyindex_completed?: true
    header_completed?: true
    party_completed?: true
    legal_completed?: true
    qc_locked?: true
    qc_assigned?: true
    qc_completed?: true
    indexlocked_timing?: true
    pilocked_timing?: true
    duplicatestatus?: true
    pi_pending_queue?: true
    legal_pending_queue?: true
    qcstatus?: true
    indexingcompleted_timing?: true
    propertyindexcompleted_timing?: true
    headercompleted_timing?: true
    partycompleted_timing?: true
    legalcompleted_timing?: true
    qccompleted_timing?: true
    organizationId?: true
    assigned?: true
    completed?: true
    imagestatus?: true
    userid?: true
  }

  export type ImagecollectionsCountAggregateInputType = {
    id?: true
    filename?: true
    image?: true
    status?: true
    created_date?: true
    batchname?: true
    stage?: true
    uniqueid?: true
    file_type?: true
    ocr_full_text?: true
    processed_date?: true
    isactive?: true
    createdat?: true
    updatedat?: true
    header_locked?: true
    party_locked?: true
    legal_locked?: true
    headerstatus?: true
    legalstatus?: true
    partystatus?: true
    headerlocked_timing?: true
    legallocked_timing?: true
    partylocked_timing?: true
    indexing_assigned?: true
    header_assigned?: true
    propertyindex_assigned?: true
    indexing_locked?: true
    propertyindex_locked?: true
    propertyindexstatus?: true
    indexinglocked_timing?: true
    propertyindexlocked_timing?: true
    indexing_completed?: true
    propertyindex_completed?: true
    header_completed?: true
    party_completed?: true
    legal_completed?: true
    qc_locked?: true
    qc_assigned?: true
    qc_completed?: true
    indexlocked_timing?: true
    pilocked_timing?: true
    duplicatestatus?: true
    pi_pending_queue?: true
    legal_pending_queue?: true
    qcstatus?: true
    indexingcompleted_timing?: true
    propertyindexcompleted_timing?: true
    headercompleted_timing?: true
    partycompleted_timing?: true
    legalcompleted_timing?: true
    qccompleted_timing?: true
    organizationId?: true
    assigned?: true
    completed?: true
    imagestatus?: true
    userid?: true
    _all?: true
  }

  export type ImagecollectionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Imagecollections to aggregate.
     */
    where?: ImagecollectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Imagecollections to fetch.
     */
    orderBy?: ImagecollectionsOrderByWithRelationInput | ImagecollectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImagecollectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Imagecollections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Imagecollections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Imagecollections
    **/
    _count?: true | ImagecollectionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImagecollectionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImagecollectionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImagecollectionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImagecollectionsMaxAggregateInputType
  }

  export type GetImagecollectionsAggregateType<T extends ImagecollectionsAggregateArgs> = {
        [P in keyof T & keyof AggregateImagecollections]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImagecollections[P]>
      : GetScalarType<T[P], AggregateImagecollections[P]>
  }




  export type ImagecollectionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImagecollectionsWhereInput
    orderBy?: ImagecollectionsOrderByWithAggregationInput | ImagecollectionsOrderByWithAggregationInput[]
    by: ImagecollectionsScalarFieldEnum[] | ImagecollectionsScalarFieldEnum
    having?: ImagecollectionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImagecollectionsCountAggregateInputType | true
    _avg?: ImagecollectionsAvgAggregateInputType
    _sum?: ImagecollectionsSumAggregateInputType
    _min?: ImagecollectionsMinAggregateInputType
    _max?: ImagecollectionsMaxAggregateInputType
  }

  export type ImagecollectionsGroupByOutputType = {
    id: number
    filename: string
    image: string
    status: string
    created_date: Date
    batchname: string
    stage: string
    uniqueid: number
    file_type: string
    ocr_full_text: string
    processed_date: Date
    isactive: boolean
    createdat: Date
    updatedat: Date
    header_locked: boolean
    party_locked: boolean
    legal_locked: boolean
    headerstatus: string
    legalstatus: string
    partystatus: string
    headerlocked_timing: Date | null
    legallocked_timing: Date | null
    partylocked_timing: Date | null
    indexing_assigned: number | null
    header_assigned: number | null
    propertyindex_assigned: number | null
    indexing_locked: boolean | null
    propertyindex_locked: boolean | null
    propertyindexstatus: string
    indexinglocked_timing: Date | null
    propertyindexlocked_timing: Date | null
    indexing_completed: Date | null
    propertyindex_completed: Date | null
    header_completed: Date | null
    party_completed: Date | null
    legal_completed: Date | null
    qc_locked: boolean | null
    qc_assigned: number | null
    qc_completed: Date | null
    indexlocked_timing: Date | null
    pilocked_timing: Date | null
    duplicatestatus: string
    pi_pending_queue: string
    legal_pending_queue: string
    qcstatus: string
    indexingcompleted_timing: Date | null
    propertyindexcompleted_timing: Date | null
    headercompleted_timing: Date | null
    partycompleted_timing: Date | null
    legalcompleted_timing: Date | null
    qccompleted_timing: Date | null
    organizationId: number
    assigned: string | null
    completed: string | null
    imagestatus: boolean | null
    userid: string | null
    _count: ImagecollectionsCountAggregateOutputType | null
    _avg: ImagecollectionsAvgAggregateOutputType | null
    _sum: ImagecollectionsSumAggregateOutputType | null
    _min: ImagecollectionsMinAggregateOutputType | null
    _max: ImagecollectionsMaxAggregateOutputType | null
  }

  type GetImagecollectionsGroupByPayload<T extends ImagecollectionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImagecollectionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImagecollectionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImagecollectionsGroupByOutputType[P]>
            : GetScalarType<T[P], ImagecollectionsGroupByOutputType[P]>
        }
      >
    >


  export type ImagecollectionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    image?: boolean
    status?: boolean
    created_date?: boolean
    batchname?: boolean
    stage?: boolean
    uniqueid?: boolean
    file_type?: boolean
    ocr_full_text?: boolean
    processed_date?: boolean
    isactive?: boolean
    createdat?: boolean
    updatedat?: boolean
    header_locked?: boolean
    party_locked?: boolean
    legal_locked?: boolean
    headerstatus?: boolean
    legalstatus?: boolean
    partystatus?: boolean
    headerlocked_timing?: boolean
    legallocked_timing?: boolean
    partylocked_timing?: boolean
    indexing_assigned?: boolean
    header_assigned?: boolean
    propertyindex_assigned?: boolean
    indexing_locked?: boolean
    propertyindex_locked?: boolean
    propertyindexstatus?: boolean
    indexinglocked_timing?: boolean
    propertyindexlocked_timing?: boolean
    indexing_completed?: boolean
    propertyindex_completed?: boolean
    header_completed?: boolean
    party_completed?: boolean
    legal_completed?: boolean
    qc_locked?: boolean
    qc_assigned?: boolean
    qc_completed?: boolean
    indexlocked_timing?: boolean
    pilocked_timing?: boolean
    duplicatestatus?: boolean
    pi_pending_queue?: boolean
    legal_pending_queue?: boolean
    qcstatus?: boolean
    indexingcompleted_timing?: boolean
    propertyindexcompleted_timing?: boolean
    headercompleted_timing?: boolean
    partycompleted_timing?: boolean
    legalcompleted_timing?: boolean
    qccompleted_timing?: boolean
    organizationId?: boolean
    assigned?: boolean
    completed?: boolean
    imagestatus?: boolean
    userid?: boolean
  }, ExtArgs["result"]["imagecollections"]>

  export type ImagecollectionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    image?: boolean
    status?: boolean
    created_date?: boolean
    batchname?: boolean
    stage?: boolean
    uniqueid?: boolean
    file_type?: boolean
    ocr_full_text?: boolean
    processed_date?: boolean
    isactive?: boolean
    createdat?: boolean
    updatedat?: boolean
    header_locked?: boolean
    party_locked?: boolean
    legal_locked?: boolean
    headerstatus?: boolean
    legalstatus?: boolean
    partystatus?: boolean
    headerlocked_timing?: boolean
    legallocked_timing?: boolean
    partylocked_timing?: boolean
    indexing_assigned?: boolean
    header_assigned?: boolean
    propertyindex_assigned?: boolean
    indexing_locked?: boolean
    propertyindex_locked?: boolean
    propertyindexstatus?: boolean
    indexinglocked_timing?: boolean
    propertyindexlocked_timing?: boolean
    indexing_completed?: boolean
    propertyindex_completed?: boolean
    header_completed?: boolean
    party_completed?: boolean
    legal_completed?: boolean
    qc_locked?: boolean
    qc_assigned?: boolean
    qc_completed?: boolean
    indexlocked_timing?: boolean
    pilocked_timing?: boolean
    duplicatestatus?: boolean
    pi_pending_queue?: boolean
    legal_pending_queue?: boolean
    qcstatus?: boolean
    indexingcompleted_timing?: boolean
    propertyindexcompleted_timing?: boolean
    headercompleted_timing?: boolean
    partycompleted_timing?: boolean
    legalcompleted_timing?: boolean
    qccompleted_timing?: boolean
    organizationId?: boolean
    assigned?: boolean
    completed?: boolean
    imagestatus?: boolean
    userid?: boolean
  }, ExtArgs["result"]["imagecollections"]>

  export type ImagecollectionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    image?: boolean
    status?: boolean
    created_date?: boolean
    batchname?: boolean
    stage?: boolean
    uniqueid?: boolean
    file_type?: boolean
    ocr_full_text?: boolean
    processed_date?: boolean
    isactive?: boolean
    createdat?: boolean
    updatedat?: boolean
    header_locked?: boolean
    party_locked?: boolean
    legal_locked?: boolean
    headerstatus?: boolean
    legalstatus?: boolean
    partystatus?: boolean
    headerlocked_timing?: boolean
    legallocked_timing?: boolean
    partylocked_timing?: boolean
    indexing_assigned?: boolean
    header_assigned?: boolean
    propertyindex_assigned?: boolean
    indexing_locked?: boolean
    propertyindex_locked?: boolean
    propertyindexstatus?: boolean
    indexinglocked_timing?: boolean
    propertyindexlocked_timing?: boolean
    indexing_completed?: boolean
    propertyindex_completed?: boolean
    header_completed?: boolean
    party_completed?: boolean
    legal_completed?: boolean
    qc_locked?: boolean
    qc_assigned?: boolean
    qc_completed?: boolean
    indexlocked_timing?: boolean
    pilocked_timing?: boolean
    duplicatestatus?: boolean
    pi_pending_queue?: boolean
    legal_pending_queue?: boolean
    qcstatus?: boolean
    indexingcompleted_timing?: boolean
    propertyindexcompleted_timing?: boolean
    headercompleted_timing?: boolean
    partycompleted_timing?: boolean
    legalcompleted_timing?: boolean
    qccompleted_timing?: boolean
    organizationId?: boolean
    assigned?: boolean
    completed?: boolean
    imagestatus?: boolean
    userid?: boolean
  }, ExtArgs["result"]["imagecollections"]>

  export type ImagecollectionsSelectScalar = {
    id?: boolean
    filename?: boolean
    image?: boolean
    status?: boolean
    created_date?: boolean
    batchname?: boolean
    stage?: boolean
    uniqueid?: boolean
    file_type?: boolean
    ocr_full_text?: boolean
    processed_date?: boolean
    isactive?: boolean
    createdat?: boolean
    updatedat?: boolean
    header_locked?: boolean
    party_locked?: boolean
    legal_locked?: boolean
    headerstatus?: boolean
    legalstatus?: boolean
    partystatus?: boolean
    headerlocked_timing?: boolean
    legallocked_timing?: boolean
    partylocked_timing?: boolean
    indexing_assigned?: boolean
    header_assigned?: boolean
    propertyindex_assigned?: boolean
    indexing_locked?: boolean
    propertyindex_locked?: boolean
    propertyindexstatus?: boolean
    indexinglocked_timing?: boolean
    propertyindexlocked_timing?: boolean
    indexing_completed?: boolean
    propertyindex_completed?: boolean
    header_completed?: boolean
    party_completed?: boolean
    legal_completed?: boolean
    qc_locked?: boolean
    qc_assigned?: boolean
    qc_completed?: boolean
    indexlocked_timing?: boolean
    pilocked_timing?: boolean
    duplicatestatus?: boolean
    pi_pending_queue?: boolean
    legal_pending_queue?: boolean
    qcstatus?: boolean
    indexingcompleted_timing?: boolean
    propertyindexcompleted_timing?: boolean
    headercompleted_timing?: boolean
    partycompleted_timing?: boolean
    legalcompleted_timing?: boolean
    qccompleted_timing?: boolean
    organizationId?: boolean
    assigned?: boolean
    completed?: boolean
    imagestatus?: boolean
    userid?: boolean
  }

  export type ImagecollectionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "filename" | "image" | "status" | "created_date" | "batchname" | "stage" | "uniqueid" | "file_type" | "ocr_full_text" | "processed_date" | "isactive" | "createdat" | "updatedat" | "header_locked" | "party_locked" | "legal_locked" | "headerstatus" | "legalstatus" | "partystatus" | "headerlocked_timing" | "legallocked_timing" | "partylocked_timing" | "indexing_assigned" | "header_assigned" | "propertyindex_assigned" | "indexing_locked" | "propertyindex_locked" | "propertyindexstatus" | "indexinglocked_timing" | "propertyindexlocked_timing" | "indexing_completed" | "propertyindex_completed" | "header_completed" | "party_completed" | "legal_completed" | "qc_locked" | "qc_assigned" | "qc_completed" | "indexlocked_timing" | "pilocked_timing" | "duplicatestatus" | "pi_pending_queue" | "legal_pending_queue" | "qcstatus" | "indexingcompleted_timing" | "propertyindexcompleted_timing" | "headercompleted_timing" | "partycompleted_timing" | "legalcompleted_timing" | "qccompleted_timing" | "organizationId" | "assigned" | "completed" | "imagestatus" | "userid", ExtArgs["result"]["imagecollections"]>

  export type $ImagecollectionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Imagecollections"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      filename: string
      image: string
      status: string
      created_date: Date
      batchname: string
      stage: string
      uniqueid: number
      file_type: string
      ocr_full_text: string
      processed_date: Date
      isactive: boolean
      createdat: Date
      updatedat: Date
      header_locked: boolean
      party_locked: boolean
      legal_locked: boolean
      headerstatus: string
      legalstatus: string
      partystatus: string
      headerlocked_timing: Date | null
      legallocked_timing: Date | null
      partylocked_timing: Date | null
      indexing_assigned: number | null
      header_assigned: number | null
      propertyindex_assigned: number | null
      indexing_locked: boolean | null
      propertyindex_locked: boolean | null
      propertyindexstatus: string
      indexinglocked_timing: Date | null
      propertyindexlocked_timing: Date | null
      indexing_completed: Date | null
      propertyindex_completed: Date | null
      header_completed: Date | null
      party_completed: Date | null
      legal_completed: Date | null
      qc_locked: boolean | null
      qc_assigned: number | null
      qc_completed: Date | null
      indexlocked_timing: Date | null
      pilocked_timing: Date | null
      duplicatestatus: string
      pi_pending_queue: string
      legal_pending_queue: string
      qcstatus: string
      indexingcompleted_timing: Date | null
      propertyindexcompleted_timing: Date | null
      headercompleted_timing: Date | null
      partycompleted_timing: Date | null
      legalcompleted_timing: Date | null
      qccompleted_timing: Date | null
      organizationId: number
      assigned: string | null
      completed: string | null
      imagestatus: boolean | null
      userid: string | null
    }, ExtArgs["result"]["imagecollections"]>
    composites: {}
  }

  type ImagecollectionsGetPayload<S extends boolean | null | undefined | ImagecollectionsDefaultArgs> = $Result.GetResult<Prisma.$ImagecollectionsPayload, S>

  type ImagecollectionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImagecollectionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImagecollectionsCountAggregateInputType | true
    }

  export interface ImagecollectionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Imagecollections'], meta: { name: 'Imagecollections' } }
    /**
     * Find zero or one Imagecollections that matches the filter.
     * @param {ImagecollectionsFindUniqueArgs} args - Arguments to find a Imagecollections
     * @example
     * // Get one Imagecollections
     * const imagecollections = await prisma.imagecollections.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImagecollectionsFindUniqueArgs>(args: SelectSubset<T, ImagecollectionsFindUniqueArgs<ExtArgs>>): Prisma__ImagecollectionsClient<$Result.GetResult<Prisma.$ImagecollectionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Imagecollections that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImagecollectionsFindUniqueOrThrowArgs} args - Arguments to find a Imagecollections
     * @example
     * // Get one Imagecollections
     * const imagecollections = await prisma.imagecollections.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImagecollectionsFindUniqueOrThrowArgs>(args: SelectSubset<T, ImagecollectionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImagecollectionsClient<$Result.GetResult<Prisma.$ImagecollectionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Imagecollections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagecollectionsFindFirstArgs} args - Arguments to find a Imagecollections
     * @example
     * // Get one Imagecollections
     * const imagecollections = await prisma.imagecollections.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImagecollectionsFindFirstArgs>(args?: SelectSubset<T, ImagecollectionsFindFirstArgs<ExtArgs>>): Prisma__ImagecollectionsClient<$Result.GetResult<Prisma.$ImagecollectionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Imagecollections that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagecollectionsFindFirstOrThrowArgs} args - Arguments to find a Imagecollections
     * @example
     * // Get one Imagecollections
     * const imagecollections = await prisma.imagecollections.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImagecollectionsFindFirstOrThrowArgs>(args?: SelectSubset<T, ImagecollectionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImagecollectionsClient<$Result.GetResult<Prisma.$ImagecollectionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Imagecollections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagecollectionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Imagecollections
     * const imagecollections = await prisma.imagecollections.findMany()
     * 
     * // Get first 10 Imagecollections
     * const imagecollections = await prisma.imagecollections.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imagecollectionsWithIdOnly = await prisma.imagecollections.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImagecollectionsFindManyArgs>(args?: SelectSubset<T, ImagecollectionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagecollectionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Imagecollections.
     * @param {ImagecollectionsCreateArgs} args - Arguments to create a Imagecollections.
     * @example
     * // Create one Imagecollections
     * const Imagecollections = await prisma.imagecollections.create({
     *   data: {
     *     // ... data to create a Imagecollections
     *   }
     * })
     * 
     */
    create<T extends ImagecollectionsCreateArgs>(args: SelectSubset<T, ImagecollectionsCreateArgs<ExtArgs>>): Prisma__ImagecollectionsClient<$Result.GetResult<Prisma.$ImagecollectionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Imagecollections.
     * @param {ImagecollectionsCreateManyArgs} args - Arguments to create many Imagecollections.
     * @example
     * // Create many Imagecollections
     * const imagecollections = await prisma.imagecollections.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImagecollectionsCreateManyArgs>(args?: SelectSubset<T, ImagecollectionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Imagecollections and returns the data saved in the database.
     * @param {ImagecollectionsCreateManyAndReturnArgs} args - Arguments to create many Imagecollections.
     * @example
     * // Create many Imagecollections
     * const imagecollections = await prisma.imagecollections.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Imagecollections and only return the `id`
     * const imagecollectionsWithIdOnly = await prisma.imagecollections.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImagecollectionsCreateManyAndReturnArgs>(args?: SelectSubset<T, ImagecollectionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagecollectionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Imagecollections.
     * @param {ImagecollectionsDeleteArgs} args - Arguments to delete one Imagecollections.
     * @example
     * // Delete one Imagecollections
     * const Imagecollections = await prisma.imagecollections.delete({
     *   where: {
     *     // ... filter to delete one Imagecollections
     *   }
     * })
     * 
     */
    delete<T extends ImagecollectionsDeleteArgs>(args: SelectSubset<T, ImagecollectionsDeleteArgs<ExtArgs>>): Prisma__ImagecollectionsClient<$Result.GetResult<Prisma.$ImagecollectionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Imagecollections.
     * @param {ImagecollectionsUpdateArgs} args - Arguments to update one Imagecollections.
     * @example
     * // Update one Imagecollections
     * const imagecollections = await prisma.imagecollections.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImagecollectionsUpdateArgs>(args: SelectSubset<T, ImagecollectionsUpdateArgs<ExtArgs>>): Prisma__ImagecollectionsClient<$Result.GetResult<Prisma.$ImagecollectionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Imagecollections.
     * @param {ImagecollectionsDeleteManyArgs} args - Arguments to filter Imagecollections to delete.
     * @example
     * // Delete a few Imagecollections
     * const { count } = await prisma.imagecollections.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImagecollectionsDeleteManyArgs>(args?: SelectSubset<T, ImagecollectionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Imagecollections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagecollectionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Imagecollections
     * const imagecollections = await prisma.imagecollections.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImagecollectionsUpdateManyArgs>(args: SelectSubset<T, ImagecollectionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Imagecollections and returns the data updated in the database.
     * @param {ImagecollectionsUpdateManyAndReturnArgs} args - Arguments to update many Imagecollections.
     * @example
     * // Update many Imagecollections
     * const imagecollections = await prisma.imagecollections.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Imagecollections and only return the `id`
     * const imagecollectionsWithIdOnly = await prisma.imagecollections.updateManyAndReturn({
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
    updateManyAndReturn<T extends ImagecollectionsUpdateManyAndReturnArgs>(args: SelectSubset<T, ImagecollectionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagecollectionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Imagecollections.
     * @param {ImagecollectionsUpsertArgs} args - Arguments to update or create a Imagecollections.
     * @example
     * // Update or create a Imagecollections
     * const imagecollections = await prisma.imagecollections.upsert({
     *   create: {
     *     // ... data to create a Imagecollections
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Imagecollections we want to update
     *   }
     * })
     */
    upsert<T extends ImagecollectionsUpsertArgs>(args: SelectSubset<T, ImagecollectionsUpsertArgs<ExtArgs>>): Prisma__ImagecollectionsClient<$Result.GetResult<Prisma.$ImagecollectionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Imagecollections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagecollectionsCountArgs} args - Arguments to filter Imagecollections to count.
     * @example
     * // Count the number of Imagecollections
     * const count = await prisma.imagecollections.count({
     *   where: {
     *     // ... the filter for the Imagecollections we want to count
     *   }
     * })
    **/
    count<T extends ImagecollectionsCountArgs>(
      args?: Subset<T, ImagecollectionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImagecollectionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Imagecollections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagecollectionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImagecollectionsAggregateArgs>(args: Subset<T, ImagecollectionsAggregateArgs>): Prisma.PrismaPromise<GetImagecollectionsAggregateType<T>>

    /**
     * Group by Imagecollections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagecollectionsGroupByArgs} args - Group by arguments.
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
      T extends ImagecollectionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImagecollectionsGroupByArgs['orderBy'] }
        : { orderBy?: ImagecollectionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ImagecollectionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImagecollectionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Imagecollections model
   */
  readonly fields: ImagecollectionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Imagecollections.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImagecollectionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Imagecollections model
   */
  interface ImagecollectionsFieldRefs {
    readonly id: FieldRef<"Imagecollections", 'Int'>
    readonly filename: FieldRef<"Imagecollections", 'String'>
    readonly image: FieldRef<"Imagecollections", 'String'>
    readonly status: FieldRef<"Imagecollections", 'String'>
    readonly created_date: FieldRef<"Imagecollections", 'DateTime'>
    readonly batchname: FieldRef<"Imagecollections", 'String'>
    readonly stage: FieldRef<"Imagecollections", 'String'>
    readonly uniqueid: FieldRef<"Imagecollections", 'Int'>
    readonly file_type: FieldRef<"Imagecollections", 'String'>
    readonly ocr_full_text: FieldRef<"Imagecollections", 'String'>
    readonly processed_date: FieldRef<"Imagecollections", 'DateTime'>
    readonly isactive: FieldRef<"Imagecollections", 'Boolean'>
    readonly createdat: FieldRef<"Imagecollections", 'DateTime'>
    readonly updatedat: FieldRef<"Imagecollections", 'DateTime'>
    readonly header_locked: FieldRef<"Imagecollections", 'Boolean'>
    readonly party_locked: FieldRef<"Imagecollections", 'Boolean'>
    readonly legal_locked: FieldRef<"Imagecollections", 'Boolean'>
    readonly headerstatus: FieldRef<"Imagecollections", 'String'>
    readonly legalstatus: FieldRef<"Imagecollections", 'String'>
    readonly partystatus: FieldRef<"Imagecollections", 'String'>
    readonly headerlocked_timing: FieldRef<"Imagecollections", 'DateTime'>
    readonly legallocked_timing: FieldRef<"Imagecollections", 'DateTime'>
    readonly partylocked_timing: FieldRef<"Imagecollections", 'DateTime'>
    readonly indexing_assigned: FieldRef<"Imagecollections", 'Int'>
    readonly header_assigned: FieldRef<"Imagecollections", 'Int'>
    readonly propertyindex_assigned: FieldRef<"Imagecollections", 'Int'>
    readonly indexing_locked: FieldRef<"Imagecollections", 'Boolean'>
    readonly propertyindex_locked: FieldRef<"Imagecollections", 'Boolean'>
    readonly propertyindexstatus: FieldRef<"Imagecollections", 'String'>
    readonly indexinglocked_timing: FieldRef<"Imagecollections", 'DateTime'>
    readonly propertyindexlocked_timing: FieldRef<"Imagecollections", 'DateTime'>
    readonly indexing_completed: FieldRef<"Imagecollections", 'DateTime'>
    readonly propertyindex_completed: FieldRef<"Imagecollections", 'DateTime'>
    readonly header_completed: FieldRef<"Imagecollections", 'DateTime'>
    readonly party_completed: FieldRef<"Imagecollections", 'DateTime'>
    readonly legal_completed: FieldRef<"Imagecollections", 'DateTime'>
    readonly qc_locked: FieldRef<"Imagecollections", 'Boolean'>
    readonly qc_assigned: FieldRef<"Imagecollections", 'Int'>
    readonly qc_completed: FieldRef<"Imagecollections", 'DateTime'>
    readonly indexlocked_timing: FieldRef<"Imagecollections", 'DateTime'>
    readonly pilocked_timing: FieldRef<"Imagecollections", 'DateTime'>
    readonly duplicatestatus: FieldRef<"Imagecollections", 'String'>
    readonly pi_pending_queue: FieldRef<"Imagecollections", 'String'>
    readonly legal_pending_queue: FieldRef<"Imagecollections", 'String'>
    readonly qcstatus: FieldRef<"Imagecollections", 'String'>
    readonly indexingcompleted_timing: FieldRef<"Imagecollections", 'DateTime'>
    readonly propertyindexcompleted_timing: FieldRef<"Imagecollections", 'DateTime'>
    readonly headercompleted_timing: FieldRef<"Imagecollections", 'DateTime'>
    readonly partycompleted_timing: FieldRef<"Imagecollections", 'DateTime'>
    readonly legalcompleted_timing: FieldRef<"Imagecollections", 'DateTime'>
    readonly qccompleted_timing: FieldRef<"Imagecollections", 'DateTime'>
    readonly organizationId: FieldRef<"Imagecollections", 'Int'>
    readonly assigned: FieldRef<"Imagecollections", 'String'>
    readonly completed: FieldRef<"Imagecollections", 'String'>
    readonly imagestatus: FieldRef<"Imagecollections", 'Boolean'>
    readonly userid: FieldRef<"Imagecollections", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Imagecollections findUnique
   */
  export type ImagecollectionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagecollections
     */
    select?: ImagecollectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imagecollections
     */
    omit?: ImagecollectionsOmit<ExtArgs> | null
    /**
     * Filter, which Imagecollections to fetch.
     */
    where: ImagecollectionsWhereUniqueInput
  }

  /**
   * Imagecollections findUniqueOrThrow
   */
  export type ImagecollectionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagecollections
     */
    select?: ImagecollectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imagecollections
     */
    omit?: ImagecollectionsOmit<ExtArgs> | null
    /**
     * Filter, which Imagecollections to fetch.
     */
    where: ImagecollectionsWhereUniqueInput
  }

  /**
   * Imagecollections findFirst
   */
  export type ImagecollectionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagecollections
     */
    select?: ImagecollectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imagecollections
     */
    omit?: ImagecollectionsOmit<ExtArgs> | null
    /**
     * Filter, which Imagecollections to fetch.
     */
    where?: ImagecollectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Imagecollections to fetch.
     */
    orderBy?: ImagecollectionsOrderByWithRelationInput | ImagecollectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Imagecollections.
     */
    cursor?: ImagecollectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Imagecollections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Imagecollections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Imagecollections.
     */
    distinct?: ImagecollectionsScalarFieldEnum | ImagecollectionsScalarFieldEnum[]
  }

  /**
   * Imagecollections findFirstOrThrow
   */
  export type ImagecollectionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagecollections
     */
    select?: ImagecollectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imagecollections
     */
    omit?: ImagecollectionsOmit<ExtArgs> | null
    /**
     * Filter, which Imagecollections to fetch.
     */
    where?: ImagecollectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Imagecollections to fetch.
     */
    orderBy?: ImagecollectionsOrderByWithRelationInput | ImagecollectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Imagecollections.
     */
    cursor?: ImagecollectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Imagecollections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Imagecollections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Imagecollections.
     */
    distinct?: ImagecollectionsScalarFieldEnum | ImagecollectionsScalarFieldEnum[]
  }

  /**
   * Imagecollections findMany
   */
  export type ImagecollectionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagecollections
     */
    select?: ImagecollectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imagecollections
     */
    omit?: ImagecollectionsOmit<ExtArgs> | null
    /**
     * Filter, which Imagecollections to fetch.
     */
    where?: ImagecollectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Imagecollections to fetch.
     */
    orderBy?: ImagecollectionsOrderByWithRelationInput | ImagecollectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Imagecollections.
     */
    cursor?: ImagecollectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Imagecollections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Imagecollections.
     */
    skip?: number
    distinct?: ImagecollectionsScalarFieldEnum | ImagecollectionsScalarFieldEnum[]
  }

  /**
   * Imagecollections create
   */
  export type ImagecollectionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagecollections
     */
    select?: ImagecollectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imagecollections
     */
    omit?: ImagecollectionsOmit<ExtArgs> | null
    /**
     * The data needed to create a Imagecollections.
     */
    data: XOR<ImagecollectionsCreateInput, ImagecollectionsUncheckedCreateInput>
  }

  /**
   * Imagecollections createMany
   */
  export type ImagecollectionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Imagecollections.
     */
    data: ImagecollectionsCreateManyInput | ImagecollectionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Imagecollections createManyAndReturn
   */
  export type ImagecollectionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagecollections
     */
    select?: ImagecollectionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Imagecollections
     */
    omit?: ImagecollectionsOmit<ExtArgs> | null
    /**
     * The data used to create many Imagecollections.
     */
    data: ImagecollectionsCreateManyInput | ImagecollectionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Imagecollections update
   */
  export type ImagecollectionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagecollections
     */
    select?: ImagecollectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imagecollections
     */
    omit?: ImagecollectionsOmit<ExtArgs> | null
    /**
     * The data needed to update a Imagecollections.
     */
    data: XOR<ImagecollectionsUpdateInput, ImagecollectionsUncheckedUpdateInput>
    /**
     * Choose, which Imagecollections to update.
     */
    where: ImagecollectionsWhereUniqueInput
  }

  /**
   * Imagecollections updateMany
   */
  export type ImagecollectionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Imagecollections.
     */
    data: XOR<ImagecollectionsUpdateManyMutationInput, ImagecollectionsUncheckedUpdateManyInput>
    /**
     * Filter which Imagecollections to update
     */
    where?: ImagecollectionsWhereInput
    /**
     * Limit how many Imagecollections to update.
     */
    limit?: number
  }

  /**
   * Imagecollections updateManyAndReturn
   */
  export type ImagecollectionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagecollections
     */
    select?: ImagecollectionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Imagecollections
     */
    omit?: ImagecollectionsOmit<ExtArgs> | null
    /**
     * The data used to update Imagecollections.
     */
    data: XOR<ImagecollectionsUpdateManyMutationInput, ImagecollectionsUncheckedUpdateManyInput>
    /**
     * Filter which Imagecollections to update
     */
    where?: ImagecollectionsWhereInput
    /**
     * Limit how many Imagecollections to update.
     */
    limit?: number
  }

  /**
   * Imagecollections upsert
   */
  export type ImagecollectionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagecollections
     */
    select?: ImagecollectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imagecollections
     */
    omit?: ImagecollectionsOmit<ExtArgs> | null
    /**
     * The filter to search for the Imagecollections to update in case it exists.
     */
    where: ImagecollectionsWhereUniqueInput
    /**
     * In case the Imagecollections found by the `where` argument doesn't exist, create a new Imagecollections with this data.
     */
    create: XOR<ImagecollectionsCreateInput, ImagecollectionsUncheckedCreateInput>
    /**
     * In case the Imagecollections was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImagecollectionsUpdateInput, ImagecollectionsUncheckedUpdateInput>
  }

  /**
   * Imagecollections delete
   */
  export type ImagecollectionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagecollections
     */
    select?: ImagecollectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imagecollections
     */
    omit?: ImagecollectionsOmit<ExtArgs> | null
    /**
     * Filter which Imagecollections to delete.
     */
    where: ImagecollectionsWhereUniqueInput
  }

  /**
   * Imagecollections deleteMany
   */
  export type ImagecollectionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Imagecollections to delete
     */
    where?: ImagecollectionsWhereInput
    /**
     * Limit how many Imagecollections to delete.
     */
    limit?: number
  }

  /**
   * Imagecollections without action
   */
  export type ImagecollectionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagecollections
     */
    select?: ImagecollectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imagecollections
     */
    omit?: ImagecollectionsOmit<ExtArgs> | null
  }


  /**
   * Model Template
   */

  export type AggregateTemplate = {
    _count: TemplateCountAggregateOutputType | null
    _avg: TemplateAvgAggregateOutputType | null
    _sum: TemplateSumAggregateOutputType | null
    _min: TemplateMinAggregateOutputType | null
    _max: TemplateMaxAggregateOutputType | null
  }

  export type TemplateAvgAggregateOutputType = {
    id: number | null
    organizationId: number | null
    orderno: number | null
  }

  export type TemplateSumAggregateOutputType = {
    id: number | null
    organizationId: number | null
    orderno: number | null
  }

  export type TemplateMinAggregateOutputType = {
    id: number | null
    name: string | null
    isActive: boolean | null
    isDelete: boolean | null
    organizationId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    orderno: number | null
    client: boolean | null
  }

  export type TemplateMaxAggregateOutputType = {
    id: number | null
    name: string | null
    isActive: boolean | null
    isDelete: boolean | null
    organizationId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    orderno: number | null
    client: boolean | null
  }

  export type TemplateCountAggregateOutputType = {
    id: number
    name: number
    isActive: number
    isDelete: number
    organizationId: number
    createdAt: number
    updatedAt: number
    orderno: number
    client: number
    _all: number
  }


  export type TemplateAvgAggregateInputType = {
    id?: true
    organizationId?: true
    orderno?: true
  }

  export type TemplateSumAggregateInputType = {
    id?: true
    organizationId?: true
    orderno?: true
  }

  export type TemplateMinAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    isDelete?: true
    organizationId?: true
    createdAt?: true
    updatedAt?: true
    orderno?: true
    client?: true
  }

  export type TemplateMaxAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    isDelete?: true
    organizationId?: true
    createdAt?: true
    updatedAt?: true
    orderno?: true
    client?: true
  }

  export type TemplateCountAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    isDelete?: true
    organizationId?: true
    createdAt?: true
    updatedAt?: true
    orderno?: true
    client?: true
    _all?: true
  }

  export type TemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Template to aggregate.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Templates
    **/
    _count?: true | TemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TemplateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TemplateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TemplateMaxAggregateInputType
  }

  export type GetTemplateAggregateType<T extends TemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemplate[P]>
      : GetScalarType<T[P], AggregateTemplate[P]>
  }




  export type TemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateWhereInput
    orderBy?: TemplateOrderByWithAggregationInput | TemplateOrderByWithAggregationInput[]
    by: TemplateScalarFieldEnum[] | TemplateScalarFieldEnum
    having?: TemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TemplateCountAggregateInputType | true
    _avg?: TemplateAvgAggregateInputType
    _sum?: TemplateSumAggregateInputType
    _min?: TemplateMinAggregateInputType
    _max?: TemplateMaxAggregateInputType
  }

  export type TemplateGroupByOutputType = {
    id: number
    name: string
    isActive: boolean
    isDelete: boolean
    organizationId: number | null
    createdAt: Date
    updatedAt: Date
    orderno: number | null
    client: boolean
    _count: TemplateCountAggregateOutputType | null
    _avg: TemplateAvgAggregateOutputType | null
    _sum: TemplateSumAggregateOutputType | null
    _min: TemplateMinAggregateOutputType | null
    _max: TemplateMaxAggregateOutputType | null
  }

  type GetTemplateGroupByPayload<T extends TemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TemplateGroupByOutputType[P]>
            : GetScalarType<T[P], TemplateGroupByOutputType[P]>
        }
      >
    >


  export type TemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isActive?: boolean
    isDelete?: boolean
    organizationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orderno?: boolean
    client?: boolean
    templateFields?: boolean | Template$templateFieldsArgs<ExtArgs>
    _count?: boolean | TemplateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isActive?: boolean
    isDelete?: boolean
    organizationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orderno?: boolean
    client?: boolean
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isActive?: boolean
    isDelete?: boolean
    organizationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orderno?: boolean
    client?: boolean
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectScalar = {
    id?: boolean
    name?: boolean
    isActive?: boolean
    isDelete?: boolean
    organizationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orderno?: boolean
    client?: boolean
  }

  export type TemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "isActive" | "isDelete" | "organizationId" | "createdAt" | "updatedAt" | "orderno" | "client", ExtArgs["result"]["template"]>
  export type TemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    templateFields?: boolean | Template$templateFieldsArgs<ExtArgs>
    _count?: boolean | TemplateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TemplateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Template"
    objects: {
      templateFields: Prisma.$TemplateFieldPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      isActive: boolean
      isDelete: boolean
      organizationId: number | null
      createdAt: Date
      updatedAt: Date
      orderno: number | null
      client: boolean
    }, ExtArgs["result"]["template"]>
    composites: {}
  }

  type TemplateGetPayload<S extends boolean | null | undefined | TemplateDefaultArgs> = $Result.GetResult<Prisma.$TemplatePayload, S>

  type TemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TemplateCountAggregateInputType | true
    }

  export interface TemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Template'], meta: { name: 'Template' } }
    /**
     * Find zero or one Template that matches the filter.
     * @param {TemplateFindUniqueArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TemplateFindUniqueArgs>(args: SelectSubset<T, TemplateFindUniqueArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Template that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TemplateFindUniqueOrThrowArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, TemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Template that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindFirstArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TemplateFindFirstArgs>(args?: SelectSubset<T, TemplateFindFirstArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Template that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindFirstOrThrowArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, TemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Templates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Templates
     * const templates = await prisma.template.findMany()
     * 
     * // Get first 10 Templates
     * const templates = await prisma.template.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const templateWithIdOnly = await prisma.template.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TemplateFindManyArgs>(args?: SelectSubset<T, TemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Template.
     * @param {TemplateCreateArgs} args - Arguments to create a Template.
     * @example
     * // Create one Template
     * const Template = await prisma.template.create({
     *   data: {
     *     // ... data to create a Template
     *   }
     * })
     * 
     */
    create<T extends TemplateCreateArgs>(args: SelectSubset<T, TemplateCreateArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Templates.
     * @param {TemplateCreateManyArgs} args - Arguments to create many Templates.
     * @example
     * // Create many Templates
     * const template = await prisma.template.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TemplateCreateManyArgs>(args?: SelectSubset<T, TemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Templates and returns the data saved in the database.
     * @param {TemplateCreateManyAndReturnArgs} args - Arguments to create many Templates.
     * @example
     * // Create many Templates
     * const template = await prisma.template.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Templates and only return the `id`
     * const templateWithIdOnly = await prisma.template.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, TemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Template.
     * @param {TemplateDeleteArgs} args - Arguments to delete one Template.
     * @example
     * // Delete one Template
     * const Template = await prisma.template.delete({
     *   where: {
     *     // ... filter to delete one Template
     *   }
     * })
     * 
     */
    delete<T extends TemplateDeleteArgs>(args: SelectSubset<T, TemplateDeleteArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Template.
     * @param {TemplateUpdateArgs} args - Arguments to update one Template.
     * @example
     * // Update one Template
     * const template = await prisma.template.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TemplateUpdateArgs>(args: SelectSubset<T, TemplateUpdateArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Templates.
     * @param {TemplateDeleteManyArgs} args - Arguments to filter Templates to delete.
     * @example
     * // Delete a few Templates
     * const { count } = await prisma.template.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TemplateDeleteManyArgs>(args?: SelectSubset<T, TemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Templates
     * const template = await prisma.template.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TemplateUpdateManyArgs>(args: SelectSubset<T, TemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Templates and returns the data updated in the database.
     * @param {TemplateUpdateManyAndReturnArgs} args - Arguments to update many Templates.
     * @example
     * // Update many Templates
     * const template = await prisma.template.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Templates and only return the `id`
     * const templateWithIdOnly = await prisma.template.updateManyAndReturn({
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
    updateManyAndReturn<T extends TemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, TemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Template.
     * @param {TemplateUpsertArgs} args - Arguments to update or create a Template.
     * @example
     * // Update or create a Template
     * const template = await prisma.template.upsert({
     *   create: {
     *     // ... data to create a Template
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Template we want to update
     *   }
     * })
     */
    upsert<T extends TemplateUpsertArgs>(args: SelectSubset<T, TemplateUpsertArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateCountArgs} args - Arguments to filter Templates to count.
     * @example
     * // Count the number of Templates
     * const count = await prisma.template.count({
     *   where: {
     *     // ... the filter for the Templates we want to count
     *   }
     * })
    **/
    count<T extends TemplateCountArgs>(
      args?: Subset<T, TemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TemplateAggregateArgs>(args: Subset<T, TemplateAggregateArgs>): Prisma.PrismaPromise<GetTemplateAggregateType<T>>

    /**
     * Group by Template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateGroupByArgs} args - Group by arguments.
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
      T extends TemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TemplateGroupByArgs['orderBy'] }
        : { orderBy?: TemplateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Template model
   */
  readonly fields: TemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Template.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    templateFields<T extends Template$templateFieldsArgs<ExtArgs> = {}>(args?: Subset<T, Template$templateFieldsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Template model
   */
  interface TemplateFieldRefs {
    readonly id: FieldRef<"Template", 'Int'>
    readonly name: FieldRef<"Template", 'String'>
    readonly isActive: FieldRef<"Template", 'Boolean'>
    readonly isDelete: FieldRef<"Template", 'Boolean'>
    readonly organizationId: FieldRef<"Template", 'Int'>
    readonly createdAt: FieldRef<"Template", 'DateTime'>
    readonly updatedAt: FieldRef<"Template", 'DateTime'>
    readonly orderno: FieldRef<"Template", 'Int'>
    readonly client: FieldRef<"Template", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Template findUnique
   */
  export type TemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template findUniqueOrThrow
   */
  export type TemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template findFirst
   */
  export type TemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Templates.
     */
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template findFirstOrThrow
   */
  export type TemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Templates.
     */
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template findMany
   */
  export type TemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Templates to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template create
   */
  export type TemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a Template.
     */
    data: XOR<TemplateCreateInput, TemplateUncheckedCreateInput>
  }

  /**
   * Template createMany
   */
  export type TemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Templates.
     */
    data: TemplateCreateManyInput | TemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Template createManyAndReturn
   */
  export type TemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * The data used to create many Templates.
     */
    data: TemplateCreateManyInput | TemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Template update
   */
  export type TemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a Template.
     */
    data: XOR<TemplateUpdateInput, TemplateUncheckedUpdateInput>
    /**
     * Choose, which Template to update.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template updateMany
   */
  export type TemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Templates.
     */
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyInput>
    /**
     * Filter which Templates to update
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to update.
     */
    limit?: number
  }

  /**
   * Template updateManyAndReturn
   */
  export type TemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * The data used to update Templates.
     */
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyInput>
    /**
     * Filter which Templates to update
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to update.
     */
    limit?: number
  }

  /**
   * Template upsert
   */
  export type TemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the Template to update in case it exists.
     */
    where: TemplateWhereUniqueInput
    /**
     * In case the Template found by the `where` argument doesn't exist, create a new Template with this data.
     */
    create: XOR<TemplateCreateInput, TemplateUncheckedCreateInput>
    /**
     * In case the Template was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TemplateUpdateInput, TemplateUncheckedUpdateInput>
  }

  /**
   * Template delete
   */
  export type TemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter which Template to delete.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template deleteMany
   */
  export type TemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Templates to delete
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to delete.
     */
    limit?: number
  }

  /**
   * Template.templateFields
   */
  export type Template$templateFieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateField
     */
    select?: TemplateFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateField
     */
    omit?: TemplateFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateFieldInclude<ExtArgs> | null
    where?: TemplateFieldWhereInput
    orderBy?: TemplateFieldOrderByWithRelationInput | TemplateFieldOrderByWithRelationInput[]
    cursor?: TemplateFieldWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TemplateFieldScalarFieldEnum | TemplateFieldScalarFieldEnum[]
  }

  /**
   * Template without action
   */
  export type TemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
  }


  /**
   * Model TemplateField
   */

  export type AggregateTemplateField = {
    _count: TemplateFieldCountAggregateOutputType | null
    _avg: TemplateFieldAvgAggregateOutputType | null
    _sum: TemplateFieldSumAggregateOutputType | null
    _min: TemplateFieldMinAggregateOutputType | null
    _max: TemplateFieldMaxAggregateOutputType | null
  }

  export type TemplateFieldAvgAggregateOutputType = {
    id: number | null
    templateId: number | null
  }

  export type TemplateFieldSumAggregateOutputType = {
    id: number | null
    templateId: number | null
  }

  export type TemplateFieldMinAggregateOutputType = {
    id: number | null
    templateId: number | null
    type: string | null
    icon: string | null
    label: string | null
    properties: string | null
    parentId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TemplateFieldMaxAggregateOutputType = {
    id: number | null
    templateId: number | null
    type: string | null
    icon: string | null
    label: string | null
    properties: string | null
    parentId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TemplateFieldCountAggregateOutputType = {
    id: number
    templateId: number
    type: number
    icon: number
    label: number
    properties: number
    parentId: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TemplateFieldAvgAggregateInputType = {
    id?: true
    templateId?: true
  }

  export type TemplateFieldSumAggregateInputType = {
    id?: true
    templateId?: true
  }

  export type TemplateFieldMinAggregateInputType = {
    id?: true
    templateId?: true
    type?: true
    icon?: true
    label?: true
    properties?: true
    parentId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TemplateFieldMaxAggregateInputType = {
    id?: true
    templateId?: true
    type?: true
    icon?: true
    label?: true
    properties?: true
    parentId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TemplateFieldCountAggregateInputType = {
    id?: true
    templateId?: true
    type?: true
    icon?: true
    label?: true
    properties?: true
    parentId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TemplateFieldAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TemplateField to aggregate.
     */
    where?: TemplateFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateFields to fetch.
     */
    orderBy?: TemplateFieldOrderByWithRelationInput | TemplateFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TemplateFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TemplateFields
    **/
    _count?: true | TemplateFieldCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TemplateFieldAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TemplateFieldSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TemplateFieldMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TemplateFieldMaxAggregateInputType
  }

  export type GetTemplateFieldAggregateType<T extends TemplateFieldAggregateArgs> = {
        [P in keyof T & keyof AggregateTemplateField]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemplateField[P]>
      : GetScalarType<T[P], AggregateTemplateField[P]>
  }




  export type TemplateFieldGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateFieldWhereInput
    orderBy?: TemplateFieldOrderByWithAggregationInput | TemplateFieldOrderByWithAggregationInput[]
    by: TemplateFieldScalarFieldEnum[] | TemplateFieldScalarFieldEnum
    having?: TemplateFieldScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TemplateFieldCountAggregateInputType | true
    _avg?: TemplateFieldAvgAggregateInputType
    _sum?: TemplateFieldSumAggregateInputType
    _min?: TemplateFieldMinAggregateInputType
    _max?: TemplateFieldMaxAggregateInputType
  }

  export type TemplateFieldGroupByOutputType = {
    id: number
    templateId: number
    type: string
    icon: string
    label: string
    properties: string
    parentId: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: TemplateFieldCountAggregateOutputType | null
    _avg: TemplateFieldAvgAggregateOutputType | null
    _sum: TemplateFieldSumAggregateOutputType | null
    _min: TemplateFieldMinAggregateOutputType | null
    _max: TemplateFieldMaxAggregateOutputType | null
  }

  type GetTemplateFieldGroupByPayload<T extends TemplateFieldGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TemplateFieldGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TemplateFieldGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TemplateFieldGroupByOutputType[P]>
            : GetScalarType<T[P], TemplateFieldGroupByOutputType[P]>
        }
      >
    >


  export type TemplateFieldSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    templateId?: boolean
    type?: boolean
    icon?: boolean
    label?: boolean
    properties?: boolean
    parentId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    template?: boolean | TemplateDefaultArgs<ExtArgs>
    children?: boolean | TemplateField$childrenArgs<ExtArgs>
    _count?: boolean | TemplateFieldCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["templateField"]>

  export type TemplateFieldSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    templateId?: boolean
    type?: boolean
    icon?: boolean
    label?: boolean
    properties?: boolean
    parentId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    template?: boolean | TemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["templateField"]>

  export type TemplateFieldSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    templateId?: boolean
    type?: boolean
    icon?: boolean
    label?: boolean
    properties?: boolean
    parentId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    template?: boolean | TemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["templateField"]>

  export type TemplateFieldSelectScalar = {
    id?: boolean
    templateId?: boolean
    type?: boolean
    icon?: boolean
    label?: boolean
    properties?: boolean
    parentId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TemplateFieldOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "templateId" | "type" | "icon" | "label" | "properties" | "parentId" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["templateField"]>
  export type TemplateFieldInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template?: boolean | TemplateDefaultArgs<ExtArgs>
    children?: boolean | TemplateField$childrenArgs<ExtArgs>
    _count?: boolean | TemplateFieldCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TemplateFieldIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template?: boolean | TemplateDefaultArgs<ExtArgs>
  }
  export type TemplateFieldIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template?: boolean | TemplateDefaultArgs<ExtArgs>
  }

  export type $TemplateFieldPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TemplateField"
    objects: {
      template: Prisma.$TemplatePayload<ExtArgs>
      children: Prisma.$TemplateChildPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      templateId: number
      type: string
      icon: string
      label: string
      properties: string
      parentId: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["templateField"]>
    composites: {}
  }

  type TemplateFieldGetPayload<S extends boolean | null | undefined | TemplateFieldDefaultArgs> = $Result.GetResult<Prisma.$TemplateFieldPayload, S>

  type TemplateFieldCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TemplateFieldFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TemplateFieldCountAggregateInputType | true
    }

  export interface TemplateFieldDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TemplateField'], meta: { name: 'TemplateField' } }
    /**
     * Find zero or one TemplateField that matches the filter.
     * @param {TemplateFieldFindUniqueArgs} args - Arguments to find a TemplateField
     * @example
     * // Get one TemplateField
     * const templateField = await prisma.templateField.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TemplateFieldFindUniqueArgs>(args: SelectSubset<T, TemplateFieldFindUniqueArgs<ExtArgs>>): Prisma__TemplateFieldClient<$Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TemplateField that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TemplateFieldFindUniqueOrThrowArgs} args - Arguments to find a TemplateField
     * @example
     * // Get one TemplateField
     * const templateField = await prisma.templateField.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TemplateFieldFindUniqueOrThrowArgs>(args: SelectSubset<T, TemplateFieldFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TemplateFieldClient<$Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TemplateField that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFieldFindFirstArgs} args - Arguments to find a TemplateField
     * @example
     * // Get one TemplateField
     * const templateField = await prisma.templateField.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TemplateFieldFindFirstArgs>(args?: SelectSubset<T, TemplateFieldFindFirstArgs<ExtArgs>>): Prisma__TemplateFieldClient<$Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TemplateField that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFieldFindFirstOrThrowArgs} args - Arguments to find a TemplateField
     * @example
     * // Get one TemplateField
     * const templateField = await prisma.templateField.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TemplateFieldFindFirstOrThrowArgs>(args?: SelectSubset<T, TemplateFieldFindFirstOrThrowArgs<ExtArgs>>): Prisma__TemplateFieldClient<$Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TemplateFields that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFieldFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TemplateFields
     * const templateFields = await prisma.templateField.findMany()
     * 
     * // Get first 10 TemplateFields
     * const templateFields = await prisma.templateField.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const templateFieldWithIdOnly = await prisma.templateField.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TemplateFieldFindManyArgs>(args?: SelectSubset<T, TemplateFieldFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TemplateField.
     * @param {TemplateFieldCreateArgs} args - Arguments to create a TemplateField.
     * @example
     * // Create one TemplateField
     * const TemplateField = await prisma.templateField.create({
     *   data: {
     *     // ... data to create a TemplateField
     *   }
     * })
     * 
     */
    create<T extends TemplateFieldCreateArgs>(args: SelectSubset<T, TemplateFieldCreateArgs<ExtArgs>>): Prisma__TemplateFieldClient<$Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TemplateFields.
     * @param {TemplateFieldCreateManyArgs} args - Arguments to create many TemplateFields.
     * @example
     * // Create many TemplateFields
     * const templateField = await prisma.templateField.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TemplateFieldCreateManyArgs>(args?: SelectSubset<T, TemplateFieldCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TemplateFields and returns the data saved in the database.
     * @param {TemplateFieldCreateManyAndReturnArgs} args - Arguments to create many TemplateFields.
     * @example
     * // Create many TemplateFields
     * const templateField = await prisma.templateField.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TemplateFields and only return the `id`
     * const templateFieldWithIdOnly = await prisma.templateField.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TemplateFieldCreateManyAndReturnArgs>(args?: SelectSubset<T, TemplateFieldCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TemplateField.
     * @param {TemplateFieldDeleteArgs} args - Arguments to delete one TemplateField.
     * @example
     * // Delete one TemplateField
     * const TemplateField = await prisma.templateField.delete({
     *   where: {
     *     // ... filter to delete one TemplateField
     *   }
     * })
     * 
     */
    delete<T extends TemplateFieldDeleteArgs>(args: SelectSubset<T, TemplateFieldDeleteArgs<ExtArgs>>): Prisma__TemplateFieldClient<$Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TemplateField.
     * @param {TemplateFieldUpdateArgs} args - Arguments to update one TemplateField.
     * @example
     * // Update one TemplateField
     * const templateField = await prisma.templateField.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TemplateFieldUpdateArgs>(args: SelectSubset<T, TemplateFieldUpdateArgs<ExtArgs>>): Prisma__TemplateFieldClient<$Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TemplateFields.
     * @param {TemplateFieldDeleteManyArgs} args - Arguments to filter TemplateFields to delete.
     * @example
     * // Delete a few TemplateFields
     * const { count } = await prisma.templateField.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TemplateFieldDeleteManyArgs>(args?: SelectSubset<T, TemplateFieldDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TemplateFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFieldUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TemplateFields
     * const templateField = await prisma.templateField.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TemplateFieldUpdateManyArgs>(args: SelectSubset<T, TemplateFieldUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TemplateFields and returns the data updated in the database.
     * @param {TemplateFieldUpdateManyAndReturnArgs} args - Arguments to update many TemplateFields.
     * @example
     * // Update many TemplateFields
     * const templateField = await prisma.templateField.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TemplateFields and only return the `id`
     * const templateFieldWithIdOnly = await prisma.templateField.updateManyAndReturn({
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
    updateManyAndReturn<T extends TemplateFieldUpdateManyAndReturnArgs>(args: SelectSubset<T, TemplateFieldUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TemplateField.
     * @param {TemplateFieldUpsertArgs} args - Arguments to update or create a TemplateField.
     * @example
     * // Update or create a TemplateField
     * const templateField = await prisma.templateField.upsert({
     *   create: {
     *     // ... data to create a TemplateField
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TemplateField we want to update
     *   }
     * })
     */
    upsert<T extends TemplateFieldUpsertArgs>(args: SelectSubset<T, TemplateFieldUpsertArgs<ExtArgs>>): Prisma__TemplateFieldClient<$Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TemplateFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFieldCountArgs} args - Arguments to filter TemplateFields to count.
     * @example
     * // Count the number of TemplateFields
     * const count = await prisma.templateField.count({
     *   where: {
     *     // ... the filter for the TemplateFields we want to count
     *   }
     * })
    **/
    count<T extends TemplateFieldCountArgs>(
      args?: Subset<T, TemplateFieldCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TemplateFieldCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TemplateField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFieldAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TemplateFieldAggregateArgs>(args: Subset<T, TemplateFieldAggregateArgs>): Prisma.PrismaPromise<GetTemplateFieldAggregateType<T>>

    /**
     * Group by TemplateField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFieldGroupByArgs} args - Group by arguments.
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
      T extends TemplateFieldGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TemplateFieldGroupByArgs['orderBy'] }
        : { orderBy?: TemplateFieldGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TemplateFieldGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemplateFieldGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TemplateField model
   */
  readonly fields: TemplateFieldFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TemplateField.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TemplateFieldClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    template<T extends TemplateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TemplateDefaultArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    children<T extends TemplateField$childrenArgs<ExtArgs> = {}>(args?: Subset<T, TemplateField$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplateChildPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TemplateField model
   */
  interface TemplateFieldFieldRefs {
    readonly id: FieldRef<"TemplateField", 'Int'>
    readonly templateId: FieldRef<"TemplateField", 'Int'>
    readonly type: FieldRef<"TemplateField", 'String'>
    readonly icon: FieldRef<"TemplateField", 'String'>
    readonly label: FieldRef<"TemplateField", 'String'>
    readonly properties: FieldRef<"TemplateField", 'String'>
    readonly parentId: FieldRef<"TemplateField", 'String'>
    readonly isActive: FieldRef<"TemplateField", 'Boolean'>
    readonly createdAt: FieldRef<"TemplateField", 'DateTime'>
    readonly updatedAt: FieldRef<"TemplateField", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TemplateField findUnique
   */
  export type TemplateFieldFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateField
     */
    select?: TemplateFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateField
     */
    omit?: TemplateFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateFieldInclude<ExtArgs> | null
    /**
     * Filter, which TemplateField to fetch.
     */
    where: TemplateFieldWhereUniqueInput
  }

  /**
   * TemplateField findUniqueOrThrow
   */
  export type TemplateFieldFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateField
     */
    select?: TemplateFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateField
     */
    omit?: TemplateFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateFieldInclude<ExtArgs> | null
    /**
     * Filter, which TemplateField to fetch.
     */
    where: TemplateFieldWhereUniqueInput
  }

  /**
   * TemplateField findFirst
   */
  export type TemplateFieldFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateField
     */
    select?: TemplateFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateField
     */
    omit?: TemplateFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateFieldInclude<ExtArgs> | null
    /**
     * Filter, which TemplateField to fetch.
     */
    where?: TemplateFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateFields to fetch.
     */
    orderBy?: TemplateFieldOrderByWithRelationInput | TemplateFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TemplateFields.
     */
    cursor?: TemplateFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TemplateFields.
     */
    distinct?: TemplateFieldScalarFieldEnum | TemplateFieldScalarFieldEnum[]
  }

  /**
   * TemplateField findFirstOrThrow
   */
  export type TemplateFieldFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateField
     */
    select?: TemplateFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateField
     */
    omit?: TemplateFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateFieldInclude<ExtArgs> | null
    /**
     * Filter, which TemplateField to fetch.
     */
    where?: TemplateFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateFields to fetch.
     */
    orderBy?: TemplateFieldOrderByWithRelationInput | TemplateFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TemplateFields.
     */
    cursor?: TemplateFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TemplateFields.
     */
    distinct?: TemplateFieldScalarFieldEnum | TemplateFieldScalarFieldEnum[]
  }

  /**
   * TemplateField findMany
   */
  export type TemplateFieldFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateField
     */
    select?: TemplateFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateField
     */
    omit?: TemplateFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateFieldInclude<ExtArgs> | null
    /**
     * Filter, which TemplateFields to fetch.
     */
    where?: TemplateFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateFields to fetch.
     */
    orderBy?: TemplateFieldOrderByWithRelationInput | TemplateFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TemplateFields.
     */
    cursor?: TemplateFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateFields.
     */
    skip?: number
    distinct?: TemplateFieldScalarFieldEnum | TemplateFieldScalarFieldEnum[]
  }

  /**
   * TemplateField create
   */
  export type TemplateFieldCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateField
     */
    select?: TemplateFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateField
     */
    omit?: TemplateFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateFieldInclude<ExtArgs> | null
    /**
     * The data needed to create a TemplateField.
     */
    data: XOR<TemplateFieldCreateInput, TemplateFieldUncheckedCreateInput>
  }

  /**
   * TemplateField createMany
   */
  export type TemplateFieldCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TemplateFields.
     */
    data: TemplateFieldCreateManyInput | TemplateFieldCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TemplateField createManyAndReturn
   */
  export type TemplateFieldCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateField
     */
    select?: TemplateFieldSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateField
     */
    omit?: TemplateFieldOmit<ExtArgs> | null
    /**
     * The data used to create many TemplateFields.
     */
    data: TemplateFieldCreateManyInput | TemplateFieldCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateFieldIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TemplateField update
   */
  export type TemplateFieldUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateField
     */
    select?: TemplateFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateField
     */
    omit?: TemplateFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateFieldInclude<ExtArgs> | null
    /**
     * The data needed to update a TemplateField.
     */
    data: XOR<TemplateFieldUpdateInput, TemplateFieldUncheckedUpdateInput>
    /**
     * Choose, which TemplateField to update.
     */
    where: TemplateFieldWhereUniqueInput
  }

  /**
   * TemplateField updateMany
   */
  export type TemplateFieldUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TemplateFields.
     */
    data: XOR<TemplateFieldUpdateManyMutationInput, TemplateFieldUncheckedUpdateManyInput>
    /**
     * Filter which TemplateFields to update
     */
    where?: TemplateFieldWhereInput
    /**
     * Limit how many TemplateFields to update.
     */
    limit?: number
  }

  /**
   * TemplateField updateManyAndReturn
   */
  export type TemplateFieldUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateField
     */
    select?: TemplateFieldSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateField
     */
    omit?: TemplateFieldOmit<ExtArgs> | null
    /**
     * The data used to update TemplateFields.
     */
    data: XOR<TemplateFieldUpdateManyMutationInput, TemplateFieldUncheckedUpdateManyInput>
    /**
     * Filter which TemplateFields to update
     */
    where?: TemplateFieldWhereInput
    /**
     * Limit how many TemplateFields to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateFieldIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TemplateField upsert
   */
  export type TemplateFieldUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateField
     */
    select?: TemplateFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateField
     */
    omit?: TemplateFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateFieldInclude<ExtArgs> | null
    /**
     * The filter to search for the TemplateField to update in case it exists.
     */
    where: TemplateFieldWhereUniqueInput
    /**
     * In case the TemplateField found by the `where` argument doesn't exist, create a new TemplateField with this data.
     */
    create: XOR<TemplateFieldCreateInput, TemplateFieldUncheckedCreateInput>
    /**
     * In case the TemplateField was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TemplateFieldUpdateInput, TemplateFieldUncheckedUpdateInput>
  }

  /**
   * TemplateField delete
   */
  export type TemplateFieldDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateField
     */
    select?: TemplateFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateField
     */
    omit?: TemplateFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateFieldInclude<ExtArgs> | null
    /**
     * Filter which TemplateField to delete.
     */
    where: TemplateFieldWhereUniqueInput
  }

  /**
   * TemplateField deleteMany
   */
  export type TemplateFieldDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TemplateFields to delete
     */
    where?: TemplateFieldWhereInput
    /**
     * Limit how many TemplateFields to delete.
     */
    limit?: number
  }

  /**
   * TemplateField.children
   */
  export type TemplateField$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateChild
     */
    select?: TemplateChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateChild
     */
    omit?: TemplateChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateChildInclude<ExtArgs> | null
    where?: TemplateChildWhereInput
    orderBy?: TemplateChildOrderByWithRelationInput | TemplateChildOrderByWithRelationInput[]
    cursor?: TemplateChildWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TemplateChildScalarFieldEnum | TemplateChildScalarFieldEnum[]
  }

  /**
   * TemplateField without action
   */
  export type TemplateFieldDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateField
     */
    select?: TemplateFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateField
     */
    omit?: TemplateFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateFieldInclude<ExtArgs> | null
  }


  /**
   * Model TemplateChild
   */

  export type AggregateTemplateChild = {
    _count: TemplateChildCountAggregateOutputType | null
    _avg: TemplateChildAvgAggregateOutputType | null
    _sum: TemplateChildSumAggregateOutputType | null
    _min: TemplateChildMinAggregateOutputType | null
    _max: TemplateChildMaxAggregateOutputType | null
  }

  export type TemplateChildAvgAggregateOutputType = {
    id: number | null
    templateFieldsId: number | null
  }

  export type TemplateChildSumAggregateOutputType = {
    id: number | null
    templateFieldsId: number | null
  }

  export type TemplateChildMinAggregateOutputType = {
    id: number | null
    templateFieldsId: number | null
    type: string | null
    icon: string | null
    label: string | null
    properties: string | null
    parentId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TemplateChildMaxAggregateOutputType = {
    id: number | null
    templateFieldsId: number | null
    type: string | null
    icon: string | null
    label: string | null
    properties: string | null
    parentId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TemplateChildCountAggregateOutputType = {
    id: number
    templateFieldsId: number
    type: number
    icon: number
    label: number
    properties: number
    parentId: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TemplateChildAvgAggregateInputType = {
    id?: true
    templateFieldsId?: true
  }

  export type TemplateChildSumAggregateInputType = {
    id?: true
    templateFieldsId?: true
  }

  export type TemplateChildMinAggregateInputType = {
    id?: true
    templateFieldsId?: true
    type?: true
    icon?: true
    label?: true
    properties?: true
    parentId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TemplateChildMaxAggregateInputType = {
    id?: true
    templateFieldsId?: true
    type?: true
    icon?: true
    label?: true
    properties?: true
    parentId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TemplateChildCountAggregateInputType = {
    id?: true
    templateFieldsId?: true
    type?: true
    icon?: true
    label?: true
    properties?: true
    parentId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TemplateChildAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TemplateChild to aggregate.
     */
    where?: TemplateChildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateChildren to fetch.
     */
    orderBy?: TemplateChildOrderByWithRelationInput | TemplateChildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TemplateChildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateChildren from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateChildren.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TemplateChildren
    **/
    _count?: true | TemplateChildCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TemplateChildAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TemplateChildSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TemplateChildMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TemplateChildMaxAggregateInputType
  }

  export type GetTemplateChildAggregateType<T extends TemplateChildAggregateArgs> = {
        [P in keyof T & keyof AggregateTemplateChild]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemplateChild[P]>
      : GetScalarType<T[P], AggregateTemplateChild[P]>
  }




  export type TemplateChildGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateChildWhereInput
    orderBy?: TemplateChildOrderByWithAggregationInput | TemplateChildOrderByWithAggregationInput[]
    by: TemplateChildScalarFieldEnum[] | TemplateChildScalarFieldEnum
    having?: TemplateChildScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TemplateChildCountAggregateInputType | true
    _avg?: TemplateChildAvgAggregateInputType
    _sum?: TemplateChildSumAggregateInputType
    _min?: TemplateChildMinAggregateInputType
    _max?: TemplateChildMaxAggregateInputType
  }

  export type TemplateChildGroupByOutputType = {
    id: number
    templateFieldsId: number
    type: string
    icon: string
    label: string
    properties: string
    parentId: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: TemplateChildCountAggregateOutputType | null
    _avg: TemplateChildAvgAggregateOutputType | null
    _sum: TemplateChildSumAggregateOutputType | null
    _min: TemplateChildMinAggregateOutputType | null
    _max: TemplateChildMaxAggregateOutputType | null
  }

  type GetTemplateChildGroupByPayload<T extends TemplateChildGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TemplateChildGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TemplateChildGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TemplateChildGroupByOutputType[P]>
            : GetScalarType<T[P], TemplateChildGroupByOutputType[P]>
        }
      >
    >


  export type TemplateChildSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    templateFieldsId?: boolean
    type?: boolean
    icon?: boolean
    label?: boolean
    properties?: boolean
    parentId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    templateField?: boolean | TemplateFieldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["templateChild"]>

  export type TemplateChildSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    templateFieldsId?: boolean
    type?: boolean
    icon?: boolean
    label?: boolean
    properties?: boolean
    parentId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    templateField?: boolean | TemplateFieldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["templateChild"]>

  export type TemplateChildSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    templateFieldsId?: boolean
    type?: boolean
    icon?: boolean
    label?: boolean
    properties?: boolean
    parentId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    templateField?: boolean | TemplateFieldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["templateChild"]>

  export type TemplateChildSelectScalar = {
    id?: boolean
    templateFieldsId?: boolean
    type?: boolean
    icon?: boolean
    label?: boolean
    properties?: boolean
    parentId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TemplateChildOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "templateFieldsId" | "type" | "icon" | "label" | "properties" | "parentId" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["templateChild"]>
  export type TemplateChildInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    templateField?: boolean | TemplateFieldDefaultArgs<ExtArgs>
  }
  export type TemplateChildIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    templateField?: boolean | TemplateFieldDefaultArgs<ExtArgs>
  }
  export type TemplateChildIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    templateField?: boolean | TemplateFieldDefaultArgs<ExtArgs>
  }

  export type $TemplateChildPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TemplateChild"
    objects: {
      templateField: Prisma.$TemplateFieldPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      templateFieldsId: number
      type: string
      icon: string
      label: string
      properties: string
      parentId: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["templateChild"]>
    composites: {}
  }

  type TemplateChildGetPayload<S extends boolean | null | undefined | TemplateChildDefaultArgs> = $Result.GetResult<Prisma.$TemplateChildPayload, S>

  type TemplateChildCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TemplateChildFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TemplateChildCountAggregateInputType | true
    }

  export interface TemplateChildDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TemplateChild'], meta: { name: 'TemplateChild' } }
    /**
     * Find zero or one TemplateChild that matches the filter.
     * @param {TemplateChildFindUniqueArgs} args - Arguments to find a TemplateChild
     * @example
     * // Get one TemplateChild
     * const templateChild = await prisma.templateChild.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TemplateChildFindUniqueArgs>(args: SelectSubset<T, TemplateChildFindUniqueArgs<ExtArgs>>): Prisma__TemplateChildClient<$Result.GetResult<Prisma.$TemplateChildPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TemplateChild that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TemplateChildFindUniqueOrThrowArgs} args - Arguments to find a TemplateChild
     * @example
     * // Get one TemplateChild
     * const templateChild = await prisma.templateChild.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TemplateChildFindUniqueOrThrowArgs>(args: SelectSubset<T, TemplateChildFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TemplateChildClient<$Result.GetResult<Prisma.$TemplateChildPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TemplateChild that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateChildFindFirstArgs} args - Arguments to find a TemplateChild
     * @example
     * // Get one TemplateChild
     * const templateChild = await prisma.templateChild.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TemplateChildFindFirstArgs>(args?: SelectSubset<T, TemplateChildFindFirstArgs<ExtArgs>>): Prisma__TemplateChildClient<$Result.GetResult<Prisma.$TemplateChildPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TemplateChild that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateChildFindFirstOrThrowArgs} args - Arguments to find a TemplateChild
     * @example
     * // Get one TemplateChild
     * const templateChild = await prisma.templateChild.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TemplateChildFindFirstOrThrowArgs>(args?: SelectSubset<T, TemplateChildFindFirstOrThrowArgs<ExtArgs>>): Prisma__TemplateChildClient<$Result.GetResult<Prisma.$TemplateChildPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TemplateChildren that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateChildFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TemplateChildren
     * const templateChildren = await prisma.templateChild.findMany()
     * 
     * // Get first 10 TemplateChildren
     * const templateChildren = await prisma.templateChild.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const templateChildWithIdOnly = await prisma.templateChild.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TemplateChildFindManyArgs>(args?: SelectSubset<T, TemplateChildFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplateChildPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TemplateChild.
     * @param {TemplateChildCreateArgs} args - Arguments to create a TemplateChild.
     * @example
     * // Create one TemplateChild
     * const TemplateChild = await prisma.templateChild.create({
     *   data: {
     *     // ... data to create a TemplateChild
     *   }
     * })
     * 
     */
    create<T extends TemplateChildCreateArgs>(args: SelectSubset<T, TemplateChildCreateArgs<ExtArgs>>): Prisma__TemplateChildClient<$Result.GetResult<Prisma.$TemplateChildPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TemplateChildren.
     * @param {TemplateChildCreateManyArgs} args - Arguments to create many TemplateChildren.
     * @example
     * // Create many TemplateChildren
     * const templateChild = await prisma.templateChild.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TemplateChildCreateManyArgs>(args?: SelectSubset<T, TemplateChildCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TemplateChildren and returns the data saved in the database.
     * @param {TemplateChildCreateManyAndReturnArgs} args - Arguments to create many TemplateChildren.
     * @example
     * // Create many TemplateChildren
     * const templateChild = await prisma.templateChild.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TemplateChildren and only return the `id`
     * const templateChildWithIdOnly = await prisma.templateChild.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TemplateChildCreateManyAndReturnArgs>(args?: SelectSubset<T, TemplateChildCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplateChildPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TemplateChild.
     * @param {TemplateChildDeleteArgs} args - Arguments to delete one TemplateChild.
     * @example
     * // Delete one TemplateChild
     * const TemplateChild = await prisma.templateChild.delete({
     *   where: {
     *     // ... filter to delete one TemplateChild
     *   }
     * })
     * 
     */
    delete<T extends TemplateChildDeleteArgs>(args: SelectSubset<T, TemplateChildDeleteArgs<ExtArgs>>): Prisma__TemplateChildClient<$Result.GetResult<Prisma.$TemplateChildPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TemplateChild.
     * @param {TemplateChildUpdateArgs} args - Arguments to update one TemplateChild.
     * @example
     * // Update one TemplateChild
     * const templateChild = await prisma.templateChild.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TemplateChildUpdateArgs>(args: SelectSubset<T, TemplateChildUpdateArgs<ExtArgs>>): Prisma__TemplateChildClient<$Result.GetResult<Prisma.$TemplateChildPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TemplateChildren.
     * @param {TemplateChildDeleteManyArgs} args - Arguments to filter TemplateChildren to delete.
     * @example
     * // Delete a few TemplateChildren
     * const { count } = await prisma.templateChild.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TemplateChildDeleteManyArgs>(args?: SelectSubset<T, TemplateChildDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TemplateChildren.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateChildUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TemplateChildren
     * const templateChild = await prisma.templateChild.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TemplateChildUpdateManyArgs>(args: SelectSubset<T, TemplateChildUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TemplateChildren and returns the data updated in the database.
     * @param {TemplateChildUpdateManyAndReturnArgs} args - Arguments to update many TemplateChildren.
     * @example
     * // Update many TemplateChildren
     * const templateChild = await prisma.templateChild.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TemplateChildren and only return the `id`
     * const templateChildWithIdOnly = await prisma.templateChild.updateManyAndReturn({
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
    updateManyAndReturn<T extends TemplateChildUpdateManyAndReturnArgs>(args: SelectSubset<T, TemplateChildUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplateChildPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TemplateChild.
     * @param {TemplateChildUpsertArgs} args - Arguments to update or create a TemplateChild.
     * @example
     * // Update or create a TemplateChild
     * const templateChild = await prisma.templateChild.upsert({
     *   create: {
     *     // ... data to create a TemplateChild
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TemplateChild we want to update
     *   }
     * })
     */
    upsert<T extends TemplateChildUpsertArgs>(args: SelectSubset<T, TemplateChildUpsertArgs<ExtArgs>>): Prisma__TemplateChildClient<$Result.GetResult<Prisma.$TemplateChildPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TemplateChildren.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateChildCountArgs} args - Arguments to filter TemplateChildren to count.
     * @example
     * // Count the number of TemplateChildren
     * const count = await prisma.templateChild.count({
     *   where: {
     *     // ... the filter for the TemplateChildren we want to count
     *   }
     * })
    **/
    count<T extends TemplateChildCountArgs>(
      args?: Subset<T, TemplateChildCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TemplateChildCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TemplateChild.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateChildAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TemplateChildAggregateArgs>(args: Subset<T, TemplateChildAggregateArgs>): Prisma.PrismaPromise<GetTemplateChildAggregateType<T>>

    /**
     * Group by TemplateChild.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateChildGroupByArgs} args - Group by arguments.
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
      T extends TemplateChildGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TemplateChildGroupByArgs['orderBy'] }
        : { orderBy?: TemplateChildGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TemplateChildGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemplateChildGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TemplateChild model
   */
  readonly fields: TemplateChildFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TemplateChild.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TemplateChildClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    templateField<T extends TemplateFieldDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TemplateFieldDefaultArgs<ExtArgs>>): Prisma__TemplateFieldClient<$Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TemplateChild model
   */
  interface TemplateChildFieldRefs {
    readonly id: FieldRef<"TemplateChild", 'Int'>
    readonly templateFieldsId: FieldRef<"TemplateChild", 'Int'>
    readonly type: FieldRef<"TemplateChild", 'String'>
    readonly icon: FieldRef<"TemplateChild", 'String'>
    readonly label: FieldRef<"TemplateChild", 'String'>
    readonly properties: FieldRef<"TemplateChild", 'String'>
    readonly parentId: FieldRef<"TemplateChild", 'String'>
    readonly isActive: FieldRef<"TemplateChild", 'Boolean'>
    readonly createdAt: FieldRef<"TemplateChild", 'DateTime'>
    readonly updatedAt: FieldRef<"TemplateChild", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TemplateChild findUnique
   */
  export type TemplateChildFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateChild
     */
    select?: TemplateChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateChild
     */
    omit?: TemplateChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateChildInclude<ExtArgs> | null
    /**
     * Filter, which TemplateChild to fetch.
     */
    where: TemplateChildWhereUniqueInput
  }

  /**
   * TemplateChild findUniqueOrThrow
   */
  export type TemplateChildFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateChild
     */
    select?: TemplateChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateChild
     */
    omit?: TemplateChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateChildInclude<ExtArgs> | null
    /**
     * Filter, which TemplateChild to fetch.
     */
    where: TemplateChildWhereUniqueInput
  }

  /**
   * TemplateChild findFirst
   */
  export type TemplateChildFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateChild
     */
    select?: TemplateChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateChild
     */
    omit?: TemplateChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateChildInclude<ExtArgs> | null
    /**
     * Filter, which TemplateChild to fetch.
     */
    where?: TemplateChildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateChildren to fetch.
     */
    orderBy?: TemplateChildOrderByWithRelationInput | TemplateChildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TemplateChildren.
     */
    cursor?: TemplateChildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateChildren from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateChildren.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TemplateChildren.
     */
    distinct?: TemplateChildScalarFieldEnum | TemplateChildScalarFieldEnum[]
  }

  /**
   * TemplateChild findFirstOrThrow
   */
  export type TemplateChildFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateChild
     */
    select?: TemplateChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateChild
     */
    omit?: TemplateChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateChildInclude<ExtArgs> | null
    /**
     * Filter, which TemplateChild to fetch.
     */
    where?: TemplateChildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateChildren to fetch.
     */
    orderBy?: TemplateChildOrderByWithRelationInput | TemplateChildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TemplateChildren.
     */
    cursor?: TemplateChildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateChildren from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateChildren.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TemplateChildren.
     */
    distinct?: TemplateChildScalarFieldEnum | TemplateChildScalarFieldEnum[]
  }

  /**
   * TemplateChild findMany
   */
  export type TemplateChildFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateChild
     */
    select?: TemplateChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateChild
     */
    omit?: TemplateChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateChildInclude<ExtArgs> | null
    /**
     * Filter, which TemplateChildren to fetch.
     */
    where?: TemplateChildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateChildren to fetch.
     */
    orderBy?: TemplateChildOrderByWithRelationInput | TemplateChildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TemplateChildren.
     */
    cursor?: TemplateChildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateChildren from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateChildren.
     */
    skip?: number
    distinct?: TemplateChildScalarFieldEnum | TemplateChildScalarFieldEnum[]
  }

  /**
   * TemplateChild create
   */
  export type TemplateChildCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateChild
     */
    select?: TemplateChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateChild
     */
    omit?: TemplateChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateChildInclude<ExtArgs> | null
    /**
     * The data needed to create a TemplateChild.
     */
    data: XOR<TemplateChildCreateInput, TemplateChildUncheckedCreateInput>
  }

  /**
   * TemplateChild createMany
   */
  export type TemplateChildCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TemplateChildren.
     */
    data: TemplateChildCreateManyInput | TemplateChildCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TemplateChild createManyAndReturn
   */
  export type TemplateChildCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateChild
     */
    select?: TemplateChildSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateChild
     */
    omit?: TemplateChildOmit<ExtArgs> | null
    /**
     * The data used to create many TemplateChildren.
     */
    data: TemplateChildCreateManyInput | TemplateChildCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateChildIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TemplateChild update
   */
  export type TemplateChildUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateChild
     */
    select?: TemplateChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateChild
     */
    omit?: TemplateChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateChildInclude<ExtArgs> | null
    /**
     * The data needed to update a TemplateChild.
     */
    data: XOR<TemplateChildUpdateInput, TemplateChildUncheckedUpdateInput>
    /**
     * Choose, which TemplateChild to update.
     */
    where: TemplateChildWhereUniqueInput
  }

  /**
   * TemplateChild updateMany
   */
  export type TemplateChildUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TemplateChildren.
     */
    data: XOR<TemplateChildUpdateManyMutationInput, TemplateChildUncheckedUpdateManyInput>
    /**
     * Filter which TemplateChildren to update
     */
    where?: TemplateChildWhereInput
    /**
     * Limit how many TemplateChildren to update.
     */
    limit?: number
  }

  /**
   * TemplateChild updateManyAndReturn
   */
  export type TemplateChildUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateChild
     */
    select?: TemplateChildSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateChild
     */
    omit?: TemplateChildOmit<ExtArgs> | null
    /**
     * The data used to update TemplateChildren.
     */
    data: XOR<TemplateChildUpdateManyMutationInput, TemplateChildUncheckedUpdateManyInput>
    /**
     * Filter which TemplateChildren to update
     */
    where?: TemplateChildWhereInput
    /**
     * Limit how many TemplateChildren to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateChildIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TemplateChild upsert
   */
  export type TemplateChildUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateChild
     */
    select?: TemplateChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateChild
     */
    omit?: TemplateChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateChildInclude<ExtArgs> | null
    /**
     * The filter to search for the TemplateChild to update in case it exists.
     */
    where: TemplateChildWhereUniqueInput
    /**
     * In case the TemplateChild found by the `where` argument doesn't exist, create a new TemplateChild with this data.
     */
    create: XOR<TemplateChildCreateInput, TemplateChildUncheckedCreateInput>
    /**
     * In case the TemplateChild was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TemplateChildUpdateInput, TemplateChildUncheckedUpdateInput>
  }

  /**
   * TemplateChild delete
   */
  export type TemplateChildDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateChild
     */
    select?: TemplateChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateChild
     */
    omit?: TemplateChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateChildInclude<ExtArgs> | null
    /**
     * Filter which TemplateChild to delete.
     */
    where: TemplateChildWhereUniqueInput
  }

  /**
   * TemplateChild deleteMany
   */
  export type TemplateChildDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TemplateChildren to delete
     */
    where?: TemplateChildWhereInput
    /**
     * Limit how many TemplateChildren to delete.
     */
    limit?: number
  }

  /**
   * TemplateChild without action
   */
  export type TemplateChildDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateChild
     */
    select?: TemplateChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateChild
     */
    omit?: TemplateChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateChildInclude<ExtArgs> | null
  }


  /**
   * Model FormSubmission
   */

  export type AggregateFormSubmission = {
    _count: FormSubmissionCountAggregateOutputType | null
    _avg: FormSubmissionAvgAggregateOutputType | null
    _sum: FormSubmissionSumAggregateOutputType | null
    _min: FormSubmissionMinAggregateOutputType | null
    _max: FormSubmissionMaxAggregateOutputType | null
  }

  export type FormSubmissionAvgAggregateOutputType = {
    id: number | null
    organizationId: number | null
  }

  export type FormSubmissionSumAggregateOutputType = {
    id: number | null
    organizationId: number | null
  }

  export type FormSubmissionMinAggregateOutputType = {
    id: number | null
    image_name: string | null
    batch_name: string | null
    field_name: string | null
    field_value: string | null
    level: string | null
    user_id: string | null
    created_date: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    organizationId: number | null
  }

  export type FormSubmissionMaxAggregateOutputType = {
    id: number | null
    image_name: string | null
    batch_name: string | null
    field_name: string | null
    field_value: string | null
    level: string | null
    user_id: string | null
    created_date: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    organizationId: number | null
  }

  export type FormSubmissionCountAggregateOutputType = {
    id: number
    image_name: number
    batch_name: number
    field_name: number
    field_value: number
    level: number
    user_id: number
    created_date: number
    isActive: number
    createdAt: number
    updatedAt: number
    organizationId: number
    _all: number
  }


  export type FormSubmissionAvgAggregateInputType = {
    id?: true
    organizationId?: true
  }

  export type FormSubmissionSumAggregateInputType = {
    id?: true
    organizationId?: true
  }

  export type FormSubmissionMinAggregateInputType = {
    id?: true
    image_name?: true
    batch_name?: true
    field_name?: true
    field_value?: true
    level?: true
    user_id?: true
    created_date?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    organizationId?: true
  }

  export type FormSubmissionMaxAggregateInputType = {
    id?: true
    image_name?: true
    batch_name?: true
    field_name?: true
    field_value?: true
    level?: true
    user_id?: true
    created_date?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    organizationId?: true
  }

  export type FormSubmissionCountAggregateInputType = {
    id?: true
    image_name?: true
    batch_name?: true
    field_name?: true
    field_value?: true
    level?: true
    user_id?: true
    created_date?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    organizationId?: true
    _all?: true
  }

  export type FormSubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormSubmission to aggregate.
     */
    where?: FormSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormSubmissions to fetch.
     */
    orderBy?: FormSubmissionOrderByWithRelationInput | FormSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FormSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FormSubmissions
    **/
    _count?: true | FormSubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FormSubmissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FormSubmissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormSubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormSubmissionMaxAggregateInputType
  }

  export type GetFormSubmissionAggregateType<T extends FormSubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateFormSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormSubmission[P]>
      : GetScalarType<T[P], AggregateFormSubmission[P]>
  }




  export type FormSubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormSubmissionWhereInput
    orderBy?: FormSubmissionOrderByWithAggregationInput | FormSubmissionOrderByWithAggregationInput[]
    by: FormSubmissionScalarFieldEnum[] | FormSubmissionScalarFieldEnum
    having?: FormSubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormSubmissionCountAggregateInputType | true
    _avg?: FormSubmissionAvgAggregateInputType
    _sum?: FormSubmissionSumAggregateInputType
    _min?: FormSubmissionMinAggregateInputType
    _max?: FormSubmissionMaxAggregateInputType
  }

  export type FormSubmissionGroupByOutputType = {
    id: number
    image_name: string
    batch_name: string
    field_name: string
    field_value: string
    level: string
    user_id: string
    created_date: Date
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    organizationId: number
    _count: FormSubmissionCountAggregateOutputType | null
    _avg: FormSubmissionAvgAggregateOutputType | null
    _sum: FormSubmissionSumAggregateOutputType | null
    _min: FormSubmissionMinAggregateOutputType | null
    _max: FormSubmissionMaxAggregateOutputType | null
  }

  type GetFormSubmissionGroupByPayload<T extends FormSubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormSubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormSubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormSubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], FormSubmissionGroupByOutputType[P]>
        }
      >
    >


  export type FormSubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image_name?: boolean
    batch_name?: boolean
    field_name?: boolean
    field_value?: boolean
    level?: boolean
    user_id?: boolean
    created_date?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organizationId?: boolean
  }, ExtArgs["result"]["formSubmission"]>

  export type FormSubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image_name?: boolean
    batch_name?: boolean
    field_name?: boolean
    field_value?: boolean
    level?: boolean
    user_id?: boolean
    created_date?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organizationId?: boolean
  }, ExtArgs["result"]["formSubmission"]>

  export type FormSubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image_name?: boolean
    batch_name?: boolean
    field_name?: boolean
    field_value?: boolean
    level?: boolean
    user_id?: boolean
    created_date?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organizationId?: boolean
  }, ExtArgs["result"]["formSubmission"]>

  export type FormSubmissionSelectScalar = {
    id?: boolean
    image_name?: boolean
    batch_name?: boolean
    field_name?: boolean
    field_value?: boolean
    level?: boolean
    user_id?: boolean
    created_date?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organizationId?: boolean
  }

  export type FormSubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "image_name" | "batch_name" | "field_name" | "field_value" | "level" | "user_id" | "created_date" | "isActive" | "createdAt" | "updatedAt" | "organizationId", ExtArgs["result"]["formSubmission"]>

  export type $FormSubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FormSubmission"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      image_name: string
      batch_name: string
      field_name: string
      field_value: string
      level: string
      user_id: string
      created_date: Date
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      organizationId: number
    }, ExtArgs["result"]["formSubmission"]>
    composites: {}
  }

  type FormSubmissionGetPayload<S extends boolean | null | undefined | FormSubmissionDefaultArgs> = $Result.GetResult<Prisma.$FormSubmissionPayload, S>

  type FormSubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FormSubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FormSubmissionCountAggregateInputType | true
    }

  export interface FormSubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FormSubmission'], meta: { name: 'FormSubmission' } }
    /**
     * Find zero or one FormSubmission that matches the filter.
     * @param {FormSubmissionFindUniqueArgs} args - Arguments to find a FormSubmission
     * @example
     * // Get one FormSubmission
     * const formSubmission = await prisma.formSubmission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FormSubmissionFindUniqueArgs>(args: SelectSubset<T, FormSubmissionFindUniqueArgs<ExtArgs>>): Prisma__FormSubmissionClient<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FormSubmission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FormSubmissionFindUniqueOrThrowArgs} args - Arguments to find a FormSubmission
     * @example
     * // Get one FormSubmission
     * const formSubmission = await prisma.formSubmission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FormSubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, FormSubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FormSubmissionClient<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FormSubmission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormSubmissionFindFirstArgs} args - Arguments to find a FormSubmission
     * @example
     * // Get one FormSubmission
     * const formSubmission = await prisma.formSubmission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FormSubmissionFindFirstArgs>(args?: SelectSubset<T, FormSubmissionFindFirstArgs<ExtArgs>>): Prisma__FormSubmissionClient<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FormSubmission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormSubmissionFindFirstOrThrowArgs} args - Arguments to find a FormSubmission
     * @example
     * // Get one FormSubmission
     * const formSubmission = await prisma.formSubmission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FormSubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, FormSubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__FormSubmissionClient<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FormSubmissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormSubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FormSubmissions
     * const formSubmissions = await prisma.formSubmission.findMany()
     * 
     * // Get first 10 FormSubmissions
     * const formSubmissions = await prisma.formSubmission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formSubmissionWithIdOnly = await prisma.formSubmission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FormSubmissionFindManyArgs>(args?: SelectSubset<T, FormSubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FormSubmission.
     * @param {FormSubmissionCreateArgs} args - Arguments to create a FormSubmission.
     * @example
     * // Create one FormSubmission
     * const FormSubmission = await prisma.formSubmission.create({
     *   data: {
     *     // ... data to create a FormSubmission
     *   }
     * })
     * 
     */
    create<T extends FormSubmissionCreateArgs>(args: SelectSubset<T, FormSubmissionCreateArgs<ExtArgs>>): Prisma__FormSubmissionClient<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FormSubmissions.
     * @param {FormSubmissionCreateManyArgs} args - Arguments to create many FormSubmissions.
     * @example
     * // Create many FormSubmissions
     * const formSubmission = await prisma.formSubmission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FormSubmissionCreateManyArgs>(args?: SelectSubset<T, FormSubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FormSubmissions and returns the data saved in the database.
     * @param {FormSubmissionCreateManyAndReturnArgs} args - Arguments to create many FormSubmissions.
     * @example
     * // Create many FormSubmissions
     * const formSubmission = await prisma.formSubmission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FormSubmissions and only return the `id`
     * const formSubmissionWithIdOnly = await prisma.formSubmission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FormSubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, FormSubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FormSubmission.
     * @param {FormSubmissionDeleteArgs} args - Arguments to delete one FormSubmission.
     * @example
     * // Delete one FormSubmission
     * const FormSubmission = await prisma.formSubmission.delete({
     *   where: {
     *     // ... filter to delete one FormSubmission
     *   }
     * })
     * 
     */
    delete<T extends FormSubmissionDeleteArgs>(args: SelectSubset<T, FormSubmissionDeleteArgs<ExtArgs>>): Prisma__FormSubmissionClient<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FormSubmission.
     * @param {FormSubmissionUpdateArgs} args - Arguments to update one FormSubmission.
     * @example
     * // Update one FormSubmission
     * const formSubmission = await prisma.formSubmission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FormSubmissionUpdateArgs>(args: SelectSubset<T, FormSubmissionUpdateArgs<ExtArgs>>): Prisma__FormSubmissionClient<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FormSubmissions.
     * @param {FormSubmissionDeleteManyArgs} args - Arguments to filter FormSubmissions to delete.
     * @example
     * // Delete a few FormSubmissions
     * const { count } = await prisma.formSubmission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FormSubmissionDeleteManyArgs>(args?: SelectSubset<T, FormSubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormSubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FormSubmissions
     * const formSubmission = await prisma.formSubmission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FormSubmissionUpdateManyArgs>(args: SelectSubset<T, FormSubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormSubmissions and returns the data updated in the database.
     * @param {FormSubmissionUpdateManyAndReturnArgs} args - Arguments to update many FormSubmissions.
     * @example
     * // Update many FormSubmissions
     * const formSubmission = await prisma.formSubmission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FormSubmissions and only return the `id`
     * const formSubmissionWithIdOnly = await prisma.formSubmission.updateManyAndReturn({
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
    updateManyAndReturn<T extends FormSubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, FormSubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FormSubmission.
     * @param {FormSubmissionUpsertArgs} args - Arguments to update or create a FormSubmission.
     * @example
     * // Update or create a FormSubmission
     * const formSubmission = await prisma.formSubmission.upsert({
     *   create: {
     *     // ... data to create a FormSubmission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FormSubmission we want to update
     *   }
     * })
     */
    upsert<T extends FormSubmissionUpsertArgs>(args: SelectSubset<T, FormSubmissionUpsertArgs<ExtArgs>>): Prisma__FormSubmissionClient<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FormSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormSubmissionCountArgs} args - Arguments to filter FormSubmissions to count.
     * @example
     * // Count the number of FormSubmissions
     * const count = await prisma.formSubmission.count({
     *   where: {
     *     // ... the filter for the FormSubmissions we want to count
     *   }
     * })
    **/
    count<T extends FormSubmissionCountArgs>(
      args?: Subset<T, FormSubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormSubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FormSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormSubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FormSubmissionAggregateArgs>(args: Subset<T, FormSubmissionAggregateArgs>): Prisma.PrismaPromise<GetFormSubmissionAggregateType<T>>

    /**
     * Group by FormSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormSubmissionGroupByArgs} args - Group by arguments.
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
      T extends FormSubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FormSubmissionGroupByArgs['orderBy'] }
        : { orderBy?: FormSubmissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FormSubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FormSubmission model
   */
  readonly fields: FormSubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FormSubmission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FormSubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the FormSubmission model
   */
  interface FormSubmissionFieldRefs {
    readonly id: FieldRef<"FormSubmission", 'Int'>
    readonly image_name: FieldRef<"FormSubmission", 'String'>
    readonly batch_name: FieldRef<"FormSubmission", 'String'>
    readonly field_name: FieldRef<"FormSubmission", 'String'>
    readonly field_value: FieldRef<"FormSubmission", 'String'>
    readonly level: FieldRef<"FormSubmission", 'String'>
    readonly user_id: FieldRef<"FormSubmission", 'String'>
    readonly created_date: FieldRef<"FormSubmission", 'DateTime'>
    readonly isActive: FieldRef<"FormSubmission", 'Boolean'>
    readonly createdAt: FieldRef<"FormSubmission", 'DateTime'>
    readonly updatedAt: FieldRef<"FormSubmission", 'DateTime'>
    readonly organizationId: FieldRef<"FormSubmission", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * FormSubmission findUnique
   */
  export type FormSubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which FormSubmission to fetch.
     */
    where: FormSubmissionWhereUniqueInput
  }

  /**
   * FormSubmission findUniqueOrThrow
   */
  export type FormSubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which FormSubmission to fetch.
     */
    where: FormSubmissionWhereUniqueInput
  }

  /**
   * FormSubmission findFirst
   */
  export type FormSubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which FormSubmission to fetch.
     */
    where?: FormSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormSubmissions to fetch.
     */
    orderBy?: FormSubmissionOrderByWithRelationInput | FormSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormSubmissions.
     */
    cursor?: FormSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormSubmissions.
     */
    distinct?: FormSubmissionScalarFieldEnum | FormSubmissionScalarFieldEnum[]
  }

  /**
   * FormSubmission findFirstOrThrow
   */
  export type FormSubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which FormSubmission to fetch.
     */
    where?: FormSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormSubmissions to fetch.
     */
    orderBy?: FormSubmissionOrderByWithRelationInput | FormSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormSubmissions.
     */
    cursor?: FormSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormSubmissions.
     */
    distinct?: FormSubmissionScalarFieldEnum | FormSubmissionScalarFieldEnum[]
  }

  /**
   * FormSubmission findMany
   */
  export type FormSubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which FormSubmissions to fetch.
     */
    where?: FormSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormSubmissions to fetch.
     */
    orderBy?: FormSubmissionOrderByWithRelationInput | FormSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FormSubmissions.
     */
    cursor?: FormSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormSubmissions.
     */
    skip?: number
    distinct?: FormSubmissionScalarFieldEnum | FormSubmissionScalarFieldEnum[]
  }

  /**
   * FormSubmission create
   */
  export type FormSubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * The data needed to create a FormSubmission.
     */
    data: XOR<FormSubmissionCreateInput, FormSubmissionUncheckedCreateInput>
  }

  /**
   * FormSubmission createMany
   */
  export type FormSubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FormSubmissions.
     */
    data: FormSubmissionCreateManyInput | FormSubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FormSubmission createManyAndReturn
   */
  export type FormSubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many FormSubmissions.
     */
    data: FormSubmissionCreateManyInput | FormSubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FormSubmission update
   */
  export type FormSubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * The data needed to update a FormSubmission.
     */
    data: XOR<FormSubmissionUpdateInput, FormSubmissionUncheckedUpdateInput>
    /**
     * Choose, which FormSubmission to update.
     */
    where: FormSubmissionWhereUniqueInput
  }

  /**
   * FormSubmission updateMany
   */
  export type FormSubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FormSubmissions.
     */
    data: XOR<FormSubmissionUpdateManyMutationInput, FormSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which FormSubmissions to update
     */
    where?: FormSubmissionWhereInput
    /**
     * Limit how many FormSubmissions to update.
     */
    limit?: number
  }

  /**
   * FormSubmission updateManyAndReturn
   */
  export type FormSubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * The data used to update FormSubmissions.
     */
    data: XOR<FormSubmissionUpdateManyMutationInput, FormSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which FormSubmissions to update
     */
    where?: FormSubmissionWhereInput
    /**
     * Limit how many FormSubmissions to update.
     */
    limit?: number
  }

  /**
   * FormSubmission upsert
   */
  export type FormSubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * The filter to search for the FormSubmission to update in case it exists.
     */
    where: FormSubmissionWhereUniqueInput
    /**
     * In case the FormSubmission found by the `where` argument doesn't exist, create a new FormSubmission with this data.
     */
    create: XOR<FormSubmissionCreateInput, FormSubmissionUncheckedCreateInput>
    /**
     * In case the FormSubmission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FormSubmissionUpdateInput, FormSubmissionUncheckedUpdateInput>
  }

  /**
   * FormSubmission delete
   */
  export type FormSubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * Filter which FormSubmission to delete.
     */
    where: FormSubmissionWhereUniqueInput
  }

  /**
   * FormSubmission deleteMany
   */
  export type FormSubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormSubmissions to delete
     */
    where?: FormSubmissionWhereInput
    /**
     * Limit how many FormSubmissions to delete.
     */
    limit?: number
  }

  /**
   * FormSubmission without action
   */
  export type FormSubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
  }


  /**
   * Model QcFormSubmission
   */

  export type AggregateQcFormSubmission = {
    _count: QcFormSubmissionCountAggregateOutputType | null
    _avg: QcFormSubmissionAvgAggregateOutputType | null
    _sum: QcFormSubmissionSumAggregateOutputType | null
    _min: QcFormSubmissionMinAggregateOutputType | null
    _max: QcFormSubmissionMaxAggregateOutputType | null
  }

  export type QcFormSubmissionAvgAggregateOutputType = {
    id: number | null
    organizationid: number | null
  }

  export type QcFormSubmissionSumAggregateOutputType = {
    id: number | null
    organizationid: number | null
  }

  export type QcFormSubmissionMinAggregateOutputType = {
    id: number | null
    batch_name: string | null
    image_name: string | null
    field_name: string | null
    field_value: string | null
    level: string | null
    userid: string | null
    created_date: Date | null
    organizationid: number | null
    isactive: boolean | null
    createdat: Date | null
    updatedat: Date | null
  }

  export type QcFormSubmissionMaxAggregateOutputType = {
    id: number | null
    batch_name: string | null
    image_name: string | null
    field_name: string | null
    field_value: string | null
    level: string | null
    userid: string | null
    created_date: Date | null
    organizationid: number | null
    isactive: boolean | null
    createdat: Date | null
    updatedat: Date | null
  }

  export type QcFormSubmissionCountAggregateOutputType = {
    id: number
    batch_name: number
    image_name: number
    field_name: number
    field_value: number
    level: number
    userid: number
    created_date: number
    organizationid: number
    isactive: number
    createdat: number
    updatedat: number
    _all: number
  }


  export type QcFormSubmissionAvgAggregateInputType = {
    id?: true
    organizationid?: true
  }

  export type QcFormSubmissionSumAggregateInputType = {
    id?: true
    organizationid?: true
  }

  export type QcFormSubmissionMinAggregateInputType = {
    id?: true
    batch_name?: true
    image_name?: true
    field_name?: true
    field_value?: true
    level?: true
    userid?: true
    created_date?: true
    organizationid?: true
    isactive?: true
    createdat?: true
    updatedat?: true
  }

  export type QcFormSubmissionMaxAggregateInputType = {
    id?: true
    batch_name?: true
    image_name?: true
    field_name?: true
    field_value?: true
    level?: true
    userid?: true
    created_date?: true
    organizationid?: true
    isactive?: true
    createdat?: true
    updatedat?: true
  }

  export type QcFormSubmissionCountAggregateInputType = {
    id?: true
    batch_name?: true
    image_name?: true
    field_name?: true
    field_value?: true
    level?: true
    userid?: true
    created_date?: true
    organizationid?: true
    isactive?: true
    createdat?: true
    updatedat?: true
    _all?: true
  }

  export type QcFormSubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QcFormSubmission to aggregate.
     */
    where?: QcFormSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QcFormSubmissions to fetch.
     */
    orderBy?: QcFormSubmissionOrderByWithRelationInput | QcFormSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QcFormSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QcFormSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QcFormSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QcFormSubmissions
    **/
    _count?: true | QcFormSubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QcFormSubmissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QcFormSubmissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QcFormSubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QcFormSubmissionMaxAggregateInputType
  }

  export type GetQcFormSubmissionAggregateType<T extends QcFormSubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateQcFormSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQcFormSubmission[P]>
      : GetScalarType<T[P], AggregateQcFormSubmission[P]>
  }




  export type QcFormSubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QcFormSubmissionWhereInput
    orderBy?: QcFormSubmissionOrderByWithAggregationInput | QcFormSubmissionOrderByWithAggregationInput[]
    by: QcFormSubmissionScalarFieldEnum[] | QcFormSubmissionScalarFieldEnum
    having?: QcFormSubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QcFormSubmissionCountAggregateInputType | true
    _avg?: QcFormSubmissionAvgAggregateInputType
    _sum?: QcFormSubmissionSumAggregateInputType
    _min?: QcFormSubmissionMinAggregateInputType
    _max?: QcFormSubmissionMaxAggregateInputType
  }

  export type QcFormSubmissionGroupByOutputType = {
    id: number
    batch_name: string | null
    image_name: string | null
    field_name: string | null
    field_value: string | null
    level: string | null
    userid: string | null
    created_date: Date
    organizationid: number | null
    isactive: boolean
    createdat: Date
    updatedat: Date
    _count: QcFormSubmissionCountAggregateOutputType | null
    _avg: QcFormSubmissionAvgAggregateOutputType | null
    _sum: QcFormSubmissionSumAggregateOutputType | null
    _min: QcFormSubmissionMinAggregateOutputType | null
    _max: QcFormSubmissionMaxAggregateOutputType | null
  }

  type GetQcFormSubmissionGroupByPayload<T extends QcFormSubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QcFormSubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QcFormSubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QcFormSubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], QcFormSubmissionGroupByOutputType[P]>
        }
      >
    >


  export type QcFormSubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    batch_name?: boolean
    image_name?: boolean
    field_name?: boolean
    field_value?: boolean
    level?: boolean
    userid?: boolean
    created_date?: boolean
    organizationid?: boolean
    isactive?: boolean
    createdat?: boolean
    updatedat?: boolean
  }, ExtArgs["result"]["qcFormSubmission"]>

  export type QcFormSubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    batch_name?: boolean
    image_name?: boolean
    field_name?: boolean
    field_value?: boolean
    level?: boolean
    userid?: boolean
    created_date?: boolean
    organizationid?: boolean
    isactive?: boolean
    createdat?: boolean
    updatedat?: boolean
  }, ExtArgs["result"]["qcFormSubmission"]>

  export type QcFormSubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    batch_name?: boolean
    image_name?: boolean
    field_name?: boolean
    field_value?: boolean
    level?: boolean
    userid?: boolean
    created_date?: boolean
    organizationid?: boolean
    isactive?: boolean
    createdat?: boolean
    updatedat?: boolean
  }, ExtArgs["result"]["qcFormSubmission"]>

  export type QcFormSubmissionSelectScalar = {
    id?: boolean
    batch_name?: boolean
    image_name?: boolean
    field_name?: boolean
    field_value?: boolean
    level?: boolean
    userid?: boolean
    created_date?: boolean
    organizationid?: boolean
    isactive?: boolean
    createdat?: boolean
    updatedat?: boolean
  }

  export type QcFormSubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "batch_name" | "image_name" | "field_name" | "field_value" | "level" | "userid" | "created_date" | "organizationid" | "isactive" | "createdat" | "updatedat", ExtArgs["result"]["qcFormSubmission"]>

  export type $QcFormSubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QcFormSubmission"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      batch_name: string | null
      image_name: string | null
      field_name: string | null
      field_value: string | null
      level: string | null
      userid: string | null
      created_date: Date
      organizationid: number | null
      isactive: boolean
      createdat: Date
      updatedat: Date
    }, ExtArgs["result"]["qcFormSubmission"]>
    composites: {}
  }

  type QcFormSubmissionGetPayload<S extends boolean | null | undefined | QcFormSubmissionDefaultArgs> = $Result.GetResult<Prisma.$QcFormSubmissionPayload, S>

  type QcFormSubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QcFormSubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QcFormSubmissionCountAggregateInputType | true
    }

  export interface QcFormSubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QcFormSubmission'], meta: { name: 'QcFormSubmission' } }
    /**
     * Find zero or one QcFormSubmission that matches the filter.
     * @param {QcFormSubmissionFindUniqueArgs} args - Arguments to find a QcFormSubmission
     * @example
     * // Get one QcFormSubmission
     * const qcFormSubmission = await prisma.qcFormSubmission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QcFormSubmissionFindUniqueArgs>(args: SelectSubset<T, QcFormSubmissionFindUniqueArgs<ExtArgs>>): Prisma__QcFormSubmissionClient<$Result.GetResult<Prisma.$QcFormSubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QcFormSubmission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QcFormSubmissionFindUniqueOrThrowArgs} args - Arguments to find a QcFormSubmission
     * @example
     * // Get one QcFormSubmission
     * const qcFormSubmission = await prisma.qcFormSubmission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QcFormSubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, QcFormSubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QcFormSubmissionClient<$Result.GetResult<Prisma.$QcFormSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QcFormSubmission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QcFormSubmissionFindFirstArgs} args - Arguments to find a QcFormSubmission
     * @example
     * // Get one QcFormSubmission
     * const qcFormSubmission = await prisma.qcFormSubmission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QcFormSubmissionFindFirstArgs>(args?: SelectSubset<T, QcFormSubmissionFindFirstArgs<ExtArgs>>): Prisma__QcFormSubmissionClient<$Result.GetResult<Prisma.$QcFormSubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QcFormSubmission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QcFormSubmissionFindFirstOrThrowArgs} args - Arguments to find a QcFormSubmission
     * @example
     * // Get one QcFormSubmission
     * const qcFormSubmission = await prisma.qcFormSubmission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QcFormSubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, QcFormSubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QcFormSubmissionClient<$Result.GetResult<Prisma.$QcFormSubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QcFormSubmissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QcFormSubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QcFormSubmissions
     * const qcFormSubmissions = await prisma.qcFormSubmission.findMany()
     * 
     * // Get first 10 QcFormSubmissions
     * const qcFormSubmissions = await prisma.qcFormSubmission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const qcFormSubmissionWithIdOnly = await prisma.qcFormSubmission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QcFormSubmissionFindManyArgs>(args?: SelectSubset<T, QcFormSubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QcFormSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QcFormSubmission.
     * @param {QcFormSubmissionCreateArgs} args - Arguments to create a QcFormSubmission.
     * @example
     * // Create one QcFormSubmission
     * const QcFormSubmission = await prisma.qcFormSubmission.create({
     *   data: {
     *     // ... data to create a QcFormSubmission
     *   }
     * })
     * 
     */
    create<T extends QcFormSubmissionCreateArgs>(args: SelectSubset<T, QcFormSubmissionCreateArgs<ExtArgs>>): Prisma__QcFormSubmissionClient<$Result.GetResult<Prisma.$QcFormSubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QcFormSubmissions.
     * @param {QcFormSubmissionCreateManyArgs} args - Arguments to create many QcFormSubmissions.
     * @example
     * // Create many QcFormSubmissions
     * const qcFormSubmission = await prisma.qcFormSubmission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QcFormSubmissionCreateManyArgs>(args?: SelectSubset<T, QcFormSubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QcFormSubmissions and returns the data saved in the database.
     * @param {QcFormSubmissionCreateManyAndReturnArgs} args - Arguments to create many QcFormSubmissions.
     * @example
     * // Create many QcFormSubmissions
     * const qcFormSubmission = await prisma.qcFormSubmission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QcFormSubmissions and only return the `id`
     * const qcFormSubmissionWithIdOnly = await prisma.qcFormSubmission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QcFormSubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, QcFormSubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QcFormSubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QcFormSubmission.
     * @param {QcFormSubmissionDeleteArgs} args - Arguments to delete one QcFormSubmission.
     * @example
     * // Delete one QcFormSubmission
     * const QcFormSubmission = await prisma.qcFormSubmission.delete({
     *   where: {
     *     // ... filter to delete one QcFormSubmission
     *   }
     * })
     * 
     */
    delete<T extends QcFormSubmissionDeleteArgs>(args: SelectSubset<T, QcFormSubmissionDeleteArgs<ExtArgs>>): Prisma__QcFormSubmissionClient<$Result.GetResult<Prisma.$QcFormSubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QcFormSubmission.
     * @param {QcFormSubmissionUpdateArgs} args - Arguments to update one QcFormSubmission.
     * @example
     * // Update one QcFormSubmission
     * const qcFormSubmission = await prisma.qcFormSubmission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QcFormSubmissionUpdateArgs>(args: SelectSubset<T, QcFormSubmissionUpdateArgs<ExtArgs>>): Prisma__QcFormSubmissionClient<$Result.GetResult<Prisma.$QcFormSubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QcFormSubmissions.
     * @param {QcFormSubmissionDeleteManyArgs} args - Arguments to filter QcFormSubmissions to delete.
     * @example
     * // Delete a few QcFormSubmissions
     * const { count } = await prisma.qcFormSubmission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QcFormSubmissionDeleteManyArgs>(args?: SelectSubset<T, QcFormSubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QcFormSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QcFormSubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QcFormSubmissions
     * const qcFormSubmission = await prisma.qcFormSubmission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QcFormSubmissionUpdateManyArgs>(args: SelectSubset<T, QcFormSubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QcFormSubmissions and returns the data updated in the database.
     * @param {QcFormSubmissionUpdateManyAndReturnArgs} args - Arguments to update many QcFormSubmissions.
     * @example
     * // Update many QcFormSubmissions
     * const qcFormSubmission = await prisma.qcFormSubmission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QcFormSubmissions and only return the `id`
     * const qcFormSubmissionWithIdOnly = await prisma.qcFormSubmission.updateManyAndReturn({
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
    updateManyAndReturn<T extends QcFormSubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, QcFormSubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QcFormSubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QcFormSubmission.
     * @param {QcFormSubmissionUpsertArgs} args - Arguments to update or create a QcFormSubmission.
     * @example
     * // Update or create a QcFormSubmission
     * const qcFormSubmission = await prisma.qcFormSubmission.upsert({
     *   create: {
     *     // ... data to create a QcFormSubmission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QcFormSubmission we want to update
     *   }
     * })
     */
    upsert<T extends QcFormSubmissionUpsertArgs>(args: SelectSubset<T, QcFormSubmissionUpsertArgs<ExtArgs>>): Prisma__QcFormSubmissionClient<$Result.GetResult<Prisma.$QcFormSubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QcFormSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QcFormSubmissionCountArgs} args - Arguments to filter QcFormSubmissions to count.
     * @example
     * // Count the number of QcFormSubmissions
     * const count = await prisma.qcFormSubmission.count({
     *   where: {
     *     // ... the filter for the QcFormSubmissions we want to count
     *   }
     * })
    **/
    count<T extends QcFormSubmissionCountArgs>(
      args?: Subset<T, QcFormSubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QcFormSubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QcFormSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QcFormSubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QcFormSubmissionAggregateArgs>(args: Subset<T, QcFormSubmissionAggregateArgs>): Prisma.PrismaPromise<GetQcFormSubmissionAggregateType<T>>

    /**
     * Group by QcFormSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QcFormSubmissionGroupByArgs} args - Group by arguments.
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
      T extends QcFormSubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QcFormSubmissionGroupByArgs['orderBy'] }
        : { orderBy?: QcFormSubmissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QcFormSubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQcFormSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QcFormSubmission model
   */
  readonly fields: QcFormSubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QcFormSubmission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QcFormSubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the QcFormSubmission model
   */
  interface QcFormSubmissionFieldRefs {
    readonly id: FieldRef<"QcFormSubmission", 'Int'>
    readonly batch_name: FieldRef<"QcFormSubmission", 'String'>
    readonly image_name: FieldRef<"QcFormSubmission", 'String'>
    readonly field_name: FieldRef<"QcFormSubmission", 'String'>
    readonly field_value: FieldRef<"QcFormSubmission", 'String'>
    readonly level: FieldRef<"QcFormSubmission", 'String'>
    readonly userid: FieldRef<"QcFormSubmission", 'String'>
    readonly created_date: FieldRef<"QcFormSubmission", 'DateTime'>
    readonly organizationid: FieldRef<"QcFormSubmission", 'Int'>
    readonly isactive: FieldRef<"QcFormSubmission", 'Boolean'>
    readonly createdat: FieldRef<"QcFormSubmission", 'DateTime'>
    readonly updatedat: FieldRef<"QcFormSubmission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QcFormSubmission findUnique
   */
  export type QcFormSubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QcFormSubmission
     */
    select?: QcFormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QcFormSubmission
     */
    omit?: QcFormSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which QcFormSubmission to fetch.
     */
    where: QcFormSubmissionWhereUniqueInput
  }

  /**
   * QcFormSubmission findUniqueOrThrow
   */
  export type QcFormSubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QcFormSubmission
     */
    select?: QcFormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QcFormSubmission
     */
    omit?: QcFormSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which QcFormSubmission to fetch.
     */
    where: QcFormSubmissionWhereUniqueInput
  }

  /**
   * QcFormSubmission findFirst
   */
  export type QcFormSubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QcFormSubmission
     */
    select?: QcFormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QcFormSubmission
     */
    omit?: QcFormSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which QcFormSubmission to fetch.
     */
    where?: QcFormSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QcFormSubmissions to fetch.
     */
    orderBy?: QcFormSubmissionOrderByWithRelationInput | QcFormSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QcFormSubmissions.
     */
    cursor?: QcFormSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QcFormSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QcFormSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QcFormSubmissions.
     */
    distinct?: QcFormSubmissionScalarFieldEnum | QcFormSubmissionScalarFieldEnum[]
  }

  /**
   * QcFormSubmission findFirstOrThrow
   */
  export type QcFormSubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QcFormSubmission
     */
    select?: QcFormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QcFormSubmission
     */
    omit?: QcFormSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which QcFormSubmission to fetch.
     */
    where?: QcFormSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QcFormSubmissions to fetch.
     */
    orderBy?: QcFormSubmissionOrderByWithRelationInput | QcFormSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QcFormSubmissions.
     */
    cursor?: QcFormSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QcFormSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QcFormSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QcFormSubmissions.
     */
    distinct?: QcFormSubmissionScalarFieldEnum | QcFormSubmissionScalarFieldEnum[]
  }

  /**
   * QcFormSubmission findMany
   */
  export type QcFormSubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QcFormSubmission
     */
    select?: QcFormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QcFormSubmission
     */
    omit?: QcFormSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which QcFormSubmissions to fetch.
     */
    where?: QcFormSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QcFormSubmissions to fetch.
     */
    orderBy?: QcFormSubmissionOrderByWithRelationInput | QcFormSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QcFormSubmissions.
     */
    cursor?: QcFormSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QcFormSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QcFormSubmissions.
     */
    skip?: number
    distinct?: QcFormSubmissionScalarFieldEnum | QcFormSubmissionScalarFieldEnum[]
  }

  /**
   * QcFormSubmission create
   */
  export type QcFormSubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QcFormSubmission
     */
    select?: QcFormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QcFormSubmission
     */
    omit?: QcFormSubmissionOmit<ExtArgs> | null
    /**
     * The data needed to create a QcFormSubmission.
     */
    data: XOR<QcFormSubmissionCreateInput, QcFormSubmissionUncheckedCreateInput>
  }

  /**
   * QcFormSubmission createMany
   */
  export type QcFormSubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QcFormSubmissions.
     */
    data: QcFormSubmissionCreateManyInput | QcFormSubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QcFormSubmission createManyAndReturn
   */
  export type QcFormSubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QcFormSubmission
     */
    select?: QcFormSubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QcFormSubmission
     */
    omit?: QcFormSubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many QcFormSubmissions.
     */
    data: QcFormSubmissionCreateManyInput | QcFormSubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QcFormSubmission update
   */
  export type QcFormSubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QcFormSubmission
     */
    select?: QcFormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QcFormSubmission
     */
    omit?: QcFormSubmissionOmit<ExtArgs> | null
    /**
     * The data needed to update a QcFormSubmission.
     */
    data: XOR<QcFormSubmissionUpdateInput, QcFormSubmissionUncheckedUpdateInput>
    /**
     * Choose, which QcFormSubmission to update.
     */
    where: QcFormSubmissionWhereUniqueInput
  }

  /**
   * QcFormSubmission updateMany
   */
  export type QcFormSubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QcFormSubmissions.
     */
    data: XOR<QcFormSubmissionUpdateManyMutationInput, QcFormSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which QcFormSubmissions to update
     */
    where?: QcFormSubmissionWhereInput
    /**
     * Limit how many QcFormSubmissions to update.
     */
    limit?: number
  }

  /**
   * QcFormSubmission updateManyAndReturn
   */
  export type QcFormSubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QcFormSubmission
     */
    select?: QcFormSubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QcFormSubmission
     */
    omit?: QcFormSubmissionOmit<ExtArgs> | null
    /**
     * The data used to update QcFormSubmissions.
     */
    data: XOR<QcFormSubmissionUpdateManyMutationInput, QcFormSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which QcFormSubmissions to update
     */
    where?: QcFormSubmissionWhereInput
    /**
     * Limit how many QcFormSubmissions to update.
     */
    limit?: number
  }

  /**
   * QcFormSubmission upsert
   */
  export type QcFormSubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QcFormSubmission
     */
    select?: QcFormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QcFormSubmission
     */
    omit?: QcFormSubmissionOmit<ExtArgs> | null
    /**
     * The filter to search for the QcFormSubmission to update in case it exists.
     */
    where: QcFormSubmissionWhereUniqueInput
    /**
     * In case the QcFormSubmission found by the `where` argument doesn't exist, create a new QcFormSubmission with this data.
     */
    create: XOR<QcFormSubmissionCreateInput, QcFormSubmissionUncheckedCreateInput>
    /**
     * In case the QcFormSubmission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QcFormSubmissionUpdateInput, QcFormSubmissionUncheckedUpdateInput>
  }

  /**
   * QcFormSubmission delete
   */
  export type QcFormSubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QcFormSubmission
     */
    select?: QcFormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QcFormSubmission
     */
    omit?: QcFormSubmissionOmit<ExtArgs> | null
    /**
     * Filter which QcFormSubmission to delete.
     */
    where: QcFormSubmissionWhereUniqueInput
  }

  /**
   * QcFormSubmission deleteMany
   */
  export type QcFormSubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QcFormSubmissions to delete
     */
    where?: QcFormSubmissionWhereInput
    /**
     * Limit how many QcFormSubmissions to delete.
     */
    limit?: number
  }

  /**
   * QcFormSubmission without action
   */
  export type QcFormSubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QcFormSubmission
     */
    select?: QcFormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QcFormSubmission
     */
    omit?: QcFormSubmissionOmit<ExtArgs> | null
  }


  /**
   * Model UserLog
   */

  export type AggregateUserLog = {
    _count: UserLogCountAggregateOutputType | null
    _avg: UserLogAvgAggregateOutputType | null
    _sum: UserLogSumAggregateOutputType | null
    _min: UserLogMinAggregateOutputType | null
    _max: UserLogMaxAggregateOutputType | null
  }

  export type UserLogAvgAggregateOutputType = {
    id: number | null
    organizationid: number | null
  }

  export type UserLogSumAggregateOutputType = {
    id: number | null
    organizationid: number | null
  }

  export type UserLogMinAggregateOutputType = {
    id: number | null
    userid: string | null
    organizationid: number | null
    role: string | null
    actiondate: Date | null
    action: string | null
  }

  export type UserLogMaxAggregateOutputType = {
    id: number | null
    userid: string | null
    organizationid: number | null
    role: string | null
    actiondate: Date | null
    action: string | null
  }

  export type UserLogCountAggregateOutputType = {
    id: number
    userid: number
    organizationid: number
    role: number
    actiondate: number
    action: number
    _all: number
  }


  export type UserLogAvgAggregateInputType = {
    id?: true
    organizationid?: true
  }

  export type UserLogSumAggregateInputType = {
    id?: true
    organizationid?: true
  }

  export type UserLogMinAggregateInputType = {
    id?: true
    userid?: true
    organizationid?: true
    role?: true
    actiondate?: true
    action?: true
  }

  export type UserLogMaxAggregateInputType = {
    id?: true
    userid?: true
    organizationid?: true
    role?: true
    actiondate?: true
    action?: true
  }

  export type UserLogCountAggregateInputType = {
    id?: true
    userid?: true
    organizationid?: true
    role?: true
    actiondate?: true
    action?: true
    _all?: true
  }

  export type UserLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLog to aggregate.
     */
    where?: UserLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLogs to fetch.
     */
    orderBy?: UserLogOrderByWithRelationInput | UserLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserLogs
    **/
    _count?: true | UserLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserLogMaxAggregateInputType
  }

  export type GetUserLogAggregateType<T extends UserLogAggregateArgs> = {
        [P in keyof T & keyof AggregateUserLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserLog[P]>
      : GetScalarType<T[P], AggregateUserLog[P]>
  }




  export type UserLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLogWhereInput
    orderBy?: UserLogOrderByWithAggregationInput | UserLogOrderByWithAggregationInput[]
    by: UserLogScalarFieldEnum[] | UserLogScalarFieldEnum
    having?: UserLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserLogCountAggregateInputType | true
    _avg?: UserLogAvgAggregateInputType
    _sum?: UserLogSumAggregateInputType
    _min?: UserLogMinAggregateInputType
    _max?: UserLogMaxAggregateInputType
  }

  export type UserLogGroupByOutputType = {
    id: number
    userid: string
    organizationid: number
    role: string
    actiondate: Date
    action: string
    _count: UserLogCountAggregateOutputType | null
    _avg: UserLogAvgAggregateOutputType | null
    _sum: UserLogSumAggregateOutputType | null
    _min: UserLogMinAggregateOutputType | null
    _max: UserLogMaxAggregateOutputType | null
  }

  type GetUserLogGroupByPayload<T extends UserLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserLogGroupByOutputType[P]>
            : GetScalarType<T[P], UserLogGroupByOutputType[P]>
        }
      >
    >


  export type UserLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userid?: boolean
    organizationid?: boolean
    role?: boolean
    actiondate?: boolean
    action?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userLog"]>

  export type UserLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userid?: boolean
    organizationid?: boolean
    role?: boolean
    actiondate?: boolean
    action?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userLog"]>

  export type UserLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userid?: boolean
    organizationid?: boolean
    role?: boolean
    actiondate?: boolean
    action?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userLog"]>

  export type UserLogSelectScalar = {
    id?: boolean
    userid?: boolean
    organizationid?: boolean
    role?: boolean
    actiondate?: boolean
    action?: boolean
  }

  export type UserLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userid" | "organizationid" | "role" | "actiondate" | "action", ExtArgs["result"]["userLog"]>
  export type UserLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userid: string
      organizationid: number
      role: string
      actiondate: Date
      action: string
    }, ExtArgs["result"]["userLog"]>
    composites: {}
  }

  type UserLogGetPayload<S extends boolean | null | undefined | UserLogDefaultArgs> = $Result.GetResult<Prisma.$UserLogPayload, S>

  type UserLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserLogCountAggregateInputType | true
    }

  export interface UserLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserLog'], meta: { name: 'UserLog' } }
    /**
     * Find zero or one UserLog that matches the filter.
     * @param {UserLogFindUniqueArgs} args - Arguments to find a UserLog
     * @example
     * // Get one UserLog
     * const userLog = await prisma.userLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserLogFindUniqueArgs>(args: SelectSubset<T, UserLogFindUniqueArgs<ExtArgs>>): Prisma__UserLogClient<$Result.GetResult<Prisma.$UserLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserLogFindUniqueOrThrowArgs} args - Arguments to find a UserLog
     * @example
     * // Get one UserLog
     * const userLog = await prisma.userLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserLogFindUniqueOrThrowArgs>(args: SelectSubset<T, UserLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserLogClient<$Result.GetResult<Prisma.$UserLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLogFindFirstArgs} args - Arguments to find a UserLog
     * @example
     * // Get one UserLog
     * const userLog = await prisma.userLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserLogFindFirstArgs>(args?: SelectSubset<T, UserLogFindFirstArgs<ExtArgs>>): Prisma__UserLogClient<$Result.GetResult<Prisma.$UserLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLogFindFirstOrThrowArgs} args - Arguments to find a UserLog
     * @example
     * // Get one UserLog
     * const userLog = await prisma.userLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserLogFindFirstOrThrowArgs>(args?: SelectSubset<T, UserLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserLogClient<$Result.GetResult<Prisma.$UserLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserLogs
     * const userLogs = await prisma.userLog.findMany()
     * 
     * // Get first 10 UserLogs
     * const userLogs = await prisma.userLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userLogWithIdOnly = await prisma.userLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserLogFindManyArgs>(args?: SelectSubset<T, UserLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserLog.
     * @param {UserLogCreateArgs} args - Arguments to create a UserLog.
     * @example
     * // Create one UserLog
     * const UserLog = await prisma.userLog.create({
     *   data: {
     *     // ... data to create a UserLog
     *   }
     * })
     * 
     */
    create<T extends UserLogCreateArgs>(args: SelectSubset<T, UserLogCreateArgs<ExtArgs>>): Prisma__UserLogClient<$Result.GetResult<Prisma.$UserLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserLogs.
     * @param {UserLogCreateManyArgs} args - Arguments to create many UserLogs.
     * @example
     * // Create many UserLogs
     * const userLog = await prisma.userLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserLogCreateManyArgs>(args?: SelectSubset<T, UserLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserLogs and returns the data saved in the database.
     * @param {UserLogCreateManyAndReturnArgs} args - Arguments to create many UserLogs.
     * @example
     * // Create many UserLogs
     * const userLog = await prisma.userLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserLogs and only return the `id`
     * const userLogWithIdOnly = await prisma.userLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserLogCreateManyAndReturnArgs>(args?: SelectSubset<T, UserLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserLog.
     * @param {UserLogDeleteArgs} args - Arguments to delete one UserLog.
     * @example
     * // Delete one UserLog
     * const UserLog = await prisma.userLog.delete({
     *   where: {
     *     // ... filter to delete one UserLog
     *   }
     * })
     * 
     */
    delete<T extends UserLogDeleteArgs>(args: SelectSubset<T, UserLogDeleteArgs<ExtArgs>>): Prisma__UserLogClient<$Result.GetResult<Prisma.$UserLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserLog.
     * @param {UserLogUpdateArgs} args - Arguments to update one UserLog.
     * @example
     * // Update one UserLog
     * const userLog = await prisma.userLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserLogUpdateArgs>(args: SelectSubset<T, UserLogUpdateArgs<ExtArgs>>): Prisma__UserLogClient<$Result.GetResult<Prisma.$UserLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserLogs.
     * @param {UserLogDeleteManyArgs} args - Arguments to filter UserLogs to delete.
     * @example
     * // Delete a few UserLogs
     * const { count } = await prisma.userLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserLogDeleteManyArgs>(args?: SelectSubset<T, UserLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserLogs
     * const userLog = await prisma.userLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserLogUpdateManyArgs>(args: SelectSubset<T, UserLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserLogs and returns the data updated in the database.
     * @param {UserLogUpdateManyAndReturnArgs} args - Arguments to update many UserLogs.
     * @example
     * // Update many UserLogs
     * const userLog = await prisma.userLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserLogs and only return the `id`
     * const userLogWithIdOnly = await prisma.userLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserLogUpdateManyAndReturnArgs>(args: SelectSubset<T, UserLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserLog.
     * @param {UserLogUpsertArgs} args - Arguments to update or create a UserLog.
     * @example
     * // Update or create a UserLog
     * const userLog = await prisma.userLog.upsert({
     *   create: {
     *     // ... data to create a UserLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserLog we want to update
     *   }
     * })
     */
    upsert<T extends UserLogUpsertArgs>(args: SelectSubset<T, UserLogUpsertArgs<ExtArgs>>): Prisma__UserLogClient<$Result.GetResult<Prisma.$UserLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLogCountArgs} args - Arguments to filter UserLogs to count.
     * @example
     * // Count the number of UserLogs
     * const count = await prisma.userLog.count({
     *   where: {
     *     // ... the filter for the UserLogs we want to count
     *   }
     * })
    **/
    count<T extends UserLogCountArgs>(
      args?: Subset<T, UserLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserLogAggregateArgs>(args: Subset<T, UserLogAggregateArgs>): Prisma.PrismaPromise<GetUserLogAggregateType<T>>

    /**
     * Group by UserLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLogGroupByArgs} args - Group by arguments.
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
      T extends UserLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserLogGroupByArgs['orderBy'] }
        : { orderBy?: UserLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserLog model
   */
  readonly fields: UserLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserLog model
   */
  interface UserLogFieldRefs {
    readonly id: FieldRef<"UserLog", 'Int'>
    readonly userid: FieldRef<"UserLog", 'String'>
    readonly organizationid: FieldRef<"UserLog", 'Int'>
    readonly role: FieldRef<"UserLog", 'String'>
    readonly actiondate: FieldRef<"UserLog", 'DateTime'>
    readonly action: FieldRef<"UserLog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserLog findUnique
   */
  export type UserLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLog
     */
    select?: UserLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLog
     */
    omit?: UserLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLogInclude<ExtArgs> | null
    /**
     * Filter, which UserLog to fetch.
     */
    where: UserLogWhereUniqueInput
  }

  /**
   * UserLog findUniqueOrThrow
   */
  export type UserLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLog
     */
    select?: UserLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLog
     */
    omit?: UserLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLogInclude<ExtArgs> | null
    /**
     * Filter, which UserLog to fetch.
     */
    where: UserLogWhereUniqueInput
  }

  /**
   * UserLog findFirst
   */
  export type UserLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLog
     */
    select?: UserLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLog
     */
    omit?: UserLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLogInclude<ExtArgs> | null
    /**
     * Filter, which UserLog to fetch.
     */
    where?: UserLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLogs to fetch.
     */
    orderBy?: UserLogOrderByWithRelationInput | UserLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLogs.
     */
    cursor?: UserLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLogs.
     */
    distinct?: UserLogScalarFieldEnum | UserLogScalarFieldEnum[]
  }

  /**
   * UserLog findFirstOrThrow
   */
  export type UserLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLog
     */
    select?: UserLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLog
     */
    omit?: UserLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLogInclude<ExtArgs> | null
    /**
     * Filter, which UserLog to fetch.
     */
    where?: UserLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLogs to fetch.
     */
    orderBy?: UserLogOrderByWithRelationInput | UserLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLogs.
     */
    cursor?: UserLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLogs.
     */
    distinct?: UserLogScalarFieldEnum | UserLogScalarFieldEnum[]
  }

  /**
   * UserLog findMany
   */
  export type UserLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLog
     */
    select?: UserLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLog
     */
    omit?: UserLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLogInclude<ExtArgs> | null
    /**
     * Filter, which UserLogs to fetch.
     */
    where?: UserLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLogs to fetch.
     */
    orderBy?: UserLogOrderByWithRelationInput | UserLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserLogs.
     */
    cursor?: UserLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLogs.
     */
    skip?: number
    distinct?: UserLogScalarFieldEnum | UserLogScalarFieldEnum[]
  }

  /**
   * UserLog create
   */
  export type UserLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLog
     */
    select?: UserLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLog
     */
    omit?: UserLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLogInclude<ExtArgs> | null
    /**
     * The data needed to create a UserLog.
     */
    data: XOR<UserLogCreateInput, UserLogUncheckedCreateInput>
  }

  /**
   * UserLog createMany
   */
  export type UserLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserLogs.
     */
    data: UserLogCreateManyInput | UserLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserLog createManyAndReturn
   */
  export type UserLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLog
     */
    select?: UserLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserLog
     */
    omit?: UserLogOmit<ExtArgs> | null
    /**
     * The data used to create many UserLogs.
     */
    data: UserLogCreateManyInput | UserLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserLog update
   */
  export type UserLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLog
     */
    select?: UserLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLog
     */
    omit?: UserLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLogInclude<ExtArgs> | null
    /**
     * The data needed to update a UserLog.
     */
    data: XOR<UserLogUpdateInput, UserLogUncheckedUpdateInput>
    /**
     * Choose, which UserLog to update.
     */
    where: UserLogWhereUniqueInput
  }

  /**
   * UserLog updateMany
   */
  export type UserLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserLogs.
     */
    data: XOR<UserLogUpdateManyMutationInput, UserLogUncheckedUpdateManyInput>
    /**
     * Filter which UserLogs to update
     */
    where?: UserLogWhereInput
    /**
     * Limit how many UserLogs to update.
     */
    limit?: number
  }

  /**
   * UserLog updateManyAndReturn
   */
  export type UserLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLog
     */
    select?: UserLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserLog
     */
    omit?: UserLogOmit<ExtArgs> | null
    /**
     * The data used to update UserLogs.
     */
    data: XOR<UserLogUpdateManyMutationInput, UserLogUncheckedUpdateManyInput>
    /**
     * Filter which UserLogs to update
     */
    where?: UserLogWhereInput
    /**
     * Limit how many UserLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserLog upsert
   */
  export type UserLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLog
     */
    select?: UserLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLog
     */
    omit?: UserLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLogInclude<ExtArgs> | null
    /**
     * The filter to search for the UserLog to update in case it exists.
     */
    where: UserLogWhereUniqueInput
    /**
     * In case the UserLog found by the `where` argument doesn't exist, create a new UserLog with this data.
     */
    create: XOR<UserLogCreateInput, UserLogUncheckedCreateInput>
    /**
     * In case the UserLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserLogUpdateInput, UserLogUncheckedUpdateInput>
  }

  /**
   * UserLog delete
   */
  export type UserLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLog
     */
    select?: UserLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLog
     */
    omit?: UserLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLogInclude<ExtArgs> | null
    /**
     * Filter which UserLog to delete.
     */
    where: UserLogWhereUniqueInput
  }

  /**
   * UserLog deleteMany
   */
  export type UserLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLogs to delete
     */
    where?: UserLogWhereInput
    /**
     * Limit how many UserLogs to delete.
     */
    limit?: number
  }

  /**
   * UserLog without action
   */
  export type UserLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLog
     */
    select?: UserLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLog
     */
    omit?: UserLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLogInclude<ExtArgs> | null
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
    full_data: 'full_data',
    organizationId: 'organizationId',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    fullname: 'fullname',
    username: 'username',
    designation: 'designation',
    tl: 'tl',
    am: 'am',
    manager: 'manager',
    shift: 'shift',
    datapopulation: 'datapopulation'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FtpScalarFieldEnum: {
    id: 'id',
    host: 'host',
    port: 'port',
    username: 'username',
    password: 'password',
    ftppath: 'ftppath',
    organizationId: 'organizationId',
    ocr: 'ocr',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FtpScalarFieldEnum = (typeof FtpScalarFieldEnum)[keyof typeof FtpScalarFieldEnum]


  export const OrganizationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    Org_ID: 'Org_ID'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const BatchScalarFieldEnum: {
    id: 'id',
    batchname: 'batchname',
    status: 'status',
    folderpath: 'folderpath',
    uniqueid: 'uniqueid',
    isactive: 'isactive',
    createdat: 'createdat',
    updatedat: 'updatedat',
    priority: 'priority',
    county: 'county',
    engineToPriority: 'engineToPriority',
    organizationId: 'organizationId'
  };

  export type BatchScalarFieldEnum = (typeof BatchScalarFieldEnum)[keyof typeof BatchScalarFieldEnum]


  export const ImagecollectionsScalarFieldEnum: {
    id: 'id',
    filename: 'filename',
    image: 'image',
    status: 'status',
    created_date: 'created_date',
    batchname: 'batchname',
    stage: 'stage',
    uniqueid: 'uniqueid',
    file_type: 'file_type',
    ocr_full_text: 'ocr_full_text',
    processed_date: 'processed_date',
    isactive: 'isactive',
    createdat: 'createdat',
    updatedat: 'updatedat',
    header_locked: 'header_locked',
    party_locked: 'party_locked',
    legal_locked: 'legal_locked',
    headerstatus: 'headerstatus',
    legalstatus: 'legalstatus',
    partystatus: 'partystatus',
    headerlocked_timing: 'headerlocked_timing',
    legallocked_timing: 'legallocked_timing',
    partylocked_timing: 'partylocked_timing',
    indexing_assigned: 'indexing_assigned',
    header_assigned: 'header_assigned',
    propertyindex_assigned: 'propertyindex_assigned',
    indexing_locked: 'indexing_locked',
    propertyindex_locked: 'propertyindex_locked',
    propertyindexstatus: 'propertyindexstatus',
    indexinglocked_timing: 'indexinglocked_timing',
    propertyindexlocked_timing: 'propertyindexlocked_timing',
    indexing_completed: 'indexing_completed',
    propertyindex_completed: 'propertyindex_completed',
    header_completed: 'header_completed',
    party_completed: 'party_completed',
    legal_completed: 'legal_completed',
    qc_locked: 'qc_locked',
    qc_assigned: 'qc_assigned',
    qc_completed: 'qc_completed',
    indexlocked_timing: 'indexlocked_timing',
    pilocked_timing: 'pilocked_timing',
    duplicatestatus: 'duplicatestatus',
    pi_pending_queue: 'pi_pending_queue',
    legal_pending_queue: 'legal_pending_queue',
    qcstatus: 'qcstatus',
    indexingcompleted_timing: 'indexingcompleted_timing',
    propertyindexcompleted_timing: 'propertyindexcompleted_timing',
    headercompleted_timing: 'headercompleted_timing',
    partycompleted_timing: 'partycompleted_timing',
    legalcompleted_timing: 'legalcompleted_timing',
    qccompleted_timing: 'qccompleted_timing',
    organizationId: 'organizationId',
    assigned: 'assigned',
    completed: 'completed',
    imagestatus: 'imagestatus',
    userid: 'userid'
  };

  export type ImagecollectionsScalarFieldEnum = (typeof ImagecollectionsScalarFieldEnum)[keyof typeof ImagecollectionsScalarFieldEnum]


  export const TemplateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    isActive: 'isActive',
    isDelete: 'isDelete',
    organizationId: 'organizationId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    orderno: 'orderno',
    client: 'client'
  };

  export type TemplateScalarFieldEnum = (typeof TemplateScalarFieldEnum)[keyof typeof TemplateScalarFieldEnum]


  export const TemplateFieldScalarFieldEnum: {
    id: 'id',
    templateId: 'templateId',
    type: 'type',
    icon: 'icon',
    label: 'label',
    properties: 'properties',
    parentId: 'parentId',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TemplateFieldScalarFieldEnum = (typeof TemplateFieldScalarFieldEnum)[keyof typeof TemplateFieldScalarFieldEnum]


  export const TemplateChildScalarFieldEnum: {
    id: 'id',
    templateFieldsId: 'templateFieldsId',
    type: 'type',
    icon: 'icon',
    label: 'label',
    properties: 'properties',
    parentId: 'parentId',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TemplateChildScalarFieldEnum = (typeof TemplateChildScalarFieldEnum)[keyof typeof TemplateChildScalarFieldEnum]


  export const FormSubmissionScalarFieldEnum: {
    id: 'id',
    image_name: 'image_name',
    batch_name: 'batch_name',
    field_name: 'field_name',
    field_value: 'field_value',
    level: 'level',
    user_id: 'user_id',
    created_date: 'created_date',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    organizationId: 'organizationId'
  };

  export type FormSubmissionScalarFieldEnum = (typeof FormSubmissionScalarFieldEnum)[keyof typeof FormSubmissionScalarFieldEnum]


  export const QcFormSubmissionScalarFieldEnum: {
    id: 'id',
    batch_name: 'batch_name',
    image_name: 'image_name',
    field_name: 'field_name',
    field_value: 'field_value',
    level: 'level',
    userid: 'userid',
    created_date: 'created_date',
    organizationid: 'organizationid',
    isactive: 'isactive',
    createdat: 'createdat',
    updatedat: 'updatedat'
  };

  export type QcFormSubmissionScalarFieldEnum = (typeof QcFormSubmissionScalarFieldEnum)[keyof typeof QcFormSubmissionScalarFieldEnum]


  export const UserLogScalarFieldEnum: {
    id: 'id',
    userid: 'userid',
    organizationid: 'organizationid',
    role: 'role',
    actiondate: 'actiondate',
    action: 'action'
  };

  export type UserLogScalarFieldEnum = (typeof UserLogScalarFieldEnum)[keyof typeof UserLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    full_data?: JsonFilter<"User">
    organizationId?: IntNullableFilter<"User"> | number | null
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    fullname?: StringNullableFilter<"User"> | string | null
    username?: StringNullableFilter<"User"> | string | null
    designation?: StringNullableFilter<"User"> | string | null
    tl?: StringNullableFilter<"User"> | string | null
    am?: StringNullableFilter<"User"> | string | null
    manager?: StringNullableFilter<"User"> | string | null
    shift?: StringNullableFilter<"User"> | string | null
    datapopulation?: StringNullableFilter<"User"> | string | null
    organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
    userLogs?: UserLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    full_data?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fullname?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    designation?: SortOrderInput | SortOrder
    tl?: SortOrderInput | SortOrder
    am?: SortOrderInput | SortOrder
    manager?: SortOrderInput | SortOrder
    shift?: SortOrderInput | SortOrder
    datapopulation?: SortOrderInput | SortOrder
    organization?: OrganizationOrderByWithRelationInput
    userLogs?: UserLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    full_data?: JsonFilter<"User">
    organizationId?: IntNullableFilter<"User"> | number | null
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    fullname?: StringNullableFilter<"User"> | string | null
    username?: StringNullableFilter<"User"> | string | null
    designation?: StringNullableFilter<"User"> | string | null
    tl?: StringNullableFilter<"User"> | string | null
    am?: StringNullableFilter<"User"> | string | null
    manager?: StringNullableFilter<"User"> | string | null
    shift?: StringNullableFilter<"User"> | string | null
    datapopulation?: StringNullableFilter<"User"> | string | null
    organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
    userLogs?: UserLogListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    full_data?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fullname?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    designation?: SortOrderInput | SortOrder
    tl?: SortOrderInput | SortOrder
    am?: SortOrderInput | SortOrder
    manager?: SortOrderInput | SortOrder
    shift?: SortOrderInput | SortOrder
    datapopulation?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    full_data?: JsonWithAggregatesFilter<"User">
    organizationId?: IntNullableWithAggregatesFilter<"User"> | number | null
    role?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    fullname?: StringNullableWithAggregatesFilter<"User"> | string | null
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    designation?: StringNullableWithAggregatesFilter<"User"> | string | null
    tl?: StringNullableWithAggregatesFilter<"User"> | string | null
    am?: StringNullableWithAggregatesFilter<"User"> | string | null
    manager?: StringNullableWithAggregatesFilter<"User"> | string | null
    shift?: StringNullableWithAggregatesFilter<"User"> | string | null
    datapopulation?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type ftpWhereInput = {
    AND?: ftpWhereInput | ftpWhereInput[]
    OR?: ftpWhereInput[]
    NOT?: ftpWhereInput | ftpWhereInput[]
    id?: IntFilter<"ftp"> | number
    host?: StringFilter<"ftp"> | string
    port?: IntFilter<"ftp"> | number
    username?: StringFilter<"ftp"> | string
    password?: StringFilter<"ftp"> | string
    ftppath?: StringFilter<"ftp"> | string
    organizationId?: IntFilter<"ftp"> | number
    ocr?: BoolFilter<"ftp"> | boolean
    createdAt?: DateTimeFilter<"ftp"> | Date | string
    updatedAt?: DateTimeFilter<"ftp"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }

  export type ftpOrderByWithRelationInput = {
    id?: SortOrder
    host?: SortOrder
    port?: SortOrder
    username?: SortOrder
    password?: SortOrder
    ftppath?: SortOrder
    organizationId?: SortOrder
    ocr?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
  }

  export type ftpWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ftpWhereInput | ftpWhereInput[]
    OR?: ftpWhereInput[]
    NOT?: ftpWhereInput | ftpWhereInput[]
    host?: StringFilter<"ftp"> | string
    port?: IntFilter<"ftp"> | number
    username?: StringFilter<"ftp"> | string
    password?: StringFilter<"ftp"> | string
    ftppath?: StringFilter<"ftp"> | string
    organizationId?: IntFilter<"ftp"> | number
    ocr?: BoolFilter<"ftp"> | boolean
    createdAt?: DateTimeFilter<"ftp"> | Date | string
    updatedAt?: DateTimeFilter<"ftp"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }, "id">

  export type ftpOrderByWithAggregationInput = {
    id?: SortOrder
    host?: SortOrder
    port?: SortOrder
    username?: SortOrder
    password?: SortOrder
    ftppath?: SortOrder
    organizationId?: SortOrder
    ocr?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ftpCountOrderByAggregateInput
    _avg?: ftpAvgOrderByAggregateInput
    _max?: ftpMaxOrderByAggregateInput
    _min?: ftpMinOrderByAggregateInput
    _sum?: ftpSumOrderByAggregateInput
  }

  export type ftpScalarWhereWithAggregatesInput = {
    AND?: ftpScalarWhereWithAggregatesInput | ftpScalarWhereWithAggregatesInput[]
    OR?: ftpScalarWhereWithAggregatesInput[]
    NOT?: ftpScalarWhereWithAggregatesInput | ftpScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ftp"> | number
    host?: StringWithAggregatesFilter<"ftp"> | string
    port?: IntWithAggregatesFilter<"ftp"> | number
    username?: StringWithAggregatesFilter<"ftp"> | string
    password?: StringWithAggregatesFilter<"ftp"> | string
    ftppath?: StringWithAggregatesFilter<"ftp"> | string
    organizationId?: IntWithAggregatesFilter<"ftp"> | number
    ocr?: BoolWithAggregatesFilter<"ftp"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ftp"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ftp"> | Date | string
  }

  export type OrganizationWhereInput = {
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    id?: IntFilter<"Organization"> | number
    name?: StringFilter<"Organization"> | string
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    Org_ID?: StringFilter<"Organization"> | string
    users?: UserListRelationFilter
    ftps?: FtpListRelationFilter
  }

  export type OrganizationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    Org_ID?: SortOrder
    users?: UserOrderByRelationAggregateInput
    ftps?: ftpOrderByRelationAggregateInput
  }

  export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    name?: StringFilter<"Organization"> | string
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    Org_ID?: StringFilter<"Organization"> | string
    users?: UserListRelationFilter
    ftps?: FtpListRelationFilter
  }, "id">

  export type OrganizationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    Org_ID?: SortOrder
    _count?: OrganizationCountOrderByAggregateInput
    _avg?: OrganizationAvgOrderByAggregateInput
    _max?: OrganizationMaxOrderByAggregateInput
    _min?: OrganizationMinOrderByAggregateInput
    _sum?: OrganizationSumOrderByAggregateInput
  }

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    OR?: OrganizationScalarWhereWithAggregatesInput[]
    NOT?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Organization"> | number
    name?: StringWithAggregatesFilter<"Organization"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
    Org_ID?: StringWithAggregatesFilter<"Organization"> | string
  }

  export type BatchWhereInput = {
    AND?: BatchWhereInput | BatchWhereInput[]
    OR?: BatchWhereInput[]
    NOT?: BatchWhereInput | BatchWhereInput[]
    id?: IntFilter<"Batch"> | number
    batchname?: StringFilter<"Batch"> | string
    status?: IntFilter<"Batch"> | number
    folderpath?: StringFilter<"Batch"> | string
    uniqueid?: IntFilter<"Batch"> | number
    isactive?: BoolFilter<"Batch"> | boolean
    createdat?: DateTimeFilter<"Batch"> | Date | string
    updatedat?: DateTimeFilter<"Batch"> | Date | string
    priority?: IntNullableFilter<"Batch"> | number | null
    county?: StringNullableFilter<"Batch"> | string | null
    engineToPriority?: IntNullableFilter<"Batch"> | number | null
    organizationId?: IntFilter<"Batch"> | number
  }

  export type BatchOrderByWithRelationInput = {
    id?: SortOrder
    batchname?: SortOrder
    status?: SortOrder
    folderpath?: SortOrder
    uniqueid?: SortOrder
    isactive?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
    priority?: SortOrderInput | SortOrder
    county?: SortOrderInput | SortOrder
    engineToPriority?: SortOrderInput | SortOrder
    organizationId?: SortOrder
  }

  export type BatchWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BatchWhereInput | BatchWhereInput[]
    OR?: BatchWhereInput[]
    NOT?: BatchWhereInput | BatchWhereInput[]
    batchname?: StringFilter<"Batch"> | string
    status?: IntFilter<"Batch"> | number
    folderpath?: StringFilter<"Batch"> | string
    uniqueid?: IntFilter<"Batch"> | number
    isactive?: BoolFilter<"Batch"> | boolean
    createdat?: DateTimeFilter<"Batch"> | Date | string
    updatedat?: DateTimeFilter<"Batch"> | Date | string
    priority?: IntNullableFilter<"Batch"> | number | null
    county?: StringNullableFilter<"Batch"> | string | null
    engineToPriority?: IntNullableFilter<"Batch"> | number | null
    organizationId?: IntFilter<"Batch"> | number
  }, "id">

  export type BatchOrderByWithAggregationInput = {
    id?: SortOrder
    batchname?: SortOrder
    status?: SortOrder
    folderpath?: SortOrder
    uniqueid?: SortOrder
    isactive?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
    priority?: SortOrderInput | SortOrder
    county?: SortOrderInput | SortOrder
    engineToPriority?: SortOrderInput | SortOrder
    organizationId?: SortOrder
    _count?: BatchCountOrderByAggregateInput
    _avg?: BatchAvgOrderByAggregateInput
    _max?: BatchMaxOrderByAggregateInput
    _min?: BatchMinOrderByAggregateInput
    _sum?: BatchSumOrderByAggregateInput
  }

  export type BatchScalarWhereWithAggregatesInput = {
    AND?: BatchScalarWhereWithAggregatesInput | BatchScalarWhereWithAggregatesInput[]
    OR?: BatchScalarWhereWithAggregatesInput[]
    NOT?: BatchScalarWhereWithAggregatesInput | BatchScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Batch"> | number
    batchname?: StringWithAggregatesFilter<"Batch"> | string
    status?: IntWithAggregatesFilter<"Batch"> | number
    folderpath?: StringWithAggregatesFilter<"Batch"> | string
    uniqueid?: IntWithAggregatesFilter<"Batch"> | number
    isactive?: BoolWithAggregatesFilter<"Batch"> | boolean
    createdat?: DateTimeWithAggregatesFilter<"Batch"> | Date | string
    updatedat?: DateTimeWithAggregatesFilter<"Batch"> | Date | string
    priority?: IntNullableWithAggregatesFilter<"Batch"> | number | null
    county?: StringNullableWithAggregatesFilter<"Batch"> | string | null
    engineToPriority?: IntNullableWithAggregatesFilter<"Batch"> | number | null
    organizationId?: IntWithAggregatesFilter<"Batch"> | number
  }

  export type ImagecollectionsWhereInput = {
    AND?: ImagecollectionsWhereInput | ImagecollectionsWhereInput[]
    OR?: ImagecollectionsWhereInput[]
    NOT?: ImagecollectionsWhereInput | ImagecollectionsWhereInput[]
    id?: IntFilter<"Imagecollections"> | number
    filename?: StringFilter<"Imagecollections"> | string
    image?: StringFilter<"Imagecollections"> | string
    status?: StringFilter<"Imagecollections"> | string
    created_date?: DateTimeFilter<"Imagecollections"> | Date | string
    batchname?: StringFilter<"Imagecollections"> | string
    stage?: StringFilter<"Imagecollections"> | string
    uniqueid?: IntFilter<"Imagecollections"> | number
    file_type?: StringFilter<"Imagecollections"> | string
    ocr_full_text?: StringFilter<"Imagecollections"> | string
    processed_date?: DateTimeFilter<"Imagecollections"> | Date | string
    isactive?: BoolFilter<"Imagecollections"> | boolean
    createdat?: DateTimeFilter<"Imagecollections"> | Date | string
    updatedat?: DateTimeFilter<"Imagecollections"> | Date | string
    header_locked?: BoolFilter<"Imagecollections"> | boolean
    party_locked?: BoolFilter<"Imagecollections"> | boolean
    legal_locked?: BoolFilter<"Imagecollections"> | boolean
    headerstatus?: StringFilter<"Imagecollections"> | string
    legalstatus?: StringFilter<"Imagecollections"> | string
    partystatus?: StringFilter<"Imagecollections"> | string
    headerlocked_timing?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    legallocked_timing?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    partylocked_timing?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    indexing_assigned?: IntNullableFilter<"Imagecollections"> | number | null
    header_assigned?: IntNullableFilter<"Imagecollections"> | number | null
    propertyindex_assigned?: IntNullableFilter<"Imagecollections"> | number | null
    indexing_locked?: BoolNullableFilter<"Imagecollections"> | boolean | null
    propertyindex_locked?: BoolNullableFilter<"Imagecollections"> | boolean | null
    propertyindexstatus?: StringFilter<"Imagecollections"> | string
    indexinglocked_timing?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    propertyindexlocked_timing?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    indexing_completed?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    propertyindex_completed?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    header_completed?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    party_completed?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    legal_completed?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    qc_locked?: BoolNullableFilter<"Imagecollections"> | boolean | null
    qc_assigned?: IntNullableFilter<"Imagecollections"> | number | null
    qc_completed?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    indexlocked_timing?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    pilocked_timing?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    duplicatestatus?: StringFilter<"Imagecollections"> | string
    pi_pending_queue?: StringFilter<"Imagecollections"> | string
    legal_pending_queue?: StringFilter<"Imagecollections"> | string
    qcstatus?: StringFilter<"Imagecollections"> | string
    indexingcompleted_timing?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    propertyindexcompleted_timing?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    headercompleted_timing?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    partycompleted_timing?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    legalcompleted_timing?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    qccompleted_timing?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    organizationId?: IntFilter<"Imagecollections"> | number
    assigned?: StringNullableFilter<"Imagecollections"> | string | null
    completed?: StringNullableFilter<"Imagecollections"> | string | null
    imagestatus?: BoolNullableFilter<"Imagecollections"> | boolean | null
    userid?: StringNullableFilter<"Imagecollections"> | string | null
  }

  export type ImagecollectionsOrderByWithRelationInput = {
    id?: SortOrder
    filename?: SortOrder
    image?: SortOrder
    status?: SortOrder
    created_date?: SortOrder
    batchname?: SortOrder
    stage?: SortOrder
    uniqueid?: SortOrder
    file_type?: SortOrder
    ocr_full_text?: SortOrder
    processed_date?: SortOrder
    isactive?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
    header_locked?: SortOrder
    party_locked?: SortOrder
    legal_locked?: SortOrder
    headerstatus?: SortOrder
    legalstatus?: SortOrder
    partystatus?: SortOrder
    headerlocked_timing?: SortOrderInput | SortOrder
    legallocked_timing?: SortOrderInput | SortOrder
    partylocked_timing?: SortOrderInput | SortOrder
    indexing_assigned?: SortOrderInput | SortOrder
    header_assigned?: SortOrderInput | SortOrder
    propertyindex_assigned?: SortOrderInput | SortOrder
    indexing_locked?: SortOrderInput | SortOrder
    propertyindex_locked?: SortOrderInput | SortOrder
    propertyindexstatus?: SortOrder
    indexinglocked_timing?: SortOrderInput | SortOrder
    propertyindexlocked_timing?: SortOrderInput | SortOrder
    indexing_completed?: SortOrderInput | SortOrder
    propertyindex_completed?: SortOrderInput | SortOrder
    header_completed?: SortOrderInput | SortOrder
    party_completed?: SortOrderInput | SortOrder
    legal_completed?: SortOrderInput | SortOrder
    qc_locked?: SortOrderInput | SortOrder
    qc_assigned?: SortOrderInput | SortOrder
    qc_completed?: SortOrderInput | SortOrder
    indexlocked_timing?: SortOrderInput | SortOrder
    pilocked_timing?: SortOrderInput | SortOrder
    duplicatestatus?: SortOrder
    pi_pending_queue?: SortOrder
    legal_pending_queue?: SortOrder
    qcstatus?: SortOrder
    indexingcompleted_timing?: SortOrderInput | SortOrder
    propertyindexcompleted_timing?: SortOrderInput | SortOrder
    headercompleted_timing?: SortOrderInput | SortOrder
    partycompleted_timing?: SortOrderInput | SortOrder
    legalcompleted_timing?: SortOrderInput | SortOrder
    qccompleted_timing?: SortOrderInput | SortOrder
    organizationId?: SortOrder
    assigned?: SortOrderInput | SortOrder
    completed?: SortOrderInput | SortOrder
    imagestatus?: SortOrderInput | SortOrder
    userid?: SortOrderInput | SortOrder
  }

  export type ImagecollectionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ImagecollectionsWhereInput | ImagecollectionsWhereInput[]
    OR?: ImagecollectionsWhereInput[]
    NOT?: ImagecollectionsWhereInput | ImagecollectionsWhereInput[]
    filename?: StringFilter<"Imagecollections"> | string
    image?: StringFilter<"Imagecollections"> | string
    status?: StringFilter<"Imagecollections"> | string
    created_date?: DateTimeFilter<"Imagecollections"> | Date | string
    batchname?: StringFilter<"Imagecollections"> | string
    stage?: StringFilter<"Imagecollections"> | string
    uniqueid?: IntFilter<"Imagecollections"> | number
    file_type?: StringFilter<"Imagecollections"> | string
    ocr_full_text?: StringFilter<"Imagecollections"> | string
    processed_date?: DateTimeFilter<"Imagecollections"> | Date | string
    isactive?: BoolFilter<"Imagecollections"> | boolean
    createdat?: DateTimeFilter<"Imagecollections"> | Date | string
    updatedat?: DateTimeFilter<"Imagecollections"> | Date | string
    header_locked?: BoolFilter<"Imagecollections"> | boolean
    party_locked?: BoolFilter<"Imagecollections"> | boolean
    legal_locked?: BoolFilter<"Imagecollections"> | boolean
    headerstatus?: StringFilter<"Imagecollections"> | string
    legalstatus?: StringFilter<"Imagecollections"> | string
    partystatus?: StringFilter<"Imagecollections"> | string
    headerlocked_timing?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    legallocked_timing?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    partylocked_timing?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    indexing_assigned?: IntNullableFilter<"Imagecollections"> | number | null
    header_assigned?: IntNullableFilter<"Imagecollections"> | number | null
    propertyindex_assigned?: IntNullableFilter<"Imagecollections"> | number | null
    indexing_locked?: BoolNullableFilter<"Imagecollections"> | boolean | null
    propertyindex_locked?: BoolNullableFilter<"Imagecollections"> | boolean | null
    propertyindexstatus?: StringFilter<"Imagecollections"> | string
    indexinglocked_timing?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    propertyindexlocked_timing?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    indexing_completed?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    propertyindex_completed?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    header_completed?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    party_completed?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    legal_completed?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    qc_locked?: BoolNullableFilter<"Imagecollections"> | boolean | null
    qc_assigned?: IntNullableFilter<"Imagecollections"> | number | null
    qc_completed?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    indexlocked_timing?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    pilocked_timing?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    duplicatestatus?: StringFilter<"Imagecollections"> | string
    pi_pending_queue?: StringFilter<"Imagecollections"> | string
    legal_pending_queue?: StringFilter<"Imagecollections"> | string
    qcstatus?: StringFilter<"Imagecollections"> | string
    indexingcompleted_timing?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    propertyindexcompleted_timing?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    headercompleted_timing?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    partycompleted_timing?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    legalcompleted_timing?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    qccompleted_timing?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    organizationId?: IntFilter<"Imagecollections"> | number
    assigned?: StringNullableFilter<"Imagecollections"> | string | null
    completed?: StringNullableFilter<"Imagecollections"> | string | null
    imagestatus?: BoolNullableFilter<"Imagecollections"> | boolean | null
    userid?: StringNullableFilter<"Imagecollections"> | string | null
  }, "id">

  export type ImagecollectionsOrderByWithAggregationInput = {
    id?: SortOrder
    filename?: SortOrder
    image?: SortOrder
    status?: SortOrder
    created_date?: SortOrder
    batchname?: SortOrder
    stage?: SortOrder
    uniqueid?: SortOrder
    file_type?: SortOrder
    ocr_full_text?: SortOrder
    processed_date?: SortOrder
    isactive?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
    header_locked?: SortOrder
    party_locked?: SortOrder
    legal_locked?: SortOrder
    headerstatus?: SortOrder
    legalstatus?: SortOrder
    partystatus?: SortOrder
    headerlocked_timing?: SortOrderInput | SortOrder
    legallocked_timing?: SortOrderInput | SortOrder
    partylocked_timing?: SortOrderInput | SortOrder
    indexing_assigned?: SortOrderInput | SortOrder
    header_assigned?: SortOrderInput | SortOrder
    propertyindex_assigned?: SortOrderInput | SortOrder
    indexing_locked?: SortOrderInput | SortOrder
    propertyindex_locked?: SortOrderInput | SortOrder
    propertyindexstatus?: SortOrder
    indexinglocked_timing?: SortOrderInput | SortOrder
    propertyindexlocked_timing?: SortOrderInput | SortOrder
    indexing_completed?: SortOrderInput | SortOrder
    propertyindex_completed?: SortOrderInput | SortOrder
    header_completed?: SortOrderInput | SortOrder
    party_completed?: SortOrderInput | SortOrder
    legal_completed?: SortOrderInput | SortOrder
    qc_locked?: SortOrderInput | SortOrder
    qc_assigned?: SortOrderInput | SortOrder
    qc_completed?: SortOrderInput | SortOrder
    indexlocked_timing?: SortOrderInput | SortOrder
    pilocked_timing?: SortOrderInput | SortOrder
    duplicatestatus?: SortOrder
    pi_pending_queue?: SortOrder
    legal_pending_queue?: SortOrder
    qcstatus?: SortOrder
    indexingcompleted_timing?: SortOrderInput | SortOrder
    propertyindexcompleted_timing?: SortOrderInput | SortOrder
    headercompleted_timing?: SortOrderInput | SortOrder
    partycompleted_timing?: SortOrderInput | SortOrder
    legalcompleted_timing?: SortOrderInput | SortOrder
    qccompleted_timing?: SortOrderInput | SortOrder
    organizationId?: SortOrder
    assigned?: SortOrderInput | SortOrder
    completed?: SortOrderInput | SortOrder
    imagestatus?: SortOrderInput | SortOrder
    userid?: SortOrderInput | SortOrder
    _count?: ImagecollectionsCountOrderByAggregateInput
    _avg?: ImagecollectionsAvgOrderByAggregateInput
    _max?: ImagecollectionsMaxOrderByAggregateInput
    _min?: ImagecollectionsMinOrderByAggregateInput
    _sum?: ImagecollectionsSumOrderByAggregateInput
  }

  export type ImagecollectionsScalarWhereWithAggregatesInput = {
    AND?: ImagecollectionsScalarWhereWithAggregatesInput | ImagecollectionsScalarWhereWithAggregatesInput[]
    OR?: ImagecollectionsScalarWhereWithAggregatesInput[]
    NOT?: ImagecollectionsScalarWhereWithAggregatesInput | ImagecollectionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Imagecollections"> | number
    filename?: StringWithAggregatesFilter<"Imagecollections"> | string
    image?: StringWithAggregatesFilter<"Imagecollections"> | string
    status?: StringWithAggregatesFilter<"Imagecollections"> | string
    created_date?: DateTimeWithAggregatesFilter<"Imagecollections"> | Date | string
    batchname?: StringWithAggregatesFilter<"Imagecollections"> | string
    stage?: StringWithAggregatesFilter<"Imagecollections"> | string
    uniqueid?: IntWithAggregatesFilter<"Imagecollections"> | number
    file_type?: StringWithAggregatesFilter<"Imagecollections"> | string
    ocr_full_text?: StringWithAggregatesFilter<"Imagecollections"> | string
    processed_date?: DateTimeWithAggregatesFilter<"Imagecollections"> | Date | string
    isactive?: BoolWithAggregatesFilter<"Imagecollections"> | boolean
    createdat?: DateTimeWithAggregatesFilter<"Imagecollections"> | Date | string
    updatedat?: DateTimeWithAggregatesFilter<"Imagecollections"> | Date | string
    header_locked?: BoolWithAggregatesFilter<"Imagecollections"> | boolean
    party_locked?: BoolWithAggregatesFilter<"Imagecollections"> | boolean
    legal_locked?: BoolWithAggregatesFilter<"Imagecollections"> | boolean
    headerstatus?: StringWithAggregatesFilter<"Imagecollections"> | string
    legalstatus?: StringWithAggregatesFilter<"Imagecollections"> | string
    partystatus?: StringWithAggregatesFilter<"Imagecollections"> | string
    headerlocked_timing?: DateTimeNullableWithAggregatesFilter<"Imagecollections"> | Date | string | null
    legallocked_timing?: DateTimeNullableWithAggregatesFilter<"Imagecollections"> | Date | string | null
    partylocked_timing?: DateTimeNullableWithAggregatesFilter<"Imagecollections"> | Date | string | null
    indexing_assigned?: IntNullableWithAggregatesFilter<"Imagecollections"> | number | null
    header_assigned?: IntNullableWithAggregatesFilter<"Imagecollections"> | number | null
    propertyindex_assigned?: IntNullableWithAggregatesFilter<"Imagecollections"> | number | null
    indexing_locked?: BoolNullableWithAggregatesFilter<"Imagecollections"> | boolean | null
    propertyindex_locked?: BoolNullableWithAggregatesFilter<"Imagecollections"> | boolean | null
    propertyindexstatus?: StringWithAggregatesFilter<"Imagecollections"> | string
    indexinglocked_timing?: DateTimeNullableWithAggregatesFilter<"Imagecollections"> | Date | string | null
    propertyindexlocked_timing?: DateTimeNullableWithAggregatesFilter<"Imagecollections"> | Date | string | null
    indexing_completed?: DateTimeNullableWithAggregatesFilter<"Imagecollections"> | Date | string | null
    propertyindex_completed?: DateTimeNullableWithAggregatesFilter<"Imagecollections"> | Date | string | null
    header_completed?: DateTimeNullableWithAggregatesFilter<"Imagecollections"> | Date | string | null
    party_completed?: DateTimeNullableWithAggregatesFilter<"Imagecollections"> | Date | string | null
    legal_completed?: DateTimeNullableWithAggregatesFilter<"Imagecollections"> | Date | string | null
    qc_locked?: BoolNullableWithAggregatesFilter<"Imagecollections"> | boolean | null
    qc_assigned?: IntNullableWithAggregatesFilter<"Imagecollections"> | number | null
    qc_completed?: DateTimeNullableWithAggregatesFilter<"Imagecollections"> | Date | string | null
    indexlocked_timing?: DateTimeNullableWithAggregatesFilter<"Imagecollections"> | Date | string | null
    pilocked_timing?: DateTimeNullableWithAggregatesFilter<"Imagecollections"> | Date | string | null
    duplicatestatus?: StringWithAggregatesFilter<"Imagecollections"> | string
    pi_pending_queue?: StringWithAggregatesFilter<"Imagecollections"> | string
    legal_pending_queue?: StringWithAggregatesFilter<"Imagecollections"> | string
    qcstatus?: StringWithAggregatesFilter<"Imagecollections"> | string
    indexingcompleted_timing?: DateTimeNullableWithAggregatesFilter<"Imagecollections"> | Date | string | null
    propertyindexcompleted_timing?: DateTimeNullableWithAggregatesFilter<"Imagecollections"> | Date | string | null
    headercompleted_timing?: DateTimeNullableWithAggregatesFilter<"Imagecollections"> | Date | string | null
    partycompleted_timing?: DateTimeNullableWithAggregatesFilter<"Imagecollections"> | Date | string | null
    legalcompleted_timing?: DateTimeNullableWithAggregatesFilter<"Imagecollections"> | Date | string | null
    qccompleted_timing?: DateTimeNullableWithAggregatesFilter<"Imagecollections"> | Date | string | null
    organizationId?: IntWithAggregatesFilter<"Imagecollections"> | number
    assigned?: StringNullableWithAggregatesFilter<"Imagecollections"> | string | null
    completed?: StringNullableWithAggregatesFilter<"Imagecollections"> | string | null
    imagestatus?: BoolNullableWithAggregatesFilter<"Imagecollections"> | boolean | null
    userid?: StringNullableWithAggregatesFilter<"Imagecollections"> | string | null
  }

  export type TemplateWhereInput = {
    AND?: TemplateWhereInput | TemplateWhereInput[]
    OR?: TemplateWhereInput[]
    NOT?: TemplateWhereInput | TemplateWhereInput[]
    id?: IntFilter<"Template"> | number
    name?: StringFilter<"Template"> | string
    isActive?: BoolFilter<"Template"> | boolean
    isDelete?: BoolFilter<"Template"> | boolean
    organizationId?: IntNullableFilter<"Template"> | number | null
    createdAt?: DateTimeFilter<"Template"> | Date | string
    updatedAt?: DateTimeFilter<"Template"> | Date | string
    orderno?: IntNullableFilter<"Template"> | number | null
    client?: BoolFilter<"Template"> | boolean
    templateFields?: TemplateFieldListRelationFilter
  }

  export type TemplateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    isDelete?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderno?: SortOrderInput | SortOrder
    client?: SortOrder
    templateFields?: TemplateFieldOrderByRelationAggregateInput
  }

  export type TemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TemplateWhereInput | TemplateWhereInput[]
    OR?: TemplateWhereInput[]
    NOT?: TemplateWhereInput | TemplateWhereInput[]
    name?: StringFilter<"Template"> | string
    isActive?: BoolFilter<"Template"> | boolean
    isDelete?: BoolFilter<"Template"> | boolean
    organizationId?: IntNullableFilter<"Template"> | number | null
    createdAt?: DateTimeFilter<"Template"> | Date | string
    updatedAt?: DateTimeFilter<"Template"> | Date | string
    orderno?: IntNullableFilter<"Template"> | number | null
    client?: BoolFilter<"Template"> | boolean
    templateFields?: TemplateFieldListRelationFilter
  }, "id">

  export type TemplateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    isDelete?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderno?: SortOrderInput | SortOrder
    client?: SortOrder
    _count?: TemplateCountOrderByAggregateInput
    _avg?: TemplateAvgOrderByAggregateInput
    _max?: TemplateMaxOrderByAggregateInput
    _min?: TemplateMinOrderByAggregateInput
    _sum?: TemplateSumOrderByAggregateInput
  }

  export type TemplateScalarWhereWithAggregatesInput = {
    AND?: TemplateScalarWhereWithAggregatesInput | TemplateScalarWhereWithAggregatesInput[]
    OR?: TemplateScalarWhereWithAggregatesInput[]
    NOT?: TemplateScalarWhereWithAggregatesInput | TemplateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Template"> | number
    name?: StringWithAggregatesFilter<"Template"> | string
    isActive?: BoolWithAggregatesFilter<"Template"> | boolean
    isDelete?: BoolWithAggregatesFilter<"Template"> | boolean
    organizationId?: IntNullableWithAggregatesFilter<"Template"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Template"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Template"> | Date | string
    orderno?: IntNullableWithAggregatesFilter<"Template"> | number | null
    client?: BoolWithAggregatesFilter<"Template"> | boolean
  }

  export type TemplateFieldWhereInput = {
    AND?: TemplateFieldWhereInput | TemplateFieldWhereInput[]
    OR?: TemplateFieldWhereInput[]
    NOT?: TemplateFieldWhereInput | TemplateFieldWhereInput[]
    id?: IntFilter<"TemplateField"> | number
    templateId?: IntFilter<"TemplateField"> | number
    type?: StringFilter<"TemplateField"> | string
    icon?: StringFilter<"TemplateField"> | string
    label?: StringFilter<"TemplateField"> | string
    properties?: StringFilter<"TemplateField"> | string
    parentId?: StringNullableFilter<"TemplateField"> | string | null
    isActive?: BoolFilter<"TemplateField"> | boolean
    createdAt?: DateTimeFilter<"TemplateField"> | Date | string
    updatedAt?: DateTimeFilter<"TemplateField"> | Date | string
    template?: XOR<TemplateScalarRelationFilter, TemplateWhereInput>
    children?: TemplateChildListRelationFilter
  }

  export type TemplateFieldOrderByWithRelationInput = {
    id?: SortOrder
    templateId?: SortOrder
    type?: SortOrder
    icon?: SortOrder
    label?: SortOrder
    properties?: SortOrder
    parentId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    template?: TemplateOrderByWithRelationInput
    children?: TemplateChildOrderByRelationAggregateInput
  }

  export type TemplateFieldWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TemplateFieldWhereInput | TemplateFieldWhereInput[]
    OR?: TemplateFieldWhereInput[]
    NOT?: TemplateFieldWhereInput | TemplateFieldWhereInput[]
    templateId?: IntFilter<"TemplateField"> | number
    type?: StringFilter<"TemplateField"> | string
    icon?: StringFilter<"TemplateField"> | string
    label?: StringFilter<"TemplateField"> | string
    properties?: StringFilter<"TemplateField"> | string
    parentId?: StringNullableFilter<"TemplateField"> | string | null
    isActive?: BoolFilter<"TemplateField"> | boolean
    createdAt?: DateTimeFilter<"TemplateField"> | Date | string
    updatedAt?: DateTimeFilter<"TemplateField"> | Date | string
    template?: XOR<TemplateScalarRelationFilter, TemplateWhereInput>
    children?: TemplateChildListRelationFilter
  }, "id">

  export type TemplateFieldOrderByWithAggregationInput = {
    id?: SortOrder
    templateId?: SortOrder
    type?: SortOrder
    icon?: SortOrder
    label?: SortOrder
    properties?: SortOrder
    parentId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TemplateFieldCountOrderByAggregateInput
    _avg?: TemplateFieldAvgOrderByAggregateInput
    _max?: TemplateFieldMaxOrderByAggregateInput
    _min?: TemplateFieldMinOrderByAggregateInput
    _sum?: TemplateFieldSumOrderByAggregateInput
  }

  export type TemplateFieldScalarWhereWithAggregatesInput = {
    AND?: TemplateFieldScalarWhereWithAggregatesInput | TemplateFieldScalarWhereWithAggregatesInput[]
    OR?: TemplateFieldScalarWhereWithAggregatesInput[]
    NOT?: TemplateFieldScalarWhereWithAggregatesInput | TemplateFieldScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TemplateField"> | number
    templateId?: IntWithAggregatesFilter<"TemplateField"> | number
    type?: StringWithAggregatesFilter<"TemplateField"> | string
    icon?: StringWithAggregatesFilter<"TemplateField"> | string
    label?: StringWithAggregatesFilter<"TemplateField"> | string
    properties?: StringWithAggregatesFilter<"TemplateField"> | string
    parentId?: StringNullableWithAggregatesFilter<"TemplateField"> | string | null
    isActive?: BoolWithAggregatesFilter<"TemplateField"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"TemplateField"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TemplateField"> | Date | string
  }

  export type TemplateChildWhereInput = {
    AND?: TemplateChildWhereInput | TemplateChildWhereInput[]
    OR?: TemplateChildWhereInput[]
    NOT?: TemplateChildWhereInput | TemplateChildWhereInput[]
    id?: IntFilter<"TemplateChild"> | number
    templateFieldsId?: IntFilter<"TemplateChild"> | number
    type?: StringFilter<"TemplateChild"> | string
    icon?: StringFilter<"TemplateChild"> | string
    label?: StringFilter<"TemplateChild"> | string
    properties?: StringFilter<"TemplateChild"> | string
    parentId?: StringNullableFilter<"TemplateChild"> | string | null
    isActive?: BoolFilter<"TemplateChild"> | boolean
    createdAt?: DateTimeFilter<"TemplateChild"> | Date | string
    updatedAt?: DateTimeFilter<"TemplateChild"> | Date | string
    templateField?: XOR<TemplateFieldScalarRelationFilter, TemplateFieldWhereInput>
  }

  export type TemplateChildOrderByWithRelationInput = {
    id?: SortOrder
    templateFieldsId?: SortOrder
    type?: SortOrder
    icon?: SortOrder
    label?: SortOrder
    properties?: SortOrder
    parentId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    templateField?: TemplateFieldOrderByWithRelationInput
  }

  export type TemplateChildWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TemplateChildWhereInput | TemplateChildWhereInput[]
    OR?: TemplateChildWhereInput[]
    NOT?: TemplateChildWhereInput | TemplateChildWhereInput[]
    templateFieldsId?: IntFilter<"TemplateChild"> | number
    type?: StringFilter<"TemplateChild"> | string
    icon?: StringFilter<"TemplateChild"> | string
    label?: StringFilter<"TemplateChild"> | string
    properties?: StringFilter<"TemplateChild"> | string
    parentId?: StringNullableFilter<"TemplateChild"> | string | null
    isActive?: BoolFilter<"TemplateChild"> | boolean
    createdAt?: DateTimeFilter<"TemplateChild"> | Date | string
    updatedAt?: DateTimeFilter<"TemplateChild"> | Date | string
    templateField?: XOR<TemplateFieldScalarRelationFilter, TemplateFieldWhereInput>
  }, "id">

  export type TemplateChildOrderByWithAggregationInput = {
    id?: SortOrder
    templateFieldsId?: SortOrder
    type?: SortOrder
    icon?: SortOrder
    label?: SortOrder
    properties?: SortOrder
    parentId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TemplateChildCountOrderByAggregateInput
    _avg?: TemplateChildAvgOrderByAggregateInput
    _max?: TemplateChildMaxOrderByAggregateInput
    _min?: TemplateChildMinOrderByAggregateInput
    _sum?: TemplateChildSumOrderByAggregateInput
  }

  export type TemplateChildScalarWhereWithAggregatesInput = {
    AND?: TemplateChildScalarWhereWithAggregatesInput | TemplateChildScalarWhereWithAggregatesInput[]
    OR?: TemplateChildScalarWhereWithAggregatesInput[]
    NOT?: TemplateChildScalarWhereWithAggregatesInput | TemplateChildScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TemplateChild"> | number
    templateFieldsId?: IntWithAggregatesFilter<"TemplateChild"> | number
    type?: StringWithAggregatesFilter<"TemplateChild"> | string
    icon?: StringWithAggregatesFilter<"TemplateChild"> | string
    label?: StringWithAggregatesFilter<"TemplateChild"> | string
    properties?: StringWithAggregatesFilter<"TemplateChild"> | string
    parentId?: StringNullableWithAggregatesFilter<"TemplateChild"> | string | null
    isActive?: BoolWithAggregatesFilter<"TemplateChild"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"TemplateChild"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TemplateChild"> | Date | string
  }

  export type FormSubmissionWhereInput = {
    AND?: FormSubmissionWhereInput | FormSubmissionWhereInput[]
    OR?: FormSubmissionWhereInput[]
    NOT?: FormSubmissionWhereInput | FormSubmissionWhereInput[]
    id?: IntFilter<"FormSubmission"> | number
    image_name?: StringFilter<"FormSubmission"> | string
    batch_name?: StringFilter<"FormSubmission"> | string
    field_name?: StringFilter<"FormSubmission"> | string
    field_value?: StringFilter<"FormSubmission"> | string
    level?: StringFilter<"FormSubmission"> | string
    user_id?: StringFilter<"FormSubmission"> | string
    created_date?: DateTimeFilter<"FormSubmission"> | Date | string
    isActive?: BoolFilter<"FormSubmission"> | boolean
    createdAt?: DateTimeFilter<"FormSubmission"> | Date | string
    updatedAt?: DateTimeFilter<"FormSubmission"> | Date | string
    organizationId?: IntFilter<"FormSubmission"> | number
  }

  export type FormSubmissionOrderByWithRelationInput = {
    id?: SortOrder
    image_name?: SortOrder
    batch_name?: SortOrder
    field_name?: SortOrder
    field_value?: SortOrder
    level?: SortOrder
    user_id?: SortOrder
    created_date?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrder
  }

  export type FormSubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FormSubmissionWhereInput | FormSubmissionWhereInput[]
    OR?: FormSubmissionWhereInput[]
    NOT?: FormSubmissionWhereInput | FormSubmissionWhereInput[]
    image_name?: StringFilter<"FormSubmission"> | string
    batch_name?: StringFilter<"FormSubmission"> | string
    field_name?: StringFilter<"FormSubmission"> | string
    field_value?: StringFilter<"FormSubmission"> | string
    level?: StringFilter<"FormSubmission"> | string
    user_id?: StringFilter<"FormSubmission"> | string
    created_date?: DateTimeFilter<"FormSubmission"> | Date | string
    isActive?: BoolFilter<"FormSubmission"> | boolean
    createdAt?: DateTimeFilter<"FormSubmission"> | Date | string
    updatedAt?: DateTimeFilter<"FormSubmission"> | Date | string
    organizationId?: IntFilter<"FormSubmission"> | number
  }, "id">

  export type FormSubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    image_name?: SortOrder
    batch_name?: SortOrder
    field_name?: SortOrder
    field_value?: SortOrder
    level?: SortOrder
    user_id?: SortOrder
    created_date?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrder
    _count?: FormSubmissionCountOrderByAggregateInput
    _avg?: FormSubmissionAvgOrderByAggregateInput
    _max?: FormSubmissionMaxOrderByAggregateInput
    _min?: FormSubmissionMinOrderByAggregateInput
    _sum?: FormSubmissionSumOrderByAggregateInput
  }

  export type FormSubmissionScalarWhereWithAggregatesInput = {
    AND?: FormSubmissionScalarWhereWithAggregatesInput | FormSubmissionScalarWhereWithAggregatesInput[]
    OR?: FormSubmissionScalarWhereWithAggregatesInput[]
    NOT?: FormSubmissionScalarWhereWithAggregatesInput | FormSubmissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FormSubmission"> | number
    image_name?: StringWithAggregatesFilter<"FormSubmission"> | string
    batch_name?: StringWithAggregatesFilter<"FormSubmission"> | string
    field_name?: StringWithAggregatesFilter<"FormSubmission"> | string
    field_value?: StringWithAggregatesFilter<"FormSubmission"> | string
    level?: StringWithAggregatesFilter<"FormSubmission"> | string
    user_id?: StringWithAggregatesFilter<"FormSubmission"> | string
    created_date?: DateTimeWithAggregatesFilter<"FormSubmission"> | Date | string
    isActive?: BoolWithAggregatesFilter<"FormSubmission"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"FormSubmission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FormSubmission"> | Date | string
    organizationId?: IntWithAggregatesFilter<"FormSubmission"> | number
  }

  export type QcFormSubmissionWhereInput = {
    AND?: QcFormSubmissionWhereInput | QcFormSubmissionWhereInput[]
    OR?: QcFormSubmissionWhereInput[]
    NOT?: QcFormSubmissionWhereInput | QcFormSubmissionWhereInput[]
    id?: IntFilter<"QcFormSubmission"> | number
    batch_name?: StringNullableFilter<"QcFormSubmission"> | string | null
    image_name?: StringNullableFilter<"QcFormSubmission"> | string | null
    field_name?: StringNullableFilter<"QcFormSubmission"> | string | null
    field_value?: StringNullableFilter<"QcFormSubmission"> | string | null
    level?: StringNullableFilter<"QcFormSubmission"> | string | null
    userid?: StringNullableFilter<"QcFormSubmission"> | string | null
    created_date?: DateTimeFilter<"QcFormSubmission"> | Date | string
    organizationid?: IntNullableFilter<"QcFormSubmission"> | number | null
    isactive?: BoolFilter<"QcFormSubmission"> | boolean
    createdat?: DateTimeFilter<"QcFormSubmission"> | Date | string
    updatedat?: DateTimeFilter<"QcFormSubmission"> | Date | string
  }

  export type QcFormSubmissionOrderByWithRelationInput = {
    id?: SortOrder
    batch_name?: SortOrderInput | SortOrder
    image_name?: SortOrderInput | SortOrder
    field_name?: SortOrderInput | SortOrder
    field_value?: SortOrderInput | SortOrder
    level?: SortOrderInput | SortOrder
    userid?: SortOrderInput | SortOrder
    created_date?: SortOrder
    organizationid?: SortOrderInput | SortOrder
    isactive?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
  }

  export type QcFormSubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QcFormSubmissionWhereInput | QcFormSubmissionWhereInput[]
    OR?: QcFormSubmissionWhereInput[]
    NOT?: QcFormSubmissionWhereInput | QcFormSubmissionWhereInput[]
    batch_name?: StringNullableFilter<"QcFormSubmission"> | string | null
    image_name?: StringNullableFilter<"QcFormSubmission"> | string | null
    field_name?: StringNullableFilter<"QcFormSubmission"> | string | null
    field_value?: StringNullableFilter<"QcFormSubmission"> | string | null
    level?: StringNullableFilter<"QcFormSubmission"> | string | null
    userid?: StringNullableFilter<"QcFormSubmission"> | string | null
    created_date?: DateTimeFilter<"QcFormSubmission"> | Date | string
    organizationid?: IntNullableFilter<"QcFormSubmission"> | number | null
    isactive?: BoolFilter<"QcFormSubmission"> | boolean
    createdat?: DateTimeFilter<"QcFormSubmission"> | Date | string
    updatedat?: DateTimeFilter<"QcFormSubmission"> | Date | string
  }, "id">

  export type QcFormSubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    batch_name?: SortOrderInput | SortOrder
    image_name?: SortOrderInput | SortOrder
    field_name?: SortOrderInput | SortOrder
    field_value?: SortOrderInput | SortOrder
    level?: SortOrderInput | SortOrder
    userid?: SortOrderInput | SortOrder
    created_date?: SortOrder
    organizationid?: SortOrderInput | SortOrder
    isactive?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
    _count?: QcFormSubmissionCountOrderByAggregateInput
    _avg?: QcFormSubmissionAvgOrderByAggregateInput
    _max?: QcFormSubmissionMaxOrderByAggregateInput
    _min?: QcFormSubmissionMinOrderByAggregateInput
    _sum?: QcFormSubmissionSumOrderByAggregateInput
  }

  export type QcFormSubmissionScalarWhereWithAggregatesInput = {
    AND?: QcFormSubmissionScalarWhereWithAggregatesInput | QcFormSubmissionScalarWhereWithAggregatesInput[]
    OR?: QcFormSubmissionScalarWhereWithAggregatesInput[]
    NOT?: QcFormSubmissionScalarWhereWithAggregatesInput | QcFormSubmissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"QcFormSubmission"> | number
    batch_name?: StringNullableWithAggregatesFilter<"QcFormSubmission"> | string | null
    image_name?: StringNullableWithAggregatesFilter<"QcFormSubmission"> | string | null
    field_name?: StringNullableWithAggregatesFilter<"QcFormSubmission"> | string | null
    field_value?: StringNullableWithAggregatesFilter<"QcFormSubmission"> | string | null
    level?: StringNullableWithAggregatesFilter<"QcFormSubmission"> | string | null
    userid?: StringNullableWithAggregatesFilter<"QcFormSubmission"> | string | null
    created_date?: DateTimeWithAggregatesFilter<"QcFormSubmission"> | Date | string
    organizationid?: IntNullableWithAggregatesFilter<"QcFormSubmission"> | number | null
    isactive?: BoolWithAggregatesFilter<"QcFormSubmission"> | boolean
    createdat?: DateTimeWithAggregatesFilter<"QcFormSubmission"> | Date | string
    updatedat?: DateTimeWithAggregatesFilter<"QcFormSubmission"> | Date | string
  }

  export type UserLogWhereInput = {
    AND?: UserLogWhereInput | UserLogWhereInput[]
    OR?: UserLogWhereInput[]
    NOT?: UserLogWhereInput | UserLogWhereInput[]
    id?: IntFilter<"UserLog"> | number
    userid?: StringFilter<"UserLog"> | string
    organizationid?: IntFilter<"UserLog"> | number
    role?: StringFilter<"UserLog"> | string
    actiondate?: DateTimeFilter<"UserLog"> | Date | string
    action?: StringFilter<"UserLog"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserLogOrderByWithRelationInput = {
    id?: SortOrder
    userid?: SortOrder
    organizationid?: SortOrder
    role?: SortOrder
    actiondate?: SortOrder
    action?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserLogWhereInput | UserLogWhereInput[]
    OR?: UserLogWhereInput[]
    NOT?: UserLogWhereInput | UserLogWhereInput[]
    userid?: StringFilter<"UserLog"> | string
    organizationid?: IntFilter<"UserLog"> | number
    role?: StringFilter<"UserLog"> | string
    actiondate?: DateTimeFilter<"UserLog"> | Date | string
    action?: StringFilter<"UserLog"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type UserLogOrderByWithAggregationInput = {
    id?: SortOrder
    userid?: SortOrder
    organizationid?: SortOrder
    role?: SortOrder
    actiondate?: SortOrder
    action?: SortOrder
    _count?: UserLogCountOrderByAggregateInput
    _avg?: UserLogAvgOrderByAggregateInput
    _max?: UserLogMaxOrderByAggregateInput
    _min?: UserLogMinOrderByAggregateInput
    _sum?: UserLogSumOrderByAggregateInput
  }

  export type UserLogScalarWhereWithAggregatesInput = {
    AND?: UserLogScalarWhereWithAggregatesInput | UserLogScalarWhereWithAggregatesInput[]
    OR?: UserLogScalarWhereWithAggregatesInput[]
    NOT?: UserLogScalarWhereWithAggregatesInput | UserLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserLog"> | number
    userid?: StringWithAggregatesFilter<"UserLog"> | string
    organizationid?: IntWithAggregatesFilter<"UserLog"> | number
    role?: StringWithAggregatesFilter<"UserLog"> | string
    actiondate?: DateTimeWithAggregatesFilter<"UserLog"> | Date | string
    action?: StringWithAggregatesFilter<"UserLog"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    full_data: JsonNullValueInput | InputJsonValue
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fullname?: string | null
    username?: string | null
    designation?: string | null
    tl?: string | null
    am?: string | null
    manager?: string | null
    shift?: string | null
    datapopulation?: string | null
    organization?: OrganizationCreateNestedOneWithoutUsersInput
    userLogs?: UserLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    full_data: JsonNullValueInput | InputJsonValue
    organizationId?: number | null
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fullname?: string | null
    username?: string | null
    designation?: string | null
    tl?: string | null
    am?: string | null
    manager?: string | null
    shift?: string | null
    datapopulation?: string | null
    userLogs?: UserLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    full_data?: JsonNullValueInput | InputJsonValue
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    tl?: NullableStringFieldUpdateOperationsInput | string | null
    am?: NullableStringFieldUpdateOperationsInput | string | null
    manager?: NullableStringFieldUpdateOperationsInput | string | null
    shift?: NullableStringFieldUpdateOperationsInput | string | null
    datapopulation?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: OrganizationUpdateOneWithoutUsersNestedInput
    userLogs?: UserLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    full_data?: JsonNullValueInput | InputJsonValue
    organizationId?: NullableIntFieldUpdateOperationsInput | number | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    tl?: NullableStringFieldUpdateOperationsInput | string | null
    am?: NullableStringFieldUpdateOperationsInput | string | null
    manager?: NullableStringFieldUpdateOperationsInput | string | null
    shift?: NullableStringFieldUpdateOperationsInput | string | null
    datapopulation?: NullableStringFieldUpdateOperationsInput | string | null
    userLogs?: UserLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    full_data: JsonNullValueInput | InputJsonValue
    organizationId?: number | null
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fullname?: string | null
    username?: string | null
    designation?: string | null
    tl?: string | null
    am?: string | null
    manager?: string | null
    shift?: string | null
    datapopulation?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    full_data?: JsonNullValueInput | InputJsonValue
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    tl?: NullableStringFieldUpdateOperationsInput | string | null
    am?: NullableStringFieldUpdateOperationsInput | string | null
    manager?: NullableStringFieldUpdateOperationsInput | string | null
    shift?: NullableStringFieldUpdateOperationsInput | string | null
    datapopulation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    full_data?: JsonNullValueInput | InputJsonValue
    organizationId?: NullableIntFieldUpdateOperationsInput | number | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    tl?: NullableStringFieldUpdateOperationsInput | string | null
    am?: NullableStringFieldUpdateOperationsInput | string | null
    manager?: NullableStringFieldUpdateOperationsInput | string | null
    shift?: NullableStringFieldUpdateOperationsInput | string | null
    datapopulation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ftpCreateInput = {
    host: string
    port: number
    username: string
    password: string
    ftppath: string
    ocr?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutFtpsInput
  }

  export type ftpUncheckedCreateInput = {
    id?: number
    host: string
    port: number
    username: string
    password: string
    ftppath: string
    organizationId: number
    ocr?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ftpUpdateInput = {
    host?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    ftppath?: StringFieldUpdateOperationsInput | string
    ocr?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutFtpsNestedInput
  }

  export type ftpUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    host?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    ftppath?: StringFieldUpdateOperationsInput | string
    organizationId?: IntFieldUpdateOperationsInput | number
    ocr?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ftpCreateManyInput = {
    id?: number
    host: string
    port: number
    username: string
    password: string
    ftppath: string
    organizationId: number
    ocr?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ftpUpdateManyMutationInput = {
    host?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    ftppath?: StringFieldUpdateOperationsInput | string
    ocr?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ftpUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    host?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    ftppath?: StringFieldUpdateOperationsInput | string
    organizationId?: IntFieldUpdateOperationsInput | number
    ocr?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationCreateInput = {
    name: string
    createdAt?: Date | string
    Org_ID: string
    users?: UserCreateNestedManyWithoutOrganizationInput
    ftps?: ftpCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    Org_ID: string
    users?: UserUncheckedCreateNestedManyWithoutOrganizationInput
    ftps?: ftpUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Org_ID?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutOrganizationNestedInput
    ftps?: ftpUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Org_ID?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutOrganizationNestedInput
    ftps?: ftpUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    Org_ID: string
  }

  export type OrganizationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Org_ID?: StringFieldUpdateOperationsInput | string
  }

  export type OrganizationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Org_ID?: StringFieldUpdateOperationsInput | string
  }

  export type BatchCreateInput = {
    batchname: string
    status: number
    folderpath: string
    uniqueid: number
    isactive: boolean
    createdat?: Date | string
    updatedat?: Date | string
    priority?: number | null
    county?: string | null
    engineToPriority?: number | null
    organizationId: number
  }

  export type BatchUncheckedCreateInput = {
    id?: number
    batchname: string
    status: number
    folderpath: string
    uniqueid: number
    isactive: boolean
    createdat?: Date | string
    updatedat?: Date | string
    priority?: number | null
    county?: string | null
    engineToPriority?: number | null
    organizationId: number
  }

  export type BatchUpdateInput = {
    batchname?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    folderpath?: StringFieldUpdateOperationsInput | string
    uniqueid?: IntFieldUpdateOperationsInput | number
    isactive?: BoolFieldUpdateOperationsInput | boolean
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    county?: NullableStringFieldUpdateOperationsInput | string | null
    engineToPriority?: NullableIntFieldUpdateOperationsInput | number | null
    organizationId?: IntFieldUpdateOperationsInput | number
  }

  export type BatchUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    batchname?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    folderpath?: StringFieldUpdateOperationsInput | string
    uniqueid?: IntFieldUpdateOperationsInput | number
    isactive?: BoolFieldUpdateOperationsInput | boolean
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    county?: NullableStringFieldUpdateOperationsInput | string | null
    engineToPriority?: NullableIntFieldUpdateOperationsInput | number | null
    organizationId?: IntFieldUpdateOperationsInput | number
  }

  export type BatchCreateManyInput = {
    id?: number
    batchname: string
    status: number
    folderpath: string
    uniqueid: number
    isactive: boolean
    createdat?: Date | string
    updatedat?: Date | string
    priority?: number | null
    county?: string | null
    engineToPriority?: number | null
    organizationId: number
  }

  export type BatchUpdateManyMutationInput = {
    batchname?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    folderpath?: StringFieldUpdateOperationsInput | string
    uniqueid?: IntFieldUpdateOperationsInput | number
    isactive?: BoolFieldUpdateOperationsInput | boolean
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    county?: NullableStringFieldUpdateOperationsInput | string | null
    engineToPriority?: NullableIntFieldUpdateOperationsInput | number | null
    organizationId?: IntFieldUpdateOperationsInput | number
  }

  export type BatchUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    batchname?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    folderpath?: StringFieldUpdateOperationsInput | string
    uniqueid?: IntFieldUpdateOperationsInput | number
    isactive?: BoolFieldUpdateOperationsInput | boolean
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    county?: NullableStringFieldUpdateOperationsInput | string | null
    engineToPriority?: NullableIntFieldUpdateOperationsInput | number | null
    organizationId?: IntFieldUpdateOperationsInput | number
  }

  export type ImagecollectionsCreateInput = {
    filename: string
    image: string
    status: string
    created_date?: Date | string
    batchname: string
    stage: string
    uniqueid: number
    file_type: string
    ocr_full_text: string
    processed_date: Date | string
    isactive?: boolean
    createdat?: Date | string
    updatedat?: Date | string
    header_locked?: boolean
    party_locked?: boolean
    legal_locked?: boolean
    headerstatus: string
    legalstatus: string
    partystatus: string
    headerlocked_timing?: Date | string | null
    legallocked_timing?: Date | string | null
    partylocked_timing?: Date | string | null
    indexing_assigned?: number | null
    header_assigned?: number | null
    propertyindex_assigned?: number | null
    indexing_locked?: boolean | null
    propertyindex_locked?: boolean | null
    propertyindexstatus: string
    indexinglocked_timing?: Date | string | null
    propertyindexlocked_timing?: Date | string | null
    indexing_completed?: Date | string | null
    propertyindex_completed?: Date | string | null
    header_completed?: Date | string | null
    party_completed?: Date | string | null
    legal_completed?: Date | string | null
    qc_locked?: boolean | null
    qc_assigned?: number | null
    qc_completed?: Date | string | null
    indexlocked_timing?: Date | string | null
    pilocked_timing?: Date | string | null
    duplicatestatus: string
    pi_pending_queue: string
    legal_pending_queue: string
    qcstatus: string
    indexingcompleted_timing?: Date | string | null
    propertyindexcompleted_timing?: Date | string | null
    headercompleted_timing?: Date | string | null
    partycompleted_timing?: Date | string | null
    legalcompleted_timing?: Date | string | null
    qccompleted_timing?: Date | string | null
    organizationId: number
    assigned?: string | null
    completed?: string | null
    imagestatus?: boolean | null
    userid?: string | null
  }

  export type ImagecollectionsUncheckedCreateInput = {
    id?: number
    filename: string
    image: string
    status: string
    created_date?: Date | string
    batchname: string
    stage: string
    uniqueid: number
    file_type: string
    ocr_full_text: string
    processed_date: Date | string
    isactive?: boolean
    createdat?: Date | string
    updatedat?: Date | string
    header_locked?: boolean
    party_locked?: boolean
    legal_locked?: boolean
    headerstatus: string
    legalstatus: string
    partystatus: string
    headerlocked_timing?: Date | string | null
    legallocked_timing?: Date | string | null
    partylocked_timing?: Date | string | null
    indexing_assigned?: number | null
    header_assigned?: number | null
    propertyindex_assigned?: number | null
    indexing_locked?: boolean | null
    propertyindex_locked?: boolean | null
    propertyindexstatus: string
    indexinglocked_timing?: Date | string | null
    propertyindexlocked_timing?: Date | string | null
    indexing_completed?: Date | string | null
    propertyindex_completed?: Date | string | null
    header_completed?: Date | string | null
    party_completed?: Date | string | null
    legal_completed?: Date | string | null
    qc_locked?: boolean | null
    qc_assigned?: number | null
    qc_completed?: Date | string | null
    indexlocked_timing?: Date | string | null
    pilocked_timing?: Date | string | null
    duplicatestatus: string
    pi_pending_queue: string
    legal_pending_queue: string
    qcstatus: string
    indexingcompleted_timing?: Date | string | null
    propertyindexcompleted_timing?: Date | string | null
    headercompleted_timing?: Date | string | null
    partycompleted_timing?: Date | string | null
    legalcompleted_timing?: Date | string | null
    qccompleted_timing?: Date | string | null
    organizationId: number
    assigned?: string | null
    completed?: string | null
    imagestatus?: boolean | null
    userid?: string | null
  }

  export type ImagecollectionsUpdateInput = {
    filename?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    batchname?: StringFieldUpdateOperationsInput | string
    stage?: StringFieldUpdateOperationsInput | string
    uniqueid?: IntFieldUpdateOperationsInput | number
    file_type?: StringFieldUpdateOperationsInput | string
    ocr_full_text?: StringFieldUpdateOperationsInput | string
    processed_date?: DateTimeFieldUpdateOperationsInput | Date | string
    isactive?: BoolFieldUpdateOperationsInput | boolean
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    header_locked?: BoolFieldUpdateOperationsInput | boolean
    party_locked?: BoolFieldUpdateOperationsInput | boolean
    legal_locked?: BoolFieldUpdateOperationsInput | boolean
    headerstatus?: StringFieldUpdateOperationsInput | string
    legalstatus?: StringFieldUpdateOperationsInput | string
    partystatus?: StringFieldUpdateOperationsInput | string
    headerlocked_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    legallocked_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    partylocked_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    indexing_assigned?: NullableIntFieldUpdateOperationsInput | number | null
    header_assigned?: NullableIntFieldUpdateOperationsInput | number | null
    propertyindex_assigned?: NullableIntFieldUpdateOperationsInput | number | null
    indexing_locked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    propertyindex_locked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    propertyindexstatus?: StringFieldUpdateOperationsInput | string
    indexinglocked_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propertyindexlocked_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    indexing_completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propertyindex_completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    header_completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    party_completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    legal_completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qc_locked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    qc_assigned?: NullableIntFieldUpdateOperationsInput | number | null
    qc_completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    indexlocked_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pilocked_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duplicatestatus?: StringFieldUpdateOperationsInput | string
    pi_pending_queue?: StringFieldUpdateOperationsInput | string
    legal_pending_queue?: StringFieldUpdateOperationsInput | string
    qcstatus?: StringFieldUpdateOperationsInput | string
    indexingcompleted_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propertyindexcompleted_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    headercompleted_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    partycompleted_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    legalcompleted_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qccompleted_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizationId?: IntFieldUpdateOperationsInput | number
    assigned?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: NullableStringFieldUpdateOperationsInput | string | null
    imagestatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImagecollectionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    batchname?: StringFieldUpdateOperationsInput | string
    stage?: StringFieldUpdateOperationsInput | string
    uniqueid?: IntFieldUpdateOperationsInput | number
    file_type?: StringFieldUpdateOperationsInput | string
    ocr_full_text?: StringFieldUpdateOperationsInput | string
    processed_date?: DateTimeFieldUpdateOperationsInput | Date | string
    isactive?: BoolFieldUpdateOperationsInput | boolean
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    header_locked?: BoolFieldUpdateOperationsInput | boolean
    party_locked?: BoolFieldUpdateOperationsInput | boolean
    legal_locked?: BoolFieldUpdateOperationsInput | boolean
    headerstatus?: StringFieldUpdateOperationsInput | string
    legalstatus?: StringFieldUpdateOperationsInput | string
    partystatus?: StringFieldUpdateOperationsInput | string
    headerlocked_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    legallocked_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    partylocked_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    indexing_assigned?: NullableIntFieldUpdateOperationsInput | number | null
    header_assigned?: NullableIntFieldUpdateOperationsInput | number | null
    propertyindex_assigned?: NullableIntFieldUpdateOperationsInput | number | null
    indexing_locked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    propertyindex_locked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    propertyindexstatus?: StringFieldUpdateOperationsInput | string
    indexinglocked_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propertyindexlocked_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    indexing_completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propertyindex_completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    header_completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    party_completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    legal_completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qc_locked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    qc_assigned?: NullableIntFieldUpdateOperationsInput | number | null
    qc_completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    indexlocked_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pilocked_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duplicatestatus?: StringFieldUpdateOperationsInput | string
    pi_pending_queue?: StringFieldUpdateOperationsInput | string
    legal_pending_queue?: StringFieldUpdateOperationsInput | string
    qcstatus?: StringFieldUpdateOperationsInput | string
    indexingcompleted_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propertyindexcompleted_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    headercompleted_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    partycompleted_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    legalcompleted_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qccompleted_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizationId?: IntFieldUpdateOperationsInput | number
    assigned?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: NullableStringFieldUpdateOperationsInput | string | null
    imagestatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImagecollectionsCreateManyInput = {
    id?: number
    filename: string
    image: string
    status: string
    created_date?: Date | string
    batchname: string
    stage: string
    uniqueid: number
    file_type: string
    ocr_full_text: string
    processed_date: Date | string
    isactive?: boolean
    createdat?: Date | string
    updatedat?: Date | string
    header_locked?: boolean
    party_locked?: boolean
    legal_locked?: boolean
    headerstatus: string
    legalstatus: string
    partystatus: string
    headerlocked_timing?: Date | string | null
    legallocked_timing?: Date | string | null
    partylocked_timing?: Date | string | null
    indexing_assigned?: number | null
    header_assigned?: number | null
    propertyindex_assigned?: number | null
    indexing_locked?: boolean | null
    propertyindex_locked?: boolean | null
    propertyindexstatus: string
    indexinglocked_timing?: Date | string | null
    propertyindexlocked_timing?: Date | string | null
    indexing_completed?: Date | string | null
    propertyindex_completed?: Date | string | null
    header_completed?: Date | string | null
    party_completed?: Date | string | null
    legal_completed?: Date | string | null
    qc_locked?: boolean | null
    qc_assigned?: number | null
    qc_completed?: Date | string | null
    indexlocked_timing?: Date | string | null
    pilocked_timing?: Date | string | null
    duplicatestatus: string
    pi_pending_queue: string
    legal_pending_queue: string
    qcstatus: string
    indexingcompleted_timing?: Date | string | null
    propertyindexcompleted_timing?: Date | string | null
    headercompleted_timing?: Date | string | null
    partycompleted_timing?: Date | string | null
    legalcompleted_timing?: Date | string | null
    qccompleted_timing?: Date | string | null
    organizationId: number
    assigned?: string | null
    completed?: string | null
    imagestatus?: boolean | null
    userid?: string | null
  }

  export type ImagecollectionsUpdateManyMutationInput = {
    filename?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    batchname?: StringFieldUpdateOperationsInput | string
    stage?: StringFieldUpdateOperationsInput | string
    uniqueid?: IntFieldUpdateOperationsInput | number
    file_type?: StringFieldUpdateOperationsInput | string
    ocr_full_text?: StringFieldUpdateOperationsInput | string
    processed_date?: DateTimeFieldUpdateOperationsInput | Date | string
    isactive?: BoolFieldUpdateOperationsInput | boolean
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    header_locked?: BoolFieldUpdateOperationsInput | boolean
    party_locked?: BoolFieldUpdateOperationsInput | boolean
    legal_locked?: BoolFieldUpdateOperationsInput | boolean
    headerstatus?: StringFieldUpdateOperationsInput | string
    legalstatus?: StringFieldUpdateOperationsInput | string
    partystatus?: StringFieldUpdateOperationsInput | string
    headerlocked_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    legallocked_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    partylocked_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    indexing_assigned?: NullableIntFieldUpdateOperationsInput | number | null
    header_assigned?: NullableIntFieldUpdateOperationsInput | number | null
    propertyindex_assigned?: NullableIntFieldUpdateOperationsInput | number | null
    indexing_locked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    propertyindex_locked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    propertyindexstatus?: StringFieldUpdateOperationsInput | string
    indexinglocked_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propertyindexlocked_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    indexing_completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propertyindex_completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    header_completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    party_completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    legal_completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qc_locked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    qc_assigned?: NullableIntFieldUpdateOperationsInput | number | null
    qc_completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    indexlocked_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pilocked_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duplicatestatus?: StringFieldUpdateOperationsInput | string
    pi_pending_queue?: StringFieldUpdateOperationsInput | string
    legal_pending_queue?: StringFieldUpdateOperationsInput | string
    qcstatus?: StringFieldUpdateOperationsInput | string
    indexingcompleted_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propertyindexcompleted_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    headercompleted_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    partycompleted_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    legalcompleted_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qccompleted_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizationId?: IntFieldUpdateOperationsInput | number
    assigned?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: NullableStringFieldUpdateOperationsInput | string | null
    imagestatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImagecollectionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    batchname?: StringFieldUpdateOperationsInput | string
    stage?: StringFieldUpdateOperationsInput | string
    uniqueid?: IntFieldUpdateOperationsInput | number
    file_type?: StringFieldUpdateOperationsInput | string
    ocr_full_text?: StringFieldUpdateOperationsInput | string
    processed_date?: DateTimeFieldUpdateOperationsInput | Date | string
    isactive?: BoolFieldUpdateOperationsInput | boolean
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    header_locked?: BoolFieldUpdateOperationsInput | boolean
    party_locked?: BoolFieldUpdateOperationsInput | boolean
    legal_locked?: BoolFieldUpdateOperationsInput | boolean
    headerstatus?: StringFieldUpdateOperationsInput | string
    legalstatus?: StringFieldUpdateOperationsInput | string
    partystatus?: StringFieldUpdateOperationsInput | string
    headerlocked_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    legallocked_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    partylocked_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    indexing_assigned?: NullableIntFieldUpdateOperationsInput | number | null
    header_assigned?: NullableIntFieldUpdateOperationsInput | number | null
    propertyindex_assigned?: NullableIntFieldUpdateOperationsInput | number | null
    indexing_locked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    propertyindex_locked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    propertyindexstatus?: StringFieldUpdateOperationsInput | string
    indexinglocked_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propertyindexlocked_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    indexing_completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propertyindex_completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    header_completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    party_completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    legal_completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qc_locked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    qc_assigned?: NullableIntFieldUpdateOperationsInput | number | null
    qc_completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    indexlocked_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pilocked_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duplicatestatus?: StringFieldUpdateOperationsInput | string
    pi_pending_queue?: StringFieldUpdateOperationsInput | string
    legal_pending_queue?: StringFieldUpdateOperationsInput | string
    qcstatus?: StringFieldUpdateOperationsInput | string
    indexingcompleted_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propertyindexcompleted_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    headercompleted_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    partycompleted_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    legalcompleted_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qccompleted_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizationId?: IntFieldUpdateOperationsInput | number
    assigned?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: NullableStringFieldUpdateOperationsInput | string | null
    imagestatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TemplateCreateInput = {
    name: string
    isActive?: boolean
    isDelete?: boolean
    organizationId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orderno?: number | null
    client?: boolean
    templateFields?: TemplateFieldCreateNestedManyWithoutTemplateInput
  }

  export type TemplateUncheckedCreateInput = {
    id?: number
    name: string
    isActive?: boolean
    isDelete?: boolean
    organizationId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orderno?: number | null
    client?: boolean
    templateFields?: TemplateFieldUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type TemplateUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    organizationId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderno?: NullableIntFieldUpdateOperationsInput | number | null
    client?: BoolFieldUpdateOperationsInput | boolean
    templateFields?: TemplateFieldUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    organizationId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderno?: NullableIntFieldUpdateOperationsInput | number | null
    client?: BoolFieldUpdateOperationsInput | boolean
    templateFields?: TemplateFieldUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateCreateManyInput = {
    id?: number
    name: string
    isActive?: boolean
    isDelete?: boolean
    organizationId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orderno?: number | null
    client?: boolean
  }

  export type TemplateUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    organizationId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderno?: NullableIntFieldUpdateOperationsInput | number | null
    client?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TemplateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    organizationId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderno?: NullableIntFieldUpdateOperationsInput | number | null
    client?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TemplateFieldCreateInput = {
    type: string
    icon: string
    label: string
    properties: string
    parentId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    template: TemplateCreateNestedOneWithoutTemplateFieldsInput
    children?: TemplateChildCreateNestedManyWithoutTemplateFieldInput
  }

  export type TemplateFieldUncheckedCreateInput = {
    id?: number
    templateId: number
    type: string
    icon: string
    label: string
    properties: string
    parentId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: TemplateChildUncheckedCreateNestedManyWithoutTemplateFieldInput
  }

  export type TemplateFieldUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    properties?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    template?: TemplateUpdateOneRequiredWithoutTemplateFieldsNestedInput
    children?: TemplateChildUpdateManyWithoutTemplateFieldNestedInput
  }

  export type TemplateFieldUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    templateId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    properties?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: TemplateChildUncheckedUpdateManyWithoutTemplateFieldNestedInput
  }

  export type TemplateFieldCreateManyInput = {
    id?: number
    templateId: number
    type: string
    icon: string
    label: string
    properties: string
    parentId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateFieldUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    properties?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateFieldUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    templateId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    properties?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateChildCreateInput = {
    type: string
    icon: string
    label: string
    properties: string
    parentId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    templateField: TemplateFieldCreateNestedOneWithoutChildrenInput
  }

  export type TemplateChildUncheckedCreateInput = {
    id?: number
    templateFieldsId: number
    type: string
    icon: string
    label: string
    properties: string
    parentId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateChildUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    properties?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templateField?: TemplateFieldUpdateOneRequiredWithoutChildrenNestedInput
  }

  export type TemplateChildUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    templateFieldsId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    properties?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateChildCreateManyInput = {
    id?: number
    templateFieldsId: number
    type: string
    icon: string
    label: string
    properties: string
    parentId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateChildUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    properties?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateChildUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    templateFieldsId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    properties?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormSubmissionCreateInput = {
    image_name: string
    batch_name: string
    field_name: string
    field_value: string
    level: string
    user_id: string
    created_date?: Date | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationId: number
  }

  export type FormSubmissionUncheckedCreateInput = {
    id?: number
    image_name: string
    batch_name: string
    field_name: string
    field_value: string
    level: string
    user_id: string
    created_date?: Date | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationId: number
  }

  export type FormSubmissionUpdateInput = {
    image_name?: StringFieldUpdateOperationsInput | string
    batch_name?: StringFieldUpdateOperationsInput | string
    field_name?: StringFieldUpdateOperationsInput | string
    field_value?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: IntFieldUpdateOperationsInput | number
  }

  export type FormSubmissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    image_name?: StringFieldUpdateOperationsInput | string
    batch_name?: StringFieldUpdateOperationsInput | string
    field_name?: StringFieldUpdateOperationsInput | string
    field_value?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: IntFieldUpdateOperationsInput | number
  }

  export type FormSubmissionCreateManyInput = {
    id?: number
    image_name: string
    batch_name: string
    field_name: string
    field_value: string
    level: string
    user_id: string
    created_date?: Date | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationId: number
  }

  export type FormSubmissionUpdateManyMutationInput = {
    image_name?: StringFieldUpdateOperationsInput | string
    batch_name?: StringFieldUpdateOperationsInput | string
    field_name?: StringFieldUpdateOperationsInput | string
    field_value?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: IntFieldUpdateOperationsInput | number
  }

  export type FormSubmissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    image_name?: StringFieldUpdateOperationsInput | string
    batch_name?: StringFieldUpdateOperationsInput | string
    field_name?: StringFieldUpdateOperationsInput | string
    field_value?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: IntFieldUpdateOperationsInput | number
  }

  export type QcFormSubmissionCreateInput = {
    batch_name?: string | null
    image_name?: string | null
    field_name?: string | null
    field_value?: string | null
    level?: string | null
    userid?: string | null
    created_date?: Date | string
    organizationid?: number | null
    isactive?: boolean
    createdat?: Date | string
    updatedat?: Date | string
  }

  export type QcFormSubmissionUncheckedCreateInput = {
    id?: number
    batch_name?: string | null
    image_name?: string | null
    field_name?: string | null
    field_value?: string | null
    level?: string | null
    userid?: string | null
    created_date?: Date | string
    organizationid?: number | null
    isactive?: boolean
    createdat?: Date | string
    updatedat?: Date | string
  }

  export type QcFormSubmissionUpdateInput = {
    batch_name?: NullableStringFieldUpdateOperationsInput | string | null
    image_name?: NullableStringFieldUpdateOperationsInput | string | null
    field_name?: NullableStringFieldUpdateOperationsInput | string | null
    field_value?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    userid?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationid?: NullableIntFieldUpdateOperationsInput | number | null
    isactive?: BoolFieldUpdateOperationsInput | boolean
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QcFormSubmissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    batch_name?: NullableStringFieldUpdateOperationsInput | string | null
    image_name?: NullableStringFieldUpdateOperationsInput | string | null
    field_name?: NullableStringFieldUpdateOperationsInput | string | null
    field_value?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    userid?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationid?: NullableIntFieldUpdateOperationsInput | number | null
    isactive?: BoolFieldUpdateOperationsInput | boolean
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QcFormSubmissionCreateManyInput = {
    id?: number
    batch_name?: string | null
    image_name?: string | null
    field_name?: string | null
    field_value?: string | null
    level?: string | null
    userid?: string | null
    created_date?: Date | string
    organizationid?: number | null
    isactive?: boolean
    createdat?: Date | string
    updatedat?: Date | string
  }

  export type QcFormSubmissionUpdateManyMutationInput = {
    batch_name?: NullableStringFieldUpdateOperationsInput | string | null
    image_name?: NullableStringFieldUpdateOperationsInput | string | null
    field_name?: NullableStringFieldUpdateOperationsInput | string | null
    field_value?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    userid?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationid?: NullableIntFieldUpdateOperationsInput | number | null
    isactive?: BoolFieldUpdateOperationsInput | boolean
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QcFormSubmissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    batch_name?: NullableStringFieldUpdateOperationsInput | string | null
    image_name?: NullableStringFieldUpdateOperationsInput | string | null
    field_name?: NullableStringFieldUpdateOperationsInput | string | null
    field_value?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    userid?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationid?: NullableIntFieldUpdateOperationsInput | number | null
    isactive?: BoolFieldUpdateOperationsInput | boolean
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLogCreateInput = {
    organizationid: number
    role: string
    actiondate?: Date | string
    action: string
    user: UserCreateNestedOneWithoutUserLogsInput
  }

  export type UserLogUncheckedCreateInput = {
    id?: number
    userid: string
    organizationid: number
    role: string
    actiondate?: Date | string
    action: string
  }

  export type UserLogUpdateInput = {
    organizationid?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    actiondate?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutUserLogsNestedInput
  }

  export type UserLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userid?: StringFieldUpdateOperationsInput | string
    organizationid?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    actiondate?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: StringFieldUpdateOperationsInput | string
  }

  export type UserLogCreateManyInput = {
    id?: number
    userid: string
    organizationid: number
    role: string
    actiondate?: Date | string
    action: string
  }

  export type UserLogUpdateManyMutationInput = {
    organizationid?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    actiondate?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: StringFieldUpdateOperationsInput | string
  }

  export type UserLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userid?: StringFieldUpdateOperationsInput | string
    organizationid?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    actiondate?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: StringFieldUpdateOperationsInput | string
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
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
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

  export type OrganizationNullableScalarRelationFilter = {
    is?: OrganizationWhereInput | null
    isNot?: OrganizationWhereInput | null
  }

  export type UserLogListRelationFilter = {
    every?: UserLogWhereInput
    some?: UserLogWhereInput
    none?: UserLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    full_data?: SortOrder
    organizationId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    designation?: SortOrder
    tl?: SortOrder
    am?: SortOrder
    manager?: SortOrder
    shift?: SortOrder
    datapopulation?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    organizationId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    organizationId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    designation?: SortOrder
    tl?: SortOrder
    am?: SortOrder
    manager?: SortOrder
    shift?: SortOrder
    datapopulation?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    organizationId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    designation?: SortOrder
    tl?: SortOrder
    am?: SortOrder
    manager?: SortOrder
    shift?: SortOrder
    datapopulation?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    organizationId?: SortOrder
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
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
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
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type OrganizationScalarRelationFilter = {
    is?: OrganizationWhereInput
    isNot?: OrganizationWhereInput
  }

  export type ftpCountOrderByAggregateInput = {
    id?: SortOrder
    host?: SortOrder
    port?: SortOrder
    username?: SortOrder
    password?: SortOrder
    ftppath?: SortOrder
    organizationId?: SortOrder
    ocr?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ftpAvgOrderByAggregateInput = {
    id?: SortOrder
    port?: SortOrder
    organizationId?: SortOrder
  }

  export type ftpMaxOrderByAggregateInput = {
    id?: SortOrder
    host?: SortOrder
    port?: SortOrder
    username?: SortOrder
    password?: SortOrder
    ftppath?: SortOrder
    organizationId?: SortOrder
    ocr?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ftpMinOrderByAggregateInput = {
    id?: SortOrder
    host?: SortOrder
    port?: SortOrder
    username?: SortOrder
    password?: SortOrder
    ftppath?: SortOrder
    organizationId?: SortOrder
    ocr?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ftpSumOrderByAggregateInput = {
    id?: SortOrder
    port?: SortOrder
    organizationId?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type FtpListRelationFilter = {
    every?: ftpWhereInput
    some?: ftpWhereInput
    none?: ftpWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ftpOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    Org_ID?: SortOrder
  }

  export type OrganizationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    Org_ID?: SortOrder
  }

  export type OrganizationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    Org_ID?: SortOrder
  }

  export type OrganizationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BatchCountOrderByAggregateInput = {
    id?: SortOrder
    batchname?: SortOrder
    status?: SortOrder
    folderpath?: SortOrder
    uniqueid?: SortOrder
    isactive?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
    priority?: SortOrder
    county?: SortOrder
    engineToPriority?: SortOrder
    organizationId?: SortOrder
  }

  export type BatchAvgOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    uniqueid?: SortOrder
    priority?: SortOrder
    engineToPriority?: SortOrder
    organizationId?: SortOrder
  }

  export type BatchMaxOrderByAggregateInput = {
    id?: SortOrder
    batchname?: SortOrder
    status?: SortOrder
    folderpath?: SortOrder
    uniqueid?: SortOrder
    isactive?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
    priority?: SortOrder
    county?: SortOrder
    engineToPriority?: SortOrder
    organizationId?: SortOrder
  }

  export type BatchMinOrderByAggregateInput = {
    id?: SortOrder
    batchname?: SortOrder
    status?: SortOrder
    folderpath?: SortOrder
    uniqueid?: SortOrder
    isactive?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
    priority?: SortOrder
    county?: SortOrder
    engineToPriority?: SortOrder
    organizationId?: SortOrder
  }

  export type BatchSumOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    uniqueid?: SortOrder
    priority?: SortOrder
    engineToPriority?: SortOrder
    organizationId?: SortOrder
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type ImagecollectionsCountOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    image?: SortOrder
    status?: SortOrder
    created_date?: SortOrder
    batchname?: SortOrder
    stage?: SortOrder
    uniqueid?: SortOrder
    file_type?: SortOrder
    ocr_full_text?: SortOrder
    processed_date?: SortOrder
    isactive?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
    header_locked?: SortOrder
    party_locked?: SortOrder
    legal_locked?: SortOrder
    headerstatus?: SortOrder
    legalstatus?: SortOrder
    partystatus?: SortOrder
    headerlocked_timing?: SortOrder
    legallocked_timing?: SortOrder
    partylocked_timing?: SortOrder
    indexing_assigned?: SortOrder
    header_assigned?: SortOrder
    propertyindex_assigned?: SortOrder
    indexing_locked?: SortOrder
    propertyindex_locked?: SortOrder
    propertyindexstatus?: SortOrder
    indexinglocked_timing?: SortOrder
    propertyindexlocked_timing?: SortOrder
    indexing_completed?: SortOrder
    propertyindex_completed?: SortOrder
    header_completed?: SortOrder
    party_completed?: SortOrder
    legal_completed?: SortOrder
    qc_locked?: SortOrder
    qc_assigned?: SortOrder
    qc_completed?: SortOrder
    indexlocked_timing?: SortOrder
    pilocked_timing?: SortOrder
    duplicatestatus?: SortOrder
    pi_pending_queue?: SortOrder
    legal_pending_queue?: SortOrder
    qcstatus?: SortOrder
    indexingcompleted_timing?: SortOrder
    propertyindexcompleted_timing?: SortOrder
    headercompleted_timing?: SortOrder
    partycompleted_timing?: SortOrder
    legalcompleted_timing?: SortOrder
    qccompleted_timing?: SortOrder
    organizationId?: SortOrder
    assigned?: SortOrder
    completed?: SortOrder
    imagestatus?: SortOrder
    userid?: SortOrder
  }

  export type ImagecollectionsAvgOrderByAggregateInput = {
    id?: SortOrder
    uniqueid?: SortOrder
    indexing_assigned?: SortOrder
    header_assigned?: SortOrder
    propertyindex_assigned?: SortOrder
    qc_assigned?: SortOrder
    organizationId?: SortOrder
  }

  export type ImagecollectionsMaxOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    image?: SortOrder
    status?: SortOrder
    created_date?: SortOrder
    batchname?: SortOrder
    stage?: SortOrder
    uniqueid?: SortOrder
    file_type?: SortOrder
    ocr_full_text?: SortOrder
    processed_date?: SortOrder
    isactive?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
    header_locked?: SortOrder
    party_locked?: SortOrder
    legal_locked?: SortOrder
    headerstatus?: SortOrder
    legalstatus?: SortOrder
    partystatus?: SortOrder
    headerlocked_timing?: SortOrder
    legallocked_timing?: SortOrder
    partylocked_timing?: SortOrder
    indexing_assigned?: SortOrder
    header_assigned?: SortOrder
    propertyindex_assigned?: SortOrder
    indexing_locked?: SortOrder
    propertyindex_locked?: SortOrder
    propertyindexstatus?: SortOrder
    indexinglocked_timing?: SortOrder
    propertyindexlocked_timing?: SortOrder
    indexing_completed?: SortOrder
    propertyindex_completed?: SortOrder
    header_completed?: SortOrder
    party_completed?: SortOrder
    legal_completed?: SortOrder
    qc_locked?: SortOrder
    qc_assigned?: SortOrder
    qc_completed?: SortOrder
    indexlocked_timing?: SortOrder
    pilocked_timing?: SortOrder
    duplicatestatus?: SortOrder
    pi_pending_queue?: SortOrder
    legal_pending_queue?: SortOrder
    qcstatus?: SortOrder
    indexingcompleted_timing?: SortOrder
    propertyindexcompleted_timing?: SortOrder
    headercompleted_timing?: SortOrder
    partycompleted_timing?: SortOrder
    legalcompleted_timing?: SortOrder
    qccompleted_timing?: SortOrder
    organizationId?: SortOrder
    assigned?: SortOrder
    completed?: SortOrder
    imagestatus?: SortOrder
    userid?: SortOrder
  }

  export type ImagecollectionsMinOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    image?: SortOrder
    status?: SortOrder
    created_date?: SortOrder
    batchname?: SortOrder
    stage?: SortOrder
    uniqueid?: SortOrder
    file_type?: SortOrder
    ocr_full_text?: SortOrder
    processed_date?: SortOrder
    isactive?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
    header_locked?: SortOrder
    party_locked?: SortOrder
    legal_locked?: SortOrder
    headerstatus?: SortOrder
    legalstatus?: SortOrder
    partystatus?: SortOrder
    headerlocked_timing?: SortOrder
    legallocked_timing?: SortOrder
    partylocked_timing?: SortOrder
    indexing_assigned?: SortOrder
    header_assigned?: SortOrder
    propertyindex_assigned?: SortOrder
    indexing_locked?: SortOrder
    propertyindex_locked?: SortOrder
    propertyindexstatus?: SortOrder
    indexinglocked_timing?: SortOrder
    propertyindexlocked_timing?: SortOrder
    indexing_completed?: SortOrder
    propertyindex_completed?: SortOrder
    header_completed?: SortOrder
    party_completed?: SortOrder
    legal_completed?: SortOrder
    qc_locked?: SortOrder
    qc_assigned?: SortOrder
    qc_completed?: SortOrder
    indexlocked_timing?: SortOrder
    pilocked_timing?: SortOrder
    duplicatestatus?: SortOrder
    pi_pending_queue?: SortOrder
    legal_pending_queue?: SortOrder
    qcstatus?: SortOrder
    indexingcompleted_timing?: SortOrder
    propertyindexcompleted_timing?: SortOrder
    headercompleted_timing?: SortOrder
    partycompleted_timing?: SortOrder
    legalcompleted_timing?: SortOrder
    qccompleted_timing?: SortOrder
    organizationId?: SortOrder
    assigned?: SortOrder
    completed?: SortOrder
    imagestatus?: SortOrder
    userid?: SortOrder
  }

  export type ImagecollectionsSumOrderByAggregateInput = {
    id?: SortOrder
    uniqueid?: SortOrder
    indexing_assigned?: SortOrder
    header_assigned?: SortOrder
    propertyindex_assigned?: SortOrder
    qc_assigned?: SortOrder
    organizationId?: SortOrder
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type TemplateFieldListRelationFilter = {
    every?: TemplateFieldWhereInput
    some?: TemplateFieldWhereInput
    none?: TemplateFieldWhereInput
  }

  export type TemplateFieldOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TemplateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    isDelete?: SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderno?: SortOrder
    client?: SortOrder
  }

  export type TemplateAvgOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    orderno?: SortOrder
  }

  export type TemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    isDelete?: SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderno?: SortOrder
    client?: SortOrder
  }

  export type TemplateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    isDelete?: SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderno?: SortOrder
    client?: SortOrder
  }

  export type TemplateSumOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    orderno?: SortOrder
  }

  export type TemplateScalarRelationFilter = {
    is?: TemplateWhereInput
    isNot?: TemplateWhereInput
  }

  export type TemplateChildListRelationFilter = {
    every?: TemplateChildWhereInput
    some?: TemplateChildWhereInput
    none?: TemplateChildWhereInput
  }

  export type TemplateChildOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TemplateFieldCountOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
    type?: SortOrder
    icon?: SortOrder
    label?: SortOrder
    properties?: SortOrder
    parentId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TemplateFieldAvgOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
  }

  export type TemplateFieldMaxOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
    type?: SortOrder
    icon?: SortOrder
    label?: SortOrder
    properties?: SortOrder
    parentId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TemplateFieldMinOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
    type?: SortOrder
    icon?: SortOrder
    label?: SortOrder
    properties?: SortOrder
    parentId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TemplateFieldSumOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
  }

  export type TemplateFieldScalarRelationFilter = {
    is?: TemplateFieldWhereInput
    isNot?: TemplateFieldWhereInput
  }

  export type TemplateChildCountOrderByAggregateInput = {
    id?: SortOrder
    templateFieldsId?: SortOrder
    type?: SortOrder
    icon?: SortOrder
    label?: SortOrder
    properties?: SortOrder
    parentId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TemplateChildAvgOrderByAggregateInput = {
    id?: SortOrder
    templateFieldsId?: SortOrder
  }

  export type TemplateChildMaxOrderByAggregateInput = {
    id?: SortOrder
    templateFieldsId?: SortOrder
    type?: SortOrder
    icon?: SortOrder
    label?: SortOrder
    properties?: SortOrder
    parentId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TemplateChildMinOrderByAggregateInput = {
    id?: SortOrder
    templateFieldsId?: SortOrder
    type?: SortOrder
    icon?: SortOrder
    label?: SortOrder
    properties?: SortOrder
    parentId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TemplateChildSumOrderByAggregateInput = {
    id?: SortOrder
    templateFieldsId?: SortOrder
  }

  export type FormSubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    image_name?: SortOrder
    batch_name?: SortOrder
    field_name?: SortOrder
    field_value?: SortOrder
    level?: SortOrder
    user_id?: SortOrder
    created_date?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrder
  }

  export type FormSubmissionAvgOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
  }

  export type FormSubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    image_name?: SortOrder
    batch_name?: SortOrder
    field_name?: SortOrder
    field_value?: SortOrder
    level?: SortOrder
    user_id?: SortOrder
    created_date?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrder
  }

  export type FormSubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    image_name?: SortOrder
    batch_name?: SortOrder
    field_name?: SortOrder
    field_value?: SortOrder
    level?: SortOrder
    user_id?: SortOrder
    created_date?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrder
  }

  export type FormSubmissionSumOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
  }

  export type QcFormSubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    batch_name?: SortOrder
    image_name?: SortOrder
    field_name?: SortOrder
    field_value?: SortOrder
    level?: SortOrder
    userid?: SortOrder
    created_date?: SortOrder
    organizationid?: SortOrder
    isactive?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
  }

  export type QcFormSubmissionAvgOrderByAggregateInput = {
    id?: SortOrder
    organizationid?: SortOrder
  }

  export type QcFormSubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    batch_name?: SortOrder
    image_name?: SortOrder
    field_name?: SortOrder
    field_value?: SortOrder
    level?: SortOrder
    userid?: SortOrder
    created_date?: SortOrder
    organizationid?: SortOrder
    isactive?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
  }

  export type QcFormSubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    batch_name?: SortOrder
    image_name?: SortOrder
    field_name?: SortOrder
    field_value?: SortOrder
    level?: SortOrder
    userid?: SortOrder
    created_date?: SortOrder
    organizationid?: SortOrder
    isactive?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
  }

  export type QcFormSubmissionSumOrderByAggregateInput = {
    id?: SortOrder
    organizationid?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserLogCountOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    organizationid?: SortOrder
    role?: SortOrder
    actiondate?: SortOrder
    action?: SortOrder
  }

  export type UserLogAvgOrderByAggregateInput = {
    id?: SortOrder
    organizationid?: SortOrder
  }

  export type UserLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    organizationid?: SortOrder
    role?: SortOrder
    actiondate?: SortOrder
    action?: SortOrder
  }

  export type UserLogMinOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    organizationid?: SortOrder
    role?: SortOrder
    actiondate?: SortOrder
    action?: SortOrder
  }

  export type UserLogSumOrderByAggregateInput = {
    id?: SortOrder
    organizationid?: SortOrder
  }

  export type OrganizationCreateNestedOneWithoutUsersInput = {
    create?: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutUsersInput
    connect?: OrganizationWhereUniqueInput
  }

  export type UserLogCreateNestedManyWithoutUserInput = {
    create?: XOR<UserLogCreateWithoutUserInput, UserLogUncheckedCreateWithoutUserInput> | UserLogCreateWithoutUserInput[] | UserLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLogCreateOrConnectWithoutUserInput | UserLogCreateOrConnectWithoutUserInput[]
    createMany?: UserLogCreateManyUserInputEnvelope
    connect?: UserLogWhereUniqueInput | UserLogWhereUniqueInput[]
  }

  export type UserLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserLogCreateWithoutUserInput, UserLogUncheckedCreateWithoutUserInput> | UserLogCreateWithoutUserInput[] | UserLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLogCreateOrConnectWithoutUserInput | UserLogCreateOrConnectWithoutUserInput[]
    createMany?: UserLogCreateManyUserInputEnvelope
    connect?: UserLogWhereUniqueInput | UserLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type OrganizationUpdateOneWithoutUsersNestedInput = {
    create?: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutUsersInput
    upsert?: OrganizationUpsertWithoutUsersInput
    disconnect?: OrganizationWhereInput | boolean
    delete?: OrganizationWhereInput | boolean
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutUsersInput, OrganizationUpdateWithoutUsersInput>, OrganizationUncheckedUpdateWithoutUsersInput>
  }

  export type UserLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserLogCreateWithoutUserInput, UserLogUncheckedCreateWithoutUserInput> | UserLogCreateWithoutUserInput[] | UserLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLogCreateOrConnectWithoutUserInput | UserLogCreateOrConnectWithoutUserInput[]
    upsert?: UserLogUpsertWithWhereUniqueWithoutUserInput | UserLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserLogCreateManyUserInputEnvelope
    set?: UserLogWhereUniqueInput | UserLogWhereUniqueInput[]
    disconnect?: UserLogWhereUniqueInput | UserLogWhereUniqueInput[]
    delete?: UserLogWhereUniqueInput | UserLogWhereUniqueInput[]
    connect?: UserLogWhereUniqueInput | UserLogWhereUniqueInput[]
    update?: UserLogUpdateWithWhereUniqueWithoutUserInput | UserLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserLogUpdateManyWithWhereWithoutUserInput | UserLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserLogScalarWhereInput | UserLogScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserLogCreateWithoutUserInput, UserLogUncheckedCreateWithoutUserInput> | UserLogCreateWithoutUserInput[] | UserLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLogCreateOrConnectWithoutUserInput | UserLogCreateOrConnectWithoutUserInput[]
    upsert?: UserLogUpsertWithWhereUniqueWithoutUserInput | UserLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserLogCreateManyUserInputEnvelope
    set?: UserLogWhereUniqueInput | UserLogWhereUniqueInput[]
    disconnect?: UserLogWhereUniqueInput | UserLogWhereUniqueInput[]
    delete?: UserLogWhereUniqueInput | UserLogWhereUniqueInput[]
    connect?: UserLogWhereUniqueInput | UserLogWhereUniqueInput[]
    update?: UserLogUpdateWithWhereUniqueWithoutUserInput | UserLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserLogUpdateManyWithWhereWithoutUserInput | UserLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserLogScalarWhereInput | UserLogScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutFtpsInput = {
    create?: XOR<OrganizationCreateWithoutFtpsInput, OrganizationUncheckedCreateWithoutFtpsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutFtpsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type OrganizationUpdateOneRequiredWithoutFtpsNestedInput = {
    create?: XOR<OrganizationCreateWithoutFtpsInput, OrganizationUncheckedCreateWithoutFtpsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutFtpsInput
    upsert?: OrganizationUpsertWithoutFtpsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutFtpsInput, OrganizationUpdateWithoutFtpsInput>, OrganizationUncheckedUpdateWithoutFtpsInput>
  }

  export type UserCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ftpCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<ftpCreateWithoutOrganizationInput, ftpUncheckedCreateWithoutOrganizationInput> | ftpCreateWithoutOrganizationInput[] | ftpUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ftpCreateOrConnectWithoutOrganizationInput | ftpCreateOrConnectWithoutOrganizationInput[]
    createMany?: ftpCreateManyOrganizationInputEnvelope
    connect?: ftpWhereUniqueInput | ftpWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ftpUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<ftpCreateWithoutOrganizationInput, ftpUncheckedCreateWithoutOrganizationInput> | ftpCreateWithoutOrganizationInput[] | ftpUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ftpCreateOrConnectWithoutOrganizationInput | ftpCreateOrConnectWithoutOrganizationInput[]
    createMany?: ftpCreateManyOrganizationInputEnvelope
    connect?: ftpWhereUniqueInput | ftpWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOrganizationInput | UserUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOrganizationInput | UserUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOrganizationInput | UserUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ftpUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<ftpCreateWithoutOrganizationInput, ftpUncheckedCreateWithoutOrganizationInput> | ftpCreateWithoutOrganizationInput[] | ftpUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ftpCreateOrConnectWithoutOrganizationInput | ftpCreateOrConnectWithoutOrganizationInput[]
    upsert?: ftpUpsertWithWhereUniqueWithoutOrganizationInput | ftpUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: ftpCreateManyOrganizationInputEnvelope
    set?: ftpWhereUniqueInput | ftpWhereUniqueInput[]
    disconnect?: ftpWhereUniqueInput | ftpWhereUniqueInput[]
    delete?: ftpWhereUniqueInput | ftpWhereUniqueInput[]
    connect?: ftpWhereUniqueInput | ftpWhereUniqueInput[]
    update?: ftpUpdateWithWhereUniqueWithoutOrganizationInput | ftpUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: ftpUpdateManyWithWhereWithoutOrganizationInput | ftpUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: ftpScalarWhereInput | ftpScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOrganizationInput | UserUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOrganizationInput | UserUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOrganizationInput | UserUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ftpUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<ftpCreateWithoutOrganizationInput, ftpUncheckedCreateWithoutOrganizationInput> | ftpCreateWithoutOrganizationInput[] | ftpUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ftpCreateOrConnectWithoutOrganizationInput | ftpCreateOrConnectWithoutOrganizationInput[]
    upsert?: ftpUpsertWithWhereUniqueWithoutOrganizationInput | ftpUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: ftpCreateManyOrganizationInputEnvelope
    set?: ftpWhereUniqueInput | ftpWhereUniqueInput[]
    disconnect?: ftpWhereUniqueInput | ftpWhereUniqueInput[]
    delete?: ftpWhereUniqueInput | ftpWhereUniqueInput[]
    connect?: ftpWhereUniqueInput | ftpWhereUniqueInput[]
    update?: ftpUpdateWithWhereUniqueWithoutOrganizationInput | ftpUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: ftpUpdateManyWithWhereWithoutOrganizationInput | ftpUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: ftpScalarWhereInput | ftpScalarWhereInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type TemplateFieldCreateNestedManyWithoutTemplateInput = {
    create?: XOR<TemplateFieldCreateWithoutTemplateInput, TemplateFieldUncheckedCreateWithoutTemplateInput> | TemplateFieldCreateWithoutTemplateInput[] | TemplateFieldUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: TemplateFieldCreateOrConnectWithoutTemplateInput | TemplateFieldCreateOrConnectWithoutTemplateInput[]
    createMany?: TemplateFieldCreateManyTemplateInputEnvelope
    connect?: TemplateFieldWhereUniqueInput | TemplateFieldWhereUniqueInput[]
  }

  export type TemplateFieldUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: XOR<TemplateFieldCreateWithoutTemplateInput, TemplateFieldUncheckedCreateWithoutTemplateInput> | TemplateFieldCreateWithoutTemplateInput[] | TemplateFieldUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: TemplateFieldCreateOrConnectWithoutTemplateInput | TemplateFieldCreateOrConnectWithoutTemplateInput[]
    createMany?: TemplateFieldCreateManyTemplateInputEnvelope
    connect?: TemplateFieldWhereUniqueInput | TemplateFieldWhereUniqueInput[]
  }

  export type TemplateFieldUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<TemplateFieldCreateWithoutTemplateInput, TemplateFieldUncheckedCreateWithoutTemplateInput> | TemplateFieldCreateWithoutTemplateInput[] | TemplateFieldUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: TemplateFieldCreateOrConnectWithoutTemplateInput | TemplateFieldCreateOrConnectWithoutTemplateInput[]
    upsert?: TemplateFieldUpsertWithWhereUniqueWithoutTemplateInput | TemplateFieldUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: TemplateFieldCreateManyTemplateInputEnvelope
    set?: TemplateFieldWhereUniqueInput | TemplateFieldWhereUniqueInput[]
    disconnect?: TemplateFieldWhereUniqueInput | TemplateFieldWhereUniqueInput[]
    delete?: TemplateFieldWhereUniqueInput | TemplateFieldWhereUniqueInput[]
    connect?: TemplateFieldWhereUniqueInput | TemplateFieldWhereUniqueInput[]
    update?: TemplateFieldUpdateWithWhereUniqueWithoutTemplateInput | TemplateFieldUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: TemplateFieldUpdateManyWithWhereWithoutTemplateInput | TemplateFieldUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: TemplateFieldScalarWhereInput | TemplateFieldScalarWhereInput[]
  }

  export type TemplateFieldUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<TemplateFieldCreateWithoutTemplateInput, TemplateFieldUncheckedCreateWithoutTemplateInput> | TemplateFieldCreateWithoutTemplateInput[] | TemplateFieldUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: TemplateFieldCreateOrConnectWithoutTemplateInput | TemplateFieldCreateOrConnectWithoutTemplateInput[]
    upsert?: TemplateFieldUpsertWithWhereUniqueWithoutTemplateInput | TemplateFieldUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: TemplateFieldCreateManyTemplateInputEnvelope
    set?: TemplateFieldWhereUniqueInput | TemplateFieldWhereUniqueInput[]
    disconnect?: TemplateFieldWhereUniqueInput | TemplateFieldWhereUniqueInput[]
    delete?: TemplateFieldWhereUniqueInput | TemplateFieldWhereUniqueInput[]
    connect?: TemplateFieldWhereUniqueInput | TemplateFieldWhereUniqueInput[]
    update?: TemplateFieldUpdateWithWhereUniqueWithoutTemplateInput | TemplateFieldUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: TemplateFieldUpdateManyWithWhereWithoutTemplateInput | TemplateFieldUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: TemplateFieldScalarWhereInput | TemplateFieldScalarWhereInput[]
  }

  export type TemplateCreateNestedOneWithoutTemplateFieldsInput = {
    create?: XOR<TemplateCreateWithoutTemplateFieldsInput, TemplateUncheckedCreateWithoutTemplateFieldsInput>
    connectOrCreate?: TemplateCreateOrConnectWithoutTemplateFieldsInput
    connect?: TemplateWhereUniqueInput
  }

  export type TemplateChildCreateNestedManyWithoutTemplateFieldInput = {
    create?: XOR<TemplateChildCreateWithoutTemplateFieldInput, TemplateChildUncheckedCreateWithoutTemplateFieldInput> | TemplateChildCreateWithoutTemplateFieldInput[] | TemplateChildUncheckedCreateWithoutTemplateFieldInput[]
    connectOrCreate?: TemplateChildCreateOrConnectWithoutTemplateFieldInput | TemplateChildCreateOrConnectWithoutTemplateFieldInput[]
    createMany?: TemplateChildCreateManyTemplateFieldInputEnvelope
    connect?: TemplateChildWhereUniqueInput | TemplateChildWhereUniqueInput[]
  }

  export type TemplateChildUncheckedCreateNestedManyWithoutTemplateFieldInput = {
    create?: XOR<TemplateChildCreateWithoutTemplateFieldInput, TemplateChildUncheckedCreateWithoutTemplateFieldInput> | TemplateChildCreateWithoutTemplateFieldInput[] | TemplateChildUncheckedCreateWithoutTemplateFieldInput[]
    connectOrCreate?: TemplateChildCreateOrConnectWithoutTemplateFieldInput | TemplateChildCreateOrConnectWithoutTemplateFieldInput[]
    createMany?: TemplateChildCreateManyTemplateFieldInputEnvelope
    connect?: TemplateChildWhereUniqueInput | TemplateChildWhereUniqueInput[]
  }

  export type TemplateUpdateOneRequiredWithoutTemplateFieldsNestedInput = {
    create?: XOR<TemplateCreateWithoutTemplateFieldsInput, TemplateUncheckedCreateWithoutTemplateFieldsInput>
    connectOrCreate?: TemplateCreateOrConnectWithoutTemplateFieldsInput
    upsert?: TemplateUpsertWithoutTemplateFieldsInput
    connect?: TemplateWhereUniqueInput
    update?: XOR<XOR<TemplateUpdateToOneWithWhereWithoutTemplateFieldsInput, TemplateUpdateWithoutTemplateFieldsInput>, TemplateUncheckedUpdateWithoutTemplateFieldsInput>
  }

  export type TemplateChildUpdateManyWithoutTemplateFieldNestedInput = {
    create?: XOR<TemplateChildCreateWithoutTemplateFieldInput, TemplateChildUncheckedCreateWithoutTemplateFieldInput> | TemplateChildCreateWithoutTemplateFieldInput[] | TemplateChildUncheckedCreateWithoutTemplateFieldInput[]
    connectOrCreate?: TemplateChildCreateOrConnectWithoutTemplateFieldInput | TemplateChildCreateOrConnectWithoutTemplateFieldInput[]
    upsert?: TemplateChildUpsertWithWhereUniqueWithoutTemplateFieldInput | TemplateChildUpsertWithWhereUniqueWithoutTemplateFieldInput[]
    createMany?: TemplateChildCreateManyTemplateFieldInputEnvelope
    set?: TemplateChildWhereUniqueInput | TemplateChildWhereUniqueInput[]
    disconnect?: TemplateChildWhereUniqueInput | TemplateChildWhereUniqueInput[]
    delete?: TemplateChildWhereUniqueInput | TemplateChildWhereUniqueInput[]
    connect?: TemplateChildWhereUniqueInput | TemplateChildWhereUniqueInput[]
    update?: TemplateChildUpdateWithWhereUniqueWithoutTemplateFieldInput | TemplateChildUpdateWithWhereUniqueWithoutTemplateFieldInput[]
    updateMany?: TemplateChildUpdateManyWithWhereWithoutTemplateFieldInput | TemplateChildUpdateManyWithWhereWithoutTemplateFieldInput[]
    deleteMany?: TemplateChildScalarWhereInput | TemplateChildScalarWhereInput[]
  }

  export type TemplateChildUncheckedUpdateManyWithoutTemplateFieldNestedInput = {
    create?: XOR<TemplateChildCreateWithoutTemplateFieldInput, TemplateChildUncheckedCreateWithoutTemplateFieldInput> | TemplateChildCreateWithoutTemplateFieldInput[] | TemplateChildUncheckedCreateWithoutTemplateFieldInput[]
    connectOrCreate?: TemplateChildCreateOrConnectWithoutTemplateFieldInput | TemplateChildCreateOrConnectWithoutTemplateFieldInput[]
    upsert?: TemplateChildUpsertWithWhereUniqueWithoutTemplateFieldInput | TemplateChildUpsertWithWhereUniqueWithoutTemplateFieldInput[]
    createMany?: TemplateChildCreateManyTemplateFieldInputEnvelope
    set?: TemplateChildWhereUniqueInput | TemplateChildWhereUniqueInput[]
    disconnect?: TemplateChildWhereUniqueInput | TemplateChildWhereUniqueInput[]
    delete?: TemplateChildWhereUniqueInput | TemplateChildWhereUniqueInput[]
    connect?: TemplateChildWhereUniqueInput | TemplateChildWhereUniqueInput[]
    update?: TemplateChildUpdateWithWhereUniqueWithoutTemplateFieldInput | TemplateChildUpdateWithWhereUniqueWithoutTemplateFieldInput[]
    updateMany?: TemplateChildUpdateManyWithWhereWithoutTemplateFieldInput | TemplateChildUpdateManyWithWhereWithoutTemplateFieldInput[]
    deleteMany?: TemplateChildScalarWhereInput | TemplateChildScalarWhereInput[]
  }

  export type TemplateFieldCreateNestedOneWithoutChildrenInput = {
    create?: XOR<TemplateFieldCreateWithoutChildrenInput, TemplateFieldUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: TemplateFieldCreateOrConnectWithoutChildrenInput
    connect?: TemplateFieldWhereUniqueInput
  }

  export type TemplateFieldUpdateOneRequiredWithoutChildrenNestedInput = {
    create?: XOR<TemplateFieldCreateWithoutChildrenInput, TemplateFieldUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: TemplateFieldCreateOrConnectWithoutChildrenInput
    upsert?: TemplateFieldUpsertWithoutChildrenInput
    connect?: TemplateFieldWhereUniqueInput
    update?: XOR<XOR<TemplateFieldUpdateToOneWithWhereWithoutChildrenInput, TemplateFieldUpdateWithoutChildrenInput>, TemplateFieldUncheckedUpdateWithoutChildrenInput>
  }

  export type UserCreateNestedOneWithoutUserLogsInput = {
    create?: XOR<UserCreateWithoutUserLogsInput, UserUncheckedCreateWithoutUserLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserLogsNestedInput = {
    create?: XOR<UserCreateWithoutUserLogsInput, UserUncheckedCreateWithoutUserLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserLogsInput
    upsert?: UserUpsertWithoutUserLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserLogsInput, UserUpdateWithoutUserLogsInput>, UserUncheckedUpdateWithoutUserLogsInput>
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type OrganizationCreateWithoutUsersInput = {
    name: string
    createdAt?: Date | string
    Org_ID: string
    ftps?: ftpCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    createdAt?: Date | string
    Org_ID: string
    ftps?: ftpUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutUsersInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
  }

  export type UserLogCreateWithoutUserInput = {
    organizationid: number
    role: string
    actiondate?: Date | string
    action: string
  }

  export type UserLogUncheckedCreateWithoutUserInput = {
    id?: number
    organizationid: number
    role: string
    actiondate?: Date | string
    action: string
  }

  export type UserLogCreateOrConnectWithoutUserInput = {
    where: UserLogWhereUniqueInput
    create: XOR<UserLogCreateWithoutUserInput, UserLogUncheckedCreateWithoutUserInput>
  }

  export type UserLogCreateManyUserInputEnvelope = {
    data: UserLogCreateManyUserInput | UserLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationUpsertWithoutUsersInput = {
    update: XOR<OrganizationUpdateWithoutUsersInput, OrganizationUncheckedUpdateWithoutUsersInput>
    create: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutUsersInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutUsersInput, OrganizationUncheckedUpdateWithoutUsersInput>
  }

  export type OrganizationUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Org_ID?: StringFieldUpdateOperationsInput | string
    ftps?: ftpUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Org_ID?: StringFieldUpdateOperationsInput | string
    ftps?: ftpUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type UserLogUpsertWithWhereUniqueWithoutUserInput = {
    where: UserLogWhereUniqueInput
    update: XOR<UserLogUpdateWithoutUserInput, UserLogUncheckedUpdateWithoutUserInput>
    create: XOR<UserLogCreateWithoutUserInput, UserLogUncheckedCreateWithoutUserInput>
  }

  export type UserLogUpdateWithWhereUniqueWithoutUserInput = {
    where: UserLogWhereUniqueInput
    data: XOR<UserLogUpdateWithoutUserInput, UserLogUncheckedUpdateWithoutUserInput>
  }

  export type UserLogUpdateManyWithWhereWithoutUserInput = {
    where: UserLogScalarWhereInput
    data: XOR<UserLogUpdateManyMutationInput, UserLogUncheckedUpdateManyWithoutUserInput>
  }

  export type UserLogScalarWhereInput = {
    AND?: UserLogScalarWhereInput | UserLogScalarWhereInput[]
    OR?: UserLogScalarWhereInput[]
    NOT?: UserLogScalarWhereInput | UserLogScalarWhereInput[]
    id?: IntFilter<"UserLog"> | number
    userid?: StringFilter<"UserLog"> | string
    organizationid?: IntFilter<"UserLog"> | number
    role?: StringFilter<"UserLog"> | string
    actiondate?: DateTimeFilter<"UserLog"> | Date | string
    action?: StringFilter<"UserLog"> | string
  }

  export type OrganizationCreateWithoutFtpsInput = {
    name: string
    createdAt?: Date | string
    Org_ID: string
    users?: UserCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutFtpsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    Org_ID: string
    users?: UserUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutFtpsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutFtpsInput, OrganizationUncheckedCreateWithoutFtpsInput>
  }

  export type OrganizationUpsertWithoutFtpsInput = {
    update: XOR<OrganizationUpdateWithoutFtpsInput, OrganizationUncheckedUpdateWithoutFtpsInput>
    create: XOR<OrganizationCreateWithoutFtpsInput, OrganizationUncheckedCreateWithoutFtpsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutFtpsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutFtpsInput, OrganizationUncheckedUpdateWithoutFtpsInput>
  }

  export type OrganizationUpdateWithoutFtpsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Org_ID?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutFtpsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Org_ID?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type UserCreateWithoutOrganizationInput = {
    id?: string
    email: string
    full_data: JsonNullValueInput | InputJsonValue
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fullname?: string | null
    username?: string | null
    designation?: string | null
    tl?: string | null
    am?: string | null
    manager?: string | null
    shift?: string | null
    datapopulation?: string | null
    userLogs?: UserLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrganizationInput = {
    id?: string
    email: string
    full_data: JsonNullValueInput | InputJsonValue
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fullname?: string | null
    username?: string | null
    designation?: string | null
    tl?: string | null
    am?: string | null
    manager?: string | null
    shift?: string | null
    datapopulation?: string | null
    userLogs?: UserLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrganizationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput>
  }

  export type UserCreateManyOrganizationInputEnvelope = {
    data: UserCreateManyOrganizationInput | UserCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type ftpCreateWithoutOrganizationInput = {
    host: string
    port: number
    username: string
    password: string
    ftppath: string
    ocr?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ftpUncheckedCreateWithoutOrganizationInput = {
    id?: number
    host: string
    port: number
    username: string
    password: string
    ftppath: string
    ocr?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ftpCreateOrConnectWithoutOrganizationInput = {
    where: ftpWhereUniqueInput
    create: XOR<ftpCreateWithoutOrganizationInput, ftpUncheckedCreateWithoutOrganizationInput>
  }

  export type ftpCreateManyOrganizationInputEnvelope = {
    data: ftpCreateManyOrganizationInput | ftpCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutOrganizationInput, UserUncheckedUpdateWithoutOrganizationInput>
    create: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput>
  }

  export type UserUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutOrganizationInput, UserUncheckedUpdateWithoutOrganizationInput>
  }

  export type UserUpdateManyWithWhereWithoutOrganizationInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    full_data?: JsonFilter<"User">
    organizationId?: IntNullableFilter<"User"> | number | null
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    fullname?: StringNullableFilter<"User"> | string | null
    username?: StringNullableFilter<"User"> | string | null
    designation?: StringNullableFilter<"User"> | string | null
    tl?: StringNullableFilter<"User"> | string | null
    am?: StringNullableFilter<"User"> | string | null
    manager?: StringNullableFilter<"User"> | string | null
    shift?: StringNullableFilter<"User"> | string | null
    datapopulation?: StringNullableFilter<"User"> | string | null
  }

  export type ftpUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: ftpWhereUniqueInput
    update: XOR<ftpUpdateWithoutOrganizationInput, ftpUncheckedUpdateWithoutOrganizationInput>
    create: XOR<ftpCreateWithoutOrganizationInput, ftpUncheckedCreateWithoutOrganizationInput>
  }

  export type ftpUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: ftpWhereUniqueInput
    data: XOR<ftpUpdateWithoutOrganizationInput, ftpUncheckedUpdateWithoutOrganizationInput>
  }

  export type ftpUpdateManyWithWhereWithoutOrganizationInput = {
    where: ftpScalarWhereInput
    data: XOR<ftpUpdateManyMutationInput, ftpUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type ftpScalarWhereInput = {
    AND?: ftpScalarWhereInput | ftpScalarWhereInput[]
    OR?: ftpScalarWhereInput[]
    NOT?: ftpScalarWhereInput | ftpScalarWhereInput[]
    id?: IntFilter<"ftp"> | number
    host?: StringFilter<"ftp"> | string
    port?: IntFilter<"ftp"> | number
    username?: StringFilter<"ftp"> | string
    password?: StringFilter<"ftp"> | string
    ftppath?: StringFilter<"ftp"> | string
    organizationId?: IntFilter<"ftp"> | number
    ocr?: BoolFilter<"ftp"> | boolean
    createdAt?: DateTimeFilter<"ftp"> | Date | string
    updatedAt?: DateTimeFilter<"ftp"> | Date | string
  }

  export type TemplateFieldCreateWithoutTemplateInput = {
    type: string
    icon: string
    label: string
    properties: string
    parentId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: TemplateChildCreateNestedManyWithoutTemplateFieldInput
  }

  export type TemplateFieldUncheckedCreateWithoutTemplateInput = {
    id?: number
    type: string
    icon: string
    label: string
    properties: string
    parentId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: TemplateChildUncheckedCreateNestedManyWithoutTemplateFieldInput
  }

  export type TemplateFieldCreateOrConnectWithoutTemplateInput = {
    where: TemplateFieldWhereUniqueInput
    create: XOR<TemplateFieldCreateWithoutTemplateInput, TemplateFieldUncheckedCreateWithoutTemplateInput>
  }

  export type TemplateFieldCreateManyTemplateInputEnvelope = {
    data: TemplateFieldCreateManyTemplateInput | TemplateFieldCreateManyTemplateInput[]
    skipDuplicates?: boolean
  }

  export type TemplateFieldUpsertWithWhereUniqueWithoutTemplateInput = {
    where: TemplateFieldWhereUniqueInput
    update: XOR<TemplateFieldUpdateWithoutTemplateInput, TemplateFieldUncheckedUpdateWithoutTemplateInput>
    create: XOR<TemplateFieldCreateWithoutTemplateInput, TemplateFieldUncheckedCreateWithoutTemplateInput>
  }

  export type TemplateFieldUpdateWithWhereUniqueWithoutTemplateInput = {
    where: TemplateFieldWhereUniqueInput
    data: XOR<TemplateFieldUpdateWithoutTemplateInput, TemplateFieldUncheckedUpdateWithoutTemplateInput>
  }

  export type TemplateFieldUpdateManyWithWhereWithoutTemplateInput = {
    where: TemplateFieldScalarWhereInput
    data: XOR<TemplateFieldUpdateManyMutationInput, TemplateFieldUncheckedUpdateManyWithoutTemplateInput>
  }

  export type TemplateFieldScalarWhereInput = {
    AND?: TemplateFieldScalarWhereInput | TemplateFieldScalarWhereInput[]
    OR?: TemplateFieldScalarWhereInput[]
    NOT?: TemplateFieldScalarWhereInput | TemplateFieldScalarWhereInput[]
    id?: IntFilter<"TemplateField"> | number
    templateId?: IntFilter<"TemplateField"> | number
    type?: StringFilter<"TemplateField"> | string
    icon?: StringFilter<"TemplateField"> | string
    label?: StringFilter<"TemplateField"> | string
    properties?: StringFilter<"TemplateField"> | string
    parentId?: StringNullableFilter<"TemplateField"> | string | null
    isActive?: BoolFilter<"TemplateField"> | boolean
    createdAt?: DateTimeFilter<"TemplateField"> | Date | string
    updatedAt?: DateTimeFilter<"TemplateField"> | Date | string
  }

  export type TemplateCreateWithoutTemplateFieldsInput = {
    name: string
    isActive?: boolean
    isDelete?: boolean
    organizationId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orderno?: number | null
    client?: boolean
  }

  export type TemplateUncheckedCreateWithoutTemplateFieldsInput = {
    id?: number
    name: string
    isActive?: boolean
    isDelete?: boolean
    organizationId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orderno?: number | null
    client?: boolean
  }

  export type TemplateCreateOrConnectWithoutTemplateFieldsInput = {
    where: TemplateWhereUniqueInput
    create: XOR<TemplateCreateWithoutTemplateFieldsInput, TemplateUncheckedCreateWithoutTemplateFieldsInput>
  }

  export type TemplateChildCreateWithoutTemplateFieldInput = {
    type: string
    icon: string
    label: string
    properties: string
    parentId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateChildUncheckedCreateWithoutTemplateFieldInput = {
    id?: number
    type: string
    icon: string
    label: string
    properties: string
    parentId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateChildCreateOrConnectWithoutTemplateFieldInput = {
    where: TemplateChildWhereUniqueInput
    create: XOR<TemplateChildCreateWithoutTemplateFieldInput, TemplateChildUncheckedCreateWithoutTemplateFieldInput>
  }

  export type TemplateChildCreateManyTemplateFieldInputEnvelope = {
    data: TemplateChildCreateManyTemplateFieldInput | TemplateChildCreateManyTemplateFieldInput[]
    skipDuplicates?: boolean
  }

  export type TemplateUpsertWithoutTemplateFieldsInput = {
    update: XOR<TemplateUpdateWithoutTemplateFieldsInput, TemplateUncheckedUpdateWithoutTemplateFieldsInput>
    create: XOR<TemplateCreateWithoutTemplateFieldsInput, TemplateUncheckedCreateWithoutTemplateFieldsInput>
    where?: TemplateWhereInput
  }

  export type TemplateUpdateToOneWithWhereWithoutTemplateFieldsInput = {
    where?: TemplateWhereInput
    data: XOR<TemplateUpdateWithoutTemplateFieldsInput, TemplateUncheckedUpdateWithoutTemplateFieldsInput>
  }

  export type TemplateUpdateWithoutTemplateFieldsInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    organizationId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderno?: NullableIntFieldUpdateOperationsInput | number | null
    client?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TemplateUncheckedUpdateWithoutTemplateFieldsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    organizationId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderno?: NullableIntFieldUpdateOperationsInput | number | null
    client?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TemplateChildUpsertWithWhereUniqueWithoutTemplateFieldInput = {
    where: TemplateChildWhereUniqueInput
    update: XOR<TemplateChildUpdateWithoutTemplateFieldInput, TemplateChildUncheckedUpdateWithoutTemplateFieldInput>
    create: XOR<TemplateChildCreateWithoutTemplateFieldInput, TemplateChildUncheckedCreateWithoutTemplateFieldInput>
  }

  export type TemplateChildUpdateWithWhereUniqueWithoutTemplateFieldInput = {
    where: TemplateChildWhereUniqueInput
    data: XOR<TemplateChildUpdateWithoutTemplateFieldInput, TemplateChildUncheckedUpdateWithoutTemplateFieldInput>
  }

  export type TemplateChildUpdateManyWithWhereWithoutTemplateFieldInput = {
    where: TemplateChildScalarWhereInput
    data: XOR<TemplateChildUpdateManyMutationInput, TemplateChildUncheckedUpdateManyWithoutTemplateFieldInput>
  }

  export type TemplateChildScalarWhereInput = {
    AND?: TemplateChildScalarWhereInput | TemplateChildScalarWhereInput[]
    OR?: TemplateChildScalarWhereInput[]
    NOT?: TemplateChildScalarWhereInput | TemplateChildScalarWhereInput[]
    id?: IntFilter<"TemplateChild"> | number
    templateFieldsId?: IntFilter<"TemplateChild"> | number
    type?: StringFilter<"TemplateChild"> | string
    icon?: StringFilter<"TemplateChild"> | string
    label?: StringFilter<"TemplateChild"> | string
    properties?: StringFilter<"TemplateChild"> | string
    parentId?: StringNullableFilter<"TemplateChild"> | string | null
    isActive?: BoolFilter<"TemplateChild"> | boolean
    createdAt?: DateTimeFilter<"TemplateChild"> | Date | string
    updatedAt?: DateTimeFilter<"TemplateChild"> | Date | string
  }

  export type TemplateFieldCreateWithoutChildrenInput = {
    type: string
    icon: string
    label: string
    properties: string
    parentId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    template: TemplateCreateNestedOneWithoutTemplateFieldsInput
  }

  export type TemplateFieldUncheckedCreateWithoutChildrenInput = {
    id?: number
    templateId: number
    type: string
    icon: string
    label: string
    properties: string
    parentId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateFieldCreateOrConnectWithoutChildrenInput = {
    where: TemplateFieldWhereUniqueInput
    create: XOR<TemplateFieldCreateWithoutChildrenInput, TemplateFieldUncheckedCreateWithoutChildrenInput>
  }

  export type TemplateFieldUpsertWithoutChildrenInput = {
    update: XOR<TemplateFieldUpdateWithoutChildrenInput, TemplateFieldUncheckedUpdateWithoutChildrenInput>
    create: XOR<TemplateFieldCreateWithoutChildrenInput, TemplateFieldUncheckedCreateWithoutChildrenInput>
    where?: TemplateFieldWhereInput
  }

  export type TemplateFieldUpdateToOneWithWhereWithoutChildrenInput = {
    where?: TemplateFieldWhereInput
    data: XOR<TemplateFieldUpdateWithoutChildrenInput, TemplateFieldUncheckedUpdateWithoutChildrenInput>
  }

  export type TemplateFieldUpdateWithoutChildrenInput = {
    type?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    properties?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    template?: TemplateUpdateOneRequiredWithoutTemplateFieldsNestedInput
  }

  export type TemplateFieldUncheckedUpdateWithoutChildrenInput = {
    id?: IntFieldUpdateOperationsInput | number
    templateId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    properties?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutUserLogsInput = {
    id?: string
    email: string
    full_data: JsonNullValueInput | InputJsonValue
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fullname?: string | null
    username?: string | null
    designation?: string | null
    tl?: string | null
    am?: string | null
    manager?: string | null
    shift?: string | null
    datapopulation?: string | null
    organization?: OrganizationCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutUserLogsInput = {
    id?: string
    email: string
    full_data: JsonNullValueInput | InputJsonValue
    organizationId?: number | null
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fullname?: string | null
    username?: string | null
    designation?: string | null
    tl?: string | null
    am?: string | null
    manager?: string | null
    shift?: string | null
    datapopulation?: string | null
  }

  export type UserCreateOrConnectWithoutUserLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserLogsInput, UserUncheckedCreateWithoutUserLogsInput>
  }

  export type UserUpsertWithoutUserLogsInput = {
    update: XOR<UserUpdateWithoutUserLogsInput, UserUncheckedUpdateWithoutUserLogsInput>
    create: XOR<UserCreateWithoutUserLogsInput, UserUncheckedCreateWithoutUserLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserLogsInput, UserUncheckedUpdateWithoutUserLogsInput>
  }

  export type UserUpdateWithoutUserLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    full_data?: JsonNullValueInput | InputJsonValue
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    tl?: NullableStringFieldUpdateOperationsInput | string | null
    am?: NullableStringFieldUpdateOperationsInput | string | null
    manager?: NullableStringFieldUpdateOperationsInput | string | null
    shift?: NullableStringFieldUpdateOperationsInput | string | null
    datapopulation?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: OrganizationUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutUserLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    full_data?: JsonNullValueInput | InputJsonValue
    organizationId?: NullableIntFieldUpdateOperationsInput | number | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    tl?: NullableStringFieldUpdateOperationsInput | string | null
    am?: NullableStringFieldUpdateOperationsInput | string | null
    manager?: NullableStringFieldUpdateOperationsInput | string | null
    shift?: NullableStringFieldUpdateOperationsInput | string | null
    datapopulation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserLogCreateManyUserInput = {
    id?: number
    organizationid: number
    role: string
    actiondate?: Date | string
    action: string
  }

  export type UserLogUpdateWithoutUserInput = {
    organizationid?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    actiondate?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: StringFieldUpdateOperationsInput | string
  }

  export type UserLogUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizationid?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    actiondate?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: StringFieldUpdateOperationsInput | string
  }

  export type UserLogUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizationid?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    actiondate?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyOrganizationInput = {
    id?: string
    email: string
    full_data: JsonNullValueInput | InputJsonValue
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fullname?: string | null
    username?: string | null
    designation?: string | null
    tl?: string | null
    am?: string | null
    manager?: string | null
    shift?: string | null
    datapopulation?: string | null
  }

  export type ftpCreateManyOrganizationInput = {
    id?: number
    host: string
    port: number
    username: string
    password: string
    ftppath: string
    ocr?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    full_data?: JsonNullValueInput | InputJsonValue
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    tl?: NullableStringFieldUpdateOperationsInput | string | null
    am?: NullableStringFieldUpdateOperationsInput | string | null
    manager?: NullableStringFieldUpdateOperationsInput | string | null
    shift?: NullableStringFieldUpdateOperationsInput | string | null
    datapopulation?: NullableStringFieldUpdateOperationsInput | string | null
    userLogs?: UserLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    full_data?: JsonNullValueInput | InputJsonValue
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    tl?: NullableStringFieldUpdateOperationsInput | string | null
    am?: NullableStringFieldUpdateOperationsInput | string | null
    manager?: NullableStringFieldUpdateOperationsInput | string | null
    shift?: NullableStringFieldUpdateOperationsInput | string | null
    datapopulation?: NullableStringFieldUpdateOperationsInput | string | null
    userLogs?: UserLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    full_data?: JsonNullValueInput | InputJsonValue
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    tl?: NullableStringFieldUpdateOperationsInput | string | null
    am?: NullableStringFieldUpdateOperationsInput | string | null
    manager?: NullableStringFieldUpdateOperationsInput | string | null
    shift?: NullableStringFieldUpdateOperationsInput | string | null
    datapopulation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ftpUpdateWithoutOrganizationInput = {
    host?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    ftppath?: StringFieldUpdateOperationsInput | string
    ocr?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ftpUncheckedUpdateWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    host?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    ftppath?: StringFieldUpdateOperationsInput | string
    ocr?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ftpUncheckedUpdateManyWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    host?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    ftppath?: StringFieldUpdateOperationsInput | string
    ocr?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateFieldCreateManyTemplateInput = {
    id?: number
    type: string
    icon: string
    label: string
    properties: string
    parentId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateFieldUpdateWithoutTemplateInput = {
    type?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    properties?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: TemplateChildUpdateManyWithoutTemplateFieldNestedInput
  }

  export type TemplateFieldUncheckedUpdateWithoutTemplateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    properties?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: TemplateChildUncheckedUpdateManyWithoutTemplateFieldNestedInput
  }

  export type TemplateFieldUncheckedUpdateManyWithoutTemplateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    properties?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateChildCreateManyTemplateFieldInput = {
    id?: number
    type: string
    icon: string
    label: string
    properties: string
    parentId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateChildUpdateWithoutTemplateFieldInput = {
    type?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    properties?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateChildUncheckedUpdateWithoutTemplateFieldInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    properties?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateChildUncheckedUpdateManyWithoutTemplateFieldInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    properties?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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