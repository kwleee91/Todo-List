const fonts = {
  size: {
    xxl: "40px",
    xl: "26px",
    lg: "20px",
    ml: "18px",
    m: "16px",
    ms: "15px",
    s: "14px",
    xs: "13px",
    xxs: "12px",
  } as const,
  weight: {
    light: 400,
    normal: 500,
    bold: 700,
  } as const,
};

const colors = {
  purple: "#b867c6",
  lightpurple: "#D6A2E8",
  darkpurple: "#82589F",
  gray: "#6f7070",
  lightgray: "#bfbfbf",
  darkgray: "#909090",
  black: "#2b2b2b",
  white: "#fff",
  green: "#4cd137",
  red: "#EA2027",
} as const;

const theme = { colors, fonts };

export type Theme = typeof theme;

export default theme;
