/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [{
            source: "/:paht*",
            destination: "http://localhost:3001/:path*"
        }]
    }
};

export default nextConfig;
