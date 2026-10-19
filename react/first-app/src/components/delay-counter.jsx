import React, { useState } from "react";

export default function DelayCounter() {
    const [count, setCount] = useState(0);

    const handleInc = () => {
        setTimeout(() => {
            setCount((prev) => prev + 1);
        }, 1000);
        // setCount((prev) => prev + 1);
        // setCount((prev) => {
        //     return prev + 1;
        // });
    };

    const handleDec = () => {
        setTimeout(() => {
            setCount((prev) => prev - 1);
        }, 1000);

        // setCount((prev) => {
        //     return prev - 1;
        // });
        // setCount((prev) => {
        //     return prev - 1;
        // });
    };

    return (
        <div>
            <button
                onClick={handleInc}
                className="border active:bg-red-500 px-2"
            >
                +
            </button>
            <span>{count}</span>
            <button
                onClick={handleDec}
                className="border active:bg-red-500 px-2"
            >
                -
            </button>
        </div>
    );
}
