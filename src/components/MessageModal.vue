<template lang="pug">
  .message-modal
    p.date 2019/10/10 12:00
    p.text 鍵No.1を借りました
</template>

<script lang="ts" scoped>
import { Component, Vue } from 'vue-property-decorator'

export default class MessageModal extends Vue {
}
</script>

<style lang="scss">
.message-modal {
  position: fixed;
  bottom: 0;
  margin-bottom: 60px;
  width: 100vw;
  padding: 16px 32px 32px;
  background-color: #EAEAEA;
  border-radius: 40px 40px 0 0;
  text-align: center;
}
.date {
  font-size: .8em;
}
</style>