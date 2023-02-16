<template>
  <q-layout view="hHh lpr lFf" class="main-layout-container">
    <q-header v-if="router.currentRoute.value.path !== '/auth'" style="backgroundColor:white" elevated>
      <q-toolbar>
        <div v-if="router.currentRoute.value.path === '/trends'" style="width:182px">
          <q-btn flat dense size="24px" style="margin-left:-7px" color="primary" round icon="menu" aria-label="Menu"
            @click="leftDrawerOpen = !leftDrawerOpen" />
        </div>
        <img v-else src="~assets/evraz-logo.svg" @click="router.push({ path: '/' })" class="evraz-logo" />
        <!-- <q-btn v-if="router.currentRoute.value.path === '/'" outlined color="primary" size="14px"
          @click="router.push({ path: '/trends' })">К трендам</q-btn> -->
        <q-space />
        <div class="row">
          <q-tabs v-model="tab" class="text-black">
            <q-tab @click="router.push({ path: '/trends' })" name="/trends" icon="query_stats" label="тренды" />
            <q-tab @click="router.push({ path: '/' })" name="/" icon="home" label="главная" />
          </q-tabs>
          <q-tabs indicator-color="transparent" class="text-black">
            <q-tab icon="notification_important" @click="notificationDrawerOpen = !notificationDrawerOpen"
              label="оповещения" />
          </q-tabs>
        </div>
        <q-space />
        <div v-if="router.currentRoute.value.path !== '/auth'" style="width:200px" class="row items-center justify-end">
          <div style="font-size:20px;color:black;">
            {{ userStorage.user.username }}
          </div>
          <q-btn flat dense size="20px" color="primary" round icon="logout" aria-label="Menu"
            @click="router.push({ path: '/auth' })" />
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
    <q-drawer v-model="notificationDrawerOpen" side="right"
      style="box-shadow: -4px 2px 10px 2px rgb(0 0 0 / 20%) inset;" overlay bordered>
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
const tab = ref(router.currentRoute.value.path)
const notificationDrawerOpen = ref(false)
</script>

<style scoped lang="scss">
.main-layout-container {
  background-color: $background1;
}
</style>
<style>
.evraz-logo {
  width: 200px;
  height: 100%;
}

.evraz-logo :hover {
  cursor: pointer;
}
</style>
