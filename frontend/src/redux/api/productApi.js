import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1' }),
  tagTypes: ['Product', 'AdminProducts'],

  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (params) => ({
        url: '/products',
        params: {
          page: params?.page,
          keyword: params?.keyword,
          category: params?.category,
          'price[gte]': params?.min,
          'price[lte]': params?.max,
          'ratings[gte]': params?.ratings,
        },
      }),
    }),

    getProductDetails: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
      }),
      providesTags: ['Product', 'AdminProducts'],
    }),

    getTopProducts: builder.query({
      query: () => ({
        url: '/products/top',
      }),
    }),

    getAdminProducts: builder.query({
      query: () => ({
        url: '/admin/products',
      }),
      providesTags: ['AdminProducts'],
    }),

    submitReview: builder.mutation({
      query: (body) => ({
        url: `/reviews`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Product'],
    }),

    createProduct: builder.mutation({
      query: (body) => ({
        url: `/admin/products`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['AdminProducts'],
    }),

    updateProduct: builder.mutation({
      query: ({ id, body }) => ({
        url: `/admin/products/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['AdminProducts'],
    }),

    uploadProductImages: builder.mutation({
      query: ({ id, body }) => ({
        url: `/admin/products/${id}/upload_images`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['AdminProducts'],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductDetailsQuery,
  useGetTopProductsQuery,
  useGetAdminProductsQuery,
  useSubmitReviewMutation,
  useCreateProductMutation,
  useUpdateProductMutation,
  useUploadProductImagesMutation,
} = productApi;
