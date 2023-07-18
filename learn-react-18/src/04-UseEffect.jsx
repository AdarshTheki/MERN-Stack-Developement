import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

/**
 * It is used to Data fetching, Subscriptions, Manual changes to DOM etc.
 * Only one time page rerender when page load.
 * Can you useState use or update to rerender the useEffect.
 * Not used to inside of if else condition.
 **/

const url = "https://api.github.com/users";

const FetchComponents = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <h3>Github Users</h3>
      <ul>
        {users.map((ele) => {
          const { id, login, avatar_url, html_url } = ele;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} width='50px' />
              <p>
                Name:{login} & Link: <a href={html_url}>Profile</a>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default FetchComponents;
