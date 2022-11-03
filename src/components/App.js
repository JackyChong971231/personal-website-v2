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
    <div class="App pb-5">

      <HomePage/>
      <NavBar/>
      <section id="AboutMe"><AboutMe/></section>
    </div>
  );
}

export default App;
