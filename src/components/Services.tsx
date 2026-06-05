import { t } from '../translations';
import { useInView } from '../hooks/useInView';
import type { Lang } from '../App';
import { BuildingIcon, FileTextIcon, ScaleIcon } from './Icons';

interface ServicesProps {
  lang: Lang;
}

const icons = [
  <FileTextIcon key="file" color="#7aaa8a" size={38} />,
  <BuildingIcon key="building" color="#7aaa8a" size={38} />,
  <ScaleIcon key="scale" color="#7aaa8a" size={38} />,
];

export default function Services({ lang }: ServicesProps) {
  const ref = useInView();

  return (
    <section
      ref={ref}
      className="fade-in"
      id="services"
      style={{
        backgroundColor: '#f4f1eb',
        padding: '80px 1.5rem',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        <h2 style={{ color: '#1e3028', fontSize: '2rem' }}>
          {t[lang].servicesTitle}
        </h2>

        <div
          className="services-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
            marginTop: '3rem',
          }}
        >
          {t[lang].cards.map((card, i) => (
            <div
              className="service-card"
              key={i}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                padding: '2rem',
                border: '1px solid #e0dbd0',
              }}
            >
              <span>{icons[i]}</span>
              <h3 style={{ color: '#1e3028', marginTop: '1rem' }}>
                {card.title}
              </h3>
              <p
                style={{
                  color: '#7aaa8a',
                  fontSize: '0.9rem',
                  marginTop: '0.5rem',
                }}
              >
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
