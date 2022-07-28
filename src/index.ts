/*
 * @Author: sunchen
 * @Date: 2022-07-11 21:32:43
 * @LastEditors: sunchen
 * @LastEditTime: 2022-07-28 20:43:06
 * @Description: www.github.com
 */

const HttpServer = require('./server_template')
const compression = require('compression')
const bodyParser = require('body-parser')

const server = new HttpServer()

server
.useMiddle(compression())
.use(bodyParser.json())


server.addPostRoute('/add', (req, res) => {
    res.end('add')
}),

server.addPostRoute('/edit', (req, res) => {
    res.end('edit')
}),

server.addPostRoute('/delete', (req, res) => {
    res.end('delete')
}),

server.addGetRoute('/get', (req, res) => {
    res.end('get')
})

server.listen(3000)