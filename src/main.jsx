import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";


import Layout from './Layout/Layout';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Apps from './pages/Apps/Apps';
import Installation from './pages/Installation/Installation';
import Home from './pages/Home/Home';
import axios from 'axios';
import AppDetails from './pages/AppDetails/AppDetails';





const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
      {
        index: true,
        loader: async () => {
          const res = await axios.get('/appData.json');
          return res.data
        },
        element: <Home></Home>
      },
      {
        path: "/apps",
        element: <Apps></Apps>,
      },
      {
        path: "/installation",
        element: <Installation></Installation>,
      },
      {
        path: "/app-details",
        element: <AppDetails></AppDetails>,
      },

    ],
  },
]);






createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router} />,

  </StrictMode>,
)
