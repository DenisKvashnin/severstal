<template>
  <div>
    <ApexArea />
  </div>
</template>
<script setup>
import { defineComponent, defineAsyncComponent } from 'vue'

const ApexArea = defineAsyncComponent(() =>
  import('src/components/charts/ChartAreaComponent.vue')
)
const apex = defineComponent(() => ApexArea)
</script>
<style lang="scss" scoped>

</style>
