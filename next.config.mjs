/** @type {import('next').NextConfig} */

const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/page/',
                permanent: true,
            },
        ]
    },
    output: 'standalone',
};

export default nextConfig;


