import { isInInventory } from '@/utility/functions';
import { TypeInventory } from '@/utility/types';
import { ShareContext } from "@/context/context";
import { useContext, useEffect } from "react";

export default function useTake(oggetto: TypeInventory | undefined) {
    const data = useContext(ShareContext);
    useEffect(() => {
        if (oggetto) {
            const isInInventory = data?.data?.inventory?.find((item) => {
                return item?.id === oggetto.id
            })
            if (!isInInventory) {
                data?.dispatch({ type: 'setInventory', payload: oggetto });
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [oggetto]);

}
