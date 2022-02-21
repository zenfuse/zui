const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    mode: "layers",
    layers: ["components", "utilities"],
    content: [
      "./src/components/**/*.js",
      "./src/components/**/**/*.js",
      "./src/page-blocks/**/*.js",
      "./src/page-blocks/**/**/*.js",
      "./pages/*.js",
      "./pages/**/*.js",
      "./node_modules/@bit/**/*.js",
      "./node_modules/@bit/**/**/*.js",
      "./node_modules/@bit/**/**/**/*.js",
      "./node_modules/@bit/**/**/**/**/*.js",
      "./node_modules/@bit/**/**/**/**/**/*.js",
    ],
  },
  prefix: "",
  important: false,
  separator: ":",
  theme: {
    extend: {
      screens: {
        xs: "400px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1340px",
        xxxl: "1600px",
      },
      colors: {
        black: "#000000",
        white: "#fff",
        graphite: "#4b5157",
        dark: "#4b5157",
        pearl: "#eff2f5",

        "cool-gray": {
          ...colors.coolGray,
          150: "#f1f2f6",
        },
        gray: {
          100: "#f5f5f5",
          200: "#eeeeee",
          300: "#e0e0e0",
          400: "#bdbdbd",
          500: "#9e9e9e",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121",
          medium: "#e2e2ea",
          blue: "#556680",
          primary: "#5c6c75",
          light: "#e6e6e6",
          accent: "#f1f2f6",
          dark: "#a0a0a0",
        },
        "true-gray": {
          ...colors.trueGray,
          100: "#f5f5f5",
          150: "#ebebeb",
          300: "#d4d4d4",
          350: "#B9B9B9",
          450: "#999999",
          700: "#3B3B3B",
          750: "#2F2F2F",
          800: "#232323",
          850: "#1D1D1D",
          900: "#171717",
          950: "#101010",
        },
        "lime": {
          ...colors.lime,
          
        },
        red: {
          base: "#fc3d30",
          100: "#fff5f5",
          200: "#fed7d7",
          300: "#feb2b2",
          400: "#fc8181",
          500: "#f56565",
          550: "#e94d3d",
          600: "#e53e3e",
          700: "#c53030",
          800: "#9b2c2c",
          900: "#742a2a",
        },
        orange: {
          100: "#fffaf0",
          200: "#feebc8",
          300: "#fbd38d",
          400: "#f6ad55",
          500: "#ed8936",
          600: "#dd6b20",
          700: "#c05621",
          800: "#9c4221",
          900: "#7b341e",
          base: "#feb937",
          gradient: "#ffc796",
        },
        yellow: {
          100: "#fffff0",
          200: "#fefcbf",
          300: "#faf089",
          400: "#f6e05e",
          500: "#ecc94b",
          600: "#d69e2e",
          700: "#b7791f",
          800: "#975a16",
          900: "#744210",
        },
        green: {
          base: "#03a77c",
          100: "#f0fff4",
          200: "#c6f6d5",
          300: "#9ae6b4",
          400: "#68d391",
          450: "#1cc760",
          500: "#48bb78",
          600: "#38a169",
          700: "#2f855a",
          800: "#276749",
          900: "#22543d",
          gradient: "#9efbd3",
          shine: "#07d345",
        },
        teal: {
          100: "#e6fffa",
          200: "#b2f5ea",
          300: "#81e6d9",
          400: "#4fd1c5",
          500: "#38b2ac",
          600: "#319795",
          700: "#2c7a7b",
          800: "#285e61",
          900: "#234e52",
          gradient: "#57e9f2",
        },
        blue: {
          100: "#ebf8ff",
          200: "#bee3f8",
          300: "#90cdf4",
          400: "#63b3ed",
          500: "#4299e1",
          600: "#2078FF",
          650: "#0065ff",
          700: "#2b6cb0",
          800: "#2c5282",
          900: "#2a4365",
          dark: "#0A1924",
          base: "#0065ff",
          primary: "#0065ff",
          "primary-dark": "#0059e1",
          bibox: "#6399ed",
          light: "#e6f0ff",
          "gradient-dark": "#4481eb",
          "gradient-light": "#04befe",
        },
        indigo: {
          100: "#ebf4ff",
          200: "#c3dafe",
          300: "#a3bffa",
          400: "#7f9cf5",
          500: "#667eea",
          600: "#5a67d8",
          700: "#4c51bf",
          800: "#434190",
          900: "#3c366b",
          gradient: "#7579ff",
        },
        purple: {
          100: "#faf5ff",
          200: "#e9d8fd",
          300: "#d6bcfa",
          400: "#b794f4",
          500: "#9f7aea",
          600: "#805ad5",
          700: "#6b46c1",
          800: "#553c9a",
          900: "#44337a",
          gradient: "#b224ef",
        },
        pink: {
          50: "#FDF2F8",
          100: "#fff5f7",
          150: "#FBCFE8",
          200: "#fed7e2",
          300: "#fbb6ce",
          400: "#f687b3",
          500: "#ed64a6",
          550: "#F40D60",
          600: "#d53f8c",
          700: "#b83280",
          800: "#97266d",
          900: "#702459",
          unswap: "#dd53e1",
          gradient: "#ff6b95",
        },
        amber: {
          50: "#FFFBEB",
          100: "#FEF3C7",
          250: "#FEDA5C",
          550: "#FF991D",
        },
      },
      spacing: {
        "10vh": "10vh",
        "20vh": "20vh",
        "30vh": "30vh",
        "40vh": "40vh",
        "50vh": "50vh",
        "60vh": "60vh",
        "70vh": "70vh",
        "80vh": "80vh",
        "90vh": "90vh",
        "95vh": "95vh",
        "100vh": "100vh",
        "1/4": "25%",
        "1/10": "10%",
        "2/10": "20%",
        "3/10": "30%",
        "4/10": "40%",
        "5/10": "50%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
        "9/10": "90%",
        "10/10": "100%",
        "2/4": "50%",
        "3/4": "70%",
        full: "100%",
        header: "72px",
        "2px": "2px",
        "3px": "3px",
        "8px": "8px",
        "4px": "4px",
        "21px": "21px",
        "40px": "40px",
        "50px": "50px",
        "70px": "70px",
        "100px": "100px",
        "150px": "150px",
        "200px": "200px",
        "250px": "250px",
        "300px": "300px",
        "350px": "350px",
        "400px": "400px",
        "450px": "450px",
        "500px": "500px",
        "550px": "550px",
        "600px": "600px",
        "650px": "650px",
        "700px": "700px",
        "738px": "738px",
        "750px": "750px",
        "800px": "800px",
        "850px": "850px",
        "900px": "900px",
        "950px": "950px",
        "1000px": "1000px",
      },
      borderRadius: {
        "4px": "4px",
        "8px": "8px",
        "10px": "10px",
        "12px": "12px",
        "15px": "15px",
        "16px": "16px",
        "18px": "18px",
        "20px": "20px",
        "25px": "25px",
        "26px": "26px",
        "30px": "30px",
        "100px": "100px",
      },
      borderWidth: (theme) => ({
        ...theme("spacing"),
        default: "1px",
        0: "0",
        2: "2px",
        4: "4px",
        6: "6px",
        8: "8px",
      }),
      width: (theme) => ({
        ...theme("spacing"),
        0: 0,
        "10vw": "10vw",
        "20vw": "20vw",
        "30vw": "30vw",
        "40vw": "40vw",
        "50vw": "50vw",
        "60vw": "60vw",
        "70vw": "70vw",
        "80vw": "80vw",
        "90vw": "90vw",
        "100vw": "100vw",
        "14px": "14px",
        "560px": "560px",
        "9/10": "90%",
        "11/10": "110%",
        30: 7.5,
        34: 8.5,
        77: "19.25rem",
        fit: "fit-content",
      }),
      fontSize: {
        "5px": "5px",
        "6px": "6px",
        "7px": "7px",
        "8px": "8px",
        "10px": "10px",
        "12px": "12px",
        "14px": "14px",
        "15px": "15px",
        "16px": "16px",
        "18px": "18px",
        "20px": "20px",
        "22px": "22px",
        "24px": "24px",
        "26px": "26px",
        "30px": "30px",
        "33px": "33px",
        "34px": "34px",
        "36px": "36px",
        "40px": "40px",
        "44px": "44px",
        "46px": "46px",
        "55px": "55px",
        "64px": "64px",
      },
      minWidth: (theme) => ({
        ...theme("spacing"),
      }),
      maxWidth: (theme) => ({
        ...theme("spacing"),
      }),
      height: (theme) => ({
        ...theme("spacing"),
        0: 0,
        "800px": "800px",
        "11/10": "110%",
        92: "22.9rem",
      }),
      minHeight: (theme) => ({
        ...theme("spacing"),
        ...theme("height"),
      }),
      maxHeight: (theme) => ({
        ...theme("spacing"),
      }),
      opacity: {
        0: "0",
        5: "0.05",
        10: "0.10",
        15: "0.15",
        20: "0.20",
        30: "0.30",
        35: "0.35",
        40: "0.40",
        45: "0.45",
        55: "0.55",
        60: "0.60",
        65: "0.65",
        70: "0.70",
        80: "0.80",
        85: "0.85",
        90: "0.90",
        95: "0.95",
        100: "1",
      },
      transitionDuration: {
        400: "400ms",
        600: "600ms",
        750: "750ms",
      },
      lineHeight: {
        full: "100%",
        110: "110%",
        120: "120%",
        130: "130%",
        140: "140%",
        "10px": "10px",
        "12px": "12px",
        "15px": "15px",
        "16px": "16px",
        "17px": "17px",
        "18px": "18px",
        "19px": "19px",
        "20px": "20px",
        "22px": "22px",
        "24px": "24px",
        "26px": "26px",
        "27px": "27px",
        "28px": "28px",
        "30px": "30px",
        "31px": "31px",
        "32px": "32px",
        "34px": "34px",
        "42px": "42px",
        "43px": "43px",
        "44px": "44px",
        "46px": "46px",
        "50px": "50px",
        "53px": "53px",
        "62px": "62px",
        "64px": "64px",
        "65px": "65px",
        "70px": "70px",
      },
      letterSpacing: {
        "1/100": "1%",
      },
      zIndex: {
        "-1": "-1",
        5: "5",
        10: "10",
        15: "15",
        20: "20",
        30: "30",
        35: "35",
        40: "40",
        45: "45",
        55: "55",
        60: "60",
        65: "65",
        70: "70",
        80: "80",
        85: "85",
        90: "90",
        95: "95",
      },
      boxShadow: {
        small: "0px 2px 4px rgba(57, 61, 69, 0.06)",
        big:
          "0px 6px 12px -6px rgba(24, 39, 75, 0.12), 0px 8px 24px -4px rgba(24, 39, 75, 0.08)",
        trigger: "0px 6px 19px rgba(0, 0, 0, 0.08)",
        orange: "0px 2px 8px rgba(255, 102, 51, 0.25)",
        "blue-light": "0px 2px 7px rgba(0, 101, 255, 0.25)",
        "zfu-light": "0px 3px 10px rgba(0, 101, 255, 0.1)",
        "blue-outline": "0px 0px 0px 4px rgba(0, 101, 255, 0.1)",
        "red-outline": "0px 0px 0px 4px rgba(255, 61, 46, 0.1)",
        xxl: "0px 15px 40px rgba(65, 81, 158, 0.41)",
        100: "0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.04)",
        200: "0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)",
        400: "0px 100px 80px rgba(0, 0, 0, 0.00843437), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0121168), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.015), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.0178832), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0215656), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.03)",
        700: "0px 2px 6px rgba(46, 180, 255, 0.3), 0px 14.9653px 12.9551px rgba(60, 120, 255, 0.12), 0px 8.38944px 7.2625px rgba(60, 120, 255, 0.143066), 0px 4.45557px 3.85706px rgba(60, 120, 255, 0.172525), 0px 1.85406px 1.60501px rgba(60, 120, 255, 0.24)",
        800: "0px 12px 32px rgba(7, 7, 7, 0.16), 0px 2px 4px rgba(0, 0, 0, 0.08)",
        900: "0px 27px 60px rgba(0, 0, 0, 0.07), 0px 9.85544px 21.901px rgba(0, 0, 0, 0.0482987), 0px 4.78464px 10.6325px rgba(0, 0, 0, 0.0389404), 0px 2.34552px 5.21226px rgba(0, 0, 0, 0.0310596), 0px 0.927421px 2.06094px rgba(0, 0, 0, 0.0217013)",
        "dark-shadow-100":
          "0px 4px 8px rgba(0, 0, 0, 0.12), 0px 0px 2px rgba(0, 0, 0, 0.18), 0px 0px 1px rgba(0, 0, 0, 0.12)",
        "dark-shadow-200":
          "0px 10px 20px rgba(0, 0, 0, 0.12), 0px 2px 6px rgba(0, 0, 0, 0.12), 0px 0px 1px rgba(0, 0, 0, 0.12)",
        "dark-shadow-400":
          "0px 100px 80px rgba(0, 0, 0, 0.03), 0px 42px 33px rgba(0, 0, 0, 0.04), 0px 22px 18px rgba(0, 0, 0, 0.03), 0px 12px 10px rgba(0, 0, 0, 0.06), 0px 7px 5px rgba(0, 0, 0, 0.06), 0px 3px 2px rgba(0, 0, 0, 0.09)",
        "dark-shadow-800":
          "0px 12px 32px rgba(7, 7, 7, 0.48), 0px 2px 4px rgba(0, 0, 0, 0.24)",
        "dark-shadow-900":
          "0px 27px 60px rgba(0, 0, 0, 0.15), 0px 10px 22px rgba(0, 0, 0, 0.05), 0px 5px 10px rgba(0, 0, 0, 0.0389404), 0px 2px 5px rgba(0, 0, 0, 0.0310596), 0px 1px 2px rgba(0, 0, 0, 0.02)",
        "blue-shadow-750":
          "0px 2px 6px rgba(46, 180, 255, 0.3), 0px 15px 12px rgba(60, 120, 255, 0.12), 0px 8px 7px rgba(60, 120, 255, 0.143066), 0px 4px 4px rgba(60, 120, 255, 0.18), 0px 2px 2px rgba(60, 120, 255, 0.24)",
        "blue-shadow-700":
          "0px 2px 6px rgba(38, 151, 255, 0.4), 0px 1px 2px rgba(0, 0, 0, 0.2)",
      },
      inset: (theme, { negative }) => ({
        ...theme("width"),
        none: "none",
        "9/20": "45%",
        ...negative(theme("width")),
      }),
      padding: (theme) => ({
        ...theme("width"),
        "2px": "2px",
        30: 7.5,
        34: 8.5,
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        "4/4": "100%",
        "1/24": "4.12%",
      }),
      animation: {
        "click-once": "click-once 0.6s linear 0.3s 1",
        "open-curtain-by-width": "open-curtain-by-width 0.3s linear",
        "open-curtain-by-height": "open-curtain-by-height 0.3s linear",
        "close-curtain-by-width": "close-curtain-by-width 0.3s linear",
        "close-curtain-by-height": "close-curtain-by-height 0.3s linear",
      },
      keyframes: {
        "click-once": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.75)" },
        },
        "open-curtain-by-width": {
          "0%": {
            "border-bottom-left-radius": "100%",
            height: 0,
            width: 0,
          },
          "100%": {
            "border-bottom-left-radius": "0%",
            height: "100vw",
            width: "100vw",
          },
        },
        "open-curtain-by-height": {
          "0%": {
            "border-bottom-left-radius": "100%",
            height: 0,
            width: 0,
          },
          "100%": {
            "border-bottom-left-radius": "0%",
            height: "100vh",
            width: "100vh",
          },
        },
        "close-curtain-by-width": {
          "100%": {
            "border-bottom-left-radius": "0%",
            height: "100vw",
            width: "100vw",
          },
          "0%": {
            "border-bottom-left-radius": "100%",
            height: 0,
            width: 0,
          },
        },
        "close-curtain-by-height": {
          "100%": {
            "border-bottom-left-radius": "0%",
            height: "100vh",
            width: "100vh",
          },
          "0%": {
            "border-bottom-left-radius": "100%",
            height: 0,
            width: 0,
          },
        },
      },
      strokeWidth: {
        1.5: "1.5",
        3: "3",
        4: "4",
      },
      gridTemplateColumns: {
        "13": "repeat(13, minmax(0, 1fr))",
        "14": "repeat(14, minmax(0, 1fr))",
        "15": "repeat(15, minmax(0, 1fr))",
        "16": "repeat(16, minmax(0, 1fr))",
        "17": "repeat(17, minmax(0, 1fr))",
      },
      gridColumn: {
        "span-12": "span 12 / span 12",
        "span-13": "span 13 / span 13",
        "span-14": "span 14 / span 14",
        "span-15": "span 15 / span 15",
        "span-16": "span 16 / span 16",
      },
    },
  },
  variants: {
    extend: {
      transform: ["group-hover"],
      scale: ["active", "group-hover"],
      rotate: ["group-hover"],
      backgroundColor: ["active"],
      ringOffsetWidth: ["hover", "active"],
      ringOffsetColor: ["hover", "active"],
      ringColor: ["hover", "active"],
      borderWidth: ["last"],
      margin: ["last", "first"],
    },
  },
  corePlugins: {},
  plugins: [],
};
