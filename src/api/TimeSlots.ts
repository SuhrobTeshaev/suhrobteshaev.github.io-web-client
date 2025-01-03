import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { currentUrl } from "../../url";

export const timeSlotsApi = createApi({
  reducerPath: "timeSlotsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: currentUrl,
    prepareHeaders: (headers) => {
      headers.set("Navbat-key", `kEX9oFXFkv0GGiOdPO55xgcZ4pAErUzNOoej3kwr`);
      // headers.set('Navbat-key', `YpCCMBnHLsK0bz6agS7lEn4UMfKQTA8jOJjNLk38`);
      headers.set("Accept", "application/json");
      return headers;
    },
  }),
  tagTypes: ["Calendar"], // Добавили метку для инвалидации
  endpoints: (builder) => ({
    getFreeTimes: builder.query({
      query: ({ date, duration, masterId }) =>
        `/web/master/${masterId}/free-times?date=${date}&duration=${duration}`,
    }),
  
  }),
});

// Экспортируем хуки
export const { useGetFreeTimesQuery } = timeSlotsApi;
