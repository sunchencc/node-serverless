"use strict";
exports.__esModule = true;
exports.HttpServer = void 0;
/*
 * @Author: sunchen
 * @Date: 2022-07-11 21:39:12
 * @LastEditors: sunchen
 * @LastEditTime: 2022-07-12 22:02:37
 * @Description: www.github.com
 */
var http = require('node:http');
var Router = require('router');
var compression = require('compression');
var bodyParser = require('body-parser');
var finalhandler = require('finalhandler');
var HttpServer = /** @class */ (function () {
    function HttpServer(port) {
        var _this = this;
        if (port === void 0) { port = 3000; }
        this.port = port;
        this.router = Router();
        this.server = http.createServer(function (req, res) {
            _this.router(req, res, finalhandler(req, res));
        });
        this.initMiddle();
    }
    HttpServer.prototype.initMiddle = function () {
        this.router.use(compression());
        this.router.use(bodyParser.json());
    };
    HttpServer.prototype.addGetRoute = function (route, func) {
        this.router.get(route, func);
        return true;
    };
    HttpServer.prototype.addPostRoute = function (route, func) {
        this.router.post(route, func);
        return true;
    };
    HttpServer.prototype.run = function (callback) {
        var _this = this;
        this.server.listen(this.port, callback ? callback : function () { console.log("server is run in " + _this.port + "..."); });
    };
    return HttpServer;
}());
exports.HttpServer = HttpServer;
