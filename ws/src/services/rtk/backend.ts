import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const backendAPI = createApi({
  reducerPath: "backendAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
    prepareHeaders: (headers) => {
      headers.set("Access-Control-Allow-Origin", "*");
      headers.set("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
      headers.set("Access-Control-Allow-Headers", "Content-Type");

      return headers;
    },
  }),
  endpoints: (builder) => ({
    sendMeesage: builder.mutation({
      query: (body) => ({
        url: `contact`,
        method: "POST",
        body,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useSendMeesageMutation } = backendAPI;
