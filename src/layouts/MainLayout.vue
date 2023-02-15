<template>
  <q-layout view="hHh lpr lFf" class="main-layout-container">
    <q-header style="backgroundColor:white" elevated>
      <q-toolbar>
        <q-btn v-if="router.currentRoute.value.path === '/trends'" flat dense size="20px" color="primary" round
          icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
        <q-space v-if="router.currentRoute.value.path === '/trends'" />
        <img src="~assets/evraz-logo.svg" style="width: 200px; height: 100%" />
        <q-space />
        <div v-if="router.currentRoute.value.path !== '/auth'" class="row items-center">
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
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<style scoped lang="scss">
.main-layout-container {
  background-color: $background1;
}
</style>
