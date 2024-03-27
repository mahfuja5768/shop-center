"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const CustomLink = ({ path, children }) => {
  const pathname = usePathname();
  const active = pathname === path;

  return (
    <Link
      className={active ? "border-b border-black box-border inline-block" : ""}
      href={path}
    >
        {children}
    </Link>
  );
};

export default CustomLink;
