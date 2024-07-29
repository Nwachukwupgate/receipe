'use client'

import {useState, useEffect} from 'react';
import SpeedDial from '@/components/utility/SpeedDial';
import { getRecipeById } from '@/services/recipeService';


export default function Detail({params}) {
    const id = params.id
    const [recipe, setRecipe] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    // const router = useRouter();
    // const { id } = router.query;

    useEffect(() => {
        const fetchRecipe = async () => {
            setIsLoading(true);
            try {
                const data = await getRecipeById(id);
                setRecipe(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };
   
        if (id) {
            fetchRecipe();
        }
    }, [id]);

    console.log(id);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!recipe) {
        return <div>No recipe found</div>;
    }


    return (
        <>
            <main className="container flex flex-col justify-center mt-10 px-8 w-full">
                <div className="mb-4 md:mb-0 w-full relative ">
                    <div className="px-4 lg:px-0">
                        <h2 className="text-4xl font-semibold text-gray-800 leading-tight pb-3">
                            {recipe?.title}
                        </h2>
                    </div>
                   <div className='flex justify-center w-3/5'> 
                        <img 
                            src={recipe?.imageUrl}
                            className=" object-cover lg:rounded" 
                            style={{ height: "28em" }} 
                            alt="Cover"
                        />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row lg:space-x-12">
                    <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
                        

                        <div className="pb-6">
                            <div className="max-w-5xl m-auto">
                                <h1 className="font-semibold text-2xl pb-2">Ingredients</h1>
                                
                                <ul className="border border-gray-200 rounded overflow-hidden shadow-md">
                                    <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">{recipe?.ingredients}</li>
                                  
                                </ul>
                            </div>
                        </div>
                        
                        <h1 className="font-semibold text-2xl pb-2">Instructions</h1>
                        <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded"
                            dangerouslySetInnerHTML={{ __html: recipe?.instructions }} />

                        
                        
                    </div>
                    {/* <div className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
                        <div className="p-4 border-t border-b md:border md:rounded">
                            <div className="flex py-2">
                                <img 
                                    src="https://randomuser.me/api/portraits/men/97.jpg"
                                    className="h-10 w-10 rounded-full mr-2 object-cover" 
                                    alt="Profile"
                                />
                                <div>
                                    <p className="font-semibold text-gray-700 text-sm">Mike Sullivan</p>
                                    <p className="font-semibold text-gray-600 text-xs">Editor</p>
                                </div>
                            </div>
                            <p className="text-gray-700 py-3">
                                Mike writes about technology. 
                            </p>
                            <button className="px-2 py-1 text-gray-100 bg-green-700 flex w-full items-center justify-center rounded">
                                Follow 
                                <i className='bx bx-user-plus ml-2'></i>
                            </button>
                        </div>
                    </div> */}
                </div>
            </main>

            <SpeedDial id={id} />
        </>
    );
}
