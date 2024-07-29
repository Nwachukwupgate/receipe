'use client'

import {useState, useEffect} from 'react';
import SpeedDial from '@/components/utility/SpeedDial';
import { getRecipeById } from '@/services/recipeService';


export default function page({params}) {
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
            <main className="container mx-auto mt-10">
                <div className="mb-4 md:mb-0 w-full mx-auto relative">
                    <div className="px-4 lg:px-0">
                        <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
                            {recipe?.title}
                        </h2>
                        <a 
                            href="#"
                            className="py-2 text-green-700 inline-flex items-center justify-center mb-2"
                        >
                            Cook Book
                        </a>
                    </div>
                    <img 
                        src={`${recipe?.imageUrl}&auto=format&fit=crop&w=2100&q=80`} 
                        className="w-full object-cover lg:rounded" 
                        style={{ height: "28em" }} 
                        alt="Cover"
                    />
                </div>
                <div className="flex flex-col lg:flex-row lg:space-x-12">
                    <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
                        <p className="pb-6">
                            Advantage old had otherwise sincerity dependent additions. It in adapted natural hastily is
                            justice. Six draw you him full not mean evil. Prepare garrets it expense windows shewing do an. 
                        </p>
                        <p className="pb-6">
                            Difficulty on insensible reasonable in. From as went he they. Preference themselves me as
                            thoroughly partiality considered on in estimating. Middletons acceptance discovered projecting so is so or. 
                        </p>

                        <div className="pb-6">
                            <div className="px-4 sm:px-8 max-w-5xl m-auto">
                                <h1 className="font-semibold text-2xl">Ingredients</h1>
                                
                                <ul className="border border-gray-200 rounded overflow-hidden shadow-md">
                                    <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">{recipe?.ingredients}</li>
                                  
                                </ul>
                                <a href="mailto:jefte_caro@yahoo.com" className="text-xs text-center block mt-4 hover:underline">@me</a>
                            </div>
                        </div>
                        
                        <h1 className="font-semibold text-2xl pb-6">Instructions</h1>
                        <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
                            {recipe?.instructions} 
                        </div>
                        
                        
                    </div>
                    <div className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
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
                    </div>
                </div>
            </main>

            <SpeedDial id={id} />
        </>
    );
}
