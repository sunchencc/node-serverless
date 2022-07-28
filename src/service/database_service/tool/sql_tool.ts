/*
 * @Author: sunchen
 * @Date: 2022-07-28 21:02:44
 * @LastEditors: sunchen
 * @LastEditTime: 2022-07-28 21:59:05
 * @Description: www.github.com
 */
import { create } from 'domain'
import * as SqlToolNs from '../../../types/SqlTool'


const typeSqlMap = {
    'string': 'varchar(255)',
    'number': 'int(11)'
}


class SqlTool {

    static buildCreateDatabaseSql (name: string): string {
        return `create database ${name}`
    }
    /**
    * 生成构建创建表的 sql 语句
    */
    static buildCreateTableSql (database: string, table: string, filedsInfo: SqlToolNs.CreateTableFiled[]): string {
        let createTableSql = `CREATE TABLE ${database}.${table} ( \n`
        for (const filedInfo of filedsInfo) {
            createTableSql += `${filedInfo.type} ${typeSqlMap[filedInfo.type]},\n`
        }
        createTableSql += ');'

        return createTableSql
    }
}

const a: SqlToolNs.CreateTableFiled = {
    filed: 'name',
    type: SqlToolNs.FiledType.string,
    allowNull: true
}
const b: SqlToolNs.CreateTableFiled = {
    filed: 'age',
    type: SqlToolNs.FiledType.number,
    allowNull: true
}


console.log(SqlTool.buildCreateTableSql('sun', 'people', [a, b]))
