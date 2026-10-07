export default function Card({ product }) {
    return (
        <div className="border rounded-md px-4 py-2">
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p className="font-bold">{product.price}</p>
            <button className="bg-green-500 text-white rounded-md cursor-pointer">
                افزودن به سبد خرید
            </button>
        </div>
    );
}
