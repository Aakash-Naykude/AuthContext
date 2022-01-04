import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

export const Navbar = () => {
  const {isTog, handleToggleAuth } = useContext(AuthContext);

  return (
    <div>
      <button onClick={handleToggleAuth}>
        {isTog ? "Sign-Out" : "Sign-In"}
      </button>
      <h1>Login</h1>
    </div>
  );
};
