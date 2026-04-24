<script setup>
import { RouterView } from 'vue-router'
import AppNavbar from '../components/AppNavbar.vue'
import AppFooter from '../components/AppFooter.vue'
import HomeView from '@/views/HomeView.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <AppNavbar />

    <main class="flex-grow">
      <HomeView />
    </main>

    <AppFooter />
  </div>
</template>
