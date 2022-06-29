module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      tablet: "48rem",
      desktop: "62rem",
      big: "75rem",
      bigger: "85rem",
    },

    colors: {
      blue: "#435086",
      lightBlue: "#B8C1EC",
      darkBlue: "#232946",
      grey: "#707070",
      white: "#FFFFFE",
      lightYellow: "#DFE3C2",
      darkest: "#1B2238",
    },

    fontFamily: {
      display: ['"BigCity Grotesque Pro"', "sans-serif"],
      sans: [
        '"elza"',
        '"Helvetica Neue"',
        '"HelveticaNeue-Light"',
        '"Helvetica Neue Light"',
        "Helvetica",
        "Arial",
        '"Lucida Grande"',
        "sans-serif",
      ],
    },

    fontSize: {
      label__light: [
        "0.875rem",
        { lineHeight: "1.1", letterspacing: "0.075rem" },
      ],
      label__strong: [
        "0.875rem",
        { lineHeight: "1.1", letterspacing: "0.0625rem" },
      ],

      sm: ["0.875rem", "1.1"],

      base: ["1rem", "1.4"],

      main: ["1.25rem", "1.5"],

      lg: ["1.5rem", "1.4"],

      xl: ["3.5rem", "1.4"],

      "2xl": ["12rem", "1"],
    },

    extend: {},
  },
  plugins: [],
};
