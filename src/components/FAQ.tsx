import { t } from '../translations';
import { useInView } from '../hooks/useInView';
import { useState } from 'react';
import type { Lang } from '../App';
import { ChevronIcon } from './Icons';

interface FAQProps {
  lang: Lang;
}

export default function FAQ({ lang }: FAQProps) {
  const ref = useInView();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      ref={ref}
      className="fade-in"
      id="faq"
      style={{ backgroundColor: '#f4f1eb', padding: '80px 1.5rem' }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{ color: '#1e3028', fontSize: '2rem' }}>
          {t[lang].faqTitle}
        </h2>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            marginTop: '3rem',
          }}
        >
          {t[lang].faqs.map((faq, i) => (
            <div
              className="faq-card"
              key={i}
              role="button"
              tabIndex={0}
              aria-expanded={openIndex === i}
              onClick={() => toggle(i)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggle(i);
                }
              }}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                padding: '1.5rem',
                border: '1px solid #e0dbd0',
                cursor: 'pointer',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <h3 style={{ color: '#1e3028' }}>{faq.question}</h3>
                <span
                  style={{
                    color: '#7aaa8a',
                    transition: 'transform 0.3s ease',
                    transform:
                      openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)',
                    flexShrink: 0,
                    marginLeft: '1rem',
                  }}
                >
                  <ChevronIcon color="#7aaa8a" size={20} />
                </span>
              </div>

              <div
                style={{
                  maxHeight: openIndex === i ? '500px' : '0px',
                  overflow: 'hidden',
                  transition: 'max-height 0.35s ease',
                }}
              >
                <p
                  style={{
                    color: '#7aaa8a',
                    marginTop: '1rem',
                    fontSize: '0.95rem',
                    lineHeight: '1.6',
                  }}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
