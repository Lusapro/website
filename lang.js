(function () {
  const DEFAULT_LANG = "no";
  const STORAGE_KEY = "site_lang";

  function setActiveButtons(lang) {
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });
  }

  function applyLanguage(lang) {
    // Bytt tekst
    document.querySelectorAll("[data-no][data-en]").forEach((el) => {
      const value = el.getAttribute(`data-${lang}`);
      if (value !== null) el.textContent = value;
    });

    // Bytt placeholders i inputs om du bruker det senere
    document.querySelectorAll("[data-no-placeholder][data-en-placeholder]").forEach((el) => {
      const value = el.getAttribute(`data-${lang}-placeholder`);
      if (value !== null) el.setAttribute("placeholder", value);
    });

    document.documentElement.lang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    setActiveButtons(lang);
  }

  function init() {
    const saved = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;

    // Knapper
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
    });

    applyLanguage(saved);
  }

  // init når DOM er klar
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
