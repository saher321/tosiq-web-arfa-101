import React, { useEffect, useState } from 'react'
import WebLayout from '../layouts/WebLayout'
import { useParams } from 'react-router'
import axios from 'axios';
import { BeatLoader } from 'react-spinners'
import { RECIPIES_URL } from '../resources/server_apis.js'

const RecipeDetail = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [recipeDetail, setRecipeDetails] = useState(null);
    
    const params = useParams();

    const getRecipeDetails = async () => {
        try {
            setIsLoading(true)
            const response = await axios.get(RECIPIES_URL);
            if (response.data.recipes.length == 0) return setRecipeDetails(null);
            const recipe = response.data.recipes.find((recipe) => params.id == recipe.id )
            setRecipeDetails(recipe);

            setIsLoading(false)
        } catch (error) {
            console.log("Error: ", error)
        }
    }

    useEffect(() => {
        getRecipeDetails();
    }, [params.id]);


    if (isLoading) {
        return (
            <div className='flex items-center justify-center h-[100vh]'>
                <div><BeatLoader /></div>
            </div>
        )
    }

    return (
        <WebLayout>
            <div className="my-4 mx-auto max-w-5xl">
                <div className='text-lg font-bold'>Recipe details #{recipeDetail?.id}</div>

                <div className=''>
                    <img src={recipeDetail?.image} className='h-56 w-56' alt="" />
                </div>
                
                <div className='mt-3 mb-1 text-sm font-bold'> Ingredients: </div>
                <table border={1} cellPadding={10} cellSpacing={0}>
                    {
                        recipeDetail?.ingredients.map((ingredient, i) => {
                            return (
                                <tr key={i}>
                                    <th>{i+1}</th>
                                    <td> &nbsp; </td>
                                    <td>{ingredient}</td>
                                </tr>
                            )
                        })
                    }
                </table>

            </div>
        </WebLayout>
  )
}

export default RecipeDetail
