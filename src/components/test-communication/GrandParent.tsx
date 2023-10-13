import {cookieServerLogic} from "@/utils/cookieServerLogic";
import {Parent2} from "@/components/test-communication/Parent2";
import {Parent1} from "@/components/test-communication/Parent1";

export const GrandParent = () => {
    const content = cookieServerLogic();
    return <>
    [
        I am grandparent. Server content: {content}
        <Parent1/>
        <Parent2/>
    ]

    </>
}
