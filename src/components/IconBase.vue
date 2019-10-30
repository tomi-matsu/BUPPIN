<template lang="pug">
  svg(xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 150 150"
    :aria-labelledby="iconName"
    role="presentation")
    title(:id="iconName" lang="en") {{iconName}} icon
    g
      slot
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  components: {
  },
})

export default class IconBase extends Vue {
  @Prop({ default: 'nfc' })
  public iconName!: string
  @Prop({ default: 250 })
  public width!: number
  @Prop({ default: 250 })
  public height!: number
}
</script>

<style scoped>
svg {
  display: inline-block;
}
</style>