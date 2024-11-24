"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/atoms/button";

const BackButton = () => {
  const router = useRouter();

  const handleBackClick = () => router.back();

  return <Button onClick={handleBackClick}>Back</Button>;
};

export { BackButton };
