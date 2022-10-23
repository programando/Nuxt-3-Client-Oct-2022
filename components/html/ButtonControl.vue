<script setup>
import { computed } from "vue";

const props = defineProps({
  name: {
    type: String,
    default: null,
  },

  placeholder: {
    type: String,
    default: null,
  },
  icon: {
    type: String,
    default: null,
  },

  color: {
    type: String,
    default: null,
  },
});

const emit = defineEmits([""]);

const inputElClass = computed(() => {
  const base = [
    "px-4 py-1 rounded-lg",
    props.color == "primary" ? "bg-green-700 text-white" : "bg-white",
  ];

  if (props.icon) {
    base.push("pl-10");
  }

  return base;
});
</script>
<template>
  <div class="relative flex justify-center items-center">
    <button :class="inputElClass">{{ name }}</button>
  </div>
</template>
