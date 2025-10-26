import React from 'react'
import Lottie from 'lottie-react'
import animationData from '../assets/404.json'

export default function Page404() {
  return (
    <div>
        <section  className="bg-secondary py-15">
            <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-10 ">
                <h1 className='text-2xl font-semibold text-center text-primary mb-6'>404 - Page Not Found</h1>
                <p className='text-center text-gray-400'>The page you are looking for might have been removed or is temporarily unavailable.</p>
                <Lottie 
                    className='w-full sm:w-1/3 h-100' 
                    animationData={animationData} 
                    loop={true} />
            </div>
        </section>
    </div>
  )
}
