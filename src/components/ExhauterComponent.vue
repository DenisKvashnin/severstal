<template>
  <q-card style="height:min-content">
    <div class="card-header weight-3" :class="headerClass">
      <q-icon size="24px" class="text-accent" name="warning"></q-icon>
      <div class="exhghauster_name" style="padding-left: 10px">
        {{ props.data.name }}
      </div>
      <div class="row">
        <button icon="arrow_forward" @click="router.push({ path: `trends/${props.data.id}` })"
          class="card-link-btn shadow-1">
          <q-icon size="20px" name="query_stats" />
        </button>
        <button icon="arrow_forward" @click="router.push({ path: `exhauster/${props.data.id}` })"
          class="card-link-btn shadow-1 arrow_forward_btn">
          <q-icon size="26px" name="chevron_right" rounded color="black" />
        </button>
      </div>
    </div>
    <div class="card-main">
      <div class="row items-center q-mb-sm">
        <div class="weight-2 q-mr-xs">
          {{ props.data.rotor_name }}
        </div>
        <div style="padding-left: 42.5%">
          <q-chip style="background-color: #F4F4F4;border-radius: 4px;padding:0 4px 0 4px">{{ props.exhghauster.rotor.date }}</q-chip>
        </div>
          <div class="weight-1 q-py-sm">
            Актуальность на:
            <span>{{ formatDate(props.data?.sensors_payload?.bearings[0]?.signal_values[0]?.batch_time)}}</span>
        </div>
      </div>
      <div class="weight-1 q-py-sm"
        style="border-top: 1px solid rgb(220,220,220);border-bottom: 1px solid rgb(220,220,220);">
        <div class="weight-3 q-mb-sm q-mx-md">Последняя замена ротора</div>
        <div class="row rounded-borders" style="background-color: #FAFAFA;">
          <div style="width:30px"></div>
          <q-chip class="date-chip weight-3">
            {{ props.exhghauster.rotor.lastDate }} сут
          </q-chip>
          <div style="opacity:0.7;font-size: 12px;" class="column q-ml-sm items-center justify-center">
            <div>Прогноз</div>
            <div class="weight-3">{{ props.exhghauster.rotor.lastDate }} сут</div>
          </div>
        </div>
      </div>
      <q-space />
      <q-img src="~assets/scheme-rotor.svg" class="rotor-img" />
      <q-expansion-item header-class="card-expansion-item weight-3" dense label="Предупреждение" style="padding-top:10px">
        <q-list style="font-size: 13px !important;">
          <q-item class="row justify-between rounded-borders q-pa-none q-px-sm q-my-xs warning q-ml-sm">
            <q-item-section class="q-my-none">
              {{ }}Ошибка
            </q-item-section>
            <q-item-section class="items-end q-my-none">
              <q-chip class="damage-chip warning-chip" icon="sensors"></q-chip>
            </q-item-section>
          </q-item>
          <q-item class="row justify-between rounded-borders q-pa-none q-px-sm q-my-xs warning q-ml-sm">
            <q-item-section class="q-my-none">
              {{ }}Ошибка
            </q-item-section>
            <q-item-section class="items-end q-my-none">
              <q-chip class="damage-chip warning-chip" icon="sensors"></q-chip>
            </q-item-section>
          </q-item>
        </q-list>
      </q-expansion-item>
      <q-expansion-item header-class="card-expansion-item weight-3" dense label="Все подшипники">
        <q-list v-for="bearing in bearingStatus" :key="bearing.name" style="font-size: 13px !important;">
          <q-item :class="{
            warning: bearing.overall === 'warning', danger: bearing.overall === 'alarm', positive: bearing.overall === 'ok'
          }" class="row justify-between rounded-borders q-pa-none q-px-sm q-mb-xs q-ml-sm">
            <q-item-section class="q-my-none">
              {{ bearing.name }}
            </q-item-section>
            <q-item-section class="items-end q-my-none">
              <div class="row">
                <q-chip v-if="bearing.temperature !== 'ok'" :class="{
                  'warning-chip': bearing.temperature === 'warning', 'danger-chip': bearing.temperature === 'alarm'
                }" class="damage-chip" icon="thermostat"></q-chip>
                <q-chip v-if="bearing.vibration !== 'ok' && !!bearing.vibration" :class="{
                  'warning-chip': bearing.vibration === 'warning', 'danger-chip': bearing.vibration === 'alarm'
                }" class="damage-chip" icon="sensors"></q-chip>
              </div>
            </q-item-section>
          </q-item>
        </q-list>
      </q-expansion-item>
    </div>
  </q-card>
