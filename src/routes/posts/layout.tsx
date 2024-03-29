import { component$, Slot, useStyles$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import styles from "./style/posts.css?inline"
import oneDark from "./style/oneDark.css?inline"
import prism from "./style/prism.css?inline"

export default component$(() => {
  useStyles$(styles)
  useStyles$(oneDark)
  useStyles$(prism)
  return (
    <div class="grid grid-cols-1 md:grid-cols-[1fr_800px_1.2fr] gap-4">
      <div></div>
      <article class="prose prose-base dark:prose-invert p-4 overflow-x-hidden ::selection:bg-fuchsia-700">
        <Slot />
      </article>
    </div>
  );
});

export const head: DocumentHead = ({ head }) => {
  return {
    title: `${head.title}`,
  };
};
