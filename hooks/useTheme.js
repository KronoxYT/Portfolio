// CUSTOM HOOK: useTheme
// 
// PROPÓSITO:
// - Manejar el tema (claro/oscuro) globalmente
// - Persistir preferencia del usuario
// 
// USO:
// const { theme, toggleTheme, setTheme } = useTheme();
//
// RETORNO:
// - theme: 'light' | 'dark'
// - toggleTheme: función para alternar tema
// - setTheme: función para establecer tema específico
//
// IMPLEMENTACIÓN:
// - Usar Context API (ThemeContext)
// - useState para el tema actual
// - useEffect para:
//   * Leer preferencia guardada en localStorage
//   * Detectar preferencia del sistema (prefers-color-scheme)
//   * Aplicar clase al document.documentElement
//   * Guardar cambios en localStorage
//
// CLASE EN HTML:
// - <html class="dark"> o <html class="light">
//
// CSS:
// - Usar .dark y .light selectores para estilos específicos
// - O modificar CSS variables en :root
