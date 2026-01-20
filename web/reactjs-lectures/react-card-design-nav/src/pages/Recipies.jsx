import React, { useEffect, useState } from 'react'
import WebLayout from '../layouts/WebLayout'
import { RECIPIES_URL } from '../resources/server_apis.JS';
import axios from 'axios';
import RecipeItem from '../components/RecipeItem';
import {BeatLoader} from 'react-spinners'

const Recipies = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [recipies, setRecipies] = useState([]);

    useEffect(() => {
        const getRecipies = async () => {
            try {
                setIsLoading(true)
                const response = await axios.get(RECIPIES_URL);
                if (response.data.recipes.length == 0) return setRecipies([]);

                setRecipies(response.data.recipes);

                setIsLoading(false)
            } catch (error) {
                console.log("Error: ", error)
            }
        }
        getRecipies();
    }, []);
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

                {
                    isLoading ? 
                    <BeatLoader /> :
                    <div className='grid grid-cols-12 gap-3'>
                    { recipies.length > 0 ? recipies.map((recipe) => {
                        return (
                            <div key={recipe.id} className='col-span-3'>
                                <RecipeItem recipe={recipe} />
                            </div>
                        )
                    }):
                    <div className="text-center col-span-12">
                        Records not found!
                    </div>
                    }
                </div>
                }

                
            </div>
        </WebLayout>
    )
}

export default Recipies
