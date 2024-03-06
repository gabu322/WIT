
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
 * Model order
 * 
 */
export type order = $Result.DefaultSelection<Prisma.$orderPayload>
/**
 * Model product
 * 
 */
export type product = $Result.DefaultSelection<Prisma.$productPayload>
/**
 * Model product_image
 * 
 */
export type product_image = $Result.DefaultSelection<Prisma.$product_imagePayload>
/**
 * Model product_variation
 * 
 */
export type product_variation = $Result.DefaultSelection<Prisma.$product_variationPayload>
/**
 * Model order_item
 * 
 */
export type order_item = $Result.DefaultSelection<Prisma.$order_itemPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Orders
 * const orders = await prisma.order.findMany()
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
   * const orders = await prisma.order.findMany()
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
   * `prisma.order`: Exposes CRUD operations for the **order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.orderDelegate<ExtArgs>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.productDelegate<ExtArgs>;

  /**
   * `prisma.product_image`: Exposes CRUD operations for the **product_image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Product_images
    * const product_images = await prisma.product_image.findMany()
    * ```
    */
  get product_image(): Prisma.product_imageDelegate<ExtArgs>;

  /**
   * `prisma.product_variation`: Exposes CRUD operations for the **product_variation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Product_variations
    * const product_variations = await prisma.product_variation.findMany()
    * ```
    */
  get product_variation(): Prisma.product_variationDelegate<ExtArgs>;

  /**
   * `prisma.order_item`: Exposes CRUD operations for the **order_item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Order_items
    * const order_items = await prisma.order_item.findMany()
    * ```
    */
  get order_item(): Prisma.order_itemDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.9.1
   * Query Engine version: 23fdc5965b1e05fc54e5f26ed3de66776b93de64
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
    order: 'order',
    product: 'product',
    product_image: 'product_image',
    product_variation: 'product_variation',
    order_item: 'order_item'
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
      modelProps: 'order' | 'product' | 'product_image' | 'product_variation' | 'order_item'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      order: {
        payload: Prisma.$orderPayload<ExtArgs>
        fields: Prisma.orderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.orderFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$orderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.orderFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          findFirst: {
            args: Prisma.orderFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$orderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.orderFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          findMany: {
            args: Prisma.orderFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$orderPayload>[]
          }
          create: {
            args: Prisma.orderCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          createMany: {
            args: Prisma.orderCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.orderDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          update: {
            args: Prisma.orderUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          deleteMany: {
            args: Prisma.orderDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.orderUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.orderUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.orderGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.orderCountArgs<ExtArgs>,
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      product: {
        payload: Prisma.$productPayload<ExtArgs>
        fields: Prisma.productFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          findFirst: {
            args: Prisma.productFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          findMany: {
            args: Prisma.productFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productPayload>[]
          }
          create: {
            args: Prisma.productCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          createMany: {
            args: Prisma.productCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.productDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          update: {
            args: Prisma.productUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          deleteMany: {
            args: Prisma.productDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.productUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.productUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.productGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.productCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      product_image: {
        payload: Prisma.$product_imagePayload<ExtArgs>
        fields: Prisma.product_imageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.product_imageFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$product_imagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.product_imageFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$product_imagePayload>
          }
          findFirst: {
            args: Prisma.product_imageFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$product_imagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.product_imageFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$product_imagePayload>
          }
          findMany: {
            args: Prisma.product_imageFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$product_imagePayload>[]
          }
          create: {
            args: Prisma.product_imageCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$product_imagePayload>
          }
          createMany: {
            args: Prisma.product_imageCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.product_imageDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$product_imagePayload>
          }
          update: {
            args: Prisma.product_imageUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$product_imagePayload>
          }
          deleteMany: {
            args: Prisma.product_imageDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.product_imageUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.product_imageUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$product_imagePayload>
          }
          aggregate: {
            args: Prisma.Product_imageAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProduct_image>
          }
          groupBy: {
            args: Prisma.product_imageGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Product_imageGroupByOutputType>[]
          }
          count: {
            args: Prisma.product_imageCountArgs<ExtArgs>,
            result: $Utils.Optional<Product_imageCountAggregateOutputType> | number
          }
        }
      }
      product_variation: {
        payload: Prisma.$product_variationPayload<ExtArgs>
        fields: Prisma.product_variationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.product_variationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$product_variationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.product_variationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$product_variationPayload>
          }
          findFirst: {
            args: Prisma.product_variationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$product_variationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.product_variationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$product_variationPayload>
          }
          findMany: {
            args: Prisma.product_variationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$product_variationPayload>[]
          }
          create: {
            args: Prisma.product_variationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$product_variationPayload>
          }
          createMany: {
            args: Prisma.product_variationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.product_variationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$product_variationPayload>
          }
          update: {
            args: Prisma.product_variationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$product_variationPayload>
          }
          deleteMany: {
            args: Prisma.product_variationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.product_variationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.product_variationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$product_variationPayload>
          }
          aggregate: {
            args: Prisma.Product_variationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProduct_variation>
          }
          groupBy: {
            args: Prisma.product_variationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Product_variationGroupByOutputType>[]
          }
          count: {
            args: Prisma.product_variationCountArgs<ExtArgs>,
            result: $Utils.Optional<Product_variationCountAggregateOutputType> | number
          }
        }
      }
      order_item: {
        payload: Prisma.$order_itemPayload<ExtArgs>
        fields: Prisma.order_itemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.order_itemFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.order_itemFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload>
          }
          findFirst: {
            args: Prisma.order_itemFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.order_itemFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload>
          }
          findMany: {
            args: Prisma.order_itemFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload>[]
          }
          create: {
            args: Prisma.order_itemCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload>
          }
          createMany: {
            args: Prisma.order_itemCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.order_itemDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload>
          }
          update: {
            args: Prisma.order_itemUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload>
          }
          deleteMany: {
            args: Prisma.order_itemDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.order_itemUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.order_itemUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload>
          }
          aggregate: {
            args: Prisma.Order_itemAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOrder_item>
          }
          groupBy: {
            args: Prisma.order_itemGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Order_itemGroupByOutputType>[]
          }
          count: {
            args: Prisma.order_itemCountArgs<ExtArgs>,
            result: $Utils.Optional<Order_itemCountAggregateOutputType> | number
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
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    order_items: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_items?: boolean | OrderCountOutputTypeCountOrder_itemsArgs
  }

  // Custom InputTypes

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountOrder_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_itemWhereInput
  }



  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    product_image: number
    product_variation: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product_image?: boolean | ProductCountOutputTypeCountProduct_imageArgs
    product_variation?: boolean | ProductCountOutputTypeCountProduct_variationArgs
  }

  // Custom InputTypes

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountProduct_imageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: product_imageWhereInput
  }


  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountProduct_variationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: product_variationWhereInput
  }



  /**
   * Count Type Product_variationCountOutputType
   */

  export type Product_variationCountOutputType = {
    order_items: number
  }

  export type Product_variationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_items?: boolean | Product_variationCountOutputTypeCountOrder_itemsArgs
  }

  // Custom InputTypes

  /**
   * Product_variationCountOutputType without action
   */
  export type Product_variationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product_variationCountOutputType
     */
    select?: Product_variationCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * Product_variationCountOutputType without action
   */
  export type Product_variationCountOutputTypeCountOrder_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_itemWhereInput
  }



  /**
   * Models
   */

  /**
   * Model order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    id: number | null
  }

  export type OrderSumAggregateOutputType = {
    id: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: number | null
    date: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: number | null
    date: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    date: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    id?: true
  }

  export type OrderSumAggregateInputType = {
    id?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    date?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    date?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    date?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order to aggregate.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: orderWhereUniqueInput
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
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type orderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderWhereInput
    orderBy?: orderOrderByWithAggregationInput | orderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: orderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: number
    date: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends orderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type orderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    order_items?: boolean | order$order_itemsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type orderSelectScalar = {
    id?: boolean
    date?: boolean
  }

  export type orderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_items?: boolean | order$order_itemsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $orderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "order"
    objects: {
      order_items: Prisma.$order_itemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }


  type orderGetPayload<S extends boolean | null | undefined | orderDefaultArgs> = $Result.GetResult<Prisma.$orderPayload, S>

  type orderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<orderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface orderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['order'], meta: { name: 'order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {orderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends orderFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, orderFindUniqueArgs<ExtArgs>>
    ): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Order that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {orderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends orderFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, orderFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends orderFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, orderFindFirstArgs<ExtArgs>>
    ): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends orderFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, orderFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends orderFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, orderFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Order.
     * @param {orderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
    **/
    create<T extends orderCreateArgs<ExtArgs>>(
      args: SelectSubset<T, orderCreateArgs<ExtArgs>>
    ): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Orders.
     *     @param {orderCreateManyArgs} args - Arguments to create many Orders.
     *     @example
     *     // Create many Orders
     *     const order = await prisma.order.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends orderCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, orderCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order.
     * @param {orderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
    **/
    delete<T extends orderDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, orderDeleteArgs<ExtArgs>>
    ): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Order.
     * @param {orderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends orderUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, orderUpdateArgs<ExtArgs>>
    ): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Orders.
     * @param {orderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends orderDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, orderDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends orderUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, orderUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {orderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
    **/
    upsert<T extends orderUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, orderUpsertArgs<ExtArgs>>
    ): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends orderCountArgs>(
      args?: Subset<T, orderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderGroupByArgs} args - Group by arguments.
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
      T extends orderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: orderGroupByArgs['orderBy'] }
        : { orderBy?: orderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, orderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the order model
   */
  readonly fields: orderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__orderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    order_items<T extends order$order_itemsArgs<ExtArgs> = {}>(args?: Subset<T, order$order_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the order model
   */ 
  interface orderFieldRefs {
    readonly id: FieldRef<"order", 'Int'>
    readonly date: FieldRef<"order", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * order findUnique
   */
  export type orderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which order to fetch.
     */
    where: orderWhereUniqueInput
  }


  /**
   * order findUniqueOrThrow
   */
  export type orderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which order to fetch.
     */
    where: orderWhereUniqueInput
  }


  /**
   * order findFirst
   */
  export type orderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which order to fetch.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: orderWhereUniqueInput
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
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * order findFirstOrThrow
   */
  export type orderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which order to fetch.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: orderWhereUniqueInput
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
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * order findMany
   */
  export type orderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orders.
     */
    cursor?: orderWhereUniqueInput
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
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * order create
   */
  export type orderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * The data needed to create a order.
     */
    data?: XOR<orderCreateInput, orderUncheckedCreateInput>
  }


  /**
   * order createMany
   */
  export type orderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orders.
     */
    data: orderCreateManyInput | orderCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * order update
   */
  export type orderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * The data needed to update a order.
     */
    data: XOR<orderUpdateInput, orderUncheckedUpdateInput>
    /**
     * Choose, which order to update.
     */
    where: orderWhereUniqueInput
  }


  /**
   * order updateMany
   */
  export type orderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orders.
     */
    data: XOR<orderUpdateManyMutationInput, orderUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: orderWhereInput
  }


  /**
   * order upsert
   */
  export type orderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * The filter to search for the order to update in case it exists.
     */
    where: orderWhereUniqueInput
    /**
     * In case the order found by the `where` argument doesn't exist, create a new order with this data.
     */
    create: XOR<orderCreateInput, orderUncheckedCreateInput>
    /**
     * In case the order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<orderUpdateInput, orderUncheckedUpdateInput>
  }


  /**
   * order delete
   */
  export type orderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter which order to delete.
     */
    where: orderWhereUniqueInput
  }


  /**
   * order deleteMany
   */
  export type orderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to delete
     */
    where?: orderWhereInput
  }


  /**
   * order.order_items
   */
  export type order$order_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_itemInclude<ExtArgs> | null
    where?: order_itemWhereInput
    orderBy?: order_itemOrderByWithRelationInput | order_itemOrderByWithRelationInput[]
    cursor?: order_itemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_itemScalarFieldEnum | Order_itemScalarFieldEnum[]
  }


  /**
   * order without action
   */
  export type orderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderInclude<ExtArgs> | null
  }



  /**
   * Model product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    targeted_stock: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    targeted_stock: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    shopee_id: string | null
    targeted_stock: number | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    shopee_id: string | null
    targeted_stock: number | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    description: number
    shopee_id: number
    targeted_stock: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    targeted_stock?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    targeted_stock?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    shopee_id?: true
    targeted_stock?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    shopee_id?: true
    targeted_stock?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    shopee_id?: true
    targeted_stock?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product to aggregate.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productWhereUniqueInput
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
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type productGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productWhereInput
    orderBy?: productOrderByWithAggregationInput | productOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: productScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    name: string
    description: string | null
    shopee_id: string | null
    targeted_stock: number
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends productGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type productSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    shopee_id?: boolean
    targeted_stock?: boolean
    product_image?: boolean | product$product_imageArgs<ExtArgs>
    product_variation?: boolean | product$product_variationArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type productSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    shopee_id?: boolean
    targeted_stock?: boolean
  }

  export type productInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product_image?: boolean | product$product_imageArgs<ExtArgs>
    product_variation?: boolean | product$product_variationArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $productPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "product"
    objects: {
      product_image: Prisma.$product_imagePayload<ExtArgs>[]
      product_variation: Prisma.$product_variationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      shopee_id: string | null
      targeted_stock: number
    }, ExtArgs["result"]["product"]>
    composites: {}
  }


  type productGetPayload<S extends boolean | null | undefined | productDefaultArgs> = $Result.GetResult<Prisma.$productPayload, S>

  type productCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<productFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface productDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['product'], meta: { name: 'product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {productFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends productFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, productFindUniqueArgs<ExtArgs>>
    ): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Product that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {productFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends productFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, productFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends productFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, productFindFirstArgs<ExtArgs>>
    ): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends productFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, productFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends productFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, productFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Product.
     * @param {productCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
    **/
    create<T extends productCreateArgs<ExtArgs>>(
      args: SelectSubset<T, productCreateArgs<ExtArgs>>
    ): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Products.
     *     @param {productCreateManyArgs} args - Arguments to create many Products.
     *     @example
     *     // Create many Products
     *     const product = await prisma.product.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends productCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, productCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {productDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
    **/
    delete<T extends productDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, productDeleteArgs<ExtArgs>>
    ): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Product.
     * @param {productUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends productUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, productUpdateArgs<ExtArgs>>
    ): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {productDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends productDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, productDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends productUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, productUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {productUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
    **/
    upsert<T extends productUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, productUpsertArgs<ExtArgs>>
    ): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productCountArgs>(
      args?: Subset<T, productCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productGroupByArgs} args - Group by arguments.
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
      T extends productGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productGroupByArgs['orderBy'] }
        : { orderBy?: productGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, productGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the product model
   */
  readonly fields: productFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    product_image<T extends product$product_imageArgs<ExtArgs> = {}>(args?: Subset<T, product$product_imageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_imagePayload<ExtArgs>, T, 'findMany'> | Null>;

    product_variation<T extends product$product_variationArgs<ExtArgs> = {}>(args?: Subset<T, product$product_variationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_variationPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the product model
   */ 
  interface productFieldRefs {
    readonly id: FieldRef<"product", 'Int'>
    readonly name: FieldRef<"product", 'String'>
    readonly description: FieldRef<"product", 'String'>
    readonly shopee_id: FieldRef<"product", 'String'>
    readonly targeted_stock: FieldRef<"product", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * product findUnique
   */
  export type productFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where: productWhereUniqueInput
  }


  /**
   * product findUniqueOrThrow
   */
  export type productFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where: productWhereUniqueInput
  }


  /**
   * product findFirst
   */
  export type productFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productWhereUniqueInput
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
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * product findFirstOrThrow
   */
  export type productFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productWhereUniqueInput
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
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * product findMany
   */
  export type productFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     */
    cursor?: productWhereUniqueInput
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
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * product create
   */
  export type productCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productInclude<ExtArgs> | null
    /**
     * The data needed to create a product.
     */
    data: XOR<productCreateInput, productUncheckedCreateInput>
  }


  /**
   * product createMany
   */
  export type productCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products.
     */
    data: productCreateManyInput | productCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * product update
   */
  export type productUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productInclude<ExtArgs> | null
    /**
     * The data needed to update a product.
     */
    data: XOR<productUpdateInput, productUncheckedUpdateInput>
    /**
     * Choose, which product to update.
     */
    where: productWhereUniqueInput
  }


  /**
   * product updateMany
   */
  export type productUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products.
     */
    data: XOR<productUpdateManyMutationInput, productUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productWhereInput
  }


  /**
   * product upsert
   */
  export type productUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productInclude<ExtArgs> | null
    /**
     * The filter to search for the product to update in case it exists.
     */
    where: productWhereUniqueInput
    /**
     * In case the product found by the `where` argument doesn't exist, create a new product with this data.
     */
    create: XOR<productCreateInput, productUncheckedCreateInput>
    /**
     * In case the product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productUpdateInput, productUncheckedUpdateInput>
  }


  /**
   * product delete
   */
  export type productDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter which product to delete.
     */
    where: productWhereUniqueInput
  }


  /**
   * product deleteMany
   */
  export type productDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to delete
     */
    where?: productWhereInput
  }


  /**
   * product.product_image
   */
  export type product$product_imageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_image
     */
    select?: product_imageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: product_imageInclude<ExtArgs> | null
    where?: product_imageWhereInput
    orderBy?: product_imageOrderByWithRelationInput | product_imageOrderByWithRelationInput[]
    cursor?: product_imageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Product_imageScalarFieldEnum | Product_imageScalarFieldEnum[]
  }


  /**
   * product.product_variation
   */
  export type product$product_variationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_variation
     */
    select?: product_variationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: product_variationInclude<ExtArgs> | null
    where?: product_variationWhereInput
    orderBy?: product_variationOrderByWithRelationInput | product_variationOrderByWithRelationInput[]
    cursor?: product_variationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Product_variationScalarFieldEnum | Product_variationScalarFieldEnum[]
  }


  /**
   * product without action
   */
  export type productDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productInclude<ExtArgs> | null
  }



  /**
   * Model product_image
   */

  export type AggregateProduct_image = {
    _count: Product_imageCountAggregateOutputType | null
    _avg: Product_imageAvgAggregateOutputType | null
    _sum: Product_imageSumAggregateOutputType | null
    _min: Product_imageMinAggregateOutputType | null
    _max: Product_imageMaxAggregateOutputType | null
  }

  export type Product_imageAvgAggregateOutputType = {
    id: number | null
    product_id: number | null
  }

  export type Product_imageSumAggregateOutputType = {
    id: number | null
    product_id: number | null
  }

  export type Product_imageMinAggregateOutputType = {
    id: number | null
    product_id: number | null
    link: string | null
  }

  export type Product_imageMaxAggregateOutputType = {
    id: number | null
    product_id: number | null
    link: string | null
  }

  export type Product_imageCountAggregateOutputType = {
    id: number
    product_id: number
    link: number
    _all: number
  }


  export type Product_imageAvgAggregateInputType = {
    id?: true
    product_id?: true
  }

  export type Product_imageSumAggregateInputType = {
    id?: true
    product_id?: true
  }

  export type Product_imageMinAggregateInputType = {
    id?: true
    product_id?: true
    link?: true
  }

  export type Product_imageMaxAggregateInputType = {
    id?: true
    product_id?: true
    link?: true
  }

  export type Product_imageCountAggregateInputType = {
    id?: true
    product_id?: true
    link?: true
    _all?: true
  }

  export type Product_imageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product_image to aggregate.
     */
    where?: product_imageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_images to fetch.
     */
    orderBy?: product_imageOrderByWithRelationInput | product_imageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: product_imageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned product_images
    **/
    _count?: true | Product_imageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Product_imageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Product_imageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Product_imageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Product_imageMaxAggregateInputType
  }

  export type GetProduct_imageAggregateType<T extends Product_imageAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct_image]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct_image[P]>
      : GetScalarType<T[P], AggregateProduct_image[P]>
  }




  export type product_imageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: product_imageWhereInput
    orderBy?: product_imageOrderByWithAggregationInput | product_imageOrderByWithAggregationInput[]
    by: Product_imageScalarFieldEnum[] | Product_imageScalarFieldEnum
    having?: product_imageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Product_imageCountAggregateInputType | true
    _avg?: Product_imageAvgAggregateInputType
    _sum?: Product_imageSumAggregateInputType
    _min?: Product_imageMinAggregateInputType
    _max?: Product_imageMaxAggregateInputType
  }

  export type Product_imageGroupByOutputType = {
    id: number
    product_id: number
    link: string
    _count: Product_imageCountAggregateOutputType | null
    _avg: Product_imageAvgAggregateOutputType | null
    _sum: Product_imageSumAggregateOutputType | null
    _min: Product_imageMinAggregateOutputType | null
    _max: Product_imageMaxAggregateOutputType | null
  }

  type GetProduct_imageGroupByPayload<T extends product_imageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Product_imageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Product_imageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Product_imageGroupByOutputType[P]>
            : GetScalarType<T[P], Product_imageGroupByOutputType[P]>
        }
      >
    >


  export type product_imageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    link?: boolean
    product?: boolean | productDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product_image"]>

  export type product_imageSelectScalar = {
    id?: boolean
    product_id?: boolean
    link?: boolean
  }

  export type product_imageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | productDefaultArgs<ExtArgs>
  }


  export type $product_imagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "product_image"
    objects: {
      product: Prisma.$productPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      product_id: number
      link: string
    }, ExtArgs["result"]["product_image"]>
    composites: {}
  }


  type product_imageGetPayload<S extends boolean | null | undefined | product_imageDefaultArgs> = $Result.GetResult<Prisma.$product_imagePayload, S>

  type product_imageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<product_imageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Product_imageCountAggregateInputType | true
    }

  export interface product_imageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['product_image'], meta: { name: 'product_image' } }
    /**
     * Find zero or one Product_image that matches the filter.
     * @param {product_imageFindUniqueArgs} args - Arguments to find a Product_image
     * @example
     * // Get one Product_image
     * const product_image = await prisma.product_image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends product_imageFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, product_imageFindUniqueArgs<ExtArgs>>
    ): Prisma__product_imageClient<$Result.GetResult<Prisma.$product_imagePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Product_image that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {product_imageFindUniqueOrThrowArgs} args - Arguments to find a Product_image
     * @example
     * // Get one Product_image
     * const product_image = await prisma.product_image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends product_imageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, product_imageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__product_imageClient<$Result.GetResult<Prisma.$product_imagePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Product_image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_imageFindFirstArgs} args - Arguments to find a Product_image
     * @example
     * // Get one Product_image
     * const product_image = await prisma.product_image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends product_imageFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, product_imageFindFirstArgs<ExtArgs>>
    ): Prisma__product_imageClient<$Result.GetResult<Prisma.$product_imagePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Product_image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_imageFindFirstOrThrowArgs} args - Arguments to find a Product_image
     * @example
     * // Get one Product_image
     * const product_image = await prisma.product_image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends product_imageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, product_imageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__product_imageClient<$Result.GetResult<Prisma.$product_imagePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Product_images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_imageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Product_images
     * const product_images = await prisma.product_image.findMany()
     * 
     * // Get first 10 Product_images
     * const product_images = await prisma.product_image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const product_imageWithIdOnly = await prisma.product_image.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends product_imageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, product_imageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_imagePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Product_image.
     * @param {product_imageCreateArgs} args - Arguments to create a Product_image.
     * @example
     * // Create one Product_image
     * const Product_image = await prisma.product_image.create({
     *   data: {
     *     // ... data to create a Product_image
     *   }
     * })
     * 
    **/
    create<T extends product_imageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, product_imageCreateArgs<ExtArgs>>
    ): Prisma__product_imageClient<$Result.GetResult<Prisma.$product_imagePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Product_images.
     *     @param {product_imageCreateManyArgs} args - Arguments to create many Product_images.
     *     @example
     *     // Create many Product_images
     *     const product_image = await prisma.product_image.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends product_imageCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, product_imageCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product_image.
     * @param {product_imageDeleteArgs} args - Arguments to delete one Product_image.
     * @example
     * // Delete one Product_image
     * const Product_image = await prisma.product_image.delete({
     *   where: {
     *     // ... filter to delete one Product_image
     *   }
     * })
     * 
    **/
    delete<T extends product_imageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, product_imageDeleteArgs<ExtArgs>>
    ): Prisma__product_imageClient<$Result.GetResult<Prisma.$product_imagePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Product_image.
     * @param {product_imageUpdateArgs} args - Arguments to update one Product_image.
     * @example
     * // Update one Product_image
     * const product_image = await prisma.product_image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends product_imageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, product_imageUpdateArgs<ExtArgs>>
    ): Prisma__product_imageClient<$Result.GetResult<Prisma.$product_imagePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Product_images.
     * @param {product_imageDeleteManyArgs} args - Arguments to filter Product_images to delete.
     * @example
     * // Delete a few Product_images
     * const { count } = await prisma.product_image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends product_imageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, product_imageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Product_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_imageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Product_images
     * const product_image = await prisma.product_image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends product_imageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, product_imageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product_image.
     * @param {product_imageUpsertArgs} args - Arguments to update or create a Product_image.
     * @example
     * // Update or create a Product_image
     * const product_image = await prisma.product_image.upsert({
     *   create: {
     *     // ... data to create a Product_image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product_image we want to update
     *   }
     * })
    **/
    upsert<T extends product_imageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, product_imageUpsertArgs<ExtArgs>>
    ): Prisma__product_imageClient<$Result.GetResult<Prisma.$product_imagePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Product_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_imageCountArgs} args - Arguments to filter Product_images to count.
     * @example
     * // Count the number of Product_images
     * const count = await prisma.product_image.count({
     *   where: {
     *     // ... the filter for the Product_images we want to count
     *   }
     * })
    **/
    count<T extends product_imageCountArgs>(
      args?: Subset<T, product_imageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Product_imageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product_image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Product_imageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Product_imageAggregateArgs>(args: Subset<T, Product_imageAggregateArgs>): Prisma.PrismaPromise<GetProduct_imageAggregateType<T>>

    /**
     * Group by Product_image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_imageGroupByArgs} args - Group by arguments.
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
      T extends product_imageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: product_imageGroupByArgs['orderBy'] }
        : { orderBy?: product_imageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, product_imageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduct_imageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the product_image model
   */
  readonly fields: product_imageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for product_image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__product_imageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    product<T extends productDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productDefaultArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the product_image model
   */ 
  interface product_imageFieldRefs {
    readonly id: FieldRef<"product_image", 'Int'>
    readonly product_id: FieldRef<"product_image", 'Int'>
    readonly link: FieldRef<"product_image", 'String'>
  }
    

  // Custom InputTypes

  /**
   * product_image findUnique
   */
  export type product_imageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_image
     */
    select?: product_imageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: product_imageInclude<ExtArgs> | null
    /**
     * Filter, which product_image to fetch.
     */
    where: product_imageWhereUniqueInput
  }


  /**
   * product_image findUniqueOrThrow
   */
  export type product_imageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_image
     */
    select?: product_imageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: product_imageInclude<ExtArgs> | null
    /**
     * Filter, which product_image to fetch.
     */
    where: product_imageWhereUniqueInput
  }


  /**
   * product_image findFirst
   */
  export type product_imageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_image
     */
    select?: product_imageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: product_imageInclude<ExtArgs> | null
    /**
     * Filter, which product_image to fetch.
     */
    where?: product_imageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_images to fetch.
     */
    orderBy?: product_imageOrderByWithRelationInput | product_imageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for product_images.
     */
    cursor?: product_imageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of product_images.
     */
    distinct?: Product_imageScalarFieldEnum | Product_imageScalarFieldEnum[]
  }


  /**
   * product_image findFirstOrThrow
   */
  export type product_imageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_image
     */
    select?: product_imageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: product_imageInclude<ExtArgs> | null
    /**
     * Filter, which product_image to fetch.
     */
    where?: product_imageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_images to fetch.
     */
    orderBy?: product_imageOrderByWithRelationInput | product_imageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for product_images.
     */
    cursor?: product_imageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of product_images.
     */
    distinct?: Product_imageScalarFieldEnum | Product_imageScalarFieldEnum[]
  }


  /**
   * product_image findMany
   */
  export type product_imageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_image
     */
    select?: product_imageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: product_imageInclude<ExtArgs> | null
    /**
     * Filter, which product_images to fetch.
     */
    where?: product_imageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_images to fetch.
     */
    orderBy?: product_imageOrderByWithRelationInput | product_imageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing product_images.
     */
    cursor?: product_imageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_images.
     */
    skip?: number
    distinct?: Product_imageScalarFieldEnum | Product_imageScalarFieldEnum[]
  }


  /**
   * product_image create
   */
  export type product_imageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_image
     */
    select?: product_imageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: product_imageInclude<ExtArgs> | null
    /**
     * The data needed to create a product_image.
     */
    data: XOR<product_imageCreateInput, product_imageUncheckedCreateInput>
  }


  /**
   * product_image createMany
   */
  export type product_imageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many product_images.
     */
    data: product_imageCreateManyInput | product_imageCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * product_image update
   */
  export type product_imageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_image
     */
    select?: product_imageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: product_imageInclude<ExtArgs> | null
    /**
     * The data needed to update a product_image.
     */
    data: XOR<product_imageUpdateInput, product_imageUncheckedUpdateInput>
    /**
     * Choose, which product_image to update.
     */
    where: product_imageWhereUniqueInput
  }


  /**
   * product_image updateMany
   */
  export type product_imageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update product_images.
     */
    data: XOR<product_imageUpdateManyMutationInput, product_imageUncheckedUpdateManyInput>
    /**
     * Filter which product_images to update
     */
    where?: product_imageWhereInput
  }


  /**
   * product_image upsert
   */
  export type product_imageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_image
     */
    select?: product_imageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: product_imageInclude<ExtArgs> | null
    /**
     * The filter to search for the product_image to update in case it exists.
     */
    where: product_imageWhereUniqueInput
    /**
     * In case the product_image found by the `where` argument doesn't exist, create a new product_image with this data.
     */
    create: XOR<product_imageCreateInput, product_imageUncheckedCreateInput>
    /**
     * In case the product_image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<product_imageUpdateInput, product_imageUncheckedUpdateInput>
  }


  /**
   * product_image delete
   */
  export type product_imageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_image
     */
    select?: product_imageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: product_imageInclude<ExtArgs> | null
    /**
     * Filter which product_image to delete.
     */
    where: product_imageWhereUniqueInput
  }


  /**
   * product_image deleteMany
   */
  export type product_imageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product_images to delete
     */
    where?: product_imageWhereInput
  }


  /**
   * product_image without action
   */
  export type product_imageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_image
     */
    select?: product_imageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: product_imageInclude<ExtArgs> | null
  }



  /**
   * Model product_variation
   */

  export type AggregateProduct_variation = {
    _count: Product_variationCountAggregateOutputType | null
    _avg: Product_variationAvgAggregateOutputType | null
    _sum: Product_variationSumAggregateOutputType | null
    _min: Product_variationMinAggregateOutputType | null
    _max: Product_variationMaxAggregateOutputType | null
  }

  export type Product_variationAvgAggregateOutputType = {
    id: number | null
    product_id: number | null
    stock: number | null
    buy_price: number | null
    sell_price: number | null
    priority_weight: number | null
  }

  export type Product_variationSumAggregateOutputType = {
    id: number | null
    product_id: number | null
    stock: number | null
    buy_price: number | null
    sell_price: number | null
    priority_weight: number | null
  }

  export type Product_variationMinAggregateOutputType = {
    id: number | null
    product_id: number | null
    name: string | null
    stock: number | null
    buy_price: number | null
    sell_price: number | null
    image_link: string | null
    buy_link: string | null
    priority_weight: number | null
  }

  export type Product_variationMaxAggregateOutputType = {
    id: number | null
    product_id: number | null
    name: string | null
    stock: number | null
    buy_price: number | null
    sell_price: number | null
    image_link: string | null
    buy_link: string | null
    priority_weight: number | null
  }

  export type Product_variationCountAggregateOutputType = {
    id: number
    product_id: number
    name: number
    stock: number
    buy_price: number
    sell_price: number
    image_link: number
    buy_link: number
    priority_weight: number
    _all: number
  }


  export type Product_variationAvgAggregateInputType = {
    id?: true
    product_id?: true
    stock?: true
    buy_price?: true
    sell_price?: true
    priority_weight?: true
  }

  export type Product_variationSumAggregateInputType = {
    id?: true
    product_id?: true
    stock?: true
    buy_price?: true
    sell_price?: true
    priority_weight?: true
  }

  export type Product_variationMinAggregateInputType = {
    id?: true
    product_id?: true
    name?: true
    stock?: true
    buy_price?: true
    sell_price?: true
    image_link?: true
    buy_link?: true
    priority_weight?: true
  }

  export type Product_variationMaxAggregateInputType = {
    id?: true
    product_id?: true
    name?: true
    stock?: true
    buy_price?: true
    sell_price?: true
    image_link?: true
    buy_link?: true
    priority_weight?: true
  }

  export type Product_variationCountAggregateInputType = {
    id?: true
    product_id?: true
    name?: true
    stock?: true
    buy_price?: true
    sell_price?: true
    image_link?: true
    buy_link?: true
    priority_weight?: true
    _all?: true
  }

  export type Product_variationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product_variation to aggregate.
     */
    where?: product_variationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_variations to fetch.
     */
    orderBy?: product_variationOrderByWithRelationInput | product_variationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: product_variationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_variations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_variations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned product_variations
    **/
    _count?: true | Product_variationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Product_variationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Product_variationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Product_variationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Product_variationMaxAggregateInputType
  }

  export type GetProduct_variationAggregateType<T extends Product_variationAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct_variation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct_variation[P]>
      : GetScalarType<T[P], AggregateProduct_variation[P]>
  }




  export type product_variationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: product_variationWhereInput
    orderBy?: product_variationOrderByWithAggregationInput | product_variationOrderByWithAggregationInput[]
    by: Product_variationScalarFieldEnum[] | Product_variationScalarFieldEnum
    having?: product_variationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Product_variationCountAggregateInputType | true
    _avg?: Product_variationAvgAggregateInputType
    _sum?: Product_variationSumAggregateInputType
    _min?: Product_variationMinAggregateInputType
    _max?: Product_variationMaxAggregateInputType
  }

  export type Product_variationGroupByOutputType = {
    id: number
    product_id: number
    name: string
    stock: number
    buy_price: number
    sell_price: number
    image_link: string | null
    buy_link: string | null
    priority_weight: number | null
    _count: Product_variationCountAggregateOutputType | null
    _avg: Product_variationAvgAggregateOutputType | null
    _sum: Product_variationSumAggregateOutputType | null
    _min: Product_variationMinAggregateOutputType | null
    _max: Product_variationMaxAggregateOutputType | null
  }

  type GetProduct_variationGroupByPayload<T extends product_variationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Product_variationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Product_variationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Product_variationGroupByOutputType[P]>
            : GetScalarType<T[P], Product_variationGroupByOutputType[P]>
        }
      >
    >


  export type product_variationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    name?: boolean
    stock?: boolean
    buy_price?: boolean
    sell_price?: boolean
    image_link?: boolean
    buy_link?: boolean
    priority_weight?: boolean
    product?: boolean | productDefaultArgs<ExtArgs>
    order_items?: boolean | product_variation$order_itemsArgs<ExtArgs>
    _count?: boolean | Product_variationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product_variation"]>

  export type product_variationSelectScalar = {
    id?: boolean
    product_id?: boolean
    name?: boolean
    stock?: boolean
    buy_price?: boolean
    sell_price?: boolean
    image_link?: boolean
    buy_link?: boolean
    priority_weight?: boolean
  }

  export type product_variationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | productDefaultArgs<ExtArgs>
    order_items?: boolean | product_variation$order_itemsArgs<ExtArgs>
    _count?: boolean | Product_variationCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $product_variationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "product_variation"
    objects: {
      product: Prisma.$productPayload<ExtArgs>
      order_items: Prisma.$order_itemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      product_id: number
      name: string
      stock: number
      buy_price: number
      sell_price: number
      image_link: string | null
      buy_link: string | null
      priority_weight: number | null
    }, ExtArgs["result"]["product_variation"]>
    composites: {}
  }


  type product_variationGetPayload<S extends boolean | null | undefined | product_variationDefaultArgs> = $Result.GetResult<Prisma.$product_variationPayload, S>

  type product_variationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<product_variationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Product_variationCountAggregateInputType | true
    }

  export interface product_variationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['product_variation'], meta: { name: 'product_variation' } }
    /**
     * Find zero or one Product_variation that matches the filter.
     * @param {product_variationFindUniqueArgs} args - Arguments to find a Product_variation
     * @example
     * // Get one Product_variation
     * const product_variation = await prisma.product_variation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends product_variationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, product_variationFindUniqueArgs<ExtArgs>>
    ): Prisma__product_variationClient<$Result.GetResult<Prisma.$product_variationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Product_variation that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {product_variationFindUniqueOrThrowArgs} args - Arguments to find a Product_variation
     * @example
     * // Get one Product_variation
     * const product_variation = await prisma.product_variation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends product_variationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, product_variationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__product_variationClient<$Result.GetResult<Prisma.$product_variationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Product_variation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_variationFindFirstArgs} args - Arguments to find a Product_variation
     * @example
     * // Get one Product_variation
     * const product_variation = await prisma.product_variation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends product_variationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, product_variationFindFirstArgs<ExtArgs>>
    ): Prisma__product_variationClient<$Result.GetResult<Prisma.$product_variationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Product_variation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_variationFindFirstOrThrowArgs} args - Arguments to find a Product_variation
     * @example
     * // Get one Product_variation
     * const product_variation = await prisma.product_variation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends product_variationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, product_variationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__product_variationClient<$Result.GetResult<Prisma.$product_variationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Product_variations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_variationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Product_variations
     * const product_variations = await prisma.product_variation.findMany()
     * 
     * // Get first 10 Product_variations
     * const product_variations = await prisma.product_variation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const product_variationWithIdOnly = await prisma.product_variation.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends product_variationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, product_variationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_variationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Product_variation.
     * @param {product_variationCreateArgs} args - Arguments to create a Product_variation.
     * @example
     * // Create one Product_variation
     * const Product_variation = await prisma.product_variation.create({
     *   data: {
     *     // ... data to create a Product_variation
     *   }
     * })
     * 
    **/
    create<T extends product_variationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, product_variationCreateArgs<ExtArgs>>
    ): Prisma__product_variationClient<$Result.GetResult<Prisma.$product_variationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Product_variations.
     *     @param {product_variationCreateManyArgs} args - Arguments to create many Product_variations.
     *     @example
     *     // Create many Product_variations
     *     const product_variation = await prisma.product_variation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends product_variationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, product_variationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product_variation.
     * @param {product_variationDeleteArgs} args - Arguments to delete one Product_variation.
     * @example
     * // Delete one Product_variation
     * const Product_variation = await prisma.product_variation.delete({
     *   where: {
     *     // ... filter to delete one Product_variation
     *   }
     * })
     * 
    **/
    delete<T extends product_variationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, product_variationDeleteArgs<ExtArgs>>
    ): Prisma__product_variationClient<$Result.GetResult<Prisma.$product_variationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Product_variation.
     * @param {product_variationUpdateArgs} args - Arguments to update one Product_variation.
     * @example
     * // Update one Product_variation
     * const product_variation = await prisma.product_variation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends product_variationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, product_variationUpdateArgs<ExtArgs>>
    ): Prisma__product_variationClient<$Result.GetResult<Prisma.$product_variationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Product_variations.
     * @param {product_variationDeleteManyArgs} args - Arguments to filter Product_variations to delete.
     * @example
     * // Delete a few Product_variations
     * const { count } = await prisma.product_variation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends product_variationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, product_variationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Product_variations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_variationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Product_variations
     * const product_variation = await prisma.product_variation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends product_variationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, product_variationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product_variation.
     * @param {product_variationUpsertArgs} args - Arguments to update or create a Product_variation.
     * @example
     * // Update or create a Product_variation
     * const product_variation = await prisma.product_variation.upsert({
     *   create: {
     *     // ... data to create a Product_variation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product_variation we want to update
     *   }
     * })
    **/
    upsert<T extends product_variationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, product_variationUpsertArgs<ExtArgs>>
    ): Prisma__product_variationClient<$Result.GetResult<Prisma.$product_variationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Product_variations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_variationCountArgs} args - Arguments to filter Product_variations to count.
     * @example
     * // Count the number of Product_variations
     * const count = await prisma.product_variation.count({
     *   where: {
     *     // ... the filter for the Product_variations we want to count
     *   }
     * })
    **/
    count<T extends product_variationCountArgs>(
      args?: Subset<T, product_variationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Product_variationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product_variation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Product_variationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Product_variationAggregateArgs>(args: Subset<T, Product_variationAggregateArgs>): Prisma.PrismaPromise<GetProduct_variationAggregateType<T>>

    /**
     * Group by Product_variation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_variationGroupByArgs} args - Group by arguments.
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
      T extends product_variationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: product_variationGroupByArgs['orderBy'] }
        : { orderBy?: product_variationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, product_variationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduct_variationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the product_variation model
   */
  readonly fields: product_variationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for product_variation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__product_variationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    product<T extends productDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productDefaultArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    order_items<T extends product_variation$order_itemsArgs<ExtArgs> = {}>(args?: Subset<T, product_variation$order_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the product_variation model
   */ 
  interface product_variationFieldRefs {
    readonly id: FieldRef<"product_variation", 'Int'>
    readonly product_id: FieldRef<"product_variation", 'Int'>
    readonly name: FieldRef<"product_variation", 'String'>
    readonly stock: FieldRef<"product_variation", 'Int'>
    readonly buy_price: FieldRef<"product_variation", 'Float'>
    readonly sell_price: FieldRef<"product_variation", 'Float'>
    readonly image_link: FieldRef<"product_variation", 'String'>
    readonly buy_link: FieldRef<"product_variation", 'String'>
    readonly priority_weight: FieldRef<"product_variation", 'Float'>
  }
    

  // Custom InputTypes

  /**
   * product_variation findUnique
   */
  export type product_variationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_variation
     */
    select?: product_variationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: product_variationInclude<ExtArgs> | null
    /**
     * Filter, which product_variation to fetch.
     */
    where: product_variationWhereUniqueInput
  }


  /**
   * product_variation findUniqueOrThrow
   */
  export type product_variationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_variation
     */
    select?: product_variationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: product_variationInclude<ExtArgs> | null
    /**
     * Filter, which product_variation to fetch.
     */
    where: product_variationWhereUniqueInput
  }


  /**
   * product_variation findFirst
   */
  export type product_variationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_variation
     */
    select?: product_variationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: product_variationInclude<ExtArgs> | null
    /**
     * Filter, which product_variation to fetch.
     */
    where?: product_variationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_variations to fetch.
     */
    orderBy?: product_variationOrderByWithRelationInput | product_variationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for product_variations.
     */
    cursor?: product_variationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_variations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_variations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of product_variations.
     */
    distinct?: Product_variationScalarFieldEnum | Product_variationScalarFieldEnum[]
  }


  /**
   * product_variation findFirstOrThrow
   */
  export type product_variationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_variation
     */
    select?: product_variationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: product_variationInclude<ExtArgs> | null
    /**
     * Filter, which product_variation to fetch.
     */
    where?: product_variationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_variations to fetch.
     */
    orderBy?: product_variationOrderByWithRelationInput | product_variationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for product_variations.
     */
    cursor?: product_variationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_variations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_variations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of product_variations.
     */
    distinct?: Product_variationScalarFieldEnum | Product_variationScalarFieldEnum[]
  }


  /**
   * product_variation findMany
   */
  export type product_variationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_variation
     */
    select?: product_variationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: product_variationInclude<ExtArgs> | null
    /**
     * Filter, which product_variations to fetch.
     */
    where?: product_variationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_variations to fetch.
     */
    orderBy?: product_variationOrderByWithRelationInput | product_variationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing product_variations.
     */
    cursor?: product_variationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_variations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_variations.
     */
    skip?: number
    distinct?: Product_variationScalarFieldEnum | Product_variationScalarFieldEnum[]
  }


  /**
   * product_variation create
   */
  export type product_variationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_variation
     */
    select?: product_variationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: product_variationInclude<ExtArgs> | null
    /**
     * The data needed to create a product_variation.
     */
    data: XOR<product_variationCreateInput, product_variationUncheckedCreateInput>
  }


  /**
   * product_variation createMany
   */
  export type product_variationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many product_variations.
     */
    data: product_variationCreateManyInput | product_variationCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * product_variation update
   */
  export type product_variationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_variation
     */
    select?: product_variationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: product_variationInclude<ExtArgs> | null
    /**
     * The data needed to update a product_variation.
     */
    data: XOR<product_variationUpdateInput, product_variationUncheckedUpdateInput>
    /**
     * Choose, which product_variation to update.
     */
    where: product_variationWhereUniqueInput
  }


  /**
   * product_variation updateMany
   */
  export type product_variationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update product_variations.
     */
    data: XOR<product_variationUpdateManyMutationInput, product_variationUncheckedUpdateManyInput>
    /**
     * Filter which product_variations to update
     */
    where?: product_variationWhereInput
  }


  /**
   * product_variation upsert
   */
  export type product_variationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_variation
     */
    select?: product_variationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: product_variationInclude<ExtArgs> | null
    /**
     * The filter to search for the product_variation to update in case it exists.
     */
    where: product_variationWhereUniqueInput
    /**
     * In case the product_variation found by the `where` argument doesn't exist, create a new product_variation with this data.
     */
    create: XOR<product_variationCreateInput, product_variationUncheckedCreateInput>
    /**
     * In case the product_variation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<product_variationUpdateInput, product_variationUncheckedUpdateInput>
  }


  /**
   * product_variation delete
   */
  export type product_variationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_variation
     */
    select?: product_variationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: product_variationInclude<ExtArgs> | null
    /**
     * Filter which product_variation to delete.
     */
    where: product_variationWhereUniqueInput
  }


  /**
   * product_variation deleteMany
   */
  export type product_variationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product_variations to delete
     */
    where?: product_variationWhereInput
  }


  /**
   * product_variation.order_items
   */
  export type product_variation$order_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_itemInclude<ExtArgs> | null
    where?: order_itemWhereInput
    orderBy?: order_itemOrderByWithRelationInput | order_itemOrderByWithRelationInput[]
    cursor?: order_itemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_itemScalarFieldEnum | Order_itemScalarFieldEnum[]
  }


  /**
   * product_variation without action
   */
  export type product_variationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_variation
     */
    select?: product_variationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: product_variationInclude<ExtArgs> | null
  }



  /**
   * Model order_item
   */

  export type AggregateOrder_item = {
    _count: Order_itemCountAggregateOutputType | null
    _avg: Order_itemAvgAggregateOutputType | null
    _sum: Order_itemSumAggregateOutputType | null
    _min: Order_itemMinAggregateOutputType | null
    _max: Order_itemMaxAggregateOutputType | null
  }

  export type Order_itemAvgAggregateOutputType = {
    id: number | null
    order_id: number | null
    product_variation_id: number | null
    quantity: number | null
  }

  export type Order_itemSumAggregateOutputType = {
    id: number | null
    order_id: number | null
    product_variation_id: number | null
    quantity: number | null
  }

  export type Order_itemMinAggregateOutputType = {
    id: number | null
    order_id: number | null
    product_variation_id: number | null
    quantity: number | null
  }

  export type Order_itemMaxAggregateOutputType = {
    id: number | null
    order_id: number | null
    product_variation_id: number | null
    quantity: number | null
  }

  export type Order_itemCountAggregateOutputType = {
    id: number
    order_id: number
    product_variation_id: number
    quantity: number
    _all: number
  }


  export type Order_itemAvgAggregateInputType = {
    id?: true
    order_id?: true
    product_variation_id?: true
    quantity?: true
  }

  export type Order_itemSumAggregateInputType = {
    id?: true
    order_id?: true
    product_variation_id?: true
    quantity?: true
  }

  export type Order_itemMinAggregateInputType = {
    id?: true
    order_id?: true
    product_variation_id?: true
    quantity?: true
  }

  export type Order_itemMaxAggregateInputType = {
    id?: true
    order_id?: true
    product_variation_id?: true
    quantity?: true
  }

  export type Order_itemCountAggregateInputType = {
    id?: true
    order_id?: true
    product_variation_id?: true
    quantity?: true
    _all?: true
  }

  export type Order_itemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_item to aggregate.
     */
    where?: order_itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemOrderByWithRelationInput | order_itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: order_itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned order_items
    **/
    _count?: true | Order_itemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Order_itemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Order_itemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Order_itemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Order_itemMaxAggregateInputType
  }

  export type GetOrder_itemAggregateType<T extends Order_itemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder_item]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder_item[P]>
      : GetScalarType<T[P], AggregateOrder_item[P]>
  }




  export type order_itemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_itemWhereInput
    orderBy?: order_itemOrderByWithAggregationInput | order_itemOrderByWithAggregationInput[]
    by: Order_itemScalarFieldEnum[] | Order_itemScalarFieldEnum
    having?: order_itemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Order_itemCountAggregateInputType | true
    _avg?: Order_itemAvgAggregateInputType
    _sum?: Order_itemSumAggregateInputType
    _min?: Order_itemMinAggregateInputType
    _max?: Order_itemMaxAggregateInputType
  }

  export type Order_itemGroupByOutputType = {
    id: number
    order_id: number
    product_variation_id: number
    quantity: number
    _count: Order_itemCountAggregateOutputType | null
    _avg: Order_itemAvgAggregateOutputType | null
    _sum: Order_itemSumAggregateOutputType | null
    _min: Order_itemMinAggregateOutputType | null
    _max: Order_itemMaxAggregateOutputType | null
  }

  type GetOrder_itemGroupByPayload<T extends order_itemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Order_itemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Order_itemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Order_itemGroupByOutputType[P]>
            : GetScalarType<T[P], Order_itemGroupByOutputType[P]>
        }
      >
    >


  export type order_itemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    product_variation_id?: boolean
    quantity?: boolean
    product_variation?: boolean | product_variationDefaultArgs<ExtArgs>
    order?: boolean | orderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_item"]>

  export type order_itemSelectScalar = {
    id?: boolean
    order_id?: boolean
    product_variation_id?: boolean
    quantity?: boolean
  }

  export type order_itemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product_variation?: boolean | product_variationDefaultArgs<ExtArgs>
    order?: boolean | orderDefaultArgs<ExtArgs>
  }


  export type $order_itemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "order_item"
    objects: {
      product_variation: Prisma.$product_variationPayload<ExtArgs>
      order: Prisma.$orderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      order_id: number
      product_variation_id: number
      quantity: number
    }, ExtArgs["result"]["order_item"]>
    composites: {}
  }


  type order_itemGetPayload<S extends boolean | null | undefined | order_itemDefaultArgs> = $Result.GetResult<Prisma.$order_itemPayload, S>

  type order_itemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<order_itemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Order_itemCountAggregateInputType | true
    }

  export interface order_itemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['order_item'], meta: { name: 'order_item' } }
    /**
     * Find zero or one Order_item that matches the filter.
     * @param {order_itemFindUniqueArgs} args - Arguments to find a Order_item
     * @example
     * // Get one Order_item
     * const order_item = await prisma.order_item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends order_itemFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, order_itemFindUniqueArgs<ExtArgs>>
    ): Prisma__order_itemClient<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Order_item that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {order_itemFindUniqueOrThrowArgs} args - Arguments to find a Order_item
     * @example
     * // Get one Order_item
     * const order_item = await prisma.order_item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends order_itemFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, order_itemFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__order_itemClient<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Order_item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemFindFirstArgs} args - Arguments to find a Order_item
     * @example
     * // Get one Order_item
     * const order_item = await prisma.order_item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends order_itemFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, order_itemFindFirstArgs<ExtArgs>>
    ): Prisma__order_itemClient<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Order_item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemFindFirstOrThrowArgs} args - Arguments to find a Order_item
     * @example
     * // Get one Order_item
     * const order_item = await prisma.order_item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends order_itemFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, order_itemFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__order_itemClient<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Order_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Order_items
     * const order_items = await prisma.order_item.findMany()
     * 
     * // Get first 10 Order_items
     * const order_items = await prisma.order_item.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const order_itemWithIdOnly = await prisma.order_item.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends order_itemFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, order_itemFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Order_item.
     * @param {order_itemCreateArgs} args - Arguments to create a Order_item.
     * @example
     * // Create one Order_item
     * const Order_item = await prisma.order_item.create({
     *   data: {
     *     // ... data to create a Order_item
     *   }
     * })
     * 
    **/
    create<T extends order_itemCreateArgs<ExtArgs>>(
      args: SelectSubset<T, order_itemCreateArgs<ExtArgs>>
    ): Prisma__order_itemClient<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Order_items.
     *     @param {order_itemCreateManyArgs} args - Arguments to create many Order_items.
     *     @example
     *     // Create many Order_items
     *     const order_item = await prisma.order_item.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends order_itemCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, order_itemCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order_item.
     * @param {order_itemDeleteArgs} args - Arguments to delete one Order_item.
     * @example
     * // Delete one Order_item
     * const Order_item = await prisma.order_item.delete({
     *   where: {
     *     // ... filter to delete one Order_item
     *   }
     * })
     * 
    **/
    delete<T extends order_itemDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, order_itemDeleteArgs<ExtArgs>>
    ): Prisma__order_itemClient<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Order_item.
     * @param {order_itemUpdateArgs} args - Arguments to update one Order_item.
     * @example
     * // Update one Order_item
     * const order_item = await prisma.order_item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends order_itemUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, order_itemUpdateArgs<ExtArgs>>
    ): Prisma__order_itemClient<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Order_items.
     * @param {order_itemDeleteManyArgs} args - Arguments to filter Order_items to delete.
     * @example
     * // Delete a few Order_items
     * const { count } = await prisma.order_item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends order_itemDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, order_itemDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Order_items
     * const order_item = await prisma.order_item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends order_itemUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, order_itemUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order_item.
     * @param {order_itemUpsertArgs} args - Arguments to update or create a Order_item.
     * @example
     * // Update or create a Order_item
     * const order_item = await prisma.order_item.upsert({
     *   create: {
     *     // ... data to create a Order_item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order_item we want to update
     *   }
     * })
    **/
    upsert<T extends order_itemUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, order_itemUpsertArgs<ExtArgs>>
    ): Prisma__order_itemClient<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemCountArgs} args - Arguments to filter Order_items to count.
     * @example
     * // Count the number of Order_items
     * const count = await prisma.order_item.count({
     *   where: {
     *     // ... the filter for the Order_items we want to count
     *   }
     * })
    **/
    count<T extends order_itemCountArgs>(
      args?: Subset<T, order_itemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Order_itemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order_item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_itemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Order_itemAggregateArgs>(args: Subset<T, Order_itemAggregateArgs>): Prisma.PrismaPromise<GetOrder_itemAggregateType<T>>

    /**
     * Group by Order_item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemGroupByArgs} args - Group by arguments.
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
      T extends order_itemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: order_itemGroupByArgs['orderBy'] }
        : { orderBy?: order_itemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, order_itemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrder_itemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the order_item model
   */
  readonly fields: order_itemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for order_item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__order_itemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    product_variation<T extends product_variationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, product_variationDefaultArgs<ExtArgs>>): Prisma__product_variationClient<$Result.GetResult<Prisma.$product_variationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    order<T extends orderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, orderDefaultArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the order_item model
   */ 
  interface order_itemFieldRefs {
    readonly id: FieldRef<"order_item", 'Int'>
    readonly order_id: FieldRef<"order_item", 'Int'>
    readonly product_variation_id: FieldRef<"order_item", 'Int'>
    readonly quantity: FieldRef<"order_item", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * order_item findUnique
   */
  export type order_itemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_itemInclude<ExtArgs> | null
    /**
     * Filter, which order_item to fetch.
     */
    where: order_itemWhereUniqueInput
  }


  /**
   * order_item findUniqueOrThrow
   */
  export type order_itemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_itemInclude<ExtArgs> | null
    /**
     * Filter, which order_item to fetch.
     */
    where: order_itemWhereUniqueInput
  }


  /**
   * order_item findFirst
   */
  export type order_itemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_itemInclude<ExtArgs> | null
    /**
     * Filter, which order_item to fetch.
     */
    where?: order_itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemOrderByWithRelationInput | order_itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_items.
     */
    cursor?: order_itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_items.
     */
    distinct?: Order_itemScalarFieldEnum | Order_itemScalarFieldEnum[]
  }


  /**
   * order_item findFirstOrThrow
   */
  export type order_itemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_itemInclude<ExtArgs> | null
    /**
     * Filter, which order_item to fetch.
     */
    where?: order_itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemOrderByWithRelationInput | order_itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_items.
     */
    cursor?: order_itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_items.
     */
    distinct?: Order_itemScalarFieldEnum | Order_itemScalarFieldEnum[]
  }


  /**
   * order_item findMany
   */
  export type order_itemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_itemInclude<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where?: order_itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemOrderByWithRelationInput | order_itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing order_items.
     */
    cursor?: order_itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    distinct?: Order_itemScalarFieldEnum | Order_itemScalarFieldEnum[]
  }


  /**
   * order_item create
   */
  export type order_itemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_itemInclude<ExtArgs> | null
    /**
     * The data needed to create a order_item.
     */
    data: XOR<order_itemCreateInput, order_itemUncheckedCreateInput>
  }


  /**
   * order_item createMany
   */
  export type order_itemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many order_items.
     */
    data: order_itemCreateManyInput | order_itemCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * order_item update
   */
  export type order_itemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_itemInclude<ExtArgs> | null
    /**
     * The data needed to update a order_item.
     */
    data: XOR<order_itemUpdateInput, order_itemUncheckedUpdateInput>
    /**
     * Choose, which order_item to update.
     */
    where: order_itemWhereUniqueInput
  }


  /**
   * order_item updateMany
   */
  export type order_itemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update order_items.
     */
    data: XOR<order_itemUpdateManyMutationInput, order_itemUncheckedUpdateManyInput>
    /**
     * Filter which order_items to update
     */
    where?: order_itemWhereInput
  }


  /**
   * order_item upsert
   */
  export type order_itemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_itemInclude<ExtArgs> | null
    /**
     * The filter to search for the order_item to update in case it exists.
     */
    where: order_itemWhereUniqueInput
    /**
     * In case the order_item found by the `where` argument doesn't exist, create a new order_item with this data.
     */
    create: XOR<order_itemCreateInput, order_itemUncheckedCreateInput>
    /**
     * In case the order_item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<order_itemUpdateInput, order_itemUncheckedUpdateInput>
  }


  /**
   * order_item delete
   */
  export type order_itemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_itemInclude<ExtArgs> | null
    /**
     * Filter which order_item to delete.
     */
    where: order_itemWhereUniqueInput
  }


  /**
   * order_item deleteMany
   */
  export type order_itemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_items to delete
     */
    where?: order_itemWhereInput
  }


  /**
   * order_item without action
   */
  export type order_itemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_itemInclude<ExtArgs> | null
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


  export const OrderScalarFieldEnum: {
    id: 'id',
    date: 'date'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    shopee_id: 'shopee_id',
    targeted_stock: 'targeted_stock'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const Product_imageScalarFieldEnum: {
    id: 'id',
    product_id: 'product_id',
    link: 'link'
  };

  export type Product_imageScalarFieldEnum = (typeof Product_imageScalarFieldEnum)[keyof typeof Product_imageScalarFieldEnum]


  export const Product_variationScalarFieldEnum: {
    id: 'id',
    product_id: 'product_id',
    name: 'name',
    stock: 'stock',
    buy_price: 'buy_price',
    sell_price: 'sell_price',
    image_link: 'image_link',
    buy_link: 'buy_link',
    priority_weight: 'priority_weight'
  };

  export type Product_variationScalarFieldEnum = (typeof Product_variationScalarFieldEnum)[keyof typeof Product_variationScalarFieldEnum]


  export const Order_itemScalarFieldEnum: {
    id: 'id',
    order_id: 'order_id',
    product_variation_id: 'product_variation_id',
    quantity: 'quantity'
  };

  export type Order_itemScalarFieldEnum = (typeof Order_itemScalarFieldEnum)[keyof typeof Order_itemScalarFieldEnum]


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


  export type orderWhereInput = {
    AND?: orderWhereInput | orderWhereInput[]
    OR?: orderWhereInput[]
    NOT?: orderWhereInput | orderWhereInput[]
    id?: IntFilter<"order"> | number
    date?: DateTimeFilter<"order"> | Date | string
    order_items?: Order_itemListRelationFilter
  }

  export type orderOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    order_items?: order_itemOrderByRelationAggregateInput
  }

  export type orderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: orderWhereInput | orderWhereInput[]
    OR?: orderWhereInput[]
    NOT?: orderWhereInput | orderWhereInput[]
    date?: DateTimeFilter<"order"> | Date | string
    order_items?: Order_itemListRelationFilter
  }, "id">

  export type orderOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    _count?: orderCountOrderByAggregateInput
    _avg?: orderAvgOrderByAggregateInput
    _max?: orderMaxOrderByAggregateInput
    _min?: orderMinOrderByAggregateInput
    _sum?: orderSumOrderByAggregateInput
  }

  export type orderScalarWhereWithAggregatesInput = {
    AND?: orderScalarWhereWithAggregatesInput | orderScalarWhereWithAggregatesInput[]
    OR?: orderScalarWhereWithAggregatesInput[]
    NOT?: orderScalarWhereWithAggregatesInput | orderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"order"> | number
    date?: DateTimeWithAggregatesFilter<"order"> | Date | string
  }

  export type productWhereInput = {
    AND?: productWhereInput | productWhereInput[]
    OR?: productWhereInput[]
    NOT?: productWhereInput | productWhereInput[]
    id?: IntFilter<"product"> | number
    name?: StringFilter<"product"> | string
    description?: StringNullableFilter<"product"> | string | null
    shopee_id?: StringNullableFilter<"product"> | string | null
    targeted_stock?: IntFilter<"product"> | number
    product_image?: Product_imageListRelationFilter
    product_variation?: Product_variationListRelationFilter
  }

  export type productOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    shopee_id?: SortOrderInput | SortOrder
    targeted_stock?: SortOrder
    product_image?: product_imageOrderByRelationAggregateInput
    product_variation?: product_variationOrderByRelationAggregateInput
  }

  export type productWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: productWhereInput | productWhereInput[]
    OR?: productWhereInput[]
    NOT?: productWhereInput | productWhereInput[]
    name?: StringFilter<"product"> | string
    description?: StringNullableFilter<"product"> | string | null
    shopee_id?: StringNullableFilter<"product"> | string | null
    targeted_stock?: IntFilter<"product"> | number
    product_image?: Product_imageListRelationFilter
    product_variation?: Product_variationListRelationFilter
  }, "id">

  export type productOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    shopee_id?: SortOrderInput | SortOrder
    targeted_stock?: SortOrder
    _count?: productCountOrderByAggregateInput
    _avg?: productAvgOrderByAggregateInput
    _max?: productMaxOrderByAggregateInput
    _min?: productMinOrderByAggregateInput
    _sum?: productSumOrderByAggregateInput
  }

  export type productScalarWhereWithAggregatesInput = {
    AND?: productScalarWhereWithAggregatesInput | productScalarWhereWithAggregatesInput[]
    OR?: productScalarWhereWithAggregatesInput[]
    NOT?: productScalarWhereWithAggregatesInput | productScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"product"> | number
    name?: StringWithAggregatesFilter<"product"> | string
    description?: StringNullableWithAggregatesFilter<"product"> | string | null
    shopee_id?: StringNullableWithAggregatesFilter<"product"> | string | null
    targeted_stock?: IntWithAggregatesFilter<"product"> | number
  }

  export type product_imageWhereInput = {
    AND?: product_imageWhereInput | product_imageWhereInput[]
    OR?: product_imageWhereInput[]
    NOT?: product_imageWhereInput | product_imageWhereInput[]
    id?: IntFilter<"product_image"> | number
    product_id?: IntFilter<"product_image"> | number
    link?: StringFilter<"product_image"> | string
    product?: XOR<ProductRelationFilter, productWhereInput>
  }

  export type product_imageOrderByWithRelationInput = {
    id?: SortOrder
    product_id?: SortOrder
    link?: SortOrder
    product?: productOrderByWithRelationInput
  }

  export type product_imageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: product_imageWhereInput | product_imageWhereInput[]
    OR?: product_imageWhereInput[]
    NOT?: product_imageWhereInput | product_imageWhereInput[]
    product_id?: IntFilter<"product_image"> | number
    link?: StringFilter<"product_image"> | string
    product?: XOR<ProductRelationFilter, productWhereInput>
  }, "id">

  export type product_imageOrderByWithAggregationInput = {
    id?: SortOrder
    product_id?: SortOrder
    link?: SortOrder
    _count?: product_imageCountOrderByAggregateInput
    _avg?: product_imageAvgOrderByAggregateInput
    _max?: product_imageMaxOrderByAggregateInput
    _min?: product_imageMinOrderByAggregateInput
    _sum?: product_imageSumOrderByAggregateInput
  }

  export type product_imageScalarWhereWithAggregatesInput = {
    AND?: product_imageScalarWhereWithAggregatesInput | product_imageScalarWhereWithAggregatesInput[]
    OR?: product_imageScalarWhereWithAggregatesInput[]
    NOT?: product_imageScalarWhereWithAggregatesInput | product_imageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"product_image"> | number
    product_id?: IntWithAggregatesFilter<"product_image"> | number
    link?: StringWithAggregatesFilter<"product_image"> | string
  }

  export type product_variationWhereInput = {
    AND?: product_variationWhereInput | product_variationWhereInput[]
    OR?: product_variationWhereInput[]
    NOT?: product_variationWhereInput | product_variationWhereInput[]
    id?: IntFilter<"product_variation"> | number
    product_id?: IntFilter<"product_variation"> | number
    name?: StringFilter<"product_variation"> | string
    stock?: IntFilter<"product_variation"> | number
    buy_price?: FloatFilter<"product_variation"> | number
    sell_price?: FloatFilter<"product_variation"> | number
    image_link?: StringNullableFilter<"product_variation"> | string | null
    buy_link?: StringNullableFilter<"product_variation"> | string | null
    priority_weight?: FloatNullableFilter<"product_variation"> | number | null
    product?: XOR<ProductRelationFilter, productWhereInput>
    order_items?: Order_itemListRelationFilter
  }

  export type product_variationOrderByWithRelationInput = {
    id?: SortOrder
    product_id?: SortOrder
    name?: SortOrder
    stock?: SortOrder
    buy_price?: SortOrder
    sell_price?: SortOrder
    image_link?: SortOrderInput | SortOrder
    buy_link?: SortOrderInput | SortOrder
    priority_weight?: SortOrderInput | SortOrder
    product?: productOrderByWithRelationInput
    order_items?: order_itemOrderByRelationAggregateInput
  }

  export type product_variationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: product_variationWhereInput | product_variationWhereInput[]
    OR?: product_variationWhereInput[]
    NOT?: product_variationWhereInput | product_variationWhereInput[]
    product_id?: IntFilter<"product_variation"> | number
    name?: StringFilter<"product_variation"> | string
    stock?: IntFilter<"product_variation"> | number
    buy_price?: FloatFilter<"product_variation"> | number
    sell_price?: FloatFilter<"product_variation"> | number
    image_link?: StringNullableFilter<"product_variation"> | string | null
    buy_link?: StringNullableFilter<"product_variation"> | string | null
    priority_weight?: FloatNullableFilter<"product_variation"> | number | null
    product?: XOR<ProductRelationFilter, productWhereInput>
    order_items?: Order_itemListRelationFilter
  }, "id">

  export type product_variationOrderByWithAggregationInput = {
    id?: SortOrder
    product_id?: SortOrder
    name?: SortOrder
    stock?: SortOrder
    buy_price?: SortOrder
    sell_price?: SortOrder
    image_link?: SortOrderInput | SortOrder
    buy_link?: SortOrderInput | SortOrder
    priority_weight?: SortOrderInput | SortOrder
    _count?: product_variationCountOrderByAggregateInput
    _avg?: product_variationAvgOrderByAggregateInput
    _max?: product_variationMaxOrderByAggregateInput
    _min?: product_variationMinOrderByAggregateInput
    _sum?: product_variationSumOrderByAggregateInput
  }

  export type product_variationScalarWhereWithAggregatesInput = {
    AND?: product_variationScalarWhereWithAggregatesInput | product_variationScalarWhereWithAggregatesInput[]
    OR?: product_variationScalarWhereWithAggregatesInput[]
    NOT?: product_variationScalarWhereWithAggregatesInput | product_variationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"product_variation"> | number
    product_id?: IntWithAggregatesFilter<"product_variation"> | number
    name?: StringWithAggregatesFilter<"product_variation"> | string
    stock?: IntWithAggregatesFilter<"product_variation"> | number
    buy_price?: FloatWithAggregatesFilter<"product_variation"> | number
    sell_price?: FloatWithAggregatesFilter<"product_variation"> | number
    image_link?: StringNullableWithAggregatesFilter<"product_variation"> | string | null
    buy_link?: StringNullableWithAggregatesFilter<"product_variation"> | string | null
    priority_weight?: FloatNullableWithAggregatesFilter<"product_variation"> | number | null
  }

  export type order_itemWhereInput = {
    AND?: order_itemWhereInput | order_itemWhereInput[]
    OR?: order_itemWhereInput[]
    NOT?: order_itemWhereInput | order_itemWhereInput[]
    id?: IntFilter<"order_item"> | number
    order_id?: IntFilter<"order_item"> | number
    product_variation_id?: IntFilter<"order_item"> | number
    quantity?: IntFilter<"order_item"> | number
    product_variation?: XOR<Product_variationRelationFilter, product_variationWhereInput>
    order?: XOR<OrderRelationFilter, orderWhereInput>
  }

  export type order_itemOrderByWithRelationInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_variation_id?: SortOrder
    quantity?: SortOrder
    product_variation?: product_variationOrderByWithRelationInput
    order?: orderOrderByWithRelationInput
  }

  export type order_itemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: order_itemWhereInput | order_itemWhereInput[]
    OR?: order_itemWhereInput[]
    NOT?: order_itemWhereInput | order_itemWhereInput[]
    order_id?: IntFilter<"order_item"> | number
    product_variation_id?: IntFilter<"order_item"> | number
    quantity?: IntFilter<"order_item"> | number
    product_variation?: XOR<Product_variationRelationFilter, product_variationWhereInput>
    order?: XOR<OrderRelationFilter, orderWhereInput>
  }, "id">

  export type order_itemOrderByWithAggregationInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_variation_id?: SortOrder
    quantity?: SortOrder
    _count?: order_itemCountOrderByAggregateInput
    _avg?: order_itemAvgOrderByAggregateInput
    _max?: order_itemMaxOrderByAggregateInput
    _min?: order_itemMinOrderByAggregateInput
    _sum?: order_itemSumOrderByAggregateInput
  }

  export type order_itemScalarWhereWithAggregatesInput = {
    AND?: order_itemScalarWhereWithAggregatesInput | order_itemScalarWhereWithAggregatesInput[]
    OR?: order_itemScalarWhereWithAggregatesInput[]
    NOT?: order_itemScalarWhereWithAggregatesInput | order_itemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"order_item"> | number
    order_id?: IntWithAggregatesFilter<"order_item"> | number
    product_variation_id?: IntWithAggregatesFilter<"order_item"> | number
    quantity?: IntWithAggregatesFilter<"order_item"> | number
  }

  export type orderCreateInput = {
    date?: Date | string
    order_items?: order_itemCreateNestedManyWithoutOrderInput
  }

  export type orderUncheckedCreateInput = {
    id?: number
    date?: Date | string
    order_items?: order_itemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type orderUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    order_items?: order_itemUpdateManyWithoutOrderNestedInput
  }

  export type orderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    order_items?: order_itemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type orderCreateManyInput = {
    id?: number
    date?: Date | string
  }

  export type orderUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type orderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productCreateInput = {
    name: string
    description?: string | null
    shopee_id?: string | null
    targeted_stock: number
    product_image?: product_imageCreateNestedManyWithoutProductInput
    product_variation?: product_variationCreateNestedManyWithoutProductInput
  }

  export type productUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    shopee_id?: string | null
    targeted_stock: number
    product_image?: product_imageUncheckedCreateNestedManyWithoutProductInput
    product_variation?: product_variationUncheckedCreateNestedManyWithoutProductInput
  }

  export type productUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shopee_id?: NullableStringFieldUpdateOperationsInput | string | null
    targeted_stock?: IntFieldUpdateOperationsInput | number
    product_image?: product_imageUpdateManyWithoutProductNestedInput
    product_variation?: product_variationUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shopee_id?: NullableStringFieldUpdateOperationsInput | string | null
    targeted_stock?: IntFieldUpdateOperationsInput | number
    product_image?: product_imageUncheckedUpdateManyWithoutProductNestedInput
    product_variation?: product_variationUncheckedUpdateManyWithoutProductNestedInput
  }

  export type productCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    shopee_id?: string | null
    targeted_stock: number
  }

  export type productUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shopee_id?: NullableStringFieldUpdateOperationsInput | string | null
    targeted_stock?: IntFieldUpdateOperationsInput | number
  }

  export type productUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shopee_id?: NullableStringFieldUpdateOperationsInput | string | null
    targeted_stock?: IntFieldUpdateOperationsInput | number
  }

  export type product_imageCreateInput = {
    link: string
    product: productCreateNestedOneWithoutProduct_imageInput
  }

  export type product_imageUncheckedCreateInput = {
    id?: number
    product_id: number
    link: string
  }

  export type product_imageUpdateInput = {
    link?: StringFieldUpdateOperationsInput | string
    product?: productUpdateOneRequiredWithoutProduct_imageNestedInput
  }

  export type product_imageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    link?: StringFieldUpdateOperationsInput | string
  }

  export type product_imageCreateManyInput = {
    id?: number
    product_id: number
    link: string
  }

  export type product_imageUpdateManyMutationInput = {
    link?: StringFieldUpdateOperationsInput | string
  }

  export type product_imageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    link?: StringFieldUpdateOperationsInput | string
  }

  export type product_variationCreateInput = {
    name: string
    stock: number
    buy_price: number
    sell_price: number
    image_link?: string | null
    buy_link?: string | null
    priority_weight?: number | null
    product: productCreateNestedOneWithoutProduct_variationInput
    order_items?: order_itemCreateNestedManyWithoutProduct_variationInput
  }

  export type product_variationUncheckedCreateInput = {
    id?: number
    product_id: number
    name: string
    stock: number
    buy_price: number
    sell_price: number
    image_link?: string | null
    buy_link?: string | null
    priority_weight?: number | null
    order_items?: order_itemUncheckedCreateNestedManyWithoutProduct_variationInput
  }

  export type product_variationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    buy_price?: FloatFieldUpdateOperationsInput | number
    sell_price?: FloatFieldUpdateOperationsInput | number
    image_link?: NullableStringFieldUpdateOperationsInput | string | null
    buy_link?: NullableStringFieldUpdateOperationsInput | string | null
    priority_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    product?: productUpdateOneRequiredWithoutProduct_variationNestedInput
    order_items?: order_itemUpdateManyWithoutProduct_variationNestedInput
  }

  export type product_variationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    buy_price?: FloatFieldUpdateOperationsInput | number
    sell_price?: FloatFieldUpdateOperationsInput | number
    image_link?: NullableStringFieldUpdateOperationsInput | string | null
    buy_link?: NullableStringFieldUpdateOperationsInput | string | null
    priority_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    order_items?: order_itemUncheckedUpdateManyWithoutProduct_variationNestedInput
  }

  export type product_variationCreateManyInput = {
    id?: number
    product_id: number
    name: string
    stock: number
    buy_price: number
    sell_price: number
    image_link?: string | null
    buy_link?: string | null
    priority_weight?: number | null
  }

  export type product_variationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    buy_price?: FloatFieldUpdateOperationsInput | number
    sell_price?: FloatFieldUpdateOperationsInput | number
    image_link?: NullableStringFieldUpdateOperationsInput | string | null
    buy_link?: NullableStringFieldUpdateOperationsInput | string | null
    priority_weight?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type product_variationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    buy_price?: FloatFieldUpdateOperationsInput | number
    sell_price?: FloatFieldUpdateOperationsInput | number
    image_link?: NullableStringFieldUpdateOperationsInput | string | null
    buy_link?: NullableStringFieldUpdateOperationsInput | string | null
    priority_weight?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type order_itemCreateInput = {
    quantity: number
    product_variation: product_variationCreateNestedOneWithoutOrder_itemsInput
    order: orderCreateNestedOneWithoutOrder_itemsInput
  }

  export type order_itemUncheckedCreateInput = {
    id?: number
    order_id: number
    product_variation_id: number
    quantity: number
  }

  export type order_itemUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    product_variation?: product_variationUpdateOneRequiredWithoutOrder_itemsNestedInput
    order?: orderUpdateOneRequiredWithoutOrder_itemsNestedInput
  }

  export type order_itemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    product_variation_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type order_itemCreateManyInput = {
    id?: number
    order_id: number
    product_variation_id: number
    quantity: number
  }

  export type order_itemUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type order_itemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    product_variation_id?: IntFieldUpdateOperationsInput | number
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

  export type Order_itemListRelationFilter = {
    every?: order_itemWhereInput
    some?: order_itemWhereInput
    none?: order_itemWhereInput
  }

  export type order_itemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type orderCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
  }

  export type orderAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type orderMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
  }

  export type orderMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
  }

  export type orderSumOrderByAggregateInput = {
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

  export type Product_imageListRelationFilter = {
    every?: product_imageWhereInput
    some?: product_imageWhereInput
    none?: product_imageWhereInput
  }

  export type Product_variationListRelationFilter = {
    every?: product_variationWhereInput
    some?: product_variationWhereInput
    none?: product_variationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type product_imageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type product_variationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    shopee_id?: SortOrder
    targeted_stock?: SortOrder
  }

  export type productAvgOrderByAggregateInput = {
    id?: SortOrder
    targeted_stock?: SortOrder
  }

  export type productMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    shopee_id?: SortOrder
    targeted_stock?: SortOrder
  }

  export type productMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    shopee_id?: SortOrder
    targeted_stock?: SortOrder
  }

  export type productSumOrderByAggregateInput = {
    id?: SortOrder
    targeted_stock?: SortOrder
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

  export type ProductRelationFilter = {
    is?: productWhereInput
    isNot?: productWhereInput
  }

  export type product_imageCountOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    link?: SortOrder
  }

  export type product_imageAvgOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
  }

  export type product_imageMaxOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    link?: SortOrder
  }

  export type product_imageMinOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    link?: SortOrder
  }

  export type product_imageSumOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
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

  export type product_variationCountOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    name?: SortOrder
    stock?: SortOrder
    buy_price?: SortOrder
    sell_price?: SortOrder
    image_link?: SortOrder
    buy_link?: SortOrder
    priority_weight?: SortOrder
  }

  export type product_variationAvgOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    stock?: SortOrder
    buy_price?: SortOrder
    sell_price?: SortOrder
    priority_weight?: SortOrder
  }

  export type product_variationMaxOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    name?: SortOrder
    stock?: SortOrder
    buy_price?: SortOrder
    sell_price?: SortOrder
    image_link?: SortOrder
    buy_link?: SortOrder
    priority_weight?: SortOrder
  }

  export type product_variationMinOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    name?: SortOrder
    stock?: SortOrder
    buy_price?: SortOrder
    sell_price?: SortOrder
    image_link?: SortOrder
    buy_link?: SortOrder
    priority_weight?: SortOrder
  }

  export type product_variationSumOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    stock?: SortOrder
    buy_price?: SortOrder
    sell_price?: SortOrder
    priority_weight?: SortOrder
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

  export type Product_variationRelationFilter = {
    is?: product_variationWhereInput
    isNot?: product_variationWhereInput
  }

  export type OrderRelationFilter = {
    is?: orderWhereInput
    isNot?: orderWhereInput
  }

  export type order_itemCountOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_variation_id?: SortOrder
    quantity?: SortOrder
  }

  export type order_itemAvgOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_variation_id?: SortOrder
    quantity?: SortOrder
  }

  export type order_itemMaxOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_variation_id?: SortOrder
    quantity?: SortOrder
  }

  export type order_itemMinOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_variation_id?: SortOrder
    quantity?: SortOrder
  }

  export type order_itemSumOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_variation_id?: SortOrder
    quantity?: SortOrder
  }

  export type order_itemCreateNestedManyWithoutOrderInput = {
    create?: XOR<order_itemCreateWithoutOrderInput, order_itemUncheckedCreateWithoutOrderInput> | order_itemCreateWithoutOrderInput[] | order_itemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: order_itemCreateOrConnectWithoutOrderInput | order_itemCreateOrConnectWithoutOrderInput[]
    createMany?: order_itemCreateManyOrderInputEnvelope
    connect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
  }

  export type order_itemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<order_itemCreateWithoutOrderInput, order_itemUncheckedCreateWithoutOrderInput> | order_itemCreateWithoutOrderInput[] | order_itemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: order_itemCreateOrConnectWithoutOrderInput | order_itemCreateOrConnectWithoutOrderInput[]
    createMany?: order_itemCreateManyOrderInputEnvelope
    connect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type order_itemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<order_itemCreateWithoutOrderInput, order_itemUncheckedCreateWithoutOrderInput> | order_itemCreateWithoutOrderInput[] | order_itemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: order_itemCreateOrConnectWithoutOrderInput | order_itemCreateOrConnectWithoutOrderInput[]
    upsert?: order_itemUpsertWithWhereUniqueWithoutOrderInput | order_itemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: order_itemCreateManyOrderInputEnvelope
    set?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    disconnect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    delete?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    connect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    update?: order_itemUpdateWithWhereUniqueWithoutOrderInput | order_itemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: order_itemUpdateManyWithWhereWithoutOrderInput | order_itemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: order_itemScalarWhereInput | order_itemScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type order_itemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<order_itemCreateWithoutOrderInput, order_itemUncheckedCreateWithoutOrderInput> | order_itemCreateWithoutOrderInput[] | order_itemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: order_itemCreateOrConnectWithoutOrderInput | order_itemCreateOrConnectWithoutOrderInput[]
    upsert?: order_itemUpsertWithWhereUniqueWithoutOrderInput | order_itemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: order_itemCreateManyOrderInputEnvelope
    set?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    disconnect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    delete?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    connect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    update?: order_itemUpdateWithWhereUniqueWithoutOrderInput | order_itemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: order_itemUpdateManyWithWhereWithoutOrderInput | order_itemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: order_itemScalarWhereInput | order_itemScalarWhereInput[]
  }

  export type product_imageCreateNestedManyWithoutProductInput = {
    create?: XOR<product_imageCreateWithoutProductInput, product_imageUncheckedCreateWithoutProductInput> | product_imageCreateWithoutProductInput[] | product_imageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: product_imageCreateOrConnectWithoutProductInput | product_imageCreateOrConnectWithoutProductInput[]
    createMany?: product_imageCreateManyProductInputEnvelope
    connect?: product_imageWhereUniqueInput | product_imageWhereUniqueInput[]
  }

  export type product_variationCreateNestedManyWithoutProductInput = {
    create?: XOR<product_variationCreateWithoutProductInput, product_variationUncheckedCreateWithoutProductInput> | product_variationCreateWithoutProductInput[] | product_variationUncheckedCreateWithoutProductInput[]
    connectOrCreate?: product_variationCreateOrConnectWithoutProductInput | product_variationCreateOrConnectWithoutProductInput[]
    createMany?: product_variationCreateManyProductInputEnvelope
    connect?: product_variationWhereUniqueInput | product_variationWhereUniqueInput[]
  }

  export type product_imageUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<product_imageCreateWithoutProductInput, product_imageUncheckedCreateWithoutProductInput> | product_imageCreateWithoutProductInput[] | product_imageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: product_imageCreateOrConnectWithoutProductInput | product_imageCreateOrConnectWithoutProductInput[]
    createMany?: product_imageCreateManyProductInputEnvelope
    connect?: product_imageWhereUniqueInput | product_imageWhereUniqueInput[]
  }

  export type product_variationUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<product_variationCreateWithoutProductInput, product_variationUncheckedCreateWithoutProductInput> | product_variationCreateWithoutProductInput[] | product_variationUncheckedCreateWithoutProductInput[]
    connectOrCreate?: product_variationCreateOrConnectWithoutProductInput | product_variationCreateOrConnectWithoutProductInput[]
    createMany?: product_variationCreateManyProductInputEnvelope
    connect?: product_variationWhereUniqueInput | product_variationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type product_imageUpdateManyWithoutProductNestedInput = {
    create?: XOR<product_imageCreateWithoutProductInput, product_imageUncheckedCreateWithoutProductInput> | product_imageCreateWithoutProductInput[] | product_imageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: product_imageCreateOrConnectWithoutProductInput | product_imageCreateOrConnectWithoutProductInput[]
    upsert?: product_imageUpsertWithWhereUniqueWithoutProductInput | product_imageUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: product_imageCreateManyProductInputEnvelope
    set?: product_imageWhereUniqueInput | product_imageWhereUniqueInput[]
    disconnect?: product_imageWhereUniqueInput | product_imageWhereUniqueInput[]
    delete?: product_imageWhereUniqueInput | product_imageWhereUniqueInput[]
    connect?: product_imageWhereUniqueInput | product_imageWhereUniqueInput[]
    update?: product_imageUpdateWithWhereUniqueWithoutProductInput | product_imageUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: product_imageUpdateManyWithWhereWithoutProductInput | product_imageUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: product_imageScalarWhereInput | product_imageScalarWhereInput[]
  }

  export type product_variationUpdateManyWithoutProductNestedInput = {
    create?: XOR<product_variationCreateWithoutProductInput, product_variationUncheckedCreateWithoutProductInput> | product_variationCreateWithoutProductInput[] | product_variationUncheckedCreateWithoutProductInput[]
    connectOrCreate?: product_variationCreateOrConnectWithoutProductInput | product_variationCreateOrConnectWithoutProductInput[]
    upsert?: product_variationUpsertWithWhereUniqueWithoutProductInput | product_variationUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: product_variationCreateManyProductInputEnvelope
    set?: product_variationWhereUniqueInput | product_variationWhereUniqueInput[]
    disconnect?: product_variationWhereUniqueInput | product_variationWhereUniqueInput[]
    delete?: product_variationWhereUniqueInput | product_variationWhereUniqueInput[]
    connect?: product_variationWhereUniqueInput | product_variationWhereUniqueInput[]
    update?: product_variationUpdateWithWhereUniqueWithoutProductInput | product_variationUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: product_variationUpdateManyWithWhereWithoutProductInput | product_variationUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: product_variationScalarWhereInput | product_variationScalarWhereInput[]
  }

  export type product_imageUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<product_imageCreateWithoutProductInput, product_imageUncheckedCreateWithoutProductInput> | product_imageCreateWithoutProductInput[] | product_imageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: product_imageCreateOrConnectWithoutProductInput | product_imageCreateOrConnectWithoutProductInput[]
    upsert?: product_imageUpsertWithWhereUniqueWithoutProductInput | product_imageUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: product_imageCreateManyProductInputEnvelope
    set?: product_imageWhereUniqueInput | product_imageWhereUniqueInput[]
    disconnect?: product_imageWhereUniqueInput | product_imageWhereUniqueInput[]
    delete?: product_imageWhereUniqueInput | product_imageWhereUniqueInput[]
    connect?: product_imageWhereUniqueInput | product_imageWhereUniqueInput[]
    update?: product_imageUpdateWithWhereUniqueWithoutProductInput | product_imageUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: product_imageUpdateManyWithWhereWithoutProductInput | product_imageUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: product_imageScalarWhereInput | product_imageScalarWhereInput[]
  }

  export type product_variationUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<product_variationCreateWithoutProductInput, product_variationUncheckedCreateWithoutProductInput> | product_variationCreateWithoutProductInput[] | product_variationUncheckedCreateWithoutProductInput[]
    connectOrCreate?: product_variationCreateOrConnectWithoutProductInput | product_variationCreateOrConnectWithoutProductInput[]
    upsert?: product_variationUpsertWithWhereUniqueWithoutProductInput | product_variationUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: product_variationCreateManyProductInputEnvelope
    set?: product_variationWhereUniqueInput | product_variationWhereUniqueInput[]
    disconnect?: product_variationWhereUniqueInput | product_variationWhereUniqueInput[]
    delete?: product_variationWhereUniqueInput | product_variationWhereUniqueInput[]
    connect?: product_variationWhereUniqueInput | product_variationWhereUniqueInput[]
    update?: product_variationUpdateWithWhereUniqueWithoutProductInput | product_variationUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: product_variationUpdateManyWithWhereWithoutProductInput | product_variationUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: product_variationScalarWhereInput | product_variationScalarWhereInput[]
  }

  export type productCreateNestedOneWithoutProduct_imageInput = {
    create?: XOR<productCreateWithoutProduct_imageInput, productUncheckedCreateWithoutProduct_imageInput>
    connectOrCreate?: productCreateOrConnectWithoutProduct_imageInput
    connect?: productWhereUniqueInput
  }

  export type productUpdateOneRequiredWithoutProduct_imageNestedInput = {
    create?: XOR<productCreateWithoutProduct_imageInput, productUncheckedCreateWithoutProduct_imageInput>
    connectOrCreate?: productCreateOrConnectWithoutProduct_imageInput
    upsert?: productUpsertWithoutProduct_imageInput
    connect?: productWhereUniqueInput
    update?: XOR<XOR<productUpdateToOneWithWhereWithoutProduct_imageInput, productUpdateWithoutProduct_imageInput>, productUncheckedUpdateWithoutProduct_imageInput>
  }

  export type productCreateNestedOneWithoutProduct_variationInput = {
    create?: XOR<productCreateWithoutProduct_variationInput, productUncheckedCreateWithoutProduct_variationInput>
    connectOrCreate?: productCreateOrConnectWithoutProduct_variationInput
    connect?: productWhereUniqueInput
  }

  export type order_itemCreateNestedManyWithoutProduct_variationInput = {
    create?: XOR<order_itemCreateWithoutProduct_variationInput, order_itemUncheckedCreateWithoutProduct_variationInput> | order_itemCreateWithoutProduct_variationInput[] | order_itemUncheckedCreateWithoutProduct_variationInput[]
    connectOrCreate?: order_itemCreateOrConnectWithoutProduct_variationInput | order_itemCreateOrConnectWithoutProduct_variationInput[]
    createMany?: order_itemCreateManyProduct_variationInputEnvelope
    connect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
  }

  export type order_itemUncheckedCreateNestedManyWithoutProduct_variationInput = {
    create?: XOR<order_itemCreateWithoutProduct_variationInput, order_itemUncheckedCreateWithoutProduct_variationInput> | order_itemCreateWithoutProduct_variationInput[] | order_itemUncheckedCreateWithoutProduct_variationInput[]
    connectOrCreate?: order_itemCreateOrConnectWithoutProduct_variationInput | order_itemCreateOrConnectWithoutProduct_variationInput[]
    createMany?: order_itemCreateManyProduct_variationInputEnvelope
    connect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
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

  export type productUpdateOneRequiredWithoutProduct_variationNestedInput = {
    create?: XOR<productCreateWithoutProduct_variationInput, productUncheckedCreateWithoutProduct_variationInput>
    connectOrCreate?: productCreateOrConnectWithoutProduct_variationInput
    upsert?: productUpsertWithoutProduct_variationInput
    connect?: productWhereUniqueInput
    update?: XOR<XOR<productUpdateToOneWithWhereWithoutProduct_variationInput, productUpdateWithoutProduct_variationInput>, productUncheckedUpdateWithoutProduct_variationInput>
  }

  export type order_itemUpdateManyWithoutProduct_variationNestedInput = {
    create?: XOR<order_itemCreateWithoutProduct_variationInput, order_itemUncheckedCreateWithoutProduct_variationInput> | order_itemCreateWithoutProduct_variationInput[] | order_itemUncheckedCreateWithoutProduct_variationInput[]
    connectOrCreate?: order_itemCreateOrConnectWithoutProduct_variationInput | order_itemCreateOrConnectWithoutProduct_variationInput[]
    upsert?: order_itemUpsertWithWhereUniqueWithoutProduct_variationInput | order_itemUpsertWithWhereUniqueWithoutProduct_variationInput[]
    createMany?: order_itemCreateManyProduct_variationInputEnvelope
    set?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    disconnect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    delete?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    connect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    update?: order_itemUpdateWithWhereUniqueWithoutProduct_variationInput | order_itemUpdateWithWhereUniqueWithoutProduct_variationInput[]
    updateMany?: order_itemUpdateManyWithWhereWithoutProduct_variationInput | order_itemUpdateManyWithWhereWithoutProduct_variationInput[]
    deleteMany?: order_itemScalarWhereInput | order_itemScalarWhereInput[]
  }

  export type order_itemUncheckedUpdateManyWithoutProduct_variationNestedInput = {
    create?: XOR<order_itemCreateWithoutProduct_variationInput, order_itemUncheckedCreateWithoutProduct_variationInput> | order_itemCreateWithoutProduct_variationInput[] | order_itemUncheckedCreateWithoutProduct_variationInput[]
    connectOrCreate?: order_itemCreateOrConnectWithoutProduct_variationInput | order_itemCreateOrConnectWithoutProduct_variationInput[]
    upsert?: order_itemUpsertWithWhereUniqueWithoutProduct_variationInput | order_itemUpsertWithWhereUniqueWithoutProduct_variationInput[]
    createMany?: order_itemCreateManyProduct_variationInputEnvelope
    set?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    disconnect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    delete?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    connect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    update?: order_itemUpdateWithWhereUniqueWithoutProduct_variationInput | order_itemUpdateWithWhereUniqueWithoutProduct_variationInput[]
    updateMany?: order_itemUpdateManyWithWhereWithoutProduct_variationInput | order_itemUpdateManyWithWhereWithoutProduct_variationInput[]
    deleteMany?: order_itemScalarWhereInput | order_itemScalarWhereInput[]
  }

  export type product_variationCreateNestedOneWithoutOrder_itemsInput = {
    create?: XOR<product_variationCreateWithoutOrder_itemsInput, product_variationUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: product_variationCreateOrConnectWithoutOrder_itemsInput
    connect?: product_variationWhereUniqueInput
  }

  export type orderCreateNestedOneWithoutOrder_itemsInput = {
    create?: XOR<orderCreateWithoutOrder_itemsInput, orderUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: orderCreateOrConnectWithoutOrder_itemsInput
    connect?: orderWhereUniqueInput
  }

  export type product_variationUpdateOneRequiredWithoutOrder_itemsNestedInput = {
    create?: XOR<product_variationCreateWithoutOrder_itemsInput, product_variationUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: product_variationCreateOrConnectWithoutOrder_itemsInput
    upsert?: product_variationUpsertWithoutOrder_itemsInput
    connect?: product_variationWhereUniqueInput
    update?: XOR<XOR<product_variationUpdateToOneWithWhereWithoutOrder_itemsInput, product_variationUpdateWithoutOrder_itemsInput>, product_variationUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type orderUpdateOneRequiredWithoutOrder_itemsNestedInput = {
    create?: XOR<orderCreateWithoutOrder_itemsInput, orderUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: orderCreateOrConnectWithoutOrder_itemsInput
    upsert?: orderUpsertWithoutOrder_itemsInput
    connect?: orderWhereUniqueInput
    update?: XOR<XOR<orderUpdateToOneWithWhereWithoutOrder_itemsInput, orderUpdateWithoutOrder_itemsInput>, orderUncheckedUpdateWithoutOrder_itemsInput>
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

  export type order_itemCreateWithoutOrderInput = {
    quantity: number
    product_variation: product_variationCreateNestedOneWithoutOrder_itemsInput
  }

  export type order_itemUncheckedCreateWithoutOrderInput = {
    id?: number
    product_variation_id: number
    quantity: number
  }

  export type order_itemCreateOrConnectWithoutOrderInput = {
    where: order_itemWhereUniqueInput
    create: XOR<order_itemCreateWithoutOrderInput, order_itemUncheckedCreateWithoutOrderInput>
  }

  export type order_itemCreateManyOrderInputEnvelope = {
    data: order_itemCreateManyOrderInput | order_itemCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type order_itemUpsertWithWhereUniqueWithoutOrderInput = {
    where: order_itemWhereUniqueInput
    update: XOR<order_itemUpdateWithoutOrderInput, order_itemUncheckedUpdateWithoutOrderInput>
    create: XOR<order_itemCreateWithoutOrderInput, order_itemUncheckedCreateWithoutOrderInput>
  }

  export type order_itemUpdateWithWhereUniqueWithoutOrderInput = {
    where: order_itemWhereUniqueInput
    data: XOR<order_itemUpdateWithoutOrderInput, order_itemUncheckedUpdateWithoutOrderInput>
  }

  export type order_itemUpdateManyWithWhereWithoutOrderInput = {
    where: order_itemScalarWhereInput
    data: XOR<order_itemUpdateManyMutationInput, order_itemUncheckedUpdateManyWithoutOrderInput>
  }

  export type order_itemScalarWhereInput = {
    AND?: order_itemScalarWhereInput | order_itemScalarWhereInput[]
    OR?: order_itemScalarWhereInput[]
    NOT?: order_itemScalarWhereInput | order_itemScalarWhereInput[]
    id?: IntFilter<"order_item"> | number
    order_id?: IntFilter<"order_item"> | number
    product_variation_id?: IntFilter<"order_item"> | number
    quantity?: IntFilter<"order_item"> | number
  }

  export type product_imageCreateWithoutProductInput = {
    link: string
  }

  export type product_imageUncheckedCreateWithoutProductInput = {
    id?: number
    link: string
  }

  export type product_imageCreateOrConnectWithoutProductInput = {
    where: product_imageWhereUniqueInput
    create: XOR<product_imageCreateWithoutProductInput, product_imageUncheckedCreateWithoutProductInput>
  }

  export type product_imageCreateManyProductInputEnvelope = {
    data: product_imageCreateManyProductInput | product_imageCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type product_variationCreateWithoutProductInput = {
    name: string
    stock: number
    buy_price: number
    sell_price: number
    image_link?: string | null
    buy_link?: string | null
    priority_weight?: number | null
    order_items?: order_itemCreateNestedManyWithoutProduct_variationInput
  }

  export type product_variationUncheckedCreateWithoutProductInput = {
    id?: number
    name: string
    stock: number
    buy_price: number
    sell_price: number
    image_link?: string | null
    buy_link?: string | null
    priority_weight?: number | null
    order_items?: order_itemUncheckedCreateNestedManyWithoutProduct_variationInput
  }

  export type product_variationCreateOrConnectWithoutProductInput = {
    where: product_variationWhereUniqueInput
    create: XOR<product_variationCreateWithoutProductInput, product_variationUncheckedCreateWithoutProductInput>
  }

  export type product_variationCreateManyProductInputEnvelope = {
    data: product_variationCreateManyProductInput | product_variationCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type product_imageUpsertWithWhereUniqueWithoutProductInput = {
    where: product_imageWhereUniqueInput
    update: XOR<product_imageUpdateWithoutProductInput, product_imageUncheckedUpdateWithoutProductInput>
    create: XOR<product_imageCreateWithoutProductInput, product_imageUncheckedCreateWithoutProductInput>
  }

  export type product_imageUpdateWithWhereUniqueWithoutProductInput = {
    where: product_imageWhereUniqueInput
    data: XOR<product_imageUpdateWithoutProductInput, product_imageUncheckedUpdateWithoutProductInput>
  }

  export type product_imageUpdateManyWithWhereWithoutProductInput = {
    where: product_imageScalarWhereInput
    data: XOR<product_imageUpdateManyMutationInput, product_imageUncheckedUpdateManyWithoutProductInput>
  }

  export type product_imageScalarWhereInput = {
    AND?: product_imageScalarWhereInput | product_imageScalarWhereInput[]
    OR?: product_imageScalarWhereInput[]
    NOT?: product_imageScalarWhereInput | product_imageScalarWhereInput[]
    id?: IntFilter<"product_image"> | number
    product_id?: IntFilter<"product_image"> | number
    link?: StringFilter<"product_image"> | string
  }

  export type product_variationUpsertWithWhereUniqueWithoutProductInput = {
    where: product_variationWhereUniqueInput
    update: XOR<product_variationUpdateWithoutProductInput, product_variationUncheckedUpdateWithoutProductInput>
    create: XOR<product_variationCreateWithoutProductInput, product_variationUncheckedCreateWithoutProductInput>
  }

  export type product_variationUpdateWithWhereUniqueWithoutProductInput = {
    where: product_variationWhereUniqueInput
    data: XOR<product_variationUpdateWithoutProductInput, product_variationUncheckedUpdateWithoutProductInput>
  }

  export type product_variationUpdateManyWithWhereWithoutProductInput = {
    where: product_variationScalarWhereInput
    data: XOR<product_variationUpdateManyMutationInput, product_variationUncheckedUpdateManyWithoutProductInput>
  }

  export type product_variationScalarWhereInput = {
    AND?: product_variationScalarWhereInput | product_variationScalarWhereInput[]
    OR?: product_variationScalarWhereInput[]
    NOT?: product_variationScalarWhereInput | product_variationScalarWhereInput[]
    id?: IntFilter<"product_variation"> | number
    product_id?: IntFilter<"product_variation"> | number
    name?: StringFilter<"product_variation"> | string
    stock?: IntFilter<"product_variation"> | number
    buy_price?: FloatFilter<"product_variation"> | number
    sell_price?: FloatFilter<"product_variation"> | number
    image_link?: StringNullableFilter<"product_variation"> | string | null
    buy_link?: StringNullableFilter<"product_variation"> | string | null
    priority_weight?: FloatNullableFilter<"product_variation"> | number | null
  }

  export type productCreateWithoutProduct_imageInput = {
    name: string
    description?: string | null
    shopee_id?: string | null
    targeted_stock: number
    product_variation?: product_variationCreateNestedManyWithoutProductInput
  }

  export type productUncheckedCreateWithoutProduct_imageInput = {
    id?: number
    name: string
    description?: string | null
    shopee_id?: string | null
    targeted_stock: number
    product_variation?: product_variationUncheckedCreateNestedManyWithoutProductInput
  }

  export type productCreateOrConnectWithoutProduct_imageInput = {
    where: productWhereUniqueInput
    create: XOR<productCreateWithoutProduct_imageInput, productUncheckedCreateWithoutProduct_imageInput>
  }

  export type productUpsertWithoutProduct_imageInput = {
    update: XOR<productUpdateWithoutProduct_imageInput, productUncheckedUpdateWithoutProduct_imageInput>
    create: XOR<productCreateWithoutProduct_imageInput, productUncheckedCreateWithoutProduct_imageInput>
    where?: productWhereInput
  }

  export type productUpdateToOneWithWhereWithoutProduct_imageInput = {
    where?: productWhereInput
    data: XOR<productUpdateWithoutProduct_imageInput, productUncheckedUpdateWithoutProduct_imageInput>
  }

  export type productUpdateWithoutProduct_imageInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shopee_id?: NullableStringFieldUpdateOperationsInput | string | null
    targeted_stock?: IntFieldUpdateOperationsInput | number
    product_variation?: product_variationUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateWithoutProduct_imageInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shopee_id?: NullableStringFieldUpdateOperationsInput | string | null
    targeted_stock?: IntFieldUpdateOperationsInput | number
    product_variation?: product_variationUncheckedUpdateManyWithoutProductNestedInput
  }

  export type productCreateWithoutProduct_variationInput = {
    name: string
    description?: string | null
    shopee_id?: string | null
    targeted_stock: number
    product_image?: product_imageCreateNestedManyWithoutProductInput
  }

  export type productUncheckedCreateWithoutProduct_variationInput = {
    id?: number
    name: string
    description?: string | null
    shopee_id?: string | null
    targeted_stock: number
    product_image?: product_imageUncheckedCreateNestedManyWithoutProductInput
  }

  export type productCreateOrConnectWithoutProduct_variationInput = {
    where: productWhereUniqueInput
    create: XOR<productCreateWithoutProduct_variationInput, productUncheckedCreateWithoutProduct_variationInput>
  }

  export type order_itemCreateWithoutProduct_variationInput = {
    quantity: number
    order: orderCreateNestedOneWithoutOrder_itemsInput
  }

  export type order_itemUncheckedCreateWithoutProduct_variationInput = {
    id?: number
    order_id: number
    quantity: number
  }

  export type order_itemCreateOrConnectWithoutProduct_variationInput = {
    where: order_itemWhereUniqueInput
    create: XOR<order_itemCreateWithoutProduct_variationInput, order_itemUncheckedCreateWithoutProduct_variationInput>
  }

  export type order_itemCreateManyProduct_variationInputEnvelope = {
    data: order_itemCreateManyProduct_variationInput | order_itemCreateManyProduct_variationInput[]
    skipDuplicates?: boolean
  }

  export type productUpsertWithoutProduct_variationInput = {
    update: XOR<productUpdateWithoutProduct_variationInput, productUncheckedUpdateWithoutProduct_variationInput>
    create: XOR<productCreateWithoutProduct_variationInput, productUncheckedCreateWithoutProduct_variationInput>
    where?: productWhereInput
  }

  export type productUpdateToOneWithWhereWithoutProduct_variationInput = {
    where?: productWhereInput
    data: XOR<productUpdateWithoutProduct_variationInput, productUncheckedUpdateWithoutProduct_variationInput>
  }

  export type productUpdateWithoutProduct_variationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shopee_id?: NullableStringFieldUpdateOperationsInput | string | null
    targeted_stock?: IntFieldUpdateOperationsInput | number
    product_image?: product_imageUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateWithoutProduct_variationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shopee_id?: NullableStringFieldUpdateOperationsInput | string | null
    targeted_stock?: IntFieldUpdateOperationsInput | number
    product_image?: product_imageUncheckedUpdateManyWithoutProductNestedInput
  }

  export type order_itemUpsertWithWhereUniqueWithoutProduct_variationInput = {
    where: order_itemWhereUniqueInput
    update: XOR<order_itemUpdateWithoutProduct_variationInput, order_itemUncheckedUpdateWithoutProduct_variationInput>
    create: XOR<order_itemCreateWithoutProduct_variationInput, order_itemUncheckedCreateWithoutProduct_variationInput>
  }

  export type order_itemUpdateWithWhereUniqueWithoutProduct_variationInput = {
    where: order_itemWhereUniqueInput
    data: XOR<order_itemUpdateWithoutProduct_variationInput, order_itemUncheckedUpdateWithoutProduct_variationInput>
  }

  export type order_itemUpdateManyWithWhereWithoutProduct_variationInput = {
    where: order_itemScalarWhereInput
    data: XOR<order_itemUpdateManyMutationInput, order_itemUncheckedUpdateManyWithoutProduct_variationInput>
  }

  export type product_variationCreateWithoutOrder_itemsInput = {
    name: string
    stock: number
    buy_price: number
    sell_price: number
    image_link?: string | null
    buy_link?: string | null
    priority_weight?: number | null
    product: productCreateNestedOneWithoutProduct_variationInput
  }

  export type product_variationUncheckedCreateWithoutOrder_itemsInput = {
    id?: number
    product_id: number
    name: string
    stock: number
    buy_price: number
    sell_price: number
    image_link?: string | null
    buy_link?: string | null
    priority_weight?: number | null
  }

  export type product_variationCreateOrConnectWithoutOrder_itemsInput = {
    where: product_variationWhereUniqueInput
    create: XOR<product_variationCreateWithoutOrder_itemsInput, product_variationUncheckedCreateWithoutOrder_itemsInput>
  }

  export type orderCreateWithoutOrder_itemsInput = {
    date?: Date | string
  }

  export type orderUncheckedCreateWithoutOrder_itemsInput = {
    id?: number
    date?: Date | string
  }

  export type orderCreateOrConnectWithoutOrder_itemsInput = {
    where: orderWhereUniqueInput
    create: XOR<orderCreateWithoutOrder_itemsInput, orderUncheckedCreateWithoutOrder_itemsInput>
  }

  export type product_variationUpsertWithoutOrder_itemsInput = {
    update: XOR<product_variationUpdateWithoutOrder_itemsInput, product_variationUncheckedUpdateWithoutOrder_itemsInput>
    create: XOR<product_variationCreateWithoutOrder_itemsInput, product_variationUncheckedCreateWithoutOrder_itemsInput>
    where?: product_variationWhereInput
  }

  export type product_variationUpdateToOneWithWhereWithoutOrder_itemsInput = {
    where?: product_variationWhereInput
    data: XOR<product_variationUpdateWithoutOrder_itemsInput, product_variationUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type product_variationUpdateWithoutOrder_itemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    buy_price?: FloatFieldUpdateOperationsInput | number
    sell_price?: FloatFieldUpdateOperationsInput | number
    image_link?: NullableStringFieldUpdateOperationsInput | string | null
    buy_link?: NullableStringFieldUpdateOperationsInput | string | null
    priority_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    product?: productUpdateOneRequiredWithoutProduct_variationNestedInput
  }

  export type product_variationUncheckedUpdateWithoutOrder_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    buy_price?: FloatFieldUpdateOperationsInput | number
    sell_price?: FloatFieldUpdateOperationsInput | number
    image_link?: NullableStringFieldUpdateOperationsInput | string | null
    buy_link?: NullableStringFieldUpdateOperationsInput | string | null
    priority_weight?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type orderUpsertWithoutOrder_itemsInput = {
    update: XOR<orderUpdateWithoutOrder_itemsInput, orderUncheckedUpdateWithoutOrder_itemsInput>
    create: XOR<orderCreateWithoutOrder_itemsInput, orderUncheckedCreateWithoutOrder_itemsInput>
    where?: orderWhereInput
  }

  export type orderUpdateToOneWithWhereWithoutOrder_itemsInput = {
    where?: orderWhereInput
    data: XOR<orderUpdateWithoutOrder_itemsInput, orderUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type orderUpdateWithoutOrder_itemsInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type orderUncheckedUpdateWithoutOrder_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type order_itemCreateManyOrderInput = {
    id?: number
    product_variation_id: number
    quantity: number
  }

  export type order_itemUpdateWithoutOrderInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    product_variation?: product_variationUpdateOneRequiredWithoutOrder_itemsNestedInput
  }

  export type order_itemUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_variation_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type order_itemUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_variation_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type product_imageCreateManyProductInput = {
    id?: number
    link: string
  }

  export type product_variationCreateManyProductInput = {
    id?: number
    name: string
    stock: number
    buy_price: number
    sell_price: number
    image_link?: string | null
    buy_link?: string | null
    priority_weight?: number | null
  }

  export type product_imageUpdateWithoutProductInput = {
    link?: StringFieldUpdateOperationsInput | string
  }

  export type product_imageUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    link?: StringFieldUpdateOperationsInput | string
  }

  export type product_imageUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    link?: StringFieldUpdateOperationsInput | string
  }

  export type product_variationUpdateWithoutProductInput = {
    name?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    buy_price?: FloatFieldUpdateOperationsInput | number
    sell_price?: FloatFieldUpdateOperationsInput | number
    image_link?: NullableStringFieldUpdateOperationsInput | string | null
    buy_link?: NullableStringFieldUpdateOperationsInput | string | null
    priority_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    order_items?: order_itemUpdateManyWithoutProduct_variationNestedInput
  }

  export type product_variationUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    buy_price?: FloatFieldUpdateOperationsInput | number
    sell_price?: FloatFieldUpdateOperationsInput | number
    image_link?: NullableStringFieldUpdateOperationsInput | string | null
    buy_link?: NullableStringFieldUpdateOperationsInput | string | null
    priority_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    order_items?: order_itemUncheckedUpdateManyWithoutProduct_variationNestedInput
  }

  export type product_variationUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    buy_price?: FloatFieldUpdateOperationsInput | number
    sell_price?: FloatFieldUpdateOperationsInput | number
    image_link?: NullableStringFieldUpdateOperationsInput | string | null
    buy_link?: NullableStringFieldUpdateOperationsInput | string | null
    priority_weight?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type order_itemCreateManyProduct_variationInput = {
    id?: number
    order_id: number
    quantity: number
  }

  export type order_itemUpdateWithoutProduct_variationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    order?: orderUpdateOneRequiredWithoutOrder_itemsNestedInput
  }

  export type order_itemUncheckedUpdateWithoutProduct_variationInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type order_itemUncheckedUpdateManyWithoutProduct_variationInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use OrderCountOutputTypeDefaultArgs instead
     */
    export type OrderCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductCountOutputTypeDefaultArgs instead
     */
    export type ProductCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Product_variationCountOutputTypeDefaultArgs instead
     */
    export type Product_variationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Product_variationCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use orderDefaultArgs instead
     */
    export type orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = orderDefaultArgs<ExtArgs>
    /**
     * @deprecated Use productDefaultArgs instead
     */
    export type productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = productDefaultArgs<ExtArgs>
    /**
     * @deprecated Use product_imageDefaultArgs instead
     */
    export type product_imageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = product_imageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use product_variationDefaultArgs instead
     */
    export type product_variationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = product_variationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use order_itemDefaultArgs instead
     */
    export type order_itemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = order_itemDefaultArgs<ExtArgs>

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