<template>
  <div class="heroes-list border-top border-secondary mt-5 pt-5">
    <h1>Hero List</h1>
    <b-table
      hover
      striped
      dark
      :items="heroes"
      :fields="fields"
      stacked="sm"
      small
    >
      <template v-slot:cell(name)="data">
        <HeroIco :hero="data.item"/>
      </template>
      <template v-slot:cell(class)="data">
        <HeroClassLevel :hero="{ classSlug: data.item.class, level: data.item.level}"/>
      </template>
      <template v-slot:cell(kills)="data">
        <span>{{ data.item.kills.elites | formatNumber }}</span>
      </template>
    </b-table>
  </div>
</template>

<script>
import HeroIco from './HeroIco.vue'
import HeroClassLevel from './HeroClassLevel.vue'
import { formatNumber } from '@/filters/numeral'

export default {
  name: 'HeroesList',
  components: { HeroIco, HeroClassLevel },
  filters: { formatNumber },
  data () {
    return {
      fields: [
        {
          key: 'name',
          label: 'Name'
        },
        {
          key: 'class',
          label: 'Class',
          sortable: true
        },
        {
          key: 'kills',
          label: 'Elite Kills',
          sortable: true
        }
      ]
    }
  },
  props: {
    heroes: {
      required: true,
      type: Array
    }
  }
}
</script>
