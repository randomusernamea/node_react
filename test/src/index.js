import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './App';
import ErrorComp from './comps/ErrorComp'
import AddPlayerForm from './comps/AddPlayerForm'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorComp text="Something went terribly wrong." />,
  },
  {
    path: "/addPlayer",
    element: <AddPlayerForm/>,
    errorElement: <ErrorComp text="Adding a player went terribly wrong." />,
  },
  {
    path: "*",
    element: <ErrorComp text="404 not found"/>,
    errorElement: <ErrorComp text="Somehow the error component got an error, this shouldn't happen." />,
  },
]);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
