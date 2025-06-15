import React, { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Wish from './pages/Wish';


const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function App() {
  return (
     <div className='h-screen w-full'>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={  <Wish />}
        />
        <Route
          path="/wish"
          element={  <Wish />}
        />
        <Route path="*" element={<h1>404 Not Found</h1>} />
        {/* Add more routes as needed */}
      </Routes>
        <Toaster position="top-right" reverseOrder={false} />
    </div>
    
  );
}
