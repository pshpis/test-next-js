import {cookies} from "next/headers";

export const ServerLeaf = () => {
    const cookiesStore = cookies();
    const leafContent = cookiesStore.get('client')?.value;
    return <>{leafContent ? leafContent : "empty leaf content in cookie"}</>
}
