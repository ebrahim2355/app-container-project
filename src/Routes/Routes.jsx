import React, { Component } from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import AllApps from '../pages/AllApps/AllApps';
import AppDetail from '../pages/AppDetail/AppDetail';
import AppErrorPage from '../pages/ErrorPage/AppErrorPage';
import InstalledApps from '../pages/InstalledApps/InstalledApps';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                loader: () => fetch("/data1.json"),
                path: "/",
                Component: Home,
            },
            {
                path: "/AllApps",
                Component: AllApps,
                loader: () => fetch("/data2.json"),
                
            },
            {
                path: "/AppDetail/:id",
                loader: () => fetch("/data2.json"),
                Component: AppDetail,
                
            },
            {
                path: "/installation",
                loader: () => fetch("/data2.json"),
                Component: InstalledApps,
            }
        ]
    },
])