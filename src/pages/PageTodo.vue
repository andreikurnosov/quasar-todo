<template>
  <q-page>
    <div class="q-pa-md absolute full-width full-height column">
      <div class="row q-mb-lg">
        <SearchBar />
        <Sort />
      </div>
      <p
        v-if="
          search &&
            !Object.keys(getTasks).length &&
            !Object.keys(getTasksCompleted).length
        "
      >
        No search results.
      </p>
      <q-scroll-area class="q-scrollarea-tasks">
        <NoTasks
          v-if="
            !Object.keys(getTasks).length &&
              !search &&
              !getSettings.showTasksInOneList
          "
        />

        <TasksTodo v-else :getTasks="getTasks" />

        <TasksCompleted :getTasksCompleted="getTasksCompleted" />
      </q-scroll-area>

      <div class="absolute-bottom text-center q-mb-lg no-pointer-events">
        <q-btn
          @click="showAddTask = true"
          class="all-pointer-events"
          round
          color="primary"
          size="24px"
          icon="add"
        />
      </div>
    </div>

    <q-dialog v-model="showAddTask">
      <AddTask @close="showAddTask = false" />
    </q-dialog>
  </q-page>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  name: "PageIndex",
  data() {
    return {
      showAddTask: false
    };
  },
  components: {
    AddTask: () => import("../components/Tasks/Modals/AddTask"),
    TasksTodo: () => import("../components/Tasks/TasksTodo"),
    TasksCompleted: () => import("../components/Tasks/TasksCompleted"),
    NoTasks: () => import("../components/Tasks/NoTasks"),
    SearchBar: () => import("../components/Tasks/Tools/SearchBar"),
    Sort: () => import("../components/Tasks/Tools/Sort")
  },

  computed: {
    ...mapGetters("tasks", ["getTasks", "getTasksCompleted"]),
    ...mapGetters("settings", ["getSettings"]),
    ...mapState("tasks", ["search"])
  },
  mounted() {
    this.$root.$on("showAddTask", () => {
      this.showAddTask = true;
    });
  }
};
</script>
<style scoped>
.q-scrollarea-tasks {
  display: flex;
  flex-grow: 1;
}
</style>
