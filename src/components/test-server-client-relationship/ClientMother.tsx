"use client"

import {useEffect, useState} from "react";
import {ClientLeaf} from "@/components/test-server-client-relationship/ClientLeaf";
import {setCookie} from "nookies";
import {ServerLeaf} from "@/components/test-server-client-relationship/ServerLeaf";

export const ClientMother = ({ServerLeaf} : any) => {
    const [client, setClient] = useState("I am client, mother");
    useEffect(() => {
        setCookie(null, 'client', 'I am server father', {
            path: '/',
        });
    }, []);
    return <div>
        [
        {client} <br/> <ClientLeaf/> <br/>
        {ServerLeaf ? ServerLeaf : ""}
        ]
    </div>
}
