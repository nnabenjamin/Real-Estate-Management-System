import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Courses from './Pages/Courses';
import CourseDetailsPage from './Pages/CourseDetailsPage';
import Analytics from './Components/Analytics';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Admin from './Pages/Admin';


const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },{
    path: "/SignUp",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: <App />,
  },
  {
    path: "/courses",
    element: <Courses />,
    
  },
  {
      path:"/coursedetails",
      element: <CourseDetailsPage />
    },
  {
      path:"/analytics",
      element: <Analytics />
    },
  {
      path:"/admin",
      element: <Admin />
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
