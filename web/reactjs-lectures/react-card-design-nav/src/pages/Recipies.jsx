import React, { useEffect, useState } from 'react'
import WebLayout from '../layouts/WebLayout'
import { RECIPIES_URL } from '../resources/server_apis.JS';
import axios from 'axios';
import RecipeItem from '../components/RecipeItem';
import { BeatLoader } from 'react-spinners'

const Recipies = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [recipies, setRecipies] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

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

    useEffect(() => {
        getRecipies();
    }, []);

    const getSelectedValue = async (e) => {
        let selectedVal = e.target.value;
        const newData = recipies.filter((recipe) => {
            return recipe.difficulty == selectedVal
        });

        if (newData.length > 0) {
            setFilteredData(newData)
        } else {
            await getRecipies()
            setFilteredData([])
        }
    }


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
                <select onChange={getSelectedValue}>
                    <option value="">All</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>
                {
                    isLoading ?
                        <BeatLoader /> :
                        <div className='grid grid-cols-12 gap-3'>
                            {recipies.length > 0 ? 
                            (filteredData.length > 0 ? filteredData : recipies).map((recipe) => {
                                return (
                                    <div key={recipe.id} className='col-span-3'>
                                        <RecipeItem recipe={recipe} />
                                    </div>
                                )
                            }) :
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
