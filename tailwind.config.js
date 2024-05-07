/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        "on-primary": "var(--color-on-primary)",
        secondary: "var(--color-secondary)",
        "on-secondary": "var(--color-on-secondary)",
        tertiary: "var(--color-tertiary)",
        "on-tertiary": "var(--color-on-tertiary)",
        text: "var(--color-text)",
        "text-light": "var(--color-text-light)",
        "button-bg": "var(--color-button-bg)",
        "button-hover": "var(--color-button-hover)",
        "link": "var(--color-link)",
        "link-hover": "var(--color-link-hover)",
        info: "var(--color-info)",
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        danger: "var(--color-danger)",
        "background-base": "var(--color-background-base)",
        "background-elevated": "var(--color-background-elevated)"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

