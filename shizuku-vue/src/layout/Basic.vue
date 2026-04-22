<script setup>
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue' 
import SideBar from '@/components/SideBar.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="layout-wrapper">
    <NavBar class="top-nav" />

    <div class="main-container">
      <SideBar class="side-bar" />

      <main class="content-area">
        <RouterView />
      </main>
    </div>

    <Footer class="bottom-footer" />
  </div>
</template>

<style scoped>
/* 這裡放我們剛剛寫好的「防彈版」排版 CSS，高度設為 180px 容納你的大 Logo */
.layout-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.top-nav {
  height: 180px; 
  background-color: white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  position: sticky;
  top: 0;
  z-index: 1000; 
}

.main-container {
  display: flex;
  align-items: flex-start; /* 讓 sticky 生效的關鍵 */
  max-width: 1300px; 
  margin: 0 auto;
  width: 100%;
}

.side-bar {
  width: 220px;
  background-color: #fafafa;
  position: sticky;
  top: 180px; 
  height: calc(100vh - 180px); 
  overflow-y: auto; 
}

/* 隱藏捲軸 */
.side-bar::-webkit-scrollbar {
  display: none;
}
.side-bar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.content-area {
  flex: 1; 
  padding: 20px 30px;
  background-color: #fafafa;
}

.bottom-footer {
  height: 80px;
  background-color: #333;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
}

/* --- 手機版 RWD 魔法 --- */
@media (max-width: 768px) {
  .main-container {
    /* 原本是左右並排(row)，手機版改成上下排列(column) */
    flex-direction: column; 
  }

  .side-bar {
    /* 側邊欄變成 100% 寬度 */
    width: 100%;
    /* 解除原本的 sticky 固定，讓它跟著畫面滑動，不然會擋住整個手機螢幕 */
    position: static; 
    height: auto; 
    padding: 10px 20px;
  }
  
  .content-area {
    padding: 10px; /* 手機版不需要太大的留白 */
  }
}


</style>