import React, { useState, useEffect, useRef } from 'react';
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import ContactMeBackground from '../images/ContactMe/ContactMeBackground.jpg'

import './ContactMe.css';
import { SectionHeader } from '../common/sectionHeader';

export function ContactMe() {

    var [date,setDate] = useState(new Date());

    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    })

    return (
        <>
            <div id='contactSection' class="ContactMeContainer pt-5 w-100">
                <div className='row justify-content-center'>

                    <div className='col-12 col-lg-8 px-sm-5 m-0'>
                        <div className='contact-me-header'>
                            <SectionHeader
                            section='Contact'
                            title='Want to get in touch? I would love to hear from you!'
                            />
                        </div>
                        <p className='contact-me-header text-start px-4 py-2'>
                            <span>Local time:</span><br/>
                            <span>{date.toLocaleTimeString()}</span>
                            <span>, EST</span>
                        </p>
                        <div class="row justify-content-center">
                            {/* <h1 class="col-12 py-5" style={{ fontFamily: 'Times New Roman' }}>Get In Touch</h1> */}
                            <form class="contactMeForm col-10 col-md-10 col-lg-8">
                                {/* <!-- Name input --> */}
                                <div class="form-outline mb-4 text-start">
                                    <p className='m-1'><small>Name</small></p>
                                    <input type="text" id="form4Example1" placeholder="e.g. Jacky Chong" class="form-control" />
                                </div>

                                {/* <!-- Email input --> */}
                                <div class="form-outline mb-4 text-start">
                                    <p className='m-1'><small>E-Mail</small></p>
                                    <input type="email" id="form4Example2" placeholder="e.g. kinyechong@outlook.com" class="form-control" />
                                </div>

                                {/* <!-- Message input --> */}
                                <div class="form-outline mb-4 text-start">
                                    <p className='m-1'><small>Message</small></p>
                                    <textarea class="form-control" id="form4Example3" placeholder="Your message" rows="4"></textarea>
                                </div>

                                {/* <!-- Checkbox --> */}
                                {/* <div class="form-check d-flex justify-content-center mb-4">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="form4Example4" checked />
                                    <label class="form-check-label" for="form4Example4">
                                    Send me a copy of this message
                                    </label>
                                </div> */}

                                {/* <!-- Submit button --> */}
                                <button type="submit" class="btn btn-primary btn-block mb-4">Send message</button>
                            </form>

                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <footer class="ContactMeBottomContainer col-12">
                        <ul className='copyright px-0 mx-0'>
                            <li>© Personal Website</li>
                            <li>Design: Jacky Chong</li>
                            <li>Coding: Jacky Chong</li>
                        </ul>
                        <p>All content on this site is personally written and curated.</p>
                    </footer>

                </div>
            </div>

        </>
    )
}