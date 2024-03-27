import CustomLink from "../components/shared/CustomLink";
import Footer from "../components/shared/Footer";
import Newsletter from "../components/shared/Newsletter";

export const metadata = {
  title: "Category Page",
  description: "This is our DashboardLayout page",
};

export default function CategoryLayout({ children }) {
  const items = [
    "All",
    "Smartphones",
    "Laptops",
    "Fragrances",
    "Skincare",
    "Groceries",
  ];

  return (
    <>
      <header className="h-[500px] bg-center flex flex-col-reverse bg-cover w-full"></header>
      <main>
        <section class="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
          <div class="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
            {items.map((item, idx) => (
              <CustomLink key={idx} path={`/category/${item.toLowerCase()}`}>
                <button className="hover:border-b border-black block h-6 box-border mt-5">
                  {item}
                </button>
              </CustomLink>
            ))}
          </div>
          {children}
        </section>
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
