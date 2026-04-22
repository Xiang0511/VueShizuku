<script setup>
import { ref } from 'vue'
import Footer from './components/Footer.vue'
import MobileSidebar from './components/MobileSidebar.vue'
import Header from './components/Header.vue'
// --- 控制邏輯 ---
const visible = ref(false) // 控制側邊欄 Drawer 的開關

//  導覽列
// Header 跟 MobileSidebar 都要用它
const items = ref([
  {
    label: '女裝專區',
    root: true,
    items: [
      [
        {
          items: [
            { label: '熱銷上衣', icon: 'pi pi-heart', subtext: '本週最受歡迎款式' },
            { label: '優雅洋裝', icon: 'pi pi-star', subtext: '約會與派對必備' },
            { label: '質感下身', icon: 'pi pi-clone', subtext: '顯瘦修身牛仔褲、裙裝' },
          ],
        },
      ],
      [
        {
          items: [
            {
              image:
                'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=400&auto=format&fit=crop',
              label: '2026 春夏系列',
              subtext: '探索最新的法式簡約風格。',
            },
          ],
        },
      ],
    ],
  },
  { label: '男裝專區', root: true },
  { label: '限時折扣', root: true },
])
</script>

<template>
  <Header :items="items" @toggle-drawer="visible = true" />

  <main class="mt-20 px-4 md:px-8 py-6 min-h-screen bg-gray-50/50">
    <div class="max-w-7xl mx-auto">
      <RouterView v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </div>
  </main>

  <!-- 側邊欄 -->
  <MobileSidebar v-model:visible="visible" :items="items" />

  <!-- 頁尾 -->
  <Footer />
</template>

<style scoped>
/* 頁面切換時的淡入淡出效果，讓質感更提升 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
</style>
