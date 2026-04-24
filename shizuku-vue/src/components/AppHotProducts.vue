<script setup>
import { ref } from 'vue'
// 建立一個叫做 products 的資料盒子，裡面裝著一個清單 (陣列 [物件{id:1,name:'',,,}])
const products = ref([
  {
    id: 1,
    name: '日系慵懶風麻花針織衫',
    price: 1180,
    originalPrice: 1580,
    // 溫柔米色針織
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=800',
    tag: '人氣',
  },
  {
    id: 2,
    name: '韓系溫柔粉色雪紡洋裝',
    price: 1580,
    originalPrice: 1980,
    // 粉嫩洋裝
    image:
      'https://d31xv78q8gnfco.cloudfront.net/media/image_clips/67d81493454d40000c609d45/original.jpg?loop_breaker=1',
    tag: 'NEW',
  },
  {
    id: 3,
    name: '極簡質感百褶長裙',
    price: 890,
    originalPrice: 1200,
    // 氣質長裙
    image:
      'https://app-photo.mo-bo.com.tw/APP_IMG/08020509/10F0B5C1-D16E-45A6-B41F-904F492EA363.jpg',
    tag: '',
  },
  {
    id: 4,
    name: '俐落系焦糖色西裝外套',
    price: 1980,
    originalPrice: 2480,
    // 韓系西裝外套
    image:
      'https://www.ratherstores.com/upload_files/fonlego-rwd/prodpic/D_R22W801800_32_%20(1).jpg',
    tag: 'SALE',
  },
])
</script>

<template>
  <section class="max-w-7xl mx-auto py-16 px-4 md:px-12">
    <div class="text-center mb-10">
      <h2 class="text-3xl font-black text-gray-900 tracking-wider mb-2">HOT ARRIVALS</h2>
      <p class="text-gray-500">熱賣暢銷單品</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div v-for="product in products" :key="product.id" class="group cursor-pointer">
        <div class="relative rounded-xl overflow-hidden mb-4">
          <img
            :src="product.image"
            class="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-110"
            alt="商品圖片"
          />

          <span
            v-if="product.tag"
            class="absolute top-3 left-3 bg-black text-white text-xs font-bold px-3 py-1 rounded-sm tracking-widest"
          >
            {{ product.tag }}
          </span>
        </div>

        <h3 class="font-bold text-gray-800 text-lg">{{ product.name }}</h3>

        <div class="flex gap-2 items-center mt-1 mb-4">
          <span class="text-red-600 font-bold">NT$ {{ product.price }}</span>
          <span class="text-gray-400 line-through text-sm">NT$ {{ product.originalPrice }}</span>
        </div>

        <Button label="加入購物車" outlined severity="contrast" class="w-full font-bold" />
      </div>
    </div>
  </section>
</template>
