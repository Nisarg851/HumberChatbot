/** @type {import('tailwindcss').Config} */

import { transform } from 'typescript';

// eslint-disable-next-line no-undef, @typescript-eslint/no-var-requires
const {nextui} = require("@nextui-org/theme");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/@nextui-org/theme/dist/components/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      keyframes: {
        "slide-in-from-right": {
          "0%": {transform: "translate(100%)", transformOrigin: "right"},
          "100%": {transform: "translate(0%)"}
        },
        "slide-in-from-left": {
          "0%": {transform: "translate(-100%)", transformOrigin: "left"},
          "100%": {transform: "translate(0%)"}
        },
        "pop-in": {
          "0%": {width: "0", height: "0", display: "hidden"},
          "100%": {width: "w-[80vw]", height: "400px", display: "block"}
        },
        "flip-in": {
          "0%": {transform: "rotateX(90deg)", display: "hidden"},
          "100%": {transform: "rotateX(0deg)", display: "block"}
        }
      },
      animation: {
        "slide-in-from-right": "slide-in-from-right 0.8s ease",
        "slide-in-from-left": "slide-in-from-left 0.8s ease",
        "pop-in": "pop-in 0.1s linear",
        "flip-in": "flip-in 0.8s ease",
        "flip-out": "flip-in 0.8s ease reverse forwards"
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}

