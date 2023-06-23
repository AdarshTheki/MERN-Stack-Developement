import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

const url = "https://api.github.com/users";

function UseEffect() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const user = await response.json();
        setUsers(user);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h3>Github Users</h3>
      <ul>
        {users.map((ele) => {
          const { id, login, avatar_url, html_url } = ele;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} width='50px' />
              <div>{login}</div>
              <a href={html_url}>Profile</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default UseEffect;
