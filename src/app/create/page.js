'use client'

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


export default function Create() {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const [image, setImage] = useState(null);
    const [instructions, setInstructions] = useState('');

    const onSubmit = (data) => {
        if (!instructions) {
          alert('Instructions are required');
          return;
        }
    
        const formData = {
          ...data,
          instructions,
          image,
        };
    
        console.log('Form Data:', formData);
        // Here you can handle the form submission, e.g., send it to your server
      };

      const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setImage(file);
      };

    return(
        <div className="p-12">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                    Title
                    </label>
                    <input
                    id="title"
                    name="title"
                    type="text"
                    {...register('title', { required: true })}
                    className={`mt-1 block w-full px-3 py-2 border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                    />
                    {errors.title && <p className="mt-2 text-sm text-red-600">Title is required</p>}
                </div>

                <div>
                    <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">
                    Ingredients
                    </label>
                    <textarea
                    id="ingredients"
                    name="ingredients"
                    rows="8"
                    {...register('ingredients', { required: true })}
                    className={`mt-1 block w-full px-3 py-2 border ${errors.ingredients ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                    />
                    {errors.ingredients && <p className="mt-2 text-sm text-red-600">Ingredients are required</p>}
                </div>

                <div>
                    <label htmlFor="instructions" className="block text-sm font-medium text-gray-700">
                    Instructions
                    </label>
                    <ReactQuill
                    theme="snow"
                    value={instructions}
                    onChange={(value) => setInstructions(value)}
                    className="my-2 h-64"
                    />
                </div>

                <div className="my-8">
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                    Image
                    </label>
                    <input
                    id="image"
                    name="image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                </div>

                <div className='flex justify-center'>
                    <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                    Submit
                    </button>
                </div>
            </form>
        </div>
    )
}