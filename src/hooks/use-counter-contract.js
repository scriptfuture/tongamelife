import { useEffect, useState } from "react";
import { Address, fromNano, OpenedContract, toNano } from "ton-core";

import {Donations} from "../wrappers/tact_Donations.ts";


import { useAsyncInitialize } from "./use-asyncInitialize";
import { useTonConnect } from "./use-tonconnect";

import { useTonClient } from "./use-tonclient";

const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time))

export function useCounterContract() {
    const {client} = useTonClient()
    const {wallet, sender} = useTonConnect()
    const [counter, setCounter] = useState()

    const objContract = useAsyncInitialize(async()=>{
        if(!client || !wallet) return;

        const contract = Donations.fromAddress(Address.parse("EQBqw8PkZeMfQIJPxyjaFxLxFRwjF8lvuwP3OgKqR5jdQL6x"))

        return client.open(contract)
    }, [client, wallet])


    useEffect(()=>{
        async function getCurrentCount() {
            if(!objContract) return; // очень важная строка

            setCounter(null)
            const count = await objContract.getCounter();
            console.log(typeof count);
            setCounter(count+"")

            await sleep(10000)
            setCounter(count+"")

            getCurrentCount();

        }

        getCurrentCount();

    }, [objContract])

    return {
        counter: counter,
        add: () => {
            console.log("add")

            const message = {
                $$type: 'Add',
                queryId: 0n,
                amount: 1n,
            }

            objContract?.send(sender, {
                value: toNano("0.05")
            }, message)
        }
    }
}