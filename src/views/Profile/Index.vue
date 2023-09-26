<template>
  <div>
    <BaseLoading v-if="isLoading" />
    <template v-if="profileData !== null">
      <MainBlock :profile-data="profileData"/>
      <ArtisansBlock :artisans-data="artisansData" />
    </template>
  </div>
</template>

<script>
import setError from '@/mixins/setError'
import { getApiAccount } from '@/api/search'

import BaseLoading from '@/components/BaseLoading.vue'
import MainBlock from './MainBlock/Index'
import ArtisansBlock from './ArtisansBlock/Index'

export default {
  name: 'ProfileView',
  components: { BaseLoading, MainBlock, ArtisansBlock },
  mixins: [setError],
  data () {
    return {
      isLoading: false,
      profileData: null
    }
  },
  created () {
    this.isLoading = true
    const { region, battleTag: account } = this.$route.params

    this.fetchData(region, account)
  },
  computed: {
    artisansData () {
      return {
        blacksmith: this.profileData.blacksmith,
        blacksmithHardcore: this.profileData.blacksmithHardcore,
        jeweler: this.profileData.jeweler,
        jewelerHardcore: this.profileData.jewelerHardcore,
        mystic: this.profileData.mystic,
        mysticHardcore: this.profileData.mysticHardcore
      }
    }
  },
  methods: {
    /**
       * Obtener los datos de la API
       * Guardarlos en 'profileData'
       * @param region {String}
       * @param account {String}
       */
    async fetchData (region, account) {
      try {
        const { data } = await getApiAccount({ region, account })
        this.profileData = data
      } catch (err) {
        this.profileData = null
        const errObj = {
          routeParams: this.$route.params,
          message: err.message
        }

        if (err.response) {
          errObj.data = err.response.data
          errObj.status = err.response.status
        }
        this.$router.push({ name: 'Error' })
        this.setApiErr(errObj)
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script>
