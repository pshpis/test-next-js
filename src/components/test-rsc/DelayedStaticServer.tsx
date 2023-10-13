import {wait} from "@/utils/wait";

type NotNeededProps = {
    content?: string
}
export const DelayedStaticServer = async (props: NotNeededProps) => {
    // uncomment to see magic
    // await wait(5000);
    return <>
        [
            I was rendered after delay but before your request. <br/>
            {props.content ? "My content is " + props.content : ""}
        ]
    </>
}

/*
This will be looks like SSG????
 */
