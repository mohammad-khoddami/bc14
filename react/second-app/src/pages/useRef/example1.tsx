import React, { useRef, useState } from "react";

export default function Example1() {
    let letCount = 0;
    const [stateCount, setStateCount] = useState(0);
    const refCount = useRef(0);

    function handleClickLet() {
        letCount += 1;
        console.log(letCount);
    }

    function handleClickState() {
        setStateCount(stateCount + 1);
    }

    function handleClickRef() {
        refCount.current = refCount.current + 1;
        console.log(refCount);
    }

    return (
        <div>
            <h1 className="text-2xl font-bold border-b-2 pb-2 mb-6">
                Example 1
            </h1>

            <div>
                <span>{letCount}</span>
                <button
                    className="border rounded-sm p-2"
                    onClick={handleClickLet}
                >
                    Incrase let
                </button>
            </div>
            <div>
                <span>{stateCount}</span>
                <button
                    className="border rounded-sm p-2"
                    onClick={handleClickState}
                >
                    Incrase State
                </button>
            </div>
            <div>
                <span>{refCount.current}</span>
                <button
                    className="border rounded-sm p-2"
                    onClick={handleClickRef}
                >
                    Incrase Ref
                </button>
            </div>
        </div>
    );
}
