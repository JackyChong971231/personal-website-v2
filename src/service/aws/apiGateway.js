
const GET   = 'GET';
const POST  = 'POST'; 

export async function apiGateway(method, endPoint, requestBody = null) {
    const awsApiGatewayUrl = (process.env.awsApiGatewayUrl)? process.env.awsApiGatewayUrl: 'https://w7vdsordvd.execute-api.us-east-1.amazonaws.com/dev'
    
    const response = await fetch(awsApiGatewayUrl + endPoint, {
        method: method,
        body: JSON.stringify(requestBody)
    })
    const body = await response.json();
    return body;
}