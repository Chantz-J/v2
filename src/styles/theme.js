const darkColors = {
  background: `#212F3C`,
  textColor: `rgba(255, 255, 255, 0.85)`,
}
const lightColors = {
  background: `#EAF2F8`,
  textColor: `rgba(0, 0, 0, 0.8)`,
}
const theme = {
  other: {},
}
const  getTheme = (mode) => {
  return {
    ...theme,
    colors: mode === 'light' ? lightColors : darkColors,
  }
}
export default getTheme