import { createStore } from 'vuex';

export default createStore({
  state: {
    isLoggedIn: false, // 로그인 상태
    user: null         // 사용자 정보
  },
  mutations: {
    // 로그인 성공 시 상태 변경
    login(state, userData) {
      state.isLoggedIn = true;
      state.user = userData;
    },
    // 로그아웃 시 상태 초기화
    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
    }
  },
  actions: {
    // 비동기 로그인 처리 (예시)
    async login({ commit }, credentials) {
      // 실제 API 호출 부분 (예시)
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(credentials)
      });
      const userData = await response.json();
      commit('login', userData);
    }
  }
});
