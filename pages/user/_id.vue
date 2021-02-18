<template>
  <div>我是id {{ id }} {{ name }} {{ wheels }}</div>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import TestModule from '~/store/TestModule'
@Component
export default class extends Vue {
  id = ''
  mounted() {
    // todo
    console.log(TestModule.wheels, 'mounted')
    this.id = (this.$route.params?.id as string) || ''
  }

  asyncData() {
    return { name: 'hello world' }
  }

  fetch() {
    TestModule.incrWheels(20)
  }

  get wheels() {
    return TestModule.wheels
  }
  // validate() {
  //   return false
  // }
}
</script>
