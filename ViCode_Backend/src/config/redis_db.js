const {createClient} = require('redis');

const redisclient = createClient({
    username: 'default',
    password: process.env.REDIS_DATABASE_KEY,
    socket: {
        host: process.env.REDIS_HOST_KEY,
        port: 16805
    }
});
module.exports = redisclient;