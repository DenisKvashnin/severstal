<template>
  <div>
    <ApexArea />
  </div>
  <q-drawer show-if-above bordered>
    <q-expansion-item expand-separator label="Подшипники" default-opened>
      <q-expansion-item v-for="bearing in sideMenuData?.bearings" :key="bearing.device_kind.name" expand-separator
        :label="bearing.device_kind.name" :header-inset-level="0.15">
        <q-list style="margin-left: 26px;" v-for="signal in bearing.signal_values" :key="signal.id">
          <q-item clickable v-ripple :class="signal.status">
            <q-item-section>
              {{ signal.signal_kind_code }} {{ signal.value.toFixed(3) }} {{ }}
            </q-item-section>
          </q-item>
        </q-list>
      </q-expansion-item>
    </q-expansion-item>
    <q-expansion-item expand-separator label="Прочие" default-opened>

    </q-expansion-item>
  </q-drawer>
</template>
<script setup>
import { defineAsyncComponent, onMounted, ref } from 'vue'
import AspiratorService from 'src/services/AspiratorService';
import { useRoute } from 'vue-router'

const ApexArea = defineAsyncComponent(() =>
  import('src/components/charts/ChartAreaComponent.vue')
)
const route = useRoute()
const sideMenuData = ref()
async function getSideMenuData() {
  sideMenuData.value = (await AspiratorService.getAspirator(route.params.id)).data.aspirator.sensors_payload
}
onMounted(() => {
  getSideMenuData()
})
</script>
<style lang="scss" scoped>
.warning {
  background-color: $warning;
}

.alarm {
  background-color: $danger;
}

.ok {
  background-color: inherit;
}
</style>
