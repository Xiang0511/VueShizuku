<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
/* 這裡放「全域」的 CSS，也就是影響整個網站的設定 (記得不要加 scoped) */
body, html {
  margin: 0;
  padding: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, 'PingFang TC', 'Hiragino Sans GB', 'Microsoft JhengHei', sans-serif;
  background-color: #fafafa;
  color: #333;
  overflow: visible !important;
}

/* 絕對關鍵：把 Vue 隱形外觀 #app 洗掉，保證 sticky 復活 */
#app {
  max-width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
  overflow: visible !important; 
  display: block !important;
}
</style>