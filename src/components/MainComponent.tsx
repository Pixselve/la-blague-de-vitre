import {createSignal} from "solid-js";

export function MainComponent() {
    const [clicked, setClicked] = createSignal(false);

    const handler = () => {
        setClicked(!clicked())
    }


    return <div onClick={handler} classList={{"bg-black": !clicked()}} class={"text-6xl cursor-pointer select-none"}>Une baie Vitré</div>
}
