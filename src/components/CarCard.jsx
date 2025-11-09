import React from 'react'

const CarCard = ({car}) => {
  return (
      <div>
           <div className="bg-gray-50 rounded-2xl p-5 shadow hover:shadow-lg transition">
      <img src={car.image} alt={car.name} className="w-full h-40 object-contain mb-4" />
      <h3 className="text-lg font-semibold">{car.name}</h3>
      <p className="text-gray-500 text-sm mb-3">{car.type}</p>
      <div className="flex justify-between text-sm text-gray-700">
        <div><i class="fa-solid fa-user"></i> {car.seats} Seats</div>
        <div><i class="fa-solid fa-gear"></i> {car.transmission}</div>
      </div>
      <div className="flex justify-between text-sm text-gray-700 mt-2">
        <div> {car.age}</div>
        <div><i class="fa-solid fa-gas-pump"></i> {car.fuel}</div>
      </div>
    </div>
    </div>
  )
}

export default CarCard