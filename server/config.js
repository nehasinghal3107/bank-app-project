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
        host: 'ec2-54-197-230-161.compute-1.amazonaws.com',
        user: 'zzvjabhwialjrc',
        password: 'edf96851168529a0ffec9937ee9587f4a9d33483d1b57c7b215ba3fa1905fea8',
        database: 'd70nlqq9ik8up0'
    },
    debug: true
	})

};

// Export the config object based on the NODE_ENV
// ==============================================
module.exports = config;
