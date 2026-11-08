import fetchProductList from "@/lib/product-list";
import Image from "next/image";
import React from "react";

export default async function ProductListPage() {
    const products = await fetchProductList();

    return (
        <div className="grid grid-cols-4">
            {products.map((product) => (
                <div key={product.id}>
                    <Image
                        src={product.images[0]}
                        alt={product.title}
                        width={200}
                        height={200}
                    />
                    <p>{product.title}</p>
                </div>
            ))}
        </div>
    );
}
