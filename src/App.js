import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <main className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Welcome to the site</h3>
        <p>a better welcome message</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <p>marketing message</p>
      <footer>copyright {new Date().getFullYear()}</footer>
    </main>
  );
}

export default App;
