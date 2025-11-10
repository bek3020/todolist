import React from 'react';

const Logo = ({ dark }) => { 
  return (
    <div className={`max-w-[1200px] mx-auto px-6 py-12 ${dark ? 'dark' : ''}`}> 
      
      <div className="mb-20">
        <p className="text-sm font-medium text-gray-800 mb-6 dark:text-gray-400">More than 50 brands of cars</p>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 items-center">
          {['Ford', 'Nissan', 'Toyota', 'Dodge', 'Hyundai', 'Jeep'].map((brand) => (
            <div key={brand} className="flex justify-center h-8">
               <span className="text-xl font-bold text-gray-800 dark:text-gray-300">{brand.toUpperCase()}</span> 
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-center mb-16 mt-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 dark:text-gray-100">Unparalleled service</h2>
        <p className="text-gray-500 max-w-xl mx-auto dark:text-gray-400">
          Whether you are looking for Newark Airport car rental, an insurance replacement vehicle or minivan to take on vacation Car rental has it all.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        
        <div className="p-8 bg-gray-50 rounded-lg shadow-sm border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900 leading-snug w-3/4 dark:text-gray-200">Book online, pay online</h3>
                <div className="p-3 rounded-lg flex items-center justify-center bg-white border border-green-500/10 dark:bg-gray-700 dark:border-green-600/20">
                    <i className="fa-solid fa-desktop text-2xl text-green-700 dark:text-green-400"></i>
                </div>
            </div>
            <p className="text-gray-500 mt-2 text-sm dark:text-gray-400">Complete the booking process A-Z, with our easy online system</p>
        </div>
        
        <div className="p-8 bg-gray-50 rounded-lg shadow-sm border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900 leading-snug w-3/4 dark:text-gray-200">Guaranteed car reservation</h3>
                <div className="p-3 rounded-lg flex items-center justify-center bg-white border border-green-500/10 dark:bg-gray-700 dark:border-green-600/20">
                    <i className="fa-solid fa-shield-halved text-2xl text-green-700 dark:text-green-400"></i>
                </div>
            </div>
            <p className="text-gray-500 mt-2 text-sm dark:text-gray-400">When you book with Car rental, you can be confident your car will be waiting for you</p>
        </div>

        <div className="p-8 bg-gray-50 rounded-lg shadow-sm border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900 leading-snug w-3/4 dark:text-gray-200">Unparalleled customer service</h3>
                <div className="p-3 rounded-lg flex items-center justify-center bg-white border border-green-500/10 dark:bg-gray-700 dark:border-green-600/20">
                    <i className="fa-solid fa-users text-2xl text-green-700 dark:text-green-400"></i>
                </div>
            </div>
            <p className="text-gray-500 mt-2 text-sm dark:text-gray-400">We're here to help. We pride ourselves in our customer service</p>
        </div>
        
        <div className="p-8 bg-gray-50 rounded-lg shadow-sm border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900 leading-snug w-3/4 dark:text-gray-200">No reservation or booking fees</h3>
                <div className="p-3 rounded-lg flex items-center justify-center bg-white border border-green-500/10 dark:bg-gray-700 dark:border-green-600/20">
                    <i className="fa-solid fa-calendar-check text-2xl text-green-700 dark:text-green-400"></i>
                </div>
            </div>
            <p className="text-gray-500 mt-2 text-sm dark:text-gray-400">No cancellation fees if cancelled 24 hours prior to booking time</p>
        </div>

      </div>
      
    </div>
  );
};

export default Logo;