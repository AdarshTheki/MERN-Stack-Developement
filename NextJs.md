## Next.js README Documentation

1. [Pages Directory vs. App Directory](#pages-directory-vs-app-directory)
2. [Key Differences](#key-differences)
3. [Client-Side Rendering (CSR)](#client-side-rendering-csr)
4. [Server-Side Rendering (SSR)](#server-side-rendering-ssr)
5. [Static Site Generation (SSG)](#static-site-generation-ssg)
6. [Error Handling](#error-handle-using-built-in-error)
7. [Image Optimization](#image-optimization)

### Pages Directory vs. App Directory

-   **Pages Directory**

    The `pages` directory in Next.js has been the traditional method for defining routes in a Next.js application. Each file within the `pages` directory corresponds directly to a route. For example, `pages/index.js` corresponds to the root route (`/`), and `pages/about.js` corresponds to the `/about` route.

-   **App Directory**

    The `app` directory is a newer addition to Next.js, introduced to enable more granular control over routing and component organization.

### Key Differences

| Feature               | Pages Directory                        | App Directory                |
| --------------------- | -------------------------------------- | ---------------------------- |
| **Routing**           | File-based, automatic                  | File-based, more modular     |
| **Rendering**         | Client/Server/Static                   | Client/Server Components     |
| **Custom Components** | `_app.js`, `_document.js`              | Custom layouts and templates |
| **Data Fetching**     | `getStaticProps`, `getServerSideProps` | Server Components, `useSWR`  |
| **Use Case**          | Simple to medium complexity            | More complex applications    |

### Client-Side Rendering (CSR)

In CSR, data fetching happens on the client side after the initial page load. The `useSWR` hook is used here to handle fetching with Stale-While-Revalidate strategy.

```javascript
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App() {
    const { data, error } = useSWR('/api/link', fetcher);
    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;
    // Render the fetched data
}
```

### Server-Side Rendering (SSR)

In SSR, data is fetched on the server for each request, and the HTML is generated on the server with the fetched data.

```javascript
// (SSR) Server Side Render to fetch data
export async function getServerSideProps() {
    const data = await (await fetch('https://dummyjson.com/products?limit=10')).json();
    return {
        props: {
            data,
        },
    };
}
```

### Static Site Generation (SSG)

In SSG, the HTML is generated at build time, and it can be statically served. Dynamic routes can also be handled using `getStaticPaths`.

1. Get all ids: `getStaticPaths()`
2. Get dynamic id to fetch data: `getStaticProps()`

```js
// app/users/[id]/page.js

export async function getStaticPaths() {
    const data = await (await fetch(`https://dummyjson.com/products`)).json();
    const users = data.products.map((item) => item.id);
    return {
        paths: users.map((userId) => ({ params: { id: `${userId}` } })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const data = await (await fetch(`https://dummyjson.com/products/${params.id}`)).json();
    return {
        props: {
            data,
        },
    };
}
```

### Error Handle Using Built-In Error

Next.js provides a built-in `Error` component to handle errors gracefully in the application. You can return an error code from `getStaticProps` or `getServerSideProps` and render the `Error` component based on that.

```javascript
import Error from 'next/error';
export async function getStaticProps() {
    const res = await fetch('/api/data');
    const errorCode = res.ok ? false : res.status;
    const data = await res.json();
    return { props: { errorCode, data } };
}

export default function App({ errorCode, data }) {
    if (errorCode) return <Error statusCode={errorCode} />;
    return <div>Data {JSON.stringify(data)}</div>;
}
```

### Image Optimization

1. **Next.js Image Configuration** : `next.config.js`

```javascript
module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 's3.amazonaws.com',
                pathname: '/**',
            },
        ],
    },
};
```

2. **Custom Image Loader**

```javascript
'use client';
const imageLoader = ({ src, width, quality }) => {
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
};
export default function Page() {
    return (
        <Image
            loader={imageLoader}
            src='me.png'
            alt='Picture of the author'
            width={500}
            height={500}
        />
    );
}
```
