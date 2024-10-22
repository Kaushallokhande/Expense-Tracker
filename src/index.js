import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import App from './App';
import Contact from './components/Contact';
import Ourteam from './components/Ourteam';
import Status from './components/Status';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Entry from './components/EntryPoint/Entry';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Login/>
      },
      {
        path: 'signup',
        element: <SignUp />
      },
      {
        path: '',
        element: <Entry />,
        children: [
          {
            path: 'home',
            element: <Home />,
          },
          {
            path: 'status',
            element: <Status />,
          },
          {
            path: 'team',
            element: <Ourteam />,
          },
          {
            path: 'contact',
            element: <Contact />,
          },
        ]
      },
    ]
  }
]);

root.render(
  <RouterProvider router={router} />
);

reportWebVitals();
