import React from "react";
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from "./utils";
import { routes } from "../routes/routes";

// check if the user is logged in or not. if logged in then navigate to the component otherwise redirect to the login page
export const PrivateRoutes = () => useAuth() ? <Outlet /> : <Navigate to={routes.login} />;

// check if the user is logged in or not. if logged in then navigate to the album page otherwise redirect to the login page
export const SecureRoutes = () => !useAuth() ? <Outlet /> : <Navigate to={routes.album} />;
