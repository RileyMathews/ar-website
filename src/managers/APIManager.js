/* 
    module: api manager
    author: riley mathews
    purpose: to handle api calls with external websites for band information
*/

const APIManager = Object.create(null, {
    getBandsintownEvents: {
        value: function () {
            return fetch("https://rest.bandsintown.com/artists/Almanac%20Ridge/events?app_id=website")
        }
    }
})

export default APIManager