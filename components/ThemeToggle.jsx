// COMPONENTE: ThemeToggle (Botón de Cambio de Tema)
// 
// PROPÓSITO:
// - Permitir al usuario cambiar entre tema claro y oscuro
// - Mejorar la experiencia de usuario
// 
// FUNCIONALIDADES:
// - Toggle button (sol/luna)
// - Guardar preferencia en localStorage
// - Aplicar tema al cargar la página
// - Transición suave entre temas
// - Responder a la preferencia del sistema (prefers-color-scheme)
// 
// ESTADOS:
// - theme: 'light' | 'dark'
// 
// IMPLEMENTACIÓN:
// - Usar Context API para compartir tema globalmente
// - Crear ThemeContext y ThemeProvider
// - Modificar CSS variables en :root según el tema
// 
// DISEÑO:
// - Botón con icono (sol para modo claro, luna para oscuro)
// - Animación de transición del icono
// - Ubicar en Navbar
//
// VARIABLES CSS A MODIFICAR:
// - --background
// - --foreground
// - --primary
// - --secondary
// - etc.
