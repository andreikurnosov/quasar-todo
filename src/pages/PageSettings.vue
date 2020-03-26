<template>
  <q-page padding>
    <q-list bordered padding class="q-mb-md">
      <q-item-label header class="text-h6 text-bold">Settings</q-item-label>
      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Show 12 hour time format</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-toggle v-model="twelfthHourTimeFormat" color="blue" />
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Show tasks in one list</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-toggle v-model="showTasksInOneList" color="green" />
        </q-item-section>
      </q-item>
    </q-list>

    <q-list bordered padding>
      <q-item-label header class="text-h6 text-bold">More</q-item-label>
      <q-item tag="label" v-ripple to="/settings/help">
        <q-item-section>
          <q-item-label>Help</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple @click="visitOurWebsite">
        <q-item-section>
          <q-item-label>Visit our website</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple @click="emailUs">
        <q-item-section>
          <q-item-label>Email us</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { openURL } from "quasar";

export default {
  name: "PageIndex",
  computed: {
    ...mapGetters("settings", ["getSettings"]),
    twelfthHourTimeFormat: {
      get() {
        return this.getSettings.twelfthHourTimeFormat;
      },
      set(value) {
        this.setTwelfthHourTimeFormat(value);
      }
    },

    showTasksInOneList: {
      get() {
        return this.getSettings.showTasksInOneList;
      },
      set(value) {
        this.setShowTasksInOneList(value);
      }
    }
  },
  methods: {
    ...mapActions("settings", ["setTwelfthHourTimeFormat"]),
    ...mapActions("settings", ["setShowTasksInOneList"]),
    visitOurWebsite() {
      openURL("http://www.google.com");
    },
    emailUs() {
      window.location.href = "mailto:hello@gmail.com?subject=Todo Feedback";
    }
  }
};
</script>
