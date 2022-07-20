import { configureStore } from '@reduxjs/toolkit'
import appStateReducer from './app-state';

export default configureStore({
  reducer: {
    appState: appStateReducer,
  },
})