<script setup lang="ts">
import MainLayout from '@/containers/layout/main-layout/MainLayout.vue'
import { usePersonListStore } from '@/stores/person-list/person-list-store.tsx'
import { storeToRefs } from 'pinia'
import { LoadingOutlined } from '@ant-design/icons-vue'
import PersonsTable from '@/containers/pages/persons/cmp/PersonsTable.vue'

const store = usePersonListStore()

const { loading } = storeToRefs(store)
const { loadPersons } = store
</script>

<template>
  <MainLayout>
    <template #content>
      <h1>Список пользователей</h1>

      <a-button @click="loadPersons">Загрузить список пользователей</a-button>

      <template v-if="loading">
        <a-flex vertical style="height: 100%; padding-top: 200px">
          <LoadingOutlined style="font-size: 150px" />
        </a-flex>
      </template>

      <template v-else>
        <PersonsTable/>
      </template>
    </template>
  </MainLayout>
</template>
