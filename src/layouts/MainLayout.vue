<template>
  <q-layout view="hHh lpr lFf" class="main-layout-container">
    <q-header
      v-if="router.currentRoute.value.path !== '/auth'"
      style="background-color: white"
      elevated
    >
      <q-toolbar style="height: 54px">
        <div
          v-if="router.currentRoute.value.path === '/trends'"
          style="width: 182px"
        >
          <q-btn
            flat
            dense
            size="24px"
            style="margin-left: -7px"
            color="primary"
            round
            icon="menu"
            aria-label="Menu"
            @click="leftDrawerOpen = !leftDrawerOpen"
          />
        </div>
        <img
          v-else
          :src="logo"
          @click="router.push({ path: '/' })"
          class="severstal-logo cursor-pointer"
        />
        <q-space />

        <div>
          <div class="row nav-routes">
            <div
              @mouseover="setUnderline(0)"
              @mouseleave="dropUnderline()"
              @click="router.push({ name: 'Home' })"
            >
              Главная
            </div>
            <div
              @mouseover="setUnderline(1)"
              @mouseleave="dropUnderline()"
              @click="router.push({ name: 'Analysis' })"
            >
              Анализ
            </div>
            <div
              @mouseover="setUnderline(2)"
              @mouseleave="dropUnderline()"
              @click="router.push({ name: 'Download' })"
            >
              Загрузка
            </div>
          </div>
          <div class="moving-under-line">
            <div class="under-line"></div>
          </div>
        </div>

        <q-space />
        <div class="q-pa-md q-gutter-sm">
          <q-avatar
            class="text-black weight-1 cursor-pointer"
            style="margin-left: 10px"
            rounded
            color="grey-12"
            text-color="white"
          >
            {{ Array.from(userStorage.user.username)[0].toUpperCase() }}
            <q-menu persistent>
              <q-list style="min-width: 100px">
                <q-item clickable>
                  <q-item-section @click="toSetting()"
                    >Настройки</q-item-section
                  >
                </q-item>
                <q-item clickable>
                  <q-item-section @click="toAdmin()"
                    >Панель администратора</q-item-section
                  >
                </q-item>
                <q-separator />
                <q-item clickable>
                  <q-item-section @click="router.push({ path: '/auth' })"
                    >Выйти</q-item-section
                  >
                </q-item>
              </q-list>
            </q-menu>
          </q-avatar>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="notificationDrawerOpen"
      overlay
      :width="1500"
      side="right"
      style="box-shadow: -4px 2px 10px 2px rgb(0 0 0 / 20%) inset"
    >
      <notificationComponent />
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
  <ButtonResetScreenComponent />
</template>

<script setup>
import { useUserStore } from "src/stores/user";
import { useRouter } from "vue-router";
import { defineAsyncComponent, ref, onMounted } from "vue";
import ButtonResetScreenComponent from "components/ButtonResetScreenComponent.vue";
import logo from "assets/severstal-logo.webp";

const router = useRouter();
const userStorage = useUserStore();
const notificationDrawerOpen = ref(false);
const notificationComponent = defineAsyncComponent(() =>
  import("components/NotificationComponent.vue")
);
onMounted(() => {
  dropUnderline();
});
const toAdmin = () => {
  window.location.href =
    "https://evraz-api.kovalev.team/admin/evraz_kafka_datum";
};

const toSetting = () => {
  router.push("/setting");
};

const undelineData = [
  { margin: "4px", width: "102px" },
  { margin: "114px", width: "94px" },
  { margin: "220px", width: "106px" },
];
const curUnderlineWidth = ref(undelineData[0]);
const curUnderlineMargin = ref(undelineData[0]);
function setUnderline(val) {
  curUnderlineWidth.value = undelineData[val].width;
  curUnderlineMargin.value = undelineData[val].margin;
}
function dropUnderline() {
  if (router.currentRoute.value.name === "Download") {
    curUnderlineWidth.value = undelineData[2].width;
    curUnderlineMargin.value = undelineData[2].margin;
  }
  if (router.currentRoute.value.name === "Home") {
    curUnderlineWidth.value = undelineData[0].width;
    curUnderlineMargin.value = undelineData[0].margin;
  }
  if (router.currentRoute.value.name === "Analysis") {
    curUnderlineWidth.value = undelineData[1].width;
    curUnderlineMargin.value = undelineData[1].margin;
  }
  if (router.currentRoute.value.name === "Graphs") {
    curUnderlineWidth.value = undelineData[1].width;
    curUnderlineMargin.value = undelineData[1].margin;
  }
}
onMounted(() => {
  dropUnderline();
});
</script>

<style scoped lang="scss">
.main-layout-container {
  background-color: $background1;
}

.logo1 {
  width: 64px;
  height: 44px;
  background-image: url("../assets/logo-new.png");
  background-repeat: no-repeat;
  background-size: contain;
}

.logo2 {
  width: 120px;
  height: 40px;
  background-image: url("../assets/atom-skills-logo.svg");
  background-repeat: no-repeat;
  background-size: contain;
}

.nav-routes {
  & * {
    font-size: 24px;
    padding: 0 10px 0 10px;
  }

  :hover {
    cursor: pointer;
  }
}

.moving-under-line {
  transition: all 1s ease;

  .under-line {
    transition: all 0.38s ease;
    width: v-bind(curUnderlineWidth);
    background-color: black;
    margin-left: v-bind(curUnderlineMargin);
    height: 2px;
  }
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
  background: #fafafa;
  border: 1px solid black;
  border-radius: 4px;
  position: inherit !important;

  & :hover {
    cursor: pointer;
  }
}

.nav-routes {
  color: black;
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
