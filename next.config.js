// const withOptimizedImages = require('next-optimized-images');
// module.exports = withOptimizedImages({

module.exports = {
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  images: {
    unoptimized: true
  },
  // your config for other plugins or the general next.js here...
  // exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
  //   return {
  //     '/': { page: '/' },
  //     '/contact': { page: '/contact' },
  //     '/suggestions': { page: '/suggestions' },
  //     // '/p/hello-nextjs': { page: '/post', query: { title: 'hello-nextjs' } },
  //   }
  // },
}

