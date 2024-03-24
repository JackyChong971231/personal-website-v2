import { apiGateway } from "./apiGateway";

export async function recordInitialVisit() {
    const storedVisitId = localStorage.getItem('visitId');
    if (storedVisitId === null) {
        const responseBody = await apiGateway('POST', '/initial-visit');
        localStorage.setItem('visitId',responseBody.visitId);
    } else {
        console.log(`visitId is found in localStorage: ${storedVisitId}`)
    }
}