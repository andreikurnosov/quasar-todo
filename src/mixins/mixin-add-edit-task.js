export default {
  components: {
    ModalHeader: () => import("components/Tasks/Modals/Shared/ModalHeader"),
    ModalTaskName: () => import("components/Tasks/Modals/Shared/ModalTaskName"),
    ModalDueDate: () => import("components/Tasks/Modals/Shared/ModalDueDate"),
    ModalDueTime: () => import("components/Tasks/Modals/Shared/ModalDueTime"),
    ModalButtons: () => import("components/Tasks/Modals/Shared/ModalButtons")
  },
  methods: {
    submitForm() {
      this.$refs.modalTaskName.$refs.name.validate();
      if (!this.$refs.modalTaskName.$refs.name.hasError) {
        this.submitTask();
      }
    }
  }
};
