/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: "/",
            destination: "/shipping",
            permanent: true,
          },
        ];
      },
};

export default nextConfig;
