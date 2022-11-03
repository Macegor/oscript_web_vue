<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title> My Web Project </q-toolbar-title>
        <q-btn-dropdown color="white" text-color="black" :label="userName">
          <q-list>
            <q-item clickable v-close-popup @click="logout">
              <q-item-section>
                <q-item-label>Выход</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-list padding>
        <q-item clickable v-ripple to="/">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>

          <q-item-section>Главная</q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/page">
          <q-item-section avatar>
            <q-icon name="description" />
          </q-item-section>

          <q-item-section>Страница</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <div class="q-pa-md">
        <router-view />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import router from "@/router";
import store from "@/store";
import { defineComponent, ref } from "vue";

// const linksList = menuItems;

export default defineComponent({
  name: "MainLayout",

  components: {
    // EssentialLink
  },

  setup() {
    const leftDrawerOpen = ref(false);
    let userName = ref("");
    userName.value = store.state.auth.userName;

    const logout = () => {
      store.dispatch("auth/Logout");
      router.push("/login");
    };

    return {
      userName,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      logout,
    };
  },
});
</script>
