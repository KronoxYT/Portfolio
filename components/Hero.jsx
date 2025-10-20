'use client';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = '> Desarrollador Full Stack';

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Matrix Rain Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0.05,
        pointerEvents: 'none',
        zIndex: 0
      }}>
        <MatrixRain />
      </div>

      {/* Content */}
      <div style={{
        maxWidth: '900px',
        width: '100%',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Terminal Window */}
        <div className="cyber-border" style={{
          padding: '2rem',
          background: 'var(--bg-secondary)',
          marginBottom: '2rem'
        }}>
          <div style={{
            textAlign: 'left',
            fontFamily: '"Courier New", monospace',
            fontSize: '14px',
            color: 'var(--neon-green)',
            marginBottom: '1rem'
          }}>
            <div style={{ marginBottom: '10px' }}>
              <span style={{ color: 'var(--neon-cyan)' }}>user@portfolio:~$</span> whoami
            </div>
            <div style={{ marginBottom: '10px' }}>
              <span style={{ color: 'var(--text-secondary)' }}>{'>'} Loading profile...</span>
            </div>
          </div>
        </div>

        {/* Main Title */}
        <h1 
          className="glitch neon-text" 
          data-text="[Keyler Tamayo]"
          style={{
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontWeight: 'bold',
            marginBottom: '1rem',
            fontFamily: '"Courier New", monospace',
            letterSpacing: '5px'
          }}
        >
          [Keyler Tamayo]
        </h1>

        {/* Typing Effect */}
        <div style={{
          minHeight: '50px',
          marginBottom: '2rem'
        }}>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            color: 'var(--neon-cyan)',
            fontFamily: '"Courier New", monospace'
          }}>
            {text}
            <span className="terminal-text" style={{
              animation: 'blink 0.7s infinite',
              marginLeft: '5px'
            }}>|</span>
          </h2>
        </div>

        {/* Description */}
        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.2rem)',
          color: 'var(--text-secondary)',
          maxWidth: '700px',
          margin: '0 auto 3rem',
          lineHeight: '1.8',
          fontFamily: '"Courier New", monospace'
        }}>
          <span style={{ color: 'var(--neon-green)' }}>{'// '}</span>
          Creando experiencias digitales innovadoras con código limpio y diseño impecable.
          <br/>
          <span style={{ color: 'var(--neon-green)' }}>{'// '}</span>
          Especializado en desarrollo web full stack y soluciones tecnológicas.
        </p>

        {/* CTA Buttons */}
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <a href="#projects" className="neon-button">
            [Ver Proyectos]
          </a>
          <button 
            className="neon-button" 
            style={{
              borderColor: 'var(--neon-cyan)',
              color: 'var(--neon-cyan)'
            }}
          >
            [Contactar]
          </button>
        </div>

        {/* Social Links */}
        <div style={{
          marginTop: '3rem',
          display: 'flex',
          gap: '2rem',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <SocialLink href="https://github.com/tuusuario" label="GitHub" icon="◉" />
          <SocialLink href="https://linkedin.com/in/tuusuario" label="LinkedIn" icon="◈" />
          <SocialLink href="https://twitter.com/tuusuario" label="Twitter" icon="◆" />
          <SocialLink href="mailto:keyler@email.com" label="Email" icon="✉" />
        </div>

        {/* Scroll Indicator */}
        <div style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'scan 2s infinite'
        }}>
          <div style={{
            width: '2px',
            height: '40px',
            background: 'linear-gradient(to bottom, transparent, var(--neon-green), transparent)',
            boxShadow: '0 0 10px var(--neon-green)'
          }} />
        </div>
      </div>
    </section>
  );
}

// Social Link Component
function SocialLink({ href, label, icon }) {
  return (
    <a 
      href={href}
      style={{
        color: 'var(--neon-green)',
        fontSize: '0.9rem',
        fontFamily: '"Courier New", monospace',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        transition: 'all 0.3s ease',
        padding: '0.5rem 1rem',
        border: '1px solid var(--border-color)',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}
      onMouseEnter={(e) => {
        e.target.style.textShadow = '0 0 10px var(--neon-green)';
        e.target.style.borderColor = 'var(--neon-green)';
      }}
      onMouseLeave={(e) => {
        e.target.style.textShadow = 'none';
        e.target.style.borderColor = 'var(--border-color)';
      }}
    >
      <span style={{ fontSize: '1.2rem' }}>{icon}</span>
      {'<'}{label}{'/>'}
    </a>
  );
}

// Matrix Rain Effect
function MatrixRain() {
  useEffect(() => {
    const canvas = document.getElementById('matrix-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function draw() {
      ctx.fillStyle = 'rgba(10, 14, 20, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00ff41';
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 33);
    return () => clearInterval(interval);
  }, []);

  return <canvas id="matrix-canvas" style={{ position: 'absolute', top: 0, left: 0 }} />;
}
