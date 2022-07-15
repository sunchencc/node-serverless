/*
 * @Author: sunchen
 * @Date: 2022-07-11 21:32:43
 * @LastEditors: sunchen
 * @LastEditTime: 2022-07-12 22:04:33
 * @Description: www.github.com
 */
var HttpServer = require('./server_template').HttpServer;
var server = new HttpServer();
server.addPostRoute('/add', function (req, res) {
    res.end('add');
});
server.addPostRoute('/edit', function (req, res) {
    res.end('edit');
});
server.addPostRoute('/delete', function (req, res) {
    res.end('delete');
});
server.addGetRoute('/get', function (req, res) {
    res.end('get');
});
server.run();
