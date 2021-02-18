<template>
  <div>
    我才是User 测试嵌套路由
    <nuxt-child></nuxt-child>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
@Component
export default class extends Vue {
  mounted() {
    // todo
  }
}
</script>
