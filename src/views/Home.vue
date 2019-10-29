<template lang="pug">
  .container-wrap
    v-btn(@click="onChangeModal") modal
    IconBase
      IconNfc
    transition(name='toast')
      MessageModal(v-if="displayModal")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MessageModal from '@/components/MessageModal.vue'
import IconBase from '@/components/IconBase.vue'
import IconNfc from '@/components/icons/IconNfc.vue'

@Component({
  components: {
    MessageModal,
    IconBase,
    IconNfc,
  },
})

export default class Home extends Vue {
  /* data */
  private displayModal: boolean = false
  /*
  methods
  引数: $event: Event は省略可
  何も return しない場合は void
  */
  private onChangeModal($event: Event): void {
    this.displayModal = !this.displayModal
  }
}
</script>
