import React, { useEffect, useState } from "react";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "hi", label: "Hindi" },
  { code: "gu", label: "Gujarati" },
  { code: "es", label: "Spanish" },
];

const FONT_SIZES = [
  { value: "small", label: "Small" },
  { value: "medium", label: "Medium" },
  { value: "large", label: "Large" },
];

const DEFAULT_SETTINGS = {
  theme: "light",
  fontSize: "medium",
  language: "en",
};

const Settings = () => {
  const [theme, setTheme] = useState(DEFAULT_SETTINGS.theme);
  const [fontSize, setFontSize] = useState(DEFAULT_SETTINGS.fontSize);
  const [language, setLanguage] = useState(DEFAULT_SETTINGS.language);

  // Load from localStorage or system preference on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const storedFontSize = localStorage.getItem("fontSize");
    const storedLanguage = localStorage.getItem("language");

    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    } else {
      // system preference fallback
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", prefersDark);
    }

    if (storedFontSize) {
      setFontSize(storedFontSize);
      document.documentElement.style.fontSize =
        storedFontSize === "small"
          ? "14px"
          : storedFontSize === "large"
          ? "18px"
          : "16px";
    }

    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  // Save theme toggle
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  // Change font size
  const handleFontSizeChange = (e) => {
    const size = e.target.value;
    setFontSize(size);
    localStorage.setItem("fontSize", size);

    document.documentElement.style.fontSize =
      size === "small" ? "14px" : size === "large" ? "18px" : "16px";
  };

  // Change language
  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  // Reset all to default
  const resetDefaults = () => {
    setTheme(DEFAULT_SETTINGS.theme);
    setFontSize(DEFAULT_SETTINGS.fontSize);
    setLanguage(DEFAULT_SETTINGS.language);

    document.documentElement.classList.toggle("dark", false);
    document.documentElement.style.fontSize = "16px";

    localStorage.removeItem("theme");
    localStorage.removeItem("fontSize");
    localStorage.removeItem("language");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold">Settings</h1>

      {/* Theme Toggle */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Theme</h2>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
          aria-label="Toggle theme"
          title="Toggle dark/light mode"
        >
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </section>

      {/* Font Size */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Font Size</h2>
        <select
          value={fontSize}
          onChange={handleFontSizeChange}
          className="px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          aria-label="Select font size"
        >
          {FONT_SIZES.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </section>

      {/* Language */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Language</h2>
        <select
          value={language}
          onChange={handleLanguageChange}
          className="px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          aria-label="Select language"
        >
          {LANGUAGES.map(({ code, label }) => (
            <option key={code} value={code}>
              {label}
            </option>
          ))}
        </select>
      </section>

      {/* Reset Button */}
      <section>
        <button
          onClick={resetDefaults}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
          aria-label="Reset settings to default"
          title="Reset all settings to default"
        >
          Reset to Default
        </button>
      </section>
    </div>
  );
};

export default Settings;
