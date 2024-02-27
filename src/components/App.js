import logo from './images/logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import React, { useState, useEffect, useRef } from 'react';

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { NavBar } from './NavBar';
import { Cover } from './Cover';
import { AboutMe } from './sections/AboutMe';
import { Skills } from './sections/Skills';
import { ContactMe } from './sections/ContactMe';
import { Projects } from './sections/Projects';

function App() {
  const [prevScrollpos, setPrevScrollpos] = useState(0);
  const [navbarInUsed, setNavbarInUsed] = useState(false);

  useEffect(() => {
    const onScroll = e => {
      if(!navbarInUsed) {
        if (prevScrollpos > window.pageYOffset) {
          document.getElementsByClassName("navbar")[0].style.top = "0";
        } else {
          if (document.getElementsByClassName("collapse")[0].style.height) { // this is double confirm check for NavBar cuz when navbar expanded, window pageyOffset is changed too
            document.getElementsByClassName("navbar")[0].style.top = "0";
          } else {
            document.getElementsByClassName("navbar")[0].style.top = "-100px";
          }
        }
        setPrevScrollpos(window.pageYOffset);
      }
    }
    window.addEventListener("scroll", onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  // })
  }, [window.pageYOffset, navbarInUsed])

  return (
    <div class="App">

      <Cover setNavbarInUsed={setNavbarInUsed}/>
      <div id="JustAboveNarbar"></div>
      <NavBar setNavbarInUsed={setNavbarInUsed}/>
      <section id="AboutMe"><AboutMe/></section>
      <section id="Projects"><Projects/></section>
      <section id="Skills"><Skills/></section>
      <section id="ContactMe"><ContactMe/></section>
    </div>
  );
}

export default App;
