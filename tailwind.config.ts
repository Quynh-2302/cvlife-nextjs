import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        xxs: "0.625rem",
        sm: ["14px", "20px"],
        base: ["16px", "20px"],
      },

      flex: {
        full: "0 0 100%",
      },
      maxWidth: {
        dashboard: "var(--dashboard-container)",
      },
      width: {
        sidebar: "var(--w-sidebar)",
      },
      height: {
        header: "var(--header-h)",
        screen: "100vh /* fallback for Opera, IE and etc. */",
      },
      zIndex: {
        header: "999",
      },
      borderWidth: {
        DEFAULT: "1.5px",
        "0": "0",
        "1": "1px",
        "2": "2px",
        "3": "3px",
        "4": "4px",
        "6": "6px",
        "8": "8px",
      },
      colors: {
        border: {
          DEFAULT: "hsl(var(--border))",
        },
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        surface: "hsl(var(--surface))",
        background: {
          DEFAULT: "hsl(var(--background))",
        },
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsla(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          light: "hsl(var(--success-light))",
        },
        error: {
          DEFAULT: "hsl(var(--error))",
          light: "hsl(var(--error-light))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          light: "hsl(var(--warning-light))",
        },
        info: {
          DEFAULT: "hsl(var(--info))",
          light: "hsl(var(--info-light))",
        },
        divider: "hsl(var(--divider))",
        neutral: {
          "0": "#FFFFFF",
          "10": "#DADADA",
          "20": "#B5B5B5",
          "30": "#909090",
          "40": "#6B6B6B",
          "50": "#464646",
          "60": "#212121",
        },
        main: {
          loyalBlueOpacity: "rgba(18, 42, 95, 0.95)",
          loyalBlue: "#122A5F",
          DEFAULT: "#133C65",
          "0": "#ECF0F4",
          "10": "#DBE4ED",
          "20": "#DBE4ED",
          "30": "#B4D2F0",
          "40": "#6391C0",
          "50": "#133C65",
          "60": "#0B233A",
        },
        readonly: {
          DEFAULT: "#E6E6E6",
          border: "#B6B6B6",
        },
        customBg: "rgba(19, 16, 14, 0.8)",
      },
      borderRadius: {
        "3xl": "36px",
        "2xl": "24px",
        xl: "16px",
        lg: "12px",
        md: "8px",
        sm: "4px",
        haft: "50%",
      },
      boxShadow: {
        active: "0 0 80px 0 rgba(0, 0, 0, 0.10)",
        menu: "0.25rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25)",
        whitelist: "0px 8px 8px 0px rgba(0, 0, 0, 0.25)",
        rwa: "10px 10px 0px 0px rgba(18, 42, 95, 1)",
        cardRwa: "10px 10px 0px 0px #122A5F",
        sumsub: "0px 0px 20px 2px rgba(185, 185, 185, 0.25)",
        blackShadow: "10px 10px 0px 0px #000",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};
export default config;
