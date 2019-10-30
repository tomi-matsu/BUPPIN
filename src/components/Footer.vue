<template lang="pug">
  .footer
    .side-menu-wrap
      .side-menu.left(@click="switchRoute('history')")
        v-icon.icon mdi-format-list-bulleted
        span.label history
      .side-menu.right
        v-icon.icon mdi-settings-outline
        span.label setting
    v-btn.home(large fab dark color="#FACE3B" @click="switchRoute('home')")
      v-icon
</template>

<script lang="ts" scoped>
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Footer extends Vue {
  public switchRoute(pathName: string): void {
    /* tslint:disable:no-empty */
    this.$router.push({ name: pathName }, () => {}, () => {}) // avoid NavigationDuplicated
  }
}
</script>

<style lang="scss">
.footer {
  width: 100vw;
  height: 60px;
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
  width: 45vw;
  text-align: center;
  padding: 1em .5em;
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
  bottom: 60px + 30px;
  left: 50%;
  transform: translateX(-50%);
}
</style>