import { component$, Slot } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  return (
    <div class="grid grid-cols-1 gap-4 px-10 mt-7 sm:max-w-5xl sm:mx-auto">
      <main>
        <Slot />
      </main>
    </div>
  );
});
