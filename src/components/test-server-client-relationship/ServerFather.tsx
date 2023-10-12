import {cookies} from "next/headers";
import {ClientLeaf} from "@/components/test-server-client-relationship/ClientLeaf";
import {ServerLeaf} from "@/components/test-server-client-relationship/ServerLeaf";

export const ServerFather = async () => {
    const cookiesStore = cookies();
    const client = cookiesStore.get('client')?.value;
    // const subject = prisma.subjects.findUnique({});

    return <div>
        [{client ? client : "Idk who am I"} <br/> <ClientLeaf/> <br/> <ServerLeaf/>]
    </div>
}
