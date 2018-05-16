'use strict';

var config = require('./config');
var path = require('path');
var bank = require('./api/bank');

module.exports = function(app) {

  // api to fetch bank details

    app.use('/api/bank/fetch-details', function(req, res, next) {
        
        try {
            if (!req.query || !req.query.search_type) {
              next({ 'statusCode': 400 })
            } else {
              bank.controller._getBankDetails(req.query, callback);
            }

            function callback(err, result) {
                if (err) {
                    next(err)
                    return
                }
                res.send(result)
            }
        } catch (e) {
            console.log(e)
        }
    }); 

    // Direct to home page
    app.get('/*', function(req, res) {
      res.sendFile(path.join(config.root, 'client/index.html'));
    });

}; 