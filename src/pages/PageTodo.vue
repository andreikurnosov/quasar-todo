<template>
  <q-page class="q-pa-md">
    <SearchBar />

    <NoTasks v-if="!Object.keys(getTasks).length" />

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
import { mapGetters } from "vuex";
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
    NoTasks
  },

  computed: {
    ...mapGetters("tasks", ["getTasks", "getTasksCompleted"])
  },
  mounted() {
    this.$root.$on("showAddTask", () => {
      this.showAddTask = true;
    });
  }
};
</script>
