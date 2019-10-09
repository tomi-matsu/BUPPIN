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
export default {
  name: 'Footer',
  mounted() {
    console.log('footer')
  },
}
</script>
<style lang="scss">
.footer {
  width: 100vw;
  height: 48px;
  position: fixed;
  bottom: 0;
  background-color: #EAEAEA;
}
.side-menu-wrap {
  display: flex;
  justify-content: space-between;
}
.side-menu {
  width: 33vw;
  text-align: center;
  display: grid;
  padding: .2em .5em;
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