<script lang="ts" setup>

import type { CSSProperties } from 'vue';
import MainMenu from '@/containers/layout/main-layout/MainMenu.vue'

const layoutStyle: CSSProperties = {
  height: '100vh',
}

const headerHeight: number = 64;

const headerStyle: CSSProperties = {
  padding: 0,
  lineHeight: headerHeight + 'px',
  position: 'fixed',
  zIndex: 1,
  width: '100%',
};

const contentStyle: CSSProperties = {
  height: 'calc(100vh - ' + headerHeight + 'px)',
  marginTop: '64px',
  padding: '15px',
  backgroundColor: '#f5f5f5',
};

const contentInnerStyle: CSSProperties = {
  backgroundColor: 'white',
  height: 'calc(100vh - ' + headerHeight + 'px - 30px)',
  padding: '10px',
  borderRadius: '10px',
}

</script>

<template>
  <a-layout :style="layoutStyle">
    <a-layout>
      <a-layout-header :style="headerStyle">
        <MainMenu/>
      </a-layout-header>
      <a-layout-content :style="contentStyle">
        <div :style="contentInnerStyle">
          <slot name="content"></slot>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

