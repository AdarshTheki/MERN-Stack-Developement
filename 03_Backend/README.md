## Learn GraphQL

Here the importing `ApolloServer` and `gql`, we create a multiline GraphQL string containing our schema. Most developers name their schema `typeDefs` because when we initialize ApolloServer later, we need to pass our schema to an object key with the same name.

### There are a few key things to notice in this code snippet:

-   Our `typeDefs` are passed into a `gql` tag. This tag sterilizes our type definitions and makes them readable to Apollo Server. This also allows for auto-completion during development.
-   The Query type lists all the possible queries that can be performed by our server.

```js
// create server.js
const { gql, ApolloServer } = require('apollo-server');

const users = [
    // This is data of the server on users
    {
        id: 0,
        name: 'JS Cafe',
        problems: [0, 1],
    },
    {
        id: 1,
        name: 'Roadside Coder',
        problems: [1, 2],
    },
];

const problems = [
    // This is data of the server on problems
    {
        id: 0,
        title: 'Two Sum',
        solvers: [0],
    },
    {
        id: 1,
        title: 'Three Sum',
        solvers: [0, 1],
    },
    {
        id: 2,
        title: 'Four Sum',
        solvers: [1],
    },
];

const typeDefs = gql(`
    type User {
        id: ID,
        name: String,
        problems: [Problem]
    }

    type Problem {
        id: ID,
        title: String,
        solvers: [User]
    }
    
    type Query {
        users: [User],
        problems: [Problem]
    }
    `);

const resolvers = {
    Query: {
        users: () => users,
        problems: () => problems,
    },
    User: {
        problems: (user) => {
            return problems.filter((problem) => problem.solvers.includes(user.id));
        },
    },
    Problem: {
        solvers: (problem) => {
            return users.filter((user) => user.problems.includes(problem.id));
        },
    },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen(4000).then(({ url }) => {
    console.log(`GraphQL started on ${url}`);
});
```

```html
<!-- index.html -->
<script>
    fetch('http://localhost:4000/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify({
            query: '{users { id, name, problems {id, title}}}',
        }),
    });
</script>
```
