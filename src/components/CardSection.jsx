import React from "react";
const imageOptions = [
  { id: 1, url: "/image1.PNG", label: "Birthday Confetti" },
  { id: 2, url: "/image2.PNG", label: "Birthday Cakes" },
  { id: 3, url: "/image3.PNG", label: "Sleeping Egg" },
  { id: 4, url: "/image4.PNG", label: "Chick & chick" },
];

const CardSection = ({ handleImageSelect, selectedCardId }) => {
  return (
    <section className="py-5 px-4 relative">
      <h3 className="text-xl font-semibold mb-4 text-center">
        Choose a Card Design
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {imageOptions.map((imageOption, key) => (
          <div
            key={key}
            onClick={() => handleImageSelect(imageOption.id)}
            className={`group bg-card rounded-lg overflow-hidden shadow-xs card-hover cursor-pointer transition-all duration-300 ${
              selectedCardId === imageOption.id
                ? "ring-4 ring-blue-500 ring-opacity-75 transform scale-105"
                : "hover:shadow-lg"
            }`}
          >
            <div className="h-48 overflow-hidden">
              <img
                src={imageOption.url}
                alt={imageOption.label}
                className="size-full object-cover transition-transform duration-500 group-hover:scale-107"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-1">
                {imageOption.label}
              </h3>
              {selectedCardId === imageOption.id && (
                <div className="flex items-center gap-2 text-blue-600 text-sm font-medium">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  Selected
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardSection;
