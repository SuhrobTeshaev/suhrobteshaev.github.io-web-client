import { configureStore } from '@reduxjs/toolkit';
import { salonApi } from './SalonApi';
import { mastersApi } from './MastersApi';
import { timeSlotsApi } from './TimeSlots';
import { authApi } from './Auth';
import { bookingApi } from './BookingApi';

export const store = configureStore({
  reducer: {
    [salonApi.reducerPath]: salonApi.reducer,
    [mastersApi.reducerPath]: mastersApi.reducer,
    [timeSlotsApi.reducerPath]: timeSlotsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [bookingApi.reducerPath]: bookingApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
  .concat
  (
    salonApi.middleware,
    mastersApi.middleware,
    timeSlotsApi.middleware,
    authApi.middleware,
    bookingApi.middleware

  ), 
});

// Типы для использования в селекторах и хуках
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
