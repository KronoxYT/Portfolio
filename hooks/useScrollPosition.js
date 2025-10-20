// CUSTOM HOOK: useScrollPosition
// 
// PROPÓSITO:
// - Detectar la posición del scroll
// - Útil para cambiar estilos del navbar, mostrar botón "volver arriba"
// 
// USO:
// const scrollPosition = useScrollPosition();
//
// RETORNO:
// - scrollY: número con la posición vertical del scroll
//
// IMPLEMENTACIÓN:
// - Usar useState para guardar posición
// - useEffect con event listener de 'scroll'
// - Cleanup del listener al desmontar
// - Opcional: debounce para mejor performance
//
// EJEMPLO DE USO:
// En Navbar.jsx:
//   const scrollY = useScrollPosition();
//   const isScrolled = scrollY > 50;
//   // Aplicar clase 'scrolled' al navbar si isScrolled es true
