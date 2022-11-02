import logo from './images/logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {NavBar} from './NavBar';
import { HomePage } from './HomePage';
import React, { useState, useEffect } from 'react';

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AboutMe } from './sections/AboutMe';

function App() {
  const [prevScrollpos, setPrevScrollpos] = useState(0);

  useEffect(() => {
    const onScroll = e => {
      console.log(document.getElementsByClassName("navbar")[0].style);
      if (prevScrollpos > window.pageYOffset) {
        document.getElementsByClassName("navbar")[0].style.top = "0";
      } else if (window.pageYOffset - window.screen.height > 50) {
        document.getElementsByClassName("navbar")[0].style.top = "-60px";
      }
      setPrevScrollpos(window.pageYOffset);
    }
    window.addEventListener("scroll", onScroll)


  })

  return (
    <div className="App">

      <HomePage/>
      <NavBar/>
      <section id="AboutMe"><AboutMe/></section>

      <section id="bodybody">
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
      </section>
    </div>
  );
}

export default App;
