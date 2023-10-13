function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

type NotNeededProps = {
    content?: string
}
export const DelayedStaticServer = async (props: NotNeededProps) => {
    await delay(5000);
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
