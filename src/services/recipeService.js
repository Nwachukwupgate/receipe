import axios from 'axios';

const API_URL = 'http://localhost:3001/api/recipes';

export const getRecipes = async (page = 1, limit = 10) => {
    const response = await axios.get(API_URL, {
        params: {
            page,
            limit
        }
    });
    return response.data;
};

export const getRecipeById = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

export const createRecipe = async (recipe) => {
    const response = await axios.post(API_URL, recipe);
    return response.data;
};

export const updateRecipe = async (id, recipe) => {
    const response = await axios.put(`${API_URL}/${id}`, recipe);
    return response.data;
};

export const deleteRecipe = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};
