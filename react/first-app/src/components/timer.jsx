import React, { useEffect, useState } from "react";

export default function Timer() {
    const [time, setTime] = useState(0);

    useEffect(() => {
        //setup funtion
        const myTimer = setInterval(() => {
            setTime((prev) => prev + 1);
            console.log("I am running");
        }, 1000);

        // cleanup function
        return () => {
            clearInterval(myTimer);
        };
    }, []);

    return <div>{time}</div>;
}
