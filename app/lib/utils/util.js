import Cookies from 'js-cookie';

export const clearApiCache = () => {
    if (typeof window === 'undefined') {
        for (let key in localStorage) {
            if (key.startsWith("cache:") || key.startsWith("userData") || key.startsWith("user-data")) {
                localStorage.removeItem(key);
            }
        }
        localStorage.clear();
    }
}

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

export const handleFileRename = (originalFile, name) => {

    // Get original file extension
    let extension = originalFile.name.split('.').pop();
    let randomNumber = Math.floor(100000 + Math.random() * 900000);
    // Generate new name (you can customize this logic)
    let newFileName = `${name}-${randomNumber}-${Date.now()}.${extension}`;
    // Create renamed file
    let renamedFile = new File([originalFile], newFileName, {
        type: originalFile.type,
        lastModified: originalFile.lastModified,
    });

    return renamedFile;
}