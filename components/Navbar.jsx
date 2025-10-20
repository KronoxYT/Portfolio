'use client';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#' },
    { name: 'Sobre_Mí', href: '#about' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Contacto', href: '#contact' }
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: scrolled ? 'var(--bg-secondary)' : 'transparent',
      borderBottom: scrolled ? '1px solid var(--border-color)' : '1px solid transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      transition: 'all 0.3s ease',
      boxShadow: scrolled ? '0 5px 20px rgba(0, 255, 65, 0.1)' : 'none'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo */}
        <a href="#" style={{
          fontFamily: '"Courier New", monospace',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: 'var(--neon-green)',
          textShadow: '0 0 10px var(--neon-green)',
          letterSpacing: '2px',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.textShadow = '0 0 20px var(--neon-green), 0 0 40px var(--neon-green)';
        }}
        onMouseLeave={(e) => {
          e.target.style.textShadow = '0 0 10px var(--neon-green)';
        }}>
          {'<Dev />'}
        </a>

        {/* Desktop Navigation */}
        <div style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center'
        }}>
          <div style={{
            display: 'flex',
            gap: '2rem'
          }}>
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                style={{
                  fontFamily: '"Courier New", monospace',
                  color: 'var(--text-primary)',
                  fontSize: '0.9rem',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  position: 'relative',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = 'var(--neon-cyan)';
                  e.target.style.textShadow = '0 0 10px var(--neon-cyan)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'var(--text-primary)';
                  e.target.style.textShadow = 'none';
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Terminal Status Indicator */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontFamily: '"Courier New", monospace',
            fontSize: '0.8rem',
            color: 'var(--neon-green)'
          }}>
            <div style={{
              width: '8px',
              height: '8px',
              background: 'var(--neon-green)',
              borderRadius: '50%',
              boxShadow: '0 0 10px var(--neon-green)',
              animation: 'flicker 2s infinite'
            }} />
            <span>ONLINE</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'none',
            background: 'transparent',
            border: '2px solid var(--neon-green)',
            color: 'var(--neon-green)',
            padding: '0.5rem',
            cursor: 'pointer',
            fontFamily: '"Courier New", monospace',
            fontSize: '1.2rem'
          }}
        >
          {mobileMenuOpen ? '[X]' : '[≡]'}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={{
          background: 'var(--bg-secondary)',
          borderTop: '1px solid var(--border-color)',
          padding: '1rem 2rem'
        }}>
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                display: 'block',
                fontFamily: '"Courier New", monospace',
                color: 'var(--text-primary)',
                fontSize: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                padding: '1rem 0',
                borderBottom: '1px solid var(--border-color)'
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
