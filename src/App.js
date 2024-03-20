import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import React, { useState, useEffect, useRef } from 'react';

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { NavBar } from './components/navbar/NavBar';
import { Cover } from './sections/1-cover/Cover';
import { AboutMe } from './sections/2-about-me/AboutMe';
import { Projects } from './sections/3-projects/Projects';
import { Skills } from './sections/4-skills/Skills';
import { Experience } from './sections/5-experience/Experience';
import { ContactMe } from './sections/6-contact/ContactMe';

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
      {/* <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1> */}
      <Cover setNavbarInUsed={setNavbarInUsed}/>
      <NavBar setNavbarInUsed={setNavbarInUsed}/>
      <section id="AboutMe"><AboutMe/></section>
      <section id="Projects"><Projects/></section>
      <section id="Skills"><Skills/></section>
      <section id='Experience'><Experience/></section>
      <section id="ContactMe"><ContactMe/></section>
    </div>
  );
}

export default App;
