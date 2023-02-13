<template>
  <div class="h-full flex flex-col text-center justify-between">
    <div class="h-fit rounded bg-base-200">
      <p
        ref="container"
        class="text-2xl font-sans p-6 children:duration-[600ms]"
        @mouseenter="mouseEnter"
        @mouseleave="mouseLeave"
      >
        <span
          v-for="c in [...store.properties.text]"
          class="transition inline-block"
        >
          {{ c != " " ? c : "&nbsp" }}
        </span>
      </p>
    </div>

    <button
      class="btn btn-success"
      @click.prevent="store.properties.refresh = !store.properties.refresh"
    >
      Shuffle
    </button>
  </div>
</template>

<script setup lang="ts">
import { usePropertiesStore } from "@/stores/properties";
import { computed, onMounted, ref, watch } from "vue";

const container = ref<HTMLParagraphElement | null>(null);
const store = usePropertiesStore();
let childrens: Element[] = [];

onMounted(() => {
  watch(
    () => store.properties.text,
    () => {
      setTimeout(() => (childrens = [...container.value!.children]), 100);
    },
    { immediate: true }
  );
  watch(
    store.properties,
    () => {
      store.generateTransform(store.properties.text.length);
    },
    { immediate: true }
  );
});

function mouseEnter() {
  childrens.forEach((el, i) => {
    el.style.transform = store.transforms[i];
    el.style.opacity = store.opacity[i].toString();
  });
}

function mouseLeave() {
  childrens.forEach((el, i) => {
    el.style.transform = "";
    el.style.opacity = "";
  });
}
</script>
