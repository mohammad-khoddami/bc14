import React, { memo, useCallback, useMemo, useState } from "react";

function expensiveTake() {
    for (let index = 0; index < 1_000_000_000; index++) {}
    return (Math.random() * 100).toFixed(0);
}

export default function UseCallbackPage() {
    const [toggle, setToggle] = useState(false);

    const handleClick = useCallback(() => {
        setToggle(!toggle);
    }, [toggle]);

    return (
        <div>
            <MyButton show={toggle} click={handleClick} />
        </div>
    );
}

const MyButton = memo(function Button({ show, click }) {
    console.log("render");
    return (
        <button className="border rounded active:bg-red-500" onClick={click}>
            {show ? "show" : "hide"}
        </button>
    );
});
