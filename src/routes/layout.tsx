import { component$, Slot } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div class="h-screen bg-slate-900">
      <div>
        <Slot />
      </div>
    </div>
  );
});
