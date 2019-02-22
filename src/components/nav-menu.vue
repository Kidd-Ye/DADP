<template>
  <Menu mode="horizontal" theme="light" id="nav-menu" @on-select="selectMenu">
    <!-- 首页 -->
    <Menu-item name="home" class="home site-name">
      <div class="logo"></div>
    </Menu-item>
    <!-- 关闭 -->
    <Menu-item name="close" class="close right" title="关闭程序">
      <Icon type="close" :color="iconColor" size="16"/>
    </Menu-item>
    <!-- 最大化/还原 -->
    <Menu-item name="maximize" class="maximize right" :title="maximized?'还原':'最大化'">
      <Icon :type="maximized?'arrow-shrink':'arrow-expand'" size="16" :color="iconColor"/>
    </Menu-item>
    <!-- 最小化 -->
    <Menu-item name="minimize" class="minimize right" title="最小化">
      <Icon type="minus" :color="iconColor" size="16"/>
    </Menu-item>
    <!-- 退出登录 -->
    <Menu-item name="logout" class="logout right" title="登出" v-if="logined">
      <Icon type="power" size="16" :color="iconColor"></Icon>
    </Menu-item>
    <!-- 登录 -->
    <!-- <Menu-item name="login" class="login right" v-if="!logined">
      登录
    </Menu-item> -->
    <!-- 返回按钮 -->
    <!-- <Menu-item name="back" class="back right" title="返回" v-show="showBackBtn && $route.path !== '/login'">
      <Icon type="android-arrow-back" size="16" :color="iconColor"></Icon>
    </Menu-item> -->
    <div class="locationBtnDiv">
      <ButtonGroup class="forward-backward-btns" v-if="logined">
        <Button type="default" @click="$router.go(-1);"><Icon type="chevron-left"></Icon></Button>
        <Button type="default" @click="$router.go(1);"><Icon type="chevron-right"></Icon></Button>
      </ButtonGroup>
    </div>
  </Menu>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { mapState } from 'vuex';
  export default {
    name: 'nav-menu',
    data (){
      return {
        iconColor: "white",
        currentMenuName: 'home',
        maximized: false,
      };
    },
    computed: {
      ...mapGetters(['logined']),
      ...mapState(['userInfo']),
      // 是否显示返回按钮
      showBackBtn (){
        return true;
      },
    },
    mounted() {
      //
    },
    methods: {
      selectMenu (menuName){
        console.log('selectMenu', menuName);
        // if(['close', 'maximize', 'minimize'].includes(menuName)){
        //   if(!window.ET){
        //     this.$Message.warning('浏览器环境下无法执行此操作');
        //     return;
        //   }
        // }
        switch(menuName){
          // 关闭
          case 'close':
            if (this.$store.getters.logined) {
              // this.loginOut('close');
            }
            this.$store.commit('showLoadingMask', '正在退出登录，请稍等...');
            setTimeout(() => {
              this.$store.commit('hideLoadingMask');
              // ET.ipcRenderer.send('closeMainWindow');
            }, 1000);
            break;
          // 最大化/还原
          case 'maximize':
            // ET.ipcRenderer.send('maximizeMainWindow');
            break;
          // 最小化
          case 'minimize':
            // ET.ipcRenderer.send('minimizeMainWindow');
            break;
          // 登出
          case 'logout':
            // this.$Modal.confirm({
            //   title: '登出',
            //   content: '您确定要登出？',
            //   onOk: () => {
            //     this.loginOut();
            //   }
            // });
            break;
          // 返回
          case 'back':
            this.$router.go(-1);
            break;
          default:
            // this.currentMenuName = menuName;
            // this.$router.push('/'+menuName);
            break;
        };
      },
      // 退出登录
      loginOut (from='logout'){
        // this.api.user.loginOut(this.userInfo.iUserID).then((res) => {
        //   if(res.data.msgBody.err.level < 3){
        //     this.$Message.success('登出成功');
        //     this.eventHub.$emit('logout');
        //     // 直接刷新页面
        //     if(from === 'logout'){
        //       if(ET && ET.ipcRenderer){
        //         ET.ipcRenderer.send('reload');
        //       }else window.location.reload();
        //     }
        //   }else this.$Message.error({
        //     content: '登出失败：' + res.data.msgBody.err.MSGInfo,
        //     duration: 5,
        //   });
        // }).catch((err) => {
        //   console.log('>>> [err] 用户登出',err);
        //   this.$Message.error('网络出错或服务暂时不可用');
        // });
      },
    }
  };
</script>

<style lang= "less">
  @import '../style/variable.less';
  .ivu-menu-horizontal.ivu-menu-light:after{
    /* 去除底部的border */
    height: 0px; 
  }
  .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active{
    color: white;
    border-bottom: 4px solid white;
  }
  .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover{
    color: white;
    border-bottom: 4px solid white;
  }
  #nav-menu {
    background-color: @top-menu-bgcolor;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 72px;
    line-height: 72px;
    -webkit-app-region: drag;
    border-bottom: 4px solid @top-menu-bottom-color;
    .ivu-menu-item {
      -webkit-app-region: no-drag;
    }
    .right {
      float: right;
    }
    .site-name.ivu-menu-item-selected,
    .right.ivu-menu-item-selected {
      color: inherit;
      border-bottom: none;
    }
    .site-name.ivu-menu-item-selected:hover,
    .right.ivu-menu-item-selected:hover {
      color: white;
      border-bottom: 2px solid white;
    }
    .site-name {
      /*color: #ff6600;*/
      opacity: .95;
      display: flex;
      align-items: center;
      /* background: -webkit-linear-gradient(top, #ff6600 , #dd4400);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent; */
      .logo {
        width: 42px;
        height: 42px;
        background-image: url('../assets/logo.png');
        background-repeat: no-repeat;
        background-size: contain;
      }
      .version {
        margin-left: 20px;
        font-size: 16px;
        color: #1D68FF;
        font-weight: 600;
      }
      .username {
        font-size: 12px;
        margin-left: 15px;
      }
    }
    .locationBtnDiv{
      float:left; 
      margin-left:40px;
      .forward-backward-btns {
        -webkit-app-region: no-drag;
        margin-top: -5px;
        .ivu-btn {
          margin-right: 1px;
          background-color: #333333;
          color: #f2f2f2;
          border-color: rgba(0, 0, 0, .5);
        }
      }
    }
  }
</style>