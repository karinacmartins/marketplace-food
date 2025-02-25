import { db } from "@/lib/prisma";
import Image from "next/image";
import { notFound } from "next/navigation";
import ConsumptionMethodOption from "./components/consumption-method-option";
import Link from "next/link";

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
    <div className="bg-gradient-to-b from-yellow-400 to-red-500 min-h-screen flex flex-col items-center justify-center px-6 pt-24">
      {/* Informações do restaurante */}
      <div className="flex flex-col items-center gap-3">
        <Image
          src={restaurant.avatarImageUrl}
          alt={restaurant.name}
          width={100}
          height={100}
          className="shadow-md"
        />
        <h2 className="text-2xl font-bold text-white">{restaurant.name}</h2>
      </div>

      {/* Mensagem de boas-vindas */}
      <div className="pt-16 text-center space-y-3 max-w-md">
        <h3 className="text-3xl font-semibold text-white">Seja bem-vindo!</h3>
        <p className="text-white opacity-80 text-lg">
          Escolha como prefere aproveitar sua refeição. Estamos aqui para oferecer
          praticidade e sabor em cada detalhe!
        </p>
      </div>

      {/* Opções de consumo */}
      <div className="grid grid-cols-2 pt-14 gap-6">
        <ConsumptionMethodOption
          option="DINE_IN"
          slug={slug}
          buttonText="Comer aqui"
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

      {/* Rodapé com o desenvolvedor */}
      <footer className="absolute bottom-2 text-xs text-white opacity-75">
        Desenvolvido por
        <Link href="https://github.com/karinacmartins" target="_blank" className="ml-1 hover:underline hover:text-gray-200">
          Karina Martins
        </Link>
      </footer>
    </div>
  );
};

export default RestarantPage;
