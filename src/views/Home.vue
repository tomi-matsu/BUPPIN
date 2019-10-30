<template lang="pug">
  .container-wrap
    //- v-btn(@click="onChangeModal") modal
    .icon
      IconBase.icon-nfc
        IconNfc
    transition(name='toast')
      MessageModal(v-if="displayModal" itemName="itemName")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import window from '@/window'
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
  public displayModal: boolean = false
  public itemId: number = Number()
  public itemName: string = ''
  public itemStatus: number = Number()

  /* mounted */
  public mounted() {
    this.senseNfc()
  }

  /* updated */
  public updated() {
    this.senseNfc()
  }

  /* methods */
  public onChangeModal($event: Event): void {
    this.displayModal = !this.displayModal
  }
  // TODO: return(void)??
  public senseNfc(): void {
    // TODO: Error -> data: object
    return window.nfc.addNdefListener((data: any): void => {
      console.log('successfully attached ndef listener')
      this.getNfcData(window.nfc.bytesToString(data.tag.ndefMessage[0].payload))
    }, (err: string): void => {
      console.log('error attaching ndef listener', err)
    })
  }
  public getNfcData(data: string): void {
    const splitNfcData: string[] = data.split('_')
    this.itemId = Number(splitNfcData[0].slice(2))
    this.itemName = splitNfcData[1]
    this.itemStatus = Number(splitNfcData[2])
    console.log(0)
    this.showModal()
  }
  public showModal(): void {
    this.displayModal = true
    setTimeout(() => {
      this.displayModal = false
    }, 4000)
  }
}
</script>

<style lang="scss">
.icon {
  height: 100%;
  line-height: 100%;
  .icon-nfc {
    vertical-align: middle;
  }
}
</style>
