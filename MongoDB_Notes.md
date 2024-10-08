1. **Database**: It is a systematic collection of organized data, stored in a way that allows for efficient retrieval and manipulation.

    - **Key Characteristics:**

        - Collection of related data
        - Organized structure
        - Stored electronically
        - Easily retrievable
        - Scalable

    - **Database Types:**
        - Relational databases (RDBMS): MySQL, PostgreSQL, SQL Server
        - NoSQL databases: MongoDB, Cassandra, Redis
        - Graph databases: Neo4j, Amazon Neptune
        - Time-series databases: InfluxDB, OpenTSDB
        - Cloud databases: AWS Aurora, Google Cloud SQL

1. **MongoDB**: MongoDB is a NoSQL database that stores data in JSON-like documents. It Advantages of Schema flexibility, horizontal scalability, high availability, and dynamic queries.

1. **Document:** A document is a set of key-value pairs, similar to a JSON object. Documents are the basic unit of data in MongoDB and are stored in collections.

1. **Collections:** A collection is a group of MongoDB documents, similar to a table in relational databases. Collections do not enforce a schema, allowing documents within them to have different structures.

1. **Sharding**: Split your data into pieces (shards), and each pieces is stored on different server. It ways to distribute data across multiple servers

1. **Replication**: One server (primary) holds the original data, and other servers (secondaries) keep copies. If the primary fails, one of the secondaries can take over. It ways to distribute data across multiple servers

1. **Change Streams**: It provide real-time notifications of changes to documents in a collection, database, or deployment. They enable applications to react to data changes as they occur, which is useful for building real-time applications.

1. **Pre-save middleware to hash the password before saving it to the database**

    ```js
    userSchema.pre('save', async function (next) {
        if (!this.isModified('password')) return next();
        this.password = await bcrypt.hash(this.password, 10);
        next();
    });
    ```

1. **Method to compare the provided password with the stored hashed password**

    ```js
    userSchema.methods.isPasswordCorrect = async function (password) {
        return await bcrypt.compare(password, this.password);
    };
    ```

1. **Method to generate an access token for the user**

    ```js
    userSchema.methods.generateToken = function () {
        return jwt.sign({ _id: this._id }, ACCESS_TOKEN, { expiresIn: '1h' });
    };
    ```

1. **Method to get access token for the user**

    ```js
    userSchema.methods.getToken = function (token) {
        return jwt.verify(token, ACCESS_TOKEN);
    };
    ```

1. **MongoDB Operation Lists**

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

1. **Querying with Operators**

    - **Comparison Operators**

        - `$eq`: Matches values that are equal to a specified value.
        - `$ne`: Matches all values that are not equal to a specified value.
        - `$gt`, $gte: Matches values that are greater than (or equal to) a specified value.
        - `$lt`, $lte: Matches values that are less than (or equal to) a specified value.
        - `$in`: Matches any of the values specified in an array.
        - `$nin`: Matches none of the values specified in an array.

    - **Logical Query Operators**

        - `$or`: Joins query clauses with a logical OR, returning all documents that match the conditions.
        - `$and`: Joins query clauses with a logical AND, returning all documents that match all conditions.
        - `$not`: Inverts the effect of a query expression.
        - `$nor`: Joins query clauses with a logical NOR, returning all documents that fail to match both conditions.

1. **Aggregation Pipeline Stages**

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

1. **Create a Schema in Mongoose**

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

1. **Types of Relationships:**

    - **One-to-One**: A user has one profile.

    ```js
    const profileSchema = new mongoose.Schema({
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        bio: String,
        website: String,
    });
    ```

    - **One-to-Many** : A user can have many posts.

    ```js
    const postSchema = new mongoose.Schema({
        author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        title: String,
        content: String,
    });
    ```

    - **Many-to-Many** : A user can follow many other users, and each user can be followed by many users.

    ```js
    const userSchema = new mongoose.Schema({
        followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
        following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    });
    ```

1. **Populating Related Documents:**

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
