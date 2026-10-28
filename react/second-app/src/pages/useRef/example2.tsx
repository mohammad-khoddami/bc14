import React, { useRef } from "react";

export default function Example2() {
    const inputRef = useRef(null);

    function handleClick() {
        console.log(inputRef.current.value);
    }

    return (
        <div>
            <h1 className="text-2xl font-bold border-b-2 pb-2 mb-6">
                Example 2
            </h1>

            <input ref={inputRef} className="border rounded-sm" />
            <button onClick={handleClick}>show Input Value</button>
        </div>
    );
}
