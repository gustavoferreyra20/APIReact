const request = require('request');

var url = 'http://www.boredapi.com/api/activity/';

function llamadoApi(callback){

    request(url, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            return callback(JSON.parse(body));
        }  
});
}

module.exports = llamadoApi;