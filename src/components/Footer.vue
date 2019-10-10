<template lang="pug">
  .footer
    .side-menu-wrap
      .side-menu.left
        v-icon.icon mdi-format-list-bulleted
        span.label list
      .side-menu.right
        v-icon.icon mdi-settings-outline
        span.label setting
    v-btn.home(fab dark color="#FACE3B")
      v-icon mdi-history
</template>

<script lang="ts" scoped>
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
  },
})

export default class Footer extends Vue {
}
</script>

<style lang="scss">
.footer {
  width: 100vw;
  height: 56px;
  position: fixed;
  bottom: 0;
  background-color: #EAEAEA;
}
.side-menu-wrap {
  display: flex;
  justify-content: space-between;
  height: 100%;
}
.side-menu {
  width: 33vw;
  text-align: center;
  padding: .5em;
  .icon {
    margin-right: 8px;
    font-size: 1em;
  }
  .label {
    font-size: .8em;
  }
}
.home {
  z-index: 10;
  bottom: 56px + 28px;
  left: 50%;
  transform: translateX(-50%);
}
</style>