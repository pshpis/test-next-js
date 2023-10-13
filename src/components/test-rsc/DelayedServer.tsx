import {wait} from "@/utils/wait";

type NotNeededProps = {
    content?: string
}
export const DelayedServer = async (props: NotNeededProps) => {
    // uncomment to see magic
    // await wait(5000);
    return <>
        [
        I dont know how I will be rendered. <br/>
        {props.content ? "My content is " + props.content : ""}
        ]
    </>
}

/*
This will be looks like SSG????
 */
