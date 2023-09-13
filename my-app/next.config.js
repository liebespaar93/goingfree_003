/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: "/contact/:path*",
				destination: "/form/:path*",
				permanent: false,
			}];
	},
	async rewrites() {
		const GIT_ID = process.env.GIT_ID;
		const GIT_RP = process.env.GIT_RP;
		return [{
			source: "/api/gitcommit",
			destination: `https://api.github.com/repos/${GIT_ID}/${GIT_RP}/commits`
		}];
	},
}

module.exports = nextConfig
