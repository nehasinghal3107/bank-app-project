'use strict'

var knex = require('../../config').knex;

var model_obj = {

    fetchBankDetailsByIfsc: function(option, cb) {

        knex('bank_branches')
        .select('*')
        .where({'ifsc': option.ifsc_code}).then(function(res) {
            cb(null, res);
        }).catch(function(err) {
            cb(err, null);
        });
    },

    fetchBankDetailsByName: function(option, cb) {

        knex('bank_branches')
        .select('*')
        .where({'bank_name': option.bank_name, 'city':option.bank_city})
        .then(function(res) {
            cb(null, res);
        }).catch(function(err) {
            cb(err, null);
        });
    }

}

module.exports = model_obj;

