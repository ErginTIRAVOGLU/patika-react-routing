import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Users from "./components/Users";
import Home from "./components/Home";

function App() {
  /*
  function Home() {
    return (<h2>Home</h2>);
  }

  function About() {
    return <h2>About</h2>;
  }

  function Users() {
    return <h2>Users</h2>;
  }
  */

  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to={`/`}>Home</Link>
          </li>
          <li>
            <Link to={`/about`}>About</Link>
          </li>
          <li>
            <Link to={`/users`}>Users</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/about" element={<About/>} />
        <Route path="/users" element={<Users />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
