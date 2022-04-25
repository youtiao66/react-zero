import React from 'react'
import Home from '@/pages/home'
import About from '@/pages/about'

// https://reactrouter.com/docs/en/v6/examples/route-objects
// https://reactrouter.com/docs/en/v6/upgrading/v5#use-useroutes-instead-of-react-router-config
export default [
  { index: true, element: <Home /> },
  {
    path: "/about",
    element: <About/>
  },
  // { path: "*", element: <NoMatch /> },
];
