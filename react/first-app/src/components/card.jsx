import Counter from "./counter";

export default function Card({ product }) {
    return (
        <div className="border rounded-md px-4 py-2 relative">
            <img src={product.image} alt={product.name} />
            {product.discount > 0 && (
                <span className="bg-red-500 text-white font-bold p-3 rounded-md absolute top-8 left-8">
                    {product.discount}%
                </span>
            )}
            <p>{product.name}</p>
            <p className="font-bold">{product.price}</p>
            {product.stock <= 0 ? (
                <span className="bg-red-500 text-white rounded-sm px-2 py-1">
                    ناموجود
                </span>
            ) : (
                <Counter />
            )}
        </div>
    );
}
