<template>
  <div style="position: relative;">

    <div style="left:49.6%;top:16%;width:10.19%" class="liquid-measure exgauster-scheme-text">
      12 %
    </div>

    <div style="left:74.7%;top:30.3%;width: 11.8%" class="liquid-measure exgauster-scheme-text">
      12 кг/см2
    </div>


    <div style="left:71.65%;top:3.87%;" class="exgauster-scheme-text">
      {{}}000 °C
    </div>
    <div style="left:67.1%;top:3.87%;" class="exgauster-scheme-text">
      {{}}000 °C
    </div>
    <div style="left:62.65%;top:15.87%;" class="exgauster-scheme-text">
      {{}}000 °C
    </div>
    <div style="left:69.4%;top:25.7%;" class="exgauster-scheme-text">
      {{}}000 °C
    </div>


    <div style="left:72.15%;top:43.6%;" class="exgauster-scheme-text">
      {{}}000
    </div>
    <div style="left:72.15%;top:46.6%;" class="exgauster-scheme-text">
      {{}}000
    </div>
    <div style="left:72.15%;top:49.6%;" class="exgauster-scheme-text">
      {{}}000
    </div>
    <div style="left:72.15%;top:52.6%;" class="exgauster-scheme-text">
      {{}}000
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
    <div style="left:15%;top:57.2%;width: 5.3%;" class="highlighted-val exgauster-scheme-text">
      <div>T, °C</div>
      <div>{{ bearing9Temp }}</div>
    </div>


    <div style="left:15%;top:66.3%;width:5.3%" class="row justify-center exgauster-scheme-text">
      8 ПС
    </div>
    <div style="left:15%;top:69.6%;width: 5.3%;" class="highlighted-val exgauster-scheme-text">
      <div>T, °C</div>
      <div>{{bearing8Temp}}</div>
    </div>
    <div style="left:15%;top:72.6%;width: 5.3%;" class="highlighted-val exgauster-scheme-text">
      <div>B, мм/с</div>
      <div>{{bearing8VerVibr}}</div>
    </div>
    <div style="left:15%;top:75.6%;width: 5.3%;" class="highlighted-val exgauster-scheme-text">
      <div>Г, мм/с</div>
      <div>{{bearing8HorVibr}}</div>
    </div>
    <div style="left:15%;top:78.6%;width: 5.3%;" class="highlighted-val exgauster-scheme-text">
      <div>O, мм/с</div>
      <div>{{bearing8AxiaVibr}}</div>
    </div>


    <div style="left:39.4%;top:31.18%;width:5.3%" class="row justify-center exgauster-scheme-text">
      4 ПС
    </div>
    <div style="left:39.4%;top:34.8%;width: 5.3%;" class="highlighted-val exgauster-scheme-text">
      <div>T, °C</div>
      <div>{{bearing4Temp}}</div>
    </div>


    <div style="left:39.4%;top:68.0%;width:5.3%" class="row justify-center exgauster-scheme-text">
      6 ПС
    </div>
    <div style="left:39.5%;top:71.6%;width: 5.3%;" class="highlighted-val exgauster-scheme-text">
      <div>B, мм/с</div>
      <div>{{bearing6Temp}}</div>
    </div>


    <div style="left:39.4%;top:78.2%;width:5.3%" class="row justify-center exgauster-scheme-text">
      7 ПС
    </div>
    <div style="left:39.5%;top:81.7%;width: 5.3%;" class="highlighted-val exgauster-scheme-text">
      <div>T, °C</div>
      <div>{{bearing7Temp}}</div>
    </div>
    <div style="left:39.5%;top:84.7%;width: 5.3%;" class="highlighted-val exgauster-scheme-text">
      <div>B, мм/с</div>
      <div>{{bearing7VerVibr}}</div>
    </div>
    <div style="left:39.5%;top:87.7%;width: 5.3%;" class="highlighted-val exgauster-scheme-text">
      <div>Г, мм/с</div>
      <div>{{bearing7HorVibr}}</div>
    </div>
    <div style="left:39.5%;top:90.7%;width: 5.3%;" class="highlighted-val exgauster-scheme-text">
      <div>O, мм/с</div>
      <div>{{bearing7AxiaVibr}}</div>
    </div>


    <div style="left:48.1%;top:31.1%;width:5.3%" class="row justify-center exgauster-scheme-text">
      3 ПС
    </div>
    <div style="left:48.13%;top:34.8%;width: 5.3%;" class="highlighted-val exgauster-scheme-text">
      <div>T, °C</div>
      <div>{{bearing3Temp}}</div>
    </div>


    <div style="left:48.1%;top:68%;width:5.3%" class="row justify-center exgauster-scheme-text">
      5 ПС
    </div>
    <div style="left:48.2%;top:71.6%;width: 5.3%;" class="highlighted-val exgauster-scheme-text">
      <div>T, °C</div>
      <div>{{bearing5Temp}}</div>
    </div>


    <div style="left:56.4%;top:68%;width:5.3%" class="row justify-center exgauster-scheme-text">
      2 ПС
    </div>
    <div style="left:56.4%;top:71.4%;width: 5.3%;" class="highlighted-val exgauster-scheme-text">
      <div>T, °C</div>
      <div>{{bearing2Temp}}</div>
    </div>
    <div style="left:56.4%;top:74.4%;width: 5.3%;" class="highlighted-val exgauster-scheme-text">
      <div>B, мм/с</div>
      <div>{{bearing2VerVibr}}</div>
    </div>
    <div style="left:56.4%;top:77.4%;width: 5.3%;" class="highlighted-val exgauster-scheme-text">
      <div>Г, мм/с</div>
      <div>00{{bearing2HorVibr}}</div>
    </div>
    <div style="left:56.4%;top:80.4%;width: 5.3%;" class="highlighted-val exgauster-scheme-text">
      <div>O, мм/с</div>
      <div>{{bearing2AxiaVibr}}</div>
    </div>


    <div style="left:74.2%;top:68%;width:5.3%" class="row justify-center exgauster-scheme-text">
      1 ПС
    </div>
    <div style="left:74.2%;top:71.4%;width: 5.3%;" class="highlighted-val exgauster-scheme-text">
      <div>T, °C</div>
      <div>{{bearing1Temp}}</div>
    </div>
    <div style="left:74.2%;top:74.4%;width: 5.3%;" class="highlighted-val exgauster-scheme-text">
      <div>B, мм/с</div>
      <div>{{bearing1VerVibr}}</div>
    </div>
    <div style="left:74.2%;top:77.4%;width: 5.3%;" class="highlighted-val exgauster-scheme-text">
      <div>Г, мм/с</div>
      <div>{{bearing1HorVibr}}</div>
    </div>
    <div style="left:74.2%;top:80.4%;width: 5.3%;" class="highlighted-val exgauster-scheme-text">
      <div>O, мм/с</div>
      <div>{{bearing1AxiaVibr}}</div>
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
    bearings: []
  }),

  async mounted() {
    this.router = useRoute()
    this.aspirator = await AspiratorService.getAspirator(this.router.params["id"])
    this.bearings = this.aspirator?.data?.aspirator?.sensors_payload?.bearings
  },

  async created() {
    setInterval(async () => {
      this.test = Math.random()
      this.aspirator = await AspiratorService.getAspirator(this.router.params["id"])
    }, 10000)
  },

  computed: {
    bearing9Temp: function () {
      return this.toBeatify(this.bearings[8]?.signal_values[0]?.value)
    },
    bearing8Temp: function () {
      return this.toBeatify(this.bearings[7]?.signal_values[3]?.value)
    },
    bearing8VerVibr: function () {
      return this.toBeatify(this.bearings[7]?.signal_values[1]?.value)
    },
    bearing8HorVibr: function () {
      return this.toBeatify(this.bearings[7]?.signal_values[0]?.value)
    },
    bearing8AxiaVibr: function () {
      return this.toBeatify(this.bearings[7]?.signal_values[0]?.value)
    },
    bearing7Temp: function () {
      return this.toBeatify(this.bearings[6]?.signal_values[3]?.value)
    },
    bearing7VerVibr: function () {
      return this.toBeatify(this.bearings[6]?.signal_values[1]?.value)
    },
    bearing7HorVibr: function () {
      return this.toBeatify(this.bearings[6]?.signal_values[0]?.value)
    },
    bearing7AxiaVibr: function () {
      return this.toBeatify(this.bearings[6]?.signal_values[0]?.value)
    },
    bearing6Temp: function () {
      return this.toBeatify(this.bearings[5]?.signal_values[0]?.value)
    },
    bearing5Temp: function (){
      return this.toBeatify(this.bearings[4]?.signal_values[0]?.value)
    },
    bearing4Temp: function () {
      return this.toBeatify(this.bearings[3]?.signal_values[0]?.value)
    },
    bearing3Temp: function () {
      return this.toBeatify(this.bearings[2]?.signal_values[0]?.value)
    },
    bearing2Temp: function () {
      return this.toBeatify(this.bearings[1]?.signal_values[3]?.value)
    },
    bearing2VerVibr: function () {
      return this.toBeatify(this.bearings[1]?.signal_values[1]?.value)
    },
    bearing2HorVibr: function () {
      return this.toBeatify(this.bearings[1]?.signal_values[0]?.value)
    },
    bearing2AxiaVibr: function () {
      return this.toBeatify(this.bearings[1]?.signal_values[0]?.value)
    },
    bearing1Temp: function () {
      return this.toBeatify(this.bearings[0]?.signal_values[3]?.value)
    },
    bearing1VerVibr: function () {
      return this.toBeatify(this.bearings[0]?.signal_values[1]?.value)
    },
    bearing1HorVibr: function () {
      return this.toBeatify(this.bearings[0]?.signal_values[0]?.value)
    },
    bearing1AxiaVibr: function () {
      return this.toBeatify(this.bearings[0]?.signal_values[0]?.value)
    },
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
</style>
