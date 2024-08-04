1. What is MongoDB?

    - MongoDB is a NoSQL, document-oriented database that stores data in flexible, JSON-like documents, making it easy to work with and scale.
    - Advantages of MongoDB include schema flexibility, horizontal scalability, high availability, and support for rich, dynamic queries.

2. what is `document` & `collection` in MongoDB?

    - Document: A document is a set of key-value pairs, similar to a JSON object. Documents are the basic unit of data in MongoDB and are stored in collections.
    - Collections: A collection is a group of MongoDB documents, similar to a table in relational databases. Collections do not enforce a schema, allowing documents within them to have different structures.

3. Explain the concept of `sharding` and `replication` in MongoDB.

    - Sharding is a method used to distribute data across multiple servers or clusters to ensure horizontal scalability. It allows MongoDB to handle large datasets by dividing them into smaller, more manageable pieces called shards.
    - Replication: Replica sets are a group of MongoDB servers that maintain the same data set, providing redundancy and high availability. Sharded clusters distribute data across multiple replica sets.

4. Explain the concept of MongoDB `change streams`.
    - Change streams provide real-time notifications of changes to documents in a collection, database, or deployment. They enable applications to react to data changes as they occur, which is useful for building real-time applications.

### Exercises:

```js
// CURD Operation
db.students.insertMany([{ name: 'Alice', age: 20, grade: 'A' }]); // Create Many
db.students.create({ name: 'Adarsh', age: 25, grade: 'B' }); // Create One
db.students.updateOne({ name: 'Alice' }, { $set: { grade: 'A+' } }); // Update
db.students.find({ age: { $gt: 21 } }); // find (get data)
db.students.deleteOne({ name: 'Charlie' }); // delete

db.students.createIndex({ name: 1 }); // create index
db.courses.find({ $text: { $search: 'database' } }); // search

// Aggregation Pipeline
db.students.aggregate([{ $group: { _id: null, averageAge: { $avg: '$age' } } }]);

// Upsert Operation
db.students.updateOne({ name: 'David' }, { $set: { age: 25 } }, { upsert: true });

// Distinct Values (unique)
db.students.distinct('grade');

// Bulk Write Operations (All Operations run)
db.students.bulkWrite([
    { insertOne: { document: { name: 'Eve', age: 21, grade: 'B' } } },
    { updateOne: { filter: { name: 'Bob' }, update: { $set: { grade: 'A-' } } } },
    { deleteOne: { filter: { name: 'Charlie' } } },
]);

// Sharding Setup : Enable sharding on a library database and shard the books collection on the ISBN field.
sh.enableSharding('library');
sh.shardCollection('library.books', { ISBN: 1 });

// Replication Setup: Set up a replica set with three MongoDB instances.
rs.initiate({
    _id: 'rs0',
    members: [
        { _id: 0, host: 'localhost:27017' },
        { _id: 1, host: 'localhost:27018' },
        { _id: 2, host: 'localhost:27019' },
    ],
});

// Change Streams (Real Time)
const changeStream = db.orders.watch();
changeStream.on('change', (change) => {
    printjson(change);
});

// Geospatial Queries (find all location)
db.locations.createIndex({ coordinates: '2dsphere' });
db.locations.find({
    coordinates: {
        $geoWithin: {
            $centerSphere: [[longitude, latitude], radius / 3963.2],
        },
    },
});
```
