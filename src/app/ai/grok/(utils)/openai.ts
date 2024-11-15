import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.NEXT_GROK_API_KEY,
  baseURL: process.env.NEXT_X_AI_URL,
});

export async function completion({ input }: { input: string }) {
  const response = await openai.chat.completions.create({
    max_tokens: 120,
    model: "grok-beta",
    messages: [{ role: "user", content: input }],
  });

  await fetch("http://localhost:4000/response", {
    method: "POST",
    body: JSON.stringify({
      id: response.id,
      message: response.choices[0].message.content,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return { response };
}
