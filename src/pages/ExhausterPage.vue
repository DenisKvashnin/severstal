<template>
  <div style="position: relative;">

    <div style="left:49.6%;top:16%;width:10.19%" class="exgauster-scheme-text">
      <q-linear-progress dark size="10px" :value="[oilLevel?.value / 100]" :color="[oilLevel?.status]" class="grey"/>
    </div>

    <div style="left:74.7%;top:30.3%;width: 11.8%" class="liquid-measure exgauster-scheme-text">
      <q-linear-progress dark size="10px" :value="[oilPressure?.value / 6.0]" :color="[oilPressure?.status]"/>
    </div>


    <div style="left:71.65%;top:3.87%;" class="exgauster-scheme-text" :class="[waterAfterCoolerTemp?.status]">
      {{waterAfterCoolerTemp?.value?.toFixed(2)}} °C
    </div>
    <div style="left:67.1%;top:3.87%;" class="exgauster-scheme-text" :class="[waterBeforeCoolerTemp?.status]">
      {{waterBeforeCoolerTemp?.value?.toFixed(2)}} °C
    </div>
    <div style="left:62.65%;top:15.87%;" class="exgauster-scheme-text" :class="[coolerBeforeTemp?.status]">
      {{coolerBeforeTemp?.value?.toFixed(2)}} °C
    </div>
    <div style="left:69.4%;top:25.7%;" class="exgauster-scheme-text" :class="coolerAfterTemp?.status">
      {{coolerAfterTemp?.value?.toFixed(2)}} °C
    </div>


    <div style="left:72.15%;top:43.6%;" class="exgauster-scheme-text" :class="[rotorCurrent?.status]">
      {{rotorCurrent?.value?.toFixed(2)}}
    </div>
    <div style="left:72.15%;top:46.6%;" class="exgauster-scheme-text" :class="[statorCurrent?.status]">
      {{statorCurrent?.value?.toFixed(2)}}
    </div>
    <div style="left:72.15%;top:49.6%;" class="exgauster-scheme-text" :class="[rotorVoltage?.status]">
      {{rotorVoltage?.value?.toFixed(2)}}
    </div>
    <div style="left:72.15%;top:52.6%;" class="exgauster-scheme-text" :class="[statorVoltage?.status]">
      {{statorVoltage?.value?.toFixed(2)}}
    </div>


    <div style="left:25%;top:24.3%;" class="exgauster-scheme-text">
      {{}}45 °C
    </div>
    <div style="left:23.9%;top:28.3%;" class="exgauster-scheme-text">
      Разряжение, мм.в.ст &nbsp; {{}}74.3
    </div>
    <div style="left:23.9%;top:31.2%;" class="exgauster-scheme-text">
      Уровень пыли, мг/м3 <span style="margin-left: 2px;">{{}}15</span>
    </div>


    <div style="left:15%;top:53.8%;width:5.3%" class="row justify-center exgauster-scheme-text">
      9 ПС
    </div>
    <div style="left:15%;top:57.2%;width: 5.3%;" class="highlighted-val exgauster-scheme-text" :class="[bearing9Temp?.status]">
      <div>T, °C</div>
      <div>{{ bearing9Temp?.value?.toFixed(2) }}</div>
    </div>


    <div style="left:15%;top:66.3%;width:5.3%" class="row justify-center exgauster-scheme-text">
      8 ПС
    </div>
    <div style="left:15%;top:69.6%;width: 5.3%;" class="highlighted-val exgauster-scheme-text" :class="[bearing8Temp?.status]">
      <div>T, °C</div>
      <div>{{bearing8Temp?.value?.toFixed(2)}}</div>
    </div>
    <div style="left:15%;top:72.6%;width: 5.3%;" class="highlighted-val exgauster-scheme-text" :class="[bearing8VerVibr?.status]">
      <div>B, мм/с</div>
      <div>{{bearing8VerVibr?.value?.toFixed(2)}}</div>
    </div>
    <div style="left:15%;top:75.6%;width: 5.3%;" class="highlighted-val exgauster-scheme-text" :class="[bearing8HorVibr?.status]">
      <div>Г, мм/с</div>
      <div>{{bearing8HorVibr?.value?.toFixed(2)}}</div>
    </div>
    <div style="left:15%;top:78.6%;width: 5.3%;" class="highlighted-val exgauster-scheme-text" :class="[bearing8AxiaVibr?.status]">
      <div>O, мм/с</div>
      <div>{{bearing8AxiaVibr?.value?.toFixed(2)}}</div>
    </div>


    <div style="left:39.4%;top:31.18%;width:5.3%" class="row justify-center exgauster-scheme-text">
      4 ПС
    </div>
    <div style="left:39.4%;top:34.8%;width: 5.3%;" class="highlighted-val exgauster-scheme-text" :class="[bearing4Temp?.status]">
      <div>T, °C</div>
      <div>{{bearing4Temp?.value?.toFixed(2)}}</div>
    </div>


    <div style="left:39.4%;top:68.0%;width:5.3%" class="row justify-center exgauster-scheme-text">
      6 ПС
    </div>
    <div style="left:39.5%;top:71.6%;width: 5.3%;" class="highlighted-val exgauster-scheme-text" :class="[bearing6Temp?.status]">
      <div>B, мм/с</div>
      <div>{{bearing6Temp?.value?.toFixed(2)}}</div>
    </div>


    <div style="left:39.4%;top:78.2%;width:5.3%" class="row justify-center exgauster-scheme-text">
      7 ПС
    </div>
    <div style="left:39.5%;top:81.7%;width: 5.3%;" class="highlighted-val exgauster-scheme-text" :class="[bearing7Temp?.status]">
      <div>T, °C</div>
      <div>{{bearing7Temp?.value?.toFixed(2)}}</div>
    </div>
    <div style="left:39.5%;top:84.7%;width: 5.3%;" class="highlighted-val exgauster-scheme-text" :class="[bearing7VerVibr?.status]">
      <div>B, мм/с</div>
      <div>{{bearing7VerVibr?.value?.toFixed(2)}}</div>
    </div>
    <div style="left:39.5%;top:87.7%;width: 5.3%;" class="highlighted-val exgauster-scheme-text" :class="[bearing7HorVibr?.status]">
      <div>Г, мм/с</div>
      <div>{{bearing7HorVibr?.value?.toFixed(2)}}</div>
    </div>
    <div style="left:39.5%;top:90.7%;width: 5.3%;" class="highlighted-val exgauster-scheme-text" :class="[bearing7AxiaVibr?.status]">
      <div>O, мм/с</div>
      <div>{{bearing7AxiaVibr?.value?.toFixed(2)}}</div>
    </div>


    <div style="left:48.1%;top:31.1%;width:5.3%" class="row justify-center exgauster-scheme-text">
      3 ПС
    </div>
    <div style="left:48.13%;top:34.8%;width: 5.3%;" class="highlighted-val exgauster-scheme-text" :class="[bearing3Temp?.status]">
      <div>T, °C</div>
      <div>{{bearing3Temp?.value?.toFixed(2)}}</div>
    </div>


    <div style="left:48.1%;top:68%;width:5.3%" class="row justify-center exgauster-scheme-text">
      5 ПС
    </div>
    <div style="left:48.2%;top:71.6%;width: 5.3%;" class="highlighted-val exgauster-scheme-text" :class="[bearing5Temp?.status]">
      <div>T, °C</div>
      <div>{{bearing5Temp?.value?.toFixed(2)}}</div>
    </div>


    <div style="left:56.4%;top:68%;width:5.3%" class="row justify-center exgauster-scheme-text">
      2 ПС
    </div>
    <div style="left:56.4%;top:71.4%;width: 5.3%;" class="highlighted-val exgauster-scheme-text" :class="[bearing2Temp?.status]">
      <div>T, °C</div>
      <div>{{bearing2Temp?.value?.toFixed(2)}}</div>
    </div>
    <div style="left:56.4%;top:74.4%;width: 5.3%;" class="highlighted-val exgauster-scheme-text" :class="[bearing2VerVibr?.status]">
      <div>B, мм/с</div>
      <div>{{bearing2VerVibr?.value?.toFixed(2)}}</div>
    </div>
    <div style="left:56.4%;top:77.4%;width: 5.3%;" class="highlighted-val exgauster-scheme-text" :class="[bearing2HorVibr?.status]">
      <div>Г, мм/с</div>
      <div>00{{bearing2HorVibr?.value?.toFixed(2)}}</div>
    </div>
    <div style="left:56.4%;top:80.4%;width: 5.3%;" class="highlighted-val exgauster-scheme-text" :class="[bearing2AxiaVibr?.status]">
      <div>O, мм/с</div>
      <div>{{bearing2AxiaVibr?.value?.toFixed(2)}}</div>
    </div>


    <div style="left:74.2%;top:68%;width:5.3%" class="row justify-center exgauster-scheme-text">
      1 ПС
    </div>
    <div style="left:74.2%;top:71.4%;width: 5.3%;" class="highlighted-val exgauster-scheme-text" :class="[bearing1Temp?.status]">
      <div>T, °C</div>
      <div>{{bearing1Temp?.value?.toFixed(2)}}</div>
    </div>
    <div style="left:74.2%;top:74.4%;width: 5.3%;" class="highlighted-val exgauster-scheme-text" :class="[bearing1VerVibr?.status]">
      <div>B, мм/с</div>
      <div>{{bearing1VerVibr?.value?.toFixed(2)}}</div>
    </div>
    <div style="left:74.2%;top:77.4%;width: 5.3%;" class="highlighted-val exgauster-scheme-text" :class="[bearing1HorVibr?.status]">
      <div>Г, мм/с</div>
      <div>{{bearing1HorVibr?.value?.toFixed(2)}}</div>
    </div>
    <div style="left:74.2%;top:80.4%;width: 5.3%;" class="highlighted-val exgauster-scheme-text" :class="[bearing1AxiaVibr?.status]">
      <div>O, мм/с</div>
      <div>{{bearing1AxiaVibr?.value?.toFixed(2)}}</div>
    </div>
    <q-img src="~assets/exgauster-scheme.svg"/>
  </div>
