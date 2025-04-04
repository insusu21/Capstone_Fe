<template>
  <header class="Tempheader">
    <div class="header-content">
      <!-- 왼쪽: 로고와 검색창 -->
      <div class="left-section">
        <img src="@/assets/logo.png" alt="Logo" class="logo" @click="$router.push('/')" />
        <input type="text" placeholder="검색어를 입력하세요" class="search-bar" />
      </div>

      <!-- 오른쪽: 로그인 및 회원가입 버튼 -->
      <div class="right-section">
        <button @click="$router.push('/login')" class="login-btn">로그인</button>
        <button @click="$router.push('/signup')" class="signup-btn">회원가입</button>
      </div>
    </div>
    <hr class="divider" />
    <!-- 내비게이션 링크 -->
    <nav class="nav-links">
      <a href="#" class="nav-item">분실물</a>
      <a href="#" class="nav-item">습득물</a>
      <a href="#" class="nav-item">FAQ</a>
      <a href="#" class="nav-item">1:1 문의</a>
    </nav>
    <hr class="divider" />
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
  padding: 10px 20px;
}

.header-content {
  display: flex;
  justify-content: space-between; /* 왼쪽과 오른쪽 정렬 */
  align-items: center;
}

/* 왼쪽 섹션 (로고와 검색창) */
.left-section {
  display: flex;
  align-items: center;
}

.logo {
  width: 50px; /* 로고 크기 */
  height: auto;
  cursor: pointer;
  margin-right: 15px; /* 로고와 검색창 간격 */
}

.search-bar {
  padding: 5px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

/* 오른쪽 섹션 (로그인 및 회원가입 버튼) */
.right-section {
  display: flex;
}

.login-btn,
.signup-btn {
  margin-left: 10px; /* 버튼 간격 */
  padding: 5px 10px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
}

.login-btn {
  background-color: #f0f0f0; /* 로그인 버튼 색상 */
  cursor: pointer;
}

.signup-btn {
  background-color: #b22222; /* 회원가입 버튼 색상 */
  cursor: pointer;
  color: white;
}

/* 내비게이션 스타일 */
.nav-links {
  display: flex; /* 가로로 정렬 */
  justify-content: space-around; /* 항목 간 간격 균등 */
}

.nav-item {
  color: black; /* 검은색 텍스트 */
  font-weight: bold; /* 볼드체 */
  text-decoration: none; /* 밑줄 제거 */
}

.nav-item:hover {
  text-decoration: underline; /* 마우스 오버 시 밑줄 표시 */
}

/* 구분선 스타일 */
.divider {
  border: none;
  border-top: 1px solid #ddd; /* 얇은 구분선 */
}
</style>
