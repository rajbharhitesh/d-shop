import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1' }),

  endpoints: (builder) => ({
    createNewOrder: builder.mutation({
      query: (body) => ({
        url: '/orders/new',
        method: 'POST',
        body,
      }),
    }),

    myOrders: builder.query({
      query: () => ({
        url: '/me/orders',
      }),
    }),

    orderDetails: builder.query({
      query: (id) => ({
        url: `/orders/${id}`,
      }),
    }),
  }),
});

export const {
  useCreateNewOrderMutation,
  useMyOrdersQuery,
  useOrderDetailsQuery,
} = orderApi;
