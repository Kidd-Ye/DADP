import Vue from 'vue'
import Router from 'vue-router'
import login from "../login.vue"

import page from "../pages/index.vue";
import operationLog from "../pages/log/operation-log.vue";
import systemLog from "../pages/log/system-log.vue";

import systemSetting from "../pages/setting/setting.vue";
import dataViewer from "../pages/dataviewer/dataviewer.vue";
import wareHouse from "../pages/warehouse/index.vue";


Vue.use(Router)

export default new Router({
  routes: [
    { path: "/", redirect: "/login" },
    { path: "/login", name: "login", component: login },
    {
      title: "页面管理",
      path: "/page",
      component: page,
      children: [
        {
          path: "",
          name: "page-index",
          redirect: "system-log"
        },
        {
          title: "系统设置",
          path: "system-setting",
          name: "/page/system-setting",
          component: systemSetting
        },
        {
          title: "数据视窗",
          path: "dataViewer",
          name: "/page/dataViewer",
          component: dataViewer
        },
        {
          title: "数据仓库",
          path: "wareHouse",
          name: "/page/wareHouse",
          component: wareHouse
        },
        {
          title: "系统日志",
          path: "system-log",
          name: "/page/system-log",
          component: systemLog
        },
        {
          title: "操作日志",
          path: "operation-log",
          name: "/page/operation-log",
          component: operationLog
        }
      ]
    },
  ]
})
