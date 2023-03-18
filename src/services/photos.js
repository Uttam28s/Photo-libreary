import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { moduleApi } from '../helper/apiList';
import qs from 'qs';

// photos api calling using RTK Query.
export const fetchPhotos = createApi({
    reducerPath: 'photos',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API }),
    tagTypes: ['photos'],
    endpoints: (build) => ({
        getPhotos: build.query({
            query: (entity) => {
                const params = qs.stringify(entity)
                return (
                    {
                        url: `${moduleApi.photos.url}?${params ? params : ''}`,
                        method: `${moduleApi.photos.method}`
                    }
                )
            },
        }),
    }),
});

export const { useGetPhotosQuery } = fetchPhotos;