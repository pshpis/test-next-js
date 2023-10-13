import {DelayedStaticServer} from "@/components/test-rsc/DelayedStaticServer";
import {MomentServer} from "@/components/test-rsc/MomentServer";
import DelayedDynamicServer from "@/components/test-rsc/DelayedDynamicServer";

type Props = {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export default function Home(props: Props) {
    return <>
        {/*<DelayedStaticServer content={props.searchParams.content as string}/>/!*That's make static content dynamic*!/*/}
        <DelayedStaticServer content="smth"/>
        <br/>
        <MomentServer/>
        <br/>
        <DelayedDynamicServer {...props}/>
    </>
}
