<template>
  <div id="login">
    <Form>
      <div class="logo-div">
        <div class="logo"></div>
        <span>数据分析展示平台</span>
      </div>
      <Input :maxlength='30' v-model="userName" placeholder="请输入用户名" :autofocus="!this.userName" @on-enter="login">
        <Iicon name="account" size="12" color="#CCC" slot="prepend"></Iicon>
      </Input>
      <Input :maxlength='30' v-model="password" placeholder="请输入密码" type="password" @on-enter="login" :autofocus="!!this.userName">
        <Iicon name="key" size="12" color="#CCC" slot="prepend"></Iicon>
      </Input>
      <!-- <Checkbox label="remember-password" v-model="rememberPassword" class="rememberPasswordBtn">记住密码</Checkbox> -->
      <Button class="login-btn" type="primary" @click="login" long>登录</Button>
    </Form>
    <!-- <div class="footer">
      <div class="company"></div>
      <p class="slogan">科技驱动&nbsp;&nbsp;量化分析</p>
    </div> -->
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Iicon from './components/i-icon/index.vue';
export default {
  name: 'login',
    components: {
    Iicon
  },
  data (){
    return {
      userName: '',
      password: '',
      rememberPassword: false, // 是否记住密码
      queryProgress: { // 查询登录状态
        stop: false,
        intervalIns: null,
        interval: 1 * 1000, // 每 1s 查一次
        queryTimes: 0,
        maxQueryTimes: 180, // 最大的查询次数
      },
      open: false,
    };
  },
  computed:{
    ...mapState(['userInfo']),
  },
  methods: {
    login (){
      if(!this.util.tool.isEmpty(this.userName) && !this.util.tool.isEmpty(this.password)){
        this.$store.commit('showLoadingMask', '登录中...');
        // this.api.user.login(this.userName, this.password).then((res) => {
        //   this.$store.commit('hideLoadingMask');
        //   this.resolveRes(res).then(data => {
        //     console.log("data:",data);
        //     this.$Message.success('登录成功');
        //     const userInfo = {
        //       wstrUserName: data.userSession.wstrUserName,
        //       iUserID: data.userSession.iUserId,
        //       iGroupID: data.userSession.iGourpID,
        //       setRights: data.userSession.setRights,
        //     }
        //     // 保存登录帐号
        //     window.localStorage.setItem('account', this.userName);
        //     window.sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
        //     this.$store.commit('setUserInfo', userInfo);
        //     this.userName = '';
        //     this.password = '';
        //     // 权限控制
        //     this.eventHub.$emit('app.setPrivileges');
        //     this.$router.push('/home');
        //   }).catch(msg => {
        //     this.$Message.error('登录失败：' + msg);
        //   });
        // }).catch((err) => {
        //   this.resolveError(err, '用户登录').then(() => {
        //     this.$store.commit('hideLoadingMask');
        //   })
        // });
        
        this.$router.push('/page');
      }else this.$Message.error('用户名或密码不能为空');
    },
    handleClick () {
      // this.open = !this.open;
    },
    goToNextPage(){
      // let changePath = '';
      // for(let menu of this.menus) {
      //   if (this.whiteList[0] === menu.name) {
      //     changePath = menu.path;
      //   }
      // }
      // this.$router.push(changePath);
    }
  }
};
</script>

<style lang="less">
  #login {
    height: 100%;
    background-image: url('./assets/bg.png');
    form {
      width: 300px;
      padding-top: 200px;
      margin: 0 auto;
      label {
        display: inline-block;
        margin-bottom: 5px;
        color: #9ea7b4;
        font-size: 1.167em;
      }
      .logo-div {
        /*color: #999;*/
        width: 300px;
        color: #fff;
        // font-size: 12px;
        margin-bottom: 40px;
        display: inline-flex;
        // margin-left: 50px;
        .logo {
          width: 30px;
          height: 30px;
          background-image: url('./assets/logo.png');
          background-repeat: no-repeat;
          background-size: contain;
        }
        span{
          width: 100%;
          vertical-align: middle;
          line-height: 30px;
          text-align: center;
          font-size: 26px;
          color:#333333;
          font-weight: 600;
        }
      }
      .ivu-input-wrapper {
        margin-bottom: 15px;
      }
      .ivu-input {
        border-radius: 4px;
        // background-color: rgba(0,0,0,.2);
        border: none;
        font-size: 18px;
        text-align: left;
        // color: #ffffff;
        &:focus, &:hover {
          // border: none;
          /*border-color: transparent;*/
          /*border-color: #dddee1;*/
          outline: none;
          box-shadow: none;
        }
        /*&::-webkit-input-placeholder {
          color: #f2f2f2;
        }*/
      }
      .login-btn {
        margin-top: 20px;
        border-radius: 4px;
        opacity: .8;
      }
      .rememberPasswordBtn{
        margin-bottom: 10px;
        color: black;
      }
      .ivu-input-group-prepend{
        border: none;
        background-color: white;
        border-radius: 4px;
      }
    }
    .footer {
      position: absolute;
      bottom: 25px;
      width: 100%;
      padding-right: 10px;
      text-align: center;
      .company, .slogan {
        text-align: center;
        font-weight: 600;
        color: #fff;
      }
      // .company {
      //   position: relative;
      //   left: 50%;
      //   margin-left: -49px;
      //   margin-top: 15px;
      //   font-size: 20px;
      //   width: 98px;
      //   height: 13px;
      //   background-image: url('./assets/company.png');
      //   background-repeat: no-repeat;
      //   background-size: contain;
      // }
      .slogan {
        color: #8C8C8C;
        margin-top: 5px;
        font-size: 12px;
      }
    }
  }
</style>