<template>
  <q-page class="flex flex-center">
    <div class="exhauter-group-wrapper">
      <div class="exhauter-group-header">Агломашина 23</div>
      <div class="exhauter-group">
        <Exhauter />
        <Exhauter />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import Exhauter from "../components/ExhauterComponent.vue"
</script>

<style lang = "scss" scoped>
.exhauter-group-wrapper {
  border-radius: 12px;
  border: 3px solid $primary;
  padding: 0 8px 8px 8px;

  .exhauter-group-header {
    display: flex;
    justify-content: center;
    font-size: 24px;

  }

  .exhauter-group {
    display: flex;
    flex-direction: row;


    &>* {
      margin-right: 6px;
    }

    & :last-child {
      margin-right: 0px !important;
    }

  }

}
</style>
