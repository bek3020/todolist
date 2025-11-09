import React from 'react'

const CategoryTabs = ({ selected, onSelect }) => {
    const categories = ["Compact", "Sports", "Vans"]
  return (
      <div>
          <div className='flex justify-center gap-3 mb-6'>
              {categories.map((cat) => (
                 <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-5 py-2 rounded-full border transition ${
            selected === cat
              ? "bg-green-600 text-white"
              : "bg-white border-gray-300 hover:bg-green-100"
          }`}
        >
          {cat}
        </button>
              ))}
          </div>
    </div>
  )
}

export default CategoryTabs