</template>
<script setup>
import { defineProps, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router';
import { date } from 'quasar'

const headerClass = ref('danger')

const bearingStatus = ref([])
const router = useRouter()
const props = defineProps({
  data: Object,
  exhghauster: {
    required: false,
    default: {
      name: 'У-113',
      rotor: {
        date: '17.02.2012',
        number: '12K',
        lastDate: 3,
        estimatedDate: 10
      }
    }
  }
})

onMounted(() => {
  console.log(props.data.sensors_payload.bearings)
  bearingStatus.value = proccessBearings()
})

function proccessOtherSirgnals() {
  // const map = [{}]
  // props.data.sensors_payload.other_senors.forEach((v) => {
  //   if ()
  //     map.name = v.device_kind.name
  // })
}
function formatDate(timeStamp){
  return date.formatDate(timeStamp, 'DD-MM-YYYY HH:mm:ss')
}

function proccessBearings() {
  const bearings = []
  props.data.sensors_payload.bearings.forEach((b, i) => {
    bearings.push({ name: b.device_kind.name, overall: 'ok', temperature: 'ok', vibration: 'ok' })
    b.signal_values.forEach((v) => {
      if (v.signal_kind_code === 'vibration_horizontal' || v.signal_kind_code === 'vibration_vertical' || v.signal_kind_code === 'vibration_axial') {
        if (v.status === 'alarm') {
          bearings[i].vibration = v.status
        } else if (v.status === 'warning' && bearings[i].vibration !== 'alarm') {
          bearings[i].vibration = v.status
        }
      }
      if (v.signal_kind_code === "temperature") {
        bearings[i].temperature = v.status
      }
    })
    if (bearings[i].vibration === 'alarm' || bearings[i].temperature === 'alarm') {
      bearings[i].overall = 'alarm'
    } else if (bearings[i].vibration === 'warning' || bearings[i].temperature === 'warning') {
      bearings[i].overall = 'warning'
    }
  })
  return bearings
}
</script>
<style lang="scss" scoped>
.card-header {
  height: 40px;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 14px 0 14px;
  font-weight: 600;
  background-color: v-bind(headerBgColor);



  & :first-child {
    margin-right: 4px;
  }
}


.card-main {
  padding: 10px 15px 20px 12px;

  .date-chip {
    background-color: #F4F4F4;
    border-radius: 4px;
    margin: 10px 0 10px 0;
    font-size: 12px;
  }

  .card-expansion {
    padding: 0
  }
}

.damage-chip {
  width: min-content;
  height: min-content;
  padding: 5px 3px 5px 11px;
  margin: 0;
  margin-left: 2px;
  border-radius: 6px;
  border: 1px solid;
}

.danger {
  background-color: $danger;
}

.positive {
  background-color: $positive;
  color: white;
}

.warning {
  background-color: $warning;
}

.danger-chip {
  background-color: #FCDBCB;
  border: 1px solid $accent;
  color: $accent;
}

.warning-chip {
  background-color: #FEF1DB;
  border: 1px solid $warning-accent;
  color: $warning-accent !important;
}
</style>

<style lang="scss">
.card-link-btn {
  padding: 0;
  height: 26px;
  width: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FAFAFA;
  border: 1px solid #EAEAEA;
  border-radius: 4px;

  & :hover {
    cursor: pointer;
  }
}

.q-chip__icon {
  color: inherit
}

.q-item {
  min-height: 32px;
}

.card-expansion-item {
  padding: 0 2px 0 2px;
  justify-content: space-between !important;
}

.arrow_forward_btn {
  align-items: flex-start;
  padding: 0px;
}

.exhghauster_name {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 10px;
  width: 214px;
  height: 24px;
}

.rotor-img {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  background: #EFF2F6;
  border: 0.5px solid #CED7E7;
  border-radius: 6px;
  flex: none;
  order: 3;
  flex-grow: 0;
}
</style>
