/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

export default function LoadMore() {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disableButton, setDisableButton] = useState(false);

    async function fetchProducts() {
        try {
            const res = await fetch(
                `https://dummyjson.com/products?limit=10&skip=${count === 0 ? 0 : count * 20}`
            );
            const data = await res.json();
            if (data.products.length) {
                setProducts((prev) => [...prev, ...data.products]);
            }
        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [count]);

    useEffect(() => {
        if (products && products.length === 50) setDisableButton(true);
    }, [products]);

    if (loading) return <h2 className='wrapper'>Loading data! please wait...</h2>;

    return (
        <div className='wrapper'>
            <h2>Load More Data:</h2>
            <div className='load-more'>
                {products.length
                    ? products.map((product) => (
                          <div key={product.id}>
                              <img src={product.images[0]} alt={product.name} />
                              <p>{product.title}</p>
                          </div>
                      ))
                    : null}
            </div>
            <button disabled={disableButton} onClick={() => setCount(count + 1)}>
                load more data
            </button>
            {disableButton ? <p>You have reach to the 100 products</p> : null}
        </div>
    );
}
