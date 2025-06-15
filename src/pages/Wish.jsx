import React, { Suspense, useEffect} from 'react';
import toast from 'react-hot-toast';

const LazyScreen = React.lazy(() => import('/src/components/Happy.jsx'));

const Wish = () => {
     useEffect(() => {
        
       const width = window.innerWidth;
    if (width < 600) {
      toast.success('Pinch to zoom and rotate!');
    } else {
      toast.success('Use your mouse to rotate the screen!');
    }
  }, []);
  return (
    
   <div className='h-screen overflow-none'>
      <Suspense fallback={<div className='flex justify-center items-center h-full text-3xl text-blue-500 text-semibold'>Loading...</div>}>
           <LazyScreen />
      </Suspense>
    </div>
  )
}

export default Wish