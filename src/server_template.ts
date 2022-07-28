/*
 * @Author: sunchen
 * @Date: 2022-07-11 21:39:12
 * @LastEditors: sunchen
 * @LastEditTime: 2022-07-28 21:09:13
 * @Description: www.github.com
 */
const http = require('node:http')
const Router = require('router')
const serverConfig = require('../conf/server.json')

export default class HttpServer {
    router
    server
    constructor () {
        this.router = Router()

        this.server = http.createServer(function (req, res) {
            this.router(req, res, function(req, res){
                console.log('over')
            })
        })
    }

    useMiddle (middle) {
        this.router.use(middle)
        return this.router
    }


    addGetRoute (route, func) {
        this.router.get(route, func)
        return true
    }

    addPostRoute (route, func) {
        this.router.post(route, func)
        return true
    }

    listen (port = serverConfig.port, callback) {
        this.server.listen(port, callback ? callback : () => { console.log(`server is run in ${ port }...`) })
    }
}

