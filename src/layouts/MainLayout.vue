<template>
  <q-layout view="hHh lpr lFf" class="main-layout-container">
    <q-header v-if="router.currentRoute.value.path !== '/auth'" style="backgroundColor:white" elevated>
      <q-toolbar style="height:54px">
        <div v-if="router.currentRoute.value.path === '/trends'" style="width:182px">
          <q-btn flat dense size="24px" style="margin-left:-7px" color="primary" round icon="menu" aria-label="Menu"
            @click="leftDrawerOpen = !leftDrawerOpen" />
        </div>
        <img v-else src="~assets/evraz-logo.svg" @click="router.push({ path: '/' })" class="evraz-logo cursor-pointer" />

        <q-space />
        <q-icon class="text-accent notification_icon cursor-pointer"
          @click="notificationDrawerOpen = !notificationDrawerOpen" size="26px" name="notification_important" />
        <div class="q-pa-md q-gutter-sm">
          <q-avatar @click="router.push({ path: '/auth' })" class="text-black weight-1 cursor-pointer"
            style="margin-left:10px" rounded color="grey-12" text-color="white">
            {{ Array.from(userStorage.user.username)[0].toUpperCase() }}</q-avatar>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered>
      <q-list>
        <q-item-label header>
          lol
        </q-item-label>
        <q-item>
          1
        </q-item>
        <q-item>
          2
        </q-item>
      </q-list>
    </q-drawer>
    <q-drawer v-model="notificationDrawerOpen" side="right" style="box-shadow: -4px 2px 10px 2px rgb(0 0 0 / 20%) inset;"
      overlay bordered>
      <q-list>
        <q-item-label header>
          lol
        </q-item-label>
        <q-item>
          1
        </q-item>
        <q-item>
          2
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from "src/stores/user"
import { useRouter } from 'vue-router';


const router = useRouter()
const userStorage = useUserStore()
const leftDrawerOpen = ref(false)
const notificationDrawerOpen = ref(false)
</script>

<style scoped lang="scss">
.main-layout-container {
  background-color: $background1;
}
</style>
<style>
.evraz-logo {
  position: absolute;
  width: 132.53px;
  height: 34px;
  left: 20px;
  top: 7px;
}

.q-header {
  height: 54px;
}

.evraz-logo :hover {
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
