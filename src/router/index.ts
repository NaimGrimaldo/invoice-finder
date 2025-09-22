import { createBrowserRouter } from "react-router";
import { Layout } from "@/layouts";
import {  HomePage } from "@/pages";

export function getRouter(): any {
    return createBrowserRouter([
        {
            Component: Layout,
            children: [
                {
                    path: "/",
                    Component: HomePage,
                },
            ]
        }]
    )
}