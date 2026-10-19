import React, { useEffect, useState } from "react";

export default function WindowSize() {
    const [size, setSize] = useState({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        //setup funtion
        function myResizer() {
            console.log("window resized");
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener("resize", myResizer);

        // cleanup function
        return () => {
            window.removeEventListener("resize", myResizer);
        };
    }, []);

    return (
        <div>
            <p>Width: {size.width}</p>
            <p>Height: {size.height}</p>
        </div>
    );
}
