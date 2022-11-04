import { component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { GithubIcon, Menu } from './component';

export default component$(() => {
  useSignal
  const menu: { name: string, href: string, date: string }[] = [
    {
      name: "Pragmatic gRPC 1",
      href: "/posts/pragmaticgrpc1",
      date: "2021-05-30"
    }
  ]
  return (
    <>
      <div class="grid grid-cols-1 md:grid-cols-[1fr_600px_1.1fr] gap-4 text-zinc-300 pt-3">
        <div></div>
        <div>
          <p class="text-4xl py-4">N1ll</p>
          <a href="https://github.com/washanhanzi" target="_blank" rel="author" title="Github">
            <GithubIcon />
          </a>
          <p class="py-4">Garbberish</p>
          <Menu menu={menu} />
        </div>
        <div></div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'N1ll',
};
