<template lang="pug">
  .container-wrap
    .icon
      IconBase.icon-nfc
        IconNfc
    transition(name='toast')
      MessageModal(v-if="displayModal" :item-name="itemName" :date-time="dateTime")
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
  // public itemId: number = Number()
  public itemName: string = ''
  public itemStatus: number = Number()
  public dateTime: Date = new Date()

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
      this.getNfcData(window.nfc.bytesToString(data.tag.ndefMessage[0].payload), data.srcElement.lastModified)
      this.showModal()
    }, (err: string): void => {
      console.log('error attaching ndef listener', err)
    })
  }
  public getNfcData(data: string, dateTime: Date): void {
    const splitNfcData: string[] = data.split('_')
    // this.itemId = Number(splitNfcData[0].slice(3))
    this.itemName = splitNfcData[1]
    this.itemStatus = Number(splitNfcData[2])
    this.dateTime = dateTime
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
  // height: 50vh;
  // position: relative;
  .icon-nfc {
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
