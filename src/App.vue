<template>
  <div id="app" :style="paddingStyle">
    <nav-menu></nav-menu>
    <router-view/>
  </div>
</template>

<script>
import navMenu from './components/nav-menu.vue';
import { mapState } from 'vuex';

export default {
  name: 'App',
  components: {
    navMenu
  },
  computed: {
    ...mapState(['topMenuVisible', 'loadingMaskVisible', 'loadingMaskText', 'userInfo']),
    isLoginPage (){
      return ['login'].includes(this.$route.name);
    },
    paddingStyle (){
      return {
        paddingTop: '72px',
        paddingLeft: 0,
        paddingRight: 0,
        paddingBottom: 0
      };
    },
  },
}
</script>

<style lang= "less">
@import "../style/variable.less";
#app {
  height: 100%;
  position: relative;
  overflow-y: hidden;
  background-color: #F2F2F2;
  #nav-menu {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
}
