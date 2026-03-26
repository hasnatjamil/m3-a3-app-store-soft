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
import { Toaster } from "react-hot-toast";




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
        loader: async () => {
          const res = await axios.get('/appData.json');
          return res.data
        },
        element: <Apps></Apps>,
      },
      {
        path: "/installation",
        loader: async () => {
          const res = await axios.get("/appData.json");
          return res.data;
        },
        element: <Installation></Installation>,
      },
      {
        path: "/app-details",
        element: <AppDetails></AppDetails>,
      },
      {
        path: "/app-details/:id",
        loader: async ({ params }) => {
          const res = await axios.get('/appData.json')
          const appProduct = res.data.find(
            (p) => p.id === Number(params.id)
          )
          return appProduct
        },
        element: <AppDetails></AppDetails>,
      },

    ],
  },
]);






createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <RouterProvider
        router={router}
        fallbackElement={<p>Loading...</p>}
      />
      <Toaster />
    </>
  </StrictMode>
);