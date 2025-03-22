import Cookies from 'js-cookie';

export const getToken = (type) => {

    const token = Cookies.get('authToken'); // Check if auth token exists

    if (!token) {
        console.log("No token found in cookies");
        // Redirect to login page if not authenticated
        //
        window.location.href = '/login';
    }

    let parsedToken;
    try {
        parsedToken = JSON.parse(token);

        if (type == "access") {
            return parsedToken.jwtToken.token
        } else if (type == "refresh") {
            return parsedToken.jwtRefreshToken.token
        }

    } catch (error) {
        console.log('Failed to parse token:', error);
        window.location.href = '/login';
    }

}