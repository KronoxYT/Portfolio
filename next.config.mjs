// ============================================
// CONFIGURACIÓN DE NEXT.JS
// ============================================
// Aquí configuras opciones avanzadas de Next.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ============================================
  // OPCIONES DISPONIBLES (descomenta según necesites):
  // ============================================
  
  // Imágenes de dominios externos
  // images: {
  //   domains: ['ejemplo.com', 'cdn.ejemplo.com'],
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: '**.ejemplo.com',
  //     },
  //   ],
  // },

  // Variables de entorno públicas
  // env: {
  //   CUSTOM_KEY: process.env.CUSTOM_KEY,
  // },

  // Redirecciones
  // async redirects() {
  //   return [
  //     {
  //       source: '/old-route',
  //       destination: '/new-route',
  //       permanent: true,
  //     },
  //   ];
  // },

  // Headers personalizados
  // async headers() {
  //   return [
  //     {
  //       source: '/:path*',
  //       headers: [
  //         {
  //           key: 'X-Frame-Options',
  //           value: 'DENY',
  //         },
  //       ],
  //     },
  //   ];
  // },

  // Modo estricto de React (recomendado)
  // reactStrictMode: true,

  // Turbopack (más rápido que webpack, experimental)
  // experimental: {
  //   turbo: true,
  // },
};

export default nextConfig;

// ============================================
// DOCUMENTACIÓN:
// https://nextjs.org/docs/app/api-reference/next-config-js
// ============================================
