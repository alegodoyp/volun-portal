const withImages = require('next-images')
const withCSS = require('@zeit/next-css')
const withPWA = require('next-pwa')
 
module.exports = withPWA({
    pwa: {
        dest: 'public'
    }
})
module.exports = withCSS()
module.exports = withImages()