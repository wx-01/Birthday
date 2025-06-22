import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Spline from "@splinetool/react-spline";
import {  Heart, Calendar, Eye, ArrowRight } from 'lucide-react';
import { getWishFromFirebase } from '../lib/wishService';
import confetti from 'canvas-confetti';

const SharedWish = () => {
  const { wishId } = useParams();
  const navigate = useNavigate();
  const [wishData, setWishData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  // Card data mapping (same as in Screen.jsx but with all 4 cards)
  const cardData = {
    1: {
      id: 1,
      title: "Birthday Confetti",
      splineUrl: "https://prod.spline.design/d3mr7EaVpXl6oH-R/scene.splinecode",
      description: "Interactive birthday cake",
    },
    2: {
      id: 2,
      title: "Birthday Cakes",
      splineUrl: "https://prod.spline.design/rgQcB1tDzQtW9PU1/scene.splinecode",
      description: "Colorful party balloons",
    },
    3: {
      id: 3,
      title: "Sleeping Egg",
      splineUrl: "https://prod.spline.design/xh5eTYUk17EabN44/scene.splinecode",
      description: "Surprise gift box",
    },
    4: {
      id: 4,
      title: "Chick & chick",
      splineUrl: "https://prod.spline.design/YtzfU-V7B78yXoOI/scene.splinecode",
      description: "Celebration confetti",
    },
  };

  useEffect(() => {
    const loadWishData = async () => {
      if (!wishId) {
        setError('No wish ID found in the link');
        setLoading(false);
        return;
      }

      try {
        const data = await getWishFromFirebase(wishId);
        
        if (!data) {
          setError('Wish not found. The link may be invalid or expired.');
          setLoading(false);
          return;
        }

        setWishData(data);
        setLoading(false);
        
        // Show mobile/desktop specific toast
        const width = window.innerWidth;
        if (width < 600) {
          toast.success('Pinch to zoom and rotate! Loading..');
        } else {
          toast.success('Use your mouse to rotate the screen! Loading..');
        }
      } catch (err) {
        console.error('Error loading wish data:', err);
        setError(err.message || 'Failed to load wish data');
        setLoading(false);
      }
    };

    loadWishData();
  }, [wishId]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="text-center text-white">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-lg">Loading your special wish...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="text-center text-white max-w-md mx-auto p-8">
          <div className="text-6xl mb-4">😔</div>
          <h2 className="text-2xl font-bold mb-4">Oops! Something went wrong</h2>
          <p className="text-lg mb-6">{error}</p>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go to Homepage
          </button>
        </div>
      </div>
    );
  }

  const selectedCard = cardData[wishData.cardId];
  const splineUrl = selectedCard?.splineUrl || "https://prod.spline.design/d3mr7EaVpXl6oH-R/scene.splinecode";


  return (
    <div className="h-screen relative overflow-hidden">

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
          <span className="font-semibold text-purple-500 text-shadow-lg">Special Birthday Wish</span>
        </div>
        
        <h3 className="text-lg font-bold mb-3 text-blue-500 text-shadow-lg text-shadow-blue-200/50">
          Dear {wishData.name} 🎉
        </h3>
        
        <p className="text-md leading-relaxed mb-3 text-black text-wrap max-w-50 text-shadow-md text-shadow-white/20">
         ✨ {wishData.message}✨
        </p>
      </div>

      {/* Spline 3D Scene */}
      <Spline scene={splineUrl} />
    
    </div>
  );
};
export default SharedWish;