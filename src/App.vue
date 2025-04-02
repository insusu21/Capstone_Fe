<template>
  <div id="app" style="display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #f5f5f5;">
    <LoginView />
  </div>
</template>

<script>
import LoginView from './components/LoginView.vue';

export default {
  name: 'App',
  components: {
    LoginView,
  },
};
</script>

<style>
/* 기본 스타일 */
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
</style>
