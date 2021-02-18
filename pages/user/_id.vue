<template>
  <div>我是id {{ id }}</div>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
@Component
export default class extends Vue {
  id = ''
  mounted() {
    // todo
    this.id = (this.$route.params?.id as string) || ''
  }

  // validate() {
  //   return false
  // }
}
</script>
