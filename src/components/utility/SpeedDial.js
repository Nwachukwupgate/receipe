"use client"

import React, { useState } from 'react';
import { deleteRecipe } from '@/services/recipeService';
import Link from 'next/link';
import { useRouter } from 'next/navigation'

const SpeedDial = ({id}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const router = useRouter()

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDelete = async (id) => {
    setIsLoading(true)
    
        try {
            await deleteRecipe(id);
            alert('Recipe deleted successfully');
            router.push('/')
            isLoading(false)
        } catch (err) {
          isLoading(false)
            setError(err.message);
            alert('Error deleting recipe');
        }
  }                                                                                                                

  return (
    <div className="fixed bottom-6 right-24 group">
      <div
        id="speed-dial-menu-dropdown-alternative"
        className={`flex flex-col justify-end ${isOpen ? '' : 'hidden'} py-1 mb-4 space-y-2 bg-white border border-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600`}
      >
        <ul className="text-sm text-gray-500 dark:text-gray-300">
          <li>
            <div
              className="flex items-center px-5 py-2 border-b border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white dark:border-gray-600"
            >
              <svg
                className="w-3.5 h-3.5 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z" />
              </svg>
              <span className="text-sm font-medium" onClick={() => handleDelete(id)}>{isLoading ? "Loading" : "Delete Post"}</span>
            </div>
          </li>
          <li>
            <Link
              href={`/edit/${id}`}
              className="flex items-center px-5 py-2 border-b border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white dark:border-gray-600"
            >
              <svg
                className="w-3.5 h-3.5 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M19 4h-1a1 1 0 1 0 0 2v11a1 1 0 0 1-2 0V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a1 1 0 0 0-1-1ZM3 4a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4Zm9 13H4a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-3H4a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-3H4a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-3h-2a1 1 0 0 1 0-2h2a1 1 0 1 1 0 2Zm0-3h-2a1 1 0 0 1 0-2h2a1 1 0 1 1 0 2Z" />
                <path d="M6 5H5v1h1V5Z" />
              </svg>
              <span className="text-sm font-medium">Edit Post</span>
            </Link>
          </li>
          
        </ul>
      </div>
      <button
        type="button"
        data-dial-toggle="speed-dial-menu-dropdown-alternative"
        aria-controls="speed-dial-menu-dropdown-alternative"
        aria-expanded={isOpen}
        className="flex items-center justify-center ml-auto text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="m6.93 11.4 1.262 5.644a1 1 0 0 0 1.953 0L11.4 11.4h-4.47Z" />
          <path d="M19 4h-2.7l-3.277 7.191L16.51 17.33a1 1 0 0 0 1.944-.485L16.1 11.4H19a1 1 0 1 0 0-2Zm-8.844-1H9.844L6.57 10.191 8.8 18.253a1 1 0 0 0 1.953 0l2.277-8.062L10.156 3Z" />
          <path d="M5.23 4H2.57a1 1 0 1 0 0 2H5.4l2.277 8.062a1 1 0 0 0 1.953 0L12.53 6h2.2a1 1 0 1 0 0-2H9.844L7.07 11.191 5.23 4Z" />
        </svg>
        <span className="sr-only">Open actions menu</span>
      </button>
    </div>
  );
};

export default SpeedDial;
