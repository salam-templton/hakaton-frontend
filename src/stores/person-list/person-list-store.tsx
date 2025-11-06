import { defineStore } from 'pinia'
import type { TPerson } from '@/domain'
import { faker } from '@faker-js/faker/locale/ru'

type TPersonListStoreState = {
  personList: TPerson[],
  loading: boolean,
}

export const usePersonListStore = defineStore('person-list', {
  state: (): TPersonListStoreState => ({
    loading: false,
    personList: [],
  }),

  getters: {
    personsCount: (state) => state.personList.length,
  },

  actions: {
    loadPersons() {
      this.loading = true;

      setTimeout(() => {
        this.loading = false;

        this.personList = Array.from(Array(30).keys()).map(() => ({
          firstName: faker.person.firstName(),
          secondName: faker.person.middleName(),
          lastName: faker.person.lastName(),
        }))

      }, 2000)
    },
  },
})