</template>
<script>
import {useRoute} from 'vue-router';
import AspiratorService from "../services/AspiratorService";

export default {
  data: () => ({
    router: null,
    aspirator: null,
    bearings: [],
    otherSenors: []
  }),

  async mounted() {
    this.router = useRoute()
    this.aspirator = await AspiratorService.getAspirator(this.router.params["id"])
    this.bearings = this.aspirator?.data?.aspirator?.sensors_payload?.bearings
    this.otherSenors = this.aspirator?.data?.aspirator?.sensors_payload?.other_senors
  },

  async created() {
    setInterval(async () => {
      this.aspirator = await AspiratorService.getAspirator(this.router.params["id"])
    }, 10000)
  },

  computed: {
    bearing9Temp: function () {
      return this.bearings[8]?.signal_values[0]
    },
    bearing8Temp: function () {
      return this.bearings[7]?.signal_values[3]
    },
    bearing8VerVibr: function () {
      return this.bearings[7]?.signal_values[1]
    },
    bearing8HorVibr: function () {
      return this.bearings[7]?.signal_values[0]
    },
    bearing8AxiaVibr: function () {
      return this.bearings[7]?.signal_values[0]
    },
    bearing7Temp: function () {
      return this.bearings[6]?.signal_values[3]
    },
    bearing7VerVibr: function () {
      return this.bearings[6]?.signal_values[1]
    },
    bearing7HorVibr: function () {
      return this.bearings[6]?.signal_values[0]
    },
    bearing7AxiaVibr: function () {
      return this.bearings[6]?.signal_values[0]
    },
    bearing6Temp: function () {
      return this.bearings[5]?.signal_values[0]
    },
    bearing5Temp: function (){
      return this.bearings[4]?.signal_values[0]
    },
    bearing4Temp: function () {
      return this.bearings[3]?.signal_values[0]
    },
    bearing3Temp: function () {
      return this.bearings[2]?.signal_values[0]
    },
    bearing2Temp: function () {
      return this.bearings[1]?.signal_values[3]
    },
    bearing2VerVibr: function () {
      return this.bearings[1]?.signal_values[1]
    },
    bearing2HorVibr: function () {
      return this.bearings[1]?.signal_values[0]
    },
    bearing2AxiaVibr: function () {
      return this.bearings[1]?.signal_values[0]
    },
    bearing1Temp: function () {
      return this.bearings[0]?.signal_values[3]
    },
    bearing1VerVibr: function () {
      return this.bearings[0]?.signal_values[1]
    },
    bearing1HorVibr: function () {
      return this.bearings[0]?.signal_values[0]
    },
    bearing1AxiaVibr: function () {
      return this.bearings[0]?.signal_values[0]
    },

    statorCurrent: function (){
      return this.otherSenors.filter(s=> s?.device_kind?.name === "Главный привод")[0]?.signal_values.filter(s=>s.signal_kind_code=="stator_current")[0]
    },
    rotorCurrent: function (){
      return this.otherSenors.filter(s=> s?.device_kind?.name === "Главный привод")[0]?.signal_values.filter(s=>s.signal_kind_code==="rotor_current")[0]
    },
    rotorVoltage: function (){
      return this.otherSenors.filter(s=> s?.device_kind?.name === "Главный привод")[0]?.signal_values.filter(s=>s.signal_kind_code==="rotor_voltage")[0]
    },
    statorVoltage: function (){
      return this.otherSenors.filter(s=> s?.device_kind?.name === "Главный привод")[0]?.signal_values.filter(s=>s.signal_kind_code==="stator_voltage")[0]
    },

    coolerBeforeTemp: function (){
      return this.otherSenors.filter(s=> s?.device_kind?.name === "Охладитель")[0]?.signal_values.filter(s=>s.signal_kind_code==="temperature_before")[0]
    },
    waterBeforeCoolerTemp: function (){
      return this.otherSenors.filter(s=> s?.device_kind?.name === "Охладитель")[0]?.signal_values.filter(s=>s.signal_kind_code==="temperature_before")[0]
    },
    coolerAfterTemp: function (){
      return this.otherSenors.filter(s=> s?.device_kind?.name === "Охладитель")[0]?.signal_values.filter(s=>s.signal_kind_code==="temperature_after" && s.value > 0.00)[0]
    },
    waterAfterCoolerTemp: function (){
      return this.otherSenors.filter(s=> s?.device_kind?.name === "Охладитель")[0]?.signal_values.filter(s=>s.signal_kind_code==="temperature_after" && s.value < 0.00)[0]
    },
    oilLevel: function (){
      return this.otherSenors.filter(s=> s?.device_kind?.name === "Маслосистема")[0]?.signal_values.filter(s=>s.signal_kind_code==="oil_level")[0]
    },
    oilLevelValue: function (){
      return oilLevel?.value;
    },
    oilPressure: function (){
      return this.otherSenors.filter(s=> s?.device_kind?.name === "Маслосистема")[0]?.signal_values.filter(s=>s.signal_kind_code==="oil_pressure")[0]
    }
  },

  methods: {
    toBeatify(value){
      if(value == null) return 0.00;
      return value.toFixed(2)
    }
  }

}

</script>
<style lang="scss" scoped>
.exgauster-scheme-text {
  z-index: 1;
  font-weight: 600;
  font-size: 0.7vw;
  position: absolute;
  color: white;


}

.highlighted-val {
  display: flex !important;
  flex-direction: row;
  justify-content: space-between;
  background-color: $warning-accent;
  border-radius: 2px;
  padding: 0 4px 0 4px;
}

.liquid-measure {
  background-color: $secondary;
  height: 20px;
  padding-left: 3px;
}

.alarm{
  background-color: #EB5835;
}

.ok{
  background-color: #9CC983;
}

.warning{
  background-color: #FAB82E;
}
</style>
