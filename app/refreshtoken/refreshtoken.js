'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { refreshAuthToken } from '../lib/service/auth'; // Import your token refresh function

export default function RefreshToken() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const redirect = searchParams.get('redirect') || '/page'; // Get the original destination or default to '/page'


    useEffect(() => {
        const refreshToken = async () => {
            try {
                const token = Cookies.get('authToken'); // Check if auth token exists
                let parsedToken = JSON.parse(token.value);

                const refreshToken = parsedToken['jwtRefreshToken']; // Get the refresh token from cookies

                const response = await refreshAuthToken(refreshToken);

                if (response.ok) {
                    const data = await response.json();
                    Cookies.set('authToken', JSON.stringify(data), { expires: 7, path: '/' });
                    router.push(redirect); // Navigate to the original destination
                } else {
                    router.push('/login'); // Redirect to login if refresh fails
                }
            } catch (error) {
                console.log('Error refreshing token:', error);
                router.push('/login'); // Redirect to login if an error occurs
            }
        };

        refreshToken();
    }, [router]);

    return <div>Loading...</div>;
}