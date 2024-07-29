'use client'


import { useEffect, useState } from 'react';
import React from 'react'
import Pagination from '../utility/PaginationBtn'
import Link from 'next/link';

import { getRecipes } from '@/services/recipeService';

const ReceipeCards = () => {
    const [recipes, setRecipes] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const fetchRecipes = async () => {
            const data = await getRecipes(page);
            setRecipes(data.recipes);
            setTotalPages(data.totalPages);
        };
        fetchRecipes();
    }, [page]);

    const handleNextPage = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    };

    const handlePreviousPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    console.log("recipes", recipes);
  return (
    <section className="text-gray-400 bg-yellow-50 dark:bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col">
                <div className="h-1 bg-yellow-900 dark:bg-gray-800 rounded overflow-hidden">
                    <div className="w-24 h-full bg-yellow-200"></div>
                </div>
                <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                    <h1 className="sm:w-2/5 text-yellow-900 dark:text-yellow-50 font-medium title-font text-2xl mb-2 sm:mb-0">All Recipes</h1>
                    <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">All the recipes you need, right here. Find your favorites and new inspirations.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 sm:-m-4 -mx-4 -mb-10 -mt-4 w-full">
                {recipes && recipes.map((receipe) => (                   
                    <div className="p-4 sm:mb-0 mb-6" key={receipe?._id}>
                        <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full" src={receipe?.imageUrl} />
                        </div>
                        <h2 className="text-xl font-medium title-font text-gray-700 dark:text-gray-200 mt-5">{receipe?.title}</h2>
                        <Link href={`/${receipe?._id}`}>
                            <div className="text-yellow-900 font-bold inline-flex items-center mt-3">View
                            <svg fill="none" stroke="currentColor" strokeLineCap="round" strokeLineJoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                            </div>
                        </Link>
                    </div>                   
                ))}

            </div>

            <Pagination handleNextPage={handleNextPage} handlePreviousPage={handlePreviousPage} totalPages={totalPages} page={page} />
        </div>
    </section>
  )
}

export default ReceipeCards