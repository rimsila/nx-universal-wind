import { defineConfig } from "@kubb/core";
import { pluginOas } from "@kubb/plugin-oas";
import { pluginTs } from "@kubb/plugin-ts";
import { pluginZod } from "@kubb/plugin-zod";
import { pluginReactQuery } from "@kubb/plugin-react-query";

export default defineConfig({
  root: ".",
  input: {
    path: "./apps/api/openapi/counter-api.yaml",
  },
  output: {
    path: "./packages/api-client/src",
    clean: true,
  },
  plugins: [
    pluginOas(),
    pluginTs({
      output: {
        path: "types",
      },
    }),
    pluginZod({
      output: {
        path: "zod",
      },
    }),
    pluginReactQuery({
      output: {
        path: "hooks",
      },
      client: {
        importPath: "../client",
      },
    }),
  ],
});
