import logo from './logo.svg';
import './App.css';
import axios from "axios";

function App() {


  const makeApiRequestFirst = () => {
    axios.get("/auth/api/testwithapidata").then(res => {
      console.log(res.data)
    })
  }

  const makeApiRequestSecond = () => {
    axios.get("/api/testwithcurrentuser").then(res => {
      console.log(res.data)
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button onClick={() => makeApiRequestFirst()}>Make API request First</button>
          <button onClick={() => makeApiRequestSecond()}>Make API request Second</button>
        </a>
      </header>
    </div>
  );
}

export default App;
