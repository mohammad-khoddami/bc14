import React, { useEffect, useRef } from "react";

export default function Example3() {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div>
            <h1 className="text-2xl font-bold border-b-2 pb-2 mb-6">
                Example 3
            </h1>

            <input ref={inputRef} className="border rounded-sm" />
        </div>
    );
}
