export async function apiGateway(method, endPoint, requestBody) {
    // console.log(JSON.stringify(requestBody));
    serverUrl = (vmBackendServerIp? vmBackendServerIp : 'http://137.184.166.60:8080')
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