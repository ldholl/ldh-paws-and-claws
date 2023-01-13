const jwt = require('jsonwebtoken');

const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
    authMiddleware: function({ req }){
        let token = req.body.token || req.query.token || req.headers.authorization;
        console.log(token);
        if(req.headers.authorization){
            token = token
            .split(' ')
            .pop()
            .trim();
        }

    if(!token){
        console.log('no token');
        return req;
    }

    console.log('the token is:' + token + 'here');
    try{
        const { data } = jwt.verify(token, secret, { maxAge: expiration });
        req.user = data;
    } catch {
        console.log('bacon');
        console.log('Invalid token');
    }
    return req;
    
    },
    signToken: function({  username, email, _id, homeAddress, clientName}){
        const payload = {  username, email, _id, homeAddress, clientName};

        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
    
};