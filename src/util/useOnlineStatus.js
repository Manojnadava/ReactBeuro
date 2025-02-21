import { useEffect, useState } from "react"

const useOnlineStatus=()=>{
    const [onlinestatus, setonlinestatus]=useState(true);

    useEffect(()=>{
    window.addEventListener('offline',()=>{
        setonlinestatus(false);
        //if it is offline the event then this listner calls function passed as second argumnet to listner
    })
    window.addEventListener('online',()=>{
        setonlinestatus(true);
        //if it is offline the event then this listner calls function passed as second argumnet to listner
    })
    },[]) //execute only once function inside useeffect when component mountfirst time

    return onlinestatus;
}

export  default useOnlineStatus;