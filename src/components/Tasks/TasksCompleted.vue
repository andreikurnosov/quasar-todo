<template>
  <div v-if="Object.keys(getTasksCompleted).length" class="q-mt-lg">
    <ListHeader
      bgColor="bg-green-5"
    >Completed</ListHeader>

    <q-list separator bordered>
      <TaskItem
        v-for="(task, key) in getTasksCompleted"
        :key="key"
        :task="task"
        :id="key"
      />
    </q-list>
  </div>
</template>

<script>
import TaskItem from "./TaskItem";
import ListHeader from "../Shared/ListHeader";

export default {
  props: ["getTasksCompleted"],
  components: {
    TaskItem,
    ListHeader
  }
};
</script>

