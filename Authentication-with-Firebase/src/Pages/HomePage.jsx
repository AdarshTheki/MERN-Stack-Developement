import { Link } from "react-router-dom";
import useUser from "./Hooks/useUser";

const Home = () => {
  const { isLoading, user } = useUser();
  console.log(user);
  return (
    <div style={{ width: "80vw" }}>
      {!isLoading ? (
        <div>
          <h2>Home Page</h2>
          <p>
            {!user ? (
              <div>
                eos delectus eaque enim quibusdam maiores, incidunt, ducimus
                iure voluptatem deleniti labore? Quidem, porro dolores natus
                harum ipsam molestiae laboriosam nulla? Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Sapiente,
              </div>
            ) : (
              <div>
                <p>
                  accessToken: {JSON.stringify(user?.accessToken)?.toString()}
                </p>
                <p>MetaData: {JSON.stringify(user?.metadata)?.toString()}</p>
                <p>Name: {JSON.stringify(user?.displayName)?.toString()}</p>
                <p>Email: {JSON.stringify(user?.email)?.toString()}</p>
                <p>UID: {JSON.stringify(user?.uid)?.toString()}</p>
                <p>Photo: {JSON.stringify(user?.photoURL)?.toString()}</p>
              </div>
            )}
          </p>
          <h2>
            {!user ? (
              <Link to='/login'>LogIn</Link>
            ) : (
              <Link to='/logout'>Logout</Link>
            )}
          </h2>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default Home;
