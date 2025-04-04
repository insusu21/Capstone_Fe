<template>
  <div class="main-home">
    <!-- 지도 영역 -->
    <div class="map-section">
      <p>지도</p>
    </div>

    <!-- 슬라이더 영역 -->
    <div class="slider-section">
      <h3>현재 보관중인 습득물 현황</h3>
      <div class="slider">
        <button class="arrow left">&lt;</button>
        <div class="items">
          <img src="https://via.placeholder.com/150" alt="Item 1" />
          <img src="https://via.placeholder.com/150" alt="Item 2" />
          <img src="https://via.placeholder.com/150" alt="Item 3" />
        </div>
        <button class="arrow right">&gt;</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainHome',
};
</script>

<style scoped>
.main-home {
  text-align: center;
}

.map-section {
  background-color: #e0e0e0;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.slider-section {
  margin-top: 20px;
}

.slider-section h3 {
  color: #b22222;
}

.slider {
  display: flex;
  align-items: center;
}

.items {
  display: flex;
  gap: 10px;
}

.arrow {
  background-color: transparent;
  border: none;
  font-size: 24px;
}
</style>
