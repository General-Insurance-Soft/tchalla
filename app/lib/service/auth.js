import { baseServerUrl } from './setup';

export async function validateToken(token) {
    try {
        const response = await fetch(`${baseServerUrl}/user-service/api/v1/auth/authenticate`, {
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

export const refreshAuthToken = async (refreshToken) => {
    try {

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

        return response;
    } catch (error) {
        console.error('Error refreshing token:', error);
        throw error;
    }
};

