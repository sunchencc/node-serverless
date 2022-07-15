/*
 * @Author: sunchen
 * @Date: 2022-07-11 21:39:12
 * @LastEditors: sunchen
 * @LastEditTime: 2022-07-12 22:02:37
 * @Description: www.github.com
 */
const http = require('node:http')
const Router = require('router')
const compression  = require('compression')
const bodyParser   = require('body-parser')
const finalhandler = require('finalhandler')

const enum Method {
    Get = 'get',
    Post = 'post'
}

export class HttpServer {
    private server
    private port
    private router
    constructor (port: number = 3000) {
        this.port = port
        this.router = Router()
        this.server = http.createServer((req: any, res: any) => {
            this.router(req, res, finalhandler(req, res))
        })

        this.initMiddle()
    }

    private initMiddle () {
        this.router.use(compression())
        this.router.use(bodyParser.json())
    }


    addGetRoute (route: string, func: Function): boolean {
        this.router.get(route, func)
        return true
    }

    addPostRoute (route: string, func: Function): boolean {
        this.router.post(route, func)
        return true
    }

    run (callback: Function): void {
        this.server.listen(this.port, callback ? callback : () => { console.log(`server is run in ${ this.port }...`) })
    }
}