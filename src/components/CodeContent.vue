<template>
  <div
    class="relative bg-[#282936] rounded shadow-lg text-base-100 max-h-86 overflow-y-scroll"
  >
    <div
      class="sticky bg-[#282936] top-0 left-0 w-full py-2 px-4 flex flex-row justify-between items-center"
    >
      <h3 class="font-semibold align-bottom text-slate-200">{{ title }}</h3>
      <button class="btn btn-square btn-xs" @click="copy">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-clipboard"
          viewBox="0 0 16 16"
        >
          <path
            d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"
          />
          <path
            d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"
          />
        </svg>
      </button>
    </div>
    <highlightjs class="m-0 text-md" autodetect :code="code" />
  </div>

  <TheToast message="Copied!" :class="isHidden ? 'hidden' : ''" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import TheToast from "./TheToast.vue";

const isHidden = ref(true);
const props = defineProps<{
  title: string;
  code: string;
}>();

function copy() {
  navigator.clipboard.writeText(props.code);
  isHidden.value = false;
  setTimeout(() => {
    isHidden.value = true;
  }, 2000);
}
</script>
