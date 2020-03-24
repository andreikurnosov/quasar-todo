<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut absolute-top"
  >
    <div v-if="Object.keys(getTasks).length">
      <ListHeader v-if="!getSettings.showTasksInOneList" bgColor="bg-orange-5"
        >Todo</ListHeader
      >

      <q-list separator bordered>
        <TaskItem
          v-for="(task, key) in getTasks"
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
  props: ["getTasks"],
  computed: {
    ...mapGetters("settings", ["getSettings"])
  },
  components: {
    TaskItem,
    ListHeader
  }
};
</script>
