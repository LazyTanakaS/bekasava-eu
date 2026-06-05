import { t } from '../translations';
import type { Lang } from '../App';

interface HeroProps {
  lang: Lang;
}

export default function Hero({ lang }: HeroProps) {
  return (
    <section
      id="hero"
      style={{
        background: '#1e3028',
        padding: '80px 1.5rem',
      }}
    >
      <div
        className="hero-grid"
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'center',
        }}
      >
        <div>
          <p style={{ color: '#a8d4b2', fontSize: '0.8rem' }}>
            {t[lang].eyebrow}
          </p>
          <h1
            style={{
              color: '#eef5f0',
              fontSize: '2.5rem',
              margin: '16px 0 12px',
            }}
          >
            {t[lang].heroTitle}
          </h1>
          <p style={{ color: '#7aaa8a' }}>{t[lang].heroSub}</p>
          <button
            onClick={() =>
              document
                .getElementById('contact')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#a8d4b2';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#7aaa8a';
            }}
            style={{
              backgroundColor: '#7aaa8a',
              color: '#1e3028',
              padding: '12px 28px',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '0.95rem',
              fontWeight: 500,
              marginTop: '2rem',
              transition: 'background-color 0.2s',
            }}
          >
            {t[lang].heroBtn}
          </button>
        </div>

        <div className="hero-visual" />
      </div>
    </section>
  );
}
