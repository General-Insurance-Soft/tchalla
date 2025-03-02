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

