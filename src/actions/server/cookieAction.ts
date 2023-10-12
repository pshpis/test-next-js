'use server'

import {cookies} from "next/headers";

export async function cookieAction(){
    'use server'
    const cookieStore = cookies();
    cookieStore.set("client", "I am server, father");
    const client = cookieStore.get("client")?.value;
    console.log(client)
    return client ? client : "Something went wrong";
}
