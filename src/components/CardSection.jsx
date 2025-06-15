import React from 'react'
  const imageOptions = [
    { id: 1, url: "/image1.PNG", label: "Option 1" },
    { id: 2, url: "/image2.jpg", label: "Option 2" },
    { id: 3, url: "/image3.jpg", label: "Option 3" },
  ];

const CardSection = (handleImageSelect) => {
          return(
 <section className="py-5 px-4 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {imageOptions.map((imageOption, key) => (
          <div
            key={key}
            onClick={() => handleImageSelect(imageOption.id)}
            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={imageOption.url}
                alt={imageOption.label}
                className="size-full object-cover transition-transform duration-500 group-hover:scale-107"
              />
            </div>
            <h3 className="text-xl font-semibold mb-1 ">{imageOption.label}</h3>
           <div className="flex justify-between items-center">
        

            </div>
           </div>
           
        ))}
      </div>
   
    </section>
          )
}

export default CardSection