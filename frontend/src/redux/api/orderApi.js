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
    }),

    adminOrders: builder.query({
      query: () => ({
        url: `/admin/orders`,
      }),
    }),
  }),
});

export const {
  useCreateNewOrderMutation,
  useStripeCheckoutSessionMutation,
  useMyOrdersQuery,
  useOrderDetailsQuery,
  useAdminOrdersQuery,
} = orderApi;
