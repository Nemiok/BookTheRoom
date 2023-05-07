import { createSlice } from "@reduxjs/toolkit";
import { AppearanceType } from "@vkontakte/vk-bridge";

const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches;
const defaultTheme = isDarkTheme ? 'dark' : 'light';
const theme = localStorage.getItem('app-theme') as AppearanceType || defaultTheme as AppearanceType;

type IAppTheme = AppearanceType

const initialState: IAppTheme = theme

export const appThemeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme(state) {
      const newTheme = state === 'dark' ? 'light' : 'dark'
      localStorage.setItem('app-theme', newTheme);
      return newTheme
    }
  },
})

// Action creators are generated for each case reducer function
export const { toggleTheme } = appThemeSlice.actions

export default appThemeSlice.reducer