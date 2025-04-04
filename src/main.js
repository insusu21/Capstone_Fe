import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 라우터 임포트
import store from './store/index'; // Vuex store 임포트

const app = createApp(App);

app.use(router); // 라우터 추가
app.use(store); // Vuex 등록
app.mount('#app'); // HTML의 #app 요소에 마운트
