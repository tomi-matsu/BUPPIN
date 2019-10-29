<template lang="pug">
  .header
    v-toolbar(color="#EAEAEA" height="60" flat="true")
      v-toolbar-title {{ title }}

</template>

<script lang="ts" scoped>
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
  },
})

export default class Footer extends Vue {
  /*
  computed
  引数: $event: Event は省略可
  何も return しない場合は void
  */
  public get title(): string {
    return this.$route.meta.title
  }
}
</script>

<style lang="scss">
.header {
}
</style>