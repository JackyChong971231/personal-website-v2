import 'bootstrap/dist/css/bootstrap.css';
import './NavBar.css'
import "bootstrap/dist/js/bootstrap.bundle.min";

import myLogo from './images/myLogo.png'
import propic from './images/ProPic.jpg';

import React, { useState, useEffect } from 'react';

import { faBars, faBell, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function NavBar() {
    const [clicked, setClicked] = useState(false);;

    return (
        <>
            {/* <!-- Navbar --> */}
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                {/* <!-- Container wrapper --> */}
                <div class="container-fluid">
                    {/* <!-- Toggle button --> */}
                    <button
                    class="navbar-toggler shadow-none border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={() => {setClicked(!clicked);}}
                    >
                        <FontAwesomeIcon icon={clicked? faXmark: faBars}/>
                    </button>

                    {/* <!-- Collapsible wrapper --> */}
                    <div class="main-navigation collapse navbar-collapse" id="navbarSupportedContent">
                        {/* <!-- Navbar brand --> */}
                        <a class="navbar-brand mt-2 mt-lg-0" href="#">
                            <img
                            src={myLogo}
                            height="15"
                            alt="MDB Logo"
                            loading="lazy"
                            />
                        </a>
                        {/* <!-- Left links --> */}
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-start">
                            <li class="nav-item mx-3">
                            <a class="nav-link"
                            onClick={() => {setClicked(!clicked);}}
                            href="#AboutMe" >About Me</a>
                            </li>
                            <li class="nav-item mx-3">
                            <a class="nav-link" href="#bodybody">Working Experience</a>
                            </li>
                            <li class="nav-item mx-3">
                            <a class="nav-link" href="#">Projects</a>
                            </li>
                            <li class="nav-item mx-3">
                            <a class="nav-link" href="#">Skills</a>
                            </li>
                        </ul>
                        {/* <!-- Left links --> */}
                    </div>
                    {/* <!-- Collapsible wrapper --> */}

                    {/* <!-- Right elements --> */}
                    <div class="d-flex align-items-center">
                        {/* <!-- Icon --> */}
                        <a class="text-reset me-3" href="#">
                            <i class="fas fa-shopping-cart"></i>
                        </a>




                        {/* <!-- Notifications --> */}
                        <div class="dropdown">
                            <a
                            class="text-reset me-3 dropdown-toggle hidden-arrow"
                            href="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            >
                            <FontAwesomeIcon icon={faBell} />
                            <span class="badge rounded-pill badge-notification bg-danger">1</span>
                            </a>
                            <ul
                            class="dropdown-menu dropdown-menu-end"
                            aria-labelledby="navbarDropdownMenuLink"
                            >
                            <li>
                                <a class="dropdown-item" href="#">Some news</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">Another news</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </li>
                            </ul>
                        </div>

                        {/* <!-- Avatar --> */}
                        <div class="dropdown">
                            <a
                            class="dropdown-toggle d-flex align-items-center hidden-arrow"
                            href="#"
                            role="button"
                            id="navbarDropdownMenuAvatar"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            >
                                <img
                                    src={propic}
                                    class="rounded-circle"
                                    height="25"
                                    alt="Black and White Portrait of a Man"
                                    loading="lazy"
                                />
                            </a>
                            <ul
                                class="dropdown-menu dropdown-menu-end"
                                aria-labelledby="navbarDropdownMenuAvatar"
                            >
                                <li><a class="dropdown-item" href="#">My profile</a></li>
                                <li><a class="dropdown-item" href="#">Settings</a></li>
                                <li><a class="dropdown-item" href="#">Logout</a></li>
                            </ul>
                        </div>
                        
                        <a
                        class="btn btn-dark mx-3"
                        href="https://github.com/JackyChong971231"
                        role="button">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                    {/* <!-- Right elements --> */}
                </div>
                {/* <!-- Container wrapper --> */}
            </nav>
            {/* <!-- Navbar --> */}
        </>
    )
}