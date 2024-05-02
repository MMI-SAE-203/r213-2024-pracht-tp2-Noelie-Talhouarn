/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bs5aqg8017ouiou")

  // remove
  collection.schema.removeField("q2wp3nwz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7h9lcyxk",
    "name": "img",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bs5aqg8017ouiou")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "q2wp3nwz",
    "name": "images",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // remove
  collection.schema.removeField("7h9lcyxk")

  return dao.saveCollection(collection)
})
