import React, { useState, useEffect, useRef } from 'react';
import propic from '../images/ProPic.jpg';

// import { f } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './AboutMe.css';


export function AboutMe() {

    const AboutMeContent = {
        Title: 'Software Engineer',
        Workplace: 'Hong Kong',
        Bio: 'As a member of the FinTech Innovation Team within a Financial Institution, my area of expertise lies in implementing the Software Development Life Cycle to develop secure, scalable, and efficient financial applications. Through my experience and training, I have developed a deep understanding of the complexities of financial technology and the importance of adhering to industry standards. By leveraging cutting-edge tools and techniques, I am able to deliver high-quality solutions that meet the needs of both my clients and stakeholders.',
        Passion: 'To me, coding is like teaching a computer to think like me, so it can do things the way I want them done. What I love most about coding is the sense of accomplishment I feel when I build something from scratch, and then see it come to life and make a positive impact. I take pride in my work and always strive to write high quality code that performs optimally. Its also a constant learning process, which keeps me motivated and engaged. I find great satisfaction in staying up-to-date with the latest trends and technologies, and I enjoy the challenge of improving the system with these concepts to solve real-world problems.',
        AboutMeObject: {
            Birthday: <div class="col-8">31 Dec 1997</div>,
            Age: <div class="col-8">25 Years Old</div>,
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
                    <div class="col-md-8">
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
                                <a class="btn btn-dark mx-1"> Download CV</a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="text-start pt-3">
                                <h3>I'm a passionate Software Engineer</h3>
                                <p>{AboutMeContent.Bio}</p>
                                <p>{AboutMeContent.Passion}</p>
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