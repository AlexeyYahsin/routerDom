import React from "react";
import ReactDOM, {createRoot} from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./App.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Contact from "./routes/contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "contacts/:contactId",
                element: <Contact/>
            }
        ]
    },

]);

const container  = document.getElementById('root') as HTMLElement
const root = createRoot(container);
root.render(<React.StrictMode>
    <RouterProvider router={router} />
</React.StrictMode>);
