<template>
  <div id="app">
    <AppHeader></AppHeader>
    <main class="container">
      <router-view />
    </main>
    <AppFooter></AppFooter>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { AppFooter, AppHeader } from './shared';

@Component({
  components: {
    AppFooter,
    AppHeader,
  },
})
export default class App extends Vue {
}
</script>

<style lang="stylus">

</style>
