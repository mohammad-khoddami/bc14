import ProductItemType from "@/types/productItemType";
import ProductType from "@/types/productType";

async function fetchProductList() {
    const response = await fetch("https://dummyjson.com/products");
    const result: ProductType = await response.json();

    const products: ProductItemType[] = result.products;

    return products;
}

export default fetchProductList;
