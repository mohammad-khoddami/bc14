import { useState } from "react";

const colors = ["red", "blue", "yellow", "green", "sky", "gray", "purple"];
export default function BeautifulButton() {
    const [bg, setBg] = useState(0);
    function handleChange() {
        setBg(bg >= colors.length - 1 ? 0 : bg + 1);
    }
    return (
        <div>
            <button
                className="cursor-pointer"
                style={{ backgroundColor: colors[bg] }}
                onClick={handleChange}
            >
                Click To Change Color
            </button>
        </div>
    );
}
