import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1' }),
  tagTypes: ['Order', 'AdminOrders'],

  endpoints: (builder) => ({
    createNewOrder: builder.mutation({
      query: (body) => ({
        url: '/orders/new',
        method: 'POST',
        body,
      }),
    }),

    stripeCheckoutSession: builder.mutation({
      query: (body) => ({
        url: '/payment/checkout_session',
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
      providesTags: ['Order'],
    }),

    adminOrders: builder.query({
      query: () => ({
        url: `/admin/orders`,
      }),
      providesTags: ['AdminOrders'],
    }),

    deleteOrder: builder.mutation({
      query: (id) => ({
        url: `/admin/orders/${id}`,
        method: 'DELETE',
      }),
      providesTags: ['AdminOrders'],
    }),
  }),
});

export const {
  useCreateNewOrderMutation,
  useStripeCheckoutSessionMutation,
  useDeleteOrderMutation,
  useMyOrdersQuery,
  useOrderDetailsQuery,
  useAdminOrdersQuery,
} = orderApi;
