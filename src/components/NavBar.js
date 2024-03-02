import 'bootstrap/dist/css/bootstrap.css';
import './NavBar.css'
import "bootstrap/dist/js/bootstrap.bundle.min";

import myLogo from './images/myLogo.png'
import propic from './images/ProPic.jpg';

import resume from './docs/resume.pdf';
import HKEReferenceLetter from './docs/HKEReferenceLetter.pdf';
import PCLReferenceLetter from './docs/PCLReferenceLetter.pdf';

import React, { useState, useEffect, useRef } from 'react';

import { faBars, faBell, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function NavBar({setNavbarInUsed}) {
    const [isExpended, setIsExpended] = useState(false);
    const [isDocsExpended, setIsDocsExpended] = useState(false);

    function navbarItemOnClickHandler(href) {
        window.location.href=href;
        setIsExpended(false);
    }

    const topLeftNavBarOnClickHandler = () => {
        setIsExpended(prevState => !prevState);
    }

    const topLeftNavBarOnBlurHandler = () => {
        if (isExpended) {
            setIsExpended(false);
        }
    }

    const docsOnClickHandler = () => {
        setIsDocsExpended(true);
    }

    const docsOnBlurHandler = () => {
        if (isDocsExpended) {
            setTimeout(() => {
                setIsDocsExpended(false);
            }, 500)
        }
    }

    useEffect(() => {
        // console.log(isExpended || isDocsExpended)
        setNavbarInUsed((isExpended || isDocsExpended))
    }, [isExpended, isDocsExpended])

    return (
        <>
            {/* <!-- Navbar --> */}
            <nav id="NavBar" className="navbar navbar-expand-md navbar-light fixed-top"
            style={{top: (isExpended || isDocsExpended)?"0":""}}>
                {/* <!-- Container wrapper --> */}
                <div class="container-fluid container-fluid--navbar">
                    {/* <!-- Toggle button --> */}
                    <button
                    class="navbar-toggler shadow-none border-0"
                    type="button"
                    data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={topLeftNavBarOnClickHandler}
                    onBlur={topLeftNavBarOnBlurHandler}
                    >
                        <FontAwesomeIcon icon={isExpended? faXmark: faBars}/>
                    </button>

                    {/* <!-- Collapsible wrapper --> */}
                    <div class={"collapse navbar-collapse " + (isExpended? "show": "")} id="navbarSupportedContent">
                        {/* <!-- Left links --> */}
                        <ul class="nav navbar-nav me-auto mb-2 mb-lg-0 text-start">
                            <li class="nav-item mx-3">
                                <a class="nav-link" style={{cursor: "pointer"}}
                                data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"
                                onClick={() => navbarItemOnClickHandler("#JustAboveNarbar")}
                                >About</a>
                            </li>
                            <li class="nav-item mx-3">
                                <a class="nav-link" style={{cursor: "pointer"}}
                                data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"
                                onClick={() => navbarItemOnClickHandler("#projectsSection")}
                                >Projects</a>
                            </li>
                            <li class="nav-item mx-3">
                                <a class="nav-link" style={{cursor: "pointer"}}
                                data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"
                                onClick={() => navbarItemOnClickHandler("#skillsSection")}
                                >Skills</a>
                            </li>
                            <li class="nav-item mx-3">
                                <a class="nav-link" style={{cursor: "pointer"}}
                                data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"
                                onClick={() => navbarItemOnClickHandler("#experienceSection")}
                                >Experience</a>
                            </li>
                        </ul>
                    </div>

                    <div class="d-flex align-items-center">

                        <a class="text-reset me-3" href="#"><i class="fas fa-shopping-cart"></i></a>
                        <div class="dropdown">
                            <a
                            class="text-reset me-3 dropdown-toggle hidden-arrow"
                            href="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            onClick={docsOnClickHandler}
                            onBlur={docsOnBlurHandler}
                            >
                            Docs
                            {/* <span class="badge rounded-pill badge-notification bg-danger">1</span> */}
                            </a>
                                <ul className={'dropdown-menu '+((isExpended)? 'dropdown-menu-start ':'dropdown-menu-end ') + ((isDocsExpended)? 'show': '')}
                                aria-labelledby="navbarDropdownMenuLink">
                                    <li>
                                        <a class="dropdown-item" href={resume} target="_blank">Resume</a>
                                    </li>
                                    <li><hr class="dropdown-divider"/></li>
                                    <h6 class="dropdown-header">Supervisor's Reference Letter <br/>from:</h6>
                                    <li>
                                        <a class="dropdown-item" href={PCLReferenceLetter} target="_blank"><small>PrimeCredit Limited</small></a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href={HKEReferenceLetter} target="_blank"Z><small>The Hongkong Electric Co., Ltd</small></a>
                                    </li>
                                </ul>
                        </div>
                        <a
                            class="btn"
                            href="#"
                            >
                            <img
                                src={propic}
                                class="rounded-circle"
                                height="25"
                                alt="Black and White Portrait of a Man"
                                loading="lazy"
                            />
                        </a>

                        <a
                        class="btn btn-dark mx-3"
                        href="https://github.com/JackyChong971231"
                        target="_blank"
                        role="button">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}