import logo from './images/logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {NavBar} from './NavBar';

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="App">

      <NavBar/>

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
          Learn React
        </a>
        <a
        class="btn btn-bright mx-3"
        href="https://github.com/JackyChong971231"
        role="button">
            <FontAwesomeIcon icon={faGithub} />
        </a>
      
      </header>
    </div>
  );
}

export default App;
