import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { moduleApi } from '../helper/apiList';
import qs from 'qs';
// albums api calling using RTK Query.
export const fetchAlbums = createApi({
    reducerPath: 'albums',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API }),
    tagTypes: ['albums'],
    endpoints: (build) => ({
        getAlbums: build.query({
            query: (entity) => {
                const params = qs.stringify(entity)
                return (
                    {
                        url: `${moduleApi.albums.url}?${params ? params : ''}`,
                        method: `${moduleApi.albums.method}`
                    }
                )
            },
        }),
    }),
});

export const { useGetAlbumsQuery } = fetchAlbums;
