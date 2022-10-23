<script setup>
import { computed } from "vue";

const props = defineProps({
  bgColor: {
    type: String,
    default: null,
  },
  px: {
    type: String,
    default: null,
  },
  py: {
    type: String,
    default: null,
  },
  
});

const inputElClass = computed(() => {
  const base = [
    "z-30 md:py-8 md:px-10 lg:mt-0 bg-azulBackGroundForm",
    
    props.px ? `px-${px}` : "px-8",
    props.py ? `py-${py}` : "py-6",
    props.bgColor ? "bg-azulBackGroundForm" : "bg-white",
  ];


  return base;
});
</script>

<template>
  <div :class="inputElClass">
   <slot></slot>
  </div>
</template>