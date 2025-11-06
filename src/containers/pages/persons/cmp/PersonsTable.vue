<script setup lang="ts">
import { usePersonListStore } from '@/stores/person-list/person-list-store.tsx'
import { computed, toValue } from 'vue'
import type { TPerson } from '@/domain'
import { storeToRefs } from 'pinia'

const { personList } = storeToRefs(usePersonListStore())

const dataSource = computed(() => {
  return toValue(personList).map((item: TPerson) => {
    return {
      fio: [item.firstName, item.secondName, item.lastName].join(' '),
    }
  })
})

const columns = [
  {
    title: 'ФИО',
    dataIndex: 'fio',
  },
]
</script>

<template>
  <a-table :dataSource="dataSource" :columns="columns" />
</template>
