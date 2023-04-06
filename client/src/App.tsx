import React from 'react';
import Header from './components/Header/Header';
import { RouterProvider } from 'react-router-dom';
import { routers } from './router';

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={routers} />
    </>
  );
}

export default App;
