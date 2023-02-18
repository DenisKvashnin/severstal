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
  <q-drawer show-if-above bordered>
    <q-expansion-item expand-separator label="Подшипники" default-opened>
      <q-expansion-item v-for="bearing in sideMenuData?.bearings" :key="bearing.device_kind.name" expand-separator
        :label="bearing.device_kind.name" :header-inset-level="0.15">
        <q-list style="margin-left: 26px;" v-for="signal in bearing.signal_values" :key="signal.id">
          <q-item clickable v-ripple class="ite">
            <q-item-section>
              <div class="row justify-between full-width">
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
          <q-item clickable v-ripple class="ite">
            <q-item-section>
              <div class="row justify-between full-width">
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
</style>
