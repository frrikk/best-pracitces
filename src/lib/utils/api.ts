import { revalidatePath } from "next/cache";

type Request = {
  url: string;
  method?: "GET" | "POST";
  body?: unknown;
};

async function request({ url, method = "GET", body }: Request) {
  const options: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  };

  if (method === "GET") {
    delete options.headers;
    delete options.body;
  }

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Failed to fetch ${method} data`);
  }

  return await response.json();
}

export const API = {
  GET: async ({ url }: Request) => await request({ url }),
  POST: async ({ url, body, method }: Request) =>
    await request({ url, body, method }),
} as const;

type Mutate<T> = {
  url: string;
  data: T;
};

export async function mutate<T>({ url, data }: Mutate<T>) {
  const options: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  await res.json();
}

// export const api = {
//   post: async ({ url, data }: Mutate<any>) => await mutate({ url, data }),
// } as const;
