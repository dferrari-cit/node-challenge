
const config = {
    healthChecks: [{
        protocol: 'http',
        host: 'localhost',
        path: '/searchProfile/antoni0o',
        port: '4000'
      }, {
        protocol: 'http',
        host: 'localhost',
        path: '/searchProfile/kuyrchgufv',
        port: '4000'
      }]
 }
const statusMonitor = require('express-status-monitor')(config);

export {config,statusMonitor};