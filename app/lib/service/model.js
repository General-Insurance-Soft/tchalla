import { baseServerUrl } from './setup';
import { getToken } from '../utils/util';

/*
======================
Reference-data-Service
======================
*/

let dataFetch = async (url, dataName) => {

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

let dataPost = async (url, data, dataName) => {

    let token = getToken("access");

    try {
        let response = await fetch(url, {
            method: "Post",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        let res = await response;
        if (!res.ok) {
            console.log(`Error posting data:  ${dataName}`);
            return {
                "error": `Could not post data:  ${dataName}`
            };
        }
        return res.json();

    } catch (error) {
        console.error(`Error posting:  ${dataName}:`, error);
        let returnVal = {
            "error": "Error posting data"
        };

        return returnVal;
    }
}

let dataDeleteById = async (url, dataName) => {

    let token = getToken("access");

    try {
        let response = await fetch(url, {
            method: "DELETE",
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
    return await dataFetch(`${baseServerUrl}/reference-data-service/api/v1/insurance-company/get-insurance-companies`, "insurance companies");
}

export const fetchDocumentTypes = async () => {
    return await dataFetch(`${baseServerUrl}/reference-data-service/api/v1/document-type/get-document-types`, "document types");
}

export const fetchPolicies = async () => {
    return await dataFetch(`${baseServerUrl}/reference-data-service/api/v1/policy/get-policies`, "policies");
}

export const fetchAdministrativeAreas = async () => {
    return await dataFetch(`${baseServerUrl}/reference-data-service/api/v1/administrative-area/get-administrative-areas`, "administrative areas");
}

export const saveProposalAndContact = async (data) => {
    return await dataPost(`${baseServerUrl}/api/v1/client-service/proposal-user/save`, data, "proposal & contact save");
}

export const fetchProposalData = async (page, size) => {
    return await dataFetch(`${baseServerUrl}/proposal-service/api/v1/proposal/get-proposals?page=${page}&size=${size}`, "proposal list");
}

export const daleteProposal = async (id) => {
    return await dataDeleteById(`${baseServerUrl}/proposal-service/api/v1/proposal/delete?id=${id}`, "proposal delete");
}
