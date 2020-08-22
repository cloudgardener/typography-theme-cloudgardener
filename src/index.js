import gray from "gray-percentage";

const theme = {
  title: "Cloud Gardener",
  baseFontSize: "16px",
  baseLineHeight: 1.5,
  scale: 2.25,
  googleFonts: [
    {
      name: "Source Code Pro",
      styles: ["400", "400i", "600"],
    },
  ],
  headerFontFamily: ["Source Code Pro", "Menlo", "monospace"],
  bodyFontFamily: ["Source Code Pro", "Menlo", "monospace"],
  codeFontFamily: ["Source Code Pro", "Menlo", "monospace"],
  bodyColor: "hsla(0,0%,0%,0.8)",
  headerWeight: 700,
  bodyWeight: 400,
  codeWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    h1: scale(5 / 5),
    h2: scale(3 / 5),
    h3: scale(1 / 5),
    h4: scale(0 / 5),
    h5: scale(-1 / 8),
    h6: {
      ...scale(-2 / 8),
      fontFamily: options.bodyFontFamily.join(","),
      fontWeight: options.bodyWeight,
      textTransform: "uppercase",
    },
    a: {
      color: "#00ab6b",
    },
    "a:hover": {
      color: "#038252",
    },
    blockquote: {
      fontStyle: "italic",
      borderLeft: `${rhythm(1 / 6)} solid`,
      borderColor: "#ff4aaf",
      paddingTop: rhythm(1 / 3),
      paddingBottom: rhythm(1 / 3),
      paddingLeft: rhythm(2 / 3),
      paddingRight: rhythm(2 / 3),
    },
    "blockquote > :last-child": {
      marginBottom: 0,
    },
    "blockquote cite": {
      ...adjustFontSizeTo(options.baseFontSize),
      color: gray(54, 204),
      fontWeight: options.bodyWeight,
      fontStyle: "normal",
    },
    pre: {
      fontFamily: options.codeFontFamily.join(","),
      fontWeight: options.codeWeight,
    },
    code: {
      fontFamily: options.codeFontFamily.join(","),
      fontWeight: options.codeWeight,
    },
  }),
};

export default theme;
