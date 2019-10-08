<template lang="pug">
  v-bottom-navigation.footer(fixed)
    v-btn(value="recent")
      span Recent
      v-icon mdi-history
    v-btn(value="favorites")
      span Favorites
      v-icon mdi-heart
    v-btn(value="nearby")
      span Nearby
      v-icon mdi-map-marker
</template>

<script lang="ts" scoped>
export default {
  name: 'Footer',
  mounted() {
    console.log('footer')
  },
}
</script>
<style lang="sass">
.footer
  justify-content: space-between
</style>