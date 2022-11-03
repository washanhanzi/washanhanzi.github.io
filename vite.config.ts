import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { partytownVite } from "@builder.io/partytown/utils";
import { join } from "path";
import rehypePrism from "rehype-prism-plus"

export default defineConfig(() => {
  return {
    plugins: [
      qwikCity({
        mdxPlugins: {
          remarkGfm: true,
          rehypeSyntaxHighlight: false,
          rehypeAutolinkHeadings: true
        },
        mdx: {
          rehypePlugins: [
            [rehypePrism, { ignoreMissing: true }],
          ],
        }
      }),
      qwikVite(),
      tsconfigPaths(),
      partytownVite({ dest: join(__dirname, "public", "~partytown") }),
    ],
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    },
  };
});
