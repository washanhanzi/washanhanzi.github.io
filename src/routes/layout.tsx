import { component$, Slot } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div class="h-screen bg-gray-700">
      <div class="grid grid-cols-1 md:grid-cols-[1fr_600px_1.2fr] gap-4 text-zinc-300 text-base pt-3">
        <div >
        </div>
        <main>
          <Slot />
        </main>
        <div >
        </div>
      </div >
    </div>
  );
});
