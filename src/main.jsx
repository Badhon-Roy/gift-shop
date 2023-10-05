import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layout/MainLayout';
import Home from './Pages/Home/Home';
import SpecialOffer from './Pages/SpecialOffer/SpecialOffer';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import ShopByCategory from './Pages/ShopByCategory/ShopByCategory';
import Accessories from './Category/Accessories';
import Cards from './Category/Cards';
import Clothings from './Category/Clothings';
import Handbags from './Category/Handbags';
import ContextProvider from './ContextProvider/ContextProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/shop_by_category",
        element: <PrivateRoute><ShopByCategory></ShopByCategory></PrivateRoute>
      },
      {
        path: "/accessories",
        element: <PrivateRoute><Accessories></Accessories></PrivateRoute>
      },
      {
        path: "/cards",
        element: <PrivateRoute><Cards></Cards></PrivateRoute>
      },
      {
        path: "/clothings",
        element: <PrivateRoute><Clothings></Clothings></PrivateRoute>
      },
      {
        path: "/handbags",
        element: <PrivateRoute><Handbags></Handbags></PrivateRoute>
      },
      {
        path: "/spacial_offer",
        element: <PrivateRoute><SpecialOffer></SpecialOffer></PrivateRoute>,
        loader : () => fetch('../specialOffers.json')
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>,
)
