import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";
export const Status = () => {
  const { isAuth, token } = useContext(AuthContext);

  return (
    <div>
      <h1>{isAuth ? `token is ${token}` : `User Is not yet logged in`}</h1>
    </div>
  );
};
