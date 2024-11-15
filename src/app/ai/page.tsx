"use client";

import Link from "next/link";

export default function AiPage() {
  return (
    <nav>
      {navList.map((i) => {
        return (
          <Link key={i.title} href={i.href}>
            {i.title}
          </Link>
        );
      })}
    </nav>
  );
}

const navList = [
  {
    title: "Grok",
    href: `ai/grok`,
  },
];
