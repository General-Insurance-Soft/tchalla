import { baseServerUrl } from './setup';
import { getToken } from '../utils/util';

/*
======================
Reference-data-Service
======================
*/

export const fetchInsuranceCopanies = async () => {

    let token = getToken("access");

    try {
        let response = await fetch(`${baseServerUrl}/reference-data-service/api/v1/insurance-company/get-insurance-companies`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        let res = await response;
        if (!res.ok) {
            console.log("Error fetching insurance companies");
            return {
                "message": "Could not fetch insurance companies"
            };
        }
        return res.json();

    } catch (error) {
        console.error("Error getting insurance companies:", error);
        let returnVal = {
            "message": "Error getting insurance companies "
        };

        return returnVal;
    }

}