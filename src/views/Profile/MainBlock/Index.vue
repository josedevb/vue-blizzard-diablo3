<template>
  <div class="grid-container">
    <div class="grid-item item-left">
      <TopHeroes v-if="hasHeroes" :heroes="topHeroes" />
      <HeroesList v-if="hasHeroes" :heroes="heroesList" />
      <ProgressList :acts="profileData.progression"/>
    </div>
    <div class="grid-item item-right">
      <PlayerStats :stats="statsData"/>
    </div>
  </div>
</template>

<script>
import TopHeroes from './TopHeroes/Index.vue'
import HeroesList from './HeroesList/Index.vue'
import ProgressList from './ProgressList/Index'
import PlayerStats from './PlayerStats/Index'

export default {
  name: 'MainBlock',
  components: { PlayerStats, TopHeroes, HeroesList, ProgressList },
  props: {
    profileData: {
      type: Object,
      required: true
    }
  },
  computed: {
    hasHeroes () {
      return this.profileData.heroes.length > 0
    },
    topHeroes () {
      return this.profileData.heroes.slice(0, 3)
    },
    hasHeroesList () {
      return this.profileData.heroes.length > 3
    },
    heroesList () {
      return this.profileData.heroes.slice(3, this.profileData.heroes.length)
    },
    statsData () {
      const { paragonLevel, kills, timePlayed } = this.profileData
      return { paragonLevel, kills, timePlayed }
    }
  }
}
</script>

<style lang="stylus">
.grid-container
  display grid
  grid-template-columns 1fr

  .grid-item
    &.item-left
      grid-column span 1

    &.item-right
      grid-column span 1

@media (min-width: 992px)
  .grid-container
    display grid
    grid-template-columns repeat(6, 1fr)

    .grid-item
      &.item-left
        grid-column span 4

      &.item-right
        grid-column span 2
</style>
