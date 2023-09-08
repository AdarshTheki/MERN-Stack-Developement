import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import useUser from "./Hooks/useUser";
import { Link } from "react-router-dom";

const LogoutPage = () => {
  const { user } = useUser();
  const signOutHandler = async () => {
    await signOut(auth)
      .then(() => {
        alert("Sign-out successful.");
      })
      .catch((error) => {
        alert("An error happened.", error.message);
      });
  };

  return (
    <div>
      <h2>Can you Logout this user?</h2>
      <h4>{user?.email}</h4>
      {!user?.email && <h2>You are already Logout please logIn?</h2>}
      <button onClick={signOutHandler}>Logout</button>
      <h2>
        Got to <Link to='/'>Home</Link> page.
      </h2>
    </div>
  );
};

export default LogoutPage;
