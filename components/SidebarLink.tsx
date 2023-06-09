"use client";
import Link from "next/link";
import { Settings, User, Grid, Calendar } from "react-feather";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import path from "path";

const icons = { Settings, User, Grid, Calendar };

const SidebarLink = ({ link }) => {
  const pathname = usePathname();
  let isActive = false;

  if (pathname === link.link) {
    isActive = true;
  }

  const Icon = icons[link.icon];
  return (
    <Link href={link.link} className="flex w-full items-center justify-center">
      <Icon
        size={40}
        className={clsx(
          "stroke-gray-400 transition duration-200 ease-in-out hover:stroke-violet-600",
          isActive && "stroke-violet-600"
        )}
      />
    </Link>
  );
};

export default SidebarLink;
