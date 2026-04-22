<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="product-card">
    <div class="image-container">
      <img :src="product.imageUrl" :alt="product.name" class="product-image">
    </div>
    <div class="product-info">
      <h4 class="product-name">{{ product.name }}</h4>
      <p class="product-price">
        <span class="currency">NT$</span>
        <span class="price">{{ product.price.toLocaleString() }}</span>
      </p>
      <button class="add-to-cart">加入購物車</button>
    </div>
  </div>
</template>

<style scoped>
.product-card {
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden; 
  background-color: white;
  transition: transform 0.2s ease, box-shadow 0.2s ease; 
  cursor: pointer;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.image-container {
  width: 100%;
  aspect-ratio: 1 / 1; 
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover; 
}

.product-info {
  padding: 15px;
}

.product-name {
  margin: 0 0 10px 0;
  font-size: 16px;
  color: #333;
  font-weight: normal;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.product-price {
  margin: 0;
  color: #ee4d2d; 
  font-size: 18px;
  font-weight: bold;
}

.currency {
  font-size: 14px;
  margin-right: 2px;
}

.add-to-cart {
  width: 100%;
  margin-top: 10px;
  padding: 8px 0;
  border: 1px solid #ee4d2d;
  background-color: white;
  color: #ee4d2d;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
}

.add-to-cart:hover {
  background-color: #ee4d2d;
  color: white;
}
</style>