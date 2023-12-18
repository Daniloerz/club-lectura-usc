import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import Home from '../components/main/Home';
import SignInSide from '../components/main/SignInSide';
import SignUp from '../components/main/SignUp';
import VisitorPage from '../components/visitor/VisitorPage';
import BookInfoVisitor from '../components/visitor/BookInfoVisitor';
import ClubInfoVisitor from '../components/visitor/ClubInfoVisitor';
import AdminSection from '../components/adminsection/AdminSection';
import UserSection from '../components/users/UserSection';
import SearchClub from '../components/adminsection/SearchClub';
import EditSection from '../components/adminsection/EditSection';

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
    path: "/clubinfov",
    element: <ClubInfoVisitor />,
    errorElement: <h1>Error</h1>,
  },
  {
    path: "/admin+",
    element: <AdminSection />,
    errorElement: <h1>Error</h1>,
  },
  {
    path: "/clubadmin",
    element: <SearchClub />,
    errorElement: <h1>Error</h1>,
  },
  {
    path: "/user",
    element: <UserSection />,
    errorElement: <h1>Error</h1>,
  },
  {
    path: "/edit",
    element: <EditSection />,
    errorElement: <h1>Error</h1>,
  },
]);

export default router;
