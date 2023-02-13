<template>
  <Transition name="scale" appear>
    <slot></slot>
  </Transition>
</template>

<style>
.scale-enter-active,
.scale-leave-active {
  transition: all 1s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.6);
}
</style>

<script setup lang="ts"></script>
