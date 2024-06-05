import { apiSlice } from "./apiSlice";

const USERS_URL = '/api/users/';

export const usersApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: `${USERS_URL}auth/`,
                method: 'POST',
                body: credentials
            })
        })

        
    })
})

export const { useLoginMutation } = usersApi;