import { useEffect, useState } from 'react';
import type { Lang } from '../App';
import { CloseIcon, MenuIcon } from './Icons';

const links = {
  cz: ['Služby', 'O mně', 'FAQ', 'Kontakt'],
  ru: ['Услуги', 'Обо мне', 'FAQ', 'Контакт'],
  bg: ['Услуги', 'За мен', 'FAQ', 'Контакт'],
  be: ['Паслугі', 'Пра мяне', 'FAQ', 'Кантакт'],
};

const anchors = ['#services', '#about', '#faq', '#contact'];
const sections = ['services', 'about', 'faq', 'contact'];

interface NavbarProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export default function Navbar({ lang, setLang }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      style={{
        background: '#1e3028',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        borderBottom: '0.5px solid #253d30',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 1.5rem',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* LOGO */}
        <a
          href="#hero"
          style={{
            color: '#d4e8d8',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: 500,
            letterSpacing: '0.01em',
          }}
        >
          Bekasava{' '}
          <span style={{ color: '#7aaa8a', fontWeight: 400 }}>· Překlady</span>
        </a>

        {/* DESCTOP MENU */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
          }}
          className="desktop-nav"
        >
          {links[lang].map((label, i) => {
            const isActive = activeSection === anchors[i].slice(1);
            return (
              <a
                key={i}
                href={anchors[i]}
                style={{
                  color: isActive ? '#eef5f0' : '#7aaa8a',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: isActive ? 500 : 400,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#a8d4b2')}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = isActive
                    ? '#eef5f0'
                    : '#7aaa8a')
                }
              >
                {label}
              </a>
            );
          })}

          {/* LANGUAGE */}
          <div style={{ display: 'flex', gap: '4px' }}>
            {(['cz', 'ru', 'bg', 'be'] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                style={{
                  background: lang === l ? '#7aaa8a' : 'transparent',
                  color: lang === l ? '#1e3028' : '#a8d4b2',
                  border: '1px solid #7aaa8a',
                  borderRadius: '4px',
                  padding: '3px 10px',
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                  transition: 'all 0.2s',
                }}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        {/* BURGER MENU */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#a8d4b2',
            fontSize: '1.5rem',
            transition: 'transform 0.3s ease',
            transform: menuOpen ? 'rotate(90deg)' : 'rotate(0deg)',
          }}
          className="burger"
        >
          {menuOpen ? (
            <CloseIcon color="#a8d4b2" size={26} />
          ) : (
            <MenuIcon color="#a8d4b2" size={26} />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        style={{
          background: '#253d30',
          overflow: 'hidden',
          maxHeight: menuOpen ? '400px' : '0px',
          transition: 'max-height 0.35s ease',
        }}
      >
        <div
          style={{
            padding: '1rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {links[lang].map((label, i) => (
            <a
              key={i}
              href={anchors[i]}
              onClick={() => setMenuOpen(false)}
              style={{
                color: '#a8d4b2',
                textDecoration: 'none',
                fontSize: '1rem',
              }}
            >
              {label}
            </a>
          ))}
        </div>

        <div
          style={{
            display: 'flex',
            gap: '8px',
            marginTop: '0.5rem',
          }}
        >
          {(['cz', 'ru', 'bg', 'be'] as const).map((l) => (
            <button
              key={l}
              onClick={() => {
                setLang(l);
                setMenuOpen(false);
              }}
              style={{
                background: lang === l ? '#7aaa8a' : 'transparent',
                color: lang === l ? '#1e3028' : '#7aaa8a',
                border: '1px solid #7aaa8a',
                borderRadius: '4px',
                padding: '4px 12px',
                fontSize: '0.85rem',
                cursor: 'pointer',
                textTransform: 'uppercase',
              }}
            >
              {l}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
