<template>
  <div class="card card-compact rounded-md shadow-lg bg-base-100">
    <figure>
      <p class="w-full pb-0 p-4 card-title font-normal">{{ title }}</p>
    </figure>
    <div class="card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string }>();
</script>
