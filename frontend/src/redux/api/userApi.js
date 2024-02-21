import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setIsAuthenticated, setLoading, setUser } from '../features/userSlice';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1/users' }),
  tagTypes: ['User', 'AdminUser'],

  endpoints: (builder) => ({
    getMe: builder.query({
      query: () => ({
        url: '/me',
      }),
      transformResponse: (res) => res.user,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
          dispatch(setIsAuthenticated(true));
          dispatch(setLoading(false));
        } catch (error) {
          dispatch(setLoading(false));
          console.log(error);
        }
      },
      providesTags: ['User'],
    }),

    updateProfile: builder.mutation({
      query: (body) => ({
        url: '/me/update',
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['User'],
    }),

    uploadAvatar: builder.mutation({
      query: (body) => ({
        url: '/me/upload_avatar',
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['User'],
    }),

    updatePassword: builder.mutation({
      query: (body) => ({
        url: '/password/update',
        method: 'PUT',
        body,
      }),
    }),

    adminUsers: builder.query({
      query: () => ({
        url: '/',
      }),
      providesTags: ['AdminUser'],
    }),

    adminUser: builder.query({
      query: (id) => ({
        url: `/${id}`,
      }),
    }),

    adminUpdateUser: builder.mutation({
      query: ({ id, body }) => ({
        url: `/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['AdminUser'],
    }),
  }),
});

export const {
  useGetMeQuery,
  useAdminUsersQuery,
  useAdminUserQuery,
  useUpdateProfileMutation,
  useUpdatePasswordMutation,
  useUploadAvatarMutation,
  useAdminUpdateUserMutation,
} = userApi;
