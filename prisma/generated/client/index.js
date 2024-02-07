
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
  link: 'link',
  shopee_id: 'shopee_id',
  targeted_stock: 'targeted_stock',
  buy_link: 'buy_link'
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
        "value": "postgresql://postgres:postgres@localhost:5432/workshop-of-iot?schema=public"
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7DQogICAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyINCiAgICBvdXRwdXQgICA9ICIuL2dlbmVyYXRlZC9jbGllbnQiDQp9DQoNCmRhdGFzb3VyY2UgZGIgew0KICAgIHByb3ZpZGVyID0gInBvc3RncmVzcWwiDQogICAgdXJsICAgICAgPSAicG9zdGdyZXNxbDovL3Bvc3RncmVzOnBvc3RncmVzQGxvY2FsaG9zdDo1NDMyL3dvcmtzaG9wLW9mLWlvdD9zY2hlbWE9cHVibGljIg0KfQ0KDQovLyBEZWZpbmUgeW91ciBkYXRhIG1vZGVscw0KbW9kZWwgb3JkZXIgew0KICAgIGlkICAgICAgICAgIEludCAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIC8vIFVuaXF1ZSBpZGVudGlmaWVyIGZvciBvcmRlcnMNCiAgICBkYXRlICAgICAgICBEYXRlVGltZSBAZGVmYXVsdChub3coKSkgICAgICAgICAgICAgIC8vIERhdGUgYW5kIHRpbWUgb2YgdGhlIG9yZGVyDQoNCiAgICAvLyBEZWZpbmUgcmVsYXRpb25zaGlwcw0KICAgIG9yZGVyX2l0ZW1zIG9yZGVyX2l0ZW1bXQ0KfQ0KDQptb2RlbCBwcm9kdWN0IHsNCiAgICBpZCAgICAgICAgICAgICBJbnQgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSAvLyBVbmlxdWUgaWRlbnRpZmllciBmb3IgcHJvZHVjdHMNCiAgICBuYW1lICAgICAgICAgICBTdHJpbmcgICBAZGIuVmFyQ2hhcigyNTUpICAgICAgICAgICAgIC8vIE5hbWUgb2YgdGhlIHByb2R1Y3QNCiAgICBkZXNjcmlwdGlvbiAgICBTdHJpbmc/ICAvLyBEZXNjcmlwdGlvbiBvZiB0aGUgcHJvZHVjdA0KICAgIGxpbmsgICAgICAgICAgIFN0cmluZz8gIC8vIExpbmsgcmVsYXRlZCB0byB0aGUgcHJvZHVjdA0KICAgIHNob3BlZV9pZCAgICAgIFN0cmluZz8gIC8vIFNob3BlZSBJRCBmb3IgdGhlIHByb2R1Y3QNCiAgICB0YXJnZXRlZF9zdG9jayBJbnQgICAgICAvLyBUYXJnZXRlZCBzdG9jayBsZXZlbCBmb3IgdGhlIHByb2R1Y3QNCiAgICBidXlfbGluayAgICAgICBTdHJpbmc/ICAvLyBMaW5rIGZvciBwdXJjaGFzaW5nIHRoZSBwcm9kdWN0DQoNCiAgICAvLyBEZWZpbmUgcmVsYXRpb25zaGlwcw0KICAgIHByb2R1Y3RfaW1hZ2VzICAgICBwcm9kdWN0X2ltYWdlW10gICAgIC8vIEltYWdlcyBhc3NvY2lhdGVkIHdpdGggdGhlIHByb2R1Y3QNCiAgICBwcm9kdWN0X3ZhcmlhdGlvbnMgcHJvZHVjdF92YXJpYXRpb25bXSAvLyBWYXJpYXRpb25zIG9mIHRoZSBwcm9kdWN0DQp9DQoNCm1vZGVsIHByb2R1Y3RfaW1hZ2Ugew0KICAgIGlkICAgICAgICAgSW50ICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSAvLyBVbmlxdWUgaWRlbnRpZmllciBmb3IgcHJvZHVjdCBpbWFnZXMNCiAgICBwcm9kdWN0X2lkIEludCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElEIG9mIHRoZSBhc3NvY2lhdGVkIHByb2R1Y3QNCiAgICBsaW5rICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTGluayB0byB0aGUgaW1hZ2UNCg0KICAgIC8vIERlZmluZSByZWxhdGlvbnNoaXBzDQogICAgcHJvZHVjdCBwcm9kdWN0IEByZWxhdGlvbihmaWVsZHM6IFtwcm9kdWN0X2lkXSwgcmVmZXJlbmNlczogW2lkXSkNCn0NCg0KbW9kZWwgcHJvZHVjdF92YXJpYXRpb24gew0KICAgIGlkICAgICAgICAgICAgICBJbnQgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSAvLyBVbmlxdWUgaWRlbnRpZmllciBmb3IgcHJvZHVjdCB2YXJpYXRpb25zDQogICAgcHJvZHVjdF9pZCAgICAgIEludCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElEIG9mIHRoZSBhc3NvY2lhdGVkIHByb2R1Y3QNCiAgICBuYW1lICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTmFtZSBvZiB0aGUgdmFyaWF0aW9uDQogICAgc3RvY2sgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0b2NrIGxldmVsIG9mIHRoZSB2YXJpYXRpb24NCiAgICBidXlfcHJpY2UgICAgICAgRmxvYXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUHVyY2hhc2UgcHJpY2Ugb2YgdGhlIHZhcmlhdGlvbg0KICAgIHNlbGxfcHJpY2UgICAgICBGbG9hdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTZWxsaW5nIHByaWNlIG9mIHRoZSB2YXJpYXRpb24NCiAgICBpbWFnZV9saW5rICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTGluayB0byB0aGUgaW1hZ2Ugb2YgdGhlIHZhcmlhdGlvbg0KICAgIHByaW9yaXR5X3dlaWdodCBGbG9hdD8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBQcmlvcml0eSB3ZWlnaHQgZm9yIHRoZSB2YXJpYXRpb24NCg0KICAgIC8vIERlZmluZSByZWxhdGlvbnNoaXBzDQogICAgcHJvZHVjdCAgICAgICAgcHJvZHVjdCAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbcHJvZHVjdF9pZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogICAgb3JkZXJfaXRlbXMgICAgb3JkZXJfaXRlbVtdICAvLyBPcmRlciBpdGVtcyBhc3NvY2lhdGVkIHdpdGggdGhpcyB2YXJpYXRpb24NCn0NCg0KbW9kZWwgb3JkZXJfaXRlbSB7DQogICAgaWQgICAgICAgICAgICAgICAgICBJbnQgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIC8vIFVuaXF1ZSBpZGVudGlmaWVyIGZvciBvcmRlciBpdGVtcw0KICAgIG9yZGVyX2lkICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJRCBvZiB0aGUgYXNzb2NpYXRlZCBvcmRlcg0KICAgIHByb2R1Y3RfdmFyaWF0aW9uX2lkIEludCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSUQgb2YgdGhlIGFzc29jaWF0ZWQgcHJvZHVjdCB2YXJpYXRpb24NCiAgICBxdWFudGl0eSAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUXVhbnRpdHkgb2YgdGhlIHByb2R1Y3QgdmFyaWF0aW9uIGluIHRoZSBvcmRlcg0KDQogICAgLy8gRGVmaW5lIHJlbGF0aW9uc2hpcHMNCiAgICBwcm9kdWN0X3ZhcmlhdGlvbiBwcm9kdWN0X3ZhcmlhdGlvbiBAcmVsYXRpb24oZmllbGRzOiBbcHJvZHVjdF92YXJpYXRpb25faWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KICAgIG9yZGVyICAgICAgICAgICAgIG9yZGVyICAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW29yZGVyX2lkXSwgcmVmZXJlbmNlczogW2lkXSkNCn0NCg==",
  "inlineSchemaHash": "e505f2b3156cd0d8ebce0abd3fecad7d7e1e5b397554f9814b550633c94f3d9e"
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

config.runtimeDataModel = JSON.parse("{\"models\":{\"order\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order_items\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"order_item\",\"relationName\":\"orderToorder_item\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"product\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"link\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shopee_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"targeted_stock\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"buy_link\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product_images\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"product_image\",\"relationName\":\"productToproduct_image\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product_variations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"product_variation\",\"relationName\":\"productToproduct_variation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"product_image\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"link\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"product\",\"relationName\":\"productToproduct_image\",\"relationFromFields\":[\"product_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"product_variation\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stock\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"buy_price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sell_price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image_link\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"priority_weight\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"product\",\"relationName\":\"productToproduct_variation\",\"relationFromFields\":[\"product_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order_items\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"order_item\",\"relationName\":\"order_itemToproduct_variation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"order_item\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product_variation_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quantity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product_variation\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"product_variation\",\"relationName\":\"order_itemToproduct_variation\",\"relationFromFields\":[\"product_variation_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"order\",\"relationName\":\"orderToorder_item\",\"relationFromFields\":[\"order_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
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
