'use strict';
var knex = require('../../config').knex;
var config = require('../../config');
var model = require('./model');

var _obj = {

    _getBankDetails: function(options, cb) {

        // validating data
        if (!options) {

            console.log('params not present');
            cb({
                'statusCode': 400
            });
            return;
        }

        function _responseCallback (err, res) {
            if (err) {
                console.log(err)
                return
            }

            if (res.length > 0) {
                cb(null, { 'success': { 'message': 'Bank Details fetched Successfully', 'payload': res } })
            } else {
                cb(null, { 'error': { 'message': 'No bank details found for given data.', 'payload': res } })
            }
        }

        options.ifsc_code ? model.fetchBankDetailsByIfsc(options, _responseCallback) : model.fetchBankDetailsByName(options, _responseCallback);
    
    }
}

module.exports = _obj;
