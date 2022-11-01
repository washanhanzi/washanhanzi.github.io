import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <p class="text-4xl">N1ll</p>

      <ul>
        <li>This homepage uses a layout without a menu.</li>
        <li>
          <span>The </span>
          <a href="/docs">Documentation</a>
          <span> pages use multiple nested layouts, one of them providing a left menu.</span>
        </li>
        <li>
          Check out the <code>src/routes</code> directory to get started.
        </li>
        <li>
          Add integrations with <code>npm run qwik add</code>.
        </li>
        <li>
          More info about development in <code>README.md</code>
        </li>
        <li>
          <a href="/docs">Qwik City</a>
          <span> is the meta-framework for Qwik</span>
        </li>
      </ul>
    </>
  );
});

export const head: DocumentHead = {
  title: 'N1ll',
};
