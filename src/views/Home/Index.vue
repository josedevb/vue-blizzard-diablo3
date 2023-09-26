<template>
  <div class="home">
    <HomeTitle />
    <MainForm />
  </div>
</template>

<script>
import HomeTitle from './HomeTitle.vue'
import MainForm from './HomeForm.vue'

export default {
  name: 'IndexHome',
  components: {
    HomeTitle,
    MainForm
  }
}
</script>
