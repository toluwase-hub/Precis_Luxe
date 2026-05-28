import React from 'react'
import Button from './Button'

const About = () => {
  return (
    <div className='contain '>

        <h1 className='text-center font-bold text-4xl'>ABOUT US</h1>
        <h1 className='font-light text-center text-sm my-1 '>ABOUT PRECIS_LUXE</h1>

        <div className='flex gap-3 items-center justify-center my-15 flex-col lg:flex-row '>

            <div className='flex flex-col gap-4'>
                <h1 className='font-bold'>ABOUT PRECIS_LUXE</h1>
                <div>
                              <h1 className='text-3xl lg:text-4xl font-bold'>BUILT FOR COMFORT,</h1>
                <h1 className='text-3xl lg:text-4xl font-bold'>MADE FOR EVERYDAY.</h1>
                </div>
      

                <p className='font-light'>
                    At Precis_Luxe, we create miminalist streetwear that blends quality, comfort, and modern stle. Every piece is designed to move with you, wherever life takes you.
                </p>

                <Button
                buttontext = "LEARN MORE"
                textcolor = "white" />
            </div>



            <div className='lg:w-450 w-full '>
                <img src="./images/hoodie4.jpg" className='h-100 w-full object-cover' alt="" />
            </div>



        </div>
    </div>
  )
}

export default About