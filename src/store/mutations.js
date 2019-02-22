const mutations = {
  // 设置菜单
  // setMenus(state, menus) {
  //   state.menus = menus;
  // },
  // 设置导航栏显示状态
  setTopMenuVisible(state, visible) {
    state.topMenuVisible = visible;
  },
  // 显示等待遮罩层
  showLoadingMask(state, text = '加载中...') {
    state.loadingMaskText = text;
    state.loadingMaskVisible = true;
  },
  // 隐藏等待遮罩层
  hideLoadingMask(state) {
    state.loadingMaskVisible = false;
  },
  // 设置用户信息
  setUserInfo(state, userInfo) {
    state.userInfo = Object.assign({}, state.userInfo, userInfo);
  },
  // 设置版本信息
  setVersion(state, version) {
    state.version = version;
  }
};

export default mutations;