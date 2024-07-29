import Link from 'next/link'
import React from 'react'

const GlobeSection = () => {
  return (
    <div className="my-20">
        <div className=" text-3xl md:text-4xl lg:max-w-screen-sm font-bold text-yellow-900 dark:text-yellow-50 mx-auto text-center mb-4">
            <h1>A Powerhouse for Top Receipes for our Cookbook</h1>
        </div>

        <div className="flex flex-col justify-around pt-[5%] relative md:flex-row gap-4 md:gap-2 px-6">
            <div className="xl:h-[500px] xl:w-[500px] bg-[url('https://res.cloudinary.com/dyu76ha5j/image/upload/v1722103209/EEA96629-17BC-464D-8926-FEBB2CCEB502-removebg-preview_sj8kag.png')] bg-center bg-cover opacity-30 absolute top-2 z-10 w-full lg:w-[600px] h-[600px]"></div>

            <div className='md:max-w-xs bg-[#eddaca] dark:bg-[#9d8877] sm:pr-4 p-3 h-fit rounded'>
                <h4 className="opacity-100 text-2xl text-gray-700 font-bold">Gourmet Delights</h4>
                <p className="text-sm text-gray-700 my-6 font-semibold">Elevate your cooking with gourmet delights that impress and inspire. These recipes bring restaurant-quality dishes to your kitchen, perfect for special occasions or culinary adventures</p>
            </div>
            <div className='md:max-w-xs bg-[#eddaca] p-3 h-fit  md:mt-48 rounded dark:bg-[#9d8877]'>
                <h4 className="opacity-100 text-2xl text-gray-700  font-bold">Exotic and Flavorful</h4>
                <p className="text-sm text-gray-700  my-6 font-semibold">Spice up your cooking with exotic and flavorful ingredients. Our recipes showcase unique ingredients that add depth and excitement to your culinary creations.</p>
            </div>
            <div className=' md:max-w-xs bg-[#eddaca] p-3 h-fit rounded dark:bg-[#9d8877]'>
                <h4 className="opacity-100 text-2xl text-gray-700  font-bold">Family Favourites</h4>
                <p className="text-sm text-gray-700  my-6 font-semibold">Explore family favorites that everyone will love. From comforting classics to new twists, these recipes are sure to bring smiles and satisfy even the pickiest eaters.</p>
                
            </div>

            <div className='md:max-w-xs md:mt-48 bg-[#eddaca] p-3 h-fit rounded dark:bg-[#9d8877]'>
                <h4 className="opacity-100 text-2xl text-gray-700 font-bold">Comfort Food</h4>
                <p className="text-sm text-gray-700  my-6 font-semibold">Indulge in comforting recipes that warm your heart and soul. From hearty stews to decadent desserts, our comfort food collection brings a sense of nostalgia to every bite.</p>
                
            </div>
        </div>
    </div>
  )
}

export default GlobeSection