<template>
  <div id="page-manage">
    <div class="menu-view">
      <Menu :theme="theme" @on-select="selectMenu" class="menu" width="160px" :active-name="$route.path">
        <div v-for="(menu,i) in menus" :key="i">
          <MenuItem :name="menu.path" class="menu-item">
              <Icon :type="menu.icon"></Icon>
              {{menu.name}}
          </MenuItem>
        </div> 
      </Menu>
    </div>
    <div class="router-view">
      <!-- :style="{'height':routerViewHeight} -->
      <!-- <keep-alive> -->
        <router-view></router-view>
      <!-- </keep-alive> -->
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    name: 'page-manage',
    data(){
      return{
        theme: 'light',
        menus: [
          {
            name: '系统设置',
            en: 'SysSetting',
            path: '/page/system-setting',
            icon: 'settings'
          },
          {
            name: '数据视窗',
            en: 'DataViewer',
            path: '/page/dataviewer',
            icon: 'eye'
          },
          {
            name: '数据仓库',
            en: 'WareHouse',
            path: '/page/warehouse',
            icon: 'stats-bars'
          },
          {
            name: '系统日志',
            en: 'SysLog',
            path: '/page/system-log',
            icon: 'ios-paper'
          },
          {
            name: '操作日志',
            en: 'OperLog',
            path: '/page/operation-log',
            icon: 'ios-people'
          }
        ],
      }
    },
    computed:{
      ...mapState(['userInfo']),
      // routerViewHeight(){
      //   const bodyHeight = document.body.offsetHeight;
      //   const screenHeight = window.screen.availHeight;
      //   console.log(bodyHeight);
      //   return screenHeight - 272;
      // }
    },
    methods:{
      selectMenu (name){
        this.$router.push(name);
      }
    },
  }
</script>

<style lang= "less">
  @import "../style/variable.less";
  #page-manage {
    position: absolute;
    top: 72px;
    left: 0;
    bottom: 0px;
    height: auto;
    width: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
    background-color: white;
    /* .ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu){
      background-color: black;
      color: white;
    }  */
    .menu-view{
      position: absolute;
      width: 160px;
      height: 100%;
      left: 0px;
      top: 0px;
      .menu{
        position: relative;
        /* top: 20px; */
        height: 100%;
        bottom: 0;
        color: white;
      } 
      .ivu-menu-light {
        background-color:@left-menu-bgcolor;
      }
      .ivu-menu-vertical.ivu-menu-light:after{
        opacity: 0;
      }
      .ivu-menu-vertical .ivu-menu-item:hover{
        background-color: @left-menu-hover-color;
        color: white;
      }
    }
    .router-view{
      position: absolute;
      height: 100%;
      width: auto;
      top: 20px;
      left: 180px;
      right: 0;
      bottom: 0;
      overflow-y: auto;
    }
  }
</style>