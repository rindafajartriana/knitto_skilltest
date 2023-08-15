import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: (page = 1, limit = 10) =>
        `todos?_start=${(page - 1) * limit}&_limit=${limit}`,
    }),
  }),
});

export const { useGetTodosQuery } = todoApi;

export const getServerSideTodos = async (page = 1, limit = 10) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos?_start=${
      (page - 1) * limit
    }&_limit=${limit}`
  );
  const data = await response.json();
  return data;
};
