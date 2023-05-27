<template>
  <q-page class="flex justify-center q-pt-lg">
    <q-list class="base-list">
      <q-expansion-item
        default-opened
        header-class="bg-white text-h6"
        class="shadow-2"
        expand-separator
        icon="signal_cellular_alt"
        label="Графики"
      >
        <q-card>
          <q-card-section>
            <div style="height: 400px">
              <chart-line-slider-component></chart-line-slider-component>
            </div>
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <q-expansion-item
        header-class="bg-white text-h6"
        class="shadow-2"
        expand-separator
        icon="table_view"
        label="Таблицы"
      >
        <q-card>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
            eius reprehenderit eos corrupti commodi magni quaerat ex numquam,
            dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </q-page>
</template>

<script setup>
import ChartLineSliderComponent from "src/components/charts/ChartLineSliderComponent.vue";
</script>
<style scoped lang="scss">
.base-list {
  width: 100%;
  padding: 20px 10% 0 10%;
}
</style>
