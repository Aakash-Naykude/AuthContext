import "./App.css";
import { Navbar } from "./Componants/Navbar";
import { Status } from "./Componants/Status";
import { Login } from "./Componants/Login";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Login />
      <Status />
    </div>
  );
}

export default App;
