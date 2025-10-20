// CONTEXT: Theme Context
// 
// PROPÓSITO:
// - Proveer el tema globalmente a toda la aplicación
// - Evitar prop drilling
// 
// CONTENIDO:
// 1. ThemeContext - createContext()
// 2. ThemeProvider - componente que envuelve la app
// 
// ThemeProvider DEBE:
// - Manejar estado del tema
// - Proveer funciones toggleTheme y setTheme
// - Cargar preferencia inicial (localStorage o sistema)
// - Aplicar tema al documento
// - Guardar cambios en localStorage
//
// VALOR DEL CONTEXTO:
// {
//   theme: 'light' | 'dark',
//   toggleTheme: () => void,
//   setTheme: (theme: 'light' | 'dark') => void
// }
//
// USO EN layout.js:
// <ThemeProvider>
//   <body>
//     {children}
//   </body>
// </ThemeProvider>
//
// USO EN COMPONENTES:
// const { theme, toggleTheme } = useContext(ThemeContext);
