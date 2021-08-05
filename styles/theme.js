export const colors = {
  black: '#363537',
  white: '#ffffff',
  'gray.dark': '#999999',
  primary: '#06d6a0',
  secondary: '#118ab2',
  alert: '#ffd166',
  danger: '#ef476f',
};

export const lightTheme = {
  text: colors.black,
  background: colors.white,
  colors,
};
// todo: con ssr esto no funciona ya que el server no sabe como tiene el navegador
export const darkTheme = {
  text: colors.white,
  background: colors.black,
};
