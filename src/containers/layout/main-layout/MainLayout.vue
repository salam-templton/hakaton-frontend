<script lang="ts" setup>

import type { CSSProperties } from 'vue';
import MainMenu from '@/containers/layout/main-layout/MainMenu.vue'

const layoutStyle: CSSProperties = {
  height: '100vh',
}

const headerStyle: CSSProperties = {
  padding: 0,
  lineHeight: '64px',
};

const contentStyle: CSSProperties = {
  minHeight: 120,
  padding: '15px',
  backgroundColor: 'white',
};
</script>

<template>
  <a-layout :style="layoutStyle">
    <a-layout>
      <a-layout-header :style="headerStyle">
        <MainMenu/>
      </a-layout-header>
      <a-layout-content :style="contentStyle">
        <slot name="content"></slot>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

