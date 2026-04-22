<script setup>
import { ref } from 'vue'

const menuItems = ref([
  { name: '所有商品', isAccordion: false },
  { name: '居家系列', isAccordion: false },
  { name: '仙女', isAccordion: false },
  { 
    name: '上衣', 
    isAccordion: true, 
    isOpen: false,
    subItems: ['T恤', '襯衫', '毛衣', '背心', '大學T', '帽T'] 
  },
  { 
    name: '外套', 
    isAccordion: true, 
    isOpen: false,
    subItems: ['夾克', '大衣', '風衣']
  },
  { name: '下身', isAccordion: false },
  { name: '配件', isAccordion: false },
  { name: '限時優惠', isAccordion: false }
])

const toggleAccordion = (index) => {
  menuItems.value[index].isOpen = !menuItems.value[index].isOpen
}
</script>

<template>
  <aside class="sidebar-menu">
    <ul class="menu-list">
      <li v-for="(item, index) in menuItems" :key="index" class="menu-item">
        
        <div v-if="item.isAccordion">
          <div class="menu-title accordion-header" @click="toggleAccordion(index)">
            <span>{{ item.name }}</span>
            <span class="arrow" :class="{ 'open': item.isOpen }">▼</span>
          </div>
          
          <ul v-show="item.isOpen" class="sub-menu">
            <li v-for="(subItem, subIndex) in item.subItems" :key="subIndex" class="sub-item">
              {{ subItem }}
            </li>
          </ul>
        </div>

        <div v-else class="menu-title normal-header">
          {{ item.name }}
        </div>

      </li>
    </ul>
  </aside>
</template>

<style scoped>
/* 這裡只保留選單本身的樣式，寬度和固定定位(sticky)之後會寫在外層模板 */
.sidebar-menu {
  padding: 20px 0; 
}

.menu-list, .sub-menu {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.menu-title {
  padding: 12px 20px;
  cursor: pointer;
  font-size: 16px;
  color: #333;
  transition: background-color 0.2s;
}

.accordion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu-title:hover {
  background-color: #f5f5f5;
  color: #ee4d2d;
}

.arrow {
  font-size: 12px;
  transition: transform 0.3s ease;
}

.arrow.open {
  transform: rotate(180deg);
}

.sub-menu {
  background-color: #fafafa;
}

.sub-item {
  padding: 10px 20px 10px 40px;
  font-size: 14px;
  color: #666;
  cursor: pointer;
  transition: color 0.2s;
}

.sub-item:hover {
  color: #ee4d2d;
}
</style>