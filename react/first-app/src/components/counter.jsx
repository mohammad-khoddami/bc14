import { useState } from "react";

//mount
//unmount
export default function Counter() {
    // let number = 0;
    const [number, setNumber] = useState(0);

    function handleIncrease() {
        // number++;
        setNumber(number + 1);
        console.log(number);
    }

    const handleDecrease = () => {
        setNumber(number - 1);
    };

    if (number === 0) {
        return (
            <button
                className="bg-green-500 text-white rounded-md cursor-pointer"
                onClick={handleIncrease}
            >
                افزودن به سبد خرید
            </button>
        );
    }
    return (
        <div className="flex">
            <button
                className="bg-green-500 p-2 rounded-sm cursor-pointer"
                onClick={handleDecrease}
            >
                -
            </button>

            <p>{number}</p>
            <button
                className="bg-green-500 p-2 rounded-sm cursor-pointer"
                onClick={handleIncrease}
            >
                +
            </button>
        </div>
    );
}
