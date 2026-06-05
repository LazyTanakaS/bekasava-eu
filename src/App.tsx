import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ContactForm from './components/ContactForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Services from './components/Services';
import { useState, useEffect } from 'react';
import ScrollToTop from './components/ScrollToTop';
import Divider from './components/Divider';

export type Lang = 'cz' | 'ru' | 'bg' | 'be';

function App() {
  const [lang, setLang] = useState<Lang>('cz');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [lang]);

  return (
    <>
      <Navbar lang={lang} setLang={setLang} />
      <Divider fromColor="#1e3028" toColor="#f4f1eb" />
      <Hero lang={lang} />
      <Divider fromColor="#1e3028" toColor="#f4f1eb" />
      <Services lang={lang} />
      <About lang={lang} />
      <Divider fromColor="#1e3028" toColor="#f4f1eb" />
      <FAQ lang={lang} />
      <ContactForm lang={lang} />
      <Divider fromColor="#1e3028" toColor="#f4f1eb" />
      <ScrollToTop />
      <Footer lang={lang} />
    </>
  );
}

export default App;
