import React, { useContext } from "react";
import NameContext from "../../context/NameContext";
import ThemeContext from "../../context/ThemeContext";

export default function I() {
    const name = useContext(NameContext);
    const { theme } = useContext(ThemeContext);

    return (
        <div
            className={`h-13 ${theme === "dark" ? "bg-black text-white" : "bg-yellow-200 text-black"}`}
        >
            <span>I:</span>
            <span>{name}</span>
            <p>{theme}</p>
        </div>
    );
}
