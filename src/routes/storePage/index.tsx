import { Signal, component$, useContext } from "@builder.io/qwik";
import { testContextId, testStateInterface } from "~/components/stores/test-context-id";
export default component$(() => {
    const state:Signal<testStateInterface> = useContext(testContextId);
    return <>
    <div>
    {state.value.data}
    </div>
    </>
});