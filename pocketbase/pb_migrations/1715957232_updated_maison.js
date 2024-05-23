/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bs5aqg8017ouiou")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yev6bnxw",
    "name": "agent",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "a5kyacslyh33p54",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bs5aqg8017ouiou")

  // remove
  collection.schema.removeField("yev6bnxw")

  return dao.saveCollection(collection)
})
