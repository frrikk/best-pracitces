import Link from "next/link";
import { PropsWithChildren } from "react";

interface HeaderProps extends PropsWithChildren {
  items: NavElement[];
}

export function Header({ items }: HeaderProps) {
  return (
    <nav>
      {items.map(({ href, label, title }) => {
        return (
          <NavItem key={label} href={href}>
            {title}
          </NavItem>
        );
      })}
    </nav>
  );
}

interface NavItemProps extends PropsWithChildren {
  href: string;
}

const NavItem = ({ href, children }: NavItemProps) => (
  <Link href={href}>{children}</Link>
);
