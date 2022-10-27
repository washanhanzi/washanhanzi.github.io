import { component$, Slot } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div class="flex flex-wrap justify-center justify-items-center items-center">
     <div class="flex-1">
      </div>
      <main class="sm:flex-none:w-full flex-initial w-132">
        <Slot  />
      </main>
      <div class="flex-1"></div>
    </div >
  );
});
