import { useEffect, useState } from "react"

const Time = () => {
    const [time, setTime] = useState("");
    useEffect(()=>{
        const updateClock = ()=>{
            const now = new Date();
            const hours = String(now.getHours()).padStart(2,"0");
            const minutes = String(now.getMinutes()).padStart(2,"0");
            setTime(`${hours}:${minutes}`);
        };
        updateClock();
        const time = setInterval(updateClock,1000);
        return()=>clearInterval(time);
    },[]);
    return <div className="time">{time}</div>
}

export default Time