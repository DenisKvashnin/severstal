<template>
  <div class="chart-group-container">
    <div>
      <apexchart type="line" :height="720" :options="chartOptionsArea" :series="filteredSeries" />
    </div>
    <div class="slider-container">
      <q-range v-model="range" :step="0.001" :min="0" :max="1" />
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, computed } from "vue"

const chartOptionsArea = {
  chart: {
    id: "chartArea",
    toolbar: {
      autoSelected: "pan",
      show: false
    }
  },
  colors: ["#546E7A", "#FFAAAA"],
  stroke: {
    width: 3
  },
  dataLabels: {
    enabled: false
  },
  fill: {
    opacity: 1
  },
  markers: {
    size: 0
  },
  xaxis: {
    type: "datetime"
  },
  yaxis: {
    decimalsInFloat: 2
  }
}

const props = defineProps({
  charts: Object
})
const filteredSeries = computed(() => {
  if (props?.charts?.charts) {
    const series = []
    props.charts.charts.forEach((v) => {
      series.push({ data: v[Object.keys(v)[0]] })
    })
    series.forEach((s, i) => {
      series[i].data = s.data.slice(s.data.length * range.value.min, s.data.length * range.value.max)
    })
    return series
  }

  return [{ data: [] }]
})

const range = ref({ min: 0, max: 1 })


</script>

<style lang="scss" scoped>
.chart-group-container {
  padding: 20px;

  .slider-container {
    padding: 0 12px 20px 40px;
  }
}
</style>
