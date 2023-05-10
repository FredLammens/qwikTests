import { component$, useSignal } from "@builder.io/qwik";
import { Projector } from "~/components/projector/projector";
export default component$(() => {
    const messageSignal = useSignal('');
    return <div>
        <input type="text" placeholder="try me" onInput$={(e) => {messageSignal.value = (e.target as HTMLInputElement).value}}></input>
        <Projector message={messageSignal.value}>Your message is: </Projector>
    </div>;
});
