// src/components/Footer.jsx
import React from "react";
import { UtensilsCrossed, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-10">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Marca e descrição */}
        <div className="flex items-center gap-2">
          <div className="bg-primary-red text-white p-2 rounded-full">
            <UtensilsCrossed size={20} />
          </div>
          <span className="font-semibold text-gray-800 text-lg">
            Pede Fácil
          </span>
        </div>

        {/* Links rápidos */}
        <nav className="flex flex-wrap justify-center gap-6 text-gray-600 text-sm">
          <a href="/" className="hover:text-primary-red transition">
            Início
          </a>
          <a href="/login" className="hover:text-primary-red transition">
            Área do Restaurante
          </a>
          <a href="#" className="hover:text-primary-red transition">
            Suporte
          </a>
          <a href="#" className="hover:text-primary-red transition">
            Termos
          </a>
        </nav>

        {/* Redes sociais */}
        <div className="flex gap-4 text-gray-500">
          <a href="#" className="hover:text-primary-red transition">
            <Facebook size={20} />
          </a>
          <a href="#" className="hover:text-primary-red transition">
            <Instagram size={20} />
          </a>
          <a href="#" className="hover:text-primary-red transition">
            <Twitter size={20} />
          </a>
        </div>
      </div>

      <div className="text-center text-gray-500 text-xs py-4 border-t border-gray-200">
        © {new Date().getFullYear()} Pede Fácil — Todos os direitos reservados.
      </div>
    </footer>
  );
}
