import {cookies} from "next/headers";

export const ServerLeaf = () => {
    const cookiesStore = cookies();
    const leafContent = cookiesStore.get('leafContent')?.value;
    return <>[{leafContent ? leafContent : "empty leaf content in cookie"}]</>
}
