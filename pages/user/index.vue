<template>
  <div>我是主页</div>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import TestModule from '~/store/TestModule'
@Component
export default class extends Vue {
  mounted() {
    // todo
  }

  get wheels() {
    return TestModule.wheels
  }
}
</script>
