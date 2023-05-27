<template>
  <div ref="chartContainer" style="width: 100%; height: 100%"></div>
</template>

<script setup>
import * as echarts from "echarts";
import "echarts-gl";
import { onMounted, defineProps, ref } from "vue";

const props = defineProps({
  title: String,
  formatter: String,
  data: Array,
});
</script>
