<template>
  <div>
    <ApexArea />
  </div>
</template>
<script setup>
import { defineAsyncComponent } from 'vue'

const ApexArea = defineAsyncComponent(() =>
  import('src/components/charts/ChartAreaComponent.vue')
)
</script>
<style lang="scss" scoped>

</style>
