import { db } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Twitter, Facebook } from "lucide-react";

const HomePage = async () => {
  const slug = "fsw-donalds"; // Defina o slug do restaurante aqui
  const restaurant = await db.restaurant.findUnique({ where: { slug } });

  return (
    <div className="bg-gradient-to-b from-yellow-400 to-red-500 min-h-screen flex flex-col items-center justify-center text-center px-4 relative">
      
      <Link href="/fsw-donalds">
        <Image
          src={restaurant ? restaurant.avatarImageUrl : ""}
          alt={restaurant ? restaurant.name : "Logo FSW Donalds"}
          width={64}
          height={64}
          className="w-20 h-20 m-3 mt-6 cursor-pointer"
        />
      </Link>

      <h1 className="text-4xl m-3 font-bold text-white">
        Bem-vindo ao {restaurant ? restaurant.name : "FSW Donalds"}!
      </h1>

      <p className="mt-4 m-3 text-lg text-white max-w-md">
        O melhor Fast Food do metaverso! Peça seus lanches favoritos com um
        clique.
      </p>

      <Link href="/fsw-donalds">
        <button className="mt-6 px-6 py-3 bg-white text-red-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition">
          Acessar o {restaurant ? restaurant.name : "FSW Donalds"}
        </button>
      </Link>

      <div className="flex gap-4 mt-6">
        <Link href="#" aria-label="Instagram">
          <Instagram
            size={32}
            className="text-white hover:text-gray-200 transition"
          />
        </Link>
        <Link href="#" aria-label="Twitter">
          <Twitter
            size={32}
            className="text-white hover:text-gray-200 transition"
          />
        </Link>
        <Link href="#" aria-label="Facebook">
          <Facebook
            size={32}
            className="text-white hover:text-gray-200 transition"
          />
        </Link>
      </div>

      <footer className="absolute bottom-2 text-xs text-white opacity-75">
        Desenvolvido por
        <Link
          href="https://github.com/karinacmartins"
          target="_blank"
          className="ml-1 hover:underline hover:text-gray-200"
        >
          Karina Martins
        </Link>
      </footer>
    </div>
  );
};

export default HomePage;
