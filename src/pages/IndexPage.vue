<template>
  <q-page style="font-family: Arial, Helvetica, sans-serif;">
    <div class="second-header">
      <q-space />
      <div class="agenda">
        <q-radio val="ok" size="30px" keep-color v-model="sortings" label="В работе" color="positive" />
        <q-radio val="warning" size="30px" keep-color v-model="sortings" label="Предупреждение" color="primary" />
        <q-radio val="alarm" size="30px" keep-color v-model="sortings" label="Авария" color="accent" />
        <q-radio val="all" size="30px" keep-color v-model="sortings" label="Все" color="grey" />
      </div>
      <q-space />
      <q-btn class="question-btn q-mr-lg" dense rounded size="21px" unelevated icon="help">
        <q-menu :offset="[-44, -4]" auto-close anchor="top left"
          style="white-space: nowrap;overflow-y: hidden; height: 50px">
          <div class="hint-group" style="padding-top: 8px;">
            <div>Температура <q-icon size="24px" name="thermostat" class="agenda-tips"></q-icon></div>
            <div>Вибрация <q-icon style="margin-left:3px" size="24px" name="sensors" class="agenda-tips"></q-icon></div>
            <div>Уровень жидкости <q-icon size="24px" name="opacity" class="agenda-tips"></q-icon></div>
            <div>Давление <q-icon size="24px" name="compress" class="agenda-tips"></q-icon></div>
            <div>Предупреждение <q-icon size="24px" color="primary" name="warning" class="agenda-tips"></q-icon></div>
            <div>Авария <q-icon size="24px" color="accent" name="warning" class="agenda-tips"></q-icon></div>
          </div>
        </q-menu>
      </q-btn>
    </div>
    <div class="row wrap justify-center">
      <Aglomachine v-for="machine in filteredMachines" :exhausters="machine.aspirators" :name="machine.name"
        :key="machine.id" />
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted, computed, watch } from "vue";
import { useOffsetStore } from "src/stores/mainStore"
import Aglomachine from "../components/AglomachineComponent.vue"
import ExhausterService from "../services/ExhausterService"

const offsetStore = useOffsetStore()
const sortings = ref()
const machines = ref([])

const filteredMachines = computed(() => {
  const copy = Object.assign([], machines.value)
  if (sortings.value === 'all') {
    return machines.value
  }
  return copy.sort((v1, v2) => {
    if (v1.status === sortings.value && v2.status !== sortings.value) {
      return -1
    }
    if (v2.status === sortings.value && v1.status !== sortings.value) {
      return 1
    }
    return 0
  })
})

onMounted(async () => {
  machines.value = (await ExhausterService.getMachines(offsetStore.offset)).sinter_machines
})
watch(offsetStore, async () => {
  machines.value = (await ExhausterService.getMachines(offsetStore.offset)).sinter_machines
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

.agenda {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 20px;
}
</style>
