// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import util from './util'
import store from './store'
import iview from 'iview';
import './style/index.less';

function installPlugin(plugin, name){
  window[name] = plugin;
  plugin.install = function(Vue, options){
    Vue.prototype[name] = this;
  };
  Vue.use(plugin);
}

// 工具类模块
installPlugin(util, 'util');

Vue.use(iview);

const app = new Vue({
  el: '#app',
  store,
  router,
  render: h => {
    return h(App);
  }
});

window.app = app;