import { component$, Slot, useStyles$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Menu } from './component/menu';
import styles from "./posts.css"

export default component$(() => {
  useStyles$(styles);
  return (
    <div class="grid grid-cols-1 md:grid-cols-[1fr_800px_1.2fr] gap-4">
      <div></div>
      <article class="prose dark:prose-invert p-4">
        <Slot />
      </article>
      <Menu />
    </div>
  );
});

export const head: DocumentHead = ({ head }) => {
  return {
    title: `${head.title}`,
  };
};
