import {cookieServerLogic} from "@/utils/cookieServerLogic";
import {ClientChildren1} from "@/components/test-communication/ClientChildren1";

export const Parent1 = () => {
    const content = cookieServerLogic();
    return <>
    [
        I am parent 1. Server content: {content}
        <ClientChildren1/>
    ]
    </>
}
