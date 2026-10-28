import React, { useMemo, useState } from "react";

function expensiveTake() {
    for (let index = 0; index < 1_000_000_000; index++) {}
    return (Math.random() * 100).toFixed(0);
}

export default function UseMemoPage() {
    const [toggle, setToggle] = useState(false);
    const [text, setText] = useState("");

    const memoResult = useMemo(() => {
        const result = expensiveTake();
        return result;
    }, [toggle]);

    return (
        <div>
            <input
                className="border"
                onChange={(e) => setText(e.target.value)}
            />
            <button
                className="block border active:bg-red-500"
                onClick={() => setToggle(!toggle)}
            >
                Generate Number
            </button>
            {memoResult}
        </div>
    );
}
