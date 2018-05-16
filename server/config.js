'use strict';

var path = require('path');

// All configurations will extend these options
var config = {

  // Root path of server
  root: path.normalize(__dirname + '/..'),

  // Server port
  port: 8080,

  knex: require('knex')({
    client: 'pg',
    connection: {
        host: 'constellation.cf5ti77rz91y.ap-southeast-1.rds.amazonaws.com',
        user: 'constellation',
        password: 'Qazplm12345!',
        database: 'student_db'
    },
    debug: true
	})

};

// Export the config object based on the NODE_ENV
// ==============================================
module.exports = config;
