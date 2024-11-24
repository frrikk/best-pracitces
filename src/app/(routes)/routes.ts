export const routes = [
  {
    id: "home",
    title: "Home",
    href: "/",
  },
  {
    id: "fetching",
    title: "Fetching",
    href: "/fetching",
    subRoutes: [
      {
        id: "prisma",
        title: "Prisma",
        href: "fetching/prisma",
        subRoutes: [
          {
            id: "ticket",
            title: "Ticket",
            href: "/fetching/prisma/[id]",
          },
        ],
      },
    ],
  },
  {
    id: "form",
    title: "Form",
    href: "/form",
  },
];
