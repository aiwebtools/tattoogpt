
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        tattoo: {
          dark: '#0F0E17',
          darker: '#080814',
          neon: '#FF3864',
          cyan: '#3BEEAB',
          purple: '#9370DB',
          blue: '#1EAEDB',
          accent: '#F25F4C',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'pulse-neon': {
          '0%, 100%': { 
            boxShadow: '0 0 5px rgba(255, 56, 100, 0.5), 0 0 10px rgba(255, 56, 100, 0.3)' 
          },
          '50%': { 
            boxShadow: '0 0 20px rgba(255, 56, 100, 0.8), 0 0 30px rgba(255, 56, 100, 0.5)' 
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
        'slide-up': {
          '0%': { transform: 'translateY(100px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-100px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'slide-left': {
          '0%': { transform: 'translateX(100px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        'slide-right': {
          '0%': { transform: 'translateX(-100px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'pulse-neon': 'pulse-neon 2s infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'slide-up': 'slide-up 0.7s ease-out',
        'slide-down': 'slide-down 0.7s ease-out',
        'slide-left': 'slide-left 0.7s ease-out',
        'slide-right': 'slide-right 0.7s ease-out',
        'fade-in': 'fade-in 0.7s ease-out',
      },
      backgroundImage: {
        'cyber-grid': "linear-gradient(to right, rgba(59, 238, 171, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(59, 238, 171, 0.1) 1px, transparent 1px)",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'neon-glow': 'linear-gradient(90deg, rgba(255,56,100,0) 0%, rgba(255,56,100,0.2) 50%, rgba(255,56,100,0) 100%)',
      },
      boxShadow: {
        'neon': '0 0 5px rgba(255, 56, 100, 0.5), 0 0 10px rgba(255, 56, 100, 0.3)',
        'neon-strong': '0 0 10px rgba(255, 56, 100, 0.7), 0 0 20px rgba(255, 56, 100, 0.5)',
        'neon-cyan': '0 0 5px rgba(59, 238, 171, 0.5), 0 0 10px rgba(59, 238, 171, 0.3)',
        'neon-purple': '0 0 5px rgba(147, 112, 219, 0.5), 0 0 10px rgba(147, 112, 219, 0.3)',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
