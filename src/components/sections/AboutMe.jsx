import React, { useState, useEffect, useRef } from 'react';
import propic from '../images/ProPic.jpg';
import resume from '../docs/resume.pdf';
import canadaFlag from '../../components/images/AboutMe/canada-flag.mp4';

// import { f } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import AboutMeBg from '../images/ProPic_Landscape_2_downscale.jpg'

import reactLogo from '../images/AboutMe/logos/react.png'
import springBootLogo from '../images/AboutMe/logos/springBoot.png'
import djangoLogo from '../images/AboutMe/logos/django.png'
import mysqlLogo from '../images/AboutMe/logos/mysql.png'
import dockerLogo from '../images/AboutMe/logos/docker.png'
import jenkinsLogo from '../images/AboutMe/logos/jenkins.png'

import './AboutMe.css';
import axios from "axios";

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeader } from '../common/sectionHeader';
gsap.registerPlugin(ScrollTrigger);

const POST      = 'POST';
const GET       = "GET";

// const serverUrl = process.env.REACT_APP_SERVER_IP || 'http://137.184.166.60:8080';
// const serverUrl = process.env.REACT_APP_SERVER_IP || 'http://localhost:8080';
// const serverUrl = 'http://localhost:8080'; // testing
const serverUrl = 'http://137.184.166.60:8080';
const endPoint = "/api/v1/personal-website/http-request"

const apiGateway = async (method, endPoint, requestBody) => {
    // console.log(JSON.stringify(requestBody));
    const response = await fetch(serverUrl + endPoint, {
        method: method,
        mode: 'cors',
        credentials: 'include',
        headers: { 
            'Content-Type': 'application/json', 
            'Connection': 'keep-alive', 
            'Access-Control-Allow-Origin': "*",
            'Origin': 'http://192.168.56.1:3000' // testing 
            // 'Origin': 'http://137.184.166.60:5000' 
        },
        body: (method !== GET)? JSON.stringify(requestBody): null
    })
    const body = await response.json();
    return body;
}

