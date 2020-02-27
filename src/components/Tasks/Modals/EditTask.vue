<template>
  <q-card>
    <ModalHeader> Edit Task </ModalHeader>
    <q-form @submit.prevent="submitForm">
      <q-card-section class="q-pt-none">
        <ModalTaskName :name.sync="taskToSubmit.name" ref="modalTaskName" />

        <ModalDueDate :dueDate.sync="taskToSubmit.dueDate" />

        <ModalDueTime
          v-if="taskToSubmit.dueDate"
          :dueTime.sync="taskToSubmit.dueTime"
        />
      </q-card-section>

      <ModalButtons />
    </q-form>
  </q-card>
</template>

<script>
import { mapActions } from "vuex";
import ModalHeader from "./Shared/ModalHeader";
import ModalTaskName from "./Shared/ModalTaskName";
import ModalDueDate from "./Shared/ModalDueDate";
import ModalDueTime from "./Shared/ModalDueTime";
import ModalButtons from "./Shared/ModalButtons";

export default {
  props: ["task", "id"],
  components: {
    ModalHeader,
    ModalTaskName,
    ModalDueDate,
    ModalDueTime,
    ModalButtons
  },
  data() {
    return {
      taskToSubmit: {}
    };
  },
  methods: {
    ...mapActions("tasks", ["updateTask"]),
    submitForm() {
      this.$refs.modalTaskName.$refs.name.validate();
      if (!this.$refs.modalTaskName.$refs.name.hasError) {
        this.submitTask();
      }
    },
    submitTask() {
      this.updateTask({
        id: this.id,
        updates: this.taskToSubmit
      });
      this.$emit("close");
    }
  },
  mounted() {
    this.taskToSubmit = Object.assign({}, this.task);
  }
};
</script>
