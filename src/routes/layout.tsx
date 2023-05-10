import { component$, Slot } from '@builder.io/qwik';
import Navigation from '../components/navigation/navigation';

export default component$(() => {
  
  return (
    <>
      <Navigation />
      <main>
        <section class="page">
          <Slot />
        </section>
      </main>
    </>
  );
});