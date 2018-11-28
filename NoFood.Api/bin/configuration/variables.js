const variables = {
    Api: {
        port: process.env.port || 3000
    },
    Database: {
        connection: process.env.connection || 'mongodb://admin:nofood123@ds111336.mlab.com:11336/nofood'
    }
}

module.exports = variables;