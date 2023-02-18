<template>
  <div>
    <ApexArea />
  </div>
  <q-drawer show-if-above bordered>
    <q-expansion-item expand-separator label="Подшипники" default-opened>
      <q-expansion-item v-for="bearing in sideMenuData?.bearings" :key="bearing.device_kind.name" expand-separator
        :label="bearing.device_kind.name" :header-inset-level="0.15">
        <q-list style="margin-left: 26px;" v-for="signal in bearing.signal_values" :key="signal.id">
          <q-item @click="checkSignalId(signal.id)" clickable v-ripple class="ite">
            <q-item-section :class="{ 'selected': ids.has(signal.id) }">
              <div class="row justify-between q-px-xs full-width">
                <div>{{ signal.signal_kind_code }}</div>
                <div :class="signal.status">{{ signal.value.toFixed(3) }}</div>
              </div>
            </q-item-section>
          </q-item>
        </q-list>
      </q-expansion-item>
    </q-expansion-item>
    <q-expansion-item expand-separator label="Прочие" default-opened>
      <q-expansion-item v-for="device in sideMenuData?.other_senors" :key="device.device_kind.name" expand-separator
        :label="device.device_kind.name" :header-inset-level="0.15">
        <q-list style="margin-left: 26px;" v-for="signal in device.signal_values" :key="signal.id">
          <q-item @click="checkSignalId(signal.id)" clickable v-ripple class="ite">
            <q-item-section :class="{ 'selected': ids.has(signal.id) }">
              <div class="row justify-between q-px-xs full-width">
                <div>{{ signal.signal_kind_code }}</div>
                <div :class="signal.status">{{ signal.value.toFixed(3) }}</div>
              </div>
            </q-item-section>
          </q-item>
        </q-list>
      </q-expansion-item>
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
const ids = ref(new Set())
function checkSignalId(id) {
  if (ids.value.has(id)) {
    ids.value.delete(id)
  } else {
    ids.value.add(id)
  }
}

onMounted(async () => {
  sideMenuData.value = (await AspiratorService.getAspirator(route.params.id)).data.aspirator.sensors_payload
  console.log(sideMenuData.value)
})
</script>
<style lang="scss" scoped>
.ite {
  margin: 2px 0 2px 0;
}

.warning {
  background-color: $warning;
}

.alarm {
  background-color: $danger;
}

.ok {
  background-color: inherit;
}

.selected {
  border-radius: 4px;
  border: 1px solid $info;
}
</style>
