import { configureStore } from '@reduxjs/toolkit'
import formStateReducer from './reducers/formStateReducer'

const store = configureStore({
  reducer: {
    formData: formStateReducer
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