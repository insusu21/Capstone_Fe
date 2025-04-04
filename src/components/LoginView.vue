<template>
    <div class="login-box">
      <h2>로그인</h2>
      <form @submit.prevent="login">
        <input 
          type="email" 
          v-model="email" 
          placeholder="이메일" 
          class="input-field"
        />
        <input 
          type="password" 
          v-model="password" 
          placeholder="비밀번호" 
          class="input-field"
        />
        <div class="checkbox-container">
          <input type="checkbox" v-model="rememberMe" id="rememberMe" />
          <label for="rememberMe">로그인 상태 유지</label>
        </div>
        <button type="submit" class="login-button">로그인</button>
      </form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      rememberMe: false,
    };
  },
  methods: {
  async login() {
    if (!this.email || !this.password) {
      alert('이메일과 비밀번호를 입력해주세요.');
      return;
    }

    try {
      // 예: 서버로 POST 요청 보내기
      const response = await fetch('1', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
          rememberMe: this.rememberMe,
        }),
      });

      if (!response.ok) {
        throw new Error('로그인 실패');
      }

      const data = await response.json();
      alert('로그인 성공!');
      console.log(data); // 받은 데이터 처리

      // 예: 로그인 성공 후 페이지 이동
      // this.$router.push('/dashboard');
    } catch (error) {
      alert(error.message || '로그인 중 문제가 발생했습니다.');
        }
    },
  },
};
</script>

<style scoped>


/* 로그인 박스 */
.login-box {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 300px;
}

/* 제목 */
.login-box h2 {
  margin-bottom: 20px;
}

/* 입력 필드 */
.input-field {
  width: calc(100% - 20px); /* 양쪽 여백을 고려한 너비 */
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

/* 체크박스 컨테이너 */
.checkbox-container {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

/* 체크박스 컨테이너 글씨 */
.checkbox-container label{
    font-size:14px
}
/* 로그인 버튼 */
.login-button {
  width: calc(100% - 20px);
  padding: 10px;
  background-color: #b22222;
  color: white;
  border: none;
  border-radius: 4px;
}

</style>
