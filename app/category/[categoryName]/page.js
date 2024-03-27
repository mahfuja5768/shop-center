import ProductItem from "@/app/components/ProductItem";
import products from "@/app/data/products";

export const metadata = {
    title: "Shop-Center || Category Page",
    description: "This is our Category Page",
  };

export default function CategoryProducts({ params }) {
  const { categoryName } = params;
 

  const categoryProducts = products.filter(
    (product) => product.category === categoryName
  );

  return (
    <div class="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
      {categoryName === "all"
        ? products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        : categoryProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}

      {categoryName === "skincare" && (
        <p className="flex justify-center items-center text-2xl text-gray-400">
          No products available
        </p>
      )}
      {categoryName === "groceries" && (
        <p className="flex justify-center items-center text-2xl text-gray-400">
          No products available
        </p>
      )}
    </div>
  );
}
