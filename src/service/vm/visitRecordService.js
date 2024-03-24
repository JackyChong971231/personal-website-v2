import axios from "axios";
import { apiGateway } from "./apiGateway";

const endPoint = "/api/v1/personal-website/http-request"

const getFromIp = async () => {
    const res = await axios.get("https://api.ipify.org/?format=json");
    // setFromIp(res.data.ip);
    return res.data.ip;
}
export async function recordInitialVisitVM() {
    const userIp = await getFromIp();
    let vistRecordRequest = { // for database
        ipAddr: null,
        enterTime: null,
        geolocation: '',
        connectionType: '',
        organizationName: ''
    }
    vistRecordRequest.ipAddr = userIp;
    vistRecordRequest.enterTime = new Date().toISOString().slice(0, 19).replace("T", " ");
    const response = await apiGateway('POST', endPoint + "/add", vistRecordRequest);
    const visitRecordID = response.data.personalWebsiteHttpRequestId;
    localStorage.setItem('visitId', visitRecordID);
}


export async function updateVisitRecordVM() {
    const endTime = new Date().toISOString().slice(0, 19).replace("T", " ");
    const vistRecordUpdateRequest = {
        personalWebsiteHttpRequestId: localStorage.getItem('visitId'),
        leaveTime: endTime
    }
    const response = await apiGateway('POST', endPoint + "/update", vistRecordUpdateRequest);
}