import React, { useState, useEffect } from 'react';

const useFetch = <T,>(url: string): { data: T | null; error: string | null } => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError('Error fetching data');
            }
        };

        fetchData();
    }, [url]);

    return { data, error };
};

type DataProp = { id: number; name: string };

const DataComponent: React.FC = () => {
    const { data, error } = useFetch<DataProp[]>('https://jsonplaceholder.typicode.com/users');

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            {data ? (
                <ul>
                    {data.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default DataComponent;
