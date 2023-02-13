import { ref, computed, type Ref } from "vue";
import { defineStore } from "pinia";
import { Properties } from "@/model/Properties";

export const usePropertiesStore = defineStore("properties", () => {
  const properties = ref(
    new Properties("Hello World", 10, 10, 10, 0, 0, false)
  );

  let transforms: Ref<string[]> = ref([]);
  let opacity: Ref<number[]> = ref([]);

  function generateTransform(size: number) {
    transforms.value = [];
    opacity.value = [];

    for (let i = 0; i < size; i++) {
      let x = getRandom(-properties.value.x, properties.value.x);
      let y = getRandom(-properties.value.y, properties.value.y);
      let r = getRandom(-properties.value.r, properties.value.r);
      let o = 1 - getRandom(-properties.value.o, properties.value.o) / 100;
      let s = getRandom(-properties.value.s, properties.value.s) / 100 + 1;

      transforms.value.push(
        `translate(${x}px, ${y}px) rotate(${r}deg) scale(${s})`
      );
      opacity.value.push(o);
    }
  }

  function getHTMLCode(): string {
    let html = '<p class="explode">\n';

    [...properties.value.text].forEach((c: string) => {
      html += `\t<span>${c != " " ? c : "&nbsp"}</span>\n`;
    });

    html += "</p>";
    return html;
  }

  function getCSSCode(): string {
    let css = `.explode > * {
      transition: transform 600ms ease;
      display: inline-block;
    }\n\n`;

    transforms.value.forEach((s, i) => {
      css += cssString(s, i);
    });

    return css;
  }

  function getRandom(min: number, max: number) {
    return Math.round(Math.random() * (max - min) + min);
  }

  function cssString(s: string, i: number): string {
    return `.explode:hover > span:nth-child(${i + 1}) {\n\ttransform: ${
      transforms.value[i]
    };\n\topacity:${opacity.value[i]}\n}\n`;
  }

  return {
    properties,
    transforms,
    opacity,
    getHTMLCode,
    getCSSCode,
    generateTransform,
  };
});
