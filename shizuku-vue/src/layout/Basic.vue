<script setup>
import { RouterView } from 'vue-router'
// 把你剛剛拿過來的兩個元件 import 進來
import AppNav from '@/components/AppNav.vue'
import AppFooter from '@/components/AppFooter.vue'
import HomeView from '@/views/HomeView.vue';
</script>

<template>
  <div class="app-layout">
    
    <AppNav />

    <main class="main-content">
      <HomeView />
    </main>

    <AppFooter />
    
  </div>
</template>

