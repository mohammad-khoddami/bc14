import React, { useState } from "react";

export default function Input() {
    const [text, setText] = useState("");

    function handleChange(e) {
        setText(e.target.value);
    }

    return (
        <div>
            <input className="border rounded-sm" onChange={handleChange} />
            <p>{text}</p>
        </div>
    );
}
