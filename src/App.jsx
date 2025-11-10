  import React, { useState } from 'react'
  import Header from './components/Header'
import Banner from './components/Banner'
  import CategoryTabs from "./components/CategoryTabs";
import CarList from "./components/CarList";
import About from './components/About';
  const App = () => {
    const [dark ,setDark] = useState(false)

    const [category, setCategory] = useState("Compact");
    return (
      <div className={dark ? 'dark bg-gray-900 text-gray-100 min-h-screen text-grey-300' : 'bg-white min-h-screen text-gray-800'}>
        <Header dark={dark} setDark={setDark} />
        <Banner dark={dark} />
        <section className='"px-6 py-12 max-w-[1200px] mx-auto'>
          <h1 className='text-3xl font-bold text-center mb-3'>
            Choose the car of your dreams
          </h1>
          <p className="text-gray-500 text-center mb-8 dark:text-gray-400">
            We provide our customers with the most incredible driving emotions. <br />
            That is why there are only world-class cars in our fleet.
          </p>
          <CategoryTabs selected={category} onSelect={setCategory} dark={dark} />
          <CarList category={category} dark={dark} />
          <div className="flex justify-center mt-10">
            <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition">
              View all cars
            </button>
          </div>
        </section>
        
         <About dark= {dark} />
      </div>
    );
  }

  export default App
