/*
 * @Author: your name
 * @Date: 2021-01-07 11:41:32
 * @LastEditTime: 2021-01-18 09:45:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \element_vue3.0\src\router\index.js
 */
import { createRouter, createWebHashHistory } from "vue-router";
import globalRoutes from "./globalRoutes";
import mainRoutes from "./mainRoutes";

const router = createRouter({
    history: createWebHashHistory(),
    scrollBehavior: () => ({ y: 0 }),
    isAddDynamicMenuRoutes: false, // 是否已经添加动态(菜单)路由
    routes: globalRoutes.concat(mainRoutes)
});
export default router;
