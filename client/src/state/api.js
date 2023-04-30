import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import build from "next/dist/build";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env }),
  reducerPath: "main",
  tagTypes: [],
  endpoints: (build) => ({
    postAiText: build,
  }),
});
