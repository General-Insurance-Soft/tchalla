import { baseServerUrl } from './setup';
import { getToken } from '../utils/util';

/*
======================

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
            const errorBody = await response.json();
            console.error(`Error posting data: ${dataName}`, errorBody);

            let errorMessage = '';

            if (typeof errorBody === 'string') {
                errorMessage = errorBody;
            } else if (Array.isArray(errorBody)) {
                errorMessage = errorBody.join('<br/>');
            } else if (typeof errorBody === 'object') {
                errorMessage = Object.entries(errorBody)
                    .map(([field, msg]) => `${field}: ${msg}`)
                    .join('<br/>');
            } else {
                errorMessage = 'An unknown error occurred.';
            }

            return {
                message: `Could not fetch data: ${errorMessage}`
            };
        }

        return res.json();

    } catch (error) {
        console.error(`Error getting ${dataName}:`, error);
        let returnVal = {
            "message": "Error getting data"
        };

        return returnVal;
    }
}

let dataPost = async (url, data, dataName, method) => {

    let token = getToken("access");

    try {
        let response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        let res = await response;

        if (!res.ok) {
            const errorBody = await response.json();
            console.error(`Error posting data: ${dataName}`, errorBody);

            let errorMessage = '';

            if (typeof errorBody === 'string') {
                errorMessage = errorBody;
            } else if (Array.isArray(errorBody)) {
                errorMessage = errorBody.join('<br/>');
            } else if (typeof errorBody === 'object') {
                errorMessage = Object.entries(errorBody)
                    .map(([field, msg]) => `${field}: ${msg}`)
                    .join('<br/>');
            } else {
                errorMessage = 'An unknown error occurred.';
            }

            return {
                message: `Could not post data: ${errorMessage}`
            };
        }

        return res.json();

    } catch (error) {
        console.error(`Error posting:  ${dataName}:`, error);
        let returnVal = {
            "message": "Error posting data"
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
            const errorBody = await response.json();
            console.error(`Error posting data: ${dataName}`, errorBody);

            let errorMessage = '';

            if (typeof errorBody === 'string') {
                errorMessage = errorBody;
            } else if (Array.isArray(errorBody)) {
                errorMessage = errorBody.join('<br/>');
            } else if (typeof errorBody === 'object') {
                errorMessage = Object.entries(errorBody)
                    .map(([field, msg]) => `${field}: ${msg}`)
                    .join('<br/>');
            } else {
                errorMessage = 'An unknown error occurred.';
            }

            return {
                message: `Could not delete data: ${errorMessage}`
            };
        }

        return res.json();

    } catch (error) {
        console.error(`Error getting ${dataName}:`, error);
        let returnVal = {
            "message": "Error getting data"
        };

        return returnVal;
    }
}

function setCacheWithExpiry(key, data, ttl = 5 * 24 * 60 * 60 * 1000) { // Default: 5 days
    const item = {
        data,
        expiry: Date.now() + ttl
    };
    localStorage.setItem(key, JSON.stringify(item));
}

function getFromCache(key) {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) return null;

    try {
        const item = JSON.parse(itemStr);
        if (Date.now() > item.expiry) {
            localStorage.removeItem(key); // Expired
            return null;
        }
        return item.data;
    } catch (e) {
        console.error(`Error parsing cached item for ${key}`);
        localStorage.removeItem(key);
        return null;
    }
}

export const fetchInsuranceCopanies = async () => {

    const cacheKey = `insutance-companies`;
    const cachedData = getFromCache(cacheKey);

    if (cachedData) {
        console.log(`Cache hit for ${cacheKey}`);
        return cachedData;
    }
    const jsonData = await dataFetch(`${baseServerUrl}/reference-data-service/api/v1/insurance-company/get-insurance-companies`, "insurance companies");
    setCacheWithExpiry(cacheKey, jsonData); // Save to localStorage

    return jsonData

}

export const fetchDocumentTypes = async () => {
    const cacheKey = `document-types`;
    const cachedData = getFromCache(cacheKey);

    if (cachedData) {
        console.log(`Cache hit for ${cacheKey}`);
        return cachedData;
    }

    const jsonData = await dataFetch(`${baseServerUrl}/reference-data-service/api/v1/document-type/get-document-types`, "document types");
    setCacheWithExpiry(cacheKey, jsonData); // Save to localStorage

    return jsonData

}

export const fetchPolicies = async () => {
    const cacheKey = `policies`;
    const cachedData = getFromCache(cacheKey);

    if (cachedData) {
        console.log(`Cache hit for ${cacheKey}`);
        return cachedData;
    }

    const jsonData = await dataFetch(`${baseServerUrl}/reference-data-service/api/v1/policy/get-policies`, "policies");
    setCacheWithExpiry(cacheKey, jsonData); // Save to localStorage

    return jsonData
}

export const fetchAdministrativeAreas = async () => {
    const cacheKey = `administrative-areas`;
    const cachedData = getFromCache(cacheKey);

    if (
        cachedData
        &&
        (Array.isArray(cachedData)
            && (cachedData.length == 0)
        )
    ) {
        console.log(`Cache hit for ${cacheKey}`);
        return cachedData;
    }

    const jsonData = await dataFetch(`${baseServerUrl}/reference-data-service/api/v1/administrative-area/get-administrative-areas`, "administrative areas");
    setCacheWithExpiry(cacheKey, jsonData); // Save to localStorage

    return jsonData
}

export const saveProposalAndContact = async (data) => {
    return await dataPost(`${baseServerUrl}/api/v1/client-service/proposal-user/save`, data, "proposal & contact save", "POST");
}

export const fetchProposalData = async (page, size) => {
    return await dataFetch(`${baseServerUrl}/proposal-service/api/v1/proposal/get-proposals?page=${page}&size=${size}`, "proposal list");
}

export const daleteProposal = async (id) => {
    return await dataDeleteById(`${baseServerUrl}/proposal-service/api/v1/proposal/delete?id=${id}`, "proposal delete");
}

export const getProposal = async (id) => {
    return await dataFetch(`${baseServerUrl}/proposal-service/api/v1/proposal/get?id=${id}`, "proposal get");
}

export const getProposalByContact = async (id) => {
    return await dataFetch(`${baseServerUrl}/proposal-service/api/v1/proposal/get-by-contact?id=${id}`, "proposal get by contact");
}

export const updateProposal = async (id, data) => {
    return await dataPost(`${baseServerUrl}/proposal-service/api/v1/proposal/update?id=${id}`, data, "proposal update", "PUT");
}

export const getContactList = async (page, size) => {
    return await dataFetch(`${baseServerUrl}/contact-service/api/v1/contact/get-contacts?page=${page}&size=${size}`, "contact list get");
}

export const saveContact = async (data) => {
    return await dataPost(`${baseServerUrl}/contact-service/api/v1/contact/create`, data, "Contact save", "POST");
}

export const updateContact = async (data, id) => {
    return await dataPost(`${baseServerUrl}/contact-service/api/v1/contact/update?id=${id}`, data, "Contact update", "PUT");
}

export const deleteContactById = async (id) => {
    return await dataDeleteById(`${baseServerUrl}/contact-service/api/v1/contact/delete?id=${id}`, "Contact delete");
}

export const saveContactGroup = async (data) => {
    return await dataPost(`${baseServerUrl}/contact-service/api/v1/contact-group/create`, data, "Contact group save", "POST");
}

export const getContactGroupList = async (page, size) => {
    return await dataFetch(`${baseServerUrl}/contact-service/api/v1/contact-group/get-list?page=${page}&size=${size}`, "contact group list");
}

export const updateContactGroup = async (data, id) => {
    return await dataPost(`${baseServerUrl}/contact-service/api/v1/contact-group/update?id=${id}`, data, "Contact group update", "PUT");
}

