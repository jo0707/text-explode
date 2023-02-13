<template>
  <div>
    <form class="flex flex-col gap-3" action="#">
      <div class="flex flex-row items-center gap-2">
        <label class="min-w-40" for="text">Text </label>
        <input
          class="input input-bordered input-primary input-sm -md:w-40"
          type="text"
          id="text"
          v-model="store.properties.text"
        />
      </div>

      <div class="flex flex-row items-center gap-2">
        <label for="x" class="min-w-40">X randomness </label>
        <input
          class="w-50 range range-primary range-sm"
          type="range"
          min="0"
          max="100"
          id="x"
          v-model="store.properties.x"
        />
        <p class="inline">{{ store.properties.x }}px</p>
      </div>

      <div class="flex flex-row items-center gap-2">
        <label for="y" class="min-w-40">Y randomness </label>
        <input
          class="w-50 range range-primary range-sm"
          type="range"
          min="0"
          max="100"
          id="y"
          v-model="store.properties.y"
        />
        <p class="inline">{{ store.properties.y }}px</p>
      </div>

      <div class="flex flex-row items-center gap-2">
        <label for="r" class="min-w-40">Rotation </label>
        <input
          class="w-50 range range-primary range-sm"
          type="range"
          min="0"
          max="180"
          id="r"
          v-model="store.properties.r"
        />
        <p class="inline">{{ store.properties.r }}°</p>
      </div>

      <div class="flex flex-row items-center gap-2">
        <label for="o" class="min-w-40">Opacity randomness </label>
        <input
          class="w-50 range range-primary range-sm"
          type="range"
          min="0"
          max="100"
          id="o"
          v-model="store.properties.o"
        />
        <p class="inline">{{ store.properties.o }}%</p>
      </div>

      <div class="flex flex-row items-center gap-2">
        <label for="s" class="min-w-40">Scale randomness </label>
        <input
          class="w-50 range range-primary range-sm"
          type="range"
          min="0"
          max="100"
          id="s"
          v-model="store.properties.s"
        />
        <p class="inline">{{ store.properties.s }}%</p>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { usePropertiesStore } from "@/stores/properties";

const store = usePropertiesStore();
</script>
