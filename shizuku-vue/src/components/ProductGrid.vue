<template>
    <div class="max-w-7xl mx-auto px-4 py-12">
        <div class="mb-10 text-center">
            <span class="text-sm font-bold text-blue-600 uppercase tracking-widest">Shop All</span>
            <h2 class="text-4xl font-extrabold text-gray-900 mt-2 tracking-tight">精選商品</h2>
            <p class="text-gray-600 mt-3 max-w-2xl mx-auto">探索我們本季最受歡迎的時尚單品，兼具舒適與風格。</p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
            <div v-for="product in products" :key="product.fId"
                class="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div class="aspect-square bg-gray-100 relative overflow-hidden">
                    <img :src="product.fImage" :alt="product.fName"
                        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                        loading="lazy">

                    <button
                        class="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg text-gray-900 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 hover:bg-gray-900 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                    </button>
                </div>

                <div class="p-5 flex flex-col flex-grow">
                    <div class="flex justify-between items-start mb-2">
                        <div>
                            <h3 class="text-sm text-gray-500 uppercase tracking-wider">時尚上裝</h3>
                            <p
                                class="text-lg font-semibold text-gray-900 mt-1 truncate group-hover:text-blue-600 transition-colors">
                                {{ product.fName }}</p>
                        </div>
                    </div>
                    <div class="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                        <p class="text-2xl font-extrabold text-gray-950">NT$ {{ product.fPrice.toLocaleString() }}</p>
                        <span class="text-sm text-green-600 font-medium bg-green-50 px-2.5 py-1 rounded-full">有現貨</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// 替換為公開的高品質服飾圖片網址
const products = ref([
    {
        fId: 1,
        fName: '都市日常 - 落肩純棉短T (淺米色)',
        fPrice: 790,
        fImage: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=600&auto=format&fit=crop'
    },
    {
        fId: 2,
        fName: '極簡主義 - 挺版牛津襯衫 (天藍色)',
        fPrice: 1480,
        fImage: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=600&auto=format&fit=crop'
    },
    {
        fId: 3,
        fName: '復古街頭 - 寬版連帽上衣 (墨綠色)',
        fPrice: 1980,
        fImage: 'https://images.unsplash.com/photo-1521577352947-9bb58764b69a?q=80&w=600&auto=format&fit=crop'
    },
    {
        fId: 4,
        fName: '經典重磅 - 丹寧牛仔外套 (水洗藍)',
        fPrice: 2880,
        fImage: 'https://images.unsplash.com/photo-1543076447-215ad9ba6923?q=80&w=600&auto=format&fit=crop'
    },
    {
        fId: 5,
        fName: '都會休閒 - 斜紋工裝長褲 (卡其色)',
        fPrice: 1680,
        fImage: 'https://images.unsplash.com/photo-1555689502-c4b22d76c56f?q=80&w=600&auto=format&fit=crop'
    },
    {
        fId: 6,
        fName: '輕量旅行 - 防風連帽夾克 (曜石黑)',
        fPrice: 3200,
        fImage: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=600&auto=format&fit=crop'
    },
    {
        fId: 7,
        fName: '運動時尚 - 吸濕排汗 Polo 衫 (白色)',
        fPrice: 990,
        fImage: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=600&auto=format&fit=crop'
    },
    {
        fId: 8,
        fName: '簡約百搭 - V領羊毛針織衫 (深灰色)',
        fPrice: 2280,
        fImage: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?q=80&w=600&auto=format&fit=crop'
    },
]);
</script>