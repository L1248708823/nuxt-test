<template>
  <div>我是id {{ id }} {{ name }}</div>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import TestModule from '~/store/TestModule'
@Component
export default class extends Vue {
  id = ''
  mounted() {
    // todo
    console.log(TestModule)
    this.id = (this.$route.params?.id as string) || ''
  }

  asyncData() {
    return { name: 'hello world' }
  }

  // validate() {
  //   return false
  // }
}
</script>
