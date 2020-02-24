<template>
  <q-page class="q-pa-md">
    <q-list separator bordered>
      <TaskItem
        v-for="(task, key) in getTasks"
        :key="key"
        :task="task"
        :id="key"
      />
    </q-list>
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
import TaskItem from "../components/Tasks/TaskItem";
import AddTask from "../components/Tasks/Modals/AddTask";

export default {
  name: "PageIndex",
  data() {
    return {
      showAddTask: false
    };
  },
  components: {
    TaskItem,
    AddTask
  },

  computed: {
    ...mapGetters("tasks", ["getTasks"])
  }
};
</script>
