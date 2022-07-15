/*
 * @Author: sunchen
 * @Date: 2022-07-11 21:32:43
 * @LastEditors: sunchen
 * @LastEditTime: 2022-07-15 20:52:08
 * @Description: www.github.com
 */

const { HttpServer } = require('./server_template')

const server = new HttpServer()

server.addPostRoute('/add', (req, res) => {
    res.end('add')
},

server.addPostRoute('/edit', (req, res) => {
    res.end('edit')
}),

server.addPostRoute('/delete', (req, res) => {
    res.end('delete')
}),

server.addGetRoute('/get', (req, res) => {
    res.end('get')
}),


server.run()