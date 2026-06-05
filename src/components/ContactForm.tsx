import { t } from '../translations';
import { useInView } from '../hooks/useInView';
import type { Lang } from '../App';
import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from './Icons';

interface ContactFormProps {
  lang: Lang;
}

export default function ContactForm({ lang }: ContactFormProps) {
  const ref = useInView();

  return (
    <section
      ref={ref}
      className="fade-in"
      id="contact"
      style={{
        backgroundColor: '#1e3028',
        padding: '80px 1.5rem',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{ color: '#7aaa8a', fontSize: '2rem' }}>
          {t[lang].contactTitle}
        </h2>

        <div
          className="contact-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
            marginTop: '3rem',
          }}
        >
          {/* MAP */}
          <iframe
            title="Mapa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.2845771093394!2d14.449578193742779!3d50.02476319806522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b93e01889a345%3A0xc5f4ceb2fcb2ba91!2sHurbanova%201305%2F11%2C%20142%2000%20Praha%204!5e0!3m2!1sru!2scz!4v1778959209519!5m2!1sru!2scz"
            width="100%"
            height={350}
            style={{
              border: 'none',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              justifyContent: 'center',
              color: '#eef5f0',
              fontSize: '0.95rem',
            }}
          >
            <a
              href={`mailto:${t[lang].contactEmail}`}
              style={{
                color: '#eef5f0',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
              }}
            >
              <MailIcon color="#7aaa8a" size={20} /> {t[lang].contactEmail}
            </a>
            <a
              href={`tel:${t[lang].contactPhone.replace(/\s/g, '')}`}
              style={{
                color: '#eef5f0',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
              }}
            >
              <PhoneIcon color="#7aaa8a" size={20} /> {t[lang].contactPhone}
            </a>
            <p style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <MapPinIcon color="#7aaa8a" size={20} /> {t[lang].contactAddress}
            </p>
            <p style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <ClockIcon color="#7aaa8a" size={20} /> {t[lang].contactHours}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
