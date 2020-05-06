const fetch = require('node-fetch');
const Unsplash = require('unsplash-js').default;
const unsplash = new Unsplash({ accessKey: process.env.ACCESS_KEY });
global.fetch = fetch;

class UnSplash {
    static  GetImages(){
        return unsplash.photos.listPhotos(2, 15, "latest")
    }
}

module.exports = UnSplash