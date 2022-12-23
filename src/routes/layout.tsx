import { component$, Slot, useStyles$ } from '@builder.io/qwik';
import style from "./style/link.css?inline"

export default component$(() => {
  useStyles$(style)
  return (
    <Slot />
  );
});
