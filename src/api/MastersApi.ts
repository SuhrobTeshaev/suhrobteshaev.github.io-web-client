import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { currentUrl } from "../../url";


export const mastersApi = createApi({
  reducerPath: "mastersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: currentUrl,
     prepareHeaders: (headers) => {
      headers.set("Navbat-key", `kEX9oFXFkv0GGiOdPO55xgcZ4pAErUzNOoej3kwr`);
      
      // headers.set('Navbat-key', `YpCCMBnHLsK0bz6agS7lEn4UMfKQTA8jOJjNLk38`);
      headers.set("Accept", "application/json");
      return headers;
    },
  }),
  tagTypes: [ "Masters"], 
  endpoints: (builder) => ({
  
    getMasters: builder.query({
      query: (id) => `/web/master/${id}`, 
      providesTags: ["Masters"],
    }),
  }),
});

export const { useGetMastersQuery} = mastersApi;
