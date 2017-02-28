'use strict';
const request = require('request');
const async = require('async');
const config = require('../config.js');
const routes = {};

// To get instagram post based on userId
routes.getInstaSelfUserDeatils = (req, reply) => {

    if (!req.params && req.params.user) {
        return reply('Insta userName missing');
    }
    const userName = req.params.user;

    // Get self user details from Insta API.
    const getUserInfo = (callback) => {
        if (userName) {

            request(config.INSTA_URL + '/users/search?q=' + userName + '&access_token=' + config.INSTA_ACCESS_TOKEN,

                (error, response, result) => {

                    if (!error) {
                        result = JSON.parse(result);
                        if (result && result.data) {
                            callback(null, result.data[0]);
                        } else {
                            let errMsg = {
                                "status": 500,
                                "message": "Oops invalid username",
                                "name": "Internal server error"
                            };
                            callback(null, errMsg);
                        }
                    }

                });
        }
    }; // getUserInfo ends here.

    // Get user media details.
    const getUserMedia = (err, response) => {
        if (response && response[0]) {
            let userInfo = response[0];
            request(config.INSTA_URL + '/users/' + userInfo.id + '/media/recent/?access_token=' + config.INSTA_ACCESS_TOKEN,

                (error, response, result) => {

                    if (!error) {
                        result = JSON.parse(result);
                        if (result && result.data) {
                            reply(result);
                        } else {
                            let errMsg = {
                                "status": 500,
                                "message": "Oops invalid username",
                                "name": "Internal server error"
                            };
                            reply(errMsg);
                        }
                    }

                });
        }
    }; // getUserMedia ends here.

    return async.parallel([getUserInfo], getUserMedia);
};

module.exports = routes;
