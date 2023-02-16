<template>
  <q-page>
    <q-card class="hint-group">
      <div>Температура <q-icon size="30px" name="thermostat"></q-icon></div>
      <div>Вибрация <q-icon style="margin-left:3px" size="30px" name="sensors"></q-icon></div>
      <div>Уровень масла <q-icon size="30px" name="opacity"></q-icon></div>
      <div>Давление масла <q-icon size="30px" name="compress"></q-icon></div>
      <div>Предупреждение <q-icon size="30px" color="primary" name="warning"></q-icon></div>
      <div>Авария <q-icon size="30px" color="accent" name="warning"></q-icon></div>
    </q-card>
    <div class="row wrap justify-center">
      <div class="row q-ma-md">
        <div class="exhauter-group-wrapper">
          <div class="exhauter-group-header">Агломашина 23</div>
          <div class="exhauter-group">
            <Exhauter id="1" />
            <Exhauter id="4" />
            <Exhauter id="2" />
          </div>
        </div>
      </div>
      <div class="row q-ma-md">
        <div class="exhauter-group-wrapper">
          <div class="exhauter-group-header">Агломашина 23</div>
          <div class="exhauter-group">
            <Exhauter id="1" />
            <Exhauter id="2" />
          </div>
        </div>
      </div>
      <div class="row q-ma-md">
        <div class="exhauter-group-wrapper">
          <div class="exhauter-group-header">Агломашина 23</div>
          <div class="exhauter-group">
            <Exhauter id="1" />
            <Exhauter id="2" />
          </div>
        </div>
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
  height: min-content;

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
      margin-right: 0px;
    }

  }


}

.hint-group {
  display: flex !important;
  height: 40px;
  align-items: center;
  margin: 16px;

  &>* {
    align-items: center;
    margin: 0 24px 0 8px;
    font-size: 16px;
    display: flex;
  }
}
</style>
