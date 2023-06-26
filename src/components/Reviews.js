import React, { useState } from 'react'
import ReactStars from 'react-stars'

const Reviews = () => {
    const [rating, setRating] = useState();

  return (
    <div className='mt-2 border-t-2 border-t-slate-500'>
    <ReactStars size={30} half={true} onChange={(rate)=> setRating(rate)} />
    <input type="text" placeholder='shara you thoughts' className='w-full p-2 outline-none text-black' />
    <button className='bg-green-600 w-full p-1'>Share</button>
    </div>
  )
}

export default Reviews