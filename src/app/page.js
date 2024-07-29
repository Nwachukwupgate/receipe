import Image from "next/image";

import GlobeSection from "@/components/homeSection/GlobeSection";
import ReceipeCards from "@/components/homeSection/ReceipeCards";


export default function Home() {
  return (
    <main className="bg-white dark:bg-gray-900 container mx-auto">
      <div className="relative bg-yellow-50 dark:bg-gray-900">
        <div className="container m-auto px-6 pt-8 md:px-12 lg:pt-[1.8rem] lg:px-7">
            <div className="flex items-center flex-wrap px-2 md:px-0">
                <div className="relative lg:w-6/12 sm:py-14 md:py-14 xl:py-16">
                    <h1 className="font-bold text-5xl text-yellow-900 dark:text-yellow-50 lg:text-7xl lg:w-10/12">Welcome to Recipes </h1>
                    <h3 className="font-semibold text-2xl text-yellow-900 pt-6 dark:text-yellow-50 md:text-3xl lg:w-10/12">Discover, Create, and Savor the Best Recipes from Around the World</h3>
                    <div className="w-full mt-8">
                        <button type="button" title="Explore" className="ml-auto py-3 rounded-full text-center transition bg-gradient-to-b from-yellow-200 to-yellow-300 hover:to-red-300 active:from-yellow-400 focus:from-red-400 px-12">
                            <span className=" text-yellow-900 font-semibold block">
                                Explore
                            </span>
                            
                        </button>
                        
                    </div>
                    <p className="mt-8 text-gray-700 dark:text-gray-200 lg:w-10/12">Build and personalize your recipes with ease, from ingredients to instructions.</p>
                </div>
                <div className="-mb-10 lg:w-6/12">
                    <img 
                        src="https://tailus.io/sources/blocks/food-delivery/preview/images/food.webp" 
                        className="relative w-full h-auto  md:w-[60rem] sm:w-1/2"
                        alt="food illustration" 
                        loading="lazy" 
                        width="100" 
                        height="450" 
                    />
                </div>

            </div>
        </div>

        <GlobeSection />

        <ReceipeCards />
    </div>
    </main>
  );
}
