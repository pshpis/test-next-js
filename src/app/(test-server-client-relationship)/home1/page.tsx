import {ServerFather} from "@/components/test-server-client-relationship/ServerFather";
import {ClientMother} from "@/components/test-server-client-relationship/ClientMother";
import {ServerLeaf} from "@/components/test-server-client-relationship/ServerLeaf";

export default function Home() {
    const serverLeaf = <ServerLeaf/>;
    return <>
        <ClientMother ServerLeaf={serverLeaf}/>
        <ServerFather/>
    </>
}
