// @type {import('next').NextConfig}
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = {
//   reactStrictMode: true,
//   images: {
//     domains: ["www.sephora.com"],
//   },
// };

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        pathname: "**",
      },
    ],
  },
};

// module.exports = {
//   images: {
//     domains: ['sephora.p.rapidapi.com'],
//   },
// }

// module.exports = {
//   reactStrictMode: true,
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "www.sephora.com",
//       },
//     ],
//   },
// };

// module.exports = {
//   images: {
//     domains: ["www.sephora.com"],
//   },
// };
