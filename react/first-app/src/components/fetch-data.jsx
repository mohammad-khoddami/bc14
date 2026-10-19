import { useEffect, useState } from "react";
import Alert from "./alert";

export default function FetchData() {
    const [toggle, setToggle] = useState(false);
    const [products, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    console.log("clicked");

    useEffect(() => {
        //setup funtion
        async function getProducts() {
            setIsLoading(true);
            setError("");
            try {
                const resp = await fetch("https://dummyjson.com/products");
                if (!resp.ok) {
                    throw new Error(resp.status);
                }
                const result = await resp.json();
                setProduct(result.products);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        }

        getProducts();
    }, [toggle]);

    // if (error) {
    //     return <Alert text={error} type="error" />;
    // }

    // else if (isLoading) {
    //     return <p>Loading ...</p>;
    // }

    return (
        <div>
            <button
                onClick={() => setToggle(!toggle)}
                className="border active:bg-red-500"
            >
                reload
            </button>
            {isLoading ? (
                <p>Loading ...</p>
            ) : error ? (
                <Alert text={error} type="error" />
            ) : (
                <div className="grid grid-cols-4 gap-2">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="border rounded-sm shadow-md relative"
                        >
                            <img src={product.images[0]} alt={product.title} />
                            {product.discountPercentage && (
                                <span className="p-2 rounded-4xl bg-red-500 text-white text-xs font-bold absolute top-2 left-2">
                                    {product.discountPercentage}%
                                </span>
                            )}
                            <p className="text-sm">{product.title}</p>
                            <span>{product.price}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
