import { component$, Slot } from '@builder.io/qwik';
import Navigation from '../components/navigation/navigation';

export default component$(() => {
  
  return (
    <>
      <Navigation />
      <main>
        <section class="max-w-5xl mx-auto px-4" >
          <Slot />
        </section>
      </main>
    </>
  );
});