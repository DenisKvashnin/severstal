<template>
  <q-page style="font-family: Arial, Helvetica, sans-serif;">
    <div>

    </div>
    <q-btn class="question-btn" dense rounded size="24px" unelevated icon="help">
      <q-menu :offset="[-56, -5]" auto-close anchor="top left" style="white-space: nowrap;;overflow-y: hidden;">
        <div class="hint-group">
          <div>Температура <q-icon size="24px" name="thermostat"></q-icon></div>
          <div>Вибрация <q-icon style="margin-left:3px" size="24px" name="sensors"></q-icon></div>
          <div>Уровень масла <q-icon size="24px" name="opacity"></q-icon></div>
          <div>Давление масла <q-icon size="24px" name="compress"></q-icon></div>
          <div>Предупреждение <q-icon size="24px" color="primary" name="warning"></q-icon></div>
          <div>Авария <q-icon size="24px" color="accent" name="warning"></q-icon></div>
        </div>
      </q-menu>

    </q-btn>
    <div class="row wrap justify-center">
      <Aglomachine />
    </div>
  </q-page>
</template>

<script setup>
import { onMounted, ref, nextTick } from "vue";
import Aglomachine from "../components/AglomachineComponent.vue"

const el1 = ref(null)
onMounted(() => {
  nextTick(() => {
    document
  })

})
</script>

<style lang = "scss" scoped>
.question-btn {
  position: fixed;
  right: 0;
}

.second-header {
  height: 56px;
}

.hint-group {
  display: flex !important;
  align-items: center;

  & :last-child {
    margin-right: 4px;
  }

  &>* {
    align-items: center;
    margin: 4px 24px 4px 8px;
    font-size: 12px;
    display: flex;
  }
}
</style>
