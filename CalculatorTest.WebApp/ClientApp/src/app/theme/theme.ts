export enum ThemeStyle {
  light = 1,
  dark = 2
}

export interface IThemeMode {
  style: ThemeStyle;
  modeProperties: Map<string, string>;
}

export interface ITheme {
  themeName: string;
  themeStyle: ThemeStyle;
  themeProperties: Map<string, string>;
}

/* Theme modes (light,dark) */
const light: IThemeMode = {
  style: ThemeStyle.light,
  modeProperties: new Map<string, string>([
    ['--background-shades', '#F5F5F3'],
    ['--contrast-shades', '#383D40'],
  ])
}
const dark: IThemeMode = {
  style: ThemeStyle.dark,
  modeProperties: new Map<string, string>([
    ['--background-shades', '#383D40'],
    ['--contrast-shades', '#F5F5F3'],
  ])
}
export const themeModes: IThemeMode[] = [
  light,
  dark
]
/* End of theme modes */

/* Themes */
const baliHaiLight: ITheme = {
  themeName: 'Bali Hai',
  themeStyle: ThemeStyle.light,
  themeProperties: new Map<string, string>([
    ['--main-accent', '#B17F4C'],
    ['--main-brand-colour', '#8A9DA8'],
    ['--contrast-accent', '#866357']
  ])
}
const baliHaiDark: ITheme = {
  themeName: 'Bali Hai',
  themeStyle: ThemeStyle.dark,
  themeProperties: new Map<string, string>([
    ['--main-accent', '#866357'],
    ['--main-brand-colour', '#8A9DA8'],
    ['--contrast-accent', '#B17F4C']
  ])
}
const paleOysterLight: ITheme = {
  themeName: 'Pale Oyster',
  themeStyle: ThemeStyle.light,
  themeProperties: new Map<string, string>([
    ['--main-accent', '#9D8C70'],
    ['--main-brand-colour', '#857D78'],
    ['--contrast-accent', '#A4A1B3']
  ])
}
const paleOysterDark: ITheme = {
  themeName: 'Pale Oyster',
  themeStyle: ThemeStyle.dark,
  themeProperties: new Map<string, string>([
    ['--main-accent', '#A4A1B3'],
    ['--main-brand-colour', '#857D78'],
    ['--contrast-accent', '#9D8C70']
  ])
}
const graniteGreenLight: ITheme = {
  themeName: 'Granite Green',
  themeStyle: ThemeStyle.light,
  themeProperties: new Map<string, string>([
    ['--main-accent', '#909079'],
    ['--main-brand-colour', '#A1A697'],
    ['--contrast-accent', '#847C72']
  ])
}
const graniteGreenDark: ITheme = {
  themeName: 'Granite Green',
  themeStyle: ThemeStyle.dark,
  themeProperties: new Map<string, string>([
    ['--main-accent', '#847C72'],
    ['--main-brand-colour', '#A1A697'],
    ['--contrast-accent', '#909079']
  ])
}
const violaLight: ITheme = {
  themeName: 'Viola',
  themeStyle: ThemeStyle.light,
  themeProperties: new Map<string, string>([
    ['--main-accent', '#C8908A'],
    ['--main-brand-colour', '#CA99AA'],
    ['--contrast-accent', '#C16399']
  ])
}
const violaDark: ITheme = {
  themeName: 'Viola',
  themeStyle: ThemeStyle.dark,
  themeProperties: new Map<string, string>([
    ['--main-accent', '#C16399'],
    ['--main-brand-colour', '#CA99AA'],
    ['--contrast-accent', '#C8908A']
  ])
}
const dawnLight: ITheme = {
  themeName: 'Dawn',
  themeStyle: ThemeStyle.light,
  themeProperties: new Map<string, string>([
    ['--main-accent', '#A29E91'],
    ['--main-brand-colour', '#A2ADAE'],
    ['--contrast-accent', '#937C66']
  ])
}
const dawnDark: ITheme = {
  themeName: 'Dawn',
  themeStyle: ThemeStyle.dark,
  themeProperties: new Map<string, string>([
    ['--main-accent', '#937C66'],
    ['--main-brand-colour', '#A2ADAE'],
    ['--contrast-accent', '#A29E91']
  ])
}
const zorbaLight: ITheme = {
  themeName: 'Zorba',
  themeStyle: ThemeStyle.light,
  themeProperties: new Map<string, string>([
    ['--main-accent', '#A79276'],
    ['--main-brand-colour', '#9D9795'],
    ['--contrast-accent', '#857875']
  ])
}
const zorbaDark: ITheme = {
  themeName: 'Zorba',
  themeStyle: ThemeStyle.dark,
  themeProperties: new Map<string, string>([
    ['--main-accent', '#857875'],
    ['--main-brand-colour', '#9D9795'],
    ['--contrast-accent', '#A79276']
  ])
}
const grayChateauLight: ITheme = {
  themeName: 'Gray Chateau',
  themeStyle: ThemeStyle.light,
  themeProperties: new Map<string, string>([
    ['--main-accent', '#8F9493'],
    ['--main-brand-colour', '#9AA0A2'],
    ['--contrast-accent', '#886F64']
  ])
}
const grayChateauLightDark: ITheme = {
  themeName: 'Gray Chateau',
  themeStyle: ThemeStyle.dark,
  themeProperties: new Map<string, string>([
    ['--main-accent', '#886F64'],
    ['--main-brand-colour', '#9AA0A2'],
    ['--contrast-accent', '#8F9493']
  ])
}
const hempLight: ITheme = {
  themeName: 'Hemp',
  themeStyle: ThemeStyle.light,
  themeProperties: new Map<string, string>([
    ['--main-accent', '#7D7D76'],
    ['--main-brand-colour', '#8B866F'],
    ['--contrast-accent', '#98847F']
  ])
}
const hempDark: ITheme = {
  themeName: 'Hemp',
  themeStyle: ThemeStyle.dark,
  themeProperties: new Map<string, string>([
    ['--main-accent', '#98847F'], 
    ['--main-brand-colour', '#8B866F'],
    ['--contrast-accent', '#7D7D76']
  ])
}
const amethystSmokeLight: ITheme = {
  themeName: 'Amethyst Smoke',
  themeStyle: ThemeStyle.light,
  themeProperties: new Map<string, string>([
    ['--main-accent', '#998897'],
    ['--main-brand-colour', '#ABA1AF'],
    ['--contrast-accent', '#8D7A8D']
  ])
}
const amethystSmokeDark: ITheme = {
  themeName: 'Amethyst Smoke',
  themeStyle: ThemeStyle.dark,
  themeProperties: new Map<string, string>([
    ['--main-accent', '#8D7A8D'],
    ['--main-brand-colour', '#ABA1AF'],
    ['--contrast-accent', '#998897']
  ])
}
const rustLight: ITheme = {
  themeName: 'Rust',
  themeStyle: ThemeStyle.light,
  themeProperties: new Map<string, string>([
    ['--main-accent', '#CC9C6C'],
    ['--main-brand-colour', '#BB6644'],
    ['--contrast-accent', '#9A796E']
  ])
}
const rustDark: ITheme = {
  themeName: 'Rust',
  themeStyle: ThemeStyle.dark,
  themeProperties: new Map<string, string>([
    ['--main-accent', '#9A796E'],
    ['--main-brand-colour', '#BB6644'],
    ['--contrast-accent', '#CC9C6C']
  ])
}
export const themes: ITheme[] = [
  baliHaiLight,
  baliHaiDark,
  paleOysterLight,
  paleOysterDark,
  graniteGreenLight,
  graniteGreenDark,
  violaLight,
  violaDark,
  dawnLight,
  dawnDark,
  zorbaLight,
  zorbaDark,
  grayChateauLight,
  grayChateauLightDark,
  hempLight,
  hempDark,
  amethystSmokeLight,
  amethystSmokeDark,
  rustLight,
  rustDark
]
/* End of themes */
