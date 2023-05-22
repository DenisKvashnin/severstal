<template>
  <q-layout view="hHh lpr lFf" class="main-layout-container">
    <q-header v-if="router.currentRoute.value.path !== '/auth'" style="backgroundColor:white" elevated>

      <q-toolbar style="height:54px">
        <div v-if="router.currentRoute.value.path === '/trends'" style="width:182px">
          <q-btn flat dense size="24px" style="margin-left:-7px;" color="primary" round icon="menu" aria-label="Menu"
            @click="leftDrawerOpen = !leftDrawerOpen" />
        </div>
        <img v-else src="~assets/severstal-logo.webp" @click="router.push({ path: '/' })" class="severstal-logo cursor-pointer" />

        <q-space />
        <div class="q-pa-md q-gutter-sm">

          <q-avatar class="text-black weight-1 cursor-pointer" style="margin-left:10px" rounded color="grey-12"
            text-color="white">
            {{ Array.from(userStorage.user.username)[0].toUpperCase() }}
            <q-menu persistent>
              <q-list style="min-width: 100px">
                <q-item clickable>
                  <q-item-section @click="toSetting()">Настройки</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section @click="toAdmin()">Панель администратора</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable>
                  <q-item-section @click="router.push({ path: '/auth' })">Выйти</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-avatar>
        </div>
      </q-toolbar>
    </q-header>


    <q-drawer v-model="notificationDrawerOpen" overlay :width="1500" side="right"
      style="box-shadow: -4px 2px 10px 2px rgb(0 0 0 / 20%) inset;">
      <notificationComponent />
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
  <ButtonResetScreenComponent />
</template>

<script setup>
import { useUserStore } from "src/stores/user"
import { useRouter, useRoute } from 'vue-router';
import { defineAsyncComponent, ref, onMounted } from 'vue'
import useOffsetStore from "src/stores/mainStore"
import ButtonResetScreenComponent from "components/ButtonResetScreenComponent.vue";
import moment from 'moment'


const offsetStore = useOffsetStore()
const range = ref(32566)
const router = useRouter()
const route = useRoute()
const userStorage = useUserStore()
const notificationDrawerOpen = ref(false)
const debounce = ref(false)
function timeout() {
  if (!debounce.value) {
    setOffsetVal(null); range.value = null
  } else {
    return
  }
  debounce.value = true
  setTimeout(() => {
    debounce.value = false
  }, 2000)
}
function setOffsetVal(v) {
  offsetStore.setOffset(v)
}
const notificationComponent = defineAsyncComponent(() =>
  import('components/NotificationComponent.vue')
)
onMounted(() => {
  range.value = offsetStore.offset
})
const toAdmin = () => {
  window.location.href = "https://evraz-api.kovalev.team/admin/evraz_kafka_datum"
}

 const toSetting = () => {
      router.push('/setting');
  };

</script>

<style scoped lang="scss">
.main-layout-container {
  background-color: $background1;
}
</style>
<style lang="scss">
.card-link-btn {
  padding: 0;
  height: 28px;
  width: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FAFAFA;
  border: 1px solid black;
  border-radius: 4px;
  position: inherit !important;

  & :hover {
    cursor: pointer;
  }
}

.severstal-logo {
  position: absolute;
  width: 132.53px;
  height: 34px;
  left: 20px;
  top: 7px;
}

.q-header {
  height: 54px;
}

.severstal-logo :hover {
  cursor: pointer;
}

.q-avatar {
  width: 40px;
  height: 40px;
}

.notification_icon {
  width: 33px;
  height: 24px;
}
</style>
