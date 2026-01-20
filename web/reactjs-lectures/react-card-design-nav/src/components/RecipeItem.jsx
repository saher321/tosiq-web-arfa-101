import React from 'react'

const RecipeItem = ({ recipe }) => {
  return (
    <div className='border-2 border-gray-200 rounded-lg'>
    <div>
        <img className='object-cover h-40 w-full rounded-lg' src={recipe.image} alt="" />
    </div>
      <div className='m-1 text-sm font-bold'>
        {recipe.name}
      </div>

      <div className='m-1 my-2 text-md'>
        <span className='font-light text-xs p-1 border-2 border-green-700 bg-green-200 rounded-full'>
        {recipe.difficulty}
        </span>
      </div>

      <hr className='text-gray-200'/>
      <div className='m-1 flex flex-wrap gap-2'>
        {recipe?.tags.map((tag) => {
            return(
                <span className='block text-[7px] font-bold border-2 border-purple-700 bg-purple-200 p-1 rounded-full '>{tag}</span>
            )
        })}
      </div>
    </div>
  )
}

export default RecipeItem
