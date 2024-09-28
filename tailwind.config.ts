import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#0C0D10',
        buttonPrimary: '#CDAAFF',
        headerText: '#FAFAFA',
      },
      fontFamily: {
        sohne: ['Sohne', 'sans-serif'],
        ppagrandir: ['PPAgrandir', 'sans-serif'],
        bagoss: ['Bagoss', 'sans-serif'],
      },
      screens: {
        phone: "330px",
        tablet: "640px",
        laptop: "1100px",
        "big-laptop": "1770px",
        "monitor": "1850px",
        "monitor-xl": "2000px",
        desktop: "3440px",
      },
    },
  },
  plugins: [],
};
export default config;
