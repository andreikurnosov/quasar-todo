<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut"
  >
    <div
      v-if="Object.keys(getTasksCompleted).length"
      :class="{ 'q-mt-lg' : !getSettings.showTasksInOneList }"
    >
      <ListHeader v-if="!getSettings.showTasksInOneList" bgColor="bg-green-5"
        >Completed</ListHeader
      >

      <q-list separator bordered>
        <TaskItem
          v-for="(task, key) in getTasksCompleted"
          :key="key"
          :task="task"
          :id="key"
        />
      </q-list>
    </div>
  </transition>
</template>

<script>
import TaskItem from "./TaskItem";
import ListHeader from "../Shared/ListHeader";
import { mapGetters } from "vuex";

export default {
  props: ["getTasksCompleted"],
  computed: {
    ...mapGetters("settings", ["getSettings"])
  },
  components: {
    TaskItem,
    ListHeader
  }
};
</script>
