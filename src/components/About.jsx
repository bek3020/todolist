import { useState } from "react";

const reviews = [
  {
    id: 1,
    name: "Savannah Nguyen",
    email: "savannahnguyen@gmail.com",
    text: "Sagittis sed tortor, elementum vitae varius sodales consectetur. Vitae arcu ut morbi bibendum ullamcorper feugiat...",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Ronald Richards",
    email: "ronaldrichards@gmail.com",
    text: "Placerat pulvinar in amet sem id dignissim est pellentesque mi quis. Porttitor blandit auctor odio a ornare...",
    rating: 4.5,
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <div className="flex w-full max-w-6xl mx-auto bg-white rounded-xl overflow-hidden shadow-lg">
     
      <div className="w-1/3 p-8 bg-white flex flex-col justify-center">
        <p className="text-sm text-gray-500 mb-2">From Google</p>
        <h2 className="text-2xl font-bold mb-4">Hear what the community is saying</h2>
        <p className="text-gray-500 mb-6">More interesting reviews on Instagram</p>
        <button className="px-6 py-2 border rounded-full text-pink-500 border-pink-500 hover:bg-pink-100 transition">
          Instagram
        </button>
      </div>

      <div className="w-2/3 bg-green-600 p-8 relative">
        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="flex items-center mb-4">
            <img src={reviews[currentIndex].avatar} alt={reviews[currentIndex].name} className="w-12 h-12 rounded-full mr-4" />
            <div>
              <p className="font-semibold">{reviews[currentIndex].name}</p>
              <p className="text-sm text-gray-500">{reviews[currentIndex].email}</p>
            </div>
          </div>
          <p className="text-gray-700 mb-4">{reviews[currentIndex].text}</p>
          <div className="flex items-center">
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i} className={`text-green-500 ${i < Math.floor(reviews[currentIndex].rating) ? "text-green-500" : "text-gray-300"}`}>
                ★
              </span>
            ))}
            {reviews[currentIndex].rating % 1 !== 0 && <span className="text-green-500">½</span>}
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-4">
          <button onClick={prevSlide} className="bg-white rounded-full p-2 hover:bg-gray-100"></button>
          <button onClick={nextSlide} className="bg-white rounded-full p-2 hover:bg-gray-100"></button>
        </div>
      </div>
    </div>
  );
}
