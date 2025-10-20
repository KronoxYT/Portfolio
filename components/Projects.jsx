'use client';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" style={{
      minHeight: '100vh',
      padding: '5rem 2rem',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {/* Section Title */}
        <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <h2 className="neon-text" style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontFamily: '"Courier New", monospace',
            marginBottom: '1rem'
          }}>
            {'<Proyectos />'}
          </h2>
          <div style={{
            width: '100px',
            height: '2px',
            background: 'var(--neon-green)',
            margin: '0 auto',
            boxShadow: '0 0 10px var(--neon-green)'
          }} />
          <p style={{
            color: 'var(--text-secondary)',
            fontFamily: '"Courier New", monospace',
            marginTop: '1rem',
            fontSize: '1rem'
          }}>
            {'// Algunos de mis trabajos recientes'}
          </p>
        </div>

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem'
        }}>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Project Card Component
function ProjectCard({ project, index }) {
  return (
    <div 
      className="hacker-card cyber-border scanline-hover"
      style={{
        padding: '0',
        overflow: 'hidden',
        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
      }}
    >
      {/* Image Placeholder */}
      <div style={{
        width: '100%',
        height: '200px',
        background: 'linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-tertiary) 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: '1px solid var(--border-color)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          fontSize: '3rem',
          color: 'var(--neon-green)',
          opacity: 0.2,
          fontFamily: '"Courier New", monospace'
        }}>
          {'</>'}
        </div>
        
        {/* Featured Badge */}
        {project.featured && (
          <div style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'var(--neon-cyan)',
            color: 'var(--bg-primary)',
            padding: '0.3rem 0.8rem',
            fontSize: '0.7rem',
            fontFamily: '"Courier New", monospace',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            boxShadow: '0 0 15px var(--neon-cyan)'
          }}>
            FEATURED
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: '1.5rem' }}>
        {/* Title */}
        <h3 style={{
          color: 'var(--neon-cyan)',
          fontFamily: '"Courier New", monospace',
          fontSize: '1.5rem',
          marginBottom: '1rem',
          textTransform: 'uppercase',
          letterSpacing: '2px'
        }}>
          {project.title}
        </h3>

        {/* Description */}
        <p style={{
          color: 'var(--text-secondary)',
          fontFamily: '"Courier New", monospace',
          fontSize: '0.9rem',
          lineHeight: '1.6',
          marginBottom: '1.5rem',
          minHeight: '60px'
        }}>
          {project.description}
        </p>

        {/* Technologies */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          marginBottom: '1.5rem'
        }}>
          {project.technologies.slice(0, 4).map((tech, i) => (
            <span 
              key={i}
              style={{
                color: 'var(--neon-green)',
                border: '1px solid var(--border-color)',
                padding: '0.3rem 0.8rem',
                fontSize: '0.75rem',
                fontFamily: '"Courier New", monospace',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'var(--neon-green)';
                e.target.style.color = 'var(--bg-primary)';
                e.target.style.boxShadow = '0 0 10px var(--neon-green)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = 'var(--neon-green)';
                e.target.style.boxShadow = 'none';
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div style={{
          display: 'flex',
          gap: '1rem'
        }}>
          {project.demoUrl && (
            <a 
              href={project.demoUrl}
              className="neon-button"
              style={{
                flex: 1,
                textAlign: 'center',
                fontSize: '0.8rem',
                padding: '0.8rem 1rem'
              }}
            >
              [Demo]
            </a>
          )}
          {project.repoUrl && (
            <a 
              href={project.repoUrl}
              className="neon-button"
              style={{
                flex: 1,
                textAlign: 'center',
                fontSize: '0.8rem',
                padding: '0.8rem 1rem',
                borderColor: 'var(--neon-cyan)',
                color: 'var(--neon-cyan)'
              }}
            >
              [Code]
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// Add fadeInUp animation to globals.css if not present
