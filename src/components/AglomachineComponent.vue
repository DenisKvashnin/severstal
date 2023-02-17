<template>
  <div class="row q-ma-md">
    <div class="exhauter-group-wrapper">
      <div class="exhauter-group-header">Агломашина 23</div>
      <div class="exhauter-group">
        <Exhauter v-for="i in props.exhausters" :id="i.id" :key="i.id" />
      </div>
    </div>
  </div>
</template>
<script setup>
import Exhauter from './ExhauterComponent.vue';
import { defineProps } from 'vue';

const props = defineProps({
  exhausters: {
    required: false,
    default: [{ id: '1' }, { id: '2' }]
  }
})
</script>
<style lang="scss" scoped>
.exhauter-group-wrapper {
  height: min-content;

  .exhauter-group-header {
    display: flex;
    font-size: 15px;
    border-radius: 5px 5px 0 0;
    margin-bottom: 10px;
    background-color: $danger;
    padding: 10px 0 10px 16px;
  }

  .exhauter-group {
    display: flex;
    flex-direction: row;

    &>* {
      margin-right: 6px;
    }

    & :last-child {
      margin-right: 0px;
    }

  }


}
</style>
