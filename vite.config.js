import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-react-components/vite";
import generouted from "@generouted/react-router/plugin";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    generouted(),
    AutoImport({
      /* options */
      dts: "./auto-imports.d.ts",
      dirs: ["./src/**/*.{js,jsx}"],
      // Generate corresponding .eslintrc-auto-import.json file.
      // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
      eslintrc: {
        enabled: true,
        filepath: "./.eslintrc-auto-import.json",
        globalsPropValue: true,
      },
      // targets to transform
      include: [/\.jsx?$/],
      // global imports to register
      imports: [
        // Get component imports
        // ...getComponentImports(),
        // Import React
        "react",
        // Import React Router
        "react-router",
        // custom
        "react-router-dom",
      ],
    }),
    Components({
      dts: true,
    }),
  ],
});
