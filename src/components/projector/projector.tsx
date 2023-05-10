import { Slot, component$} from '@builder.io/qwik';
export interface ProjectorProps{
    message:string;
    error:boolean;
}
export const Projector = component$((props: ProjectorProps) => {
    return <div>
        <Slot></Slot>
        <span class={
            [{"text-red-500": props.error}]
        }>{props.message}</span>
    </div>

});