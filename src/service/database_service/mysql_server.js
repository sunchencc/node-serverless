const BaseDataBaseServer = require("./base_database_server");

/*
 * @Author: sunchen
 * @Date: 2022-07-27 20:50:07
 * @LastEditors: sunchen
 * @LastEditTime: 2022-07-28 20:41:12
 * @Description: www.github.com
 */

const mysql = require('mysql')
const mysqlConfig = require('../../../conf/mysql.json');

class MysqlServer extends BaseDataBaseServer {
    constructor () {
        super()
        this.connection = mysql.createConnection(mysqlConfig)
    }

    async connect () {
        this.connection.connect();   
    }

    async query (sql) {
       return new Promise((resolve, reject) => {
        this.connection.query(sql, function (error, results) {
            if (error) reject(error);
            resolve(results)
          });
       })
    }
}


async function s () {
    const server = new MysqlServer()
    await server.connect()
   console.log(await server.query('select count(*) from user')) 
}
s()

