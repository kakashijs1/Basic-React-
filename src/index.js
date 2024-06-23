import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import MyUseEffect from './pages/MyUseEffect';
import Hello from './Hello';
import MyInput from './pages/MyInput';
import MyDropdown from './pages/MyDropdown';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Hello />
  },
  {
    path: "/MyUseEffect",
    element: <MyUseEffect />
  },
  {
    path: "/MyInput",
    element: <MyInput />
  },
  {
    path: "MyDropdown",
    element: <MyDropdown />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

reportWebVitals();
