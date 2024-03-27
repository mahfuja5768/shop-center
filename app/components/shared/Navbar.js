import Image from "next/image";
import Logo from "/public/assets/lws-logo-black.svg";
import Menu from "/public/assets/svg/menu.svg";
import Cart from "/public/assets/svg/shopping-Cart.svg";
import Avatar from "/public/assets/svg/avatar.svg";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between w-11/12 lg:w-10/12 max-w-7xl py-5 lg:py-6 mx-auto">
      <div className="flex gap-5 items-center justify-between lg:w-8/12 text-[#1A1A1A]">
        <div className="flex items-center gap-2">
          <Image
            src={Menu}
            className="lg:hidden w-5 h-5"
            width={20}
            height={20}
            alt="Menu"
          />

          <Link href="/">
            <Image src={Logo} className="h-10" height={40} alt="Logo" />
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-end gap-2 lg:gap-5 lg:w-4/12">
        <Image
          src={Avatar}
          width={18}
          height={18}
          className="hidden lg:block w-[18px] h-[18px]"
          alt="login acount avatar"
        />
        <Image
          src={Cart}
          className="block w-5 h-5"
          width={20}
          height={20}
          alt="shopping cart icon"
        />
      </div>
    </nav>
  );
}
