<script lang="ts" setup>
import { h, ref } from 'vue'
import { SettingOutlined, AlertOutlined } from '@ant-design/icons-vue'
import { type MenuProps } from 'ant-design-vue'
import { useRouter } from 'vue-router'
import { pathRoutes } from '@/router'

const router = useRouter();
const current = ref<string[]>([router.currentRoute.value.path || pathRoutes.main])

const items = ref<MenuProps['items']>([
  {
    key: pathRoutes.main,
    icon: () => h(AlertOutlined),
    label: 'Главная',
    onClick: () => router.push({ path: '/' }),
  },
  {
    key: pathRoutes.settings,
    icon: () => h(SettingOutlined),
    label: 'Settings',
    onClick: () => router.push({ path: '/settings' }),
  },
  {
    key: 'sub1',
    label: 'Submenu',
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
    ],
  },
])
</script>

<template>
  <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items" />
</template>
