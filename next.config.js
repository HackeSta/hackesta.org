// next.config.js
const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");
const cache = require("./cache")
const optimizedImages = require('next-optimized-images');
const path = require('path')
 
module.exports = withPlugins([
  [
    optimizedImages, {
      webpack: (config) => {
        config.resolve.alias['@public'] = path.resolve(__dirname, 'public');
        return config;
      },
      responsive: {
        adapter: require('responsive-loader/sharp')
      },
      optimizedImagesInDev: true,
    }
  ],
  [
    withPWA,
    {
      pwa: {
        dest: "public",
        runtimeCaching: cache
      },
    },
    
  ],
  
],
{
  target: "serverless"
});