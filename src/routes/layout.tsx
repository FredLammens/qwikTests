import { component$, Signal, Slot, useContextProvider, useSignal } from '@builder.io/qwik';
import Navigation from '../components/navigation/navigation';
import { testContextId, testStateInterface } from '~/components/stores/test-context-id';

export default component$(() => {
  //defaultState to pass
  const testState: Signal<testStateInterface> = useSignal({data:'testData'});
  //parent component which defines the state to use TODO: check if possible in same comp
  const testContext = useContextProvider(testContextId,testState);
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