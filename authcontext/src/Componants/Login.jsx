import { AuthContext } from "../Context/AuthContext";
import { useContext, useState } from "react";
export const Login = () => {
  const { handleLogin } = useContext(AuthContext);

  const [username, setUsername] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    handleLogin(username);
  };
  return (
    <form onSubmit={onSubmit} title="Login">
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="name"
      />
      <input type="submit" value="Submit" />
    </form>
  );
};
