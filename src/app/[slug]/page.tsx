import { db } from "@/lib/prisma";
import Image from "next/image";
import { notFound } from "next/navigation";
import ConsumptionMethodOption from "./components/consumption-method-option";

interface RestarantPageProps {
  params: Promise<{ slug: string }>;
}

const RestarantPage = async ({ params }: RestarantPageProps) => {
  const { slug } = await params;
  const restaurant = await db.restaurant.findUnique({ where: { slug } });
  if (!restaurant) {
    return notFound();
  }
  return (
    <div className="flex h-screen flex-col items-center justify-center px-6 pt-24">
      <div className="flex flex-col items-center gap-2">
        <Image
          src={restaurant.avatarImageUrl}
          alt={"restaurant.name"}
          width={82}
          height={82}
        />
        <h2 className="font-semibold">{restaurant.name}</h2>
      </div>
      <div className="pt-24 text-center space-y-2">
        <h3 className="text-2xl font font-semibold"> Seja bem vindo!</h3>
        <p className="opacity-55">
          {" "}
          Escolha como prefere aproveitar sua refeição. Estamos aqu para
          oferecer praticidade e sabor em cada detalhe!
        </p>
      </div>

      <div className="grid grid-cols-2 pt-14 gap-4">
        <ConsumptionMethodOption
          option="DINE_IN"
          slug={slug}
          buttonText="Para comer aqui"
          imageUrl="/dine_in.png"
          imageAlt="Comer aqui"
        />
        <ConsumptionMethodOption
          option="TAKEAWAY"
          slug={slug}
          buttonText="Para levar"
          imageUrl="/takeaway.png"
          imageAlt="Para levar"
        />
      </div>
    </div>
  );
};

export default RestarantPage;
