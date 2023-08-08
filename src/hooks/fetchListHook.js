import {useEffect, useState} from "react";
import {handleError} from "../errors/errors";
import {isNotEmptyArray} from "../utils/utils";

export const useFetchListHook = (fetchList) => {
    const [list, setList] = useState([]);
    const [isRequestPending, setIsRequestPending] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                setIsRequestPending(true);
                const fetchedList = await fetchList();

                if(isNotEmptyArray(fetchedList)) {
                    setList(fetchedList);
                }
            } catch (err) {
                handleError(err);
            } finally {
                setIsRequestPending(false);
            }
        })();
    }, []);

    return {
        list,
        isRequestPending
    }
}