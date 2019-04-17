"use strict";

var userAPIRouter = require("./user");
var categoryAPIRouter = require("./category");
    // roleAPIRouter = require("./role"),
var mediaAPIRouter = require('./media.js');
var optioAPIRouter = require('./optio.js');
// var assetsAPIRouter = require('./assets.js');

function register(app) {
    // app.use(["/api" + "/roles", "/roles"], roleAPIRouter);
    app.use(["/api" + "/users"], userAPIRouter);
    app.use(["/api" + "/category"], categoryAPIRouter);
    app.use(["/api" + "/media"], mediaAPIRouter);
    app.use(["/api" + "/optio"], optioAPIRouter);
    // app.use(["/api" + "/assets"], assetsAPIRouter);
}

exports.register = register;
