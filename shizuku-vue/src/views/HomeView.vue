<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import AppNav from '../components/AppNav.vue'
import AppFooter from '@/components/AppFooter.vue';
</script>

<template>
  <nav><AppNav/></nav>
  <main>
    <TheWelcome />
  </main>
<footer><AppFooter/></footer>
</template>
