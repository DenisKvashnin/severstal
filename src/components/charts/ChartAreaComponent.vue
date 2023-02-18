<template>
  <div class="chart-group-container">
    <div>
      <apexchart type="line" :height="720" :options="chartOptionsArea" :series="filteredSeries" />
    </div>
    <div class="slider-container">
      <q-range v-model="range" :min="0" :max="899" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue"

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
  }
}

const series = [
  {
    data: generateDayWiseTimeSeries(new Date("11 Feb 2017").getTime(),
      900,
      {
        min: 30,
        max: 90
      })
  },
  {
    data: generateDayWiseTimeSeries(new Date("11 Feb 2017").getTime(),
      900,
      {
        min: 30,
        max: 90
      })
  },
]

const filteredSeries = computed(() => {
  return series.map((v) => {
    const f = v.data.slice(range.value.min, range.value.max)
    return { data: f }
  })
})

const range = ref({ min: 0, max: 899 })




function generateDayWiseTimeSeries(baseval, count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = baseval;
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) +
      yrange.min;

    series.push([x, y]);
    baseval += 2000;
    i++;
  }

  return series;
}
</script>

<style lang="scss" scoped>
.chart-group-container {
  padding: 20px;

  .slider-container {
    padding: 0 12px 20px 40px;
  }
}
</style>
