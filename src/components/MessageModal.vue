<template lang="pug">
  .message-modal
    p.date {{ DateTime }}
    p.text {{ itemName }} を借りました
</template>

<script lang="ts" scoped>
import { Component, Prop, Watch, Vue } from 'vue-property-decorator'

@Component

export default class MessageModal extends Vue {
  @Prop({ default: new Date() })
  public DateTime!: Date
  @Prop({ default: '' })
  public itemName!: string
  @Prop({ default: Number() })
  public status!: number
}
</script>

<style lang="scss">
.message-modal {
  position: fixed;
  bottom: 0;
  margin-bottom: 60px;
  width: 100vw;
  padding: 25px 32px 48px;
  background-color: #EAEAEA;
  border-radius: 40px 40px 0 0;
  text-align: center;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}
.date {
  font-size: .8em;
}
</style>