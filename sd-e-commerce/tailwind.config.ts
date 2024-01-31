import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      "light-green": "#00ff9f",
      "light-blue": "#00b8ff",
      "dark-blue": "#001eff",
      "dark-violet": "#bd00ff",
      "dark-pink": "#d600ff",
    },
  },
  plugins: [],
};
export default config;
