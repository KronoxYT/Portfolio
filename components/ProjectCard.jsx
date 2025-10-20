// COMPONENTE: ProjectCard (Tarjeta de Proyecto)
// 
// PROPÓSITO:
// - Card reutilizable para mostrar un proyecto individual
// - Usado dentro del componente Projects
// 
// PROPS ESPERADAS:
// - project: {
//     id: number/string
//     title: string
//     description: string
//     image: string (URL de imagen)
//     technologies: array de strings
//     demoUrl: string (link a demo)
//     repoUrl: string (link a repositorio)
//   }
// 
// SUGERENCIAS DE DISEÑO:
// - Imagen de portada con overlay
// - Título prominente
// - Descripción limitada (2-3 líneas con ellipsis)
// - Tags de tecnologías como badges
// - Botones de acción (Ver Demo, Código)
// - Hover effect: elevar card, mostrar más info
// 
// ESTADOS:
// - isHovered (mostrar overlay con detalles)
//
// ACCESIBILIDAD:
// - Alt text en imágenes
// - Links con aria-label
// - Keyboard navigation
