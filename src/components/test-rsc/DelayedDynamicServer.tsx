type Props = {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default async function DelayedDynamicServer({searchParams}: Props) {
    const content = searchParams.content as string;
    await delay(5000);
    return <>[I was rendered after delay on your request. My content: {content}]</>;
}

/*
This will be looks like SSR
 */
