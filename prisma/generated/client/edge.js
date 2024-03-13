
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  detectRuntime,
} = require('./runtime/edge.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.9.1
 * Query Engine version: 23fdc5965b1e05fc54e5f26ed3de66776b93de64
 */
Prisma.prismaVersion = {
  client: "5.9.1",
  engine: "23fdc5965b1e05fc54e5f26ed3de66776b93de64"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.OrderScalarFieldEnum = {
  id: 'id',
  date: 'date'
};

exports.Prisma.ProductScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  shopee_id: 'shopee_id',
  targeted_stock: 'targeted_stock'
};

exports.Prisma.Product_imageScalarFieldEnum = {
  id: 'id',
  product_id: 'product_id',
  link: 'link'
};

exports.Prisma.Product_variationScalarFieldEnum = {
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

exports.Prisma.Order_itemScalarFieldEnum = {
  id: 'id',
  order_id: 'order_id',
  product_variation_id: 'product_variation_id',
  quantity: 'quantity'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  order: 'order',
  product: 'product',
  product_image: 'product_image',
  product_variation: 'product_variation',
  order_item: 'order_item'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\USUARIO\\Desktop\\gabu\\WIT\\WIT\\prisma\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.9.1",
  "engineVersion": "23fdc5965b1e05fc54e5f26ed3de66776b93de64",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7DQogICAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyINCiAgICBvdXRwdXQgICA9ICIuL2dlbmVyYXRlZC9jbGllbnQiDQp9DQoNCmRhdGFzb3VyY2UgZGIgew0KICAgIHByb3ZpZGVyID0gInBvc3RncmVzcWwiDQogICAgdXJsICAgICAgPSBlbnYoIkRBVEFCQVNFX1VSTCIpDQp9DQoNCi8vIERlZmluZSB5b3VyIGRhdGEgbW9kZWxzDQptb2RlbCBvcmRlciB7DQogICAgaWQgICBJbnQgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSAvLyBVbmlxdWUgaWRlbnRpZmllciBmb3Igb3JkZXJzDQogICAgZGF0ZSBEYXRlVGltZSBAZGVmYXVsdChub3coKSkgLy8gRGF0ZSBhbmQgdGltZSBvZiB0aGUgb3JkZXINCg0KICAgIC8vIERlZmluZSByZWxhdGlvbnNoaXBzDQogICAgb3JkZXJfaXRlbXMgb3JkZXJfaXRlbVtdDQp9DQoNCm1vZGVsIHByb2R1Y3Qgew0KICAgIGlkICAgICAgICAgICAgIEludCAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgLy8gVW5pcXVlIGlkZW50aWZpZXIgZm9yIHByb2R1Y3RzDQogICAgbmFtZSAgICAgICAgICAgU3RyaW5nICBAZGIuVmFyQ2hhcigyNTUpIC8vIE5hbWUgb2YgdGhlIHByb2R1Y3QNCiAgICBkZXNjcmlwdGlvbiAgICBTdHJpbmc/IC8vIERlc2NyaXB0aW9uIG9mIHRoZSBwcm9kdWN0DQogICAgc2hvcGVlX2lkICAgICAgU3RyaW5nPyAvLyBTaG9wZWUgSUQgZm9yIHRoZSBwcm9kdWN0DQogICAgdGFyZ2V0ZWRfc3RvY2sgSW50IC8vIFRhcmdldGVkIHN0b2NrIGxldmVsIGZvciB0aGUgcHJvZHVjdA0KDQogICAgLy8gRGVmaW5lIHJlbGF0aW9uc2hpcHMNCiAgICBwcm9kdWN0X2ltYWdlICAgICBwcm9kdWN0X2ltYWdlW10gLy8gSW1hZ2VzIGFzc29jaWF0ZWQgd2l0aCB0aGUgcHJvZHVjdA0KICAgIHByb2R1Y3RfdmFyaWF0aW9uIHByb2R1Y3RfdmFyaWF0aW9uW10gLy8gVmFyaWF0aW9ucyBvZiB0aGUgcHJvZHVjdA0KfQ0KDQptb2RlbCBwcm9kdWN0X2ltYWdlIHsNCiAgICBpZCAgICAgICAgIEludCAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSAvLyBVbmlxdWUgaWRlbnRpZmllciBmb3IgcHJvZHVjdCBpbWFnZXMNCiAgICBwcm9kdWN0X2lkIEludCAvLyBJRCBvZiB0aGUgYXNzb2NpYXRlZCBwcm9kdWN0DQogICAgbGluayAgICAgICBTdHJpbmcgLy8gTGluayB0byB0aGUgaW1hZ2UNCg0KICAgIC8vIERlZmluZSByZWxhdGlvbnNoaXBzDQogICAgcHJvZHVjdCBwcm9kdWN0IEByZWxhdGlvbihmaWVsZHM6IFtwcm9kdWN0X2lkXSwgcmVmZXJlbmNlczogW2lkXSkNCn0NCg0KbW9kZWwgcHJvZHVjdF92YXJpYXRpb24gew0KICAgIGlkICAgICAgICAgICAgICBJbnQgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIC8vIFVuaXF1ZSBpZGVudGlmaWVyIGZvciBwcm9kdWN0IHZhcmlhdGlvbnMNCiAgICBwcm9kdWN0X2lkICAgICAgSW50IC8vIElEIG9mIHRoZSBhc3NvY2lhdGVkIHByb2R1Y3QNCiAgICBuYW1lICAgICAgICAgICAgU3RyaW5nIC8vIE5hbWUgb2YgdGhlIHZhcmlhdGlvbg0KICAgIHN0b2NrICAgICAgICAgICBJbnQgLy8gU3RvY2sgbGV2ZWwgb2YgdGhlIHZhcmlhdGlvbg0KICAgIGJ1eV9wcmljZSAgICAgICBGbG9hdCAvLyBQdXJjaGFzZSBwcmljZSBvZiB0aGUgdmFyaWF0aW9uDQogICAgc2VsbF9wcmljZSAgICAgIEZsb2F0IC8vIFNlbGxpbmcgcHJpY2Ugb2YgdGhlIHZhcmlhdGlvbg0KICAgIGltYWdlX2xpbmsgICAgICBTdHJpbmc/IC8vIExpbmsgdG8gdGhlIGltYWdlIG9mIHRoZSB2YXJpYXRpb24NCiAgICBidXlfbGluayAgICAgICAgU3RyaW5nPyAvLyBMaW5rIGZvciBwdXJjaGFzaW5nIHRoZSBwcm9kdWN0DQogICAgcHJpb3JpdHlfd2VpZ2h0IEZsb2F0PyAvLyBQcmlvcml0eSB3ZWlnaHQgZm9yIHRoZSB2YXJpYXRpb24NCg0KICAgIC8vIERlZmluZSByZWxhdGlvbnNoaXBzDQogICAgcHJvZHVjdCAgICAgcHJvZHVjdCAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtwcm9kdWN0X2lkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgICBvcmRlcl9pdGVtcyBvcmRlcl9pdGVtW10gLy8gT3JkZXIgaXRlbXMgYXNzb2NpYXRlZCB3aXRoIHRoaXMgdmFyaWF0aW9uDQp9DQoNCm1vZGVsIG9yZGVyX2l0ZW0gew0KICAgIGlkICAgICAgICAgICAgICAgICAgIEludCBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSAvLyBVbmlxdWUgaWRlbnRpZmllciBmb3Igb3JkZXIgaXRlbXMNCiAgICBvcmRlcl9pZCAgICAgICAgICAgICBJbnQgLy8gSUQgb2YgdGhlIGFzc29jaWF0ZWQgb3JkZXINCiAgICBwcm9kdWN0X3ZhcmlhdGlvbl9pZCBJbnQgLy8gSUQgb2YgdGhlIGFzc29jaWF0ZWQgcHJvZHVjdCB2YXJpYXRpb24NCiAgICBxdWFudGl0eSAgICAgICAgICAgICBJbnQgLy8gUXVhbnRpdHkgb2YgdGhlIHByb2R1Y3QgdmFyaWF0aW9uIGluIHRoZSBvcmRlcg0KDQogICAgLy8gRGVmaW5lIHJlbGF0aW9uc2hpcHMNCiAgICBwcm9kdWN0X3ZhcmlhdGlvbiBwcm9kdWN0X3ZhcmlhdGlvbiBAcmVsYXRpb24oZmllbGRzOiBbcHJvZHVjdF92YXJpYXRpb25faWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KICAgIG9yZGVyICAgICAgICAgICAgIG9yZGVyICAgICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbb3JkZXJfaWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KfQ0K",
  "inlineSchemaHash": "95b2c48dd542be1f9cdbbdeeba54879253a2bc6e76fe107b008b7ad84d604bf7"
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"order\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order_items\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"order_item\",\"relationName\":\"orderToorder_item\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"product\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shopee_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"targeted_stock\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product_image\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"product_image\",\"relationName\":\"productToproduct_image\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product_variation\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"product_variation\",\"relationName\":\"productToproduct_variation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"product_image\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"link\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"product\",\"relationName\":\"productToproduct_image\",\"relationFromFields\":[\"product_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"product_variation\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stock\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"buy_price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sell_price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image_link\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"buy_link\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"priority_weight\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"product\",\"relationName\":\"productToproduct_variation\",\"relationFromFields\":[\"product_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order_items\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"order_item\",\"relationName\":\"order_itemToproduct_variation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"order_item\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product_variation_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quantity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product_variation\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"product_variation\",\"relationName\":\"order_itemToproduct_variation\",\"relationFromFields\":[\"product_variation_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"order\",\"relationName\":\"orderToorder_item\",\"relationFromFields\":[\"order_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

