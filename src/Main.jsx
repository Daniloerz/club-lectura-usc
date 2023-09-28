import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './components/Home';
import SignInSide from './components/SignInSide';
import SignUp from './components/SignUp';
import VisitorPage from './components/visitor/VisitorPage';
import BookInfoVisitor from './components/visitor/BookInfoVisitor';
import FindClubs from './components/FindClubs';
import ClubInfoVisitor from './components/visitor/ClubInfoVisitor';
import AdminCreate from './components/adminsection/AdminCreate';
import AdminProfile from './components/adminsection/AdminProfile';
import UserSection from './components/users/UserSection';
import SearchBook from './components/users/SearchBook';
import SearchClub from './components/users/SearchClub';
import SearchBookAdmin from './components/adminsection/SearchBookAdmin';
import SearchClubAdmin from './components/adminsection/SearchClubAdmin';


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
    path: "/visitor",
    element: <VisitorPage />,
    errorElement: <h1>Error</h1>,
  },
  {
    path: "/bookinfov",
    element: <BookInfoVisitor />,
    errorElement: <h1>Error</h1>,
  },
  {
    path: "/findclubs",
    element: <FindClubs />,
    errorElement: <h1>Error</h1>,
  },
  {
    path: "/clubinfov",
    element: <ClubInfoVisitor />,
    errorElement: <h1>Error</h1>,
  },
  {
    path: "/admin+",
    element: <AdminCreate />,
    errorElement: <h1>Error</h1>,
  },
  {
    path: "/admin1",
    element: <AdminProfile />,
    errorElement: <h1>Error</h1>,
  },
  {
    path: "/bookadmin",
    element: <SearchBookAdmin />,
    errorElement: <h1>Error</h1>,
  },
  {
    path: "/clubadmin",
    element: <SearchClubAdmin />,
    errorElement: <h1>Error</h1>,
  },
  {
    path: "/user",
    element: <UserSection />,
    errorElement: <h1>Error</h1>,
  },
  {
    path: "/book",
    element: <SearchBook />,
    errorElement: <h1>Error</h1>,
  },
  {
    path: "/club",
    element: <SearchClub />,
    errorElement: <h1>Error</h1>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
