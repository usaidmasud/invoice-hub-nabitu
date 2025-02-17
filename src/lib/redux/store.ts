import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/es/storage";
import invoiceSlice from "./slice/invoice.slice";
import rootSlice from "./slice/root.slice";

const persistConfig = {
  key: "root",
  storage,
};

const persistInvoice = persistReducer(persistConfig, invoiceSlice);
const persisteRoot = persistReducer(persistConfig, rootSlice);
export const store = configureStore({
  reducer: {
    invoice: persistInvoice,
    root: persisteRoot,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
