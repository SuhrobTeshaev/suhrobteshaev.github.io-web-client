import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { currentUrl } from '../../url';

export const bookingApi = createApi({
  reducerPath: 'bookingApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${currentUrl}/web/`,
    prepareHeaders: (headers) => {
        headers.set("Navbat-key", `kEX9oFXFkv0GGiOdPO55xgcZ4pAErUzNOoej3kwr`)
        // headers.set('Navbat-key', `YpCCMBnHLsK0bz6agS7lEn4UMfKQTA8jOJjNLk38`);
        headers.set("Accept", "application/json");
        return headers
      },
 }),
  endpoints: (builder) => ({
    booking: builder.mutation({
      query: (data) => ({
        url: 'bookings',
        method: 'POST',
        body: data,
      }),
    }),
  
  }),
});

export const {useBookingMutation } = bookingApi;
