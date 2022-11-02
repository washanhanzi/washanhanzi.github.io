import { component$, Slot } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Menu from '~/components/menu/menu';

export default component$(() => {
  return (
    <div class="grid grid-cols-1 md:grid-cols-[1fr_600px_1.2fr] gap-4 text-zinc-300 text-base pt-3">
      <div></div>
      <article>
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
