import {cookieServerLogic} from "@/utils/cookieServerLogic";
import {ClientChildren2} from "@/components/test-communication/ClientChildren2";

export const Parent2 = () => {
    const content = cookieServerLogic();
    return <>
    [
        I am parent 2. Server content: {content}
        <ClientChildren2/>
    ]
    </>
}
