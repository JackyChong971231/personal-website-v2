import React, { useState, useEffect, useRef } from 'react';
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import ContactMeBackground from '../images/ContactMe/ContactMeBackground.jpg'

import './ContactMe.css';
import axios from "axios";

export const POST      = 'POST';
export const GET       = "GET";

// const serverUrl = process.env.REACT_APP_SERVER_IP || 'http://137.184.166.60:8080';
// const serverUrl = process.env.REACT_APP_SERVER_IP || 'http://localhost:8080';
// const serverUrl = 'http://localhost:8080'; // testing
const serverUrl = 'http://137.184.166.60:8080';
const endPoint = "/api/v1/personal-website/http-request"

export const apiGateway = async (method, endPoint, requestBody) => {
    // console.log(JSON.stringify(requestBody));
    const response = await fetch(serverUrl + endPoint, {
        method: method,
        mode: 'cors',
        credentials: 'include',
        headers: { 
            'Content-Type': 'application/json', 
            'Connection': 'keep-alive', 
            'Access-Control-Allow-Origin': "*",
            // 'Origin': 'http://192.168.56.1:3000' // testing 
            'Origin': 'http://137.184.166.60:5000' 
        },
        body: (method !== GET)? JSON.stringify(requestBody): null
    })
    const body = await response.json();
    return body;
}

export function ContactMe() {
    const [fromIp, setFromIp] = useState();
    const [startTime, setStartTime] = useState(new Date().toISOString().slice(0, 19).replace("T", " "));


    const getIpLocationInfo = async (ip) => {
        const apiKey = '880c446f454e4f5eabda78d4ca25bef4';
        const ipAddress = ip;
        // const fields = 'country,city';

        try {
            const response = await fetch(`https://ipgeolocation.abstractapi.com/v1/?api_key=${apiKey}&ip_address=${ipAddress}`);
            
            if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            // console.log(data);
            return data;
            // Handle the data as needed
        } catch (error) {
            console.error('Error fetching data:', error);
            // Handle errors
        }
    }


    const recordUserData = async () => {

        const endTime = new Date().toISOString().slice(0, 19).replace("T", " ");
        const userIp = await getFromIp();
        const ipInfo = await getIpLocationInfo(userIp);
        const vistRecordRequest = {
            ipAddr: userIp,
            enterTime: startTime,
            leaveTime: endTime,
            geolocation: ipInfo.city + ', ' + ipInfo.country + ', ' + ipInfo.postal_code,
            connectionType: String(ipInfo.connection.connection_type),
            organizationName: String(ipInfo.connection.organization_name)
        }
        apiGateway(POST, endPoint + "/add", vistRecordRequest);
    }

    const getFromIp = async () => {
        const res = await axios.get("https://api.ipify.org/?format=json");
        setFromIp(res.data.ip);
        return res.data.ip;
    }

    useEffect(() => {
        recordUserData();
        // const handleBeforeUnload = async (event) => {
        //     event.preventDefault();
        //     event.returnValue = '';
        //     recordUserData();
        // };

        // window.addEventListener('beforeunload', handleBeforeUnload);
        // return () => {
        //     window.removeEventListener('beforeunload', handleBeforeUnload);
        // };

    }, [])

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