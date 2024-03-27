export default function ProductItem({ product }) {
  const {
    images,
    thumbnail,
    brand,
    category,
    stock,
    rating,
    discountPercentage,
    price,
    description,
    title,
  } = product;

  const backgroundImageStyle = {
    backgroundImage: `url('${thumbnail}')`,
  };

  return (
    <div>
      <div
        className={`relative delay-150 w-180px lg:w-[270px] h-[205px] lg:h-[310px] bg-[#f8f8f8] bg-cover bg-center transition-all duration-3000 ease-in-out transform`}
        style={backgroundImageStyle}
      ></div>
      <h2 className="text-sm lg:text-base mt-2">
        <a className="text-base font-bold" href="./productPage.html">
          {title}
        </a>
        <span className="text-[#919090]">
          <a href="./category.html">({category})</a>
        </span>
      </h2>
      <p className="text-[#919090] text-sm ">{description}</p>
      <p className="text-rose-600 text-sm mt-4">
        <span className="text-[#919090] line-through">${price}</span> $
        {price - price * (discountPercentage / 100)}
      </p>
    </div>
  );
}
