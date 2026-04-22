<script setup>
import { ref } from 'vue'

// 1. 接收來自總公司的資料 (Props)
// 導覽列需要知道清單有哪些，所以從主檔案接收 items
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
})

// 2. 建立對講機 (Emits)
// 告訴 Vue，這個組件會發送一個叫做 'toggle-drawer' 的訊號給外面的總公司
const emit = defineEmits(['toggle-drawer'])

// --- 內部服務台專用邏輯（自己的筆記本） ---
const handleCartClick = () => console.log('開啟購物車清單')

// 會員選單資料與控制邏輯
const profileMenu = ref(null)
const profileItems = ref([
  { label: '會員中心', icon: 'pi pi-user' },
  { label: '訂單查詢', icon: 'pi pi-box' },
  { separator: true },
  { label: '登出', icon: 'pi pi-sign-out' },
])

const toggleProfileMenu = (event) => {
  profileMenu.value.toggle(event)
}
</script>

<template>
  <header class="fixed top-0 left-0 w-full z-50 px-4 py-2">
    <MegaMenu
      :model="items"
      class="shadow-lg border-gray-200/50 bg-white/80 backdrop-blur-lg rounded-2xl main-navigation"
    >
      <template #start>
        <div class="flex items-center gap-2 mr-6 ml-2">
          <Button
            icon="pi pi-bars"
            variant="text"
            severity="secondary"
            rounded
            @click="$emit('toggle-drawer')"
            class="mr-2 drawer-toggle-btn"
          />

          <div class="w-10 h-10 flex items-center justify-center overflow-hidden">
            <img
              src="../assets/img/LOGO.png"
              alt="shizuku logo"
              class="w-full h-full object-contain"
            />
          </div>
          <div class="flex flex-col leading-none">
            <span class="text-xl font-bold tracking-tighter text-gray-900 uppercase">shizuku</span>
            <span class="text-[10px] text-gray-400 font-light tracking-[0.2em] mt-1">しずく</span>
          </div>
        </div>
      </template>

      <template #item="{ item }">
        <a
          v-if="item.root"
          class="group flex items-center px-4 py-2 rounded-lg transition-all hover:bg-black/5 cursor-pointer"
        >
          <span class="font-bold text-gray-800 group-hover:text-primary transition-colors">{{
            item.label
          }}</span>
          <i
            v-if="item.items"
            class="pi pi-angle-down ml-2 text-[10px] text-gray-400 group-hover:text-primary"
          ></i>
        </a>
        <a
          v-else-if="!item.image"
          class="flex items-start p-3 rounded-xl hover:bg-gray-50 transition-all gap-4 w-full"
        >
          <div
            class="flex items-center justify-center rounded-full bg-primary/10 text-primary w-10 h-10"
          >
            <i :class="[item.icon, 'text-md']"></i>
          </div>
          <div class="flex flex-col">
            <span class="font-bold text-gray-800 text-sm">{{ item.label }}</span>
            <span class="text-[10px] text-gray-400 leading-tight">{{ item.subtext }}</span>
          </div>
        </a>
        <div v-else class="p-3 bg-stone-50 rounded-xl border border-stone-100 text-center">
          <img :src="item.image" class="rounded-lg mb-2 h-24 w-full object-cover" alt="promo" />
          <span class="font-bold text-xs block mb-1">{{ item.label }}</span>
          <Button
            label="立即探索"
            size="small"
            severity="contrast"
            class="w-full text-[10px] h-8"
          />
        </div>
      </template>

      <template #end>
        <div class="flex items-center gap-1">
          <Button icon="pi pi-search" variant="text" severity="secondary" rounded />
          <Button
            icon="pi pi-shopping-cart"
            variant="text"
            severity="secondary"
            rounded
            v-badge.info="5"
            @click="handleCartClick"
          />
          <Avatar
            image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
            shape="circle"
            class="cursor-pointer ml-2"
            @click="toggleProfileMenu"
          />
        </div>
      </template>
    </MegaMenu>
  </header>

  <Menu ref="profileMenu" :model="profileItems" :popup="true" class="shadow-2xl border-none">
    <template #start>
      <div class="p-4 border-b border-gray-50 flex items-center gap-3">
        <Avatar
          image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
          shape="circle"
        />
        <span class="font-bold text-sm text-gray-800">Amy Elsner</span>
      </div>
    </template>
  </Menu>
</template>

<style scoped>
/* 讓導覽列在滑動時保持在最上層，且內容有呼吸感 */
:deep(.p-megamenu) {
  padding: 0.5rem 1rem;
}
/* 隱藏Drawer漢堡按鈕 */
.drawer-toggle-btn {
  display: none !important;
}
/* Drawer漢堡按鈕 寬度960以上顯示 */
@media (max-width: 960px) {
  .drawer-toggle-btn {
    display: inline-flex !important;
  }
  /* 鎖定 MegaMenu 內部的清單容器並隱藏 */
  :deep(.main-navigation .p-megamenu-root-list) {
    display: none;
  }
  /* 隱藏MegaMenu漢堡按鈕 */
  :deep(.main-navigation .p-megamenu-button) {
    display: none !important;
  }
}
</style>
