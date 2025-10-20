// COMPONENTE: ScrollToTop (Botón Volver Arriba)
// 
// PROPÓSITO:
// - Botón flotante para volver al inicio de la página
// - Aparece solo cuando el usuario ha hecho scroll
// 
// FUNCIONALIDAD:
// - Mostrar solo cuando scrollY > 300px
// - Al hacer click, scroll suave hasta el top
// - Animación de entrada/salida
// - Posición fija en esquina inferior derecha
// 
// ESTADOS:
// - isVisible: boolean (mostrar/ocultar basado en scroll position)
//
// DISEÑO:
// - Botón circular con icono de flecha arriba
// - Sombra para que se destaque
// - Transición suave al aparecer/desaparecer
// - z-index alto para que esté sobre todo
// 
// ICONOS:
// - Usar icono de flecha hacia arriba (ChevronUp, ArrowUp)
// - De librería lucide-react o similar
//
// HOOK A USAR:
// - useScrollPosition() para detectar posición del scroll
