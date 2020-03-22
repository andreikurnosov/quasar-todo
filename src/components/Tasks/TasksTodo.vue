<template>
  <div v-if="Object.keys(getTasks).length">
    <ListHeader bgColor="bg-orange-5">Todo</ListHeader>

    <q-list separator bordered>
      <TaskItem
        v-for="(task, key) in getTasks"
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
  props: ["getTasks"],
  components: {
    TaskItem,
    ListHeader
  }
};
</script>
