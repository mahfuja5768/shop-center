import ProductItem from "@/app/components/ProductItem";
import products from "@/app/data/products";

export default function CategoryProducts({ params }) {
  const { categoryName } = params;
  console.log(categoryName);
  const name = categoryName.toLowerCase();

  const categoryProducts = products.filter(
    (product) => product.category === name
  );

  return (
    <div class="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
      {categoryName === "All"
        ? products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        : categoryProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}

      {categoryName === "Skincare" && (
        <p className="flex justify-center items-center text-2xl text-gray-400">
          No products available
        </p>
      )}
      {categoryName === "Groceries" && (
        <p className="flex justify-center items-center text-2xl text-gray-400">
          No products available
        </p>
      )}
    </div>
  );
}
