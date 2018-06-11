// keys.js figure out if we're in production or development
if(process.env.NODE_ENV === 'production'){
    //we are in production, return the prod set of keys
    module.exports = require('./prod');
} else {
    // We are in development, return dev keys
   module.exports = require('./dev');
}