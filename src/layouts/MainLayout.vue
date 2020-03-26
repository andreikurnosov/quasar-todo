<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="absolute-center">
          Todo App
        </q-toolbar-title>
        <q-btn
          v-if="!loggedIn"
          to="/auth"
          flat
          icon-right="account_circle"
          label="Login"
          class="absolute-right"
        />
        <q-btn
          v-else
          @click="logoutUser"
          flat
          icon-right="exit_to_app"
          label="Logout"
          class="absolute-right"
        />
      </q-toolbar>
    </q-header>

    <q-footer>
      <q-tabs>
        <q-route-tab
          v-for="navLink in essentialLinks"
          :to="navLink.link"
          :icon="navLink.icon"
          :label="navLink.title"
          :key="navLink.key"
        />
      </q-tabs>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="250"
      bordered
      content-class="bg-primary"
      :breakpoint="767"
    >
      <q-list dark>
        <q-item-label header>Navigation</q-item-label>

        <EssentialLink
          class="text-grey-4"
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "MainLayout",

  components: {
    EssentialLink: () => import("../components/EssentialLink")
  },

  computed: {
    ...mapState("auth", ["loggedIn"])
  },

  methods: {
    ...mapActions('auth', ['logoutUser'])
  },

  data() {
    return {
      leftDrawerOpen: false,

      essentialLinks: [
        {
          title: "Todo",
          icon: "list",
          link: "/"
        },

        {
          title: "Settings",
          icon: "settings",
          link: "/settings"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
@media screen and (min-width: 768px) {
  .q-footer {
    display: none;
  }
}

.q-drawer {
  .q-router-link--exact-active {
    color: white !important;
  }
}
</style>
