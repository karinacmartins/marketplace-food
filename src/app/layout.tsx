import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { CartProvider } from "./[slug]/menu/contexts/cart";
import { Toaster } from "sonner";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FSW Donals",
  description: "Bora finalizar este projeto lindo!",
  icons: {
    icon: "/favicon.ico", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <CartProvider>{children}</CartProvider>

        <Toaster/>
      </body>
    </html>
  );
}
