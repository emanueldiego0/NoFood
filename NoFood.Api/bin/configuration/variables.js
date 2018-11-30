const variables = {
    Api: {
        port: process.env.port || 3000
    },
    Database: {
        connection: process.env.connection || 'mongodb://admin:nofood123@ds111336.mlab.com:11336/nofood'
    },
    Security: {
        secretKey: '698dc19d489c4e4db73e28a713eab07b|38851536d87701d2191990e24a7f8d4e'
    }
}

module.exports = variables;