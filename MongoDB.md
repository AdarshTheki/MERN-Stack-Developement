1. **What is MongoDB?**

    - **Define**: MongoDB is a NoSQL database that stores data in JSON-like documents, flexible, scalable & making it easy to work.
    - **Advantages**: Schema flexibility, horizontal scalability, high availability, and dynamic queries.

2. **what is Document & Collection in MongoDB?**

    - **Document:** A document is a set of key-value pairs, similar to a JSON object. Documents are the basic unit of data in MongoDB and are stored in collections.
    - **Collections:** A collection is a group of MongoDB documents, similar to a table in relational databases. Collections do not enforce a schema, allowing documents within them to have different structures.

3. **Explain the concept of Sharding and Replication` in MongoDB.**

    In MongoDB, sharding and replication are both ways to distribute data across multiple servers

    - **Sharding**: Split your data into pieces (shards), and each pieces is stored on different server.

    - **Replication**: One server (primary) holds the original data, and other servers (secondaries) keep copies. If the primary fails, one of the secondaries can take over.

4. **Explain the concept of mongoDB Change Streams**

    - `Change streams` provide real-time notifications of changes to documents in a collection, database, or deployment. They enable applications to react to data changes as they occur, which is useful for building real-time applications.

5. **Pre-save middleware to hash the password before saving it to the database**

    ```js
    userSchema.pre('save', async function (next) {
        if (!this.isModified('password')) return next();
        this.password = await bcrypt.hash(this.password, 10);
        next();
    });
    ```

6. **Method to compare the provided password with the stored hashed password**

    ```js
    userSchema.methods.isPasswordCorrect = async function (password) {
        return await bcrypt.compare(password, this.password);
    };
    ```

7. **Method to generate an access token on short time for the user**

    ```js
    userSchema.methods.generateAccessToken = function () {
        return jwt.sign({ _id: this._id }, accessToken, { expiresIn: '1h' });
    };
    ```

8. **Method to generate a refresh token on long time for the user**

    ```js
    userSchema.methods.generateRefreshToken = function () {
        return jwt.sign({ _id: this._id }, refreshToken, { expiresIn: '1d' });
    };
    ```

### MongoDB Operation :

```js
// CURD Operation
db.students.insertMany([{ name: 'Alice', age: 20, grade: 'A' }]); // Create Many
db.students.create({ name: 'Adarsh', age: 25, grade: 'B' }); // Create One
db.students.updateOne({ name: 'Alice' }, { $set: { grade: 'A+' } }); // Update
db.students.find({ age: { $gt: 21 } }); // find (get data)
db.students.deleteOne({ name: 'Charlie' }); // delete

db.students.createIndex({ name: 1 }); // create index
db.courses.find({ $text: { $search: 'database' } }); // search

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

### Querying with Operators

-   **Comparison Operators**

    -   `$eq`: Matches values that are equal to a specified value.
    -   `$ne`: Matches all values that are not equal to a specified value.
    -   `$gt`, $gte: Matches values that are greater than (or equal to) a specified value.
    -   `$lt`, $lte: Matches values that are less than (or equal to) a specified value.
    -   `$in`: Matches any of the values specified in an array.
    -   `$nin`: Matches none of the values specified in an array.

-   **Logical Query Operators**

    -   `$or`: Joins query clauses with a logical OR, returning all documents that match the conditions.
    -   `$and`: Joins query clauses with a logical AND, returning all documents that match all conditions.
    -   `$not`: Inverts the effect of a query expression.
    -   `$nor`: Joins query clauses with a logical NOR, returning all documents that fail to match both conditions.

3. **Aggregation Pipeline Stages**

    ```js
    // Match documents where age is greater than 30
    [{ $match: { age: { $gt: 30 } } }];

    // Group by role and count the number of users in each role
    [{ $group: { _id: '$role', count: { $sum: 1 } } }];

    // Project documents to only include name and age, and add a new field "isAdult"
    [{ $project: { name: 1, age: 1, isAdult: { $gte: ['$age', 18] } } }];

    // Sort documents by age in ascending order and limit or skip docs
    [{ $sort: { age: 1 } }, { $skip: 10 }, { $limit: 5 }];

    // Left Join posts with their authors
    $lookup: {
        from: 'users',
        localField: 'author',
        foreignField: '_id',
        as: 'authorDetails',
    },


    // Unwind the tags array to output a document for each tag
    [{ $unwind: '$tags' }];
    ```

