import { apiGateway } from "./apiGateway";

export async function recordInitialVisit() {
    const visitId = await apiGateway('POST', '/initial-visit');
    // console.log(visitId);
}