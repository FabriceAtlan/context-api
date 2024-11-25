import { useContext } from "react";
import { UserContext, UserProps } from "../../context/UserContext/UserContext";

function UserProfile() {
	const userContext = useContext<UserProps | null>(UserContext);
	if(!userContext) return;
	const {user, setUser} = userContext;

  return (
    <>
      <p>User is {!user ?"log out":"log in"}</p>

      <button onClick={() => setUser(!user)}>click to change user status </button>
    </>
  );
}

export default UserProfile;