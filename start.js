'use strict';

require('babel-core/register')({
    presets: ["es2015"]
});

var environment = process.env.NODE_ENV || 'development';
environment === 'production' ? require('./server/express/production') : require('./server/express/development');
