import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import RootLayout from "./layouts/root";
import Home from "./pages/home";
import ProjectView from "./pages/project-view";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <RootLayout />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/projects/:slug",
                    element: <ProjectView />,
                },
            ],
        },
    ],
    {
        basename: import.meta.env.BASE_URL,
    }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
