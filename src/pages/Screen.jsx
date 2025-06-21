import React, { useState } from "react";
import Wish from "./Wish";

const Screen = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  // Array of card objects with different Spline scenes
  const cards = [
    {
      id: 1,
      title: "Birthday Confetti",
     url: "/image1.PNG",
      splineUrl: "https://prod.spline.design/d3mr7EaVpXl6oH-R/scene.splinecode",
      description: "Interactive birthday cake",

    },
    {
      id: 2,
      title: "Birthday Cakes",
      url: "/image2.PNG",
      splineUrl: "https://prod.spline.design/rgQcB1tDzQtW9PU1/scene.splinecode",
      description: "Colorful party balloons",

    },
    {
      id: 3,
      title: "Sleeping Egg",
       url: "/image3.PNG",
      splineUrl: "https://prod.spline.design/xh5eTYUk17EabN44/scene.splinecode",
      description: "Surprise gift box",

    },
    {
      id: 4,
      title: "Chick & chick",
       url: "/image4.PNG",
      splineUrl: "https://prod.spline.design/YtzfU-V7B78yXoOI/scene.splinecode",
      description: "Celebration confetti",

    },
    
  ];

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleBackToGrid = () => {
    setSelectedCard(null);
  };

  // If a card is selected, render the Wish component with props
  if (selectedCard) {
    return <Wish cardData={selectedCard} onBack={handleBackToGrid} />;
  }

  // Render the grid of cards
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-12 mt-10">
          Choose Your Birthday Experience
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => handleCardClick(card)}
              className={`${card.bgColor} rounded-xl text-white  cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group shadow-xl  overflow-hidden card-hover`}
            >
              <div className="h-48 overflow-hidden">
              <img
                src={card.url}
                alt={card.title}
                className="size-full object-cover transition-transform duration-500 group-hover:scale-107"
              />
            </div>
            <h3 className="text-xl font-semibold mb-1 p-1">{card.title}</h3>
           <div className="flex justify-between items-center">
        

            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Screen;
