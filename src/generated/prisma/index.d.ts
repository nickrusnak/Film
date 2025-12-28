
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
 * Model aktie
 * 
 */
export type aktie = $Result.DefaultSelection<Prisma.$aktiePayload>
/**
 * Model kurs
 * 
 */
export type kurs = $Result.DefaultSelection<Prisma.$kursPayload>
/**
 * Model transaktion
 * 
 */
export type transaktion = $Result.DefaultSelection<Prisma.$transaktionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const handelsplatz: {
  XETRA: 'XETRA',
  NASDAQ: 'NASDAQ',
  NYSE: 'NYSE',
  LSE: 'LSE',
  FWB: 'FWB'
};

export type handelsplatz = (typeof handelsplatz)[keyof typeof handelsplatz]


export const transaktionstyp: {
  KAUF: 'KAUF',
  VERKAUF: 'VERKAUF',
  DIVIDENDE: 'DIVIDENDE'
};

export type transaktionstyp = (typeof transaktionstyp)[keyof typeof transaktionstyp]

}

export type handelsplatz = $Enums.handelsplatz

export const handelsplatz: typeof $Enums.handelsplatz

export type transaktionstyp = $Enums.transaktionstyp

export const transaktionstyp: typeof $Enums.transaktionstyp

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Akties
 * const akties = await prisma.aktie.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Akties
   * const akties = await prisma.aktie.findMany()
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
   * `prisma.aktie`: Exposes CRUD operations for the **aktie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Akties
    * const akties = await prisma.aktie.findMany()
    * ```
    */
  get aktie(): Prisma.aktieDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kurs`: Exposes CRUD operations for the **kurs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kurs
    * const kurs = await prisma.kurs.findMany()
    * ```
    */
  get kurs(): Prisma.kursDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaktion`: Exposes CRUD operations for the **transaktion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transaktions
    * const transaktions = await prisma.transaktion.findMany()
    * ```
    */
  get transaktion(): Prisma.transaktionDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.17.0
   * Query Engine version: c0aafc03b8ef6cdced8654b9a817999e02457d6a
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
    aktie: 'aktie',
    kurs: 'kurs',
    transaktion: 'transaktion'
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
      modelProps: "aktie" | "kurs" | "transaktion"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      aktie: {
        payload: Prisma.$aktiePayload<ExtArgs>
        fields: Prisma.aktieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.aktieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aktiePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.aktieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aktiePayload>
          }
          findFirst: {
            args: Prisma.aktieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aktiePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.aktieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aktiePayload>
          }
          findMany: {
            args: Prisma.aktieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aktiePayload>[]
          }
          create: {
            args: Prisma.aktieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aktiePayload>
          }
          createMany: {
            args: Prisma.aktieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.aktieCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aktiePayload>[]
          }
          delete: {
            args: Prisma.aktieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aktiePayload>
          }
          update: {
            args: Prisma.aktieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aktiePayload>
          }
          deleteMany: {
            args: Prisma.aktieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.aktieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.aktieUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aktiePayload>[]
          }
          upsert: {
            args: Prisma.aktieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aktiePayload>
          }
          aggregate: {
            args: Prisma.AktieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAktie>
          }
          groupBy: {
            args: Prisma.aktieGroupByArgs<ExtArgs>
            result: $Utils.Optional<AktieGroupByOutputType>[]
          }
          count: {
            args: Prisma.aktieCountArgs<ExtArgs>
            result: $Utils.Optional<AktieCountAggregateOutputType> | number
          }
        }
      }
      kurs: {
        payload: Prisma.$kursPayload<ExtArgs>
        fields: Prisma.kursFieldRefs
        operations: {
          findUnique: {
            args: Prisma.kursFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kursPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.kursFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kursPayload>
          }
          findFirst: {
            args: Prisma.kursFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kursPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.kursFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kursPayload>
          }
          findMany: {
            args: Prisma.kursFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kursPayload>[]
          }
          create: {
            args: Prisma.kursCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kursPayload>
          }
          createMany: {
            args: Prisma.kursCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.kursCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kursPayload>[]
          }
          delete: {
            args: Prisma.kursDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kursPayload>
          }
          update: {
            args: Prisma.kursUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kursPayload>
          }
          deleteMany: {
            args: Prisma.kursDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.kursUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.kursUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kursPayload>[]
          }
          upsert: {
            args: Prisma.kursUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kursPayload>
          }
          aggregate: {
            args: Prisma.KursAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKurs>
          }
          groupBy: {
            args: Prisma.kursGroupByArgs<ExtArgs>
            result: $Utils.Optional<KursGroupByOutputType>[]
          }
          count: {
            args: Prisma.kursCountArgs<ExtArgs>
            result: $Utils.Optional<KursCountAggregateOutputType> | number
          }
        }
      }
      transaktion: {
        payload: Prisma.$transaktionPayload<ExtArgs>
        fields: Prisma.transaktionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.transaktionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaktionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.transaktionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaktionPayload>
          }
          findFirst: {
            args: Prisma.transaktionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaktionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.transaktionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaktionPayload>
          }
          findMany: {
            args: Prisma.transaktionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaktionPayload>[]
          }
          create: {
            args: Prisma.transaktionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaktionPayload>
          }
          createMany: {
            args: Prisma.transaktionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.transaktionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaktionPayload>[]
          }
          delete: {
            args: Prisma.transaktionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaktionPayload>
          }
          update: {
            args: Prisma.transaktionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaktionPayload>
          }
          deleteMany: {
            args: Prisma.transaktionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.transaktionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.transaktionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaktionPayload>[]
          }
          upsert: {
            args: Prisma.transaktionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaktionPayload>
          }
          aggregate: {
            args: Prisma.TransaktionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaktion>
          }
          groupBy: {
            args: Prisma.transaktionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransaktionGroupByOutputType>[]
          }
          count: {
            args: Prisma.transaktionCountArgs<ExtArgs>
            result: $Utils.Optional<TransaktionCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    aktie?: aktieOmit
    kurs?: kursOmit
    transaktion?: transaktionOmit
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
   * Count Type AktieCountOutputType
   */

  export type AktieCountOutputType = {
    kurs: number
    transaktion: number
  }

  export type AktieCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kurs?: boolean | AktieCountOutputTypeCountKursArgs
    transaktion?: boolean | AktieCountOutputTypeCountTransaktionArgs
  }

  // Custom InputTypes
  /**
   * AktieCountOutputType without action
   */
  export type AktieCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AktieCountOutputType
     */
    select?: AktieCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AktieCountOutputType without action
   */
  export type AktieCountOutputTypeCountKursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: kursWhereInput
  }

  /**
   * AktieCountOutputType without action
   */
  export type AktieCountOutputTypeCountTransaktionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transaktionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model aktie
   */

  export type AggregateAktie = {
    _count: AktieCountAggregateOutputType | null
    _avg: AktieAvgAggregateOutputType | null
    _sum: AktieSumAggregateOutputType | null
    _min: AktieMinAggregateOutputType | null
    _max: AktieMaxAggregateOutputType | null
  }

  export type AktieAvgAggregateOutputType = {
    id: number | null
    version: number | null
    kaufpreis: Decimal | null
    anzahl: number | null
    dividende: Decimal | null
    letzter_kurs: Decimal | null
  }

  export type AktieSumAggregateOutputType = {
    id: number | null
    version: number | null
    kaufpreis: Decimal | null
    anzahl: number | null
    dividende: Decimal | null
    letzter_kurs: Decimal | null
  }

  export type AktieMinAggregateOutputType = {
    id: number | null
    version: number | null
    isin: string | null
    symbol: string | null
    name: string | null
    branche: string | null
    handelsplatz: $Enums.handelsplatz | null
    kaufpreis: Decimal | null
    anzahl: number | null
    kaufdatum: Date | null
    dividende: Decimal | null
    letzter_kurs: Decimal | null
    erzeugt: Date | null
    aktualisiert: Date | null
  }

  export type AktieMaxAggregateOutputType = {
    id: number | null
    version: number | null
    isin: string | null
    symbol: string | null
    name: string | null
    branche: string | null
    handelsplatz: $Enums.handelsplatz | null
    kaufpreis: Decimal | null
    anzahl: number | null
    kaufdatum: Date | null
    dividende: Decimal | null
    letzter_kurs: Decimal | null
    erzeugt: Date | null
    aktualisiert: Date | null
  }

  export type AktieCountAggregateOutputType = {
    id: number
    version: number
    isin: number
    symbol: number
    name: number
    branche: number
    handelsplatz: number
    kaufpreis: number
    anzahl: number
    kaufdatum: number
    dividende: number
    letzter_kurs: number
    erzeugt: number
    aktualisiert: number
    _all: number
  }


  export type AktieAvgAggregateInputType = {
    id?: true
    version?: true
    kaufpreis?: true
    anzahl?: true
    dividende?: true
    letzter_kurs?: true
  }

  export type AktieSumAggregateInputType = {
    id?: true
    version?: true
    kaufpreis?: true
    anzahl?: true
    dividende?: true
    letzter_kurs?: true
  }

  export type AktieMinAggregateInputType = {
    id?: true
    version?: true
    isin?: true
    symbol?: true
    name?: true
    branche?: true
    handelsplatz?: true
    kaufpreis?: true
    anzahl?: true
    kaufdatum?: true
    dividende?: true
    letzter_kurs?: true
    erzeugt?: true
    aktualisiert?: true
  }

  export type AktieMaxAggregateInputType = {
    id?: true
    version?: true
    isin?: true
    symbol?: true
    name?: true
    branche?: true
    handelsplatz?: true
    kaufpreis?: true
    anzahl?: true
    kaufdatum?: true
    dividende?: true
    letzter_kurs?: true
    erzeugt?: true
    aktualisiert?: true
  }

  export type AktieCountAggregateInputType = {
    id?: true
    version?: true
    isin?: true
    symbol?: true
    name?: true
    branche?: true
    handelsplatz?: true
    kaufpreis?: true
    anzahl?: true
    kaufdatum?: true
    dividende?: true
    letzter_kurs?: true
    erzeugt?: true
    aktualisiert?: true
    _all?: true
  }

  export type AktieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which aktie to aggregate.
     */
    where?: aktieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of akties to fetch.
     */
    orderBy?: aktieOrderByWithRelationInput | aktieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: aktieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` akties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` akties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned akties
    **/
    _count?: true | AktieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AktieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AktieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AktieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AktieMaxAggregateInputType
  }

  export type GetAktieAggregateType<T extends AktieAggregateArgs> = {
        [P in keyof T & keyof AggregateAktie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAktie[P]>
      : GetScalarType<T[P], AggregateAktie[P]>
  }




  export type aktieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: aktieWhereInput
    orderBy?: aktieOrderByWithAggregationInput | aktieOrderByWithAggregationInput[]
    by: AktieScalarFieldEnum[] | AktieScalarFieldEnum
    having?: aktieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AktieCountAggregateInputType | true
    _avg?: AktieAvgAggregateInputType
    _sum?: AktieSumAggregateInputType
    _min?: AktieMinAggregateInputType
    _max?: AktieMaxAggregateInputType
  }

  export type AktieGroupByOutputType = {
    id: number
    version: number
    isin: string
    symbol: string
    name: string
    branche: string | null
    handelsplatz: $Enums.handelsplatz | null
    kaufpreis: Decimal
    anzahl: number
    kaufdatum: Date | null
    dividende: Decimal | null
    letzter_kurs: Decimal | null
    erzeugt: Date
    aktualisiert: Date
    _count: AktieCountAggregateOutputType | null
    _avg: AktieAvgAggregateOutputType | null
    _sum: AktieSumAggregateOutputType | null
    _min: AktieMinAggregateOutputType | null
    _max: AktieMaxAggregateOutputType | null
  }

  type GetAktieGroupByPayload<T extends aktieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AktieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AktieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AktieGroupByOutputType[P]>
            : GetScalarType<T[P], AktieGroupByOutputType[P]>
        }
      >
    >


  export type aktieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    version?: boolean
    isin?: boolean
    symbol?: boolean
    name?: boolean
    branche?: boolean
    handelsplatz?: boolean
    kaufpreis?: boolean
    anzahl?: boolean
    kaufdatum?: boolean
    dividende?: boolean
    letzter_kurs?: boolean
    erzeugt?: boolean
    aktualisiert?: boolean
    kurs?: boolean | aktie$kursArgs<ExtArgs>
    transaktion?: boolean | aktie$transaktionArgs<ExtArgs>
    _count?: boolean | AktieCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aktie"]>

  export type aktieSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    version?: boolean
    isin?: boolean
    symbol?: boolean
    name?: boolean
    branche?: boolean
    handelsplatz?: boolean
    kaufpreis?: boolean
    anzahl?: boolean
    kaufdatum?: boolean
    dividende?: boolean
    letzter_kurs?: boolean
    erzeugt?: boolean
    aktualisiert?: boolean
  }, ExtArgs["result"]["aktie"]>

  export type aktieSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    version?: boolean
    isin?: boolean
    symbol?: boolean
    name?: boolean
    branche?: boolean
    handelsplatz?: boolean
    kaufpreis?: boolean
    anzahl?: boolean
    kaufdatum?: boolean
    dividende?: boolean
    letzter_kurs?: boolean
    erzeugt?: boolean
    aktualisiert?: boolean
  }, ExtArgs["result"]["aktie"]>

  export type aktieSelectScalar = {
    id?: boolean
    version?: boolean
    isin?: boolean
    symbol?: boolean
    name?: boolean
    branche?: boolean
    handelsplatz?: boolean
    kaufpreis?: boolean
    anzahl?: boolean
    kaufdatum?: boolean
    dividende?: boolean
    letzter_kurs?: boolean
    erzeugt?: boolean
    aktualisiert?: boolean
  }

  export type aktieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "version" | "isin" | "symbol" | "name" | "branche" | "handelsplatz" | "kaufpreis" | "anzahl" | "kaufdatum" | "dividende" | "letzter_kurs" | "erzeugt" | "aktualisiert", ExtArgs["result"]["aktie"]>
  export type aktieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kurs?: boolean | aktie$kursArgs<ExtArgs>
    transaktion?: boolean | aktie$transaktionArgs<ExtArgs>
    _count?: boolean | AktieCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type aktieIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type aktieIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $aktiePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "aktie"
    objects: {
      kurs: Prisma.$kursPayload<ExtArgs>[]
      transaktion: Prisma.$transaktionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      version: number
      isin: string
      symbol: string
      name: string
      branche: string | null
      handelsplatz: $Enums.handelsplatz | null
      kaufpreis: Prisma.Decimal
      anzahl: number
      kaufdatum: Date | null
      dividende: Prisma.Decimal | null
      letzter_kurs: Prisma.Decimal | null
      erzeugt: Date
      aktualisiert: Date
    }, ExtArgs["result"]["aktie"]>
    composites: {}
  }

  type aktieGetPayload<S extends boolean | null | undefined | aktieDefaultArgs> = $Result.GetResult<Prisma.$aktiePayload, S>

  type aktieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<aktieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AktieCountAggregateInputType | true
    }

  export interface aktieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['aktie'], meta: { name: 'aktie' } }
    /**
     * Find zero or one Aktie that matches the filter.
     * @param {aktieFindUniqueArgs} args - Arguments to find a Aktie
     * @example
     * // Get one Aktie
     * const aktie = await prisma.aktie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends aktieFindUniqueArgs>(args: SelectSubset<T, aktieFindUniqueArgs<ExtArgs>>): Prisma__aktieClient<$Result.GetResult<Prisma.$aktiePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Aktie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {aktieFindUniqueOrThrowArgs} args - Arguments to find a Aktie
     * @example
     * // Get one Aktie
     * const aktie = await prisma.aktie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends aktieFindUniqueOrThrowArgs>(args: SelectSubset<T, aktieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__aktieClient<$Result.GetResult<Prisma.$aktiePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Aktie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aktieFindFirstArgs} args - Arguments to find a Aktie
     * @example
     * // Get one Aktie
     * const aktie = await prisma.aktie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends aktieFindFirstArgs>(args?: SelectSubset<T, aktieFindFirstArgs<ExtArgs>>): Prisma__aktieClient<$Result.GetResult<Prisma.$aktiePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Aktie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aktieFindFirstOrThrowArgs} args - Arguments to find a Aktie
     * @example
     * // Get one Aktie
     * const aktie = await prisma.aktie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends aktieFindFirstOrThrowArgs>(args?: SelectSubset<T, aktieFindFirstOrThrowArgs<ExtArgs>>): Prisma__aktieClient<$Result.GetResult<Prisma.$aktiePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Akties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aktieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Akties
     * const akties = await prisma.aktie.findMany()
     * 
     * // Get first 10 Akties
     * const akties = await prisma.aktie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aktieWithIdOnly = await prisma.aktie.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends aktieFindManyArgs>(args?: SelectSubset<T, aktieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$aktiePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Aktie.
     * @param {aktieCreateArgs} args - Arguments to create a Aktie.
     * @example
     * // Create one Aktie
     * const Aktie = await prisma.aktie.create({
     *   data: {
     *     // ... data to create a Aktie
     *   }
     * })
     * 
     */
    create<T extends aktieCreateArgs>(args: SelectSubset<T, aktieCreateArgs<ExtArgs>>): Prisma__aktieClient<$Result.GetResult<Prisma.$aktiePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Akties.
     * @param {aktieCreateManyArgs} args - Arguments to create many Akties.
     * @example
     * // Create many Akties
     * const aktie = await prisma.aktie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends aktieCreateManyArgs>(args?: SelectSubset<T, aktieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Akties and returns the data saved in the database.
     * @param {aktieCreateManyAndReturnArgs} args - Arguments to create many Akties.
     * @example
     * // Create many Akties
     * const aktie = await prisma.aktie.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Akties and only return the `id`
     * const aktieWithIdOnly = await prisma.aktie.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends aktieCreateManyAndReturnArgs>(args?: SelectSubset<T, aktieCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$aktiePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Aktie.
     * @param {aktieDeleteArgs} args - Arguments to delete one Aktie.
     * @example
     * // Delete one Aktie
     * const Aktie = await prisma.aktie.delete({
     *   where: {
     *     // ... filter to delete one Aktie
     *   }
     * })
     * 
     */
    delete<T extends aktieDeleteArgs>(args: SelectSubset<T, aktieDeleteArgs<ExtArgs>>): Prisma__aktieClient<$Result.GetResult<Prisma.$aktiePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Aktie.
     * @param {aktieUpdateArgs} args - Arguments to update one Aktie.
     * @example
     * // Update one Aktie
     * const aktie = await prisma.aktie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends aktieUpdateArgs>(args: SelectSubset<T, aktieUpdateArgs<ExtArgs>>): Prisma__aktieClient<$Result.GetResult<Prisma.$aktiePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Akties.
     * @param {aktieDeleteManyArgs} args - Arguments to filter Akties to delete.
     * @example
     * // Delete a few Akties
     * const { count } = await prisma.aktie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends aktieDeleteManyArgs>(args?: SelectSubset<T, aktieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Akties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aktieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Akties
     * const aktie = await prisma.aktie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends aktieUpdateManyArgs>(args: SelectSubset<T, aktieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Akties and returns the data updated in the database.
     * @param {aktieUpdateManyAndReturnArgs} args - Arguments to update many Akties.
     * @example
     * // Update many Akties
     * const aktie = await prisma.aktie.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Akties and only return the `id`
     * const aktieWithIdOnly = await prisma.aktie.updateManyAndReturn({
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
    updateManyAndReturn<T extends aktieUpdateManyAndReturnArgs>(args: SelectSubset<T, aktieUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$aktiePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Aktie.
     * @param {aktieUpsertArgs} args - Arguments to update or create a Aktie.
     * @example
     * // Update or create a Aktie
     * const aktie = await prisma.aktie.upsert({
     *   create: {
     *     // ... data to create a Aktie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Aktie we want to update
     *   }
     * })
     */
    upsert<T extends aktieUpsertArgs>(args: SelectSubset<T, aktieUpsertArgs<ExtArgs>>): Prisma__aktieClient<$Result.GetResult<Prisma.$aktiePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Akties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aktieCountArgs} args - Arguments to filter Akties to count.
     * @example
     * // Count the number of Akties
     * const count = await prisma.aktie.count({
     *   where: {
     *     // ... the filter for the Akties we want to count
     *   }
     * })
    **/
    count<T extends aktieCountArgs>(
      args?: Subset<T, aktieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AktieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Aktie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AktieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AktieAggregateArgs>(args: Subset<T, AktieAggregateArgs>): Prisma.PrismaPromise<GetAktieAggregateType<T>>

    /**
     * Group by Aktie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aktieGroupByArgs} args - Group by arguments.
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
      T extends aktieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: aktieGroupByArgs['orderBy'] }
        : { orderBy?: aktieGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, aktieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAktieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the aktie model
   */
  readonly fields: aktieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for aktie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__aktieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kurs<T extends aktie$kursArgs<ExtArgs> = {}>(args?: Subset<T, aktie$kursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$kursPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transaktion<T extends aktie$transaktionArgs<ExtArgs> = {}>(args?: Subset<T, aktie$transaktionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaktionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the aktie model
   */
  interface aktieFieldRefs {
    readonly id: FieldRef<"aktie", 'Int'>
    readonly version: FieldRef<"aktie", 'Int'>
    readonly isin: FieldRef<"aktie", 'String'>
    readonly symbol: FieldRef<"aktie", 'String'>
    readonly name: FieldRef<"aktie", 'String'>
    readonly branche: FieldRef<"aktie", 'String'>
    readonly handelsplatz: FieldRef<"aktie", 'handelsplatz'>
    readonly kaufpreis: FieldRef<"aktie", 'Decimal'>
    readonly anzahl: FieldRef<"aktie", 'Int'>
    readonly kaufdatum: FieldRef<"aktie", 'DateTime'>
    readonly dividende: FieldRef<"aktie", 'Decimal'>
    readonly letzter_kurs: FieldRef<"aktie", 'Decimal'>
    readonly erzeugt: FieldRef<"aktie", 'DateTime'>
    readonly aktualisiert: FieldRef<"aktie", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * aktie findUnique
   */
  export type aktieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aktie
     */
    select?: aktieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aktie
     */
    omit?: aktieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aktieInclude<ExtArgs> | null
    /**
     * Filter, which aktie to fetch.
     */
    where: aktieWhereUniqueInput
  }

  /**
   * aktie findUniqueOrThrow
   */
  export type aktieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aktie
     */
    select?: aktieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aktie
     */
    omit?: aktieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aktieInclude<ExtArgs> | null
    /**
     * Filter, which aktie to fetch.
     */
    where: aktieWhereUniqueInput
  }

  /**
   * aktie findFirst
   */
  export type aktieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aktie
     */
    select?: aktieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aktie
     */
    omit?: aktieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aktieInclude<ExtArgs> | null
    /**
     * Filter, which aktie to fetch.
     */
    where?: aktieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of akties to fetch.
     */
    orderBy?: aktieOrderByWithRelationInput | aktieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for akties.
     */
    cursor?: aktieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` akties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` akties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of akties.
     */
    distinct?: AktieScalarFieldEnum | AktieScalarFieldEnum[]
  }

  /**
   * aktie findFirstOrThrow
   */
  export type aktieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aktie
     */
    select?: aktieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aktie
     */
    omit?: aktieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aktieInclude<ExtArgs> | null
    /**
     * Filter, which aktie to fetch.
     */
    where?: aktieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of akties to fetch.
     */
    orderBy?: aktieOrderByWithRelationInput | aktieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for akties.
     */
    cursor?: aktieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` akties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` akties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of akties.
     */
    distinct?: AktieScalarFieldEnum | AktieScalarFieldEnum[]
  }

  /**
   * aktie findMany
   */
  export type aktieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aktie
     */
    select?: aktieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aktie
     */
    omit?: aktieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aktieInclude<ExtArgs> | null
    /**
     * Filter, which akties to fetch.
     */
    where?: aktieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of akties to fetch.
     */
    orderBy?: aktieOrderByWithRelationInput | aktieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing akties.
     */
    cursor?: aktieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` akties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` akties.
     */
    skip?: number
    distinct?: AktieScalarFieldEnum | AktieScalarFieldEnum[]
  }

  /**
   * aktie create
   */
  export type aktieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aktie
     */
    select?: aktieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aktie
     */
    omit?: aktieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aktieInclude<ExtArgs> | null
    /**
     * The data needed to create a aktie.
     */
    data: XOR<aktieCreateInput, aktieUncheckedCreateInput>
  }

  /**
   * aktie createMany
   */
  export type aktieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many akties.
     */
    data: aktieCreateManyInput | aktieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * aktie createManyAndReturn
   */
  export type aktieCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aktie
     */
    select?: aktieSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the aktie
     */
    omit?: aktieOmit<ExtArgs> | null
    /**
     * The data used to create many akties.
     */
    data: aktieCreateManyInput | aktieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * aktie update
   */
  export type aktieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aktie
     */
    select?: aktieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aktie
     */
    omit?: aktieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aktieInclude<ExtArgs> | null
    /**
     * The data needed to update a aktie.
     */
    data: XOR<aktieUpdateInput, aktieUncheckedUpdateInput>
    /**
     * Choose, which aktie to update.
     */
    where: aktieWhereUniqueInput
  }

  /**
   * aktie updateMany
   */
  export type aktieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update akties.
     */
    data: XOR<aktieUpdateManyMutationInput, aktieUncheckedUpdateManyInput>
    /**
     * Filter which akties to update
     */
    where?: aktieWhereInput
    /**
     * Limit how many akties to update.
     */
    limit?: number
  }

  /**
   * aktie updateManyAndReturn
   */
  export type aktieUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aktie
     */
    select?: aktieSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the aktie
     */
    omit?: aktieOmit<ExtArgs> | null
    /**
     * The data used to update akties.
     */
    data: XOR<aktieUpdateManyMutationInput, aktieUncheckedUpdateManyInput>
    /**
     * Filter which akties to update
     */
    where?: aktieWhereInput
    /**
     * Limit how many akties to update.
     */
    limit?: number
  }

  /**
   * aktie upsert
   */
  export type aktieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aktie
     */
    select?: aktieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aktie
     */
    omit?: aktieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aktieInclude<ExtArgs> | null
    /**
     * The filter to search for the aktie to update in case it exists.
     */
    where: aktieWhereUniqueInput
    /**
     * In case the aktie found by the `where` argument doesn't exist, create a new aktie with this data.
     */
    create: XOR<aktieCreateInput, aktieUncheckedCreateInput>
    /**
     * In case the aktie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<aktieUpdateInput, aktieUncheckedUpdateInput>
  }

  /**
   * aktie delete
   */
  export type aktieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aktie
     */
    select?: aktieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aktie
     */
    omit?: aktieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aktieInclude<ExtArgs> | null
    /**
     * Filter which aktie to delete.
     */
    where: aktieWhereUniqueInput
  }

  /**
   * aktie deleteMany
   */
  export type aktieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which akties to delete
     */
    where?: aktieWhereInput
    /**
     * Limit how many akties to delete.
     */
    limit?: number
  }

  /**
   * aktie.kurs
   */
  export type aktie$kursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kurs
     */
    select?: kursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kurs
     */
    omit?: kursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kursInclude<ExtArgs> | null
    where?: kursWhereInput
    orderBy?: kursOrderByWithRelationInput | kursOrderByWithRelationInput[]
    cursor?: kursWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KursScalarFieldEnum | KursScalarFieldEnum[]
  }

  /**
   * aktie.transaktion
   */
  export type aktie$transaktionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaktion
     */
    select?: transaktionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaktion
     */
    omit?: transaktionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaktionInclude<ExtArgs> | null
    where?: transaktionWhereInput
    orderBy?: transaktionOrderByWithRelationInput | transaktionOrderByWithRelationInput[]
    cursor?: transaktionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransaktionScalarFieldEnum | TransaktionScalarFieldEnum[]
  }

  /**
   * aktie without action
   */
  export type aktieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aktie
     */
    select?: aktieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aktie
     */
    omit?: aktieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aktieInclude<ExtArgs> | null
  }


  /**
   * Model kurs
   */

  export type AggregateKurs = {
    _count: KursCountAggregateOutputType | null
    _avg: KursAvgAggregateOutputType | null
    _sum: KursSumAggregateOutputType | null
    _min: KursMinAggregateOutputType | null
    _max: KursMaxAggregateOutputType | null
  }

  export type KursAvgAggregateOutputType = {
    id: number | null
    eroeffnung: Decimal | null
    schluss: Decimal | null
    hoch: Decimal | null
    tief: Decimal | null
    volumen: number | null
    aktie_id: number | null
  }

  export type KursSumAggregateOutputType = {
    id: number | null
    eroeffnung: Decimal | null
    schluss: Decimal | null
    hoch: Decimal | null
    tief: Decimal | null
    volumen: bigint | null
    aktie_id: number | null
  }

  export type KursMinAggregateOutputType = {
    id: number | null
    datum: Date | null
    eroeffnung: Decimal | null
    schluss: Decimal | null
    hoch: Decimal | null
    tief: Decimal | null
    volumen: bigint | null
    aktie_id: number | null
  }

  export type KursMaxAggregateOutputType = {
    id: number | null
    datum: Date | null
    eroeffnung: Decimal | null
    schluss: Decimal | null
    hoch: Decimal | null
    tief: Decimal | null
    volumen: bigint | null
    aktie_id: number | null
  }

  export type KursCountAggregateOutputType = {
    id: number
    datum: number
    eroeffnung: number
    schluss: number
    hoch: number
    tief: number
    volumen: number
    aktie_id: number
    _all: number
  }


  export type KursAvgAggregateInputType = {
    id?: true
    eroeffnung?: true
    schluss?: true
    hoch?: true
    tief?: true
    volumen?: true
    aktie_id?: true
  }

  export type KursSumAggregateInputType = {
    id?: true
    eroeffnung?: true
    schluss?: true
    hoch?: true
    tief?: true
    volumen?: true
    aktie_id?: true
  }

  export type KursMinAggregateInputType = {
    id?: true
    datum?: true
    eroeffnung?: true
    schluss?: true
    hoch?: true
    tief?: true
    volumen?: true
    aktie_id?: true
  }

  export type KursMaxAggregateInputType = {
    id?: true
    datum?: true
    eroeffnung?: true
    schluss?: true
    hoch?: true
    tief?: true
    volumen?: true
    aktie_id?: true
  }

  export type KursCountAggregateInputType = {
    id?: true
    datum?: true
    eroeffnung?: true
    schluss?: true
    hoch?: true
    tief?: true
    volumen?: true
    aktie_id?: true
    _all?: true
  }

  export type KursAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which kurs to aggregate.
     */
    where?: kursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kurs to fetch.
     */
    orderBy?: kursOrderByWithRelationInput | kursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: kursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned kurs
    **/
    _count?: true | KursCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KursAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KursSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KursMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KursMaxAggregateInputType
  }

  export type GetKursAggregateType<T extends KursAggregateArgs> = {
        [P in keyof T & keyof AggregateKurs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKurs[P]>
      : GetScalarType<T[P], AggregateKurs[P]>
  }




  export type kursGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: kursWhereInput
    orderBy?: kursOrderByWithAggregationInput | kursOrderByWithAggregationInput[]
    by: KursScalarFieldEnum[] | KursScalarFieldEnum
    having?: kursScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KursCountAggregateInputType | true
    _avg?: KursAvgAggregateInputType
    _sum?: KursSumAggregateInputType
    _min?: KursMinAggregateInputType
    _max?: KursMaxAggregateInputType
  }

  export type KursGroupByOutputType = {
    id: number
    datum: Date
    eroeffnung: Decimal | null
    schluss: Decimal | null
    hoch: Decimal | null
    tief: Decimal | null
    volumen: bigint | null
    aktie_id: number
    _count: KursCountAggregateOutputType | null
    _avg: KursAvgAggregateOutputType | null
    _sum: KursSumAggregateOutputType | null
    _min: KursMinAggregateOutputType | null
    _max: KursMaxAggregateOutputType | null
  }

  type GetKursGroupByPayload<T extends kursGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KursGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KursGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KursGroupByOutputType[P]>
            : GetScalarType<T[P], KursGroupByOutputType[P]>
        }
      >
    >


  export type kursSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    datum?: boolean
    eroeffnung?: boolean
    schluss?: boolean
    hoch?: boolean
    tief?: boolean
    volumen?: boolean
    aktie_id?: boolean
    aktie?: boolean | aktieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kurs"]>

  export type kursSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    datum?: boolean
    eroeffnung?: boolean
    schluss?: boolean
    hoch?: boolean
    tief?: boolean
    volumen?: boolean
    aktie_id?: boolean
    aktie?: boolean | aktieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kurs"]>

  export type kursSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    datum?: boolean
    eroeffnung?: boolean
    schluss?: boolean
    hoch?: boolean
    tief?: boolean
    volumen?: boolean
    aktie_id?: boolean
    aktie?: boolean | aktieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kurs"]>

  export type kursSelectScalar = {
    id?: boolean
    datum?: boolean
    eroeffnung?: boolean
    schluss?: boolean
    hoch?: boolean
    tief?: boolean
    volumen?: boolean
    aktie_id?: boolean
  }

  export type kursOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "datum" | "eroeffnung" | "schluss" | "hoch" | "tief" | "volumen" | "aktie_id", ExtArgs["result"]["kurs"]>
  export type kursInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aktie?: boolean | aktieDefaultArgs<ExtArgs>
  }
  export type kursIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aktie?: boolean | aktieDefaultArgs<ExtArgs>
  }
  export type kursIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aktie?: boolean | aktieDefaultArgs<ExtArgs>
  }

  export type $kursPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "kurs"
    objects: {
      aktie: Prisma.$aktiePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      datum: Date
      eroeffnung: Prisma.Decimal | null
      schluss: Prisma.Decimal | null
      hoch: Prisma.Decimal | null
      tief: Prisma.Decimal | null
      volumen: bigint | null
      aktie_id: number
    }, ExtArgs["result"]["kurs"]>
    composites: {}
  }

  type kursGetPayload<S extends boolean | null | undefined | kursDefaultArgs> = $Result.GetResult<Prisma.$kursPayload, S>

  type kursCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<kursFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KursCountAggregateInputType | true
    }

  export interface kursDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['kurs'], meta: { name: 'kurs' } }
    /**
     * Find zero or one Kurs that matches the filter.
     * @param {kursFindUniqueArgs} args - Arguments to find a Kurs
     * @example
     * // Get one Kurs
     * const kurs = await prisma.kurs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends kursFindUniqueArgs>(args: SelectSubset<T, kursFindUniqueArgs<ExtArgs>>): Prisma__kursClient<$Result.GetResult<Prisma.$kursPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Kurs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {kursFindUniqueOrThrowArgs} args - Arguments to find a Kurs
     * @example
     * // Get one Kurs
     * const kurs = await prisma.kurs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends kursFindUniqueOrThrowArgs>(args: SelectSubset<T, kursFindUniqueOrThrowArgs<ExtArgs>>): Prisma__kursClient<$Result.GetResult<Prisma.$kursPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kursFindFirstArgs} args - Arguments to find a Kurs
     * @example
     * // Get one Kurs
     * const kurs = await prisma.kurs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends kursFindFirstArgs>(args?: SelectSubset<T, kursFindFirstArgs<ExtArgs>>): Prisma__kursClient<$Result.GetResult<Prisma.$kursPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kurs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kursFindFirstOrThrowArgs} args - Arguments to find a Kurs
     * @example
     * // Get one Kurs
     * const kurs = await prisma.kurs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends kursFindFirstOrThrowArgs>(args?: SelectSubset<T, kursFindFirstOrThrowArgs<ExtArgs>>): Prisma__kursClient<$Result.GetResult<Prisma.$kursPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Kurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kursFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kurs
     * const kurs = await prisma.kurs.findMany()
     * 
     * // Get first 10 Kurs
     * const kurs = await prisma.kurs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kursWithIdOnly = await prisma.kurs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends kursFindManyArgs>(args?: SelectSubset<T, kursFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$kursPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Kurs.
     * @param {kursCreateArgs} args - Arguments to create a Kurs.
     * @example
     * // Create one Kurs
     * const Kurs = await prisma.kurs.create({
     *   data: {
     *     // ... data to create a Kurs
     *   }
     * })
     * 
     */
    create<T extends kursCreateArgs>(args: SelectSubset<T, kursCreateArgs<ExtArgs>>): Prisma__kursClient<$Result.GetResult<Prisma.$kursPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Kurs.
     * @param {kursCreateManyArgs} args - Arguments to create many Kurs.
     * @example
     * // Create many Kurs
     * const kurs = await prisma.kurs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends kursCreateManyArgs>(args?: SelectSubset<T, kursCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Kurs and returns the data saved in the database.
     * @param {kursCreateManyAndReturnArgs} args - Arguments to create many Kurs.
     * @example
     * // Create many Kurs
     * const kurs = await prisma.kurs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Kurs and only return the `id`
     * const kursWithIdOnly = await prisma.kurs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends kursCreateManyAndReturnArgs>(args?: SelectSubset<T, kursCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$kursPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Kurs.
     * @param {kursDeleteArgs} args - Arguments to delete one Kurs.
     * @example
     * // Delete one Kurs
     * const Kurs = await prisma.kurs.delete({
     *   where: {
     *     // ... filter to delete one Kurs
     *   }
     * })
     * 
     */
    delete<T extends kursDeleteArgs>(args: SelectSubset<T, kursDeleteArgs<ExtArgs>>): Prisma__kursClient<$Result.GetResult<Prisma.$kursPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Kurs.
     * @param {kursUpdateArgs} args - Arguments to update one Kurs.
     * @example
     * // Update one Kurs
     * const kurs = await prisma.kurs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends kursUpdateArgs>(args: SelectSubset<T, kursUpdateArgs<ExtArgs>>): Prisma__kursClient<$Result.GetResult<Prisma.$kursPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Kurs.
     * @param {kursDeleteManyArgs} args - Arguments to filter Kurs to delete.
     * @example
     * // Delete a few Kurs
     * const { count } = await prisma.kurs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends kursDeleteManyArgs>(args?: SelectSubset<T, kursDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kursUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kurs
     * const kurs = await prisma.kurs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends kursUpdateManyArgs>(args: SelectSubset<T, kursUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kurs and returns the data updated in the database.
     * @param {kursUpdateManyAndReturnArgs} args - Arguments to update many Kurs.
     * @example
     * // Update many Kurs
     * const kurs = await prisma.kurs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Kurs and only return the `id`
     * const kursWithIdOnly = await prisma.kurs.updateManyAndReturn({
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
    updateManyAndReturn<T extends kursUpdateManyAndReturnArgs>(args: SelectSubset<T, kursUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$kursPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Kurs.
     * @param {kursUpsertArgs} args - Arguments to update or create a Kurs.
     * @example
     * // Update or create a Kurs
     * const kurs = await prisma.kurs.upsert({
     *   create: {
     *     // ... data to create a Kurs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kurs we want to update
     *   }
     * })
     */
    upsert<T extends kursUpsertArgs>(args: SelectSubset<T, kursUpsertArgs<ExtArgs>>): Prisma__kursClient<$Result.GetResult<Prisma.$kursPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Kurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kursCountArgs} args - Arguments to filter Kurs to count.
     * @example
     * // Count the number of Kurs
     * const count = await prisma.kurs.count({
     *   where: {
     *     // ... the filter for the Kurs we want to count
     *   }
     * })
    **/
    count<T extends kursCountArgs>(
      args?: Subset<T, kursCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KursCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KursAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KursAggregateArgs>(args: Subset<T, KursAggregateArgs>): Prisma.PrismaPromise<GetKursAggregateType<T>>

    /**
     * Group by Kurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kursGroupByArgs} args - Group by arguments.
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
      T extends kursGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: kursGroupByArgs['orderBy'] }
        : { orderBy?: kursGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, kursGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKursGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the kurs model
   */
  readonly fields: kursFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for kurs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__kursClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    aktie<T extends aktieDefaultArgs<ExtArgs> = {}>(args?: Subset<T, aktieDefaultArgs<ExtArgs>>): Prisma__aktieClient<$Result.GetResult<Prisma.$aktiePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the kurs model
   */
  interface kursFieldRefs {
    readonly id: FieldRef<"kurs", 'Int'>
    readonly datum: FieldRef<"kurs", 'DateTime'>
    readonly eroeffnung: FieldRef<"kurs", 'Decimal'>
    readonly schluss: FieldRef<"kurs", 'Decimal'>
    readonly hoch: FieldRef<"kurs", 'Decimal'>
    readonly tief: FieldRef<"kurs", 'Decimal'>
    readonly volumen: FieldRef<"kurs", 'BigInt'>
    readonly aktie_id: FieldRef<"kurs", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * kurs findUnique
   */
  export type kursFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kurs
     */
    select?: kursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kurs
     */
    omit?: kursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kursInclude<ExtArgs> | null
    /**
     * Filter, which kurs to fetch.
     */
    where: kursWhereUniqueInput
  }

  /**
   * kurs findUniqueOrThrow
   */
  export type kursFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kurs
     */
    select?: kursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kurs
     */
    omit?: kursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kursInclude<ExtArgs> | null
    /**
     * Filter, which kurs to fetch.
     */
    where: kursWhereUniqueInput
  }

  /**
   * kurs findFirst
   */
  export type kursFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kurs
     */
    select?: kursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kurs
     */
    omit?: kursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kursInclude<ExtArgs> | null
    /**
     * Filter, which kurs to fetch.
     */
    where?: kursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kurs to fetch.
     */
    orderBy?: kursOrderByWithRelationInput | kursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for kurs.
     */
    cursor?: kursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of kurs.
     */
    distinct?: KursScalarFieldEnum | KursScalarFieldEnum[]
  }

  /**
   * kurs findFirstOrThrow
   */
  export type kursFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kurs
     */
    select?: kursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kurs
     */
    omit?: kursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kursInclude<ExtArgs> | null
    /**
     * Filter, which kurs to fetch.
     */
    where?: kursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kurs to fetch.
     */
    orderBy?: kursOrderByWithRelationInput | kursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for kurs.
     */
    cursor?: kursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of kurs.
     */
    distinct?: KursScalarFieldEnum | KursScalarFieldEnum[]
  }

  /**
   * kurs findMany
   */
  export type kursFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kurs
     */
    select?: kursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kurs
     */
    omit?: kursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kursInclude<ExtArgs> | null
    /**
     * Filter, which kurs to fetch.
     */
    where?: kursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kurs to fetch.
     */
    orderBy?: kursOrderByWithRelationInput | kursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing kurs.
     */
    cursor?: kursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kurs.
     */
    skip?: number
    distinct?: KursScalarFieldEnum | KursScalarFieldEnum[]
  }

  /**
   * kurs create
   */
  export type kursCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kurs
     */
    select?: kursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kurs
     */
    omit?: kursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kursInclude<ExtArgs> | null
    /**
     * The data needed to create a kurs.
     */
    data: XOR<kursCreateInput, kursUncheckedCreateInput>
  }

  /**
   * kurs createMany
   */
  export type kursCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many kurs.
     */
    data: kursCreateManyInput | kursCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * kurs createManyAndReturn
   */
  export type kursCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kurs
     */
    select?: kursSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the kurs
     */
    omit?: kursOmit<ExtArgs> | null
    /**
     * The data used to create many kurs.
     */
    data: kursCreateManyInput | kursCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kursIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * kurs update
   */
  export type kursUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kurs
     */
    select?: kursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kurs
     */
    omit?: kursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kursInclude<ExtArgs> | null
    /**
     * The data needed to update a kurs.
     */
    data: XOR<kursUpdateInput, kursUncheckedUpdateInput>
    /**
     * Choose, which kurs to update.
     */
    where: kursWhereUniqueInput
  }

  /**
   * kurs updateMany
   */
  export type kursUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update kurs.
     */
    data: XOR<kursUpdateManyMutationInput, kursUncheckedUpdateManyInput>
    /**
     * Filter which kurs to update
     */
    where?: kursWhereInput
    /**
     * Limit how many kurs to update.
     */
    limit?: number
  }

  /**
   * kurs updateManyAndReturn
   */
  export type kursUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kurs
     */
    select?: kursSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the kurs
     */
    omit?: kursOmit<ExtArgs> | null
    /**
     * The data used to update kurs.
     */
    data: XOR<kursUpdateManyMutationInput, kursUncheckedUpdateManyInput>
    /**
     * Filter which kurs to update
     */
    where?: kursWhereInput
    /**
     * Limit how many kurs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kursIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * kurs upsert
   */
  export type kursUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kurs
     */
    select?: kursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kurs
     */
    omit?: kursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kursInclude<ExtArgs> | null
    /**
     * The filter to search for the kurs to update in case it exists.
     */
    where: kursWhereUniqueInput
    /**
     * In case the kurs found by the `where` argument doesn't exist, create a new kurs with this data.
     */
    create: XOR<kursCreateInput, kursUncheckedCreateInput>
    /**
     * In case the kurs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<kursUpdateInput, kursUncheckedUpdateInput>
  }

  /**
   * kurs delete
   */
  export type kursDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kurs
     */
    select?: kursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kurs
     */
    omit?: kursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kursInclude<ExtArgs> | null
    /**
     * Filter which kurs to delete.
     */
    where: kursWhereUniqueInput
  }

  /**
   * kurs deleteMany
   */
  export type kursDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which kurs to delete
     */
    where?: kursWhereInput
    /**
     * Limit how many kurs to delete.
     */
    limit?: number
  }

  /**
   * kurs without action
   */
  export type kursDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kurs
     */
    select?: kursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kurs
     */
    omit?: kursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kursInclude<ExtArgs> | null
  }


  /**
   * Model transaktion
   */

  export type AggregateTransaktion = {
    _count: TransaktionCountAggregateOutputType | null
    _avg: TransaktionAvgAggregateOutputType | null
    _sum: TransaktionSumAggregateOutputType | null
    _min: TransaktionMinAggregateOutputType | null
    _max: TransaktionMaxAggregateOutputType | null
  }

  export type TransaktionAvgAggregateOutputType = {
    id: number | null
    version: number | null
    aktie_id: number | null
    anzahl: number | null
    preis: Decimal | null
    gebuehren: Decimal | null
    gesamtbetrag: Decimal | null
  }

  export type TransaktionSumAggregateOutputType = {
    id: number | null
    version: number | null
    aktie_id: number | null
    anzahl: number | null
    preis: Decimal | null
    gebuehren: Decimal | null
    gesamtbetrag: Decimal | null
  }

  export type TransaktionMinAggregateOutputType = {
    id: number | null
    version: number | null
    typ: $Enums.transaktionstyp | null
    aktie_id: number | null
    datum: Date | null
    uhrzeit: Date | null
    anzahl: number | null
    preis: Decimal | null
    gebuehren: Decimal | null
    gesamtbetrag: Decimal | null
    notiz: string | null
    erzeugt: Date | null
    aktualisiert: Date | null
  }

  export type TransaktionMaxAggregateOutputType = {
    id: number | null
    version: number | null
    typ: $Enums.transaktionstyp | null
    aktie_id: number | null
    datum: Date | null
    uhrzeit: Date | null
    anzahl: number | null
    preis: Decimal | null
    gebuehren: Decimal | null
    gesamtbetrag: Decimal | null
    notiz: string | null
    erzeugt: Date | null
    aktualisiert: Date | null
  }

  export type TransaktionCountAggregateOutputType = {
    id: number
    version: number
    typ: number
    aktie_id: number
    datum: number
    uhrzeit: number
    anzahl: number
    preis: number
    gebuehren: number
    gesamtbetrag: number
    notiz: number
    erzeugt: number
    aktualisiert: number
    _all: number
  }


  export type TransaktionAvgAggregateInputType = {
    id?: true
    version?: true
    aktie_id?: true
    anzahl?: true
    preis?: true
    gebuehren?: true
    gesamtbetrag?: true
  }

  export type TransaktionSumAggregateInputType = {
    id?: true
    version?: true
    aktie_id?: true
    anzahl?: true
    preis?: true
    gebuehren?: true
    gesamtbetrag?: true
  }

  export type TransaktionMinAggregateInputType = {
    id?: true
    version?: true
    typ?: true
    aktie_id?: true
    datum?: true
    uhrzeit?: true
    anzahl?: true
    preis?: true
    gebuehren?: true
    gesamtbetrag?: true
    notiz?: true
    erzeugt?: true
    aktualisiert?: true
  }

  export type TransaktionMaxAggregateInputType = {
    id?: true
    version?: true
    typ?: true
    aktie_id?: true
    datum?: true
    uhrzeit?: true
    anzahl?: true
    preis?: true
    gebuehren?: true
    gesamtbetrag?: true
    notiz?: true
    erzeugt?: true
    aktualisiert?: true
  }

  export type TransaktionCountAggregateInputType = {
    id?: true
    version?: true
    typ?: true
    aktie_id?: true
    datum?: true
    uhrzeit?: true
    anzahl?: true
    preis?: true
    gebuehren?: true
    gesamtbetrag?: true
    notiz?: true
    erzeugt?: true
    aktualisiert?: true
    _all?: true
  }

  export type TransaktionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transaktion to aggregate.
     */
    where?: transaktionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaktions to fetch.
     */
    orderBy?: transaktionOrderByWithRelationInput | transaktionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: transaktionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaktions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaktions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned transaktions
    **/
    _count?: true | TransaktionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransaktionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransaktionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransaktionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransaktionMaxAggregateInputType
  }

  export type GetTransaktionAggregateType<T extends TransaktionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaktion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaktion[P]>
      : GetScalarType<T[P], AggregateTransaktion[P]>
  }




  export type transaktionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transaktionWhereInput
    orderBy?: transaktionOrderByWithAggregationInput | transaktionOrderByWithAggregationInput[]
    by: TransaktionScalarFieldEnum[] | TransaktionScalarFieldEnum
    having?: transaktionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransaktionCountAggregateInputType | true
    _avg?: TransaktionAvgAggregateInputType
    _sum?: TransaktionSumAggregateInputType
    _min?: TransaktionMinAggregateInputType
    _max?: TransaktionMaxAggregateInputType
  }

  export type TransaktionGroupByOutputType = {
    id: number
    version: number
    typ: $Enums.transaktionstyp
    aktie_id: number
    datum: Date
    uhrzeit: Date | null
    anzahl: number
    preis: Decimal
    gebuehren: Decimal
    gesamtbetrag: Decimal
    notiz: string | null
    erzeugt: Date
    aktualisiert: Date
    _count: TransaktionCountAggregateOutputType | null
    _avg: TransaktionAvgAggregateOutputType | null
    _sum: TransaktionSumAggregateOutputType | null
    _min: TransaktionMinAggregateOutputType | null
    _max: TransaktionMaxAggregateOutputType | null
  }

  type GetTransaktionGroupByPayload<T extends transaktionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransaktionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransaktionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransaktionGroupByOutputType[P]>
            : GetScalarType<T[P], TransaktionGroupByOutputType[P]>
        }
      >
    >


  export type transaktionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    version?: boolean
    typ?: boolean
    aktie_id?: boolean
    datum?: boolean
    uhrzeit?: boolean
    anzahl?: boolean
    preis?: boolean
    gebuehren?: boolean
    gesamtbetrag?: boolean
    notiz?: boolean
    erzeugt?: boolean
    aktualisiert?: boolean
    aktie?: boolean | aktieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaktion"]>

  export type transaktionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    version?: boolean
    typ?: boolean
    aktie_id?: boolean
    datum?: boolean
    uhrzeit?: boolean
    anzahl?: boolean
    preis?: boolean
    gebuehren?: boolean
    gesamtbetrag?: boolean
    notiz?: boolean
    erzeugt?: boolean
    aktualisiert?: boolean
    aktie?: boolean | aktieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaktion"]>

  export type transaktionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    version?: boolean
    typ?: boolean
    aktie_id?: boolean
    datum?: boolean
    uhrzeit?: boolean
    anzahl?: boolean
    preis?: boolean
    gebuehren?: boolean
    gesamtbetrag?: boolean
    notiz?: boolean
    erzeugt?: boolean
    aktualisiert?: boolean
    aktie?: boolean | aktieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaktion"]>

  export type transaktionSelectScalar = {
    id?: boolean
    version?: boolean
    typ?: boolean
    aktie_id?: boolean
    datum?: boolean
    uhrzeit?: boolean
    anzahl?: boolean
    preis?: boolean
    gebuehren?: boolean
    gesamtbetrag?: boolean
    notiz?: boolean
    erzeugt?: boolean
    aktualisiert?: boolean
  }

  export type transaktionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "version" | "typ" | "aktie_id" | "datum" | "uhrzeit" | "anzahl" | "preis" | "gebuehren" | "gesamtbetrag" | "notiz" | "erzeugt" | "aktualisiert", ExtArgs["result"]["transaktion"]>
  export type transaktionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aktie?: boolean | aktieDefaultArgs<ExtArgs>
  }
  export type transaktionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aktie?: boolean | aktieDefaultArgs<ExtArgs>
  }
  export type transaktionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aktie?: boolean | aktieDefaultArgs<ExtArgs>
  }

  export type $transaktionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "transaktion"
    objects: {
      aktie: Prisma.$aktiePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      version: number
      typ: $Enums.transaktionstyp
      aktie_id: number
      datum: Date
      uhrzeit: Date | null
      anzahl: number
      preis: Prisma.Decimal
      gebuehren: Prisma.Decimal
      gesamtbetrag: Prisma.Decimal
      notiz: string | null
      erzeugt: Date
      aktualisiert: Date
    }, ExtArgs["result"]["transaktion"]>
    composites: {}
  }

  type transaktionGetPayload<S extends boolean | null | undefined | transaktionDefaultArgs> = $Result.GetResult<Prisma.$transaktionPayload, S>

  type transaktionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<transaktionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransaktionCountAggregateInputType | true
    }

  export interface transaktionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['transaktion'], meta: { name: 'transaktion' } }
    /**
     * Find zero or one Transaktion that matches the filter.
     * @param {transaktionFindUniqueArgs} args - Arguments to find a Transaktion
     * @example
     * // Get one Transaktion
     * const transaktion = await prisma.transaktion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends transaktionFindUniqueArgs>(args: SelectSubset<T, transaktionFindUniqueArgs<ExtArgs>>): Prisma__transaktionClient<$Result.GetResult<Prisma.$transaktionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaktion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {transaktionFindUniqueOrThrowArgs} args - Arguments to find a Transaktion
     * @example
     * // Get one Transaktion
     * const transaktion = await prisma.transaktion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends transaktionFindUniqueOrThrowArgs>(args: SelectSubset<T, transaktionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__transaktionClient<$Result.GetResult<Prisma.$transaktionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaktion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaktionFindFirstArgs} args - Arguments to find a Transaktion
     * @example
     * // Get one Transaktion
     * const transaktion = await prisma.transaktion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends transaktionFindFirstArgs>(args?: SelectSubset<T, transaktionFindFirstArgs<ExtArgs>>): Prisma__transaktionClient<$Result.GetResult<Prisma.$transaktionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaktion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaktionFindFirstOrThrowArgs} args - Arguments to find a Transaktion
     * @example
     * // Get one Transaktion
     * const transaktion = await prisma.transaktion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends transaktionFindFirstOrThrowArgs>(args?: SelectSubset<T, transaktionFindFirstOrThrowArgs<ExtArgs>>): Prisma__transaktionClient<$Result.GetResult<Prisma.$transaktionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transaktions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaktionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transaktions
     * const transaktions = await prisma.transaktion.findMany()
     * 
     * // Get first 10 Transaktions
     * const transaktions = await prisma.transaktion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transaktionWithIdOnly = await prisma.transaktion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends transaktionFindManyArgs>(args?: SelectSubset<T, transaktionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaktionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaktion.
     * @param {transaktionCreateArgs} args - Arguments to create a Transaktion.
     * @example
     * // Create one Transaktion
     * const Transaktion = await prisma.transaktion.create({
     *   data: {
     *     // ... data to create a Transaktion
     *   }
     * })
     * 
     */
    create<T extends transaktionCreateArgs>(args: SelectSubset<T, transaktionCreateArgs<ExtArgs>>): Prisma__transaktionClient<$Result.GetResult<Prisma.$transaktionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transaktions.
     * @param {transaktionCreateManyArgs} args - Arguments to create many Transaktions.
     * @example
     * // Create many Transaktions
     * const transaktion = await prisma.transaktion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends transaktionCreateManyArgs>(args?: SelectSubset<T, transaktionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transaktions and returns the data saved in the database.
     * @param {transaktionCreateManyAndReturnArgs} args - Arguments to create many Transaktions.
     * @example
     * // Create many Transaktions
     * const transaktion = await prisma.transaktion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transaktions and only return the `id`
     * const transaktionWithIdOnly = await prisma.transaktion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends transaktionCreateManyAndReturnArgs>(args?: SelectSubset<T, transaktionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaktionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaktion.
     * @param {transaktionDeleteArgs} args - Arguments to delete one Transaktion.
     * @example
     * // Delete one Transaktion
     * const Transaktion = await prisma.transaktion.delete({
     *   where: {
     *     // ... filter to delete one Transaktion
     *   }
     * })
     * 
     */
    delete<T extends transaktionDeleteArgs>(args: SelectSubset<T, transaktionDeleteArgs<ExtArgs>>): Prisma__transaktionClient<$Result.GetResult<Prisma.$transaktionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaktion.
     * @param {transaktionUpdateArgs} args - Arguments to update one Transaktion.
     * @example
     * // Update one Transaktion
     * const transaktion = await prisma.transaktion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends transaktionUpdateArgs>(args: SelectSubset<T, transaktionUpdateArgs<ExtArgs>>): Prisma__transaktionClient<$Result.GetResult<Prisma.$transaktionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transaktions.
     * @param {transaktionDeleteManyArgs} args - Arguments to filter Transaktions to delete.
     * @example
     * // Delete a few Transaktions
     * const { count } = await prisma.transaktion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends transaktionDeleteManyArgs>(args?: SelectSubset<T, transaktionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transaktions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaktionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transaktions
     * const transaktion = await prisma.transaktion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends transaktionUpdateManyArgs>(args: SelectSubset<T, transaktionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transaktions and returns the data updated in the database.
     * @param {transaktionUpdateManyAndReturnArgs} args - Arguments to update many Transaktions.
     * @example
     * // Update many Transaktions
     * const transaktion = await prisma.transaktion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transaktions and only return the `id`
     * const transaktionWithIdOnly = await prisma.transaktion.updateManyAndReturn({
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
    updateManyAndReturn<T extends transaktionUpdateManyAndReturnArgs>(args: SelectSubset<T, transaktionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaktionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaktion.
     * @param {transaktionUpsertArgs} args - Arguments to update or create a Transaktion.
     * @example
     * // Update or create a Transaktion
     * const transaktion = await prisma.transaktion.upsert({
     *   create: {
     *     // ... data to create a Transaktion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaktion we want to update
     *   }
     * })
     */
    upsert<T extends transaktionUpsertArgs>(args: SelectSubset<T, transaktionUpsertArgs<ExtArgs>>): Prisma__transaktionClient<$Result.GetResult<Prisma.$transaktionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transaktions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaktionCountArgs} args - Arguments to filter Transaktions to count.
     * @example
     * // Count the number of Transaktions
     * const count = await prisma.transaktion.count({
     *   where: {
     *     // ... the filter for the Transaktions we want to count
     *   }
     * })
    **/
    count<T extends transaktionCountArgs>(
      args?: Subset<T, transaktionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransaktionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaktion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaktionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransaktionAggregateArgs>(args: Subset<T, TransaktionAggregateArgs>): Prisma.PrismaPromise<GetTransaktionAggregateType<T>>

    /**
     * Group by Transaktion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaktionGroupByArgs} args - Group by arguments.
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
      T extends transaktionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transaktionGroupByArgs['orderBy'] }
        : { orderBy?: transaktionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, transaktionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransaktionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the transaktion model
   */
  readonly fields: transaktionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transaktion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transaktionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    aktie<T extends aktieDefaultArgs<ExtArgs> = {}>(args?: Subset<T, aktieDefaultArgs<ExtArgs>>): Prisma__aktieClient<$Result.GetResult<Prisma.$aktiePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the transaktion model
   */
  interface transaktionFieldRefs {
    readonly id: FieldRef<"transaktion", 'Int'>
    readonly version: FieldRef<"transaktion", 'Int'>
    readonly typ: FieldRef<"transaktion", 'transaktionstyp'>
    readonly aktie_id: FieldRef<"transaktion", 'Int'>
    readonly datum: FieldRef<"transaktion", 'DateTime'>
    readonly uhrzeit: FieldRef<"transaktion", 'DateTime'>
    readonly anzahl: FieldRef<"transaktion", 'Int'>
    readonly preis: FieldRef<"transaktion", 'Decimal'>
    readonly gebuehren: FieldRef<"transaktion", 'Decimal'>
    readonly gesamtbetrag: FieldRef<"transaktion", 'Decimal'>
    readonly notiz: FieldRef<"transaktion", 'String'>
    readonly erzeugt: FieldRef<"transaktion", 'DateTime'>
    readonly aktualisiert: FieldRef<"transaktion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * transaktion findUnique
   */
  export type transaktionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaktion
     */
    select?: transaktionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaktion
     */
    omit?: transaktionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaktionInclude<ExtArgs> | null
    /**
     * Filter, which transaktion to fetch.
     */
    where: transaktionWhereUniqueInput
  }

  /**
   * transaktion findUniqueOrThrow
   */
  export type transaktionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaktion
     */
    select?: transaktionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaktion
     */
    omit?: transaktionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaktionInclude<ExtArgs> | null
    /**
     * Filter, which transaktion to fetch.
     */
    where: transaktionWhereUniqueInput
  }

  /**
   * transaktion findFirst
   */
  export type transaktionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaktion
     */
    select?: transaktionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaktion
     */
    omit?: transaktionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaktionInclude<ExtArgs> | null
    /**
     * Filter, which transaktion to fetch.
     */
    where?: transaktionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaktions to fetch.
     */
    orderBy?: transaktionOrderByWithRelationInput | transaktionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transaktions.
     */
    cursor?: transaktionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaktions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaktions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transaktions.
     */
    distinct?: TransaktionScalarFieldEnum | TransaktionScalarFieldEnum[]
  }

  /**
   * transaktion findFirstOrThrow
   */
  export type transaktionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaktion
     */
    select?: transaktionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaktion
     */
    omit?: transaktionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaktionInclude<ExtArgs> | null
    /**
     * Filter, which transaktion to fetch.
     */
    where?: transaktionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaktions to fetch.
     */
    orderBy?: transaktionOrderByWithRelationInput | transaktionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transaktions.
     */
    cursor?: transaktionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaktions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaktions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transaktions.
     */
    distinct?: TransaktionScalarFieldEnum | TransaktionScalarFieldEnum[]
  }

  /**
   * transaktion findMany
   */
  export type transaktionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaktion
     */
    select?: transaktionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaktion
     */
    omit?: transaktionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaktionInclude<ExtArgs> | null
    /**
     * Filter, which transaktions to fetch.
     */
    where?: transaktionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaktions to fetch.
     */
    orderBy?: transaktionOrderByWithRelationInput | transaktionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing transaktions.
     */
    cursor?: transaktionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaktions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaktions.
     */
    skip?: number
    distinct?: TransaktionScalarFieldEnum | TransaktionScalarFieldEnum[]
  }

  /**
   * transaktion create
   */
  export type transaktionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaktion
     */
    select?: transaktionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaktion
     */
    omit?: transaktionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaktionInclude<ExtArgs> | null
    /**
     * The data needed to create a transaktion.
     */
    data: XOR<transaktionCreateInput, transaktionUncheckedCreateInput>
  }

  /**
   * transaktion createMany
   */
  export type transaktionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many transaktions.
     */
    data: transaktionCreateManyInput | transaktionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * transaktion createManyAndReturn
   */
  export type transaktionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaktion
     */
    select?: transaktionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transaktion
     */
    omit?: transaktionOmit<ExtArgs> | null
    /**
     * The data used to create many transaktions.
     */
    data: transaktionCreateManyInput | transaktionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaktionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * transaktion update
   */
  export type transaktionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaktion
     */
    select?: transaktionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaktion
     */
    omit?: transaktionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaktionInclude<ExtArgs> | null
    /**
     * The data needed to update a transaktion.
     */
    data: XOR<transaktionUpdateInput, transaktionUncheckedUpdateInput>
    /**
     * Choose, which transaktion to update.
     */
    where: transaktionWhereUniqueInput
  }

  /**
   * transaktion updateMany
   */
  export type transaktionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update transaktions.
     */
    data: XOR<transaktionUpdateManyMutationInput, transaktionUncheckedUpdateManyInput>
    /**
     * Filter which transaktions to update
     */
    where?: transaktionWhereInput
    /**
     * Limit how many transaktions to update.
     */
    limit?: number
  }

  /**
   * transaktion updateManyAndReturn
   */
  export type transaktionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaktion
     */
    select?: transaktionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transaktion
     */
    omit?: transaktionOmit<ExtArgs> | null
    /**
     * The data used to update transaktions.
     */
    data: XOR<transaktionUpdateManyMutationInput, transaktionUncheckedUpdateManyInput>
    /**
     * Filter which transaktions to update
     */
    where?: transaktionWhereInput
    /**
     * Limit how many transaktions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaktionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * transaktion upsert
   */
  export type transaktionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaktion
     */
    select?: transaktionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaktion
     */
    omit?: transaktionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaktionInclude<ExtArgs> | null
    /**
     * The filter to search for the transaktion to update in case it exists.
     */
    where: transaktionWhereUniqueInput
    /**
     * In case the transaktion found by the `where` argument doesn't exist, create a new transaktion with this data.
     */
    create: XOR<transaktionCreateInput, transaktionUncheckedCreateInput>
    /**
     * In case the transaktion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transaktionUpdateInput, transaktionUncheckedUpdateInput>
  }

  /**
   * transaktion delete
   */
  export type transaktionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaktion
     */
    select?: transaktionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaktion
     */
    omit?: transaktionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaktionInclude<ExtArgs> | null
    /**
     * Filter which transaktion to delete.
     */
    where: transaktionWhereUniqueInput
  }

  /**
   * transaktion deleteMany
   */
  export type transaktionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transaktions to delete
     */
    where?: transaktionWhereInput
    /**
     * Limit how many transaktions to delete.
     */
    limit?: number
  }

  /**
   * transaktion without action
   */
  export type transaktionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaktion
     */
    select?: transaktionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaktion
     */
    omit?: transaktionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaktionInclude<ExtArgs> | null
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


  export const AktieScalarFieldEnum: {
    id: 'id',
    version: 'version',
    isin: 'isin',
    symbol: 'symbol',
    name: 'name',
    branche: 'branche',
    handelsplatz: 'handelsplatz',
    kaufpreis: 'kaufpreis',
    anzahl: 'anzahl',
    kaufdatum: 'kaufdatum',
    dividende: 'dividende',
    letzter_kurs: 'letzter_kurs',
    erzeugt: 'erzeugt',
    aktualisiert: 'aktualisiert'
  };

  export type AktieScalarFieldEnum = (typeof AktieScalarFieldEnum)[keyof typeof AktieScalarFieldEnum]


  export const KursScalarFieldEnum: {
    id: 'id',
    datum: 'datum',
    eroeffnung: 'eroeffnung',
    schluss: 'schluss',
    hoch: 'hoch',
    tief: 'tief',
    volumen: 'volumen',
    aktie_id: 'aktie_id'
  };

  export type KursScalarFieldEnum = (typeof KursScalarFieldEnum)[keyof typeof KursScalarFieldEnum]


  export const TransaktionScalarFieldEnum: {
    id: 'id',
    version: 'version',
    typ: 'typ',
    aktie_id: 'aktie_id',
    datum: 'datum',
    uhrzeit: 'uhrzeit',
    anzahl: 'anzahl',
    preis: 'preis',
    gebuehren: 'gebuehren',
    gesamtbetrag: 'gesamtbetrag',
    notiz: 'notiz',
    erzeugt: 'erzeugt',
    aktualisiert: 'aktualisiert'
  };

  export type TransaktionScalarFieldEnum = (typeof TransaktionScalarFieldEnum)[keyof typeof TransaktionScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'handelsplatz'
   */
  export type EnumhandelsplatzFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'handelsplatz'>
    


  /**
   * Reference to a field of type 'handelsplatz[]'
   */
  export type ListEnumhandelsplatzFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'handelsplatz[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'transaktionstyp'
   */
  export type EnumtransaktionstypFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'transaktionstyp'>
    


  /**
   * Reference to a field of type 'transaktionstyp[]'
   */
  export type ListEnumtransaktionstypFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'transaktionstyp[]'>
    


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


  export type aktieWhereInput = {
    AND?: aktieWhereInput | aktieWhereInput[]
    OR?: aktieWhereInput[]
    NOT?: aktieWhereInput | aktieWhereInput[]
    id?: IntFilter<"aktie"> | number
    version?: IntFilter<"aktie"> | number
    isin?: StringFilter<"aktie"> | string
    symbol?: StringFilter<"aktie"> | string
    name?: StringFilter<"aktie"> | string
    branche?: StringNullableFilter<"aktie"> | string | null
    handelsplatz?: EnumhandelsplatzNullableFilter<"aktie"> | $Enums.handelsplatz | null
    kaufpreis?: DecimalFilter<"aktie"> | Decimal | DecimalJsLike | number | string
    anzahl?: IntFilter<"aktie"> | number
    kaufdatum?: DateTimeNullableFilter<"aktie"> | Date | string | null
    dividende?: DecimalNullableFilter<"aktie"> | Decimal | DecimalJsLike | number | string | null
    letzter_kurs?: DecimalNullableFilter<"aktie"> | Decimal | DecimalJsLike | number | string | null
    erzeugt?: DateTimeFilter<"aktie"> | Date | string
    aktualisiert?: DateTimeFilter<"aktie"> | Date | string
    kurs?: KursListRelationFilter
    transaktion?: TransaktionListRelationFilter
  }

  export type aktieOrderByWithRelationInput = {
    id?: SortOrder
    version?: SortOrder
    isin?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    branche?: SortOrderInput | SortOrder
    handelsplatz?: SortOrderInput | SortOrder
    kaufpreis?: SortOrder
    anzahl?: SortOrder
    kaufdatum?: SortOrderInput | SortOrder
    dividende?: SortOrderInput | SortOrder
    letzter_kurs?: SortOrderInput | SortOrder
    erzeugt?: SortOrder
    aktualisiert?: SortOrder
    kurs?: kursOrderByRelationAggregateInput
    transaktion?: transaktionOrderByRelationAggregateInput
  }

  export type aktieWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    isin?: string
    AND?: aktieWhereInput | aktieWhereInput[]
    OR?: aktieWhereInput[]
    NOT?: aktieWhereInput | aktieWhereInput[]
    version?: IntFilter<"aktie"> | number
    symbol?: StringFilter<"aktie"> | string
    name?: StringFilter<"aktie"> | string
    branche?: StringNullableFilter<"aktie"> | string | null
    handelsplatz?: EnumhandelsplatzNullableFilter<"aktie"> | $Enums.handelsplatz | null
    kaufpreis?: DecimalFilter<"aktie"> | Decimal | DecimalJsLike | number | string
    anzahl?: IntFilter<"aktie"> | number
    kaufdatum?: DateTimeNullableFilter<"aktie"> | Date | string | null
    dividende?: DecimalNullableFilter<"aktie"> | Decimal | DecimalJsLike | number | string | null
    letzter_kurs?: DecimalNullableFilter<"aktie"> | Decimal | DecimalJsLike | number | string | null
    erzeugt?: DateTimeFilter<"aktie"> | Date | string
    aktualisiert?: DateTimeFilter<"aktie"> | Date | string
    kurs?: KursListRelationFilter
    transaktion?: TransaktionListRelationFilter
  }, "id" | "isin">

  export type aktieOrderByWithAggregationInput = {
    id?: SortOrder
    version?: SortOrder
    isin?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    branche?: SortOrderInput | SortOrder
    handelsplatz?: SortOrderInput | SortOrder
    kaufpreis?: SortOrder
    anzahl?: SortOrder
    kaufdatum?: SortOrderInput | SortOrder
    dividende?: SortOrderInput | SortOrder
    letzter_kurs?: SortOrderInput | SortOrder
    erzeugt?: SortOrder
    aktualisiert?: SortOrder
    _count?: aktieCountOrderByAggregateInput
    _avg?: aktieAvgOrderByAggregateInput
    _max?: aktieMaxOrderByAggregateInput
    _min?: aktieMinOrderByAggregateInput
    _sum?: aktieSumOrderByAggregateInput
  }

  export type aktieScalarWhereWithAggregatesInput = {
    AND?: aktieScalarWhereWithAggregatesInput | aktieScalarWhereWithAggregatesInput[]
    OR?: aktieScalarWhereWithAggregatesInput[]
    NOT?: aktieScalarWhereWithAggregatesInput | aktieScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"aktie"> | number
    version?: IntWithAggregatesFilter<"aktie"> | number
    isin?: StringWithAggregatesFilter<"aktie"> | string
    symbol?: StringWithAggregatesFilter<"aktie"> | string
    name?: StringWithAggregatesFilter<"aktie"> | string
    branche?: StringNullableWithAggregatesFilter<"aktie"> | string | null
    handelsplatz?: EnumhandelsplatzNullableWithAggregatesFilter<"aktie"> | $Enums.handelsplatz | null
    kaufpreis?: DecimalWithAggregatesFilter<"aktie"> | Decimal | DecimalJsLike | number | string
    anzahl?: IntWithAggregatesFilter<"aktie"> | number
    kaufdatum?: DateTimeNullableWithAggregatesFilter<"aktie"> | Date | string | null
    dividende?: DecimalNullableWithAggregatesFilter<"aktie"> | Decimal | DecimalJsLike | number | string | null
    letzter_kurs?: DecimalNullableWithAggregatesFilter<"aktie"> | Decimal | DecimalJsLike | number | string | null
    erzeugt?: DateTimeWithAggregatesFilter<"aktie"> | Date | string
    aktualisiert?: DateTimeWithAggregatesFilter<"aktie"> | Date | string
  }

  export type kursWhereInput = {
    AND?: kursWhereInput | kursWhereInput[]
    OR?: kursWhereInput[]
    NOT?: kursWhereInput | kursWhereInput[]
    id?: IntFilter<"kurs"> | number
    datum?: DateTimeFilter<"kurs"> | Date | string
    eroeffnung?: DecimalNullableFilter<"kurs"> | Decimal | DecimalJsLike | number | string | null
    schluss?: DecimalNullableFilter<"kurs"> | Decimal | DecimalJsLike | number | string | null
    hoch?: DecimalNullableFilter<"kurs"> | Decimal | DecimalJsLike | number | string | null
    tief?: DecimalNullableFilter<"kurs"> | Decimal | DecimalJsLike | number | string | null
    volumen?: BigIntNullableFilter<"kurs"> | bigint | number | null
    aktie_id?: IntFilter<"kurs"> | number
    aktie?: XOR<AktieScalarRelationFilter, aktieWhereInput>
  }

  export type kursOrderByWithRelationInput = {
    id?: SortOrder
    datum?: SortOrder
    eroeffnung?: SortOrderInput | SortOrder
    schluss?: SortOrderInput | SortOrder
    hoch?: SortOrderInput | SortOrder
    tief?: SortOrderInput | SortOrder
    volumen?: SortOrderInput | SortOrder
    aktie_id?: SortOrder
    aktie?: aktieOrderByWithRelationInput
  }

  export type kursWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: kursWhereInput | kursWhereInput[]
    OR?: kursWhereInput[]
    NOT?: kursWhereInput | kursWhereInput[]
    datum?: DateTimeFilter<"kurs"> | Date | string
    eroeffnung?: DecimalNullableFilter<"kurs"> | Decimal | DecimalJsLike | number | string | null
    schluss?: DecimalNullableFilter<"kurs"> | Decimal | DecimalJsLike | number | string | null
    hoch?: DecimalNullableFilter<"kurs"> | Decimal | DecimalJsLike | number | string | null
    tief?: DecimalNullableFilter<"kurs"> | Decimal | DecimalJsLike | number | string | null
    volumen?: BigIntNullableFilter<"kurs"> | bigint | number | null
    aktie_id?: IntFilter<"kurs"> | number
    aktie?: XOR<AktieScalarRelationFilter, aktieWhereInput>
  }, "id">

  export type kursOrderByWithAggregationInput = {
    id?: SortOrder
    datum?: SortOrder
    eroeffnung?: SortOrderInput | SortOrder
    schluss?: SortOrderInput | SortOrder
    hoch?: SortOrderInput | SortOrder
    tief?: SortOrderInput | SortOrder
    volumen?: SortOrderInput | SortOrder
    aktie_id?: SortOrder
    _count?: kursCountOrderByAggregateInput
    _avg?: kursAvgOrderByAggregateInput
    _max?: kursMaxOrderByAggregateInput
    _min?: kursMinOrderByAggregateInput
    _sum?: kursSumOrderByAggregateInput
  }

  export type kursScalarWhereWithAggregatesInput = {
    AND?: kursScalarWhereWithAggregatesInput | kursScalarWhereWithAggregatesInput[]
    OR?: kursScalarWhereWithAggregatesInput[]
    NOT?: kursScalarWhereWithAggregatesInput | kursScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"kurs"> | number
    datum?: DateTimeWithAggregatesFilter<"kurs"> | Date | string
    eroeffnung?: DecimalNullableWithAggregatesFilter<"kurs"> | Decimal | DecimalJsLike | number | string | null
    schluss?: DecimalNullableWithAggregatesFilter<"kurs"> | Decimal | DecimalJsLike | number | string | null
    hoch?: DecimalNullableWithAggregatesFilter<"kurs"> | Decimal | DecimalJsLike | number | string | null
    tief?: DecimalNullableWithAggregatesFilter<"kurs"> | Decimal | DecimalJsLike | number | string | null
    volumen?: BigIntNullableWithAggregatesFilter<"kurs"> | bigint | number | null
    aktie_id?: IntWithAggregatesFilter<"kurs"> | number
  }

  export type transaktionWhereInput = {
    AND?: transaktionWhereInput | transaktionWhereInput[]
    OR?: transaktionWhereInput[]
    NOT?: transaktionWhereInput | transaktionWhereInput[]
    id?: IntFilter<"transaktion"> | number
    version?: IntFilter<"transaktion"> | number
    typ?: EnumtransaktionstypFilter<"transaktion"> | $Enums.transaktionstyp
    aktie_id?: IntFilter<"transaktion"> | number
    datum?: DateTimeFilter<"transaktion"> | Date | string
    uhrzeit?: DateTimeNullableFilter<"transaktion"> | Date | string | null
    anzahl?: IntFilter<"transaktion"> | number
    preis?: DecimalFilter<"transaktion"> | Decimal | DecimalJsLike | number | string
    gebuehren?: DecimalFilter<"transaktion"> | Decimal | DecimalJsLike | number | string
    gesamtbetrag?: DecimalFilter<"transaktion"> | Decimal | DecimalJsLike | number | string
    notiz?: StringNullableFilter<"transaktion"> | string | null
    erzeugt?: DateTimeFilter<"transaktion"> | Date | string
    aktualisiert?: DateTimeFilter<"transaktion"> | Date | string
    aktie?: XOR<AktieScalarRelationFilter, aktieWhereInput>
  }

  export type transaktionOrderByWithRelationInput = {
    id?: SortOrder
    version?: SortOrder
    typ?: SortOrder
    aktie_id?: SortOrder
    datum?: SortOrder
    uhrzeit?: SortOrderInput | SortOrder
    anzahl?: SortOrder
    preis?: SortOrder
    gebuehren?: SortOrder
    gesamtbetrag?: SortOrder
    notiz?: SortOrderInput | SortOrder
    erzeugt?: SortOrder
    aktualisiert?: SortOrder
    aktie?: aktieOrderByWithRelationInput
  }

  export type transaktionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: transaktionWhereInput | transaktionWhereInput[]
    OR?: transaktionWhereInput[]
    NOT?: transaktionWhereInput | transaktionWhereInput[]
    version?: IntFilter<"transaktion"> | number
    typ?: EnumtransaktionstypFilter<"transaktion"> | $Enums.transaktionstyp
    aktie_id?: IntFilter<"transaktion"> | number
    datum?: DateTimeFilter<"transaktion"> | Date | string
    uhrzeit?: DateTimeNullableFilter<"transaktion"> | Date | string | null
    anzahl?: IntFilter<"transaktion"> | number
    preis?: DecimalFilter<"transaktion"> | Decimal | DecimalJsLike | number | string
    gebuehren?: DecimalFilter<"transaktion"> | Decimal | DecimalJsLike | number | string
    gesamtbetrag?: DecimalFilter<"transaktion"> | Decimal | DecimalJsLike | number | string
    notiz?: StringNullableFilter<"transaktion"> | string | null
    erzeugt?: DateTimeFilter<"transaktion"> | Date | string
    aktualisiert?: DateTimeFilter<"transaktion"> | Date | string
    aktie?: XOR<AktieScalarRelationFilter, aktieWhereInput>
  }, "id">

  export type transaktionOrderByWithAggregationInput = {
    id?: SortOrder
    version?: SortOrder
    typ?: SortOrder
    aktie_id?: SortOrder
    datum?: SortOrder
    uhrzeit?: SortOrderInput | SortOrder
    anzahl?: SortOrder
    preis?: SortOrder
    gebuehren?: SortOrder
    gesamtbetrag?: SortOrder
    notiz?: SortOrderInput | SortOrder
    erzeugt?: SortOrder
    aktualisiert?: SortOrder
    _count?: transaktionCountOrderByAggregateInput
    _avg?: transaktionAvgOrderByAggregateInput
    _max?: transaktionMaxOrderByAggregateInput
    _min?: transaktionMinOrderByAggregateInput
    _sum?: transaktionSumOrderByAggregateInput
  }

  export type transaktionScalarWhereWithAggregatesInput = {
    AND?: transaktionScalarWhereWithAggregatesInput | transaktionScalarWhereWithAggregatesInput[]
    OR?: transaktionScalarWhereWithAggregatesInput[]
    NOT?: transaktionScalarWhereWithAggregatesInput | transaktionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"transaktion"> | number
    version?: IntWithAggregatesFilter<"transaktion"> | number
    typ?: EnumtransaktionstypWithAggregatesFilter<"transaktion"> | $Enums.transaktionstyp
    aktie_id?: IntWithAggregatesFilter<"transaktion"> | number
    datum?: DateTimeWithAggregatesFilter<"transaktion"> | Date | string
    uhrzeit?: DateTimeNullableWithAggregatesFilter<"transaktion"> | Date | string | null
    anzahl?: IntWithAggregatesFilter<"transaktion"> | number
    preis?: DecimalWithAggregatesFilter<"transaktion"> | Decimal | DecimalJsLike | number | string
    gebuehren?: DecimalWithAggregatesFilter<"transaktion"> | Decimal | DecimalJsLike | number | string
    gesamtbetrag?: DecimalWithAggregatesFilter<"transaktion"> | Decimal | DecimalJsLike | number | string
    notiz?: StringNullableWithAggregatesFilter<"transaktion"> | string | null
    erzeugt?: DateTimeWithAggregatesFilter<"transaktion"> | Date | string
    aktualisiert?: DateTimeWithAggregatesFilter<"transaktion"> | Date | string
  }

  export type aktieCreateInput = {
    version?: number
    isin: string
    symbol: string
    name: string
    branche?: string | null
    handelsplatz?: $Enums.handelsplatz | null
    kaufpreis: Decimal | DecimalJsLike | number | string
    anzahl: number
    kaufdatum?: Date | string | null
    dividende?: Decimal | DecimalJsLike | number | string | null
    letzter_kurs?: Decimal | DecimalJsLike | number | string | null
    erzeugt?: Date | string
    aktualisiert?: Date | string
    kurs?: kursCreateNestedManyWithoutAktieInput
    transaktion?: transaktionCreateNestedManyWithoutAktieInput
  }

  export type aktieUncheckedCreateInput = {
    id?: number
    version?: number
    isin: string
    symbol: string
    name: string
    branche?: string | null
    handelsplatz?: $Enums.handelsplatz | null
    kaufpreis: Decimal | DecimalJsLike | number | string
    anzahl: number
    kaufdatum?: Date | string | null
    dividende?: Decimal | DecimalJsLike | number | string | null
    letzter_kurs?: Decimal | DecimalJsLike | number | string | null
    erzeugt?: Date | string
    aktualisiert?: Date | string
    kurs?: kursUncheckedCreateNestedManyWithoutAktieInput
    transaktion?: transaktionUncheckedCreateNestedManyWithoutAktieInput
  }

  export type aktieUpdateInput = {
    version?: IntFieldUpdateOperationsInput | number
    isin?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    branche?: NullableStringFieldUpdateOperationsInput | string | null
    handelsplatz?: NullableEnumhandelsplatzFieldUpdateOperationsInput | $Enums.handelsplatz | null
    kaufpreis?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    anzahl?: IntFieldUpdateOperationsInput | number
    kaufdatum?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dividende?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    letzter_kurs?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    erzeugt?: DateTimeFieldUpdateOperationsInput | Date | string
    aktualisiert?: DateTimeFieldUpdateOperationsInput | Date | string
    kurs?: kursUpdateManyWithoutAktieNestedInput
    transaktion?: transaktionUpdateManyWithoutAktieNestedInput
  }

  export type aktieUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    isin?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    branche?: NullableStringFieldUpdateOperationsInput | string | null
    handelsplatz?: NullableEnumhandelsplatzFieldUpdateOperationsInput | $Enums.handelsplatz | null
    kaufpreis?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    anzahl?: IntFieldUpdateOperationsInput | number
    kaufdatum?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dividende?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    letzter_kurs?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    erzeugt?: DateTimeFieldUpdateOperationsInput | Date | string
    aktualisiert?: DateTimeFieldUpdateOperationsInput | Date | string
    kurs?: kursUncheckedUpdateManyWithoutAktieNestedInput
    transaktion?: transaktionUncheckedUpdateManyWithoutAktieNestedInput
  }

  export type aktieCreateManyInput = {
    id?: number
    version?: number
    isin: string
    symbol: string
    name: string
    branche?: string | null
    handelsplatz?: $Enums.handelsplatz | null
    kaufpreis: Decimal | DecimalJsLike | number | string
    anzahl: number
    kaufdatum?: Date | string | null
    dividende?: Decimal | DecimalJsLike | number | string | null
    letzter_kurs?: Decimal | DecimalJsLike | number | string | null
    erzeugt?: Date | string
    aktualisiert?: Date | string
  }

  export type aktieUpdateManyMutationInput = {
    version?: IntFieldUpdateOperationsInput | number
    isin?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    branche?: NullableStringFieldUpdateOperationsInput | string | null
    handelsplatz?: NullableEnumhandelsplatzFieldUpdateOperationsInput | $Enums.handelsplatz | null
    kaufpreis?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    anzahl?: IntFieldUpdateOperationsInput | number
    kaufdatum?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dividende?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    letzter_kurs?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    erzeugt?: DateTimeFieldUpdateOperationsInput | Date | string
    aktualisiert?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type aktieUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    isin?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    branche?: NullableStringFieldUpdateOperationsInput | string | null
    handelsplatz?: NullableEnumhandelsplatzFieldUpdateOperationsInput | $Enums.handelsplatz | null
    kaufpreis?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    anzahl?: IntFieldUpdateOperationsInput | number
    kaufdatum?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dividende?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    letzter_kurs?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    erzeugt?: DateTimeFieldUpdateOperationsInput | Date | string
    aktualisiert?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type kursCreateInput = {
    datum: Date | string
    eroeffnung?: Decimal | DecimalJsLike | number | string | null
    schluss?: Decimal | DecimalJsLike | number | string | null
    hoch?: Decimal | DecimalJsLike | number | string | null
    tief?: Decimal | DecimalJsLike | number | string | null
    volumen?: bigint | number | null
    aktie: aktieCreateNestedOneWithoutKursInput
  }

  export type kursUncheckedCreateInput = {
    id?: number
    datum: Date | string
    eroeffnung?: Decimal | DecimalJsLike | number | string | null
    schluss?: Decimal | DecimalJsLike | number | string | null
    hoch?: Decimal | DecimalJsLike | number | string | null
    tief?: Decimal | DecimalJsLike | number | string | null
    volumen?: bigint | number | null
    aktie_id: number
  }

  export type kursUpdateInput = {
    datum?: DateTimeFieldUpdateOperationsInput | Date | string
    eroeffnung?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    schluss?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hoch?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tief?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volumen?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    aktie?: aktieUpdateOneRequiredWithoutKursNestedInput
  }

  export type kursUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    datum?: DateTimeFieldUpdateOperationsInput | Date | string
    eroeffnung?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    schluss?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hoch?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tief?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volumen?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    aktie_id?: IntFieldUpdateOperationsInput | number
  }

  export type kursCreateManyInput = {
    id?: number
    datum: Date | string
    eroeffnung?: Decimal | DecimalJsLike | number | string | null
    schluss?: Decimal | DecimalJsLike | number | string | null
    hoch?: Decimal | DecimalJsLike | number | string | null
    tief?: Decimal | DecimalJsLike | number | string | null
    volumen?: bigint | number | null
    aktie_id: number
  }

  export type kursUpdateManyMutationInput = {
    datum?: DateTimeFieldUpdateOperationsInput | Date | string
    eroeffnung?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    schluss?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hoch?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tief?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volumen?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type kursUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    datum?: DateTimeFieldUpdateOperationsInput | Date | string
    eroeffnung?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    schluss?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hoch?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tief?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volumen?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    aktie_id?: IntFieldUpdateOperationsInput | number
  }

  export type transaktionCreateInput = {
    version?: number
    typ: $Enums.transaktionstyp
    datum: Date | string
    uhrzeit?: Date | string | null
    anzahl: number
    preis: Decimal | DecimalJsLike | number | string
    gebuehren?: Decimal | DecimalJsLike | number | string
    gesamtbetrag: Decimal | DecimalJsLike | number | string
    notiz?: string | null
    erzeugt?: Date | string
    aktualisiert?: Date | string
    aktie: aktieCreateNestedOneWithoutTransaktionInput
  }

  export type transaktionUncheckedCreateInput = {
    id?: number
    version?: number
    typ: $Enums.transaktionstyp
    aktie_id: number
    datum: Date | string
    uhrzeit?: Date | string | null
    anzahl: number
    preis: Decimal | DecimalJsLike | number | string
    gebuehren?: Decimal | DecimalJsLike | number | string
    gesamtbetrag: Decimal | DecimalJsLike | number | string
    notiz?: string | null
    erzeugt?: Date | string
    aktualisiert?: Date | string
  }

  export type transaktionUpdateInput = {
    version?: IntFieldUpdateOperationsInput | number
    typ?: EnumtransaktionstypFieldUpdateOperationsInput | $Enums.transaktionstyp
    datum?: DateTimeFieldUpdateOperationsInput | Date | string
    uhrzeit?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    anzahl?: IntFieldUpdateOperationsInput | number
    preis?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    gebuehren?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    gesamtbetrag?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notiz?: NullableStringFieldUpdateOperationsInput | string | null
    erzeugt?: DateTimeFieldUpdateOperationsInput | Date | string
    aktualisiert?: DateTimeFieldUpdateOperationsInput | Date | string
    aktie?: aktieUpdateOneRequiredWithoutTransaktionNestedInput
  }

  export type transaktionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    typ?: EnumtransaktionstypFieldUpdateOperationsInput | $Enums.transaktionstyp
    aktie_id?: IntFieldUpdateOperationsInput | number
    datum?: DateTimeFieldUpdateOperationsInput | Date | string
    uhrzeit?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    anzahl?: IntFieldUpdateOperationsInput | number
    preis?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    gebuehren?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    gesamtbetrag?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notiz?: NullableStringFieldUpdateOperationsInput | string | null
    erzeugt?: DateTimeFieldUpdateOperationsInput | Date | string
    aktualisiert?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transaktionCreateManyInput = {
    id?: number
    version?: number
    typ: $Enums.transaktionstyp
    aktie_id: number
    datum: Date | string
    uhrzeit?: Date | string | null
    anzahl: number
    preis: Decimal | DecimalJsLike | number | string
    gebuehren?: Decimal | DecimalJsLike | number | string
    gesamtbetrag: Decimal | DecimalJsLike | number | string
    notiz?: string | null
    erzeugt?: Date | string
    aktualisiert?: Date | string
  }

  export type transaktionUpdateManyMutationInput = {
    version?: IntFieldUpdateOperationsInput | number
    typ?: EnumtransaktionstypFieldUpdateOperationsInput | $Enums.transaktionstyp
    datum?: DateTimeFieldUpdateOperationsInput | Date | string
    uhrzeit?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    anzahl?: IntFieldUpdateOperationsInput | number
    preis?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    gebuehren?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    gesamtbetrag?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notiz?: NullableStringFieldUpdateOperationsInput | string | null
    erzeugt?: DateTimeFieldUpdateOperationsInput | Date | string
    aktualisiert?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transaktionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    typ?: EnumtransaktionstypFieldUpdateOperationsInput | $Enums.transaktionstyp
    aktie_id?: IntFieldUpdateOperationsInput | number
    datum?: DateTimeFieldUpdateOperationsInput | Date | string
    uhrzeit?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    anzahl?: IntFieldUpdateOperationsInput | number
    preis?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    gebuehren?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    gesamtbetrag?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notiz?: NullableStringFieldUpdateOperationsInput | string | null
    erzeugt?: DateTimeFieldUpdateOperationsInput | Date | string
    aktualisiert?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumhandelsplatzNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.handelsplatz | EnumhandelsplatzFieldRefInput<$PrismaModel> | null
    in?: $Enums.handelsplatz[] | ListEnumhandelsplatzFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.handelsplatz[] | ListEnumhandelsplatzFieldRefInput<$PrismaModel> | null
    not?: NestedEnumhandelsplatzNullableFilter<$PrismaModel> | $Enums.handelsplatz | null
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
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

  export type KursListRelationFilter = {
    every?: kursWhereInput
    some?: kursWhereInput
    none?: kursWhereInput
  }

  export type TransaktionListRelationFilter = {
    every?: transaktionWhereInput
    some?: transaktionWhereInput
    none?: transaktionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type kursOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type transaktionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type aktieCountOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    isin?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    branche?: SortOrder
    handelsplatz?: SortOrder
    kaufpreis?: SortOrder
    anzahl?: SortOrder
    kaufdatum?: SortOrder
    dividende?: SortOrder
    letzter_kurs?: SortOrder
    erzeugt?: SortOrder
    aktualisiert?: SortOrder
  }

  export type aktieAvgOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    kaufpreis?: SortOrder
    anzahl?: SortOrder
    dividende?: SortOrder
    letzter_kurs?: SortOrder
  }

  export type aktieMaxOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    isin?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    branche?: SortOrder
    handelsplatz?: SortOrder
    kaufpreis?: SortOrder
    anzahl?: SortOrder
    kaufdatum?: SortOrder
    dividende?: SortOrder
    letzter_kurs?: SortOrder
    erzeugt?: SortOrder
    aktualisiert?: SortOrder
  }

  export type aktieMinOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    isin?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    branche?: SortOrder
    handelsplatz?: SortOrder
    kaufpreis?: SortOrder
    anzahl?: SortOrder
    kaufdatum?: SortOrder
    dividende?: SortOrder
    letzter_kurs?: SortOrder
    erzeugt?: SortOrder
    aktualisiert?: SortOrder
  }

  export type aktieSumOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    kaufpreis?: SortOrder
    anzahl?: SortOrder
    dividende?: SortOrder
    letzter_kurs?: SortOrder
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

  export type EnumhandelsplatzNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.handelsplatz | EnumhandelsplatzFieldRefInput<$PrismaModel> | null
    in?: $Enums.handelsplatz[] | ListEnumhandelsplatzFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.handelsplatz[] | ListEnumhandelsplatzFieldRefInput<$PrismaModel> | null
    not?: NestedEnumhandelsplatzNullableWithAggregatesFilter<$PrismaModel> | $Enums.handelsplatz | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumhandelsplatzNullableFilter<$PrismaModel>
    _max?: NestedEnumhandelsplatzNullableFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
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

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type AktieScalarRelationFilter = {
    is?: aktieWhereInput
    isNot?: aktieWhereInput
  }

  export type kursCountOrderByAggregateInput = {
    id?: SortOrder
    datum?: SortOrder
    eroeffnung?: SortOrder
    schluss?: SortOrder
    hoch?: SortOrder
    tief?: SortOrder
    volumen?: SortOrder
    aktie_id?: SortOrder
  }

  export type kursAvgOrderByAggregateInput = {
    id?: SortOrder
    eroeffnung?: SortOrder
    schluss?: SortOrder
    hoch?: SortOrder
    tief?: SortOrder
    volumen?: SortOrder
    aktie_id?: SortOrder
  }

  export type kursMaxOrderByAggregateInput = {
    id?: SortOrder
    datum?: SortOrder
    eroeffnung?: SortOrder
    schluss?: SortOrder
    hoch?: SortOrder
    tief?: SortOrder
    volumen?: SortOrder
    aktie_id?: SortOrder
  }

  export type kursMinOrderByAggregateInput = {
    id?: SortOrder
    datum?: SortOrder
    eroeffnung?: SortOrder
    schluss?: SortOrder
    hoch?: SortOrder
    tief?: SortOrder
    volumen?: SortOrder
    aktie_id?: SortOrder
  }

  export type kursSumOrderByAggregateInput = {
    id?: SortOrder
    eroeffnung?: SortOrder
    schluss?: SortOrder
    hoch?: SortOrder
    tief?: SortOrder
    volumen?: SortOrder
    aktie_id?: SortOrder
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type EnumtransaktionstypFilter<$PrismaModel = never> = {
    equals?: $Enums.transaktionstyp | EnumtransaktionstypFieldRefInput<$PrismaModel>
    in?: $Enums.transaktionstyp[] | ListEnumtransaktionstypFieldRefInput<$PrismaModel>
    notIn?: $Enums.transaktionstyp[] | ListEnumtransaktionstypFieldRefInput<$PrismaModel>
    not?: NestedEnumtransaktionstypFilter<$PrismaModel> | $Enums.transaktionstyp
  }

  export type transaktionCountOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    typ?: SortOrder
    aktie_id?: SortOrder
    datum?: SortOrder
    uhrzeit?: SortOrder
    anzahl?: SortOrder
    preis?: SortOrder
    gebuehren?: SortOrder
    gesamtbetrag?: SortOrder
    notiz?: SortOrder
    erzeugt?: SortOrder
    aktualisiert?: SortOrder
  }

  export type transaktionAvgOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    aktie_id?: SortOrder
    anzahl?: SortOrder
    preis?: SortOrder
    gebuehren?: SortOrder
    gesamtbetrag?: SortOrder
  }

  export type transaktionMaxOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    typ?: SortOrder
    aktie_id?: SortOrder
    datum?: SortOrder
    uhrzeit?: SortOrder
    anzahl?: SortOrder
    preis?: SortOrder
    gebuehren?: SortOrder
    gesamtbetrag?: SortOrder
    notiz?: SortOrder
    erzeugt?: SortOrder
    aktualisiert?: SortOrder
  }

  export type transaktionMinOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    typ?: SortOrder
    aktie_id?: SortOrder
    datum?: SortOrder
    uhrzeit?: SortOrder
    anzahl?: SortOrder
    preis?: SortOrder
    gebuehren?: SortOrder
    gesamtbetrag?: SortOrder
    notiz?: SortOrder
    erzeugt?: SortOrder
    aktualisiert?: SortOrder
  }

  export type transaktionSumOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    aktie_id?: SortOrder
    anzahl?: SortOrder
    preis?: SortOrder
    gebuehren?: SortOrder
    gesamtbetrag?: SortOrder
  }

  export type EnumtransaktionstypWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.transaktionstyp | EnumtransaktionstypFieldRefInput<$PrismaModel>
    in?: $Enums.transaktionstyp[] | ListEnumtransaktionstypFieldRefInput<$PrismaModel>
    notIn?: $Enums.transaktionstyp[] | ListEnumtransaktionstypFieldRefInput<$PrismaModel>
    not?: NestedEnumtransaktionstypWithAggregatesFilter<$PrismaModel> | $Enums.transaktionstyp
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtransaktionstypFilter<$PrismaModel>
    _max?: NestedEnumtransaktionstypFilter<$PrismaModel>
  }

  export type kursCreateNestedManyWithoutAktieInput = {
    create?: XOR<kursCreateWithoutAktieInput, kursUncheckedCreateWithoutAktieInput> | kursCreateWithoutAktieInput[] | kursUncheckedCreateWithoutAktieInput[]
    connectOrCreate?: kursCreateOrConnectWithoutAktieInput | kursCreateOrConnectWithoutAktieInput[]
    createMany?: kursCreateManyAktieInputEnvelope
    connect?: kursWhereUniqueInput | kursWhereUniqueInput[]
  }

  export type transaktionCreateNestedManyWithoutAktieInput = {
    create?: XOR<transaktionCreateWithoutAktieInput, transaktionUncheckedCreateWithoutAktieInput> | transaktionCreateWithoutAktieInput[] | transaktionUncheckedCreateWithoutAktieInput[]
    connectOrCreate?: transaktionCreateOrConnectWithoutAktieInput | transaktionCreateOrConnectWithoutAktieInput[]
    createMany?: transaktionCreateManyAktieInputEnvelope
    connect?: transaktionWhereUniqueInput | transaktionWhereUniqueInput[]
  }

  export type kursUncheckedCreateNestedManyWithoutAktieInput = {
    create?: XOR<kursCreateWithoutAktieInput, kursUncheckedCreateWithoutAktieInput> | kursCreateWithoutAktieInput[] | kursUncheckedCreateWithoutAktieInput[]
    connectOrCreate?: kursCreateOrConnectWithoutAktieInput | kursCreateOrConnectWithoutAktieInput[]
    createMany?: kursCreateManyAktieInputEnvelope
    connect?: kursWhereUniqueInput | kursWhereUniqueInput[]
  }

  export type transaktionUncheckedCreateNestedManyWithoutAktieInput = {
    create?: XOR<transaktionCreateWithoutAktieInput, transaktionUncheckedCreateWithoutAktieInput> | transaktionCreateWithoutAktieInput[] | transaktionUncheckedCreateWithoutAktieInput[]
    connectOrCreate?: transaktionCreateOrConnectWithoutAktieInput | transaktionCreateOrConnectWithoutAktieInput[]
    createMany?: transaktionCreateManyAktieInputEnvelope
    connect?: transaktionWhereUniqueInput | transaktionWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableEnumhandelsplatzFieldUpdateOperationsInput = {
    set?: $Enums.handelsplatz | null
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type kursUpdateManyWithoutAktieNestedInput = {
    create?: XOR<kursCreateWithoutAktieInput, kursUncheckedCreateWithoutAktieInput> | kursCreateWithoutAktieInput[] | kursUncheckedCreateWithoutAktieInput[]
    connectOrCreate?: kursCreateOrConnectWithoutAktieInput | kursCreateOrConnectWithoutAktieInput[]
    upsert?: kursUpsertWithWhereUniqueWithoutAktieInput | kursUpsertWithWhereUniqueWithoutAktieInput[]
    createMany?: kursCreateManyAktieInputEnvelope
    set?: kursWhereUniqueInput | kursWhereUniqueInput[]
    disconnect?: kursWhereUniqueInput | kursWhereUniqueInput[]
    delete?: kursWhereUniqueInput | kursWhereUniqueInput[]
    connect?: kursWhereUniqueInput | kursWhereUniqueInput[]
    update?: kursUpdateWithWhereUniqueWithoutAktieInput | kursUpdateWithWhereUniqueWithoutAktieInput[]
    updateMany?: kursUpdateManyWithWhereWithoutAktieInput | kursUpdateManyWithWhereWithoutAktieInput[]
    deleteMany?: kursScalarWhereInput | kursScalarWhereInput[]
  }

  export type transaktionUpdateManyWithoutAktieNestedInput = {
    create?: XOR<transaktionCreateWithoutAktieInput, transaktionUncheckedCreateWithoutAktieInput> | transaktionCreateWithoutAktieInput[] | transaktionUncheckedCreateWithoutAktieInput[]
    connectOrCreate?: transaktionCreateOrConnectWithoutAktieInput | transaktionCreateOrConnectWithoutAktieInput[]
    upsert?: transaktionUpsertWithWhereUniqueWithoutAktieInput | transaktionUpsertWithWhereUniqueWithoutAktieInput[]
    createMany?: transaktionCreateManyAktieInputEnvelope
    set?: transaktionWhereUniqueInput | transaktionWhereUniqueInput[]
    disconnect?: transaktionWhereUniqueInput | transaktionWhereUniqueInput[]
    delete?: transaktionWhereUniqueInput | transaktionWhereUniqueInput[]
    connect?: transaktionWhereUniqueInput | transaktionWhereUniqueInput[]
    update?: transaktionUpdateWithWhereUniqueWithoutAktieInput | transaktionUpdateWithWhereUniqueWithoutAktieInput[]
    updateMany?: transaktionUpdateManyWithWhereWithoutAktieInput | transaktionUpdateManyWithWhereWithoutAktieInput[]
    deleteMany?: transaktionScalarWhereInput | transaktionScalarWhereInput[]
  }

  export type kursUncheckedUpdateManyWithoutAktieNestedInput = {
    create?: XOR<kursCreateWithoutAktieInput, kursUncheckedCreateWithoutAktieInput> | kursCreateWithoutAktieInput[] | kursUncheckedCreateWithoutAktieInput[]
    connectOrCreate?: kursCreateOrConnectWithoutAktieInput | kursCreateOrConnectWithoutAktieInput[]
    upsert?: kursUpsertWithWhereUniqueWithoutAktieInput | kursUpsertWithWhereUniqueWithoutAktieInput[]
    createMany?: kursCreateManyAktieInputEnvelope
    set?: kursWhereUniqueInput | kursWhereUniqueInput[]
    disconnect?: kursWhereUniqueInput | kursWhereUniqueInput[]
    delete?: kursWhereUniqueInput | kursWhereUniqueInput[]
    connect?: kursWhereUniqueInput | kursWhereUniqueInput[]
    update?: kursUpdateWithWhereUniqueWithoutAktieInput | kursUpdateWithWhereUniqueWithoutAktieInput[]
    updateMany?: kursUpdateManyWithWhereWithoutAktieInput | kursUpdateManyWithWhereWithoutAktieInput[]
    deleteMany?: kursScalarWhereInput | kursScalarWhereInput[]
  }

  export type transaktionUncheckedUpdateManyWithoutAktieNestedInput = {
    create?: XOR<transaktionCreateWithoutAktieInput, transaktionUncheckedCreateWithoutAktieInput> | transaktionCreateWithoutAktieInput[] | transaktionUncheckedCreateWithoutAktieInput[]
    connectOrCreate?: transaktionCreateOrConnectWithoutAktieInput | transaktionCreateOrConnectWithoutAktieInput[]
    upsert?: transaktionUpsertWithWhereUniqueWithoutAktieInput | transaktionUpsertWithWhereUniqueWithoutAktieInput[]
    createMany?: transaktionCreateManyAktieInputEnvelope
    set?: transaktionWhereUniqueInput | transaktionWhereUniqueInput[]
    disconnect?: transaktionWhereUniqueInput | transaktionWhereUniqueInput[]
    delete?: transaktionWhereUniqueInput | transaktionWhereUniqueInput[]
    connect?: transaktionWhereUniqueInput | transaktionWhereUniqueInput[]
    update?: transaktionUpdateWithWhereUniqueWithoutAktieInput | transaktionUpdateWithWhereUniqueWithoutAktieInput[]
    updateMany?: transaktionUpdateManyWithWhereWithoutAktieInput | transaktionUpdateManyWithWhereWithoutAktieInput[]
    deleteMany?: transaktionScalarWhereInput | transaktionScalarWhereInput[]
  }

  export type aktieCreateNestedOneWithoutKursInput = {
    create?: XOR<aktieCreateWithoutKursInput, aktieUncheckedCreateWithoutKursInput>
    connectOrCreate?: aktieCreateOrConnectWithoutKursInput
    connect?: aktieWhereUniqueInput
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type aktieUpdateOneRequiredWithoutKursNestedInput = {
    create?: XOR<aktieCreateWithoutKursInput, aktieUncheckedCreateWithoutKursInput>
    connectOrCreate?: aktieCreateOrConnectWithoutKursInput
    upsert?: aktieUpsertWithoutKursInput
    connect?: aktieWhereUniqueInput
    update?: XOR<XOR<aktieUpdateToOneWithWhereWithoutKursInput, aktieUpdateWithoutKursInput>, aktieUncheckedUpdateWithoutKursInput>
  }

  export type aktieCreateNestedOneWithoutTransaktionInput = {
    create?: XOR<aktieCreateWithoutTransaktionInput, aktieUncheckedCreateWithoutTransaktionInput>
    connectOrCreate?: aktieCreateOrConnectWithoutTransaktionInput
    connect?: aktieWhereUniqueInput
  }

  export type EnumtransaktionstypFieldUpdateOperationsInput = {
    set?: $Enums.transaktionstyp
  }

  export type aktieUpdateOneRequiredWithoutTransaktionNestedInput = {
    create?: XOR<aktieCreateWithoutTransaktionInput, aktieUncheckedCreateWithoutTransaktionInput>
    connectOrCreate?: aktieCreateOrConnectWithoutTransaktionInput
    upsert?: aktieUpsertWithoutTransaktionInput
    connect?: aktieWhereUniqueInput
    update?: XOR<XOR<aktieUpdateToOneWithWhereWithoutTransaktionInput, aktieUpdateWithoutTransaktionInput>, aktieUncheckedUpdateWithoutTransaktionInput>
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

  export type NestedEnumhandelsplatzNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.handelsplatz | EnumhandelsplatzFieldRefInput<$PrismaModel> | null
    in?: $Enums.handelsplatz[] | ListEnumhandelsplatzFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.handelsplatz[] | ListEnumhandelsplatzFieldRefInput<$PrismaModel> | null
    not?: NestedEnumhandelsplatzNullableFilter<$PrismaModel> | $Enums.handelsplatz | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
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

  export type NestedEnumhandelsplatzNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.handelsplatz | EnumhandelsplatzFieldRefInput<$PrismaModel> | null
    in?: $Enums.handelsplatz[] | ListEnumhandelsplatzFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.handelsplatz[] | ListEnumhandelsplatzFieldRefInput<$PrismaModel> | null
    not?: NestedEnumhandelsplatzNullableWithAggregatesFilter<$PrismaModel> | $Enums.handelsplatz | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumhandelsplatzNullableFilter<$PrismaModel>
    _max?: NestedEnumhandelsplatzNullableFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
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

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
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

  export type NestedEnumtransaktionstypFilter<$PrismaModel = never> = {
    equals?: $Enums.transaktionstyp | EnumtransaktionstypFieldRefInput<$PrismaModel>
    in?: $Enums.transaktionstyp[] | ListEnumtransaktionstypFieldRefInput<$PrismaModel>
    notIn?: $Enums.transaktionstyp[] | ListEnumtransaktionstypFieldRefInput<$PrismaModel>
    not?: NestedEnumtransaktionstypFilter<$PrismaModel> | $Enums.transaktionstyp
  }

  export type NestedEnumtransaktionstypWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.transaktionstyp | EnumtransaktionstypFieldRefInput<$PrismaModel>
    in?: $Enums.transaktionstyp[] | ListEnumtransaktionstypFieldRefInput<$PrismaModel>
    notIn?: $Enums.transaktionstyp[] | ListEnumtransaktionstypFieldRefInput<$PrismaModel>
    not?: NestedEnumtransaktionstypWithAggregatesFilter<$PrismaModel> | $Enums.transaktionstyp
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtransaktionstypFilter<$PrismaModel>
    _max?: NestedEnumtransaktionstypFilter<$PrismaModel>
  }

  export type kursCreateWithoutAktieInput = {
    datum: Date | string
    eroeffnung?: Decimal | DecimalJsLike | number | string | null
    schluss?: Decimal | DecimalJsLike | number | string | null
    hoch?: Decimal | DecimalJsLike | number | string | null
    tief?: Decimal | DecimalJsLike | number | string | null
    volumen?: bigint | number | null
  }

  export type kursUncheckedCreateWithoutAktieInput = {
    id?: number
    datum: Date | string
    eroeffnung?: Decimal | DecimalJsLike | number | string | null
    schluss?: Decimal | DecimalJsLike | number | string | null
    hoch?: Decimal | DecimalJsLike | number | string | null
    tief?: Decimal | DecimalJsLike | number | string | null
    volumen?: bigint | number | null
  }

  export type kursCreateOrConnectWithoutAktieInput = {
    where: kursWhereUniqueInput
    create: XOR<kursCreateWithoutAktieInput, kursUncheckedCreateWithoutAktieInput>
  }

  export type kursCreateManyAktieInputEnvelope = {
    data: kursCreateManyAktieInput | kursCreateManyAktieInput[]
    skipDuplicates?: boolean
  }

  export type transaktionCreateWithoutAktieInput = {
    version?: number
    typ: $Enums.transaktionstyp
    datum: Date | string
    uhrzeit?: Date | string | null
    anzahl: number
    preis: Decimal | DecimalJsLike | number | string
    gebuehren?: Decimal | DecimalJsLike | number | string
    gesamtbetrag: Decimal | DecimalJsLike | number | string
    notiz?: string | null
    erzeugt?: Date | string
    aktualisiert?: Date | string
  }

  export type transaktionUncheckedCreateWithoutAktieInput = {
    id?: number
    version?: number
    typ: $Enums.transaktionstyp
    datum: Date | string
    uhrzeit?: Date | string | null
    anzahl: number
    preis: Decimal | DecimalJsLike | number | string
    gebuehren?: Decimal | DecimalJsLike | number | string
    gesamtbetrag: Decimal | DecimalJsLike | number | string
    notiz?: string | null
    erzeugt?: Date | string
    aktualisiert?: Date | string
  }

  export type transaktionCreateOrConnectWithoutAktieInput = {
    where: transaktionWhereUniqueInput
    create: XOR<transaktionCreateWithoutAktieInput, transaktionUncheckedCreateWithoutAktieInput>
  }

  export type transaktionCreateManyAktieInputEnvelope = {
    data: transaktionCreateManyAktieInput | transaktionCreateManyAktieInput[]
    skipDuplicates?: boolean
  }

  export type kursUpsertWithWhereUniqueWithoutAktieInput = {
    where: kursWhereUniqueInput
    update: XOR<kursUpdateWithoutAktieInput, kursUncheckedUpdateWithoutAktieInput>
    create: XOR<kursCreateWithoutAktieInput, kursUncheckedCreateWithoutAktieInput>
  }

  export type kursUpdateWithWhereUniqueWithoutAktieInput = {
    where: kursWhereUniqueInput
    data: XOR<kursUpdateWithoutAktieInput, kursUncheckedUpdateWithoutAktieInput>
  }

  export type kursUpdateManyWithWhereWithoutAktieInput = {
    where: kursScalarWhereInput
    data: XOR<kursUpdateManyMutationInput, kursUncheckedUpdateManyWithoutAktieInput>
  }

  export type kursScalarWhereInput = {
    AND?: kursScalarWhereInput | kursScalarWhereInput[]
    OR?: kursScalarWhereInput[]
    NOT?: kursScalarWhereInput | kursScalarWhereInput[]
    id?: IntFilter<"kurs"> | number
    datum?: DateTimeFilter<"kurs"> | Date | string
    eroeffnung?: DecimalNullableFilter<"kurs"> | Decimal | DecimalJsLike | number | string | null
    schluss?: DecimalNullableFilter<"kurs"> | Decimal | DecimalJsLike | number | string | null
    hoch?: DecimalNullableFilter<"kurs"> | Decimal | DecimalJsLike | number | string | null
    tief?: DecimalNullableFilter<"kurs"> | Decimal | DecimalJsLike | number | string | null
    volumen?: BigIntNullableFilter<"kurs"> | bigint | number | null
    aktie_id?: IntFilter<"kurs"> | number
  }

  export type transaktionUpsertWithWhereUniqueWithoutAktieInput = {
    where: transaktionWhereUniqueInput
    update: XOR<transaktionUpdateWithoutAktieInput, transaktionUncheckedUpdateWithoutAktieInput>
    create: XOR<transaktionCreateWithoutAktieInput, transaktionUncheckedCreateWithoutAktieInput>
  }

  export type transaktionUpdateWithWhereUniqueWithoutAktieInput = {
    where: transaktionWhereUniqueInput
    data: XOR<transaktionUpdateWithoutAktieInput, transaktionUncheckedUpdateWithoutAktieInput>
  }

  export type transaktionUpdateManyWithWhereWithoutAktieInput = {
    where: transaktionScalarWhereInput
    data: XOR<transaktionUpdateManyMutationInput, transaktionUncheckedUpdateManyWithoutAktieInput>
  }

  export type transaktionScalarWhereInput = {
    AND?: transaktionScalarWhereInput | transaktionScalarWhereInput[]
    OR?: transaktionScalarWhereInput[]
    NOT?: transaktionScalarWhereInput | transaktionScalarWhereInput[]
    id?: IntFilter<"transaktion"> | number
    version?: IntFilter<"transaktion"> | number
    typ?: EnumtransaktionstypFilter<"transaktion"> | $Enums.transaktionstyp
    aktie_id?: IntFilter<"transaktion"> | number
    datum?: DateTimeFilter<"transaktion"> | Date | string
    uhrzeit?: DateTimeNullableFilter<"transaktion"> | Date | string | null
    anzahl?: IntFilter<"transaktion"> | number
    preis?: DecimalFilter<"transaktion"> | Decimal | DecimalJsLike | number | string
    gebuehren?: DecimalFilter<"transaktion"> | Decimal | DecimalJsLike | number | string
    gesamtbetrag?: DecimalFilter<"transaktion"> | Decimal | DecimalJsLike | number | string
    notiz?: StringNullableFilter<"transaktion"> | string | null
    erzeugt?: DateTimeFilter<"transaktion"> | Date | string
    aktualisiert?: DateTimeFilter<"transaktion"> | Date | string
  }

  export type aktieCreateWithoutKursInput = {
    version?: number
    isin: string
    symbol: string
    name: string
    branche?: string | null
    handelsplatz?: $Enums.handelsplatz | null
    kaufpreis: Decimal | DecimalJsLike | number | string
    anzahl: number
    kaufdatum?: Date | string | null
    dividende?: Decimal | DecimalJsLike | number | string | null
    letzter_kurs?: Decimal | DecimalJsLike | number | string | null
    erzeugt?: Date | string
    aktualisiert?: Date | string
    transaktion?: transaktionCreateNestedManyWithoutAktieInput
  }

  export type aktieUncheckedCreateWithoutKursInput = {
    id?: number
    version?: number
    isin: string
    symbol: string
    name: string
    branche?: string | null
    handelsplatz?: $Enums.handelsplatz | null
    kaufpreis: Decimal | DecimalJsLike | number | string
    anzahl: number
    kaufdatum?: Date | string | null
    dividende?: Decimal | DecimalJsLike | number | string | null
    letzter_kurs?: Decimal | DecimalJsLike | number | string | null
    erzeugt?: Date | string
    aktualisiert?: Date | string
    transaktion?: transaktionUncheckedCreateNestedManyWithoutAktieInput
  }

  export type aktieCreateOrConnectWithoutKursInput = {
    where: aktieWhereUniqueInput
    create: XOR<aktieCreateWithoutKursInput, aktieUncheckedCreateWithoutKursInput>
  }

  export type aktieUpsertWithoutKursInput = {
    update: XOR<aktieUpdateWithoutKursInput, aktieUncheckedUpdateWithoutKursInput>
    create: XOR<aktieCreateWithoutKursInput, aktieUncheckedCreateWithoutKursInput>
    where?: aktieWhereInput
  }

  export type aktieUpdateToOneWithWhereWithoutKursInput = {
    where?: aktieWhereInput
    data: XOR<aktieUpdateWithoutKursInput, aktieUncheckedUpdateWithoutKursInput>
  }

  export type aktieUpdateWithoutKursInput = {
    version?: IntFieldUpdateOperationsInput | number
    isin?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    branche?: NullableStringFieldUpdateOperationsInput | string | null
    handelsplatz?: NullableEnumhandelsplatzFieldUpdateOperationsInput | $Enums.handelsplatz | null
    kaufpreis?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    anzahl?: IntFieldUpdateOperationsInput | number
    kaufdatum?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dividende?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    letzter_kurs?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    erzeugt?: DateTimeFieldUpdateOperationsInput | Date | string
    aktualisiert?: DateTimeFieldUpdateOperationsInput | Date | string
    transaktion?: transaktionUpdateManyWithoutAktieNestedInput
  }

  export type aktieUncheckedUpdateWithoutKursInput = {
    id?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    isin?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    branche?: NullableStringFieldUpdateOperationsInput | string | null
    handelsplatz?: NullableEnumhandelsplatzFieldUpdateOperationsInput | $Enums.handelsplatz | null
    kaufpreis?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    anzahl?: IntFieldUpdateOperationsInput | number
    kaufdatum?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dividende?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    letzter_kurs?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    erzeugt?: DateTimeFieldUpdateOperationsInput | Date | string
    aktualisiert?: DateTimeFieldUpdateOperationsInput | Date | string
    transaktion?: transaktionUncheckedUpdateManyWithoutAktieNestedInput
  }

  export type aktieCreateWithoutTransaktionInput = {
    version?: number
    isin: string
    symbol: string
    name: string
    branche?: string | null
    handelsplatz?: $Enums.handelsplatz | null
    kaufpreis: Decimal | DecimalJsLike | number | string
    anzahl: number
    kaufdatum?: Date | string | null
    dividende?: Decimal | DecimalJsLike | number | string | null
    letzter_kurs?: Decimal | DecimalJsLike | number | string | null
    erzeugt?: Date | string
    aktualisiert?: Date | string
    kurs?: kursCreateNestedManyWithoutAktieInput
  }

  export type aktieUncheckedCreateWithoutTransaktionInput = {
    id?: number
    version?: number
    isin: string
    symbol: string
    name: string
    branche?: string | null
    handelsplatz?: $Enums.handelsplatz | null
    kaufpreis: Decimal | DecimalJsLike | number | string
    anzahl: number
    kaufdatum?: Date | string | null
    dividende?: Decimal | DecimalJsLike | number | string | null
    letzter_kurs?: Decimal | DecimalJsLike | number | string | null
    erzeugt?: Date | string
    aktualisiert?: Date | string
    kurs?: kursUncheckedCreateNestedManyWithoutAktieInput
  }

  export type aktieCreateOrConnectWithoutTransaktionInput = {
    where: aktieWhereUniqueInput
    create: XOR<aktieCreateWithoutTransaktionInput, aktieUncheckedCreateWithoutTransaktionInput>
  }

  export type aktieUpsertWithoutTransaktionInput = {
    update: XOR<aktieUpdateWithoutTransaktionInput, aktieUncheckedUpdateWithoutTransaktionInput>
    create: XOR<aktieCreateWithoutTransaktionInput, aktieUncheckedCreateWithoutTransaktionInput>
    where?: aktieWhereInput
  }

  export type aktieUpdateToOneWithWhereWithoutTransaktionInput = {
    where?: aktieWhereInput
    data: XOR<aktieUpdateWithoutTransaktionInput, aktieUncheckedUpdateWithoutTransaktionInput>
  }

  export type aktieUpdateWithoutTransaktionInput = {
    version?: IntFieldUpdateOperationsInput | number
    isin?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    branche?: NullableStringFieldUpdateOperationsInput | string | null
    handelsplatz?: NullableEnumhandelsplatzFieldUpdateOperationsInput | $Enums.handelsplatz | null
    kaufpreis?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    anzahl?: IntFieldUpdateOperationsInput | number
    kaufdatum?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dividende?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    letzter_kurs?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    erzeugt?: DateTimeFieldUpdateOperationsInput | Date | string
    aktualisiert?: DateTimeFieldUpdateOperationsInput | Date | string
    kurs?: kursUpdateManyWithoutAktieNestedInput
  }

  export type aktieUncheckedUpdateWithoutTransaktionInput = {
    id?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    isin?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    branche?: NullableStringFieldUpdateOperationsInput | string | null
    handelsplatz?: NullableEnumhandelsplatzFieldUpdateOperationsInput | $Enums.handelsplatz | null
    kaufpreis?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    anzahl?: IntFieldUpdateOperationsInput | number
    kaufdatum?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dividende?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    letzter_kurs?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    erzeugt?: DateTimeFieldUpdateOperationsInput | Date | string
    aktualisiert?: DateTimeFieldUpdateOperationsInput | Date | string
    kurs?: kursUncheckedUpdateManyWithoutAktieNestedInput
  }

  export type kursCreateManyAktieInput = {
    id?: number
    datum: Date | string
    eroeffnung?: Decimal | DecimalJsLike | number | string | null
    schluss?: Decimal | DecimalJsLike | number | string | null
    hoch?: Decimal | DecimalJsLike | number | string | null
    tief?: Decimal | DecimalJsLike | number | string | null
    volumen?: bigint | number | null
  }

  export type transaktionCreateManyAktieInput = {
    id?: number
    version?: number
    typ: $Enums.transaktionstyp
    datum: Date | string
    uhrzeit?: Date | string | null
    anzahl: number
    preis: Decimal | DecimalJsLike | number | string
    gebuehren?: Decimal | DecimalJsLike | number | string
    gesamtbetrag: Decimal | DecimalJsLike | number | string
    notiz?: string | null
    erzeugt?: Date | string
    aktualisiert?: Date | string
  }

  export type kursUpdateWithoutAktieInput = {
    datum?: DateTimeFieldUpdateOperationsInput | Date | string
    eroeffnung?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    schluss?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hoch?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tief?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volumen?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type kursUncheckedUpdateWithoutAktieInput = {
    id?: IntFieldUpdateOperationsInput | number
    datum?: DateTimeFieldUpdateOperationsInput | Date | string
    eroeffnung?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    schluss?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hoch?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tief?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volumen?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type kursUncheckedUpdateManyWithoutAktieInput = {
    id?: IntFieldUpdateOperationsInput | number
    datum?: DateTimeFieldUpdateOperationsInput | Date | string
    eroeffnung?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    schluss?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hoch?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tief?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volumen?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type transaktionUpdateWithoutAktieInput = {
    version?: IntFieldUpdateOperationsInput | number
    typ?: EnumtransaktionstypFieldUpdateOperationsInput | $Enums.transaktionstyp
    datum?: DateTimeFieldUpdateOperationsInput | Date | string
    uhrzeit?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    anzahl?: IntFieldUpdateOperationsInput | number
    preis?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    gebuehren?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    gesamtbetrag?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notiz?: NullableStringFieldUpdateOperationsInput | string | null
    erzeugt?: DateTimeFieldUpdateOperationsInput | Date | string
    aktualisiert?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transaktionUncheckedUpdateWithoutAktieInput = {
    id?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    typ?: EnumtransaktionstypFieldUpdateOperationsInput | $Enums.transaktionstyp
    datum?: DateTimeFieldUpdateOperationsInput | Date | string
    uhrzeit?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    anzahl?: IntFieldUpdateOperationsInput | number
    preis?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    gebuehren?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    gesamtbetrag?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notiz?: NullableStringFieldUpdateOperationsInput | string | null
    erzeugt?: DateTimeFieldUpdateOperationsInput | Date | string
    aktualisiert?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transaktionUncheckedUpdateManyWithoutAktieInput = {
    id?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    typ?: EnumtransaktionstypFieldUpdateOperationsInput | $Enums.transaktionstyp
    datum?: DateTimeFieldUpdateOperationsInput | Date | string
    uhrzeit?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    anzahl?: IntFieldUpdateOperationsInput | number
    preis?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    gebuehren?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    gesamtbetrag?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notiz?: NullableStringFieldUpdateOperationsInput | string | null
    erzeugt?: DateTimeFieldUpdateOperationsInput | Date | string
    aktualisiert?: DateTimeFieldUpdateOperationsInput | Date | string
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