const userResolvers = require('./user');
const petResolvers = require('./pet');
const appointmentResolvers = require('./appointment');

const resolvers = [userResolvers, petResolvers, appointmentResolvers]

module.exports = resolvers;