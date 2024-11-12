import { lazy } from "react";
export const Main = lazy(() => import("./Main"));
export const Favorite = lazy(() => import("./Favorite"));
export const Shop = lazy(() => import("./Shop"));
export const NotFound = lazy(() => import("./404.jsx"));