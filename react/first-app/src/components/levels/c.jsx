import React, { useContext } from "react";
import G from "./g";
import NameContext from "../../context/NameContext";

export default function C() {
    const name = useContext(NameContext);

    return (
        <div className="bg-green-200 h-30">
            <span>C:</span>
            <span>{name}</span>
            <G />
        </div>
    );
}
