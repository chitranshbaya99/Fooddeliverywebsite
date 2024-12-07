import { useEffect, useState } from "react"

const useOnlineStatus = ()=>{
    const [status, setStatus] = useState(true)
console.log("Hello");
     useEffect(()=> {
        window.addEventListener("offline", ()=> {
            setStatus(false);
        });

        window.addEventListener("online", ()=> {
            setStatus(true);
            console.log("Went online");
        });
     }, [])
     return status;
}

export default useOnlineStatus;



