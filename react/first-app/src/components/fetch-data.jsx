import React, { useState } from "react";

export default function FetchData() {
    // const [toggle, setToggle] = useState(false);
    const [products, setProduct] = useState([]);
    // console.log("clicked");

    // fetch("https://dummyjson.com/products")
    //     .then((res) => res.json())
    //     .then((res) => setProduct(res.products));

    return (
        <div>
            {/* <button onClick={() => setToggle(!toggle)}>Click</button> */}
            {products.map((product) => (
                <p key={product.id}>{product.title}</p>
            ))}
        </div>
    );
}
