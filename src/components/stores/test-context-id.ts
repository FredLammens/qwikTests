import { Signal, createContextId } from "@builder.io/qwik";

export interface testStateInterface {
    data:string;
}

export const testContextId = createContextId<Signal<testStateInterface>>('test');


