import React from 'react';
import useFetch from './useFetch';

export default function Test() {
    const { data, error, pending } = useFetch('https://dummyjson.com/products', {});

    if (pending) return <h2>Loading data ! Please wait...</h2>;

    if (error) return <h2>Some thing was wrong ! {error}</h2>;

    return (
        <div className='wrapper'>
            {data && data.products.length
                ? data.products.map((item) => <p key={item.id}>{item.title}</p>)
                : null}
        </div>
    );
}
