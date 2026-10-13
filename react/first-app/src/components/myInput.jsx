import React from "react";

export default function MyInput({ change }) {
    function handleChange(e) {
        change(e.target.value);
    }

    return (
        <div>
            <input className="border rounded-sm" onChange={handleChange} />
        </div>
    );
}
