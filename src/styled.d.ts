import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: {
      size: {
        xxl: string;
        xl: string;
        lg: string;
        ml: string;
        m: string;
        ms: string;
        s: string;
        xs: string;
        xxs: string;
      };
      weight: {
        light: number;
        normal: number;
        bold: number;
      };
    };
    colors: {
      purple: string;
      lightpurple: string;
      darkpurple: string;
      gray: string;
      lightgray: string;
      darkgray: string;
      black: string;
      white: string;
      green: string;
      red: string;
    };
  }
}
