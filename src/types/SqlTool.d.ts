/*
 * @Author: sunchen
 * @Date: 2022-07-28 21:17:42
 * @LastEditors: sunchen
 * @LastEditTime: 2022-07-28 21:40:06
 * @Description: www.github.com
 */

export type CreateTableFiled = {
    filed: string;
    type: FiledType;
    allowNull: boolean;
}


export const enum FiledType {
    'string' = 'string',
    'number' = 'number'
}



