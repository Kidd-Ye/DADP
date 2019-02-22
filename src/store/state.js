const state = {
  version: '0.1.0',             // 版本信息
  siteName: 'DADP',
  // 用户信息
  userInfo: {
    userName: '',
    userID: null,
  },
  topMenuVisible: true,         // 顶部导航栏
  loadingMaskVisible: false,    // 是否显示等待遮罩层
  loadingMaskText: '加载中...',
};

export default state;