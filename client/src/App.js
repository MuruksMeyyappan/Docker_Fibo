import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FibPage from "./Fib";
import otherPage from "./OtherPage";
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome React App</h1>
          <Link to="/"> HomePage</Link>
          <Link to="/otherPage">Other Page</Link>
        </header>
        <div>
          <Route exact path='/' component={FibPage} />
          <Route exact path="/otherPage" component ={otherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
