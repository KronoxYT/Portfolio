// ============================================
// PÁGINA: Loading State
// ============================================
// Next.js muestra automáticamente este componente
// durante la carga de páginas dinámicas

export default function Loading() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      flexDirection: 'column',
      gap: '1rem'
    }}>
      {/* Spinner simple */}
      <div className="spinner" />
      
      <p style={{ color: 'var(--foreground)' }}>Cargando...</p>
    </div>
  );
}

// ============================================
// PERSONALIZACIÓN (Opcional):
// ============================================
// Puedes mejorar este componente con:
// - Tu logo animado
// - Skeleton screens
// - Progress bar
// - Animaciones con Framer Motion
// - Estilos más elaborados con Tailwind
