import { baseServerUrl } from './setup';
import { getToken } from '../utils/util';

/*
======================
Reference-data-Service
======================
*/

let dataFetcher = async (url, dataName) => {

    let token = getToken("access");

    try {
        let response = await fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        let res = await response;
        if (!res.ok) {
            console.log(`Error fetching ${dataName}`);
            return {
                "error": `Could not fetch ${dataName}`
            };
        }
        return res.json();

    } catch (error) {
        console.error(`Error getting ${dataName}:`, error);
        let returnVal = {
            "error": "Error getting data"
        };

        return returnVal;
    }
}

export const fetchInsuranceCopanies = async () => {
    return await dataFetcher(`${baseServerUrl}/reference-data-service/api/v1/insurance-company/get-insurance-companies`, "insurance companies");
}

export const fetchDocumentTypes = async () => {
    return await dataFetcher(`${baseServerUrl}/reference-data-service/api/v1/document-type/get-document-types`, "document types");
}

export const fetchPolicies = async () => {
    return await dataFetcher(`${baseServerUrl}/reference-data-service/api/v1/policy/get-policies`, "policies");
}

export const fetchAdministrativeAreas = async () => {
    return await dataFetcher(`${baseServerUrl}/reference-data-service/api/v1/administrative-area/get-administrative-areas`, "administrative areas");
}