### Create a Schema in Mongoose

```js
// Define the schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // Name is required
        trim: true, // Trim whitespace
    },
    age: {
        type: Number,
        min: 0, // Minimum value
        max: 120, // Maximum value
    },
    email: {
        type: String,
        unique: true, // Ensure email is unique
        lowercase: true, // Convert to lowercase
    },
    isActive: {
        type: Boolean,
        default: true, // Default value
    },
    createdAt: {
        type: Date,
        default: Date.now, // Default to current date
    },
    profilePicture: Buffer, // Binary data for profile picture
    friends: [mongoose.Schema.Types.ObjectId], // Array of ObjectIds referencing other users
    meta: mongoose.Schema.Types.Mixed, // Flexible field for storing additional metadata
    accountBalance: mongoose.Schema.Types.Decimal128, // High precision number
    settings: {
        type: Map,
        of: String, // Map of key-value pairs
    },
    address: {
        street: String,
        city: String,
        zipCode: Number, // Embedded document for address
    },
});

// Create a model from the schema
export const User = mongoose.model('User', userSchema);
```

### Types of Relationships:

1.  **One-to-One**: A user has one profile.

    ```js
    const profileSchema = new mongoose.Schema({
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        bio: String,
        website: String,
    });
    ```

2.  **One-to-Many** : A user can have many posts.

    ```js
    const postSchema = new mongoose.Schema({
        author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        title: String,
        content: String,
    });
    ```

3.  **Many-to-Many** : A user can follow many other users, and each user can be followed by many users.
    ```js
    const userSchema = new mongoose.Schema({
        followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
        following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    });
    ```

### Populating Related Documents:

1. **Basic Population**

    ```js
    // Assuming we have a Post model with an author reference
    Post.find().populate('author'); // Populate the 'author' field with User documents
    ```

2. **Deep Population**

    ```js
    Post.find().populate({
        path: 'author',
        populate: { path: 'profile' }, // Populate the profile field within the author
    });
    ```

3. **Populating Multiple Paths**

    ```js
    Post.find().populate('author').populate('comments'); // Assuming comments is an array of ObjectIds
    ```

4. **Selective Population**

    ```js
    Post.find().populate('author', 'name email'); // Only include 'name' and 'email' fields from the author
    ```

5. **Virtual Population**

    ```js
    // Virtual populate for comments in Post schema
    postSchema.virtual('comments', {
        ref: 'Comment',
        localField: '_id',
        foreignField: 'postId',
    });

    // Populate virtual comments
    Post.find().populate('comments'); // Populate the virtual comments field
    ```

### Example: User and Post Relationships:

#### Define the Schemas

-   User Schema

    ```js
    const userSchema = new mongoose.Schema({
        name: String,
        email: String,
        followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
        following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    });
    ```

-   Post Schema

    ```js
    const postSchema = new mongoose.Schema({
        author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        title: String,
        content: String,
        createdAt: { type: Date, default: Date.now },
    });
    ```

-   Comment Schema

    ```js
    const commentSchema = new mongoose.Schema({
        postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
        content: String,
        createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        createdAt: { type: Date, default: Date.now },
    });
    ```

-   Create models

    ```js
    const User = mongoose.model('User', userSchema);
    const Post = mongoose.model('Post', postSchema);
    const Comment = mongoose.model('Comment', commentSchema);
    module.exports = { User, Post, Comment };
    ```

#### Create and Populate Documents

-   Create Users and Posts

    ```js
    const user1 = new User({ name: 'Alice', email: 'alice@example.com' });
    const user2 = new User({ name: 'Bob', email: 'bob@example.com' });

    await user1.save();
    await user2.save();

    const post = new Post({
        author: user1._id,
        title: 'My First Post',
        content: 'This is the content',
    });
    await post.save();
    ```

-   Populate the Author in Post

    ```js
    Post.find().populate('author', 'name email');
    ```

-   Deep Populate with Comments

    ```js
    const comment = new Comment({
        postId: post._id,
        content: 'Nice post!',
        createdBy: user2._id,
    });
    await comment.save();

    Post.find()
        .populate({
            path: 'author',
            select: 'name email',
        })
        .populate({
            path: 'comments',
            populate: { path: 'createdBy', select: 'name' },
        });
    ```
