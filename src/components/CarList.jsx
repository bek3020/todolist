import React from 'react'
import CarCard from './CarCard'
import { cars } from '../cars'

const CarList = ({ category }) => {
  const filtered = category ? cars.filter((car) => car.category === category) : cars;

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filtered.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
};

export default CarList;
