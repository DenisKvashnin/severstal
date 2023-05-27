<template>
  <div ref="container" style="width: 100%; height: 100%">
    <div
      ref="chartContainer"
      style="width: 100%; height: calc(100% - 30px)"
    ></div>
    <div class="q-my-sm">
      <q-range
        drag-only-range
        label
        @update:model-value="setChartData"
        color="primary"
        :min="0"
        :max="1000"
        v-model="range"
      ></q-range>
    </div>
  </div>
</template>

<script setup>
import * as echarts from "echarts";
import { onBeforeUnmount, onMounted, defineProps, ref, watch } from "vue";

const props = defineProps({
  title: String,
  formatter: String,
});

const chartContainer = ref();
const container = ref();
let chart;
const range = ref({ min: 0, max: 100 });
function populateData() {
  const arr = [];
  for (let i = 0; i < 1000; i++) {
    arr.push([i, Math.ceil(Math.random() * 100)]);
  }
  return arr;
}
const defaultData = populateData();
const option = {
  xAxis: {
    type: "value",
    min: 0,
    max: 100,
    splitLine: {
      show: false,
    },
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [],
      type: "line",
    },
  ],
};
onMounted(() => {
  chart = echarts.init(chartContainer.value);
  setChartData();
  window.onresize = function () {
    plot.resize();
  };
});
function setChartData() {
  option.series[0].data = defaultData.slice(
    (defaultData.length * range.value.min) / 1000,
    (defaultData.length * range.value.max) / 1000
  );
  option.xAxis.min = option.series[0].data[0][0];
  option.xAxis.max = option.series[0].data[option.series[0].data.length - 1][0];
  chart.setOption(option);
}
onBeforeUnmount(() => {
  window.onresize = undefined;
});
</script>
