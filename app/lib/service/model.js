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

    if (cachedData) {
        console.log(`Cache hit for ${cacheKey}`);
        return cachedData;
    }

    const jsonData = await dataFetch(`${baseServerUrl}/reference-data-service/api/v1/administrative-area/get-administrative-areas`, "administrative areas");
    setCacheWithExpiry(cacheKey, jsonData); // Save to localStorage

    return jsonData
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

export const getProposal = async (id) => {
    return await dataFetch(`${baseServerUrl}/proposal-service/api/v1/proposal/get?id=${id}`, "proposal get");
}

export const getProposalByContact = async (id) => {
    return await dataFetch(`${baseServerUrl}/proposal-service/api/v1/proposal/get-by-contact?id=${id}`, "proposal get by contact");
}
