import React, { useEffect, useState } from 'react'
import WebLayout from '../layouts/WebLayout'
import { RECIPIES_URL } from '../resources/server_apis.JS';
import axios from 'axios';
import RecipeItem from '../components/RecipeItem';
const Recipies = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [recipies, setRecipies] = useState([]);

    useEffect(() => {
        const getRecipies = async () => {
            try {
                const response = await axios.get(RECIPIES_URL);
                if (response.data.recipes.length == 0) return setRecipies([]);

                setRecipies(response.data.recipes);

            } catch (error) {

            }
        }
        getRecipies();
    }, []);

    return (
        <WebLayout>
            <div className="my-4 mx-auto max-w-5xl">

                <div className='grid grid-cols-12 gap-3'>
                    {recipies.map((recipe) => {
                        return (
                            <div key={recipe.id} className='col-span-3'>
                                <RecipeItem recipe={recipe} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </WebLayout>
    )
}

export default Recipies
