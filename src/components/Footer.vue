<template lang="pug">
  .footer
    .side-menu-wrap
      .side-menu.left
        v-icon.icon mdi-format-list-bulleted
        span.label list
      .side-menu.right
        v-icon.icon mdi-settings-outline
        span.label setting
    .home
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
  // box-shadow: 0 -1px 10px 1px #cccccc;
}
.side-menu-wrap {
  display: flex;
  justify-content: space-between;
  height: 100%;
}
.side-menu {
  width: 33vw;
  text-align: center;
  display: grid;
  padding: .5em;
  .label {
    font-size: .8em;
  }
}
.home {
  width: 33vw;
  height: 33vw;
  background-color: #FACE3B;
  position: fixed;
  bottom: calc(-33vw / 2);
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
}
</style>