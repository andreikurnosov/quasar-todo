<template>
  <div class="row q-mb-sm">
    <q-input
      :rules="[val => !!val || 'Field is required']"
      autofocus
      ref="name"
      clearable
      outlined
      @input="$emit('update:name', $event)"
      :value="name"
      label="Task name"
      class="col"
    />
  </div>
</template>
<script>
export default {
  props: ["name"]
};
</script>
