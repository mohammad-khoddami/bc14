"use client";

import React from "react";

export default function LikeButton() {
    function handleClick() {
        console.log("clicked");
    }

    return (
        <div>
            <button className="border rounded-sm px-2" onClick={handleClick}>
                Like
            </button>
        </div>
    );
}
