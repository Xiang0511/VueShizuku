<script setup>
// 引入你的 Logo 圖片，確保 logo.png 已經放在 src/assets/ 資料夾內
import logoUrl from '@/assets/logo.png' 
</script>

<template>
  <header class="navbar">
    <div class="logo-container">
      <img :src="logoUrl" alt="Shizuku Logo" class="brand-logo">
      <span class="brand-name">雫 Shizuku</span>
    </div>

    <div class="nav-actions">
      <button class="icon-btn">🔍</button>
      <button class="icon-btn">🛒<span class="badge">3</span></button>
      <button class="icon-btn profile-btn">👤</button>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 30px;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
}

.brand-logo {
  height: 70px;
  width: auto;
  object-fit: contain;
}

.brand-name {
  font-size: 22px;
  font-weight: bold;
  color: #333;
  letter-spacing: 1px;
}

.nav-actions {
  display: flex;
  gap: 15px;
}

.icon-btn {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.icon-btn:hover {
  background-color: #f5f5f5;
  transform: translateY(-2px);
}

.profile-btn {
  border: 1px solid #ddd;
}

.badge {
  position: absolute;
  top: 0;
  right: 0;
  background-color: #ee4d2d;
  color: white;
  font-size: 10px;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* --- 手機版 RWD 魔法 --- */
@media (max-width: 768px) {
  .navbar {
    padding: 0 15px; /* 左右留白縮小 */
  }

  .brand-logo {
    height: 50px; /* Logo 在手機上縮小一點 */
  }

  .brand-name {
    display: none; /* 手機螢幕太小，直接把「雫 Shizuku」文字藏起來，只留圖示 */
  }

  .nav-actions {
    gap: 8px; /* 右邊圖示的間距縮小 */
  }
}
</style>