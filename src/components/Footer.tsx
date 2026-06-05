import { t } from '../translations';
import type { Lang } from '../App';
import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from './Icons';

interface FooterProps {
  lang: Lang;
}

export default function Footer({ lang }: FooterProps) {
  return (
    <footer style={{ background: '#0f1f17', padding: '2rem 1.5rem' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          gap: '2rem',
        }}
      >
        <div>
          <p style={{ color: '#a8d4b2', fontSize: '12px' }}>
            © 2026 Aksana Bekasava
          </p>
          <p style={{ color: '#a8d4b2', fontSize: '12px' }}>
            Profesionální překladatelské služby
          </p>
        </div>

        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
        >
          <a
            href={`mailto:${t[lang].contactEmail}`}
            style={{
              color: '#a8d4b2',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.55rem',
            }}
          >
            <MailIcon color="#7aaa8a" size={18} /> {t[lang].contactEmail}
          </a>
          <a
            href={`tel:${t[lang].contactPhone.replace(/\s/g, '')}`}
            style={{
              color: '#a8d4b2',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.55rem',
            }}
          >
            <PhoneIcon color="#7aaa8a" size={18} /> {t[lang].contactPhone}
          </a>
          <p
            style={{
              color: '#a8d4b2',
              fontSize: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.55rem',
            }}
          >
            <MapPinIcon color="#7aaa8a" size={18} /> {t[lang].contactAddress}
          </p>
          <p
            style={{
              color: '#a8d4b2',
              fontSize: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.55rem',
            }}
          >
            <ClockIcon color="#7aaa8a" size={18} /> {t[lang].contactHours}
          </p>
        </div>
      </div>
    </footer>
  );
}
