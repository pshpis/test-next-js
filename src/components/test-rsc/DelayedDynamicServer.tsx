import {wait} from "@/utils/wait";

type Props = {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export default async function DelayedDynamicServer({searchParams}: Props) {
    const content = searchParams.content as string;
    // uncomment to see magic
    // await wait(5000);
    return <>[I was rendered after delay on your request. My content: {content}]</>;
}

/*
This will be looks like SSR
 */
