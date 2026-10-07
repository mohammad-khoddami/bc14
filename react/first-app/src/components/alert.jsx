export default function Alert({ text, type }) {
    function getStyle() {
        switch (type) {
            case "success":
                return {
                    textColor: "text-green-500",
                    bg: "bg-green-200",
                };
            case "error":
                return {
                    textColor: "text-red-500",
                    bg: "bg-red-200",
                };
            case "warning":
                return {
                    textColor: "text-yellow-500",
                    bg: "bg-yellow-200",
                };
            default:
                return {
                    textColor: "text-blue-500",
                    bg: "bg-blue-200",
                };
        }
    }

    const color = getStyle();

    return (
        <div className={color.bg}>
            <span className={color.textColor}>{text}</span>
        </div>
    );
}
