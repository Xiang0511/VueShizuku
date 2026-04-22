<script setup>
// 啟動自動化機器控制面板
import { ref, computed } from 'vue' // 從工具箱拿出狀態管理工具

// 1. 定義對外溝通的「資料投入口」 (Props)
// 這裡負責接收來自總目錄的導覽列原始資料
const props = defineProps({
  items: {
    type: Array,
    required: true, // 標記為必填，確保這台機器啟動時一定有資料可處理
  },
})

// 2. 定義對外溝通的「連動開關」 (Model)
// 讓總目錄可以控制這個側邊欄的顯示與隱藏，名稱命名為 visible
const isVisible = defineModel('visible', { type: Boolean, default: false })

// --- 將導覽列內資料轉移到 PanelMenu 內（專屬自動化機器） ---
// 原本在主檔案的邏輯，現在搬到這裡，由側邊欄自己負責消化資料
const mobileItems = computed(() => {
  return props.items.map((rootItem) => {
    if (!rootItem.items) return rootItem
    const flattenedSubItems = rootItem.items.flatMap((columnArray) => {
      return columnArray.flatMap((subGroup) => {
        return subGroup.items || []
      })
    })
    return {
      ...rootItem,
      items: flattenedSubItems, // 把複雜的結構轉換成簡單的一維陣列
    }
  })
})

// --- 側邊欄專屬資料（獨立的筆記本） ---
// 這些變數現在只存在於這個組件內，不會去污染主檔案
const selectedSizes = ref([]) // 記錄使用者選了哪些尺寸
const sizes = ref(['XS', 'S', 'M', 'L', 'XL']) // 尺寸選單的選項
const priceRange = ref([0, 5000]) // 記錄預算拉桿的數值
const serviceLinks = ref([
  // 記錄客服連結清單
  { label: '配送與運費', icon: 'pi pi-truck' },
  { label: '退換貨政策', icon: 'pi pi-refresh' },
  { label: '聯繫客服', icon: 'pi pi-comments' },
])
</script>

<template>
  <Drawer v-model:visible="isVisible" header="探索時尚" class="w-full md:w-[28rem]">
    <div class="flex flex-col gap-8 h-full">
      <section class="mobile-only-nav">
        <h3 class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">主選單</h3>
        <PanelMenu :model="mobileItems" class="border-none custom-mobile-menu">
          <template #item="{ item }">
            <a
              v-if="item.root"
              class="flex items-center px-3 py-3 rounded-lg transition-all hover:bg-gray-100 cursor-pointer w-full"
            >
              <span class="font-bold text-gray-800 text-base">{{ item.label }}</span>
              <i
                v-if="item.items && item.items.length > 0"
                class="pi pi-angle-down ml-auto text-xs text-gray-400"
              ></i>
            </a>
            <a
              v-else-if="item.label && !item.image"
              class="flex items-start p-3 rounded-xl hover:bg-gray-50 transition-all gap-4 w-full ml-2"
            >
              <div
                class="flex items-center justify-center rounded-full bg-primary/10 text-primary min-w-[36px] h-9"
              >
                <i :class="[item.icon, 'text-sm']"></i>
              </div>
              <div class="flex flex-col">
                <span class="font-bold text-gray-800 text-sm">{{ item.label }}</span>
                <span class="text-[10px] text-gray-400 leading-tight">{{ item.subtext }}</span>
              </div>
            </a>
            <div
              v-else-if="item.image"
              class="p-3 bg-stone-50 rounded-xl border border-stone-100 text-center mx-2 my-2"
            >
              <img :src="item.image" class="rounded-lg mb-2 h-32 w-full object-cover" alt="promo" />
              <span class="font-bold text-xs block mb-2">{{ item.label }}</span>
              <Button
                label="立即探索"
                size="small"
                severity="contrast"
                class="w-full text-[10px] h-8"
              />
            </div>
          </template>
        </PanelMenu>
      </section>

      <section>
        <h3 class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">精選分類</h3>
        <div class="grid grid-cols-2 gap-2">
          <div
            v-for="tag in ['鞋款專區', '飾品配件', '時尚包款', '居家生活']"
            :key="tag"
            class="p-4 border border-gray-100 rounded-xl hover:bg-primary hover:text-white cursor-pointer transition-all text-center font-bold text-sm text-gray-600"
          >
            {{ tag }}
          </div>
        </div>
      </section>

      <section class="bg-gray-50 p-5 rounded-2xl border border-gray-100">
        <h3 class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">購物篩選器</h3>
        <div class="mb-8">
          <label class="block font-bold text-gray-800 text-sm mb-4">依尺寸篩選</label>
          <div class="flex flex-wrap gap-2">
            <div v-for="size in sizes" :key="size">
              <ToggleButton
                v-model="selectedSizes"
                :onLabel="size"
                :offLabel="size"
                :value="size"
                class="w-12 h-10 text-xs"
              />
            </div>
          </div>
        </div>
        <div>
          <div class="flex justify-between mb-4">
            <label class="font-bold text-gray-800 text-sm">預算範圍</label>
            <span class="text-primary font-mono text-sm"
              >${{ priceRange[0] }} - ${{ priceRange[1] }}</span
            >
          </div>
          <Slider v-model="priceRange" range :min="0" :max="10000" />
        </div>
      </section>

      <section class="mt-auto pb-6">
        <h3 class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">需要協助？</h3>
        <div class="flex flex-col gap-1">
          <a
            v-for="link in serviceLinks"
            :key="link.label"
            class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 text-gray-600 cursor-pointer"
          >
            <i :class="link.icon" />
            <span class="text-sm">{{ link.label }}</span>
          </a>
        </div>
      </section>
    </div>
  </Drawer>
</template>

<style scoped>
/* 側邊欄 ToggleButton 的選中樣式 */
:deep(.p-togglebutton.p-highlight) {
  background: black !important;
  border-color: black !important;
  color: white !important;
}
</style>
