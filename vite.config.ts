import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { partytownVite } from "@builder.io/partytown/utils";
import { join } from "path";
import { qwikReact } from "@builder.io/qwik-react";
import rehypeAutolinkHeadings from 'rehype-autolink-headings'


export default defineConfig(() => {
  return {
    plugins: [
      qwikCity({
        mdxPlugins: {
          remarkGfm: true,
          rehypeSyntaxHighlight: true,
          rehypeAutolinkHeadings: true,
        },
        mdx: {
          rehypePlugins: [
            [rehypeAutolinkHeadings, { behavior: "wrap" }]
          ]
        }
      }),
      qwikVite(),
      tsconfigPaths(),
      partytownVite({ dest: join(__dirname, "public", "~partytown") }),
      // qwikReact(),
    ],
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    },
  };
});
