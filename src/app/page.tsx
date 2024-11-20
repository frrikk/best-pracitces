import { PetApi } from "@/data/generated/axios";

const pet = new PetApi();

export default async function Home() {
  const { data } = await pet.findPetsByStatus("available");
  const petName = data.map((i) => i.name);

  return <div>{petName}</div>;
}
