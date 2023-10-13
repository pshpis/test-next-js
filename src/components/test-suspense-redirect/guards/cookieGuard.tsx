import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import {wait} from "@/utils/wait";


export const CookieGuard = async ({children, delay, redirectTo} : { children: React.ReactNode, delay: number, redirectTo: string }) => {
    const cookiesStore = cookies();
    const haveAccess = cookiesStore.get('access')?.value;
    await wait(delay);
    console.log("I have waited", delay, "ms");
    if (!haveAccess) {
        redirect(redirectTo);
    }
    return <>{children}</>;

}
