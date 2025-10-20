'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/KronoxYT', code: '◉', symbol: '<>' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/Keyler-Tamayo', code: '◈', symbol: 'in' },
    { name: 'Twitter', url: 'https://twitter.com/tuusuario', code: '◆', symbol: 'tw' },
    { name: 'Email', url: 'mailto:keylertamayo@gmail.com', code: '✉', symbol: '@' }
  ];

  return (
    <footer style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-color)',
      padding: '3rem 2rem 1rem',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          {/* About Section */}
          <div>
            <h3 style={{
              fontFamily: '"Courier New", monospace',
              color: 'var(--neon-green)',
              fontSize: '1.5rem',
              marginBottom: '1rem',
              textShadow: '0 0 10px var(--neon-green)'
            }}>
              {'<Dev />'}
            </h3>
            <p style={{
              fontFamily: '"Courier New", monospace',
              color: 'var(--text-secondary)',
              fontSize: '0.9rem',
              lineHeight: '1.6'
            }}>
              <span style={{ color: 'var(--neon-green)' }}>{'// '}</span>
              Desarrollador Full Stack
              <br />
              <span style={{ color: 'var(--neon-green)' }}>{'// '}</span>
              Creando soluciones digitales
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontFamily: '"Courier New", monospace',
              color: 'var(--neon-cyan)',
              fontSize: '1rem',
              marginBottom: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}>
              {'<Links />'}
            </h4>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.8rem'
            }}>
              {['Inicio', 'Sobre_Mí', 'Proyectos', 'Contacto'].map((link, index) => (
                <a
                  key={index}
                  href={`#${link.toLowerCase().replace('_', '')}`}
                  style={{
                    fontFamily: '"Courier New", monospace',
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = 'var(--neon-cyan)';
                    e.target.style.textShadow = '0 0 10px var(--neon-cyan)';
                    e.target.style.paddingLeft = '10px';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = 'var(--text-secondary)';
                    e.target.style.textShadow = 'none';
                    e.target.style.paddingLeft = '0';
                  }}
                >
                  {'> '}{link}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 style={{
              fontFamily: '"Courier New", monospace',
              color: 'var(--neon-purple)',
              fontSize: '1rem',
              marginBottom: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}>
              {'<Social />'}
            </h4>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.8rem'
            }}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  style={{
                    fontFamily: '"Courier New", monospace',
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = 'var(--neon-purple)';
                    e.target.style.textShadow = '0 0 10px var(--neon-purple)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = 'var(--text-secondary)';
                    e.target.style.textShadow = 'none';
                  }}
                >
                  <span style={{ 
                    color: 'var(--neon-green)', 
                    marginRight: '0.5rem',
                    fontSize: '1.1rem'
                  }}>
                    {social.code}
                  </span>
                  {social.symbol} {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{
          width: '100%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, var(--neon-green), transparent)',
          marginBottom: '2rem',
          boxShadow: '0 0 10px var(--neon-green)'
        }} />

        {/* Bottom Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <p style={{
            fontFamily: '"Courier New", monospace',
            color: 'var(--text-dim)',
            fontSize: '0.85rem'
          }}>
            <span style={{ color: 'var(--neon-green)' }}>©</span> {currentYear} <span style={{ color: 'var(--neon-cyan)' }}>{'<Dev />'}</span>. Todos los derechos reservados.
          </p>
          <p style={{
            fontFamily: '"Courier New", monospace',
            color: 'var(--text-dim)',
            fontSize: '0.85rem'
          }}>
            Hecho con <span style={{ color: 'var(--neon-pink)' }}>♥</span> y <span style={{ color: 'var(--neon-cyan)' }}>Next.js</span>
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="neon-button"
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          width: '50px',
          height: '50px',
          padding: '0',
          fontSize: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 100
        }}
        title="Volver arriba"
      >
        ↑
      </button>
    </footer>
  );
}
