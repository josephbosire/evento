import { FOOTER_ROUTES } from "@/lib/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between h-17 border-t border-white/10 px-3 sm:px-9 text-xs text-white/25 mt-auto">
      <small className="text-xs">
        &copy; 2024 Kahboss. All rights reserved
      </small>
      <ul className="flex gap-x-3 sm:gap-x-8">
        {FOOTER_ROUTES.map((route) => (
          <li key={route.name}>
            <Link href={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
