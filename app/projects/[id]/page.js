// ============================================
// PÁGINA DINÁMICA: Detalle de Proyecto Individual
// ============================================
// Muestra información completa de un proyecto específico

import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

// Generar rutas estáticas para todos los proyectos
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

// Metadata dinámica para SEO
export async function generateMetadata({ params }) {
  const project = projects.find((p) => p.id.toString() === params.id);
  
  if (!project) {
    return {
      title: "Proyecto no encontrado",
    };
  }

  return {
    title: `${project.title} - Mi Portfolio`,
    description: project.description,
  };
}

// Componente de la página
export default function ProjectPage({ params }) {
  // Buscar el proyecto por ID
  const project = projects.find((p) => p.id.toString() === params.id);

  // Si no existe, mostrar 404
  if (!project) {
    notFound();
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      padding: '2rem',
      maxWidth: '1200px',
      margin: '0 auto',
      color: 'var(--foreground)'
    }}>
      {/* Botón volver */}
      <Link 
        href="/#projects"
        style={{
          display: 'inline-block',
          marginBottom: '2rem',
          color: '#3b82f6',
          textDecoration: 'none',
          fontWeight: '500'
        }}
      >
        ← Volver a Proyectos
      </Link>

      {/* Título */}
      <h1 style={{ 
        fontSize: '3rem', 
        marginBottom: '1rem',
        fontWeight: 'bold'
      }}>
        {project.title}
      </h1>

      {/* Categoría */}
      <p style={{ 
        fontSize: '1.2rem', 
        opacity: '0.7',
        marginBottom: '2rem'
      }}>
        {project.category}
      </p>

      {/* Descripción */}
      <p style={{ 
        fontSize: '1.1rem', 
        lineHeight: '1.8',
        marginBottom: '2rem'
      }}>
        {project.longDescription || project.description}
      </p>

      {/* Tecnologías */}
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '600' }}>
          Tecnologías
        </h2>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {project.technologies.map((tech) => (
            <span
              key={tech}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#3b82f6',
                color: 'white',
                borderRadius: '0.5rem',
                fontSize: '0.9rem'
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Enlaces */}
      <div style={{ display: 'flex', gap: '1rem', marginTop: '3rem' }}>
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '0.75rem 2rem',
              backgroundColor: '#3b82f6',
              color: 'white',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              fontWeight: '500'
            }}
          >
            Ver Demo
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '0.75rem 2rem',
              border: '2px solid #3b82f6',
              color: '#3b82f6',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              fontWeight: '500'
            }}
          >
            Ver Código
          </a>
        )}
      </div>
    </div>
  );
}

// ============================================
// PERSONALIZACIÓN (Para mejorar):
// ============================================
// - Añade galería de imágenes del proyecto
// - Sección de features/características
// - Desafíos y soluciones
// - Navegación entre proyectos (anterior/siguiente)
// - Animaciones
// - Estilos más elaborados
