import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import "bootstrap/dist/css/bootstrap.min.css";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
});
