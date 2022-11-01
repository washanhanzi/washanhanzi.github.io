import { component$, Slot } from '@builder.io/qwik';

export default component$(() => {
  return (
  <div class="h-screen bg-gray-700">
    <div class="flex flex-wrap justify-center justify-items-center items-center text-zinc-300 text-base py-3">
     <div class="flex-1">
      </div>
      <main class="sm:flex-none:w-full flex-initial w-132">
        <Slot  />
      </main>
      <div class="flex-1">
      </div>
    </div >
  </div>
  );
});
