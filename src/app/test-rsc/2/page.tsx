import {MomentServer} from "@/components/test-rsc/MomentServer";
import {DelayedServer} from "@/components/test-rsc/DelayedServer";

type Props = {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export default function Home(props: Props) {
    return <>
        <DelayedServer content="smth"/>
        <br/>
        <MomentServer/>
    </>
}
