import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './Home';
import SignInSide from './SignInSide';
import SignUp from './SignUp';
import LandingPage from './LandingPage';
import BookInformation from './BookInformation';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Error</h1>,
  },
  {
    path: "/login",
    element: <SignInSide />,
    errorElement: <h1>Error</h1>,
  },
  {
    path: "/signup",
    element: <SignUp />,
    errorElement: <h1>Error</h1>,
  },
  {
    path: "/landingpage",
    element: <LandingPage />,
    errorElement: <h1>Error</h1>,
  },
  {
    path: "/bookInfo",
    element: <BookInformation />,
    errorElement: <h1>Error</h1>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
