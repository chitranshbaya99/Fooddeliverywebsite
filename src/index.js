// import React, { Children } from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import {createBrowserRouter, RouterProvider} from "react-router-dom";
// import AboutUs from './AboutUs';
// import ErrorPage from './ErrorPage';
// import Body from './Body';
// import ContactUs from './ContactUs';
// import RestaurantMenu from './RestaurantMenu';
// import Cart from './Cart';



// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,

//   children: [

//     {
//       path: "/",
//       element: <Body />,
//     },
//     {
//       path: "/about",
//       element: <AboutUs />,
//     },
//     {
//       path: "/contact",
//       element: <ContactUs />,
//     },
//     {
//       path: "/restaurantmenu/:resId",
//       element: <RestaurantMenu />
//     },
//     {
//       path: "/cart",
//       element: <Cart/>
//     }
//   ],
//   errorElement: <ErrorPage />
// },
// ])


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<RouterProvider router={appRouter} />)



import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import About from './AboutUs';
import AppLayout from './App';
import ContactUs from'./ContactUs';
import Body from './Body';
import RestaurantMenu from './RestaurantMenu';
import Cart from './Cart';



const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children:[
      {
       path: "/",
       element: <Body />
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/restaurants/:resId",
        element:<RestaurantMenu />
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ]
  },
 
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={appRouter} />);

