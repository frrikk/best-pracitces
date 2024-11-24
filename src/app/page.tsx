import Page from "@/components/layout/page/page";
import { routes } from "@/app/(routes)/routes";
import Link from "next/link";

export default async function Home() {
  return (
    <Page heading="Welcome">
      {routes.map((route) => {
        return (
          <li key={route.id}>
            <Link href={route.href}>{route.title}</Link>
            {route.subRoutes && (
              <ul>
                {route.subRoutes.map((subRoute) => (
                  <li key={subRoute.id}>
                    <Link href={subRoute.href}>{subRoute.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </Page>
  );
}
