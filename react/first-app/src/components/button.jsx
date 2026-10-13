export default function Button({ size, text, children }) {
    function getSize() {
        switch (size) {
            case "small":
                return { w: "w-30", h: "h-10" };
            case "medium":
                return { w: "w-60", h: "h-20" };
            case "large":
                return { w: "w-90", h: "h-30" };

            default:
                return { w: "w-60", h: "h-20" };
        }
    }

    const btnSize = getSize();

    function handleClick() {
        console.log("clicked on me!!");
    }

    return (
        <button
            className={`${btnSize.w} ${btnSize.h} bg-blue-500 cursor-pointer`}
            onClick={handleClick}
        >
            {children || text || "Empty Button"}
        </button>
    );
}
