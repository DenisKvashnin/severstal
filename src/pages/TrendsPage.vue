<template>
  <q-item to="/inbox" exact>
    <q-item-section avatar>
      <q-icon name="inbox" />
    </q-item-section>

    <q-item-section>
      Inbox
    </q-item-section>
  </q-item>
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
