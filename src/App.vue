<template>
  <div id="app">
    <div class="container">
      <!-- 헤더 -->
      <TempHeader />

      <!-- 라우터 뷰: 현재 경로에 따라 컴포넌트를 렌더링 -->
      <main class="main-content">
        <router-view />
      </main>

      <!-- 푸터 -->
      <TempFooter />
    </div>
  </div>
</template>

<script>
import TempHeader from './components/TempHeader.vue';
import TempFooter from './components/TempFooter.vue';

export default {
  name: 'App',
  components: {
    TempHeader,
    TempFooter,
  },
};
</script>

<style>
/* 전체 레이아웃 컨테이너 */
.container {
  width: 80%; /* 전체 화면의 80%만 사용 */
  margin: 0 auto; /* 좌우 중앙 정렬 */
}

/* 기본 스타일 */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1; /* 메인 콘텐츠가 화면의 남은 공간을 차지 */
}
</style>
