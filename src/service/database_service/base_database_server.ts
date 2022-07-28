/*
 * @Author: sunchen
 * @Date: 2022-07-27 20:43:04
 * @LastEditors: sunchen
 * @LastEditTime: 2022-07-27 21:38:08
 * @Description: www.github.com
 */
class BaseDataBaseServer {
    /** 连接数据库 */
    connect () {}

    /** 查询操作 */
    query () {}

    /** 新增 */
    add () {}

    /** 更新 */
    update () {}

    /** 删除 */
    delete () {}

    /** 关闭连接 */
    close () {}
}

module.exports = BaseDataBaseServer
