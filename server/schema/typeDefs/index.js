const user = require('./user');
const auth = require('./auth');
const pet = require('./pet');
const appointment = require('./appointment');
const root = require('./root');

const typeDefs = [user, auth, pet, appointment, root];

module.exports = typeDefs;