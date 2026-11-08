import ProductItemType from "./productItemType";

type ProductType = {
    products: ProductItemType[];
    total: number;
    skip: number;
    limit: number;
};

export default ProductType;
