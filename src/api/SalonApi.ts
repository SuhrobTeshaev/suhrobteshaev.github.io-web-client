import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { currentUrl } from "../../url";


export const salonApi = createApi({
  reducerPath: "salonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: currentUrl,
     prepareHeaders: (headers) => {
      headers.set("Navbat-key", `kEX9oFXFkv0GGiOdPO55xgcZ4pAErUzNOoej3kwr`)
      // headers.set('Navbat-key', `YpCCMBnHLsK0bz6agS7lEn4UMfKQTA8jOJjNLk38`);
      headers.set("Accept", "application/json");
      return headers
    },
  }),
  tagTypes: [ "Salon"], // Добавили метку для инвалидации
  endpoints: (builder) => ({
  
    getSalonBySlug: builder.query({
      query: (slug) => `/web/salons/${slug}`, // URL с использованием слага
      providesTags: ["Salon"], // Инвалидация данных салона
    }),
  }),
});

// Экспортируем хуки
export const { 

  useGetSalonBySlugQuery 
} = salonApi;
