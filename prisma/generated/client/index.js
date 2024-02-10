
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
} = require('./runtime/library.js')


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


  const path = require('path')

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
  targeted_stock: 'targeted_stock',
  buy_link: 'buy_link'
};

exports.Prisma.Product_imagesScalarFieldEnum = {
  id: 'id',
  product_id: 'product_id',
  link: 'link'
};

exports.Prisma.Product_variationsScalarFieldEnum = {
  id: 'id',
  product_id: 'product_id',
  name: 'name',
  stock: 'stock',
  buy_price: 'buy_price',
  sell_price: 'sell_price',
  image_link: 'image_link',
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
  product_images: 'product_images',
  product_variations: 'product_variations',
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
      "value": "H:\\Projects\\WIT\\web\\prisma\\generated\\client",
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
    "rootEnvPath": null
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
        "fromEnvVar": null,
        "value": "postgresql://postgres:postgres@localhost:5432/workshop_of_iot?schema=public"
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7DQogICAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyINCiAgICBvdXRwdXQgICA9ICIuL2dlbmVyYXRlZC9jbGllbnQiDQp9DQoNCmRhdGFzb3VyY2UgZGIgew0KICAgIHByb3ZpZGVyID0gInBvc3RncmVzcWwiDQogICAgdXJsICAgICAgPSAicG9zdGdyZXNxbDovL3Bvc3RncmVzOnBvc3RncmVzQGxvY2FsaG9zdDo1NDMyL3dvcmtzaG9wX29mX2lvdD9zY2hlbWE9cHVibGljIg0KfQ0KDQovLyBEZWZpbmUgeW91ciBkYXRhIG1vZGVscw0KbW9kZWwgb3JkZXIgew0KICAgIGlkICAgICAgICAgIEludCAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIC8vIFVuaXF1ZSBpZGVudGlmaWVyIGZvciBvcmRlcnMNCiAgICBkYXRlICAgICAgICBEYXRlVGltZSBAZGVmYXVsdChub3coKSkgICAgICAgICAgICAgIC8vIERhdGUgYW5kIHRpbWUgb2YgdGhlIG9yZGVyDQoNCiAgICAvLyBEZWZpbmUgcmVsYXRpb25zaGlwcw0KICAgIG9yZGVyX2l0ZW1zIG9yZGVyX2l0ZW1bXQ0KfQ0KDQptb2RlbCBwcm9kdWN0IHsNCiAgICBpZCAgICAgICAgICAgICBJbnQgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSAvLyBVbmlxdWUgaWRlbnRpZmllciBmb3IgcHJvZHVjdHMNCiAgICBuYW1lICAgICAgICAgICBTdHJpbmcgICBAZGIuVmFyQ2hhcigyNTUpICAgICAgICAgICAgIC8vIE5hbWUgb2YgdGhlIHByb2R1Y3QNCiAgICBkZXNjcmlwdGlvbiAgICBTdHJpbmc/ICAvLyBEZXNjcmlwdGlvbiBvZiB0aGUgcHJvZHVjdA0KICAgIHNob3BlZV9pZCAgICAgIFN0cmluZz8gIC8vIFNob3BlZSBJRCBmb3IgdGhlIHByb2R1Y3QNCiAgICB0YXJnZXRlZF9zdG9jayBJbnQgICAgICAvLyBUYXJnZXRlZCBzdG9jayBsZXZlbCBmb3IgdGhlIHByb2R1Y3QNCiAgICBidXlfbGluayAgICAgICBTdHJpbmc/ICAvLyBMaW5rIGZvciBwdXJjaGFzaW5nIHRoZSBwcm9kdWN0DQoNCiAgICAvLyBEZWZpbmUgcmVsYXRpb25zaGlwcw0KICAgIHByb2R1Y3RfaW1hZ2VzICAgICBwcm9kdWN0X2ltYWdlc1tdICAgICAvLyBJbWFnZXMgYXNzb2NpYXRlZCB3aXRoIHRoZSBwcm9kdWN0DQogICAgcHJvZHVjdF92YXJpYXRpb25zIHByb2R1Y3RfdmFyaWF0aW9uc1tdIC8vIFZhcmlhdGlvbnMgb2YgdGhlIHByb2R1Y3QNCn0NCg0KbW9kZWwgcHJvZHVjdF9pbWFnZXMgew0KICAgIGlkICAgICAgICAgSW50ICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSAvLyBVbmlxdWUgaWRlbnRpZmllciBmb3IgcHJvZHVjdCBpbWFnZXMNCiAgICBwcm9kdWN0X2lkIEludCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElEIG9mIHRoZSBhc3NvY2lhdGVkIHByb2R1Y3QNCiAgICBsaW5rICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTGluayB0byB0aGUgaW1hZ2UNCg0KICAgIC8vIERlZmluZSByZWxhdGlvbnNoaXBzDQogICAgcHJvZHVjdCBwcm9kdWN0IEByZWxhdGlvbihmaWVsZHM6IFtwcm9kdWN0X2lkXSwgcmVmZXJlbmNlczogW2lkXSkNCn0NCg0KbW9kZWwgcHJvZHVjdF92YXJpYXRpb25zIHsNCiAgICBpZCAgICAgICAgICAgICAgSW50ICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgLy8gVW5pcXVlIGlkZW50aWZpZXIgZm9yIHByb2R1Y3QgdmFyaWF0aW9ucw0KICAgIHByb2R1Y3RfaWQgICAgICBJbnQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJRCBvZiB0aGUgYXNzb2NpYXRlZCBwcm9kdWN0DQogICAgbmFtZSAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5hbWUgb2YgdGhlIHZhcmlhdGlvbg0KICAgIHN0b2NrICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTdG9jayBsZXZlbCBvZiB0aGUgdmFyaWF0aW9uDQogICAgYnV5X3ByaWNlICAgICAgIEZsb2F0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFB1cmNoYXNlIHByaWNlIG9mIHRoZSB2YXJpYXRpb24NCiAgICBzZWxsX3ByaWNlICAgICAgRmxvYXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2VsbGluZyBwcmljZSBvZiB0aGUgdmFyaWF0aW9uDQogICAgaW1hZ2VfbGluayAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIExpbmsgdG8gdGhlIGltYWdlIG9mIHRoZSB2YXJpYXRpb24NCiAgICBwcmlvcml0eV93ZWlnaHQgRmxvYXQ/ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUHJpb3JpdHkgd2VpZ2h0IGZvciB0aGUgdmFyaWF0aW9uDQoNCiAgICAvLyBEZWZpbmUgcmVsYXRpb25zaGlwcw0KICAgIHByb2R1Y3QgICAgICAgIHByb2R1Y3QgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW3Byb2R1Y3RfaWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KICAgIG9yZGVyX2l0ZW1zICAgIG9yZGVyX2l0ZW1bXSAgLy8gT3JkZXIgaXRlbXMgYXNzb2NpYXRlZCB3aXRoIHRoaXMgdmFyaWF0aW9uDQp9DQoNCm1vZGVsIG9yZGVyX2l0ZW0gew0KICAgIGlkICAgICAgICAgICAgICAgICAgSW50ICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSAvLyBVbmlxdWUgaWRlbnRpZmllciBmb3Igb3JkZXIgaXRlbXMNCiAgICBvcmRlcl9pZCAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSUQgb2YgdGhlIGFzc29jaWF0ZWQgb3JkZXINCiAgICBwcm9kdWN0X3ZhcmlhdGlvbl9pZCBJbnQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElEIG9mIHRoZSBhc3NvY2lhdGVkIHByb2R1Y3QgdmFyaWF0aW9uDQogICAgcXVhbnRpdHkgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFF1YW50aXR5IG9mIHRoZSBwcm9kdWN0IHZhcmlhdGlvbiBpbiB0aGUgb3JkZXINCg0KICAgIC8vIERlZmluZSByZWxhdGlvbnNoaXBzDQogICAgcHJvZHVjdF92YXJpYXRpb24gcHJvZHVjdF92YXJpYXRpb25zIEByZWxhdGlvbihmaWVsZHM6IFtwcm9kdWN0X3ZhcmlhdGlvbl9pZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogICAgb3JkZXIgICAgICAgICAgICAgb3JkZXIgICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbb3JkZXJfaWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KfQ0K",
  "inlineSchemaHash": "4c839434cca51fa6301f4a47e694cd8dbe2633aa3a0195c7a46d946f74e9d94a"
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "prisma/generated/client",
    "generated/client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"order\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order_items\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"order_item\",\"relationName\":\"orderToorder_item\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"product\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shopee_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"targeted_stock\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"buy_link\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product_images\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"product_images\",\"relationName\":\"productToproduct_images\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product_variations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"product_variations\",\"relationName\":\"productToproduct_variations\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"product_images\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"link\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"product\",\"relationName\":\"productToproduct_images\",\"relationFromFields\":[\"product_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"product_variations\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stock\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"buy_price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sell_price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image_link\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"priority_weight\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"product\",\"relationName\":\"productToproduct_variations\",\"relationFromFields\":[\"product_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order_items\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"order_item\",\"relationName\":\"order_itemToproduct_variations\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"order_item\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product_variation_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quantity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product_variation\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"product_variations\",\"relationName\":\"order_itemToproduct_variations\",\"relationFromFields\":[\"product_variation_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"order\",\"relationName\":\"orderToorder_item\",\"relationFromFields\":[\"order_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "prisma/generated/client/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/generated/client/schema.prisma")
