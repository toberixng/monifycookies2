module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./src/sections/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0B65C6",
        secondary: "#EEF1F6",
        tertiary: "#0e1133",

        lightBlue: "#E1F6FE",
        lightPink: "#FDEEDC",
        lightGreen: "#E1FDE2",
      },
      lineHeight: {
        12: "1.2",
        13: "1.3",
        16: "1.6",
      },
    },
    screens: {
      lg: { max: "1440px" },
      md: { max: "992px" },
      sm: { max: "600px" },
      xs: { max: "400px" },
      minmd: "1700px",
      minlg: "2100px",
    },
    fontFamily: {
      IBMPlex: ["IBM Plex Sans", "sans-serif"],
    },
  },
  plugins: [],
};
