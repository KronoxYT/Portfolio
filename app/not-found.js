// ============================================
// PÁGINA: 404 Not Found
// ============================================
// Página de error cuando se accede a una ruta inexistente

import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '2rem',
      textAlign: 'center',
      color: 'var(--foreground)'
    }}>
      {/* Código 404 */}
      <h1 style={{
        fontSize: '8rem',
        fontWeight: 'bold',
        margin: '0',
        lineHeight: '1'
      }}>
        404
      </h1>
      
      {/* Título */}
      <h2 style={{
        fontSize: '2rem',
        margin: '1rem 0',
        fontWeight: '600'
      }}>
        Página No Encontrada
      </h2>
      
      {/* Mensaje */}
      <p style={{
        fontSize: '1.1rem',
        marginBottom: '2rem',
        opacity: '0.8',
        maxWidth: '500px'
      }}>
        Oops! Esta página se perdió en el código. 
        La ruta que buscas no existe.
      </p>
      
      {/* Botón para volver */}
      <Link 
        href="/"
        style={{
          padding: '0.75rem 2rem',
          backgroundColor: '#3b82f6',
          color: 'white',
          borderRadius: '0.5rem',
          textDecoration: 'none',
          fontSize: '1rem',
          fontWeight: '500',
          transition: 'background-color 0.3s'
        }}
      >
        Volver al Inicio
      </Link>
    </div>
  );
}

// ============================================
// PERSONALIZACIÓN (Opcional):
// ============================================
// Puedes mejorar este componente con:
// - Ilustración o animación 404
// - Links a secciones principales
// - Buscador
// - Efectos con Framer Motion
// - Tu estilo personalizado
