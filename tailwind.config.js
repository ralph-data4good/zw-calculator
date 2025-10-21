/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Eco Design System Colors
        eco: {
          soft: {
            1: 'var(--eco-soft-green-1)',
            2: 'var(--eco-soft-green-2)',
            3: 'var(--eco-soft-green-3)',
            4: 'var(--eco-soft-green-4)',
          },
          vibrant: {
            1: 'var(--eco-vibrant-green-1)',
            2: 'var(--eco-vibrant-green-2)',
            3: 'var(--eco-vibrant-green-3)',
          },
          accent: {
            1: 'var(--eco-accent-yellow-1)',
            2: 'var(--eco-accent-yellow-2)',
            3: 'var(--eco-accent-yellow-3)',
          },
          navy: {
            1: 'var(--eco-navy-1)',
            2: 'var(--eco-navy-2)',
            3: 'var(--eco-navy-3)',
          },
        },
        brand: {
          400: 'var(--brand-400)',
          500: 'var(--brand-500)',
          600: 'var(--brand-600)',
        },
        bg: 'var(--bg)',
        'bg-muted': 'var(--bg-muted)',
        'bg-card': 'var(--bg-card)',
        fg: 'var(--fg)',
        'fg-muted': 'var(--fg-muted)',
        border: 'var(--border)',
        'border-muted': 'var(--border-muted)',
        primary: 'var(--primary)',
        'primary-light': 'var(--primary-light)',
        'primary-dark': 'var(--primary-dark)',
        'primary-contrast': 'var(--primary-contrast)',
        accent: 'var(--accent)',
        'accent-dark': 'var(--accent-dark)',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        pill: 'var(--radius-pill)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
      },
      spacing: {
        xs: 'var(--spacing-xs)',
        sm: 'var(--spacing-sm)',
        md: 'var(--spacing-md)',
        lg: 'var(--spacing-lg)',
        xl: 'var(--spacing-xl)',
        '2xl': 'var(--spacing-2xl)',
        '3xl': 'var(--spacing-3xl)',
        '4xl': 'var(--spacing-4xl)',
      },
      transitionDuration: {
        fast: 'var(--transition-fast)',
        normal: 'var(--transition-normal)',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [],
}

