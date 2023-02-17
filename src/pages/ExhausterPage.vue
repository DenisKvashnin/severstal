<template>
  <div style="position: relative;">
    <div style="left:25%;top:24.3%;" class="exgauster-scheme-text">
      {{}}45 °C
    </div>
    <div style="left:23.9%;top:28.3%;" class="text-white exgauster-scheme-text">
      Разряжение, мм.в.ст &nbsp; {{}}74.3
    </div>
    <div style="left:23.9%;top:31.2%;" class="text-white exgauster-scheme-text">
      Уровень пыли, мг/м3 <span style="margin-left: 2px;">{{}}15</span>
    </div>
    <div style="left:23.9%;top:31.9%;" class="text-white exgauster-scheme-text">
      9 ПС <span style="margin-left: 2px;">{{}}15</span>
    </div>
    <q-img src="~assets/exgauster-scheme.svg" />
  </div>
</template>
<script setup>
</script>
<style lang="scss" scoped>
.exgauster-scheme-text {
  z-index: 1;
  font-weight: 600;
  font-size: 0.7vw;
  position: absolute;
}
</style>
