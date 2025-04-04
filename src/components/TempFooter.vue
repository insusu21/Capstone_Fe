<template>
<footer class="Tempfooter">
  <div class="footer-section">
    <!-- 홈페이지 이름 -->
    <div class="footer-column">
      <h4>홈페이지 이름</h4>
      finder
      김민지 심은미 김승현 전인수<br />
      서울특별시 광진구
    </div>

    <!-- 고객센터 -->
    <div class="footer-column">
      <h4>365 고객센터</h4>
      FAQ<br />
      1:1 문의<br />
      email: zunni25@naver.com
    </div>

    <!-- 프로젝트 정보 -->
    <div class="footer-column">
      <h4>프로젝트 정보</h4>
      본 홈페이지는<br />
      Capstone 디자인 이벤트반<br />
      팀 프로젝트입니다.
    </div>
  </div>
</footer>
</template>

<script>
export default {
  name: 'TempFooter',
};
</script>

<style scoped>
.Tempfooter {
  background-color: #f8f9fa;
  padding: 20px;
}

.footer-section {
  display: flex;
  justify-content: space-between;
}

.footer-column h4 {
  font-weight: bold;
}
.footer-column {
   font-size :14px
}
</style>

