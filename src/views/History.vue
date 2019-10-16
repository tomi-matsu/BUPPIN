<template lang="pug">
  .container-wrap.history
    p 持ち出し中＆返却済みのリスト
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MessageModal from '@/components/MessageModal.vue'

@Component({
  components: {
  },
})

export default class Home extends Vue {

}
</script>
