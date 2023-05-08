import { configureStore } from '@reduxjs/toolkit'
import formStateReducer from './reducers/formStateReducer'
import appThemeReducer from './reducers/appThemeReducer'
import popoutStateReducer from './reducers/popoutStateReducer'
import snackbarStateReducer from './reducers/snackbarStateReducer'

const store = configureStore({
  reducer: {
    formData: formStateReducer,
    appTheme: appThemeReducer,
    popout: popoutStateReducer,
    snackbar: snackbarStateReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      // Ignore these action types
      ignoredActions: ['formData/setBookDate'],
      // Ignore these paths in the state
      ignoredPaths: ['formData.date'],
    },
  }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store