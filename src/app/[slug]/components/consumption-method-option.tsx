import { ConsumptionMethod } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ConsumptionMethodOptionProps {
  slug: string;
  imageUrl: string;
  imageAlt: string;
  buttonText: string;
  option: ConsumptionMethod;
}

const ConsumptionMethodOption = ({
  slug,
  imageAlt,
  imageUrl,
  buttonText,
  option,
}: ConsumptionMethodOptionProps) => {
  return (
    <Card className="p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
  <CardContent className="flex flex-col items-center gap-8 py-8">
    <div className="relative h-[80px] w-[80px]">
      <Image
        src={imageUrl}
        fill
        alt={imageAlt}
        className="object-contain"
      />
    </div>
    <Button variant="destructive" className="rounded-full" asChild>
      <Link
        href={`/${slug}/menu?consumptionMethod=${option.toString()}`}
        className="px-6 py-3 font-semibold rounded-lg hover:bg-yellow-600 transition"
      >
        {buttonText}
      </Link>
    </Button>
  </CardContent>
</Card>

  
  );
};

export default ConsumptionMethodOption;
