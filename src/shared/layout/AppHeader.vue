<template>
  <header class="container">
    <nav horizontal>
      <ul>
        <li
          v-for="(route, index) in $router.options.routes"
          :key="index">
          <router-link :to="route.path">
            {{ route.name }}
          </router-link>
        </li>
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
  nav[horizontal]
    ul
      li
        padding 0
        a
          padding .3em
          color white
          text-decoration none
          display inline-block
          &.router-link-exact-active
            background yellowgreen
            transition background .5s
</style>
