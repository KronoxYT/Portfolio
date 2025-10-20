// ============================================
// ARCHIVO: Root Layout (Layout Principal)
// ============================================
// Este archivo envuelve TODA tu aplicación
// Aquí defines HTML base, metadata, fuentes y providers globales

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Configuración de fuentes de Google
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ============================================
// METADATA - SEO (Personaliza con tu info)
// ============================================
export const metadata = {
  title: "Mi Portfolio - Desarrollador",
  description: "Portfolio personal - Desarrollador Full Stack",
  keywords: ["portfolio", "desarrollador", "web development"],
  authors: [{ name: "Keyler Tamayo" }],
  openGraph: {
    title: "Mi Portfolio",
    description: "Portfolio personal - Desarrollador Full Stack",
    type: "website",
  },
};

// ============================================
// LAYOUT PRINCIPAL
// ============================================
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

// ============================================
// PRÓXIMOS PASOS:
// ============================================
// 1. Personalizar metadata con tu información real
// 2. Importar ThemeProvider: import { ThemeProvider } from "@/context/ThemeContext"
// 3. Importar Navbar: import Navbar from "@/components/Navbar"
// 4. Importar Footer: import Footer from "@/components/Footer"
// 5. Envolver body content con ThemeProvider
