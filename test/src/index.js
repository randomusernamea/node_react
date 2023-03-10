import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './App';
import RegisterComp from './comps/RegisterComp'
import LoginComp from './comps/LoginComp'
import ErrorComp from './comps/ErrorComp'
import AddPlayerForm from './comps/AddPlayerForm'
import UploadImageComp from './comps/uploadImageComp'

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
    path: "/registrar",
    element: <RegisterComp/>,
    errorElement: <ErrorComp text="Register component failed to load."/>,
  },
  {
    path: "/login",
    element: <LoginComp/>,
    errorElement: <ErrorComp text="Login component failed to load."/>,
  },
  {
    path: "/uploadImage",
    element: <UploadImageComp/>,
    errorElement: <ErrorComp text="Upload component failed to load."/>,
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
