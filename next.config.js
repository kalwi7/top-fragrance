/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// module.exports = {
//   images: {
//     domains: ['sephora.p.rapidapi.com'],
//   },
// }

// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'www.sephora.com',
//       },
//     ],
//   },
// }

module.exports = {
  images: {
    domains: ['www.sephora.com'],
  },
}
