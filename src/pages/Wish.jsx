import React, { useEffect} from 'react';
import toast from 'react-hot-toast';
import Spline from "@splinetool/react-spline";

const Wish = ({ cardData}) => {
  useEffect(() => {
    const width = window.innerWidth;
    if (width < 600) {
      toast.success('Pinch to zoom and rotate! Loading..');
   
    } else {
      toast.success('Use your mouse to rotate the screen! Loading..');
      
    }
  }, []);

  // Default spline URL if no cardData is provided
  const defaultSplineUrl = "https://prod.spline.design/d3mr7EaVpXl6oH-R/scene.splinecode";
  const splineUrl = cardData?.splineUrl || defaultSplineUrl;

  return (
    <div className='h-screen overflow-none relative'>      
    
      <Spline scene={splineUrl} />
    </div>
  )
}

export default Wish