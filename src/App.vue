<script setup>
import { onMounted } from 'vue';
import { NConfigProvider, NMessageProvider } from 'naive-ui';
import { isDark } from './hooks/useDark';
import { darkTheme } from 'naive-ui';
</script>


<template>
  <NConfigProvider :theme="isDark ? darkTheme : null">
    <NMessageProvider>
      <router-view />
    </NMessageProvider>
  </NConfigProvider>
</template>

<style scoped>

</style>