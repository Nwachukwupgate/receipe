import { proxy } from 'valtio';

const themeState = proxy({
  darkMode: false,
});

export default themeState;
