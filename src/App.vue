<template>
  <!-- apply dark here -->
  <div
    class="max-w-screen min-h-screen bg-base-200 p-2"
    style="font-family: Poppins"
    :data-theme="theme"
  >
    <div>
      <ScaleTransition>
        <TheHeader @themeChange="switchTheme" />
      </ScaleTransition>

      <ScaleTransition>
        <main class="p-2 grid grid-cols-1 lg:grid-cols-2 flex-wrap gap-4">
          <TheCard title="Properties">
            <TheInput />
          </TheCard>

          <TheCard title="Preview (Hover)">
            <ThePreview />
          </TheCard>

          <TheCard class="lg:col-span-2" title="Code">
            <TheCode />
          </TheCard>
        </main>
      </ScaleTransition>

      <TheFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import TheInput from "./components/TheInput.vue";
import ThePreview from "./components/ThePreview.vue";
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import TheCode from "./components/TheCode.vue";
import TheCard from "./components/TheCard.vue";
import { ref } from "vue";
import ScaleTransition from "./components/ScaleTransition.vue";

const theme = ref("light");

function switchTheme() {
  theme.value = theme.value == "light" ? "dark" : "light";
}
</script>
