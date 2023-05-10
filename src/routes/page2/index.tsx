import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import { Projector } from "~/components/projector/projector";
export default component$(() => {
    const messageSignal = useSignal('');
    const errorSignal = useSignal(false);
    useTask$(({track}) => {
        track(() => messageSignal.value);
        if(messageSignal.value === 'leKeque'){
            errorSignal.value = true;
        }
    });
    return <div>
        <input type="text" placeholder="try me" onInput$={(e) => {messageSignal.value = (e.target as HTMLInputElement).value}}></input>
        <Projector message={messageSignal.value} error={errorSignal.value}>Your message is: </Projector>
    </div>;
});