export function AboutMe() {
    const [fromIp, setFromIp] = useState();
    const [startTime, setStartTime] = useState(new Date().toISOString().slice(0, 19).replace("T", " "));
    // const [visitRecordID, setVisitRecordID] = useState(); // for database
    let visitRecordID = null; // for database
    let vistRecordRequest = { // for database
        ipAddr: null,
        enterTime: null,
        geolocation: '',
        connectionType: '',
        organizationName: ''
    }
    const AboutMeContent = {
        Title: 'Software Engineer',
        Workplace: 'Canada',
        Bio: <p>I specialize in implementing the <mark class='black bold'>Software Development Life Cycle</mark> for secure, scalable applications, handling <mark class='black bold'>frontend, backend, database and deployment</mark>. With experience in working in a financial institution, I prioritize industry standards, delivering top-notch solutions using cutting-edge tools.<br/><br/><mark class='black bold'>Coding isn't just a job; it's my passion. Teaching a computer to think like humans thrills me.</mark> I'm committed to staying updated with advancements, crafting high-quality, evolving code.</p>,
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

    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
    };

    async function success(pos) {
        var crd = pos.coords;
        // console.log("Your current position is:");
        // console.log(`Latitude : ${crd.latitude}`);
        // console.log(`Longitude: ${crd.longitude}`);
        // console.log(`More or less ${crd.accuracy} meters.`);
        // console.log(vistRecordRequest)
        vistRecordRequest.geolocation = `Latitude: ${crd.latitude}; Longtitude: ${crd.longitude} within ${crd.accuracy} meters`;
        const response = await apiGateway(POST, endPoint + "/add", vistRecordRequest);
        visitRecordID = response.data.personalWebsiteHttpRequestId;
    }
    
    async function errors(err) {
        // console.warn(`ERROR(${err.code}): ${err.message}`);
        const response = await apiGateway(POST, endPoint + "/add", vistRecordRequest);
        visitRecordID = response.data.personalWebsiteHttpRequestId;
        // return {latitude: null, longitude: null}
    }

    const getGeolocation = async () => {
        if (navigator.geolocation) {
            const result = await navigator.permissions.query({ name: "geolocation" })

            if (result.state === "granted") {
                //If granted then you can directly call your function here
                navigator.geolocation.getCurrentPosition(success, errors, options);
            } else if (result.state === "prompt") {
                //If prompt then the user will be asked to give permission
                navigator.geolocation.getCurrentPosition(success, errors, options);
            } else if (result.state === "denied") {
                //If denied then you have to show instructions to enable location
            }

        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }

    const recordUserData = async () => {
        const userIp = await getFromIp();
        vistRecordRequest.ipAddr = userIp;
        vistRecordRequest.enterTime = startTime;
        getGeolocation();
        // const ipInfo = await getIpLocationInfo(userIp); // api max usage reached
        // const vistRecordRequest = { // api max usage reached
        //     ipAddr: userIp,
        //     enterTime: startTime,
        //     geolocation: ipInfo.city + ', ' + ipInfo.country + ', ' + ipInfo.postal_code,
        //     connectionType: String(ipInfo.connection.connection_type),
        //     organizationName: String(ipInfo.connection.organization_name)
        // }
        // const response = await apiGateway(POST, endPoint + "/add", vistRecordRequest);
        // visitRecordID = response.data.personalWebsiteHttpRequestId;
    }

    const getFromIp = async () => {
        const res = await axios.get("https://api.ipify.org/?format=json");
        setFromIp(res.data.ip);
        return res.data.ip;
    }

    const updateVisitRecord = async () => {
        const endTime = new Date().toISOString().slice(0, 19).replace("T", " ");
        const vistRecordUpdateRequest = {
            personalWebsiteHttpRequestId: visitRecordID,
            leaveTime: endTime
        }
        // console.log(vistRecordUpdateRequest);
        const response = await apiGateway(POST, endPoint + "/update", vistRecordUpdateRequest);
        // console.log(response);
        // console.log('function called');
    }


    useEffect(() => {        
        recordUserData(); // add a record in database
        // getGeolocation();

        gsap.timeline({scrollTrigger:{
            trigger:'.about-me__container',
            start: 'top 70%',
            end: 'bottom 30%',
            onEnter: updateVisitRecord,
            scrub: 1,
        }})
            .fromTo('.AboutMeBg', {y: -100, ease: 'none'}, {y: 0}, 0)

        gsap.to('.about-me-img-container', {scrollTrigger: ".about-me-img-container", left: 0, opacity: 1, duration: 2});
        gsap.to('.about-me-text-container', {scrollTrigger: ".about-me-text-container", left: 0, opacity: 1, duration: 2});
    },[])

    return (
        <>
            <div className='about-me-outer-container w-100'>
                <div class="about-me__container col-12 col-lg-10 row px-3 m-0">
                    <div className='about-me-scroll-container col-12'>
                        <p>My expertise</p>
                        <div className='about-me-scroll' style={{"--time":'50s'}}>
                            <div>
                                <span className='about-me-scroll-item'><img src={reactLogo}/></span>
                                <span className='about-me-scroll-item'><img src={springBootLogo}/></span>
                                <span className='about-me-scroll-item'><img src={djangoLogo}/></span>
                                <span className='about-me-scroll-item'><img src={mysqlLogo}/></span>
                                <span className='about-me-scroll-item'><img src={jenkinsLogo}/></span>
                                <span className='about-me-scroll-item'><img src={dockerLogo}/></span>
                            </div>
                            <div>
                                <span className='about-me-scroll-item'><img src={reactLogo}/></span>
                                <span className='about-me-scroll-item'><img src={springBootLogo}/></span>
                                <span className='about-me-scroll-item'><img src={djangoLogo}/></span>
                                <span className='about-me-scroll-item'><img src={mysqlLogo}/></span>
                                <span className='about-me-scroll-item'><img src={jenkinsLogo}/></span>
                                <span className='about-me-scroll-item'><img src={dockerLogo}/></span>
                            </div>
                        </div>
                    </div>
                    <div className='about-me__inner-container col-12'>
                        {/* <img class="AboutMeBg" src={AboutMeBg} ref={bgImgRef}></img> */}
                        <div class="row align-items-center">
                            <div className='about-me-text-container col-12 col-md-7'>
                                <SectionHeader 
                                section='About'
                                title='A software engineer based in Canada'
                                description={AboutMeContent.Bio}/>
                                <button className='about-me-contact-me-btn-container ms-4 my-3'
                                    onClick={() => {window.location.href='#contactSection'}}>
                                    <div className='about-me-contact-me-btn-bg'>
                                        
                                    </div>
                                    <p className='about-me-contact-me-btn-text m-0 py-2 px-4'>Contact me</p>
                                    <FontAwesomeIcon className='about-me-contact-me-btn-arrow' icon={faArrowRight} />
                                </button>
                            </div>
                            <div className='about-me-img-container col-12 col-sm-10 col-md-5'>
                                <img class="about-me-img" src={propic}></img>
                            </div>
                        </div>
                        {/* <div class="row my-5">
                            <div class="row col-md-4 pt-md-4 mx-auto py-2">
                                <div className='col-md-12 col-12 px-4'>
                                    <img class="img-thumbnail rounded-circle t-50" src={propic}></img>
                                </div>
                                <div className='about-me-contact col-12 px-4 pt-4'>
                                    <div><FontAwesomeIcon icon={faPhone} /><a href="tel:+1-437-660-0469" className="ps-3">+1 (437) 660-0469</a></div>
                                    <div><FontAwesomeIcon icon={faEnvelope} /><a href="mailto:kinyechong@outlook.com" class="ps-3">kinyechong@outlook.com</a></div>
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
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}