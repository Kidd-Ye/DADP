const getters = {
  logined(state) {
    state.userInfo = window.sessionStorage.getItem('userInfo') ?
      JSON.parse(window.sessionStorage.getItem('userInfo')) :
      {
        userName: '',
        userID: null
      };
    return !!state.userInfo.userID;
  }
};

export default getters;