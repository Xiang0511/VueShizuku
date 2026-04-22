<script setup>
import { ref } from 'vue'
import ProductCard from '@/components/ProductCard.vue' 

const products = ref([
  { id: 1, name: '質感棉麻寬褲', price: 980, imageUrl: 'https://placehold.co/400x400/FFDDCC/FFFFFF.png?text=Crop+Pants' },
  { id: 2, name: '基本款落肩 T 恤', price: 490, imageUrl: 'https://placehold.co/400x400/CCDDFF/FFFFFF.png?text=Basic+T-shirt' },
  { id: 3, name: '日系長版襯衫', price: 1280, imageUrl: 'https://placehold.co/400x400/DDFFCC/FFFFFF.png?text=Shirt' },
  { id: 4, name: '重磅大學 T (四色)', price: 790, imageUrl: 'https://placehold.co/400x400/FFCCDD/FFFFFF.png?text=Sweatshirt' },
  { id: 5, name: '工裝多口袋休閒褲', price: 1080, imageUrl: 'https://placehold.co/400x400/FFFFCC/FFFFFF.png?text=Cargo+Pants' },
  { id: 6, name: '仙女風雪紡洋裝', price: 1880, imageUrl: 'https://placehold.co/400x400/CCFFFF/FFFFFF.png?text=Dress' },
  { id: 7, name: '修身牛仔外套', price: 1680, imageUrl: 'https://placehold.co/400x400/EEDDFF/FFFFFF.png?text=Denim+Jacket' },
  { id: 8, name: '運動速乾運動褲', price: 690, imageUrl: 'https://placehold.co/400x400/FFEEDD/FFFFFF.png?text=Sport+Pants' },
])
</script>

<template>
  <div class="home-container">
    <section class="announcement-banner">
      <div class="banner-content">
        <h3>🎉 夏日煥新，全場 8 折！</h3>
        <p>最新居家系列已上架，消費滿 $1500 免運費。</p>
        <button class="banner-btn">立即搶購</button>
      </div>
    </section>

    <section class="product-section">
      <h3 class="section-title">本週熱銷新品</h3>
      <div class="product-grid">
        <ProductCard 
          v-for="prod in products" 
          :key="prod.id" 
          :product="prod" 
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-container {
  padding: 0;
}

.announcement-banner {
  background: linear-gradient(135deg, #FFEBDD 0%, #FFCCEE 100%);
  padding: 40px;
  border-radius: 12px;
  margin-bottom: 30px;
  border: 1px solid rgba(0,0,0,0.05);
}

.banner-content {
  text-align: center;
}

.banner-content h3 {
  margin: 0 0 10px 0;
  color: #333;
  font-size: 24px;
}

.banner-content p {
  margin: 0 0 20px 0;
  color: #666;
}

.banner-btn {
  background-color: #333;
  color: white;
  border: none;
  padding: 10px 24px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
}

.product-section {
  padding: 0 10px 20px 10px;
}

.section-title {
  font-size: 20px;
  margin-bottom: 20px;
  color: #333;
  padding-left: 10px;
  border-left: 4px solid #ee4d2d;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px; 
}


/* --- 手機版 RWD 魔法 --- */
@media (max-width: 768px) {
  .product-grid {
    /* 手機版強制變成 2 個直行 (1fr 1fr) */
    grid-template-columns: 1fr 1fr; 
    gap: 10px; /* 卡片間距縮小一點 */
  }

  .announcement-banner {
    padding: 20px; /* Banner 在手機上不要那麼肥 */
  }
  
  .banner-content h3 {
    font-size: 18px; /* 字體縮小 */
  }
}
</style>