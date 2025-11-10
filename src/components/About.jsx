import React from 'react'

const About = ({dark}) => {
  return (
    <section className={`py-16 ${dark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center text-blue-600 mb-4">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.24 10.27v-2.09c0-.49-.07-.94-.2-1.34H12a5.55 5.28 0 00-.08-1.74l-.06-.18c-.06-.18-.12-.35-.19-.52h-.01c-.11-.27-.24-.53-.41-.78-.17-.25-.37-.48-.59-.69-.22-.21-.45-.4-.7-.57-.25-.17-.51-.3-.78-.41-.27-.11-.55-.19-.84-.24-.29-.05-.59-.07-.88-.07-.49 0-.97.07-1.42.2-.45.13-.88.31-1.28.53-.4.22-.77.48-1.1.78-.33.3-.6.64-.81 1.01-.21.37-.38.77-.49 1.18-.11.41-.16.84-.16 1.28 0 .49.07.97.2 1.42.13.45.31.88.53 1.28.22.4.48.77.78 1.1.3.33.64.6.99.81.35.21.72.38 1.11.49.39.11.79.16 1.2.16.49 0 .97-.07 1.42-.2.45-.13.88-.31 1.28-.53.4-.22.77-.48 1.1-.78.33-.3.6-.64.81-1.01.21-.37.38-.77.49-1.18.11-.41.16-.84.16-1.28z"/>
            </svg>
            <span className="text-sm font-medium">From Google</span>
          </div>
          <h2 className={`text-4xl font-bold mb-4 ${dark ? 'text-white' : 'text-gray-900'}`}>
            Hear what the community is saying
          </h2>
          <div className="h-1 w-48 mx-auto mb-8" 
            style={{ background: 'linear-gradient(to right, #4285F4, #34A853, #FBBC05, #EA4335)' }}>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Review Card 1 */}
          <div className={`p-6 rounded-lg shadow-lg ${dark ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="flex items-center gap-4 mb-4">
              <img 
                src="https://via.placeholder.com/50"
                alt="Savannah Nguyen" 
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className={`font-semibold ${dark ? 'text-white' : 'text-gray-900'}`}>Savannah Nguyen</h3>
                <p className="text-sm text-gray-500">savannahnguyen@gmail.com</p>
              </div>
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google"
                className="w-6 h-6 ml-auto"
              />
            </div>
            <p className={`mb-4 ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
              Sagittis sed tortor, elementum vitae varius sodales consectetur. Vitae arcu ut morbi bibendum ullamcorper feugiat. Venenatis hendrerit cursus egestas id ornare nunc vulputate aliquam sapien.
            </p>
            <div className="flex text-yellow-400">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>

          {/* Review Card 2 */}
          <div className={`p-6 rounded-lg shadow-lg ${dark ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="flex items-center gap-4 mb-4">
              <img 
                src="https://via.placeholder.com/50"
                alt="Ronald Richards" 
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className={`font-semibold ${dark ? 'text-white' : 'text-gray-900'}`}>Ronald Richards</h3>
                <p className="text-sm text-gray-500">ronaldrichards@gmail.com</p>
              </div>
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google"
                className="w-6 h-6 ml-auto"
              />
            </div>
            <p className={`mb-4 ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
              Placerat pulvinar in amet sem id dignissim est pellentesque mi quis. Porttitor blandit volutpat odio a or bibendum molestie.
            </p>
            <div className="flex text-yellow-400">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className={`text-lg mb-6 ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
            More interesting reviews on Instagram
          </p>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
            style={{
              backgroundImage: 'linear-gradient(to right, #833AB4, #FD1D1D, #FCB045)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              border: '2px solid transparent',
              borderImage: 'linear-gradient(to right, #833AB4, #FD1D1D, #FCB045) 1'
            }}
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  )
}

export default About