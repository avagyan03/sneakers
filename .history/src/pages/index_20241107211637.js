import { lazy } from "react";
export const Main = lazy(() => import("./Main.jsx"));
export const Favorite = lazy(() => import("./Favorite.jsx"));
export const Shop = lazy(() => import("./Shop.jsx"));
export const NotFound = lazy(() => import("./404.jsx"));