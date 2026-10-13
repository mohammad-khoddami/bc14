import React, { useState } from "react";

export default function Password() {
    const [type, setType] = useState("password");

    function handleClick() {
        setType(type === "password" ? "text" : "password");
    }

    return (
        <div>
            <input type={type} className="border rounded-sm" />
            <button
                className="border rounded-sm cursor-pointer"
                onClick={handleClick}
            >
                {type === "password" ? "show" : "hide"}
            </button>
        </div>
    );
}
