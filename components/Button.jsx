// COMPONENTE: Button (Botón Reutilizable)
// 
// PROPÓSITO:
// - Botón con estilos consistentes en toda la app
// - Variantes para diferentes usos
// 
// PROPS:
// - children: contenido del botón
// - variant: 'primary' | 'secondary' | 'outline' | 'ghost'
// - size: 'sm' | 'md' | 'lg'
// - onClick: función al hacer click
// - disabled: boolean
// - icon: componente de icono (opcional)
// - href: si se provee, renderiza como Link
// - className: clases adicionales
// 
// VARIANTES:
// - primary: botón principal con color de acento
// - secondary: botón secundario con color neutral
// - outline: solo borde
// - ghost: sin fondo, solo texto
// 
// ESTADOS:
// - hover: cambio de color
// - active: efecto al presionar
// - disabled: opacidad reducida, no clickeable
// - loading: mostrar spinner (opcional)
//
// USO:
// <Button variant="primary" size="lg" onClick={handleClick}>
//   Ver Proyectos
// </Button>
