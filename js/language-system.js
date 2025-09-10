// Sistema de Troca de Linguagens

const LANG_CODES = {
  pt: 'pt-BR',
  en: 'en-US',
  es: 'es-ES',
  ru: 'ru-RU',
  de: 'de-DE',
  zh: 'zh-CN'
};

class LanguageSystem {
  constructor() {
    this.currentLanguage = 'pt';
    this.translations = {};
    this.translatableElements = [];
    this.init();
  }

  init() {
    this.currentLanguage = localStorage.getItem('selectedLanguage') || 'pt';
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setup());
    } else {
      this.setup();
    }
  }

  async setup() {
    const sel = document.getElementById('language');
    if (sel) {
      sel.value = this.currentLanguage;
      sel.addEventListener('change', e => this.changeLanguage(e.target.value));
    }
    document.documentElement.lang = this.getLangCode(this.currentLanguage);
    this.translatableElements = document.querySelectorAll('[data-lang-key]');
    await Promise.all([
      this.loadTranslations('pt'),
      this.loadTranslations(this.currentLanguage)
    ]);
    this.applyTranslations();
  }

  async changeLanguage(lang) {
    this.currentLanguage = lang;
    localStorage.setItem('selectedLanguage', lang);
    document.documentElement.lang = this.getLangCode(lang);
    await this.loadTranslations(lang);
    this.applyTranslations();
  }

  getLangCode(lang) {
    return LANG_CODES[lang] || 'pt-BR';
  }

  async loadTranslations(lang) {
    if (this.translations[lang]) return;
    try {
      const res = await fetch(`js/lang/${lang}.json`);
      if (res.ok) {
        this.translations[lang] = await res.json();
      } else {
        this.translations[lang] = {};
      }
    } catch (err) {
      console.error('Erro ao carregar idioma', lang, err);
      this.translations[lang] = {};
    }
  }

  applyTranslations() {
    const trans = this.translations[this.currentLanguage] || {};
    const fallback = this.translations['pt'] || {};
    this.translatableElements.forEach(el => {
      const key = el.getAttribute('data-lang-key');
      const value = trans[key] || fallback[key];
      if (!value) return;
      if (key === 'sobre-historia') {
        el.innerHTML = value;
      } else if (el.tagName === 'TITLE') {
        el.textContent = value;
      } else {
        el.textContent = value;
      }
    });
  }
}

// Inicialização
new LanguageSystem();

