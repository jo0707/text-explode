import { defineConfig, transform } from "windicss/helpers";

export default defineConfig({
  plugins: [transform("daisyui")],
});
