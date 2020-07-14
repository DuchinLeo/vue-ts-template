/*
 * @Description:
 * @Author: Duchin/梁达钦
 * @Date: 2020-07-14 18:11:31
 * @LastEditTime: 2020-07-14 18:11:52
 * @LastEditors: Duchin/梁达钦
 */
// Filter to uppercase the first character // 过滤到大写的第一个字符
export const uppercaseFirstChar = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
