import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        header: "url('/lmages/bg-header.png')",
        borrow: "url('/lmages/bg-borrow.png')"
      },
      // colors: {
      //   gradientBlue: "linear-gradient(255deg, #3747A6 13.69%, #A15E92 99.34%)",
      // },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#FFFFFF",
            foreground: "#1B1926", //font color
            default: "#0B154B",
            primary: {
              foreground: "#98989D",
              DEFAULT: "#A15E92",
            },
            secondary: {
              foreground: "#3A3848",
              DEFAULT: "#BB8432",
            },
            divider: "#E9E9E9",
          },
        },
      },
    }),
  ],
};
export default config;
