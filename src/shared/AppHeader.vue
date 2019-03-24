<template>
  <header class="container">
    <nav horizontal>
      <ul>
        <li>home</li>
        <li>vedio</li>
        <li>douban</li>
        <li>vue</li>
        <li>react</li>
        <li>angular</li>
        <li>hello</li>
      </ul>
    </nav>
  </header>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class AppHeader extends Vue {
  name = 'AppHeader'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">

</style>
