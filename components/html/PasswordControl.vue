<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  name: {
    type: String,
    default: null,
  },
  id: {
    type: String,
    default: null,
  },
  autocomplete: {
    type: String,
    default: null,
  },
  placeholder: {
    type: String,
    default: null,
  },
  inputmode: {
    type: String,
    default: null,
  },
  icon: {
    type: String,
    default: null,
  },
  options: {
    type: Array,
    default: null,
  },
  type: {
    type: String,
    default: "text",
  },
  modelValue: {
    type: [String, Number, Boolean, Array, Object],
    default: "",
  },
  required: Boolean,
  borderless: Boolean,
  transparent: Boolean,
  ctrlKFocus: Boolean,
});

const emit = defineEmits(["update:modelValue"]);

const computedValue = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit("update:modelValue", value);
  },
});

const inputElClass = computed(() => {
  const base = [
    "px-3 py-1 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full",
    "dark:placeholder-gray-400",
    
    props.borderless ? "border-0" : "border",
    props.transparent ? "bg-transparent" : "bg-white dark:bg-slate-800",
  ];

  if (props.icon) {
    base.push("pl-10");
  }

  return base;
});



const inputEl = ref(null);

</script>
<template>
  <div class="relative">
    <input
      :id="id"
      ref="inputEl"
      v-model="computedValue"
      :name="name"
      :inputmode="inputmode"
      :autocomplete="autocomplete"
      :required="required"
      :placeholder="placeholder"
      type="password"
      :class="inputElClass"
    />
    <!-- <FormControlIcon v-if="icon" :icon="icon" :h="controlIconH" /> -->
  </div>
</template>