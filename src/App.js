import React from 'react';
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import { routes } from './routes/routes';
import { PrivateRoutes, SecureRoutes } from './helper/routeHelper';
import AlbumPage from './Pages/album/Album';
import GalleryPage from './Pages/gellery/Gallery';
import PageNotFound from './Pages/notFoundPage/PageNotFound';
import Auth from './Pages/auth/Auth';

function App() {
  return (
    <BrowserRouter>
      {/* display the toast message */}
      <ToastContainer autoClose={5000} theme="colored" />
      <Routes>
        <Route path={routes.login} element={<SecureRoutes />}>
          <Route path={routes.login} element={<Auth />} />
        </Route>
        {/* wrapped all private routes in this container */}
        <Route path={routes.login} element={<PrivateRoutes />}>
          <Route path={routes.album} element={<AlbumPage />} />
          <Route path={`${routes.gallery}/:id`} element={<GalleryPage />} />
        </Route>
        <Route path={routes.notFound} element={<PageNotFound />} />
        {/* if the route is not found then redirect to the page not found page */}
        <Route path={routes.any} element={<Navigate to={routes.notFound} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
