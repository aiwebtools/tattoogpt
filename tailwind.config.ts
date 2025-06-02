
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
          dark: '#0a0a1a',
          darker: '#060610',
          neon: '#ff3864',
          cyan: '#3beeab',
          purple: '#9370db',
          blue: '#1eaedb',
          accent: '#f25f4c',
          gold: '#ffd700',
          silver: '#c0c0c0',
          platinum: '#e5e4e2',
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
            boxShadow: '0 0 5px rgba(255, 56, 100, 0.5), 0 0 10px rgba(255, 56, 100, 0.3), 0 0 20px rgba(255, 56, 100, 0.1)' 
          },
          '50%': { 
            boxShadow: '0 0 20px rgba(255, 56, 100, 0.8), 0 0 30px rgba(255, 56, 100, 0.6), 0 0 40px rgba(255, 56, 100, 0.3)' 
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '33%': { transform: 'translateY(-15px) rotate(1deg)' },
          '66%': { transform: 'translateY(-5px) rotate(-1deg)' },
        },
        'glow': {
          '0%, 100%': { opacity: 1, filter: 'brightness(1)' },
          '50%': { opacity: 0.8, filter: 'brightness(1.2)' },
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
          '0%': { opacity: 0, transform: 'scale(0.95)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        'mystical-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(255, 56, 100, 0.3), 0 0 40px rgba(59, 238, 171, 0.2), 0 0 60px rgba(147, 112, 219, 0.1)' 
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(255, 56, 100, 0.6), 0 0 80px rgba(59, 238, 171, 0.4), 0 0 120px rgba(147, 112, 219, 0.3)' 
          },
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'aurora': {
          '0%, 100%': {
            backgroundPosition: '0% 50%'
          },
          '50%': {
            backgroundPosition: '100% 50%'
          }
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'pulse-neon': 'pulse-neon 3s infinite',
        'float': 'float 8s ease-in-out infinite',
        'glow': 'glow 4s ease-in-out infinite',
        'slide-up': 'slide-up 0.8s ease-out',
        'slide-down': 'slide-down 0.8s ease-out',
        'slide-left': 'slide-left 0.8s ease-out',
        'slide-right': 'slide-right 0.8s ease-out',
        'fade-in': 'fade-in 0.8s ease-out',
        'mystical-glow': 'mystical-glow 4s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'aurora': 'aurora 10s ease-in-out infinite',
      },
      backgroundImage: {
        'cyber-grid': "linear-gradient(to right, rgba(59, 238, 171, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(59, 238, 171, 0.15) 1px, transparent 1px)",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'neon-glow': 'linear-gradient(90deg, rgba(255,56,100,0) 0%, rgba(255,56,100,0.3) 50%, rgba(255,56,100,0) 100%)',
        'aurora-gradient': 'linear-gradient(-45deg, #ff3864, #3beeab, #9370db, #1eaedb)',
        'mystical-gradient': 'linear-gradient(135deg, rgba(255,56,100,0.1) 0%, rgba(59,238,171,0.1) 25%, rgba(147,112,219,0.1) 50%, rgba(30,174,219,0.1) 75%, rgba(255,56,100,0.1) 100%)',
      },
      boxShadow: {
        'neon': '0 0 5px rgba(255, 56, 100, 0.5), 0 0 10px rgba(255, 56, 100, 0.3), 0 0 15px rgba(255, 56, 100, 0.1)',
        'neon-strong': '0 0 10px rgba(255, 56, 100, 0.7), 0 0 20px rgba(255, 56, 100, 0.5), 0 0 30px rgba(255, 56, 100, 0.3)',
        'neon-cyan': '0 0 5px rgba(59, 238, 171, 0.5), 0 0 10px rgba(59, 238, 171, 0.3), 0 0 15px rgba(59, 238, 171, 0.1)',
        'neon-purple': '0 0 5px rgba(147, 112, 219, 0.5), 0 0 10px rgba(147, 112, 219, 0.3), 0 0 15px rgba(147, 112, 219, 0.1)',
        'mystical': '0 0 60px rgba(255, 56, 100, 0.2), 0 0 100px rgba(59, 238, 171, 0.1), 0 0 140px rgba(147, 112, 219, 0.05)',
        'divine': '0 0 80px rgba(255, 215, 0, 0.3), 0 0 120px rgba(255, 56, 100, 0.2), 0 0 160px rgba(59, 238, 171, 0.1)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
      },
      backdropBlur: {
        '3xl': '64px',
        '4xl': '128px',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
