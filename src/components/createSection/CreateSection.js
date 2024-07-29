'use client'

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { createRecipe } from '@/services/recipeService';
import { useRouter } from 'next/navigation'

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const CreateSection =() => {
    const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm();
    const [image, setImage] = useState(null);
    const [instructions, setInstructions] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter()

    const onSubmit = async (data) => {
        setIsLoading(true);
        try {
            const formData = new FormData();
            formData.append('title', data.title);
            formData.append('ingredients', data.ingredients);
            formData.append('instructions', instructions);
            
            if (data.image && data.image.length > 0) {
                formData.append('image', data.image[0]);
            } else {
                console.warn('No image file provided');
            }
    
            const response = await createRecipe(formData); // Use createRecipe function from api.js
    
            alert('Recipe created successfully:', response);
            router.push('/')
            reset();
            setInstructions('');
        } catch (error) {
            console.error('Error creating recipe:', error);
        } finally {
            setIsLoading(false);
        }
    };
    

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setImage(file); // Set image file to state
        setValue('image', e.target.files); // Update react-hook-form value
    };
    

    return (
        <div className="p-12 md:w-3/5 m-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 flex flex-col gap-3">
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
                        className="my-2 h-full"
                        
                    />
                </div>

                <div>
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                        Image
                    </label>
                    <input
                        id="image"
                        name="image"
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#eddaca] file:text-yellow-700 hover:file:bg-[#ebeae9]"
                    />
                </div>

                <div className="flex justify-center">
                    <button
                        type="submit"
                        className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${isLoading ? 'bg-gray-400' : 'bg-yellow-900 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'}`}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Submitting...' : 'Submit'}
                    </button>
                </div>
            </form>
        </div>
    );
}
export default CreateSection