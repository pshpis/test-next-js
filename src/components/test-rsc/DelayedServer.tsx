function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

type NotNeededProps = {
    content?: string
}
export const DelayedServer = async (props: NotNeededProps) => {
    await delay(5000);
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
