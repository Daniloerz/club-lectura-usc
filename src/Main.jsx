import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './components/Home';
import SignInSide from './components/SignInSide';
import SignUp from './components/SignUp';
import LandingPage from './components/LandingPage';
import BookInformation from './components/BookInformation';
import FindClubs from './components/FindClubs';
import ClubInfo from './components/ClubInfo';
import AdminSection from './components/dashboard/AdminSection';
import UserSection from './components/dashboard/UserSection';

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
  },
  {
    path: "/findclubs",
    element: <FindClubs />,
    errorElement: <h1>Error</h1>,
  },
  {
    path: "/clubinfo",
    element: <ClubInfo />,
    errorElement: <h1>Error</h1>,
  },
  {
    path: "/AdminSection",
    element: <AdminSection />,
    errorElement: <h1>Error</h1>,
  },
  {
    path: "/user",
    element: <UserSection />,
    errorElement: <h1>Error</h1>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
