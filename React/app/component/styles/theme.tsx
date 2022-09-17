export const createEm = (value: number) => `${value / 16}em`;
export const color = {
  primary: '#024eee',
  secondary: '#aae5f6',
  danger: '#ee024d',
  success: '#2d02ee',
  warning: '#eea302',
  info: '#02c3ee',
  light: '#f0f0f0',
  dark: '#262626',
  /** main color variation */
  blue100: '#c5cbfa',
  blue200: '#9da9f8',
  blue300: '#7086f5',
  blue400: '#4869f3',
  blue500: '#024eee', /** main */
  blue600: '#0044e2',
  blue700: '#003ad6',
  /** triadic */
  red100: '#fdb9c9',
  red200: '#fb8ba5',
  red300: '#f75b81',
  red400: '#f33566',
  red500: '#ee024d', /** main */
  red600: '#de004b',
  red700: '#c90048',
  /** triadic */
  purple100: '#e5bffa',
  purple200: '#d494f8',
  purple300: '#c166f5',
  purple400: '#b23ef2',
  purple500: '#a302ee',
  purple600: '#900ae8',
  purple700: '#750de1',
  /** complementary */
  yellow300: '#f4ed6d',
  yellow500: '#eee424',
  yellow800: '#eea302', /** main */
  yellow900: '#ec7a00',
  /** analogous */
  deepblue300: '#976aff',
  deepblue400: '#7b45fe',
  deepblue700: '#2d02ee', /** main */
  deepblue800: '#0000e9',
  /** analogous */
  sky50: '#def5fb',
  sky100: '#aae5f6',
  sky300: '#02c3ee', /** main */
  sky500: '#00a9ed',

  white: 'white',
  white300: '#f0f0f0',
  white400: '#dedede',

  black900: '#000000',
  black800: '#262626',
  black700: '#434343',
  black600: '#555555',
  black500: '#7b7b7b',
  black400: '#9d9d9d',
};
export const size = {
  xxxs: 8,
  xxs: 10,
  xs: 12,
  s: 14,
  m: 16,
  l: 18,
  xl: 20,
  xxl: 22,
  xxxl: 24,
};
export const margin = {
  xxxs: 4,
  xxs: 5,
  xs: 6,
  s: 7,
  m: 8,
  l: 9,
  xl: 10,
  xxl: 11,
  xxxl: 12,
};
export const padding = {
  xxxs: 4,
  xxs: 5,
  xs: 6,
  s: 7,
  m: 8,
  l: 9,
  xl: 10,
  xxl: 11,
  xxxl: 12,
};
export const typography = {
  display4: `
    font-size: 112px;
    font-weight: 900;
  `,
  display3: `
    font-size: 56px;
    font-weight: 900;
  `,
  display2: `
    font-size: 45px;
    font-weight: 900;
  `,
  display1: `
    font-size: 34px;
    font-weight: 900;
  `,
  headline: `
    font-size: ${size.xxxl}px;
    font-weight: 800;
  `,
  title: `
    font-size: ${size.xl}px;
    font-weight: 700;
  `,
  subtitle: `
    font-size: ${size.m}px;
  `,
  body: `
    font-size: ${size.s}px;
  `,
  caption: `
    font-size: ${size.xxs}px;
  `,
};
export default {
  createEm, color, size, padding, margin, typography,
};
