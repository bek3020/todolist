import React from 'react'
import Banner_img from '../assets/img/banner_img.png';
const Banner = ({dark}) => {
  return (
      <div>
          <section className={`banner py-10 mb-100 ${dark ? 'bg-gray-900' : 'bg-white'}`}>
              <div className="max-w-[1200px] w-full mx-auto px-4 py-10">
                  <div className={`${dark ? 'filter brightness-75' : ''} rounded-lg transition duration-500`}   >
                      <img className='rounded-lg absolute ' src={Banner_img} alt="" />
                  </div>
                  <div className='relative p-9'>
                      <h1 className="font-montserrat text-white mb-2 font-semibold text-[24px] leading-[100%] tracking-normal text-center sm:text-[36px]">Compact cars</h1>
                      <p className='font-montserrat font-normal text-white text-[16px] leading-[100%] tracking-normal text-center'>
                          Rent cars as you are comfortable and where you are <br /> comfortable.
                      </p>
                  </div>
                   <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4/5 md:w-2/3 lg:w-1/2">
              <div className="flex items-center bg-white dark:bg-zinc-700 rounded-full shadow-2xl p-2 md:p-3 ring-4 ring-gray-200 dark:ring-zinc-600">
                <input
                  type="text"
                  placeholder="Find the car of your dreams"
                  className="flex-grow p-2 md:p-3 text-lg border-none focus:ring-0 rounded-full dark:bg-zinc-700 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none"
                />
                <button className="bg-green-600 hover:bg-green-700 text-white p-3 md:p-4 rounded-full ml-2 shadow-lg transition duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
              </div>
          </section>
    </div>
  )
}

export default Banner