import React, { useState, useEffect, useRef } from 'react';
import propic from '../images/ProPic.jpg';
import resume from '../docs/resume.pdf';

// import { f } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './AboutMe.css';


export function AboutMe() {

    const AboutMeContent = {
        Title: 'Software Engineer',
        Workplace: 'Canada',
        Bio: <p>Formerly contributing to the FinTech Innovation Team within a Financial Institution as a software engineer, my area of expertise lies in implementing the <mark class='gold'>Software Development Life Cycle</mark> to develop secure, scalable, and efficient applications. Through my experience and training, I have developed a deep understanding of the complexities of financial technology and the importance of adhering to industry standards. By leveraging cutting-edge tools and techniques, I am able to deliver high-quality solutions that meet the needs of both my clients and stakeholders.</p>,
        Passion: <p><mark class='gold'>Coding, for me, is not just a job; it's a passion. Imagine teaching a computer to think like you do – that's the thrill I find in building applications from scratch.</mark> What sets me apart is not just my technical expertise but also my commitment to staying at the forefront of advancements. I take pride in crafting high-quality, optimal code that evolves with the industry. Join me in exploring the dynamic world of software development, where innovation meets impact.</p>,
        AboutMeObject: {
            Birthday: <div class="col-8">31 Dec 1997</div>,
            Age: <div class="col-8">26 Years Old</div>,
            Phone: <a href="tel:+1-437-660-0469" class="col-8">+1 (437) 660-0469</a>,
            Email: <a href="mailto:kinyechong@outlook.com" class="col-8">kinyechong@outlook.com</a>
        }
    }

    const ContactPoint = {
        Instagram:  {icon: faInstagram, url: "https://www.instagram.com/cggyee"},
        LinkedIn:   {icon: faLinkedin,  url: "https://www.linkedin.com/in/jacky-chong-kin-ye"}
    }

    return (
        <>
            <div class="container col-12 col-lg-8 mt-3 mb-5">
                <div class="row">
                    <div class="col-sm-12">
                        <h1 class="text-sm-start fw-bold">About <span style={{color: 'var(--gold)'}}>Me</span></h1>
                        <p class="aboutMeShortBio text-sm-start">A {AboutMeContent.Title} based in {AboutMeContent.Workplace}</p>
                    </div>
                </div>
                <div class="row my-3">
                    <div class="col-md-4 pt-md-4 mx-auto">  {/*d-flex align-items-center*/}
                        <img class="img-thumbnail rounded-circle w-100 t-50" src={propic}></img>
                    </div>
                    <div class="col-md-8 py-md-0 py-3">
                        <div class="row my-3 my-sm-0">
                            <div class="d-flex align-items-center">
                                {Object.keys(ContactPoint).map((eachApp)=>(
                                    <a
                                    class="btn btn-dark mx-1"
                                    href={ContactPoint[eachApp].url}
                                    target="_blank"
                                    role="button">
                                        <FontAwesomeIcon icon={ContactPoint[eachApp].icon} />
                                    </a>
                                ))}
                                <a class="btn btn-dark mx-1" href={resume} target="_blank"> Download resume</a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="text-start pt-3">
                                <h3>I'm a passionate Software Engineer</h3>
                                {AboutMeContent.Bio}
                                {AboutMeContent.Passion}
                            </div>
                        </div>
                        <div class="row border-2 border-top pt-2">
                            {Object.keys(AboutMeContent.AboutMeObject).map((fieldName)=>(
                                <div class="col-12 col-md-6">
                                    <div class="row text-start my-1">
                                        <div class="col-4 fw-bold">{fieldName}</div>
                                        {AboutMeContent.AboutMeObject[fieldName]}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}