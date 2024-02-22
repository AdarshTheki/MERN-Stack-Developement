import React, { useEffect, useState } from 'react';

export default function SearchAutoComplete() {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchParam, setSearchParam] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [filterUser, setFilterUser] = useState([]);

    async function fetchUser() {
        try {
            const res = await fetch(`https://dummyjson.com/users`);
            const data = await res.json();
            if (data && data.users && data.users.length) {
                setUser(data.users.map((users) => users.firstName));
            }
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUser();
    }, []);

    function handleChange(event) {
        const query = event.target.value.toLowerCase();
        setSearchParam(query);
        if (query.length > 1) {
            const filter =
                user && user.length
                    ? user.filter((item) => item.toLowerCase().indexOf(query) > -1)
                    : [];
            setFilterUser(filter);
            setShowDropdown(true);
        } else {
            setShowDropdown(false);
        }
    }

    function handleClick(event) {
        setSearchParam(event.target.innerText);
    }

    if (loading) return <h2 className='wrapper'>Loading Data ! please wait...</h2>;

    if (error) return <h2 className='wrapper'>SomeThing was wrang {error}</h2>;

    return (
        <div className='wrapper'>
            <h2>Search Auto Complete:</h2>
            <input
                value={searchParam}
                onChange={handleChange}
                type='text'
                placeholder='search users'
            />
            <button>Search</button>
            <br />
            {showDropdown && <Suggestions data={filterUser} handleClick={handleClick} />}
        </div>
    );
}

function Suggestions({ data, handleClick }) {
    return (
        <ul>
            {data && data.length
                ? data.map((item) => (
                      <li key={item} onClick={handleClick}>
                          {item}
                      </li>
                  ))
                : null}
        </ul>
    );
}
