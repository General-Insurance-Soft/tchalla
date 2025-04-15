import { clearApiCache, getToken } from '../utils/util';
import { baseServerUrl } from './setup';
import Cookies from 'js-cookie';


export const validateToken = async () => {
    let returnVal = true;

    const token = Cookies.get('authToken'); // Check if auth token exists

    if (!token) {
        console.log("No token found in cookies");
        // Redirect to login page if not authenticated
        //
        window.location.href = '/login';
        returnVal = false;
        return returnVal;
    }

    let parsedToken;
    try {
        parsedToken = JSON.parse(token);
    } catch (error) {
        console.log('Failed to parse token:', error);

        window.location.href = '/login';
        returnVal = false;
        return returnVal;
    }

    try {
        let validationResult = await fetch(`${baseServerUrl}/user-service/api/v1/auth/validate-token`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${parsedToken.jwtToken.token}`
            }
        });

        let res = await validationResult.json();

        if (!validationResult.ok) {

            if (res.message == "Token has expired") {
                console.log("Token has expired");
                return refreshAuthToken();
            }
            else {
                console.log("Failed to validate token, redirecting to login page");
                clearApiCache();
                window.location.href = '/login';
                returnVal = false;
                return returnVal;
            }
        }

    } catch (error) {
        console.error("Error during token validation:", error);

        window.location.href = '/login';
        returnVal = false;
        return returnVal;
    }

    return returnVal;
}


export const refreshAuthToken = async () => {
    let returnVal = true;

    try {

        let token = Cookies.get('authToken'); // Check if auth token exists
        let parsedToken = JSON.parse(token);
        let refreshToken = parsedToken['jwtRefreshToken']['token']; // Get the refresh token from cookies

        let formData = {
            "refresh-token": refreshToken
        };

        const response = await fetch(`${baseServerUrl}/user-service/api/v1/auth/refresh`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData), // Convert formData to JSON string
        });


        if (response.ok) {
            const data = await response.json();
            Cookies.set('authToken', JSON.stringify(data), { expires: 7, path: '/' });
        } else {

            window.location.href = '/login'; // Redirect to login if refresh fails
            returnVal = false;
            return returnVal;
        }

    } catch (error) {
        console.error('Error refreshing token:', error);

        window.location.href = '/login'; // Redirect to login if an error occurs
        returnVal = false;
        return returnVal;
    }

    return returnVal;
};


export const signIn = async (formData) => {

    try {
        let response = await fetch(`${baseServerUrl}/user-service/api/v1/auth/authenticate`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
        });

        let res = await response.json();
        return res;

    } catch (error) {
        console.error("Error during signin:", error);
        let returnVal = {
            "message": "Failed to authenticate, please retry: "
        };

        return returnVal;
    }

}

export const fetchUserData = async (userId, tkn) => {
    try {

        if(typeof window != 'undefined'){
            if(localStorage.getItem('userData')){
                let userData = JSON.parse(localStorage.getItem('userData'));
                return userData;
            }
        }

        if(!userId){
            console.log("No user id found");
            return null;
        }

        if (!tkn) tkn = getToken('access');

        const response = await fetch(`${baseServerUrl}/user-service/api/v1/user/get?user=${userId}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tkn}`
            }
        });

        if(!response.ok) {
            console.log("Failed to fetch user data");
        }
        const res = await response.json();
        
        return res;
    } catch (err) {
        console.error("Error fetching user data:", err);
        throw err;
    }
}

export const doProfileUpdate = (updateData, userId) => {
    // check that the logged in user == userId
    // if not, return an error
    // let current_user = fetchUserData();
    // if(!current_user || current_user['id'] != userId){
    //     return {
    //         "error": "Unauthorized"
    //     }
    // }

    let token = getToken("access");
    updateData.user = userId;
    updateData.id = userId;
    try {
        let response = fetch(`${baseServerUrl}/user-service/api/v1/user/update`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(updateData)
        });

        let res = response;
        if (!res.ok) {
            console.log("Error updating user data");
        }
        return res.json();
    } catch (error) {
        console.error("Error updating user data:", error);
        throw error;
    }
}

export async function doSignUp(formData) {
    try {
        const response = await fetch(`${baseServerUrl}/user-service/api/v1/auth/sign-up`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData), // Convert formData to JSON string
        });

        if (!response.ok) {
            console.log("Signup failed");
        }

        const res = await response;

        return res; // Return the response data if needed
    } catch (error) {
        console.error("Error during signup:", error);
        throw error;
    }
}