import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { fetchAlbums } from '../services/albums'
import { fetchPhotos } from '../services/photos'


export const store = configureStore({
    reducer: {
        // Add the generated reducer as a specific top-level slice
        [fetchAlbums.reducerPath]: fetchAlbums.reducer,
        [fetchPhotos.reducerPath]: fetchPhotos.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(fetchAlbums.middleware, fetchPhotos.middleware),
})

setupListeners(store.dispatch)