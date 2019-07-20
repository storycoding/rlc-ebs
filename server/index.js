const cluster = require('cluster');

if (cluster.isMaster) {
    // Code to run if we're in the master process
    require('./fork-clusters')();
} else {
    // Code to run if we're in a worker process
    require('./server')();
}
