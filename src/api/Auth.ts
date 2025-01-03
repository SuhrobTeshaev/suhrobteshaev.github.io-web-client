import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { currentUrl } from '../../url';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${currentUrl}/auth/`,
    prepareHeaders: (headers) => {
        headers.set("Navbat-key", `kEX9oFXFkv0GGiOdPO55xgcZ4pAErUzNOoej3kwr`)
        // headers.set('Navbat-key', `YpCCMBnHLsK0bz6agS7lEn4UMfKQTA8jOJjNLk38`);
        headers.set("Accept", "application/json");
        return headers
      },
 }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: 'register',
        method: 'POST',
        body: data,
      }),
    }),
    sendCode: builder.mutation({
      query: (data) => ({
        url: 'send-code',
        method: 'POST',
        body: data,
      }),
    }),
    confirmCode: builder.mutation({
      query: (data) => ({
        url: 'confirm-code',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useRegisterMutation, useSendCodeMutation, useConfirmCodeMutation } = authApi;
