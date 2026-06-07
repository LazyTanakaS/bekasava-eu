import { t } from '../translations';
import { useInView } from '../hooks/useInView';
import type { Lang } from '../App';
import { useCounter } from '../hooks/useCount';
import React from 'react';

interface AboutProps {
  lang: Lang;
}

export default function About({ lang }: AboutProps) {
  const ref = useInView();
  const { count, ref: countRef } = useCounter(20);

  return (
    <section
      ref={ref}
      className="fade-in"
      id="about"
      style={{ backgroundColor: '#1e3028', padding: '80px 1.5rem' }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div
          className="about-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1.5rem',
          }}
        >
          <img
            src="./aksana.jpg"
            alt="Mgr. Aksana Bekasava Ph.D."
            style={{
              width: '100%',
              height: '450px',
              objectFit: 'cover',
              objectPosition: 'center 100%',
              borderRadius: '16px',
            }}
          />
          <div>
            <p style={{ color: '#a8d4b2', fontSize: '0.8rem' }}>
              {t[lang].aboutEyebrow}
            </p>
            <h2
              style={{
                color: '#eef5f0',
                fontSize: '2rem',
                margin: '16px 0 12px',
              }}
            >
              {t[lang].aboutTitle}
            </h2>
            <p style={{ color: '#a8d4b2' }}>{t[lang].aboutText}</p>
            <p style={{ color: '#a8d4b2', marginTop: '1rem' }}>
              {t[lang].pricingText}
            </p>
            <div
              ref={countRef as React.RefObject<HTMLDivElement>}
              style={{
                marginTop: '2rem',
                display: 'flex',
                alignItems: 'baseline',
                gap: '0.5rem',
              }}
            >
              <span
                style={{
                  fontSize: '3.5rem',
                  fontWeight: 700,
                  color: '#7aaa8a',
                }}
              >
                {count}+
              </span>
              <span style={{ color: '#a8d4b2', fontSize: '0.95rem' }}>
                {lang === 'cz'
                  ? 'let zkušeností'
                  : lang === 'ru'
                    ? 'лет опыта'
                    : lang === 'bg'
                      ? 'години опит'
                      : 'гадоў вопыту'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
