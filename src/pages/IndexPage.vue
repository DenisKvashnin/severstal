<template>
  <q-page style="font-family: Arial, Helvetica, sans-serif;">
    <div class="second-header">
      <q-space />
      <q-checkbox size="30px" keep-color v-model="sortings.green" label="В работе" color="positive" />
      <q-checkbox size="30px" keep-color v-model="sortings.orange" label="Предупреждение" color="primary" />
      <q-checkbox size="30px" keep-color v-model="sortings.red" label="Опасность" color="accent" />
      <q-space />
      <q-btn class="question-btn q-mr-xl" dense rounded size="18px" unelevated icon="help">
        <q-menu :offset="[-44, -4]" auto-close anchor="top left" style="white-space: nowrap;;overflow-y: hidden;">
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
    </div>
    <div class="row wrap justify-center">
      <Aglomachine />
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import Aglomachine from "../components/AglomachineComponent.vue"
const sortings = ref({
  red: false,
  yellow: false,
  green: false
})
</script>

<style lang = "scss" scoped>
.question-btn {
  position: fixed;
  right: 0;
  color: #6E6E6D;
}

.second-header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  background-color: white;
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
