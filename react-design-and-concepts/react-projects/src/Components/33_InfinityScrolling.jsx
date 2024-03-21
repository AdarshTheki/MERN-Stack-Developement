/* eslint-disable react/prop-types */
import React, { useCallback, useEffect, useRef, useState } from 'react';

function InfinityScrolling({ renderListItem, getData, listData = [], query = '' }) {
    const pageNumber = useRef(1);
    const [loading, setLoading] = useState(false);

    const renderList = useCallback(
        () => listData.map((item, index) => renderListItem(item, index, null)),
        [listData, renderListItem]
    );

    useEffect(() => {
        setLoading(true);
        getData(query, pageNumber.current).finally(() => setLoading(false));
    }, [query, getData]);
    return <div>{renderList()}</div>;
}

export default function Test() {
    const [query, setQuery] = useState('');
    const [data, setData] = useState([]);
    const controllerRef = useRef(null);

    const handleInput = useCallback((e) => {
        setQuery(e.target.value);
    }, []);

    const renderItem = useCallback(({ title }, key, ref) => <div key={key}>{title}</div>, []);

    const getData = useCallback(async (query, pageNumber) => {
        try {
            if (controllerRef.current) controllerRef.current.abort();
            controllerRef.current = new AbortController();
            const response = await fetch(
                'https://openlibrary.org/search.json?' +
                    new URLSearchParams({ q: query, page: pageNumber }),
                { signal: controllerRef.current.signal }
            );
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data);
            setData((prev) => [...prev, ...data.docs]);
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }, []);

    return (
        <div>
            <input type='text' value={query} onChange={handleInput} />
            <InfinityScrolling
                renderListItem={renderItem}
                listData={data}
                getData={getData}
                query={query}
            />
        </div>
    );
}
