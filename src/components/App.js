import logo from './images/logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import React, { useState, useEffect } from 'react';

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { NavBar } from './NavBar';
import { Cover } from './Cover';
import { AboutMe } from './sections/AboutMe';
import { Skills } from './sections/Skills';
import { ContactMe } from './sections/ContactMe';

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
    <div class="App">

      <Cover/>
      <NavBar/>
      <section id="AboutMe"><AboutMe/></section>
      <section id="Skills"><Skills/></section>
      <section id="ContactMe"><ContactMe/></section>
    </div>
  );
}

export default App;
