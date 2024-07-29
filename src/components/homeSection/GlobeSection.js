import Link from 'next/link'
import React from 'react'

const GlobeSection = () => {
  return (
    <div className="my-20">
        <div className=" text-3xl md:text-4xl lg:max-w-screen-sm font-bold text-yellow-900 dark:text-yellow-50 mx-auto text-center mb-4">
            <h1>A Powerhouse for Top Receipes for our Cookbook</h1>
        </div>

        <div className="flex justify-around pt-[5%] relative">
            <div className="xl:h-[500px] xl:w-[500px] bg-[url('https://res.cloudinary.com/dyu76ha5j/image/upload/v1722103209/EEA96629-17BC-464D-8926-FEBB2CCEB502-removebg-preview_sj8kag.png')] bg-center bg-cover opacity-30 absolute top-2 z-10 w-[600px] h-[600px]"></div>

            <div className='max-w-xs bg-inherit sm:pr-4'>
                {/* <h4 className="opacity-100 text-2xl text-gray-700 dark:text-gray-200">Create</h4> */}
                <p className="text-xl text-gray-700 dark:text-gray-200 my-6">Create stunning receipes, first of its kind, too delicious to taste.</p>
                <div>
                    <Link href="google.com" className='flex items-center'>
                        <buton className='w-10 h-10 bg-yellow-400 text-gray-700 dark:text-gray-200 flex justify-center items-center rounded-2xl'>
                        {/* <div className='ml-2'>
                            <p className='text-lg text-gray-700 dark:text-gray-200'>Create</p>
                        </div> */} Create
                            <svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-4e04e362>
                                <path d="M18.0607 13.0607C18.6464 12.4749 18.6464 11.5251 18.0607 10.9393L8.51472 1.3934C7.92893 0.807611 6.97918 0.807611 6.3934 1.3934C5.80761 1.97919 5.80761 2.92893 6.3934 3.51472L14.8787 12L6.3934 20.4853C5.80761 21.0711 5.80761 22.0208 6.3934 22.6066C6.97918 23.1924 7.92893 23.1924 8.51472 22.6066L18.0607 13.0607ZM0 13.5H17V10.5H0V13.5Z" fill="yellow" data-v-4e04e362></path>
                            </svg>
                        </buton>

                        
                    </Link>
                </div>
            </div>

            {/* <div className='max-w-xs mt-48 bg-inherit'>
                <h4 className="opacity-100 text-2xl text-gray-700 dark:text-gray-200">View</h4>
                <p className="text-xl text-gray-700 dark:text-gray-200 my-6">Create stunning receipes, first of its kind, too delicious to taste.</p>
                <div>
                    <Link href="google.com" className='flex items-center'>
                        <div className='w-10 h-10 bg-yellow-400 text-gray-700 dark:text-gray-200 flex justify-center items-center rounded-2xl'>
                            <svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-4e04e362>
                                <path d="M18.0607 13.0607C18.6464 12.4749 18.6464 11.5251 18.0607 10.9393L8.51472 1.3934C7.92893 0.807611 6.97918 0.807611 6.3934 1.3934C5.80761 1.97919 5.80761 2.92893 6.3934 3.51472L14.8787 12L6.3934 20.4853C5.80761 21.0711 5.80761 22.0208 6.3934 22.6066C6.97918 23.1924 7.92893 23.1924 8.51472 22.6066L18.0607 13.0607ZM0 13.5H17V10.5H0V13.5Z" fill="black" data-v-4e04e362></path>
                            </svg>
                        </div>

                        <div className='ml-2'>
                            <p className='text-lg text-gray-700 dark:text-gray-200'>Create</p>
                        </div>
                    </Link>
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default GlobeSection