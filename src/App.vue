<template>
  <div id="app">
    <TempHeader />
    <div class="main-content">
      <LoginView />
    </div>
    <TempFooter />
  </div>
</template>

<script>
import TempHeader from './components/TempHeader.vue';
import TempFooter from './components/TempFooter.vue';
import LoginView from './components/LoginView.vue';

export default {
  name: 'App',
  components: {
    TempHeader,
    TempFooter,
    LoginView,
  },
};
</script>

<style>
/* 메인 컨텐츠 스타일 */
.main-content {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 120px); /* 헤더와 푸터 높이를 제외한 영역 */
}
</style>
