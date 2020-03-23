<template>
  <q-page class="q-pa-md">
    <div class="row q-mb-lg">
      <SearchBar />
    </div>
    <p v-if="search && !Object.keys(getTasks).length && !Object.keys(getTasksCompleted).length">No search results.
    </p>

    <NoTasks v-if="!Object.keys(getTasks).length && !search" />

    <TasksTodo v-else :getTasks="getTasks" />

    <TasksCompleted :getTasksCompleted="getTasksCompleted" />

    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn
        @click="showAddTask = true"
        round
        color="primary"
        size="24px"
        icon="add"
      />
    </div>

    <q-dialog v-model="showAddTask">
      <AddTask @close="showAddTask = false" />
    </q-dialog>
  </q-page>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import TasksTodo from "../components/Tasks/TasksTodo";
import SearchBar from "../components/Tasks/Tools/SearchBar";
import TasksCompleted from "../components/Tasks/TasksCompleted";
import NoTasks from "../components/Tasks/NoTasks";
import AddTask from "../components/Tasks/Modals/AddTask";

export default {
  name: "PageIndex",
  data() {
    return {
      showAddTask: false
    };
  },
  components: {
    AddTask,
    TasksTodo,
    TasksCompleted,
    NoTasks,
    SearchBar
  },

  computed: {
    ...mapGetters("tasks", ["getTasks", "getTasksCompleted"]),
    ...mapState("tasks", ["search"])
  },
  mounted() {
    this.$root.$on("showAddTask", () => {
      this.showAddTask = true;
    });
  }
};
</script>
