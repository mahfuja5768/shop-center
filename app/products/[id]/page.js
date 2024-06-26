import Rating from "@/app/components/shared/Rating";
import Slider from "@/app/components/shared/Slider";
import products from "@/app/data/products";
import Link from "next/link";

export const metadata = {
    title: "Shop-Center || Single Product Page",
    description: "This is our Single Product Page",
  };

export default function SingleProduct({ params }) {
  const { id } = params;
  const parseIntoNumber = parseInt(id);

  const product = products.find((product) => product.id === parseIntoNumber);
  const {
    images,
    category,
    rating,
    discountPercentage,
    price,
    description,
    title,
  } = product;
  return (
    <main className="h-screen">
      <section className="bg-[#fafaf2] h-full py-20">
        <div className="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between">
          <div className="w-full lg:w-7/12 border border-slate-500/20 p-4">
            <Slider images={images} />
          </div>

          <div className="w-full lg:w-5/12">
            <h1 className="italic text-xl lg:text-3xl font-serif font-semibold">
              {title}
            </h1>

            <span className="text-[#919090] my-3">
              <Link href={`/category/${category}`}>{category}</Link>
            </span>

            <div className="mt-3 flex items-center justify-start gap-1">
              <Rating value={Math.round(parseInt(rating))} />
            </div>
            <hr className="my-5 bg-black" />

            <div>
              <p class="my-3">
                <span class="text-rose-600 opacity-60 line-through">
                  ${price}
                </span>
                <span class="font-bold text-2xl">
                  ${(price - price * (discountPercentage / 100)).toFixed(2)}
                </span>
              </p>
            </div>
            <div>
              <p className="leading-7">{description}</p>

              <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
                Add To Cart - $
                {(price - price * (discountPercentage / 100)).toFixed(2)}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
