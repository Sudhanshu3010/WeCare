import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/About';
import Contact from "./pages/Contact";
import Donation from "./pages/Donation";
import Signup from  "./pages/Signup"
import Home from './pages/Home';



const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
   
  },
  {
   path:"/about",
   element:<About/>
  },
  {
    path:"/contact",
    element:<Contact/>
  },
  {
    path:"/Donation",
    element:<Donation/>
  },
  {
    path:"/signup",
    element:<Signup/>
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);



