import { component$, Slot, useStyles$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Menu } from './component/menu';
import styles from "./style/posts.css"
import oneDark from "./style/oneDark.css"
import prism from "./style/prism.css"

export default component$(() => {
  useStyles$(styles)
  useStyles$(oneDark)
  useStyles$(prism)
  return (
    <div class="grid grid-cols-1 md:grid-cols-[1fr_800px_1.2fr] gap-4">
      <div></div>
      <article class="prose dark:prose-invert p-4 overflow-x-hidden">
        <Slot />
      </article>
      <div class="invisible md:visible fixed top-1/3 right-10">
        <Menu />
      </div>
    </div>
  );
});

export const head: DocumentHead = ({ head }) => {
  return {
    title: `${head.title}`,
  };
};
