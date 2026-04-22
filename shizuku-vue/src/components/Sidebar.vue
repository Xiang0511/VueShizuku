<script setup>
import { ref } from 'vue'

// 定義從父組件傳進來的資料 (選配，現在先寫死在組件內也可以)
const menuItems = ref([
  { title: '聯名項目合作', hasSub: true, isOpen: false },
  { title: 'WODEN', hasSub: false },
  { title: '上身 / TOP', hasSub: true, isOpen: false },
  { 
    title: '下身 / BOTTOM', 
    hasSub: true, 
    isOpen: true, 
    subItems: ['全部商品', '短褲', '長褲'] 
  },
  // ... 其他項目
])

const toggleMenu = (index) => {
  if (menuItems.value[index].hasSub) {
    menuItems.value[index].isOpen = !menuItems.value[index].isOpen
  }
}
</script>

<template>
  <aside class="w-64 border-r border-gray-100 p-6 hidden md:block h-screen sticky top-0">
    <nav>
      <ul class="space-y-4">
        <li v-for="(item, index) in menuItems" :key="index">
          <div @click="toggleMenu(index)" class="flex justify-between items-center cursor-pointer group">
            <span class="text-sm font-medium text-gray-700 group-hover:text-black">
              {{ item.title }}
            </span>
            <svg v-if="item.hasSub" :class="{ 'rotate-180': item.isOpen }" class="w-4 h-4 transition-transform text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <ul v-if="item.hasSub && item.isOpen" class="mt-2 ml-4 space-y-2 border-l border-gray-100 pl-4">
            <li v-for="sub in item.subItems" :key="sub">
              <a href="#" class="text-xs text-gray-500 hover:text-black">{{ sub }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </aside>
</template>