// CUSTOM HOOK: useActiveSection
// 
// PROPÓSITO:
// - Detectar qué sección está visible en el viewport
// - Actualizar el indicador activo en el navbar
// 
// USO:
// const activeSection = useActiveSection(['home', 'about', 'projects', 'contact']);
//
// PARÁMETROS:
// - sectionIds: array de IDs de las secciones a observar
//
// RETORNO:
// - activeSection: string con el ID de la sección activa
//
// IMPLEMENTACIÓN:
// - Usar Intersection Observer API
// - Detectar cuando una sección entra al viewport
// - Actualizar estado con la sección más visible
// - Cleanup del observer al desmontar
//
// OPCIONES DE INTERSECTION OBSERVER:
// - threshold: 0.5 (50% visible)
// - rootMargin: para ajustar el punto de activación
