import { _config } from "gsap/gsap-core";

const GET   = 'GET';
const POST  = 'POST'; 

export async function apiGateway(method, endPoint, requestBody = null) {
    // console.log(JSON.stringify(requestBody));
    const response = await fetch(process.env.awsApiGatewayUrl + endPoint, {
        method: method,
        body: JSON.stringify(requestBody)
    })
    console.log(response);
    const body = await response.json();
    return body;
}