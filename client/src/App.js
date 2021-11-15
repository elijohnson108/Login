import {Router} from "@reach/router";
import './App.css';
import Login from "./Components/Login";
import Register from "./Components/Register";
import Dashboard from "./Components/Dashboard";


function App() {
  return (
    <div>
      <Router>
          <Login path="/"/>
          <Register path="/register"/>
          <Dashboard path="/dashboard"/>
      </Router>
    </div>
  );
}

export default App;
