import React, { useEffect, useState } from 'react';

const url = 'https://dummyjson.com/products';

export default function ScrolledIndicator() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [scrollPercentage, setScrollPercentage] = useState(0);

    async function fetchData(url) {
        try {
            const res = await fetch(url);
            const result = await res.json();
            if (result && result.products) setData(result.products);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData(url);
    }, []);

    function handleScroll() {
        const scrolledHeight = document.body.scrollTop || document.documentElement.scrollTop;
        const height =
            document.documentElement.scrollHeight - document.documentElement.clientHeight;
        setScrollPercentage(Math.floor((scrolledHeight / height) * 100));
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (loading) return <h2 className='wrapper'>Loading data ! Please wait...</h2>;

    return (
        <div className='wrapper'>
            <h2>Custom Scroll Indicators:</h2>
            <div className='scroll-position' style={{ width: `${scrollPercentage}%` }}></div>
            {data && data.length > 0
                ? data.map((product) => <h4 key={product.id}>{product.title}</h4>)
                : null}
        </div>
    );
}
