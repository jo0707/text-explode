<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
    <CodeContent title="html" :code="store.getHTMLCode()" ref="html" />
    <CodeContent title="CSS" :code="store.getCSSCode()" ref="css" />
  </div>
</template>

<script setup lang="ts">
import CodeContent from "./CodeContent.vue";
import { usePropertiesStore } from "@/stores/properties";

const store = usePropertiesStore();
</script>
