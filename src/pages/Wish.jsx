import React, { useEffect, useState} from 'react';
import toast from 'react-hot-toast';
import Spline from "@splinetool/react-spline";
import confetti from 'canvas-confetti';
import { ArrowRight, Heart } from 'lucide-react';

const Wish = ({ cardData}) => {
  const [wishOpen, setWishOpen]= useState(false);
    const runConfetti=()=>{
       confetti({
        particleCount: 250,
        spread: 100,
        origin: {
          y: 0.6,
        }
      });
    };
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
    {/* Wish message overlay */}
      <div onClick={() => {
        setWishOpen(!wishOpen);
        runConfetti();
      }}
      className='cursor-pointer absolute top-39 left-4 bg-white/60 ring-1 ring-black/5 shadow-lg backdrop-blur-md text-black p-2 rounded-lg max-w-sm animate-bounce'
      ><ArrowRight className='animate-bounce text-purple-600' /></div>
      <div className={`absolute top-50 translate-x-[-500px] transiiton-all duration-300 ease-in-out delay-200 z-10 bg-white/50 shadow-lg ring-1 ring-black/5 backdrop-blur-md text-white p-4 rounded-lg max-w-sm ${wishOpen ? 'translate-x-[8px]' : ''}`}>
        <div className="flex items-center gap-2 mb-3">
          <Heart size={16} className="text-red-400 text-shadow-lg" />
          <span className="font-semibold text-purple-500 text-shadow-lg text-shadow-white/20">Special Birthday Wish</span>
        </div>
        
        <h3 className="text-lg font-bold mb-3 text-blue-500 text-shadow-lg text-shadow-blue-200/50">
          Dear (Name) 🎉
        </h3>
        
        <p className="text-md leading-relaxed mb-3 text-black text-wrap max-w-50 text-shadow-md text-shadow-white/20">
         ✨ I Wish You a Very happy Birthday, May you live a happy life✨
        </p>
      </div>
      <Spline scene={splineUrl} />
     
    </div>
  )
}

export default Wish