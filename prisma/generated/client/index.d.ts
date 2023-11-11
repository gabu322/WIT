
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model orders
 * 
 */
export type orders = $Result.DefaultSelection<Prisma.$ordersPayload>
/**
 * Model products
 * 
 */
export type products = $Result.DefaultSelection<Prisma.$productsPayload>
/**
 * Model productImages
 * 
 */
export type productImages = $Result.DefaultSelection<Prisma.$productImagesPayload>
/**
 * Model productVariations
 * 
 */
export type productVariations = $Result.DefaultSelection<Prisma.$productVariationsPayload>
/**
 * Model orderItems
 * 
 */
export type orderItems = $Result.DefaultSelection<Prisma.$orderItemsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Orders
 * const orders = await prisma.orders.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Orders
   * const orders = await prisma.orders.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.orders`: Exposes CRUD operations for the **orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.ordersDelegate<ExtArgs>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.productsDelegate<ExtArgs>;

  /**
   * `prisma.productImages`: Exposes CRUD operations for the **productImages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductImages
    * const productImages = await prisma.productImages.findMany()
    * ```
    */
  get productImages(): Prisma.productImagesDelegate<ExtArgs>;

  /**
   * `prisma.productVariations`: Exposes CRUD operations for the **productVariations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductVariations
    * const productVariations = await prisma.productVariations.findMany()
    * ```
    */
  get productVariations(): Prisma.productVariationsDelegate<ExtArgs>;

  /**
   * `prisma.orderItems`: Exposes CRUD operations for the **orderItems** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItems.findMany()
    * ```
    */
  get orderItems(): Prisma.orderItemsDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.5.2
   * Query Engine version: 2f302df92bd8945e20ad4595a73def5b96afa54f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    orders: 'orders',
    products: 'products',
    productImages: 'productImages',
    productVariations: 'productVariations',
    orderItems: 'orderItems'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'orders' | 'products' | 'productImages' | 'productVariations' | 'orderItems'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      orders: {
        payload: Prisma.$ordersPayload<ExtArgs>
        fields: Prisma.ordersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ordersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ordersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findFirst: {
            args: Prisma.ordersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ordersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findMany: {
            args: Prisma.ordersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          create: {
            args: Prisma.ordersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          createMany: {
            args: Prisma.ordersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ordersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          update: {
            args: Prisma.ordersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          deleteMany: {
            args: Prisma.ordersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ordersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ordersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.ordersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ordersCountArgs<ExtArgs>,
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      products: {
        payload: Prisma.$productsPayload<ExtArgs>
        fields: Prisma.productsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findFirst: {
            args: Prisma.productsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findMany: {
            args: Prisma.productsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          create: {
            args: Prisma.productsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          createMany: {
            args: Prisma.productsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.productsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          update: {
            args: Prisma.productsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          deleteMany: {
            args: Prisma.productsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.productsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.productsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.productsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.productsCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      productImages: {
        payload: Prisma.$productImagesPayload<ExtArgs>
        fields: Prisma.productImagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productImagesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productImagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productImagesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productImagesPayload>
          }
          findFirst: {
            args: Prisma.productImagesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productImagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productImagesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productImagesPayload>
          }
          findMany: {
            args: Prisma.productImagesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productImagesPayload>[]
          }
          create: {
            args: Prisma.productImagesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productImagesPayload>
          }
          createMany: {
            args: Prisma.productImagesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.productImagesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productImagesPayload>
          }
          update: {
            args: Prisma.productImagesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productImagesPayload>
          }
          deleteMany: {
            args: Prisma.productImagesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.productImagesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.productImagesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productImagesPayload>
          }
          aggregate: {
            args: Prisma.ProductImagesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProductImages>
          }
          groupBy: {
            args: Prisma.productImagesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductImagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.productImagesCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductImagesCountAggregateOutputType> | number
          }
        }
      }
      productVariations: {
        payload: Prisma.$productVariationsPayload<ExtArgs>
        fields: Prisma.productVariationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productVariationsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productVariationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productVariationsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productVariationsPayload>
          }
          findFirst: {
            args: Prisma.productVariationsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productVariationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productVariationsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productVariationsPayload>
          }
          findMany: {
            args: Prisma.productVariationsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productVariationsPayload>[]
          }
          create: {
            args: Prisma.productVariationsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productVariationsPayload>
          }
          createMany: {
            args: Prisma.productVariationsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.productVariationsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productVariationsPayload>
          }
          update: {
            args: Prisma.productVariationsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productVariationsPayload>
          }
          deleteMany: {
            args: Prisma.productVariationsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.productVariationsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.productVariationsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productVariationsPayload>
          }
          aggregate: {
            args: Prisma.ProductVariationsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProductVariations>
          }
          groupBy: {
            args: Prisma.productVariationsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductVariationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.productVariationsCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductVariationsCountAggregateOutputType> | number
          }
        }
      }
      orderItems: {
        payload: Prisma.$orderItemsPayload<ExtArgs>
        fields: Prisma.orderItemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.orderItemsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$orderItemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.orderItemsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$orderItemsPayload>
          }
          findFirst: {
            args: Prisma.orderItemsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$orderItemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.orderItemsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$orderItemsPayload>
          }
          findMany: {
            args: Prisma.orderItemsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$orderItemsPayload>[]
          }
          create: {
            args: Prisma.orderItemsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$orderItemsPayload>
          }
          createMany: {
            args: Prisma.orderItemsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.orderItemsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$orderItemsPayload>
          }
          update: {
            args: Prisma.orderItemsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$orderItemsPayload>
          }
          deleteMany: {
            args: Prisma.orderItemsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.orderItemsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.orderItemsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$orderItemsPayload>
          }
          aggregate: {
            args: Prisma.OrderItemsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOrderItems>
          }
          groupBy: {
            args: Prisma.orderItemsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OrderItemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.orderItemsCountArgs<ExtArgs>,
            result: $Utils.Optional<OrderItemsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    | 'update'
    | 'updateMany'
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
   * Count Type OrdersCountOutputType
   */

  export type OrdersCountOutputType = {
    orderItems: number
  }

  export type OrdersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItems?: boolean | OrdersCountOutputTypeCountOrderItemsArgs
  }

  // Custom InputTypes

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdersCountOutputType
     */
    select?: OrdersCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderItemsWhereInput
  }



  /**
   * Count Type ProductsCountOutputType
   */

  export type ProductsCountOutputType = {
    productImages: number
    productVariations: number
  }

  export type ProductsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productImages?: boolean | ProductsCountOutputTypeCountProductImagesArgs
    productVariations?: boolean | ProductsCountOutputTypeCountProductVariationsArgs
  }

  // Custom InputTypes

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: ProductsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountProductImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productImagesWhereInput
  }


  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountProductVariationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productVariationsWhereInput
  }



  /**
   * Count Type ProductVariationsCountOutputType
   */

  export type ProductVariationsCountOutputType = {
    orderItems: number
  }

  export type ProductVariationsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItems?: boolean | ProductVariationsCountOutputTypeCountOrderItemsArgs
  }

  // Custom InputTypes

  /**
   * ProductVariationsCountOutputType without action
   */
  export type ProductVariationsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariationsCountOutputType
     */
    select?: ProductVariationsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ProductVariationsCountOutputType without action
   */
  export type ProductVariationsCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderItemsWhereInput
  }



  /**
   * Models
   */

  /**
   * Model orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    id: number | null
  }

  export type OrdersSumAggregateOutputType = {
    id: number | null
  }

  export type OrdersMinAggregateOutputType = {
    id: number | null
    date: Date | null
  }

  export type OrdersMaxAggregateOutputType = {
    id: number | null
    date: Date | null
  }

  export type OrdersCountAggregateOutputType = {
    id: number
    date: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    id?: true
  }

  export type OrdersSumAggregateInputType = {
    id?: true
  }

  export type OrdersMinAggregateInputType = {
    id?: true
    date?: true
  }

  export type OrdersMaxAggregateInputType = {
    id?: true
    date?: true
  }

  export type OrdersCountAggregateInputType = {
    id?: true
    date?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to aggregate.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type ordersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithAggregationInput | ordersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: ordersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    id: number
    date: Date
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends ordersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type ordersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    orderItems?: boolean | orders$orderItemsArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectScalar = {
    id?: boolean
    date?: boolean
  }

  export type ordersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItems?: boolean | orders$orderItemsArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ordersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "orders"
    objects: {
      orderItems: Prisma.$orderItemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }


  type ordersGetPayload<S extends boolean | null | undefined | ordersDefaultArgs> = $Result.GetResult<Prisma.$ordersPayload, S>

  type ordersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ordersFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface ordersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['orders'], meta: { name: 'orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {ordersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ordersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ordersFindUniqueArgs<ExtArgs>>
    ): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Orders that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ordersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ordersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ordersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ordersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ordersFindFirstArgs<ExtArgs>>
    ): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ordersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ordersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordersWithIdOnly = await prisma.orders.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ordersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ordersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Orders.
     * @param {ordersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
    **/
    create<T extends ordersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ordersCreateArgs<ExtArgs>>
    ): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Orders.
     *     @param {ordersCreateManyArgs} args - Arguments to create many Orders.
     *     @example
     *     // Create many Orders
     *     const orders = await prisma.orders.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ordersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ordersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Orders.
     * @param {ordersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
    **/
    delete<T extends ordersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ordersDeleteArgs<ExtArgs>>
    ): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Orders.
     * @param {ordersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ordersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ordersUpdateArgs<ExtArgs>>
    ): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Orders.
     * @param {ordersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ordersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ordersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ordersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ordersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Orders.
     * @param {ordersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
    **/
    upsert<T extends ordersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ordersUpsertArgs<ExtArgs>>
    ): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends ordersCountArgs>(
      args?: Subset<T, ordersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersGroupByArgs} args - Group by arguments.
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
      T extends ordersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ordersGroupByArgs['orderBy'] }
        : { orderBy?: ordersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ordersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the orders model
   */
  readonly fields: ordersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ordersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    orderItems<T extends orders$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, orders$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderItemsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the orders model
   */ 
  interface ordersFieldRefs {
    readonly id: FieldRef<"orders", 'Int'>
    readonly date: FieldRef<"orders", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * orders findUnique
   */
  export type ordersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }


  /**
   * orders findUniqueOrThrow
   */
  export type ordersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }


  /**
   * orders findFirst
   */
  export type ordersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }


  /**
   * orders findFirstOrThrow
   */
  export type ordersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }


  /**
   * orders findMany
   */
  export type ordersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }


  /**
   * orders create
   */
  export type ordersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to create a orders.
     */
    data?: XOR<ordersCreateInput, ordersUncheckedCreateInput>
  }


  /**
   * orders createMany
   */
  export type ordersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orders.
     */
    data: ordersCreateManyInput | ordersCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * orders update
   */
  export type ordersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to update a orders.
     */
    data: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
    /**
     * Choose, which orders to update.
     */
    where: ordersWhereUniqueInput
  }


  /**
   * orders updateMany
   */
  export type ordersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orders.
     */
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: ordersWhereInput
  }


  /**
   * orders upsert
   */
  export type ordersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The filter to search for the orders to update in case it exists.
     */
    where: ordersWhereUniqueInput
    /**
     * In case the orders found by the `where` argument doesn't exist, create a new orders with this data.
     */
    create: XOR<ordersCreateInput, ordersUncheckedCreateInput>
    /**
     * In case the orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
  }


  /**
   * orders delete
   */
  export type ordersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter which orders to delete.
     */
    where: ordersWhereUniqueInput
  }


  /**
   * orders deleteMany
   */
  export type ordersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to delete
     */
    where?: ordersWhereInput
  }


  /**
   * orders.orderItems
   */
  export type orders$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItems
     */
    select?: orderItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderItemsInclude<ExtArgs> | null
    where?: orderItemsWhereInput
    orderBy?: orderItemsOrderByWithRelationInput | orderItemsOrderByWithRelationInput[]
    cursor?: orderItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemsScalarFieldEnum | OrderItemsScalarFieldEnum[]
  }


  /**
   * orders without action
   */
  export type ordersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude<ExtArgs> | null
  }



  /**
   * Model products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    id: number | null
  }

  export type ProductsSumAggregateOutputType = {
    id: number | null
  }

  export type ProductsMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    link: string | null
    shopeeId: string | null
  }

  export type ProductsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    link: string | null
    shopeeId: string | null
  }

  export type ProductsCountAggregateOutputType = {
    id: number
    name: number
    description: number
    link: number
    shopeeId: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    id?: true
  }

  export type ProductsSumAggregateInputType = {
    id?: true
  }

  export type ProductsMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    link?: true
    shopeeId?: true
  }

  export type ProductsMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    link?: true
    shopeeId?: true
  }

  export type ProductsCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    link?: true
    shopeeId?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to aggregate.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type productsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
    orderBy?: productsOrderByWithAggregationInput | productsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: productsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    id: number
    name: string
    description: string | null
    link: string | null
    shopeeId: string | null
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends productsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type productsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    link?: boolean
    shopeeId?: boolean
    productImages?: boolean | products$productImagesArgs<ExtArgs>
    productVariations?: boolean | products$productVariationsArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type productsSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    link?: boolean
    shopeeId?: boolean
  }

  export type productsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productImages?: boolean | products$productImagesArgs<ExtArgs>
    productVariations?: boolean | products$productVariationsArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $productsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "products"
    objects: {
      productImages: Prisma.$productImagesPayload<ExtArgs>[]
      productVariations: Prisma.$productVariationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      link: string | null
      shopeeId: string | null
    }, ExtArgs["result"]["products"]>
    composites: {}
  }


  type productsGetPayload<S extends boolean | null | undefined | productsDefaultArgs> = $Result.GetResult<Prisma.$productsPayload, S>

  type productsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<productsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface productsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['products'], meta: { name: 'products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {productsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends productsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, productsFindUniqueArgs<ExtArgs>>
    ): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Products that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {productsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends productsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, productsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends productsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, productsFindFirstArgs<ExtArgs>>
    ): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends productsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, productsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productsWithIdOnly = await prisma.products.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends productsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, productsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Products.
     * @param {productsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
    **/
    create<T extends productsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, productsCreateArgs<ExtArgs>>
    ): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Products.
     *     @param {productsCreateManyArgs} args - Arguments to create many Products.
     *     @example
     *     // Create many Products
     *     const products = await prisma.products.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends productsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, productsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Products.
     * @param {productsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
    **/
    delete<T extends productsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, productsDeleteArgs<ExtArgs>>
    ): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Products.
     * @param {productsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends productsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, productsUpdateArgs<ExtArgs>>
    ): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {productsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends productsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, productsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends productsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, productsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Products.
     * @param {productsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
    **/
    upsert<T extends productsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, productsUpsertArgs<ExtArgs>>
    ): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productsCountArgs>(
      args?: Subset<T, productsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsGroupByArgs} args - Group by arguments.
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
      T extends productsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productsGroupByArgs['orderBy'] }
        : { orderBy?: productsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, productsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the products model
   */
  readonly fields: productsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    productImages<T extends products$productImagesArgs<ExtArgs> = {}>(args?: Subset<T, products$productImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productImagesPayload<ExtArgs>, T, 'findMany'> | Null>;

    productVariations<T extends products$productVariationsArgs<ExtArgs> = {}>(args?: Subset<T, products$productVariationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productVariationsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the products model
   */ 
  interface productsFieldRefs {
    readonly id: FieldRef<"products", 'Int'>
    readonly name: FieldRef<"products", 'String'>
    readonly description: FieldRef<"products", 'String'>
    readonly link: FieldRef<"products", 'String'>
    readonly shopeeId: FieldRef<"products", 'String'>
  }
    

  // Custom InputTypes

  /**
   * products findUnique
   */
  export type productsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }


  /**
   * products findUniqueOrThrow
   */
  export type productsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }


  /**
   * products findFirst
   */
  export type productsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }


  /**
   * products findFirstOrThrow
   */
  export type productsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }


  /**
   * products findMany
   */
  export type productsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }


  /**
   * products create
   */
  export type productsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to create a products.
     */
    data: XOR<productsCreateInput, productsUncheckedCreateInput>
  }


  /**
   * products createMany
   */
  export type productsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * products update
   */
  export type productsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to update a products.
     */
    data: XOR<productsUpdateInput, productsUncheckedUpdateInput>
    /**
     * Choose, which products to update.
     */
    where: productsWhereUniqueInput
  }


  /**
   * products updateMany
   */
  export type productsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
  }


  /**
   * products upsert
   */
  export type productsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The filter to search for the products to update in case it exists.
     */
    where: productsWhereUniqueInput
    /**
     * In case the products found by the `where` argument doesn't exist, create a new products with this data.
     */
    create: XOR<productsCreateInput, productsUncheckedCreateInput>
    /**
     * In case the products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productsUpdateInput, productsUncheckedUpdateInput>
  }


  /**
   * products delete
   */
  export type productsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter which products to delete.
     */
    where: productsWhereUniqueInput
  }


  /**
   * products deleteMany
   */
  export type productsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to delete
     */
    where?: productsWhereInput
  }


  /**
   * products.productImages
   */
  export type products$productImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productImages
     */
    select?: productImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productImagesInclude<ExtArgs> | null
    where?: productImagesWhereInput
    orderBy?: productImagesOrderByWithRelationInput | productImagesOrderByWithRelationInput[]
    cursor?: productImagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductImagesScalarFieldEnum | ProductImagesScalarFieldEnum[]
  }


  /**
   * products.productVariations
   */
  export type products$productVariationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productVariations
     */
    select?: productVariationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productVariationsInclude<ExtArgs> | null
    where?: productVariationsWhereInput
    orderBy?: productVariationsOrderByWithRelationInput | productVariationsOrderByWithRelationInput[]
    cursor?: productVariationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductVariationsScalarFieldEnum | ProductVariationsScalarFieldEnum[]
  }


  /**
   * products without action
   */
  export type productsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productsInclude<ExtArgs> | null
  }



  /**
   * Model productImages
   */

  export type AggregateProductImages = {
    _count: ProductImagesCountAggregateOutputType | null
    _avg: ProductImagesAvgAggregateOutputType | null
    _sum: ProductImagesSumAggregateOutputType | null
    _min: ProductImagesMinAggregateOutputType | null
    _max: ProductImagesMaxAggregateOutputType | null
  }

  export type ProductImagesAvgAggregateOutputType = {
    id: number | null
    productId: number | null
  }

  export type ProductImagesSumAggregateOutputType = {
    id: number | null
    productId: number | null
  }

  export type ProductImagesMinAggregateOutputType = {
    id: number | null
    productId: number | null
    link: string | null
  }

  export type ProductImagesMaxAggregateOutputType = {
    id: number | null
    productId: number | null
    link: string | null
  }

  export type ProductImagesCountAggregateOutputType = {
    id: number
    productId: number
    link: number
    _all: number
  }


  export type ProductImagesAvgAggregateInputType = {
    id?: true
    productId?: true
  }

  export type ProductImagesSumAggregateInputType = {
    id?: true
    productId?: true
  }

  export type ProductImagesMinAggregateInputType = {
    id?: true
    productId?: true
    link?: true
  }

  export type ProductImagesMaxAggregateInputType = {
    id?: true
    productId?: true
    link?: true
  }

  export type ProductImagesCountAggregateInputType = {
    id?: true
    productId?: true
    link?: true
    _all?: true
  }

  export type ProductImagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which productImages to aggregate.
     */
    where?: productImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productImages to fetch.
     */
    orderBy?: productImagesOrderByWithRelationInput | productImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned productImages
    **/
    _count?: true | ProductImagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductImagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductImagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductImagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductImagesMaxAggregateInputType
  }

  export type GetProductImagesAggregateType<T extends ProductImagesAggregateArgs> = {
        [P in keyof T & keyof AggregateProductImages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductImages[P]>
      : GetScalarType<T[P], AggregateProductImages[P]>
  }




  export type productImagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productImagesWhereInput
    orderBy?: productImagesOrderByWithAggregationInput | productImagesOrderByWithAggregationInput[]
    by: ProductImagesScalarFieldEnum[] | ProductImagesScalarFieldEnum
    having?: productImagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductImagesCountAggregateInputType | true
    _avg?: ProductImagesAvgAggregateInputType
    _sum?: ProductImagesSumAggregateInputType
    _min?: ProductImagesMinAggregateInputType
    _max?: ProductImagesMaxAggregateInputType
  }

  export type ProductImagesGroupByOutputType = {
    id: number
    productId: number
    link: string
    _count: ProductImagesCountAggregateOutputType | null
    _avg: ProductImagesAvgAggregateOutputType | null
    _sum: ProductImagesSumAggregateOutputType | null
    _min: ProductImagesMinAggregateOutputType | null
    _max: ProductImagesMaxAggregateOutputType | null
  }

  type GetProductImagesGroupByPayload<T extends productImagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductImagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductImagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductImagesGroupByOutputType[P]>
            : GetScalarType<T[P], ProductImagesGroupByOutputType[P]>
        }
      >
    >


  export type productImagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    link?: boolean
    product?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productImages"]>

  export type productImagesSelectScalar = {
    id?: boolean
    productId?: boolean
    link?: boolean
  }

  export type productImagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | productsDefaultArgs<ExtArgs>
  }


  export type $productImagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "productImages"
    objects: {
      product: Prisma.$productsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productId: number
      link: string
    }, ExtArgs["result"]["productImages"]>
    composites: {}
  }


  type productImagesGetPayload<S extends boolean | null | undefined | productImagesDefaultArgs> = $Result.GetResult<Prisma.$productImagesPayload, S>

  type productImagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<productImagesFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ProductImagesCountAggregateInputType | true
    }

  export interface productImagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['productImages'], meta: { name: 'productImages' } }
    /**
     * Find zero or one ProductImages that matches the filter.
     * @param {productImagesFindUniqueArgs} args - Arguments to find a ProductImages
     * @example
     * // Get one ProductImages
     * const productImages = await prisma.productImages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends productImagesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, productImagesFindUniqueArgs<ExtArgs>>
    ): Prisma__productImagesClient<$Result.GetResult<Prisma.$productImagesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ProductImages that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {productImagesFindUniqueOrThrowArgs} args - Arguments to find a ProductImages
     * @example
     * // Get one ProductImages
     * const productImages = await prisma.productImages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends productImagesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, productImagesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__productImagesClient<$Result.GetResult<Prisma.$productImagesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ProductImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productImagesFindFirstArgs} args - Arguments to find a ProductImages
     * @example
     * // Get one ProductImages
     * const productImages = await prisma.productImages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends productImagesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, productImagesFindFirstArgs<ExtArgs>>
    ): Prisma__productImagesClient<$Result.GetResult<Prisma.$productImagesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ProductImages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productImagesFindFirstOrThrowArgs} args - Arguments to find a ProductImages
     * @example
     * // Get one ProductImages
     * const productImages = await prisma.productImages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends productImagesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, productImagesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__productImagesClient<$Result.GetResult<Prisma.$productImagesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ProductImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productImagesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductImages
     * const productImages = await prisma.productImages.findMany()
     * 
     * // Get first 10 ProductImages
     * const productImages = await prisma.productImages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productImagesWithIdOnly = await prisma.productImages.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends productImagesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, productImagesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productImagesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ProductImages.
     * @param {productImagesCreateArgs} args - Arguments to create a ProductImages.
     * @example
     * // Create one ProductImages
     * const ProductImages = await prisma.productImages.create({
     *   data: {
     *     // ... data to create a ProductImages
     *   }
     * })
     * 
    **/
    create<T extends productImagesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, productImagesCreateArgs<ExtArgs>>
    ): Prisma__productImagesClient<$Result.GetResult<Prisma.$productImagesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ProductImages.
     *     @param {productImagesCreateManyArgs} args - Arguments to create many ProductImages.
     *     @example
     *     // Create many ProductImages
     *     const productImages = await prisma.productImages.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends productImagesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, productImagesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductImages.
     * @param {productImagesDeleteArgs} args - Arguments to delete one ProductImages.
     * @example
     * // Delete one ProductImages
     * const ProductImages = await prisma.productImages.delete({
     *   where: {
     *     // ... filter to delete one ProductImages
     *   }
     * })
     * 
    **/
    delete<T extends productImagesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, productImagesDeleteArgs<ExtArgs>>
    ): Prisma__productImagesClient<$Result.GetResult<Prisma.$productImagesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ProductImages.
     * @param {productImagesUpdateArgs} args - Arguments to update one ProductImages.
     * @example
     * // Update one ProductImages
     * const productImages = await prisma.productImages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends productImagesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, productImagesUpdateArgs<ExtArgs>>
    ): Prisma__productImagesClient<$Result.GetResult<Prisma.$productImagesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ProductImages.
     * @param {productImagesDeleteManyArgs} args - Arguments to filter ProductImages to delete.
     * @example
     * // Delete a few ProductImages
     * const { count } = await prisma.productImages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends productImagesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, productImagesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productImagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductImages
     * const productImages = await prisma.productImages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends productImagesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, productImagesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductImages.
     * @param {productImagesUpsertArgs} args - Arguments to update or create a ProductImages.
     * @example
     * // Update or create a ProductImages
     * const productImages = await prisma.productImages.upsert({
     *   create: {
     *     // ... data to create a ProductImages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductImages we want to update
     *   }
     * })
    **/
    upsert<T extends productImagesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, productImagesUpsertArgs<ExtArgs>>
    ): Prisma__productImagesClient<$Result.GetResult<Prisma.$productImagesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ProductImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productImagesCountArgs} args - Arguments to filter ProductImages to count.
     * @example
     * // Count the number of ProductImages
     * const count = await prisma.productImages.count({
     *   where: {
     *     // ... the filter for the ProductImages we want to count
     *   }
     * })
    **/
    count<T extends productImagesCountArgs>(
      args?: Subset<T, productImagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductImagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductImagesAggregateArgs>(args: Subset<T, ProductImagesAggregateArgs>): Prisma.PrismaPromise<GetProductImagesAggregateType<T>>

    /**
     * Group by ProductImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productImagesGroupByArgs} args - Group by arguments.
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
      T extends productImagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productImagesGroupByArgs['orderBy'] }
        : { orderBy?: productImagesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, productImagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductImagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the productImages model
   */
  readonly fields: productImagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for productImages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productImagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    product<T extends productsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productsDefaultArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the productImages model
   */ 
  interface productImagesFieldRefs {
    readonly id: FieldRef<"productImages", 'Int'>
    readonly productId: FieldRef<"productImages", 'Int'>
    readonly link: FieldRef<"productImages", 'String'>
  }
    

  // Custom InputTypes

  /**
   * productImages findUnique
   */
  export type productImagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productImages
     */
    select?: productImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productImagesInclude<ExtArgs> | null
    /**
     * Filter, which productImages to fetch.
     */
    where: productImagesWhereUniqueInput
  }


  /**
   * productImages findUniqueOrThrow
   */
  export type productImagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productImages
     */
    select?: productImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productImagesInclude<ExtArgs> | null
    /**
     * Filter, which productImages to fetch.
     */
    where: productImagesWhereUniqueInput
  }


  /**
   * productImages findFirst
   */
  export type productImagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productImages
     */
    select?: productImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productImagesInclude<ExtArgs> | null
    /**
     * Filter, which productImages to fetch.
     */
    where?: productImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productImages to fetch.
     */
    orderBy?: productImagesOrderByWithRelationInput | productImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productImages.
     */
    cursor?: productImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productImages.
     */
    distinct?: ProductImagesScalarFieldEnum | ProductImagesScalarFieldEnum[]
  }


  /**
   * productImages findFirstOrThrow
   */
  export type productImagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productImages
     */
    select?: productImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productImagesInclude<ExtArgs> | null
    /**
     * Filter, which productImages to fetch.
     */
    where?: productImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productImages to fetch.
     */
    orderBy?: productImagesOrderByWithRelationInput | productImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productImages.
     */
    cursor?: productImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productImages.
     */
    distinct?: ProductImagesScalarFieldEnum | ProductImagesScalarFieldEnum[]
  }


  /**
   * productImages findMany
   */
  export type productImagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productImages
     */
    select?: productImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productImagesInclude<ExtArgs> | null
    /**
     * Filter, which productImages to fetch.
     */
    where?: productImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productImages to fetch.
     */
    orderBy?: productImagesOrderByWithRelationInput | productImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing productImages.
     */
    cursor?: productImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productImages.
     */
    skip?: number
    distinct?: ProductImagesScalarFieldEnum | ProductImagesScalarFieldEnum[]
  }


  /**
   * productImages create
   */
  export type productImagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productImages
     */
    select?: productImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productImagesInclude<ExtArgs> | null
    /**
     * The data needed to create a productImages.
     */
    data: XOR<productImagesCreateInput, productImagesUncheckedCreateInput>
  }


  /**
   * productImages createMany
   */
  export type productImagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many productImages.
     */
    data: productImagesCreateManyInput | productImagesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * productImages update
   */
  export type productImagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productImages
     */
    select?: productImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productImagesInclude<ExtArgs> | null
    /**
     * The data needed to update a productImages.
     */
    data: XOR<productImagesUpdateInput, productImagesUncheckedUpdateInput>
    /**
     * Choose, which productImages to update.
     */
    where: productImagesWhereUniqueInput
  }


  /**
   * productImages updateMany
   */
  export type productImagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update productImages.
     */
    data: XOR<productImagesUpdateManyMutationInput, productImagesUncheckedUpdateManyInput>
    /**
     * Filter which productImages to update
     */
    where?: productImagesWhereInput
  }


  /**
   * productImages upsert
   */
  export type productImagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productImages
     */
    select?: productImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productImagesInclude<ExtArgs> | null
    /**
     * The filter to search for the productImages to update in case it exists.
     */
    where: productImagesWhereUniqueInput
    /**
     * In case the productImages found by the `where` argument doesn't exist, create a new productImages with this data.
     */
    create: XOR<productImagesCreateInput, productImagesUncheckedCreateInput>
    /**
     * In case the productImages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productImagesUpdateInput, productImagesUncheckedUpdateInput>
  }


  /**
   * productImages delete
   */
  export type productImagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productImages
     */
    select?: productImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productImagesInclude<ExtArgs> | null
    /**
     * Filter which productImages to delete.
     */
    where: productImagesWhereUniqueInput
  }


  /**
   * productImages deleteMany
   */
  export type productImagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which productImages to delete
     */
    where?: productImagesWhereInput
  }


  /**
   * productImages without action
   */
  export type productImagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productImages
     */
    select?: productImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productImagesInclude<ExtArgs> | null
  }



  /**
   * Model productVariations
   */

  export type AggregateProductVariations = {
    _count: ProductVariationsCountAggregateOutputType | null
    _avg: ProductVariationsAvgAggregateOutputType | null
    _sum: ProductVariationsSumAggregateOutputType | null
    _min: ProductVariationsMinAggregateOutputType | null
    _max: ProductVariationsMaxAggregateOutputType | null
  }

  export type ProductVariationsAvgAggregateOutputType = {
    id: number | null
    productId: number | null
    stock: number | null
    expectedStock: number | null
    buyPrice: number | null
    sellPrice: number | null
    priorityWeight: number | null
  }

  export type ProductVariationsSumAggregateOutputType = {
    id: number | null
    productId: number | null
    stock: number | null
    expectedStock: number | null
    buyPrice: number | null
    sellPrice: number | null
    priorityWeight: number | null
  }

  export type ProductVariationsMinAggregateOutputType = {
    id: number | null
    productId: number | null
    name: string | null
    stock: number | null
    expectedStock: number | null
    buyPrice: number | null
    sellPrice: number | null
    buyLink: string | null
    imageLink: string | null
    priorityWeight: number | null
  }

  export type ProductVariationsMaxAggregateOutputType = {
    id: number | null
    productId: number | null
    name: string | null
    stock: number | null
    expectedStock: number | null
    buyPrice: number | null
    sellPrice: number | null
    buyLink: string | null
    imageLink: string | null
    priorityWeight: number | null
  }

  export type ProductVariationsCountAggregateOutputType = {
    id: number
    productId: number
    name: number
    stock: number
    expectedStock: number
    buyPrice: number
    sellPrice: number
    buyLink: number
    imageLink: number
    priorityWeight: number
    _all: number
  }


  export type ProductVariationsAvgAggregateInputType = {
    id?: true
    productId?: true
    stock?: true
    expectedStock?: true
    buyPrice?: true
    sellPrice?: true
    priorityWeight?: true
  }

  export type ProductVariationsSumAggregateInputType = {
    id?: true
    productId?: true
    stock?: true
    expectedStock?: true
    buyPrice?: true
    sellPrice?: true
    priorityWeight?: true
  }

  export type ProductVariationsMinAggregateInputType = {
    id?: true
    productId?: true
    name?: true
    stock?: true
    expectedStock?: true
    buyPrice?: true
    sellPrice?: true
    buyLink?: true
    imageLink?: true
    priorityWeight?: true
  }

  export type ProductVariationsMaxAggregateInputType = {
    id?: true
    productId?: true
    name?: true
    stock?: true
    expectedStock?: true
    buyPrice?: true
    sellPrice?: true
    buyLink?: true
    imageLink?: true
    priorityWeight?: true
  }

  export type ProductVariationsCountAggregateInputType = {
    id?: true
    productId?: true
    name?: true
    stock?: true
    expectedStock?: true
    buyPrice?: true
    sellPrice?: true
    buyLink?: true
    imageLink?: true
    priorityWeight?: true
    _all?: true
  }

  export type ProductVariationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which productVariations to aggregate.
     */
    where?: productVariationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productVariations to fetch.
     */
    orderBy?: productVariationsOrderByWithRelationInput | productVariationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productVariationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productVariations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productVariations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned productVariations
    **/
    _count?: true | ProductVariationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductVariationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductVariationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductVariationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductVariationsMaxAggregateInputType
  }

  export type GetProductVariationsAggregateType<T extends ProductVariationsAggregateArgs> = {
        [P in keyof T & keyof AggregateProductVariations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductVariations[P]>
      : GetScalarType<T[P], AggregateProductVariations[P]>
  }




  export type productVariationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productVariationsWhereInput
    orderBy?: productVariationsOrderByWithAggregationInput | productVariationsOrderByWithAggregationInput[]
    by: ProductVariationsScalarFieldEnum[] | ProductVariationsScalarFieldEnum
    having?: productVariationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductVariationsCountAggregateInputType | true
    _avg?: ProductVariationsAvgAggregateInputType
    _sum?: ProductVariationsSumAggregateInputType
    _min?: ProductVariationsMinAggregateInputType
    _max?: ProductVariationsMaxAggregateInputType
  }

  export type ProductVariationsGroupByOutputType = {
    id: number
    productId: number
    name: string
    stock: number
    expectedStock: number
    buyPrice: number
    sellPrice: number
    buyLink: string | null
    imageLink: string | null
    priorityWeight: number | null
    _count: ProductVariationsCountAggregateOutputType | null
    _avg: ProductVariationsAvgAggregateOutputType | null
    _sum: ProductVariationsSumAggregateOutputType | null
    _min: ProductVariationsMinAggregateOutputType | null
    _max: ProductVariationsMaxAggregateOutputType | null
  }

  type GetProductVariationsGroupByPayload<T extends productVariationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductVariationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductVariationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductVariationsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductVariationsGroupByOutputType[P]>
        }
      >
    >


  export type productVariationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    name?: boolean
    stock?: boolean
    expectedStock?: boolean
    buyPrice?: boolean
    sellPrice?: boolean
    buyLink?: boolean
    imageLink?: boolean
    priorityWeight?: boolean
    product?: boolean | productsDefaultArgs<ExtArgs>
    orderItems?: boolean | productVariations$orderItemsArgs<ExtArgs>
    _count?: boolean | ProductVariationsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productVariations"]>

  export type productVariationsSelectScalar = {
    id?: boolean
    productId?: boolean
    name?: boolean
    stock?: boolean
    expectedStock?: boolean
    buyPrice?: boolean
    sellPrice?: boolean
    buyLink?: boolean
    imageLink?: boolean
    priorityWeight?: boolean
  }

  export type productVariationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | productsDefaultArgs<ExtArgs>
    orderItems?: boolean | productVariations$orderItemsArgs<ExtArgs>
    _count?: boolean | ProductVariationsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $productVariationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "productVariations"
    objects: {
      product: Prisma.$productsPayload<ExtArgs>
      orderItems: Prisma.$orderItemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productId: number
      name: string
      stock: number
      expectedStock: number
      buyPrice: number
      sellPrice: number
      buyLink: string | null
      imageLink: string | null
      priorityWeight: number | null
    }, ExtArgs["result"]["productVariations"]>
    composites: {}
  }


  type productVariationsGetPayload<S extends boolean | null | undefined | productVariationsDefaultArgs> = $Result.GetResult<Prisma.$productVariationsPayload, S>

  type productVariationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<productVariationsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ProductVariationsCountAggregateInputType | true
    }

  export interface productVariationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['productVariations'], meta: { name: 'productVariations' } }
    /**
     * Find zero or one ProductVariations that matches the filter.
     * @param {productVariationsFindUniqueArgs} args - Arguments to find a ProductVariations
     * @example
     * // Get one ProductVariations
     * const productVariations = await prisma.productVariations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends productVariationsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, productVariationsFindUniqueArgs<ExtArgs>>
    ): Prisma__productVariationsClient<$Result.GetResult<Prisma.$productVariationsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ProductVariations that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {productVariationsFindUniqueOrThrowArgs} args - Arguments to find a ProductVariations
     * @example
     * // Get one ProductVariations
     * const productVariations = await prisma.productVariations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends productVariationsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, productVariationsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__productVariationsClient<$Result.GetResult<Prisma.$productVariationsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ProductVariations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productVariationsFindFirstArgs} args - Arguments to find a ProductVariations
     * @example
     * // Get one ProductVariations
     * const productVariations = await prisma.productVariations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends productVariationsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, productVariationsFindFirstArgs<ExtArgs>>
    ): Prisma__productVariationsClient<$Result.GetResult<Prisma.$productVariationsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ProductVariations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productVariationsFindFirstOrThrowArgs} args - Arguments to find a ProductVariations
     * @example
     * // Get one ProductVariations
     * const productVariations = await prisma.productVariations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends productVariationsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, productVariationsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__productVariationsClient<$Result.GetResult<Prisma.$productVariationsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ProductVariations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productVariationsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductVariations
     * const productVariations = await prisma.productVariations.findMany()
     * 
     * // Get first 10 ProductVariations
     * const productVariations = await prisma.productVariations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productVariationsWithIdOnly = await prisma.productVariations.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends productVariationsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, productVariationsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productVariationsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ProductVariations.
     * @param {productVariationsCreateArgs} args - Arguments to create a ProductVariations.
     * @example
     * // Create one ProductVariations
     * const ProductVariations = await prisma.productVariations.create({
     *   data: {
     *     // ... data to create a ProductVariations
     *   }
     * })
     * 
    **/
    create<T extends productVariationsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, productVariationsCreateArgs<ExtArgs>>
    ): Prisma__productVariationsClient<$Result.GetResult<Prisma.$productVariationsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ProductVariations.
     *     @param {productVariationsCreateManyArgs} args - Arguments to create many ProductVariations.
     *     @example
     *     // Create many ProductVariations
     *     const productVariations = await prisma.productVariations.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends productVariationsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, productVariationsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductVariations.
     * @param {productVariationsDeleteArgs} args - Arguments to delete one ProductVariations.
     * @example
     * // Delete one ProductVariations
     * const ProductVariations = await prisma.productVariations.delete({
     *   where: {
     *     // ... filter to delete one ProductVariations
     *   }
     * })
     * 
    **/
    delete<T extends productVariationsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, productVariationsDeleteArgs<ExtArgs>>
    ): Prisma__productVariationsClient<$Result.GetResult<Prisma.$productVariationsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ProductVariations.
     * @param {productVariationsUpdateArgs} args - Arguments to update one ProductVariations.
     * @example
     * // Update one ProductVariations
     * const productVariations = await prisma.productVariations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends productVariationsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, productVariationsUpdateArgs<ExtArgs>>
    ): Prisma__productVariationsClient<$Result.GetResult<Prisma.$productVariationsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ProductVariations.
     * @param {productVariationsDeleteManyArgs} args - Arguments to filter ProductVariations to delete.
     * @example
     * // Delete a few ProductVariations
     * const { count } = await prisma.productVariations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends productVariationsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, productVariationsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductVariations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productVariationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductVariations
     * const productVariations = await prisma.productVariations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends productVariationsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, productVariationsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductVariations.
     * @param {productVariationsUpsertArgs} args - Arguments to update or create a ProductVariations.
     * @example
     * // Update or create a ProductVariations
     * const productVariations = await prisma.productVariations.upsert({
     *   create: {
     *     // ... data to create a ProductVariations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductVariations we want to update
     *   }
     * })
    **/
    upsert<T extends productVariationsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, productVariationsUpsertArgs<ExtArgs>>
    ): Prisma__productVariationsClient<$Result.GetResult<Prisma.$productVariationsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ProductVariations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productVariationsCountArgs} args - Arguments to filter ProductVariations to count.
     * @example
     * // Count the number of ProductVariations
     * const count = await prisma.productVariations.count({
     *   where: {
     *     // ... the filter for the ProductVariations we want to count
     *   }
     * })
    **/
    count<T extends productVariationsCountArgs>(
      args?: Subset<T, productVariationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductVariationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductVariations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductVariationsAggregateArgs>(args: Subset<T, ProductVariationsAggregateArgs>): Prisma.PrismaPromise<GetProductVariationsAggregateType<T>>

    /**
     * Group by ProductVariations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productVariationsGroupByArgs} args - Group by arguments.
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
      T extends productVariationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productVariationsGroupByArgs['orderBy'] }
        : { orderBy?: productVariationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, productVariationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductVariationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the productVariations model
   */
  readonly fields: productVariationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for productVariations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productVariationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    product<T extends productsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productsDefaultArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    orderItems<T extends productVariations$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, productVariations$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderItemsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the productVariations model
   */ 
  interface productVariationsFieldRefs {
    readonly id: FieldRef<"productVariations", 'Int'>
    readonly productId: FieldRef<"productVariations", 'Int'>
    readonly name: FieldRef<"productVariations", 'String'>
    readonly stock: FieldRef<"productVariations", 'Int'>
    readonly expectedStock: FieldRef<"productVariations", 'Int'>
    readonly buyPrice: FieldRef<"productVariations", 'Float'>
    readonly sellPrice: FieldRef<"productVariations", 'Float'>
    readonly buyLink: FieldRef<"productVariations", 'String'>
    readonly imageLink: FieldRef<"productVariations", 'String'>
    readonly priorityWeight: FieldRef<"productVariations", 'Float'>
  }
    

  // Custom InputTypes

  /**
   * productVariations findUnique
   */
  export type productVariationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productVariations
     */
    select?: productVariationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productVariationsInclude<ExtArgs> | null
    /**
     * Filter, which productVariations to fetch.
     */
    where: productVariationsWhereUniqueInput
  }


  /**
   * productVariations findUniqueOrThrow
   */
  export type productVariationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productVariations
     */
    select?: productVariationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productVariationsInclude<ExtArgs> | null
    /**
     * Filter, which productVariations to fetch.
     */
    where: productVariationsWhereUniqueInput
  }


  /**
   * productVariations findFirst
   */
  export type productVariationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productVariations
     */
    select?: productVariationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productVariationsInclude<ExtArgs> | null
    /**
     * Filter, which productVariations to fetch.
     */
    where?: productVariationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productVariations to fetch.
     */
    orderBy?: productVariationsOrderByWithRelationInput | productVariationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productVariations.
     */
    cursor?: productVariationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productVariations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productVariations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productVariations.
     */
    distinct?: ProductVariationsScalarFieldEnum | ProductVariationsScalarFieldEnum[]
  }


  /**
   * productVariations findFirstOrThrow
   */
  export type productVariationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productVariations
     */
    select?: productVariationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productVariationsInclude<ExtArgs> | null
    /**
     * Filter, which productVariations to fetch.
     */
    where?: productVariationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productVariations to fetch.
     */
    orderBy?: productVariationsOrderByWithRelationInput | productVariationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productVariations.
     */
    cursor?: productVariationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productVariations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productVariations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productVariations.
     */
    distinct?: ProductVariationsScalarFieldEnum | ProductVariationsScalarFieldEnum[]
  }


  /**
   * productVariations findMany
   */
  export type productVariationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productVariations
     */
    select?: productVariationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productVariationsInclude<ExtArgs> | null
    /**
     * Filter, which productVariations to fetch.
     */
    where?: productVariationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productVariations to fetch.
     */
    orderBy?: productVariationsOrderByWithRelationInput | productVariationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing productVariations.
     */
    cursor?: productVariationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productVariations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productVariations.
     */
    skip?: number
    distinct?: ProductVariationsScalarFieldEnum | ProductVariationsScalarFieldEnum[]
  }


  /**
   * productVariations create
   */
  export type productVariationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productVariations
     */
    select?: productVariationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productVariationsInclude<ExtArgs> | null
    /**
     * The data needed to create a productVariations.
     */
    data: XOR<productVariationsCreateInput, productVariationsUncheckedCreateInput>
  }


  /**
   * productVariations createMany
   */
  export type productVariationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many productVariations.
     */
    data: productVariationsCreateManyInput | productVariationsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * productVariations update
   */
  export type productVariationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productVariations
     */
    select?: productVariationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productVariationsInclude<ExtArgs> | null
    /**
     * The data needed to update a productVariations.
     */
    data: XOR<productVariationsUpdateInput, productVariationsUncheckedUpdateInput>
    /**
     * Choose, which productVariations to update.
     */
    where: productVariationsWhereUniqueInput
  }


  /**
   * productVariations updateMany
   */
  export type productVariationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update productVariations.
     */
    data: XOR<productVariationsUpdateManyMutationInput, productVariationsUncheckedUpdateManyInput>
    /**
     * Filter which productVariations to update
     */
    where?: productVariationsWhereInput
  }


  /**
   * productVariations upsert
   */
  export type productVariationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productVariations
     */
    select?: productVariationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productVariationsInclude<ExtArgs> | null
    /**
     * The filter to search for the productVariations to update in case it exists.
     */
    where: productVariationsWhereUniqueInput
    /**
     * In case the productVariations found by the `where` argument doesn't exist, create a new productVariations with this data.
     */
    create: XOR<productVariationsCreateInput, productVariationsUncheckedCreateInput>
    /**
     * In case the productVariations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productVariationsUpdateInput, productVariationsUncheckedUpdateInput>
  }


  /**
   * productVariations delete
   */
  export type productVariationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productVariations
     */
    select?: productVariationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productVariationsInclude<ExtArgs> | null
    /**
     * Filter which productVariations to delete.
     */
    where: productVariationsWhereUniqueInput
  }


  /**
   * productVariations deleteMany
   */
  export type productVariationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which productVariations to delete
     */
    where?: productVariationsWhereInput
  }


  /**
   * productVariations.orderItems
   */
  export type productVariations$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItems
     */
    select?: orderItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderItemsInclude<ExtArgs> | null
    where?: orderItemsWhereInput
    orderBy?: orderItemsOrderByWithRelationInput | orderItemsOrderByWithRelationInput[]
    cursor?: orderItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemsScalarFieldEnum | OrderItemsScalarFieldEnum[]
  }


  /**
   * productVariations without action
   */
  export type productVariationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productVariations
     */
    select?: productVariationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productVariationsInclude<ExtArgs> | null
  }



  /**
   * Model orderItems
   */

  export type AggregateOrderItems = {
    _count: OrderItemsCountAggregateOutputType | null
    _avg: OrderItemsAvgAggregateOutputType | null
    _sum: OrderItemsSumAggregateOutputType | null
    _min: OrderItemsMinAggregateOutputType | null
    _max: OrderItemsMaxAggregateOutputType | null
  }

  export type OrderItemsAvgAggregateOutputType = {
    id: number | null
    orderId: number | null
    productVariationId: number | null
    quantity: number | null
  }

  export type OrderItemsSumAggregateOutputType = {
    id: number | null
    orderId: number | null
    productVariationId: number | null
    quantity: number | null
  }

  export type OrderItemsMinAggregateOutputType = {
    id: number | null
    orderId: number | null
    productVariationId: number | null
    quantity: number | null
  }

  export type OrderItemsMaxAggregateOutputType = {
    id: number | null
    orderId: number | null
    productVariationId: number | null
    quantity: number | null
  }

  export type OrderItemsCountAggregateOutputType = {
    id: number
    orderId: number
    productVariationId: number
    quantity: number
    _all: number
  }


  export type OrderItemsAvgAggregateInputType = {
    id?: true
    orderId?: true
    productVariationId?: true
    quantity?: true
  }

  export type OrderItemsSumAggregateInputType = {
    id?: true
    orderId?: true
    productVariationId?: true
    quantity?: true
  }

  export type OrderItemsMinAggregateInputType = {
    id?: true
    orderId?: true
    productVariationId?: true
    quantity?: true
  }

  export type OrderItemsMaxAggregateInputType = {
    id?: true
    orderId?: true
    productVariationId?: true
    quantity?: true
  }

  export type OrderItemsCountAggregateInputType = {
    id?: true
    orderId?: true
    productVariationId?: true
    quantity?: true
    _all?: true
  }

  export type OrderItemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orderItems to aggregate.
     */
    where?: orderItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orderItems to fetch.
     */
    orderBy?: orderItemsOrderByWithRelationInput | orderItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: orderItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orderItems
    **/
    _count?: true | OrderItemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemsMaxAggregateInputType
  }

  export type GetOrderItemsAggregateType<T extends OrderItemsAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItems[P]>
      : GetScalarType<T[P], AggregateOrderItems[P]>
  }




  export type orderItemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderItemsWhereInput
    orderBy?: orderItemsOrderByWithAggregationInput | orderItemsOrderByWithAggregationInput[]
    by: OrderItemsScalarFieldEnum[] | OrderItemsScalarFieldEnum
    having?: orderItemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemsCountAggregateInputType | true
    _avg?: OrderItemsAvgAggregateInputType
    _sum?: OrderItemsSumAggregateInputType
    _min?: OrderItemsMinAggregateInputType
    _max?: OrderItemsMaxAggregateInputType
  }

  export type OrderItemsGroupByOutputType = {
    id: number
    orderId: number
    productVariationId: number
    quantity: number
    _count: OrderItemsCountAggregateOutputType | null
    _avg: OrderItemsAvgAggregateOutputType | null
    _sum: OrderItemsSumAggregateOutputType | null
    _min: OrderItemsMinAggregateOutputType | null
    _max: OrderItemsMaxAggregateOutputType | null
  }

  type GetOrderItemsGroupByPayload<T extends orderItemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemsGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemsGroupByOutputType[P]>
        }
      >
    >


  export type orderItemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    productVariationId?: boolean
    quantity?: boolean
    productVariation?: boolean | productVariationsDefaultArgs<ExtArgs>
    order?: boolean | ordersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItems"]>

  export type orderItemsSelectScalar = {
    id?: boolean
    orderId?: boolean
    productVariationId?: boolean
    quantity?: boolean
  }

  export type orderItemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productVariation?: boolean | productVariationsDefaultArgs<ExtArgs>
    order?: boolean | ordersDefaultArgs<ExtArgs>
  }


  export type $orderItemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "orderItems"
    objects: {
      productVariation: Prisma.$productVariationsPayload<ExtArgs>
      order: Prisma.$ordersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      orderId: number
      productVariationId: number
      quantity: number
    }, ExtArgs["result"]["orderItems"]>
    composites: {}
  }


  type orderItemsGetPayload<S extends boolean | null | undefined | orderItemsDefaultArgs> = $Result.GetResult<Prisma.$orderItemsPayload, S>

  type orderItemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<orderItemsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: OrderItemsCountAggregateInputType | true
    }

  export interface orderItemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['orderItems'], meta: { name: 'orderItems' } }
    /**
     * Find zero or one OrderItems that matches the filter.
     * @param {orderItemsFindUniqueArgs} args - Arguments to find a OrderItems
     * @example
     * // Get one OrderItems
     * const orderItems = await prisma.orderItems.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends orderItemsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, orderItemsFindUniqueArgs<ExtArgs>>
    ): Prisma__orderItemsClient<$Result.GetResult<Prisma.$orderItemsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one OrderItems that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {orderItemsFindUniqueOrThrowArgs} args - Arguments to find a OrderItems
     * @example
     * // Get one OrderItems
     * const orderItems = await prisma.orderItems.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends orderItemsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, orderItemsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__orderItemsClient<$Result.GetResult<Prisma.$orderItemsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderItemsFindFirstArgs} args - Arguments to find a OrderItems
     * @example
     * // Get one OrderItems
     * const orderItems = await prisma.orderItems.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends orderItemsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, orderItemsFindFirstArgs<ExtArgs>>
    ): Prisma__orderItemsClient<$Result.GetResult<Prisma.$orderItemsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first OrderItems that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderItemsFindFirstOrThrowArgs} args - Arguments to find a OrderItems
     * @example
     * // Get one OrderItems
     * const orderItems = await prisma.orderItems.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends orderItemsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, orderItemsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__orderItemsClient<$Result.GetResult<Prisma.$orderItemsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderItemsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItems.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItems.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderItemsWithIdOnly = await prisma.orderItems.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends orderItemsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, orderItemsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderItemsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a OrderItems.
     * @param {orderItemsCreateArgs} args - Arguments to create a OrderItems.
     * @example
     * // Create one OrderItems
     * const OrderItems = await prisma.orderItems.create({
     *   data: {
     *     // ... data to create a OrderItems
     *   }
     * })
     * 
    **/
    create<T extends orderItemsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, orderItemsCreateArgs<ExtArgs>>
    ): Prisma__orderItemsClient<$Result.GetResult<Prisma.$orderItemsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many OrderItems.
     *     @param {orderItemsCreateManyArgs} args - Arguments to create many OrderItems.
     *     @example
     *     // Create many OrderItems
     *     const orderItems = await prisma.orderItems.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends orderItemsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, orderItemsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OrderItems.
     * @param {orderItemsDeleteArgs} args - Arguments to delete one OrderItems.
     * @example
     * // Delete one OrderItems
     * const OrderItems = await prisma.orderItems.delete({
     *   where: {
     *     // ... filter to delete one OrderItems
     *   }
     * })
     * 
    **/
    delete<T extends orderItemsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, orderItemsDeleteArgs<ExtArgs>>
    ): Prisma__orderItemsClient<$Result.GetResult<Prisma.$orderItemsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one OrderItems.
     * @param {orderItemsUpdateArgs} args - Arguments to update one OrderItems.
     * @example
     * // Update one OrderItems
     * const orderItems = await prisma.orderItems.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends orderItemsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, orderItemsUpdateArgs<ExtArgs>>
    ): Prisma__orderItemsClient<$Result.GetResult<Prisma.$orderItemsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more OrderItems.
     * @param {orderItemsDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItems.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends orderItemsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, orderItemsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderItemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItems = await prisma.orderItems.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends orderItemsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, orderItemsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrderItems.
     * @param {orderItemsUpsertArgs} args - Arguments to update or create a OrderItems.
     * @example
     * // Update or create a OrderItems
     * const orderItems = await prisma.orderItems.upsert({
     *   create: {
     *     // ... data to create a OrderItems
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItems we want to update
     *   }
     * })
    **/
    upsert<T extends orderItemsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, orderItemsUpsertArgs<ExtArgs>>
    ): Prisma__orderItemsClient<$Result.GetResult<Prisma.$orderItemsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderItemsCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItems.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends orderItemsCountArgs>(
      args?: Subset<T, orderItemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderItemsAggregateArgs>(args: Subset<T, OrderItemsAggregateArgs>): Prisma.PrismaPromise<GetOrderItemsAggregateType<T>>

    /**
     * Group by OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderItemsGroupByArgs} args - Group by arguments.
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
      T extends orderItemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: orderItemsGroupByArgs['orderBy'] }
        : { orderBy?: orderItemsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, orderItemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the orderItems model
   */
  readonly fields: orderItemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for orderItems.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__orderItemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    productVariation<T extends productVariationsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productVariationsDefaultArgs<ExtArgs>>): Prisma__productVariationsClient<$Result.GetResult<Prisma.$productVariationsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    order<T extends ordersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ordersDefaultArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the orderItems model
   */ 
  interface orderItemsFieldRefs {
    readonly id: FieldRef<"orderItems", 'Int'>
    readonly orderId: FieldRef<"orderItems", 'Int'>
    readonly productVariationId: FieldRef<"orderItems", 'Int'>
    readonly quantity: FieldRef<"orderItems", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * orderItems findUnique
   */
  export type orderItemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItems
     */
    select?: orderItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderItemsInclude<ExtArgs> | null
    /**
     * Filter, which orderItems to fetch.
     */
    where: orderItemsWhereUniqueInput
  }


  /**
   * orderItems findUniqueOrThrow
   */
  export type orderItemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItems
     */
    select?: orderItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderItemsInclude<ExtArgs> | null
    /**
     * Filter, which orderItems to fetch.
     */
    where: orderItemsWhereUniqueInput
  }


  /**
   * orderItems findFirst
   */
  export type orderItemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItems
     */
    select?: orderItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderItemsInclude<ExtArgs> | null
    /**
     * Filter, which orderItems to fetch.
     */
    where?: orderItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orderItems to fetch.
     */
    orderBy?: orderItemsOrderByWithRelationInput | orderItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orderItems.
     */
    cursor?: orderItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orderItems.
     */
    distinct?: OrderItemsScalarFieldEnum | OrderItemsScalarFieldEnum[]
  }


  /**
   * orderItems findFirstOrThrow
   */
  export type orderItemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItems
     */
    select?: orderItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderItemsInclude<ExtArgs> | null
    /**
     * Filter, which orderItems to fetch.
     */
    where?: orderItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orderItems to fetch.
     */
    orderBy?: orderItemsOrderByWithRelationInput | orderItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orderItems.
     */
    cursor?: orderItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orderItems.
     */
    distinct?: OrderItemsScalarFieldEnum | OrderItemsScalarFieldEnum[]
  }


  /**
   * orderItems findMany
   */
  export type orderItemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItems
     */
    select?: orderItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderItemsInclude<ExtArgs> | null
    /**
     * Filter, which orderItems to fetch.
     */
    where?: orderItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orderItems to fetch.
     */
    orderBy?: orderItemsOrderByWithRelationInput | orderItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orderItems.
     */
    cursor?: orderItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orderItems.
     */
    skip?: number
    distinct?: OrderItemsScalarFieldEnum | OrderItemsScalarFieldEnum[]
  }


  /**
   * orderItems create
   */
  export type orderItemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItems
     */
    select?: orderItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderItemsInclude<ExtArgs> | null
    /**
     * The data needed to create a orderItems.
     */
    data: XOR<orderItemsCreateInput, orderItemsUncheckedCreateInput>
  }


  /**
   * orderItems createMany
   */
  export type orderItemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orderItems.
     */
    data: orderItemsCreateManyInput | orderItemsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * orderItems update
   */
  export type orderItemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItems
     */
    select?: orderItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderItemsInclude<ExtArgs> | null
    /**
     * The data needed to update a orderItems.
     */
    data: XOR<orderItemsUpdateInput, orderItemsUncheckedUpdateInput>
    /**
     * Choose, which orderItems to update.
     */
    where: orderItemsWhereUniqueInput
  }


  /**
   * orderItems updateMany
   */
  export type orderItemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orderItems.
     */
    data: XOR<orderItemsUpdateManyMutationInput, orderItemsUncheckedUpdateManyInput>
    /**
     * Filter which orderItems to update
     */
    where?: orderItemsWhereInput
  }


  /**
   * orderItems upsert
   */
  export type orderItemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItems
     */
    select?: orderItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderItemsInclude<ExtArgs> | null
    /**
     * The filter to search for the orderItems to update in case it exists.
     */
    where: orderItemsWhereUniqueInput
    /**
     * In case the orderItems found by the `where` argument doesn't exist, create a new orderItems with this data.
     */
    create: XOR<orderItemsCreateInput, orderItemsUncheckedCreateInput>
    /**
     * In case the orderItems was found with the provided `where` argument, update it with this data.
     */
    update: XOR<orderItemsUpdateInput, orderItemsUncheckedUpdateInput>
  }


  /**
   * orderItems delete
   */
  export type orderItemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItems
     */
    select?: orderItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderItemsInclude<ExtArgs> | null
    /**
     * Filter which orderItems to delete.
     */
    where: orderItemsWhereUniqueInput
  }


  /**
   * orderItems deleteMany
   */
  export type orderItemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orderItems to delete
     */
    where?: orderItemsWhereInput
  }


  /**
   * orderItems without action
   */
  export type orderItemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItems
     */
    select?: orderItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderItemsInclude<ExtArgs> | null
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


  export const OrdersScalarFieldEnum: {
    id: 'id',
    date: 'date'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    link: 'link',
    shopeeId: 'shopeeId'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const ProductImagesScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    link: 'link'
  };

  export type ProductImagesScalarFieldEnum = (typeof ProductImagesScalarFieldEnum)[keyof typeof ProductImagesScalarFieldEnum]


  export const ProductVariationsScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    name: 'name',
    stock: 'stock',
    expectedStock: 'expectedStock',
    buyPrice: 'buyPrice',
    sellPrice: 'sellPrice',
    buyLink: 'buyLink',
    imageLink: 'imageLink',
    priorityWeight: 'priorityWeight'
  };

  export type ProductVariationsScalarFieldEnum = (typeof ProductVariationsScalarFieldEnum)[keyof typeof ProductVariationsScalarFieldEnum]


  export const OrderItemsScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    productVariationId: 'productVariationId',
    quantity: 'quantity'
  };

  export type OrderItemsScalarFieldEnum = (typeof OrderItemsScalarFieldEnum)[keyof typeof OrderItemsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


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


  export type ordersWhereInput = {
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    id?: IntFilter<"orders"> | number
    date?: DateTimeFilter<"orders"> | Date | string
    orderItems?: OrderItemsListRelationFilter
  }

  export type ordersOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    orderItems?: orderItemsOrderByRelationAggregateInput
  }

  export type ordersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    date?: DateTimeFilter<"orders"> | Date | string
    orderItems?: OrderItemsListRelationFilter
  }, "id">

  export type ordersOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    _count?: ordersCountOrderByAggregateInput
    _avg?: ordersAvgOrderByAggregateInput
    _max?: ordersMaxOrderByAggregateInput
    _min?: ordersMinOrderByAggregateInput
    _sum?: ordersSumOrderByAggregateInput
  }

  export type ordersScalarWhereWithAggregatesInput = {
    AND?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    OR?: ordersScalarWhereWithAggregatesInput[]
    NOT?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"orders"> | number
    date?: DateTimeWithAggregatesFilter<"orders"> | Date | string
  }

  export type productsWhereInput = {
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    id?: IntFilter<"products"> | number
    name?: StringFilter<"products"> | string
    description?: StringNullableFilter<"products"> | string | null
    link?: StringNullableFilter<"products"> | string | null
    shopeeId?: StringNullableFilter<"products"> | string | null
    productImages?: ProductImagesListRelationFilter
    productVariations?: ProductVariationsListRelationFilter
  }

  export type productsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    shopeeId?: SortOrderInput | SortOrder
    productImages?: productImagesOrderByRelationAggregateInput
    productVariations?: productVariationsOrderByRelationAggregateInput
  }

  export type productsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    name?: StringFilter<"products"> | string
    description?: StringNullableFilter<"products"> | string | null
    link?: StringNullableFilter<"products"> | string | null
    shopeeId?: StringNullableFilter<"products"> | string | null
    productImages?: ProductImagesListRelationFilter
    productVariations?: ProductVariationsListRelationFilter
  }, "id">

  export type productsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    shopeeId?: SortOrderInput | SortOrder
    _count?: productsCountOrderByAggregateInput
    _avg?: productsAvgOrderByAggregateInput
    _max?: productsMaxOrderByAggregateInput
    _min?: productsMinOrderByAggregateInput
    _sum?: productsSumOrderByAggregateInput
  }

  export type productsScalarWhereWithAggregatesInput = {
    AND?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    OR?: productsScalarWhereWithAggregatesInput[]
    NOT?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"products"> | number
    name?: StringWithAggregatesFilter<"products"> | string
    description?: StringNullableWithAggregatesFilter<"products"> | string | null
    link?: StringNullableWithAggregatesFilter<"products"> | string | null
    shopeeId?: StringNullableWithAggregatesFilter<"products"> | string | null
  }

  export type productImagesWhereInput = {
    AND?: productImagesWhereInput | productImagesWhereInput[]
    OR?: productImagesWhereInput[]
    NOT?: productImagesWhereInput | productImagesWhereInput[]
    id?: IntFilter<"productImages"> | number
    productId?: IntFilter<"productImages"> | number
    link?: StringFilter<"productImages"> | string
    product?: XOR<ProductsRelationFilter, productsWhereInput>
  }

  export type productImagesOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    link?: SortOrder
    product?: productsOrderByWithRelationInput
  }

  export type productImagesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: productImagesWhereInput | productImagesWhereInput[]
    OR?: productImagesWhereInput[]
    NOT?: productImagesWhereInput | productImagesWhereInput[]
    productId?: IntFilter<"productImages"> | number
    link?: StringFilter<"productImages"> | string
    product?: XOR<ProductsRelationFilter, productsWhereInput>
  }, "id">

  export type productImagesOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    link?: SortOrder
    _count?: productImagesCountOrderByAggregateInput
    _avg?: productImagesAvgOrderByAggregateInput
    _max?: productImagesMaxOrderByAggregateInput
    _min?: productImagesMinOrderByAggregateInput
    _sum?: productImagesSumOrderByAggregateInput
  }

  export type productImagesScalarWhereWithAggregatesInput = {
    AND?: productImagesScalarWhereWithAggregatesInput | productImagesScalarWhereWithAggregatesInput[]
    OR?: productImagesScalarWhereWithAggregatesInput[]
    NOT?: productImagesScalarWhereWithAggregatesInput | productImagesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"productImages"> | number
    productId?: IntWithAggregatesFilter<"productImages"> | number
    link?: StringWithAggregatesFilter<"productImages"> | string
  }

  export type productVariationsWhereInput = {
    AND?: productVariationsWhereInput | productVariationsWhereInput[]
    OR?: productVariationsWhereInput[]
    NOT?: productVariationsWhereInput | productVariationsWhereInput[]
    id?: IntFilter<"productVariations"> | number
    productId?: IntFilter<"productVariations"> | number
    name?: StringFilter<"productVariations"> | string
    stock?: IntFilter<"productVariations"> | number
    expectedStock?: IntFilter<"productVariations"> | number
    buyPrice?: FloatFilter<"productVariations"> | number
    sellPrice?: FloatFilter<"productVariations"> | number
    buyLink?: StringNullableFilter<"productVariations"> | string | null
    imageLink?: StringNullableFilter<"productVariations"> | string | null
    priorityWeight?: FloatNullableFilter<"productVariations"> | number | null
    product?: XOR<ProductsRelationFilter, productsWhereInput>
    orderItems?: OrderItemsListRelationFilter
  }

  export type productVariationsOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    stock?: SortOrder
    expectedStock?: SortOrder
    buyPrice?: SortOrder
    sellPrice?: SortOrder
    buyLink?: SortOrderInput | SortOrder
    imageLink?: SortOrderInput | SortOrder
    priorityWeight?: SortOrderInput | SortOrder
    product?: productsOrderByWithRelationInput
    orderItems?: orderItemsOrderByRelationAggregateInput
  }

  export type productVariationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: productVariationsWhereInput | productVariationsWhereInput[]
    OR?: productVariationsWhereInput[]
    NOT?: productVariationsWhereInput | productVariationsWhereInput[]
    productId?: IntFilter<"productVariations"> | number
    name?: StringFilter<"productVariations"> | string
    stock?: IntFilter<"productVariations"> | number
    expectedStock?: IntFilter<"productVariations"> | number
    buyPrice?: FloatFilter<"productVariations"> | number
    sellPrice?: FloatFilter<"productVariations"> | number
    buyLink?: StringNullableFilter<"productVariations"> | string | null
    imageLink?: StringNullableFilter<"productVariations"> | string | null
    priorityWeight?: FloatNullableFilter<"productVariations"> | number | null
    product?: XOR<ProductsRelationFilter, productsWhereInput>
    orderItems?: OrderItemsListRelationFilter
  }, "id">

  export type productVariationsOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    stock?: SortOrder
    expectedStock?: SortOrder
    buyPrice?: SortOrder
    sellPrice?: SortOrder
    buyLink?: SortOrderInput | SortOrder
    imageLink?: SortOrderInput | SortOrder
    priorityWeight?: SortOrderInput | SortOrder
    _count?: productVariationsCountOrderByAggregateInput
    _avg?: productVariationsAvgOrderByAggregateInput
    _max?: productVariationsMaxOrderByAggregateInput
    _min?: productVariationsMinOrderByAggregateInput
    _sum?: productVariationsSumOrderByAggregateInput
  }

  export type productVariationsScalarWhereWithAggregatesInput = {
    AND?: productVariationsScalarWhereWithAggregatesInput | productVariationsScalarWhereWithAggregatesInput[]
    OR?: productVariationsScalarWhereWithAggregatesInput[]
    NOT?: productVariationsScalarWhereWithAggregatesInput | productVariationsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"productVariations"> | number
    productId?: IntWithAggregatesFilter<"productVariations"> | number
    name?: StringWithAggregatesFilter<"productVariations"> | string
    stock?: IntWithAggregatesFilter<"productVariations"> | number
    expectedStock?: IntWithAggregatesFilter<"productVariations"> | number
    buyPrice?: FloatWithAggregatesFilter<"productVariations"> | number
    sellPrice?: FloatWithAggregatesFilter<"productVariations"> | number
    buyLink?: StringNullableWithAggregatesFilter<"productVariations"> | string | null
    imageLink?: StringNullableWithAggregatesFilter<"productVariations"> | string | null
    priorityWeight?: FloatNullableWithAggregatesFilter<"productVariations"> | number | null
  }

  export type orderItemsWhereInput = {
    AND?: orderItemsWhereInput | orderItemsWhereInput[]
    OR?: orderItemsWhereInput[]
    NOT?: orderItemsWhereInput | orderItemsWhereInput[]
    id?: IntFilter<"orderItems"> | number
    orderId?: IntFilter<"orderItems"> | number
    productVariationId?: IntFilter<"orderItems"> | number
    quantity?: IntFilter<"orderItems"> | number
    productVariation?: XOR<ProductVariationsRelationFilter, productVariationsWhereInput>
    order?: XOR<OrdersRelationFilter, ordersWhereInput>
  }

  export type orderItemsOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    productVariationId?: SortOrder
    quantity?: SortOrder
    productVariation?: productVariationsOrderByWithRelationInput
    order?: ordersOrderByWithRelationInput
  }

  export type orderItemsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: orderItemsWhereInput | orderItemsWhereInput[]
    OR?: orderItemsWhereInput[]
    NOT?: orderItemsWhereInput | orderItemsWhereInput[]
    orderId?: IntFilter<"orderItems"> | number
    productVariationId?: IntFilter<"orderItems"> | number
    quantity?: IntFilter<"orderItems"> | number
    productVariation?: XOR<ProductVariationsRelationFilter, productVariationsWhereInput>
    order?: XOR<OrdersRelationFilter, ordersWhereInput>
  }, "id">

  export type orderItemsOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    productVariationId?: SortOrder
    quantity?: SortOrder
    _count?: orderItemsCountOrderByAggregateInput
    _avg?: orderItemsAvgOrderByAggregateInput
    _max?: orderItemsMaxOrderByAggregateInput
    _min?: orderItemsMinOrderByAggregateInput
    _sum?: orderItemsSumOrderByAggregateInput
  }

  export type orderItemsScalarWhereWithAggregatesInput = {
    AND?: orderItemsScalarWhereWithAggregatesInput | orderItemsScalarWhereWithAggregatesInput[]
    OR?: orderItemsScalarWhereWithAggregatesInput[]
    NOT?: orderItemsScalarWhereWithAggregatesInput | orderItemsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"orderItems"> | number
    orderId?: IntWithAggregatesFilter<"orderItems"> | number
    productVariationId?: IntWithAggregatesFilter<"orderItems"> | number
    quantity?: IntWithAggregatesFilter<"orderItems"> | number
  }

  export type ordersCreateInput = {
    date?: Date | string
    orderItems?: orderItemsCreateNestedManyWithoutOrderInput
  }

  export type ordersUncheckedCreateInput = {
    id?: number
    date?: Date | string
    orderItems?: orderItemsUncheckedCreateNestedManyWithoutOrderInput
  }

  export type ordersUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: orderItemsUpdateManyWithoutOrderNestedInput
  }

  export type ordersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: orderItemsUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type ordersCreateManyInput = {
    id?: number
    date?: Date | string
  }

  export type ordersUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ordersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productsCreateInput = {
    name: string
    description?: string | null
    link?: string | null
    shopeeId?: string | null
    productImages?: productImagesCreateNestedManyWithoutProductInput
    productVariations?: productVariationsCreateNestedManyWithoutProductInput
  }

  export type productsUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    link?: string | null
    shopeeId?: string | null
    productImages?: productImagesUncheckedCreateNestedManyWithoutProductInput
    productVariations?: productVariationsUncheckedCreateNestedManyWithoutProductInput
  }

  export type productsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    shopeeId?: NullableStringFieldUpdateOperationsInput | string | null
    productImages?: productImagesUpdateManyWithoutProductNestedInput
    productVariations?: productVariationsUpdateManyWithoutProductNestedInput
  }

  export type productsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    shopeeId?: NullableStringFieldUpdateOperationsInput | string | null
    productImages?: productImagesUncheckedUpdateManyWithoutProductNestedInput
    productVariations?: productVariationsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type productsCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    link?: string | null
    shopeeId?: string | null
  }

  export type productsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    shopeeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type productsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    shopeeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type productImagesCreateInput = {
    link: string
    product: productsCreateNestedOneWithoutProductImagesInput
  }

  export type productImagesUncheckedCreateInput = {
    id?: number
    productId: number
    link: string
  }

  export type productImagesUpdateInput = {
    link?: StringFieldUpdateOperationsInput | string
    product?: productsUpdateOneRequiredWithoutProductImagesNestedInput
  }

  export type productImagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    link?: StringFieldUpdateOperationsInput | string
  }

  export type productImagesCreateManyInput = {
    id?: number
    productId: number
    link: string
  }

  export type productImagesUpdateManyMutationInput = {
    link?: StringFieldUpdateOperationsInput | string
  }

  export type productImagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    link?: StringFieldUpdateOperationsInput | string
  }

  export type productVariationsCreateInput = {
    name: string
    stock: number
    expectedStock: number
    buyPrice: number
    sellPrice: number
    buyLink?: string | null
    imageLink?: string | null
    priorityWeight?: number | null
    product: productsCreateNestedOneWithoutProductVariationsInput
    orderItems?: orderItemsCreateNestedManyWithoutProductVariationInput
  }

  export type productVariationsUncheckedCreateInput = {
    id?: number
    productId: number
    name: string
    stock: number
    expectedStock: number
    buyPrice: number
    sellPrice: number
    buyLink?: string | null
    imageLink?: string | null
    priorityWeight?: number | null
    orderItems?: orderItemsUncheckedCreateNestedManyWithoutProductVariationInput
  }

  export type productVariationsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    expectedStock?: IntFieldUpdateOperationsInput | number
    buyPrice?: FloatFieldUpdateOperationsInput | number
    sellPrice?: FloatFieldUpdateOperationsInput | number
    buyLink?: NullableStringFieldUpdateOperationsInput | string | null
    imageLink?: NullableStringFieldUpdateOperationsInput | string | null
    priorityWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    product?: productsUpdateOneRequiredWithoutProductVariationsNestedInput
    orderItems?: orderItemsUpdateManyWithoutProductVariationNestedInput
  }

  export type productVariationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    expectedStock?: IntFieldUpdateOperationsInput | number
    buyPrice?: FloatFieldUpdateOperationsInput | number
    sellPrice?: FloatFieldUpdateOperationsInput | number
    buyLink?: NullableStringFieldUpdateOperationsInput | string | null
    imageLink?: NullableStringFieldUpdateOperationsInput | string | null
    priorityWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    orderItems?: orderItemsUncheckedUpdateManyWithoutProductVariationNestedInput
  }

  export type productVariationsCreateManyInput = {
    id?: number
    productId: number
    name: string
    stock: number
    expectedStock: number
    buyPrice: number
    sellPrice: number
    buyLink?: string | null
    imageLink?: string | null
    priorityWeight?: number | null
  }

  export type productVariationsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    expectedStock?: IntFieldUpdateOperationsInput | number
    buyPrice?: FloatFieldUpdateOperationsInput | number
    sellPrice?: FloatFieldUpdateOperationsInput | number
    buyLink?: NullableStringFieldUpdateOperationsInput | string | null
    imageLink?: NullableStringFieldUpdateOperationsInput | string | null
    priorityWeight?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type productVariationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    expectedStock?: IntFieldUpdateOperationsInput | number
    buyPrice?: FloatFieldUpdateOperationsInput | number
    sellPrice?: FloatFieldUpdateOperationsInput | number
    buyLink?: NullableStringFieldUpdateOperationsInput | string | null
    imageLink?: NullableStringFieldUpdateOperationsInput | string | null
    priorityWeight?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type orderItemsCreateInput = {
    quantity: number
    productVariation: productVariationsCreateNestedOneWithoutOrderItemsInput
    order: ordersCreateNestedOneWithoutOrderItemsInput
  }

  export type orderItemsUncheckedCreateInput = {
    id?: number
    orderId: number
    productVariationId: number
    quantity: number
  }

  export type orderItemsUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    productVariation?: productVariationsUpdateOneRequiredWithoutOrderItemsNestedInput
    order?: ordersUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type orderItemsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    productVariationId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type orderItemsCreateManyInput = {
    id?: number
    orderId: number
    productVariationId: number
    quantity: number
  }

  export type orderItemsUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type orderItemsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    productVariationId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
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

  export type OrderItemsListRelationFilter = {
    every?: orderItemsWhereInput
    some?: orderItemsWhereInput
    none?: orderItemsWhereInput
  }

  export type orderItemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ordersCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
  }

  export type ordersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ordersMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
  }

  export type ordersMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
  }

  export type ordersSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type ProductImagesListRelationFilter = {
    every?: productImagesWhereInput
    some?: productImagesWhereInput
    none?: productImagesWhereInput
  }

  export type ProductVariationsListRelationFilter = {
    every?: productVariationsWhereInput
    some?: productVariationsWhereInput
    none?: productVariationsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type productImagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productVariationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    link?: SortOrder
    shopeeId?: SortOrder
  }

  export type productsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type productsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    link?: SortOrder
    shopeeId?: SortOrder
  }

  export type productsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    link?: SortOrder
    shopeeId?: SortOrder
  }

  export type productsSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type ProductsRelationFilter = {
    is?: productsWhereInput
    isNot?: productsWhereInput
  }

  export type productImagesCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    link?: SortOrder
  }

  export type productImagesAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
  }

  export type productImagesMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    link?: SortOrder
  }

  export type productImagesMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    link?: SortOrder
  }

  export type productImagesSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
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

  export type productVariationsCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    stock?: SortOrder
    expectedStock?: SortOrder
    buyPrice?: SortOrder
    sellPrice?: SortOrder
    buyLink?: SortOrder
    imageLink?: SortOrder
    priorityWeight?: SortOrder
  }

  export type productVariationsAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    stock?: SortOrder
    expectedStock?: SortOrder
    buyPrice?: SortOrder
    sellPrice?: SortOrder
    priorityWeight?: SortOrder
  }

  export type productVariationsMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    stock?: SortOrder
    expectedStock?: SortOrder
    buyPrice?: SortOrder
    sellPrice?: SortOrder
    buyLink?: SortOrder
    imageLink?: SortOrder
    priorityWeight?: SortOrder
  }

  export type productVariationsMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    stock?: SortOrder
    expectedStock?: SortOrder
    buyPrice?: SortOrder
    sellPrice?: SortOrder
    buyLink?: SortOrder
    imageLink?: SortOrder
    priorityWeight?: SortOrder
  }

  export type productVariationsSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    stock?: SortOrder
    expectedStock?: SortOrder
    buyPrice?: SortOrder
    sellPrice?: SortOrder
    priorityWeight?: SortOrder
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

  export type ProductVariationsRelationFilter = {
    is?: productVariationsWhereInput
    isNot?: productVariationsWhereInput
  }

  export type OrdersRelationFilter = {
    is?: ordersWhereInput
    isNot?: ordersWhereInput
  }

  export type orderItemsCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productVariationId?: SortOrder
    quantity?: SortOrder
  }

  export type orderItemsAvgOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productVariationId?: SortOrder
    quantity?: SortOrder
  }

  export type orderItemsMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productVariationId?: SortOrder
    quantity?: SortOrder
  }

  export type orderItemsMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productVariationId?: SortOrder
    quantity?: SortOrder
  }

  export type orderItemsSumOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productVariationId?: SortOrder
    quantity?: SortOrder
  }

  export type orderItemsCreateNestedManyWithoutOrderInput = {
    create?: XOR<orderItemsCreateWithoutOrderInput, orderItemsUncheckedCreateWithoutOrderInput> | orderItemsCreateWithoutOrderInput[] | orderItemsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: orderItemsCreateOrConnectWithoutOrderInput | orderItemsCreateOrConnectWithoutOrderInput[]
    createMany?: orderItemsCreateManyOrderInputEnvelope
    connect?: orderItemsWhereUniqueInput | orderItemsWhereUniqueInput[]
  }

  export type orderItemsUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<orderItemsCreateWithoutOrderInput, orderItemsUncheckedCreateWithoutOrderInput> | orderItemsCreateWithoutOrderInput[] | orderItemsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: orderItemsCreateOrConnectWithoutOrderInput | orderItemsCreateOrConnectWithoutOrderInput[]
    createMany?: orderItemsCreateManyOrderInputEnvelope
    connect?: orderItemsWhereUniqueInput | orderItemsWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type orderItemsUpdateManyWithoutOrderNestedInput = {
    create?: XOR<orderItemsCreateWithoutOrderInput, orderItemsUncheckedCreateWithoutOrderInput> | orderItemsCreateWithoutOrderInput[] | orderItemsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: orderItemsCreateOrConnectWithoutOrderInput | orderItemsCreateOrConnectWithoutOrderInput[]
    upsert?: orderItemsUpsertWithWhereUniqueWithoutOrderInput | orderItemsUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: orderItemsCreateManyOrderInputEnvelope
    set?: orderItemsWhereUniqueInput | orderItemsWhereUniqueInput[]
    disconnect?: orderItemsWhereUniqueInput | orderItemsWhereUniqueInput[]
    delete?: orderItemsWhereUniqueInput | orderItemsWhereUniqueInput[]
    connect?: orderItemsWhereUniqueInput | orderItemsWhereUniqueInput[]
    update?: orderItemsUpdateWithWhereUniqueWithoutOrderInput | orderItemsUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: orderItemsUpdateManyWithWhereWithoutOrderInput | orderItemsUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: orderItemsScalarWhereInput | orderItemsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type orderItemsUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<orderItemsCreateWithoutOrderInput, orderItemsUncheckedCreateWithoutOrderInput> | orderItemsCreateWithoutOrderInput[] | orderItemsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: orderItemsCreateOrConnectWithoutOrderInput | orderItemsCreateOrConnectWithoutOrderInput[]
    upsert?: orderItemsUpsertWithWhereUniqueWithoutOrderInput | orderItemsUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: orderItemsCreateManyOrderInputEnvelope
    set?: orderItemsWhereUniqueInput | orderItemsWhereUniqueInput[]
    disconnect?: orderItemsWhereUniqueInput | orderItemsWhereUniqueInput[]
    delete?: orderItemsWhereUniqueInput | orderItemsWhereUniqueInput[]
    connect?: orderItemsWhereUniqueInput | orderItemsWhereUniqueInput[]
    update?: orderItemsUpdateWithWhereUniqueWithoutOrderInput | orderItemsUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: orderItemsUpdateManyWithWhereWithoutOrderInput | orderItemsUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: orderItemsScalarWhereInput | orderItemsScalarWhereInput[]
  }

  export type productImagesCreateNestedManyWithoutProductInput = {
    create?: XOR<productImagesCreateWithoutProductInput, productImagesUncheckedCreateWithoutProductInput> | productImagesCreateWithoutProductInput[] | productImagesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: productImagesCreateOrConnectWithoutProductInput | productImagesCreateOrConnectWithoutProductInput[]
    createMany?: productImagesCreateManyProductInputEnvelope
    connect?: productImagesWhereUniqueInput | productImagesWhereUniqueInput[]
  }

  export type productVariationsCreateNestedManyWithoutProductInput = {
    create?: XOR<productVariationsCreateWithoutProductInput, productVariationsUncheckedCreateWithoutProductInput> | productVariationsCreateWithoutProductInput[] | productVariationsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: productVariationsCreateOrConnectWithoutProductInput | productVariationsCreateOrConnectWithoutProductInput[]
    createMany?: productVariationsCreateManyProductInputEnvelope
    connect?: productVariationsWhereUniqueInput | productVariationsWhereUniqueInput[]
  }

  export type productImagesUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<productImagesCreateWithoutProductInput, productImagesUncheckedCreateWithoutProductInput> | productImagesCreateWithoutProductInput[] | productImagesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: productImagesCreateOrConnectWithoutProductInput | productImagesCreateOrConnectWithoutProductInput[]
    createMany?: productImagesCreateManyProductInputEnvelope
    connect?: productImagesWhereUniqueInput | productImagesWhereUniqueInput[]
  }

  export type productVariationsUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<productVariationsCreateWithoutProductInput, productVariationsUncheckedCreateWithoutProductInput> | productVariationsCreateWithoutProductInput[] | productVariationsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: productVariationsCreateOrConnectWithoutProductInput | productVariationsCreateOrConnectWithoutProductInput[]
    createMany?: productVariationsCreateManyProductInputEnvelope
    connect?: productVariationsWhereUniqueInput | productVariationsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type productImagesUpdateManyWithoutProductNestedInput = {
    create?: XOR<productImagesCreateWithoutProductInput, productImagesUncheckedCreateWithoutProductInput> | productImagesCreateWithoutProductInput[] | productImagesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: productImagesCreateOrConnectWithoutProductInput | productImagesCreateOrConnectWithoutProductInput[]
    upsert?: productImagesUpsertWithWhereUniqueWithoutProductInput | productImagesUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: productImagesCreateManyProductInputEnvelope
    set?: productImagesWhereUniqueInput | productImagesWhereUniqueInput[]
    disconnect?: productImagesWhereUniqueInput | productImagesWhereUniqueInput[]
    delete?: productImagesWhereUniqueInput | productImagesWhereUniqueInput[]
    connect?: productImagesWhereUniqueInput | productImagesWhereUniqueInput[]
    update?: productImagesUpdateWithWhereUniqueWithoutProductInput | productImagesUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: productImagesUpdateManyWithWhereWithoutProductInput | productImagesUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: productImagesScalarWhereInput | productImagesScalarWhereInput[]
  }

  export type productVariationsUpdateManyWithoutProductNestedInput = {
    create?: XOR<productVariationsCreateWithoutProductInput, productVariationsUncheckedCreateWithoutProductInput> | productVariationsCreateWithoutProductInput[] | productVariationsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: productVariationsCreateOrConnectWithoutProductInput | productVariationsCreateOrConnectWithoutProductInput[]
    upsert?: productVariationsUpsertWithWhereUniqueWithoutProductInput | productVariationsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: productVariationsCreateManyProductInputEnvelope
    set?: productVariationsWhereUniqueInput | productVariationsWhereUniqueInput[]
    disconnect?: productVariationsWhereUniqueInput | productVariationsWhereUniqueInput[]
    delete?: productVariationsWhereUniqueInput | productVariationsWhereUniqueInput[]
    connect?: productVariationsWhereUniqueInput | productVariationsWhereUniqueInput[]
    update?: productVariationsUpdateWithWhereUniqueWithoutProductInput | productVariationsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: productVariationsUpdateManyWithWhereWithoutProductInput | productVariationsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: productVariationsScalarWhereInput | productVariationsScalarWhereInput[]
  }

  export type productImagesUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<productImagesCreateWithoutProductInput, productImagesUncheckedCreateWithoutProductInput> | productImagesCreateWithoutProductInput[] | productImagesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: productImagesCreateOrConnectWithoutProductInput | productImagesCreateOrConnectWithoutProductInput[]
    upsert?: productImagesUpsertWithWhereUniqueWithoutProductInput | productImagesUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: productImagesCreateManyProductInputEnvelope
    set?: productImagesWhereUniqueInput | productImagesWhereUniqueInput[]
    disconnect?: productImagesWhereUniqueInput | productImagesWhereUniqueInput[]
    delete?: productImagesWhereUniqueInput | productImagesWhereUniqueInput[]
    connect?: productImagesWhereUniqueInput | productImagesWhereUniqueInput[]
    update?: productImagesUpdateWithWhereUniqueWithoutProductInput | productImagesUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: productImagesUpdateManyWithWhereWithoutProductInput | productImagesUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: productImagesScalarWhereInput | productImagesScalarWhereInput[]
  }

  export type productVariationsUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<productVariationsCreateWithoutProductInput, productVariationsUncheckedCreateWithoutProductInput> | productVariationsCreateWithoutProductInput[] | productVariationsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: productVariationsCreateOrConnectWithoutProductInput | productVariationsCreateOrConnectWithoutProductInput[]
    upsert?: productVariationsUpsertWithWhereUniqueWithoutProductInput | productVariationsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: productVariationsCreateManyProductInputEnvelope
    set?: productVariationsWhereUniqueInput | productVariationsWhereUniqueInput[]
    disconnect?: productVariationsWhereUniqueInput | productVariationsWhereUniqueInput[]
    delete?: productVariationsWhereUniqueInput | productVariationsWhereUniqueInput[]
    connect?: productVariationsWhereUniqueInput | productVariationsWhereUniqueInput[]
    update?: productVariationsUpdateWithWhereUniqueWithoutProductInput | productVariationsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: productVariationsUpdateManyWithWhereWithoutProductInput | productVariationsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: productVariationsScalarWhereInput | productVariationsScalarWhereInput[]
  }

  export type productsCreateNestedOneWithoutProductImagesInput = {
    create?: XOR<productsCreateWithoutProductImagesInput, productsUncheckedCreateWithoutProductImagesInput>
    connectOrCreate?: productsCreateOrConnectWithoutProductImagesInput
    connect?: productsWhereUniqueInput
  }

  export type productsUpdateOneRequiredWithoutProductImagesNestedInput = {
    create?: XOR<productsCreateWithoutProductImagesInput, productsUncheckedCreateWithoutProductImagesInput>
    connectOrCreate?: productsCreateOrConnectWithoutProductImagesInput
    upsert?: productsUpsertWithoutProductImagesInput
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutProductImagesInput, productsUpdateWithoutProductImagesInput>, productsUncheckedUpdateWithoutProductImagesInput>
  }

  export type productsCreateNestedOneWithoutProductVariationsInput = {
    create?: XOR<productsCreateWithoutProductVariationsInput, productsUncheckedCreateWithoutProductVariationsInput>
    connectOrCreate?: productsCreateOrConnectWithoutProductVariationsInput
    connect?: productsWhereUniqueInput
  }

  export type orderItemsCreateNestedManyWithoutProductVariationInput = {
    create?: XOR<orderItemsCreateWithoutProductVariationInput, orderItemsUncheckedCreateWithoutProductVariationInput> | orderItemsCreateWithoutProductVariationInput[] | orderItemsUncheckedCreateWithoutProductVariationInput[]
    connectOrCreate?: orderItemsCreateOrConnectWithoutProductVariationInput | orderItemsCreateOrConnectWithoutProductVariationInput[]
    createMany?: orderItemsCreateManyProductVariationInputEnvelope
    connect?: orderItemsWhereUniqueInput | orderItemsWhereUniqueInput[]
  }

  export type orderItemsUncheckedCreateNestedManyWithoutProductVariationInput = {
    create?: XOR<orderItemsCreateWithoutProductVariationInput, orderItemsUncheckedCreateWithoutProductVariationInput> | orderItemsCreateWithoutProductVariationInput[] | orderItemsUncheckedCreateWithoutProductVariationInput[]
    connectOrCreate?: orderItemsCreateOrConnectWithoutProductVariationInput | orderItemsCreateOrConnectWithoutProductVariationInput[]
    createMany?: orderItemsCreateManyProductVariationInputEnvelope
    connect?: orderItemsWhereUniqueInput | orderItemsWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type productsUpdateOneRequiredWithoutProductVariationsNestedInput = {
    create?: XOR<productsCreateWithoutProductVariationsInput, productsUncheckedCreateWithoutProductVariationsInput>
    connectOrCreate?: productsCreateOrConnectWithoutProductVariationsInput
    upsert?: productsUpsertWithoutProductVariationsInput
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutProductVariationsInput, productsUpdateWithoutProductVariationsInput>, productsUncheckedUpdateWithoutProductVariationsInput>
  }

  export type orderItemsUpdateManyWithoutProductVariationNestedInput = {
    create?: XOR<orderItemsCreateWithoutProductVariationInput, orderItemsUncheckedCreateWithoutProductVariationInput> | orderItemsCreateWithoutProductVariationInput[] | orderItemsUncheckedCreateWithoutProductVariationInput[]
    connectOrCreate?: orderItemsCreateOrConnectWithoutProductVariationInput | orderItemsCreateOrConnectWithoutProductVariationInput[]
    upsert?: orderItemsUpsertWithWhereUniqueWithoutProductVariationInput | orderItemsUpsertWithWhereUniqueWithoutProductVariationInput[]
    createMany?: orderItemsCreateManyProductVariationInputEnvelope
    set?: orderItemsWhereUniqueInput | orderItemsWhereUniqueInput[]
    disconnect?: orderItemsWhereUniqueInput | orderItemsWhereUniqueInput[]
    delete?: orderItemsWhereUniqueInput | orderItemsWhereUniqueInput[]
    connect?: orderItemsWhereUniqueInput | orderItemsWhereUniqueInput[]
    update?: orderItemsUpdateWithWhereUniqueWithoutProductVariationInput | orderItemsUpdateWithWhereUniqueWithoutProductVariationInput[]
    updateMany?: orderItemsUpdateManyWithWhereWithoutProductVariationInput | orderItemsUpdateManyWithWhereWithoutProductVariationInput[]
    deleteMany?: orderItemsScalarWhereInput | orderItemsScalarWhereInput[]
  }

  export type orderItemsUncheckedUpdateManyWithoutProductVariationNestedInput = {
    create?: XOR<orderItemsCreateWithoutProductVariationInput, orderItemsUncheckedCreateWithoutProductVariationInput> | orderItemsCreateWithoutProductVariationInput[] | orderItemsUncheckedCreateWithoutProductVariationInput[]
    connectOrCreate?: orderItemsCreateOrConnectWithoutProductVariationInput | orderItemsCreateOrConnectWithoutProductVariationInput[]
    upsert?: orderItemsUpsertWithWhereUniqueWithoutProductVariationInput | orderItemsUpsertWithWhereUniqueWithoutProductVariationInput[]
    createMany?: orderItemsCreateManyProductVariationInputEnvelope
    set?: orderItemsWhereUniqueInput | orderItemsWhereUniqueInput[]
    disconnect?: orderItemsWhereUniqueInput | orderItemsWhereUniqueInput[]
    delete?: orderItemsWhereUniqueInput | orderItemsWhereUniqueInput[]
    connect?: orderItemsWhereUniqueInput | orderItemsWhereUniqueInput[]
    update?: orderItemsUpdateWithWhereUniqueWithoutProductVariationInput | orderItemsUpdateWithWhereUniqueWithoutProductVariationInput[]
    updateMany?: orderItemsUpdateManyWithWhereWithoutProductVariationInput | orderItemsUpdateManyWithWhereWithoutProductVariationInput[]
    deleteMany?: orderItemsScalarWhereInput | orderItemsScalarWhereInput[]
  }

  export type productVariationsCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<productVariationsCreateWithoutOrderItemsInput, productVariationsUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: productVariationsCreateOrConnectWithoutOrderItemsInput
    connect?: productVariationsWhereUniqueInput
  }

  export type ordersCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<ordersCreateWithoutOrderItemsInput, ordersUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: ordersCreateOrConnectWithoutOrderItemsInput
    connect?: ordersWhereUniqueInput
  }

  export type productVariationsUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<productVariationsCreateWithoutOrderItemsInput, productVariationsUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: productVariationsCreateOrConnectWithoutOrderItemsInput
    upsert?: productVariationsUpsertWithoutOrderItemsInput
    connect?: productVariationsWhereUniqueInput
    update?: XOR<XOR<productVariationsUpdateToOneWithWhereWithoutOrderItemsInput, productVariationsUpdateWithoutOrderItemsInput>, productVariationsUncheckedUpdateWithoutOrderItemsInput>
  }

  export type ordersUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<ordersCreateWithoutOrderItemsInput, ordersUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: ordersCreateOrConnectWithoutOrderItemsInput
    upsert?: ordersUpsertWithoutOrderItemsInput
    connect?: ordersWhereUniqueInput
    update?: XOR<XOR<ordersUpdateToOneWithWhereWithoutOrderItemsInput, ordersUpdateWithoutOrderItemsInput>, ordersUncheckedUpdateWithoutOrderItemsInput>
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

  export type orderItemsCreateWithoutOrderInput = {
    quantity: number
    productVariation: productVariationsCreateNestedOneWithoutOrderItemsInput
  }

  export type orderItemsUncheckedCreateWithoutOrderInput = {
    id?: number
    productVariationId: number
    quantity: number
  }

  export type orderItemsCreateOrConnectWithoutOrderInput = {
    where: orderItemsWhereUniqueInput
    create: XOR<orderItemsCreateWithoutOrderInput, orderItemsUncheckedCreateWithoutOrderInput>
  }

  export type orderItemsCreateManyOrderInputEnvelope = {
    data: orderItemsCreateManyOrderInput | orderItemsCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type orderItemsUpsertWithWhereUniqueWithoutOrderInput = {
    where: orderItemsWhereUniqueInput
    update: XOR<orderItemsUpdateWithoutOrderInput, orderItemsUncheckedUpdateWithoutOrderInput>
    create: XOR<orderItemsCreateWithoutOrderInput, orderItemsUncheckedCreateWithoutOrderInput>
  }

  export type orderItemsUpdateWithWhereUniqueWithoutOrderInput = {
    where: orderItemsWhereUniqueInput
    data: XOR<orderItemsUpdateWithoutOrderInput, orderItemsUncheckedUpdateWithoutOrderInput>
  }

  export type orderItemsUpdateManyWithWhereWithoutOrderInput = {
    where: orderItemsScalarWhereInput
    data: XOR<orderItemsUpdateManyMutationInput, orderItemsUncheckedUpdateManyWithoutOrderInput>
  }

  export type orderItemsScalarWhereInput = {
    AND?: orderItemsScalarWhereInput | orderItemsScalarWhereInput[]
    OR?: orderItemsScalarWhereInput[]
    NOT?: orderItemsScalarWhereInput | orderItemsScalarWhereInput[]
    id?: IntFilter<"orderItems"> | number
    orderId?: IntFilter<"orderItems"> | number
    productVariationId?: IntFilter<"orderItems"> | number
    quantity?: IntFilter<"orderItems"> | number
  }

  export type productImagesCreateWithoutProductInput = {
    link: string
  }

  export type productImagesUncheckedCreateWithoutProductInput = {
    id?: number
    link: string
  }

  export type productImagesCreateOrConnectWithoutProductInput = {
    where: productImagesWhereUniqueInput
    create: XOR<productImagesCreateWithoutProductInput, productImagesUncheckedCreateWithoutProductInput>
  }

  export type productImagesCreateManyProductInputEnvelope = {
    data: productImagesCreateManyProductInput | productImagesCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type productVariationsCreateWithoutProductInput = {
    name: string
    stock: number
    expectedStock: number
    buyPrice: number
    sellPrice: number
    buyLink?: string | null
    imageLink?: string | null
    priorityWeight?: number | null
    orderItems?: orderItemsCreateNestedManyWithoutProductVariationInput
  }

  export type productVariationsUncheckedCreateWithoutProductInput = {
    id?: number
    name: string
    stock: number
    expectedStock: number
    buyPrice: number
    sellPrice: number
    buyLink?: string | null
    imageLink?: string | null
    priorityWeight?: number | null
    orderItems?: orderItemsUncheckedCreateNestedManyWithoutProductVariationInput
  }

  export type productVariationsCreateOrConnectWithoutProductInput = {
    where: productVariationsWhereUniqueInput
    create: XOR<productVariationsCreateWithoutProductInput, productVariationsUncheckedCreateWithoutProductInput>
  }

  export type productVariationsCreateManyProductInputEnvelope = {
    data: productVariationsCreateManyProductInput | productVariationsCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type productImagesUpsertWithWhereUniqueWithoutProductInput = {
    where: productImagesWhereUniqueInput
    update: XOR<productImagesUpdateWithoutProductInput, productImagesUncheckedUpdateWithoutProductInput>
    create: XOR<productImagesCreateWithoutProductInput, productImagesUncheckedCreateWithoutProductInput>
  }

  export type productImagesUpdateWithWhereUniqueWithoutProductInput = {
    where: productImagesWhereUniqueInput
    data: XOR<productImagesUpdateWithoutProductInput, productImagesUncheckedUpdateWithoutProductInput>
  }

  export type productImagesUpdateManyWithWhereWithoutProductInput = {
    where: productImagesScalarWhereInput
    data: XOR<productImagesUpdateManyMutationInput, productImagesUncheckedUpdateManyWithoutProductInput>
  }

  export type productImagesScalarWhereInput = {
    AND?: productImagesScalarWhereInput | productImagesScalarWhereInput[]
    OR?: productImagesScalarWhereInput[]
    NOT?: productImagesScalarWhereInput | productImagesScalarWhereInput[]
    id?: IntFilter<"productImages"> | number
    productId?: IntFilter<"productImages"> | number
    link?: StringFilter<"productImages"> | string
  }

  export type productVariationsUpsertWithWhereUniqueWithoutProductInput = {
    where: productVariationsWhereUniqueInput
    update: XOR<productVariationsUpdateWithoutProductInput, productVariationsUncheckedUpdateWithoutProductInput>
    create: XOR<productVariationsCreateWithoutProductInput, productVariationsUncheckedCreateWithoutProductInput>
  }

  export type productVariationsUpdateWithWhereUniqueWithoutProductInput = {
    where: productVariationsWhereUniqueInput
    data: XOR<productVariationsUpdateWithoutProductInput, productVariationsUncheckedUpdateWithoutProductInput>
  }

  export type productVariationsUpdateManyWithWhereWithoutProductInput = {
    where: productVariationsScalarWhereInput
    data: XOR<productVariationsUpdateManyMutationInput, productVariationsUncheckedUpdateManyWithoutProductInput>
  }

  export type productVariationsScalarWhereInput = {
    AND?: productVariationsScalarWhereInput | productVariationsScalarWhereInput[]
    OR?: productVariationsScalarWhereInput[]
    NOT?: productVariationsScalarWhereInput | productVariationsScalarWhereInput[]
    id?: IntFilter<"productVariations"> | number
    productId?: IntFilter<"productVariations"> | number
    name?: StringFilter<"productVariations"> | string
    stock?: IntFilter<"productVariations"> | number
    expectedStock?: IntFilter<"productVariations"> | number
    buyPrice?: FloatFilter<"productVariations"> | number
    sellPrice?: FloatFilter<"productVariations"> | number
    buyLink?: StringNullableFilter<"productVariations"> | string | null
    imageLink?: StringNullableFilter<"productVariations"> | string | null
    priorityWeight?: FloatNullableFilter<"productVariations"> | number | null
  }

  export type productsCreateWithoutProductImagesInput = {
    name: string
    description?: string | null
    link?: string | null
    shopeeId?: string | null
    productVariations?: productVariationsCreateNestedManyWithoutProductInput
  }

  export type productsUncheckedCreateWithoutProductImagesInput = {
    id?: number
    name: string
    description?: string | null
    link?: string | null
    shopeeId?: string | null
    productVariations?: productVariationsUncheckedCreateNestedManyWithoutProductInput
  }

  export type productsCreateOrConnectWithoutProductImagesInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutProductImagesInput, productsUncheckedCreateWithoutProductImagesInput>
  }

  export type productsUpsertWithoutProductImagesInput = {
    update: XOR<productsUpdateWithoutProductImagesInput, productsUncheckedUpdateWithoutProductImagesInput>
    create: XOR<productsCreateWithoutProductImagesInput, productsUncheckedCreateWithoutProductImagesInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutProductImagesInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutProductImagesInput, productsUncheckedUpdateWithoutProductImagesInput>
  }

  export type productsUpdateWithoutProductImagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    shopeeId?: NullableStringFieldUpdateOperationsInput | string | null
    productVariations?: productVariationsUpdateManyWithoutProductNestedInput
  }

  export type productsUncheckedUpdateWithoutProductImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    shopeeId?: NullableStringFieldUpdateOperationsInput | string | null
    productVariations?: productVariationsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type productsCreateWithoutProductVariationsInput = {
    name: string
    description?: string | null
    link?: string | null
    shopeeId?: string | null
    productImages?: productImagesCreateNestedManyWithoutProductInput
  }

  export type productsUncheckedCreateWithoutProductVariationsInput = {
    id?: number
    name: string
    description?: string | null
    link?: string | null
    shopeeId?: string | null
    productImages?: productImagesUncheckedCreateNestedManyWithoutProductInput
  }

  export type productsCreateOrConnectWithoutProductVariationsInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutProductVariationsInput, productsUncheckedCreateWithoutProductVariationsInput>
  }

  export type orderItemsCreateWithoutProductVariationInput = {
    quantity: number
    order: ordersCreateNestedOneWithoutOrderItemsInput
  }

  export type orderItemsUncheckedCreateWithoutProductVariationInput = {
    id?: number
    orderId: number
    quantity: number
  }

  export type orderItemsCreateOrConnectWithoutProductVariationInput = {
    where: orderItemsWhereUniqueInput
    create: XOR<orderItemsCreateWithoutProductVariationInput, orderItemsUncheckedCreateWithoutProductVariationInput>
  }

  export type orderItemsCreateManyProductVariationInputEnvelope = {
    data: orderItemsCreateManyProductVariationInput | orderItemsCreateManyProductVariationInput[]
    skipDuplicates?: boolean
  }

  export type productsUpsertWithoutProductVariationsInput = {
    update: XOR<productsUpdateWithoutProductVariationsInput, productsUncheckedUpdateWithoutProductVariationsInput>
    create: XOR<productsCreateWithoutProductVariationsInput, productsUncheckedCreateWithoutProductVariationsInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutProductVariationsInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutProductVariationsInput, productsUncheckedUpdateWithoutProductVariationsInput>
  }

  export type productsUpdateWithoutProductVariationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    shopeeId?: NullableStringFieldUpdateOperationsInput | string | null
    productImages?: productImagesUpdateManyWithoutProductNestedInput
  }

  export type productsUncheckedUpdateWithoutProductVariationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    shopeeId?: NullableStringFieldUpdateOperationsInput | string | null
    productImages?: productImagesUncheckedUpdateManyWithoutProductNestedInput
  }

  export type orderItemsUpsertWithWhereUniqueWithoutProductVariationInput = {
    where: orderItemsWhereUniqueInput
    update: XOR<orderItemsUpdateWithoutProductVariationInput, orderItemsUncheckedUpdateWithoutProductVariationInput>
    create: XOR<orderItemsCreateWithoutProductVariationInput, orderItemsUncheckedCreateWithoutProductVariationInput>
  }

  export type orderItemsUpdateWithWhereUniqueWithoutProductVariationInput = {
    where: orderItemsWhereUniqueInput
    data: XOR<orderItemsUpdateWithoutProductVariationInput, orderItemsUncheckedUpdateWithoutProductVariationInput>
  }

  export type orderItemsUpdateManyWithWhereWithoutProductVariationInput = {
    where: orderItemsScalarWhereInput
    data: XOR<orderItemsUpdateManyMutationInput, orderItemsUncheckedUpdateManyWithoutProductVariationInput>
  }

  export type productVariationsCreateWithoutOrderItemsInput = {
    name: string
    stock: number
    expectedStock: number
    buyPrice: number
    sellPrice: number
    buyLink?: string | null
    imageLink?: string | null
    priorityWeight?: number | null
    product: productsCreateNestedOneWithoutProductVariationsInput
  }

  export type productVariationsUncheckedCreateWithoutOrderItemsInput = {
    id?: number
    productId: number
    name: string
    stock: number
    expectedStock: number
    buyPrice: number
    sellPrice: number
    buyLink?: string | null
    imageLink?: string | null
    priorityWeight?: number | null
  }

  export type productVariationsCreateOrConnectWithoutOrderItemsInput = {
    where: productVariationsWhereUniqueInput
    create: XOR<productVariationsCreateWithoutOrderItemsInput, productVariationsUncheckedCreateWithoutOrderItemsInput>
  }

  export type ordersCreateWithoutOrderItemsInput = {
    date?: Date | string
  }

  export type ordersUncheckedCreateWithoutOrderItemsInput = {
    id?: number
    date?: Date | string
  }

  export type ordersCreateOrConnectWithoutOrderItemsInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutOrderItemsInput, ordersUncheckedCreateWithoutOrderItemsInput>
  }

  export type productVariationsUpsertWithoutOrderItemsInput = {
    update: XOR<productVariationsUpdateWithoutOrderItemsInput, productVariationsUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<productVariationsCreateWithoutOrderItemsInput, productVariationsUncheckedCreateWithoutOrderItemsInput>
    where?: productVariationsWhereInput
  }

  export type productVariationsUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: productVariationsWhereInput
    data: XOR<productVariationsUpdateWithoutOrderItemsInput, productVariationsUncheckedUpdateWithoutOrderItemsInput>
  }

  export type productVariationsUpdateWithoutOrderItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    expectedStock?: IntFieldUpdateOperationsInput | number
    buyPrice?: FloatFieldUpdateOperationsInput | number
    sellPrice?: FloatFieldUpdateOperationsInput | number
    buyLink?: NullableStringFieldUpdateOperationsInput | string | null
    imageLink?: NullableStringFieldUpdateOperationsInput | string | null
    priorityWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    product?: productsUpdateOneRequiredWithoutProductVariationsNestedInput
  }

  export type productVariationsUncheckedUpdateWithoutOrderItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    expectedStock?: IntFieldUpdateOperationsInput | number
    buyPrice?: FloatFieldUpdateOperationsInput | number
    sellPrice?: FloatFieldUpdateOperationsInput | number
    buyLink?: NullableStringFieldUpdateOperationsInput | string | null
    imageLink?: NullableStringFieldUpdateOperationsInput | string | null
    priorityWeight?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ordersUpsertWithoutOrderItemsInput = {
    update: XOR<ordersUpdateWithoutOrderItemsInput, ordersUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<ordersCreateWithoutOrderItemsInput, ordersUncheckedCreateWithoutOrderItemsInput>
    where?: ordersWhereInput
  }

  export type ordersUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: ordersWhereInput
    data: XOR<ordersUpdateWithoutOrderItemsInput, ordersUncheckedUpdateWithoutOrderItemsInput>
  }

  export type ordersUpdateWithoutOrderItemsInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ordersUncheckedUpdateWithoutOrderItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type orderItemsCreateManyOrderInput = {
    id?: number
    productVariationId: number
    quantity: number
  }

  export type orderItemsUpdateWithoutOrderInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    productVariation?: productVariationsUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type orderItemsUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    productVariationId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type orderItemsUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    productVariationId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type productImagesCreateManyProductInput = {
    id?: number
    link: string
  }

  export type productVariationsCreateManyProductInput = {
    id?: number
    name: string
    stock: number
    expectedStock: number
    buyPrice: number
    sellPrice: number
    buyLink?: string | null
    imageLink?: string | null
    priorityWeight?: number | null
  }

  export type productImagesUpdateWithoutProductInput = {
    link?: StringFieldUpdateOperationsInput | string
  }

  export type productImagesUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    link?: StringFieldUpdateOperationsInput | string
  }

  export type productImagesUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    link?: StringFieldUpdateOperationsInput | string
  }

  export type productVariationsUpdateWithoutProductInput = {
    name?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    expectedStock?: IntFieldUpdateOperationsInput | number
    buyPrice?: FloatFieldUpdateOperationsInput | number
    sellPrice?: FloatFieldUpdateOperationsInput | number
    buyLink?: NullableStringFieldUpdateOperationsInput | string | null
    imageLink?: NullableStringFieldUpdateOperationsInput | string | null
    priorityWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    orderItems?: orderItemsUpdateManyWithoutProductVariationNestedInput
  }

  export type productVariationsUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    expectedStock?: IntFieldUpdateOperationsInput | number
    buyPrice?: FloatFieldUpdateOperationsInput | number
    sellPrice?: FloatFieldUpdateOperationsInput | number
    buyLink?: NullableStringFieldUpdateOperationsInput | string | null
    imageLink?: NullableStringFieldUpdateOperationsInput | string | null
    priorityWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    orderItems?: orderItemsUncheckedUpdateManyWithoutProductVariationNestedInput
  }

  export type productVariationsUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    expectedStock?: IntFieldUpdateOperationsInput | number
    buyPrice?: FloatFieldUpdateOperationsInput | number
    sellPrice?: FloatFieldUpdateOperationsInput | number
    buyLink?: NullableStringFieldUpdateOperationsInput | string | null
    imageLink?: NullableStringFieldUpdateOperationsInput | string | null
    priorityWeight?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type orderItemsCreateManyProductVariationInput = {
    id?: number
    orderId: number
    quantity: number
  }

  export type orderItemsUpdateWithoutProductVariationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    order?: ordersUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type orderItemsUncheckedUpdateWithoutProductVariationInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type orderItemsUncheckedUpdateManyWithoutProductVariationInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use OrdersCountOutputTypeDefaultArgs instead
     */
    export type OrdersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrdersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductsCountOutputTypeDefaultArgs instead
     */
    export type ProductsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductVariationsCountOutputTypeDefaultArgs instead
     */
    export type ProductVariationsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductVariationsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ordersDefaultArgs instead
     */
    export type ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ordersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use productsDefaultArgs instead
     */
    export type productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = productsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use productImagesDefaultArgs instead
     */
    export type productImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = productImagesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use productVariationsDefaultArgs instead
     */
    export type productVariationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = productVariationsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use orderItemsDefaultArgs instead
     */
    export type orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = orderItemsDefaultArgs<ExtArgs>

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