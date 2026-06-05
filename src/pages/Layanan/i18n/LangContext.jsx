import { createContext, useContext, useState, useEffect } from 'react';
import strings from './strings';

const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem('lay_lang') || 'id'; }
    catch { return 'id'; }
  });

  useEffect(() => {
    try { localStorage.setItem('lay_lang', lang); } catch {}
    document.documentElement.lang = lang;
  }, [lang]);

  const toggle = () => setLang(l => (l === 'id' ? 'en' : 'id'));

  return (
    <LangContext.Provider value={{ lang, toggle, t: strings[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be within LangProvider');
  return ctx;
}
