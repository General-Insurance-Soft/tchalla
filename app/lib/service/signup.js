import { baseServerUrl } from './setup';

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