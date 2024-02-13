import React, { useState, useEffect, useRef } from 'react';
import propic from '../images/ProPic.jpg';
import resume from '../docs/resume.pdf';
import canadaFlag from '../../components/images/AboutMe/canada-flag.mp4';

// import { f } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AboutMeBg from '../images/ProPic_Landscape_2_downscale.jpg'

import './AboutMe.css';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function AboutMe() {
    const bgImgRef = useRef(null);
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

    useEffect(() => {
    //     gsap.to(".AboutMeBg", {
    //         transform: 'translateX(-50%) translateY(0%)',
    //         ease: "none",
    //         scrollTrigger: {
    //             trigger: ".",
    //             start: "top bottom",
    //             end: "bottom top",
    //             scrub: true
    //         }
    // });
    const el = bgImgRef.current;
    gsap.timeline({scrollTrigger:{
        trigger:'.about-me__container',
        start: 'top 70%',
        end: 'bottom 30%',
        scrub: 1,
    }})
        .fromTo('.AboutMeBg', {y: -100, ease: 'none'}, {y: 0}, 0)
    // gsap.fromTo(el, 
    //     {opacity: 0},
    //     {opacity: 100,
    //     ease: "none",
    //     duration: 100,
    //     scrollTrigger: {
    //       trigger: el,
    //       start: "top 100%",
    //       end: "bottom top",
    //       scrub: true,
    //       markers: true
    //     }}
    // );
//   gsap.fromTo(el, { rotation: 0 }, { rotation: 180, duration: 3 });
    },[])


    return (
        <>
            <div class="about-me__container container col-12 col-lg-8 pt-3 pb-5">
            
                <img class="AboutMeBg" src={AboutMeBg} ref={bgImgRef}></img>
                <div class="row">
                    <div class="col-sm-12">
                        <h1 class="text-sm-start fw-bold">About <span style={{color: 'var(--gold)'}}>Me</span></h1>
                        <div className='aboutMeShortBio__container'>
                            <p class="aboutMeShortBio text-sm-start">A {AboutMeContent.Title} based in {AboutMeContent.Workplace}</p>
                            <video className='canadaFlag' autoPlay muted loop>
                                <source src={canadaFlag} type='video/mp4' />
                            </video>
                        </div>
                    </div>
                </div>
                <div class="row my-3">
                    <div class="row col-md-4 pt-md-4 mx-auto py-2">  {/*d-flex align-items-center*/}
                        <div className='col-md-12 col-12 px-4'>
                            <img class="img-thumbnail rounded-circle t-50" src={propic}></img>
                        </div>
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
                    </div>
                    <div className='col-12 px-4 border-2 border-top h-100'>
                        <div class="row pt-2">
                            {Object.keys(AboutMeContent.AboutMeObject).map((fieldName)=>(
                                <div class="col-12 col-md-6">
                                    <div class="row text-start my-1">
                                        <div class="col-4 fw-bold">{fieldName}: </div>
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