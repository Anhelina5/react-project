import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from "./routes/homePage/homePage";
import ListPage from "./routes/listPage/listPage";
import Layout from "./routes/layout/layout";
import ProfilePage from "./routes/profilePage/profilePage";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/list",
          element: <ListPage />
        },
        
        {
          path: "/profile",
          element: <ProfilePage />
        },
       
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
