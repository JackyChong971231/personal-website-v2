import React, { useState, useEffect, useRef } from 'react';
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import ContactMeBackground from '../images/ContactMe/ContactMeBackground.jpg'

import './ContactMe.css';


export function ContactMe() {


    useEffect(() => {

    },[])

    return (
        <>
            <div class="ContactMeContainer container-fluid">
                <div class="row justify-content-center">
                    <h1 class="col-12 py-5" style={{ fontFamily: 'Times New Roman' }}>Get In Touch</h1>
                    <form class="contactMeForm col-10 col-md-6 col-lg-5">
                        {/* <!-- Name input --> */}
                        <div class="form-outline mb-4">
                            <input type="text" id="form4Example1" placeholder="Name" class="form-control" />
                        </div>

                        {/* <!-- Email input --> */}
                        <div class="form-outline mb-4">
                            <input type="email" id="form4Example2" placeholder="Email" class="form-control" />
                        </div>

                        {/* <!-- Message input --> */}
                        <div class="form-outline mb-4">
                            <textarea class="form-control" id="form4Example3" placeholder="Message" rows="4"></textarea>
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

                    <div class="ContactMeBottomContainer col-12">

                    </div>
                </div>
            </div>

        </>
    )
}