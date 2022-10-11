export const createEm = (value: number) => `${value / 16}em`;
export const color: { [key in string]: string } = {
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
  yellow100: '#FFF9C4',
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
  white200: '#f9f9f9',
  white300: '#f0f0f0',
  white400: '#dedede',
  white500: '#cccccc',

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
export const formScales = {
  small: `
    width: calc(100% - ${(padding.xs - 1) * 4}px);
    font-size: ${size.xs}px;
    padding: ${padding.xs - 1}px ${(padding.xs - 1) * 2}px;
  `,
  medium: `
    width: calc(100% - ${(padding.m - 1) * 4}px);
    font-size: ${size.m}px;
    padding: ${padding.m - 1}px ${(padding.m - 1) * 2}px;
  `,
  large: `
    width: calc(100% - ${(padding.xl - 1) * 4}px);
    font-size: ${size.xl}px;
    padding: ${padding.xl - 1}px ${(padding.xl - 1) * 2}px;
  `,
  big: `
    width: calc(100% - ${(padding.xxxl - 1) * 4}px);
    font-size: ${size.xxxl}px;
    padding: ${padding.xxxl - 1}px ${(padding.xxxl - 1) * 2}px;
  `,
};
export const zIndex = {
  modal: 1000,
  loading: 1100,
};

export const etcStyle = {
  floatingShadow: 'box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px',
  popupShadow: 'box-shadow: rgb(0 0 0 / 20%) 0px 5px 5px -3px, rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px',
};

export const boxSize = {
  headerHeight: 64,
  modalWidth: 480,
};

export default {
  createEm,
  color,
  size,
  padding,
  margin,
  typography,
  formScales,
  etcStyle,
  zIndex,
  boxSize,
};
