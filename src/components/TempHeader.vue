<template>
  <header class="Tempheader">
    <div class="header-content">
      <img src="C:\capstone\fe\src\assets\logo.png" alt="Logo" />
      <input type="text" placeholder="검색어를 입력하세요" />
      <button @click="$router.push('/login')">로그인</button>
      <button @click="$router.push('/signup')" style="background-color:#b22222; color:white;">회원가입</button>
    </div>
    <nav class="nav-links">
      <a href="#">분실물</a>
      <a href="#">습득물</a>
      <a href="#">FAQ</a>
      <a href="#">1:1 문의</a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'TempHeader',
};
</script>

<style scoped>
.Tempheader {
  background-color: #f8f9fa;
}

.header-content {
  display: flex;
  align-items: center;
}

.header-content input {
  margin-left: auto;
}
.nav-links a {
   /* 스타일 추가 */
}
</style>
