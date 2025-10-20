'use client';

export default function About() {
  const skills = {
    frontend: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'TailwindCSS'],
    backend: ['Node.js', 'Express', 'Python', 'MongoDB', 'PostgreSQL'],
    tools: ['Git', 'GitHub', 'VS Code', 'Docker', 'Figma'],
    other: ['Tauri', 'WebAssembly', 'REST APIs', 'GraphQL']
  };

  const stats = [
    { label: 'Años de Experiencia', value: '1' },
    { label: 'Proyectos Completados', value: '0' },
    { label: 'Clientes Satisfechos', value: '0' },
    { label: 'Líneas de Código', value: '100K' }
  ];

  return (
    <section id="about" style={{
      minHeight: '100vh',
      padding: '5rem 2rem',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Section Title */}
        <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <h2 className="neon-text" style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontFamily: '"Courier New", monospace',
            marginBottom: '1rem'
          }}>
            {'<Sobre_Mí />'}
          </h2>
          <div style={{
            width: '100px',
            height: '2px',
            background: 'var(--neon-green)',
            margin: '0 auto',
            boxShadow: '0 0 10px var(--neon-green)'
          }} />
        </div>

        {/* Content Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {/* Bio */}
          <div className="hacker-card" style={{
            padding: '2rem',
            gridColumn: 'span 2'
          }}>
            <h3 style={{
              color: 'var(--neon-cyan)',
              fontFamily: '"Courier New", monospace',
              fontSize: '1.5rem',
              marginBottom: '1.5rem'
            }}>
              {'// Quién Soy'}
            </h3>
            <div style={{
              color: 'var(--text-secondary)',
              fontFamily: '"Courier New", monospace',
              lineHeight: '1.8',
              fontSize: '1rem'
            }}>
              <p style={{ marginBottom: '1rem' }}>
                <span style={{ color: 'var(--neon-green)' }}>const</span> <span style={{ color: 'var(--neon-cyan)' }}>developer</span> = {'{'}
              </p>
              <p style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <span style={{ color: 'var(--text-primary)' }}>nombre:</span> <span style={{ color: 'var(--neon-pink)' }}>'Keyler Tamayo'</span>,
              </p>
              <p style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <span style={{ color: 'var(--text-primary)' }}>rol:</span> <span style={{ color: 'var(--neon-pink)' }}>'Full Stack Developer'</span>,
              </p>
              <p style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <span style={{ color: 'var(--text-primary)' }}>pasión:</span> <span style={{ color: 'var(--neon-pink)' }}>'Crear soluciones innovadoras'</span>,
              </p>
              <p style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <span style={{ color: 'var(--text-primary)' }}>objetivo:</span> <span style={{ color: 'var(--neon-pink)' }}>'Transformar ideas en realidad digital'</span>
              </p>
              <p style={{ marginBottom: '1rem' }}>{'};'}</p>
              
              <p style={{ marginTop: '1.5rem', color: 'var(--text-primary)' }}>
                Soy un desarrollador apasionado por la tecnología y la innovación. 
                Me especializo en crear aplicaciones web modernas y eficientes, 
                utilizando las últimas tecnologías y mejores prácticas del desarrollo.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          marginBottom: '4rem'
        }}>
          <SkillCategory title="Frontend" skills={skills.frontend} color="var(--neon-green)" />
          <SkillCategory title="Backend" skills={skills.backend} color="var(--neon-cyan)" />
          <SkillCategory title="Herramientas" skills={skills.tools} color="var(--neon-purple)" />
          <SkillCategory title="Otros" skills={skills.other} color="var(--neon-pink)" />
        </div>

        {/* Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem'
        }}>
          {stats.map((stat, index) => (
            <div key={index} className="hacker-card cyber-border" style={{
              padding: '2rem',
              textAlign: 'center'
            }}>
              <div className="neon-text" style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                fontFamily: '"Courier New", monospace',
                marginBottom: '0.5rem'
              }}>
                {stat.value}
              </div>
              <div style={{
                color: 'var(--text-secondary)',
                fontFamily: '"Courier New", monospace',
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Skill Category Component
function SkillCategory({ title, skills, color }) {
  return (
    <div className="hacker-card scanline-hover" style={{
      padding: '1.5rem'
    }}>
      <h4 style={{
        color: color,
        fontFamily: '"Courier New", monospace',
        fontSize: '1.2rem',
        marginBottom: '1rem',
        textTransform: 'uppercase',
        letterSpacing: '2px'
      }}>
        {'<'}{title}{' />'}
      </h4>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.8rem'
      }}>
        {skills.map((skill, index) => (
          <div key={index} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <div style={{
              width: '8px',
              height: '8px',
              background: color,
              boxShadow: `0 0 10px ${color}`
            }} />
            <span style={{
              color: 'var(--text-primary)',
              fontFamily: '"Courier New", monospace',
              fontSize: '0.9rem'
            }}>
              {skill}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
