/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';

export default function GithubProfileFinder() {
    const [username, setUsername] = useState('adarshtheki');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    async function fetchGithubUserData() {
        try {
            const res = await fetch(`https://api.github.com/users/${username}`);
            const data = await res.json();
            if (data) setUserData(data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchGithubUserData();
    }, [username]);

    if (loading) return <h2 className='wrapper'>Loading Data ! Please wait...</h2>;

    return (
        <div className='wrapper'>
            <h2>Github Profile Finder:</h2>
            <input
                type='text'
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                name='search-by-username'
                placeholder='Search Github UserName'
            />
            <button >Search</button>
            {userData !== null ? <Cards user={userData} /> : <h3>Please Enter Your Inputs valid User Name !</h3>}
        </div>
    );
}

function Cards({user}) {
    function dateFormate(getDate) {
        const date = new Date(getDate);
        return date.toLocaleString('en-us', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        });
    }

    return (
        <div>
            <img src={user?.avatar_url} alt={user?.name} width={100} />
            <p><strong>Created_at</strong> :- {dateFormate(user?.created_at)}</p>
            <p><strong>Updated_at</strong> :- {dateFormate(user?.updated_at)}</p>
            <p><strong>Location</strong> :- {user?.location}</p>
            <p><strong>Name :- </strong> {user?.name}</p>
            <a href={`https://github.com/${user?.login}`} target='__blank'>
                <strong>Profile_URL</strong> :- {user?.login}
            </a>
            <p><strong>Json_data</strong> :- {user?.url}</p>
        </div>
    );
}
