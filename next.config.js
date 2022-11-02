// const withOptimizedImages = require('next-optimized-images');

// module.exports = withOptimizedImages({
  // basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  // assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  /* config for next-optimized-images */

  // your config for other plugins or the general next.js here...
  // exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
  //   return {
  //     '/': { page: '/' },
  //     // '/about': { page: '/about' },
  //     // '/p/hello-nextjs': { page: '/post', query: { title: 'hello-nextjs' } },
  //     // '/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },
  //     // '/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } },
  //   };
  // },
// });

module.exports = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      '/': { page: '/' },
      '/contact': { page: '/contact' },
      '/suggestions': { page: '/suggestions' },
      // '/p/hello-nextjs': { page: '/post', query: { title: 'hello-nextjs' } },
      // '/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },
      // '/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } },
    }
  },
  images: {
    loader: "imgix",
    path: "",
  },
}

