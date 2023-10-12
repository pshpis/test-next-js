import {ServerFather} from "@/components/test-server-client-relationship/ServerFather";
import {ClientMother} from "@/components/test-server-client-relationship/ClientMother";

export default function Home() {
    return <>
        <ClientMother/>
        <ServerFather/>
    </>
}
