<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AppNav from '@/components/AppNav.vue';
import HomeView from '@/views/HomeView.vue';
import AppFooter from '@/components/AppFooter.vue';
</script>

<template>
 <div>
  <AppNav/>
 </div>
 
<main>
  <HomeView />
  </main>

  <div>
  <AppFooter/>
  </div>
</template>
