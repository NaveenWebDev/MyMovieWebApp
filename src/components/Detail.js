import React, { useEffect, useState } from 'react'
import ReactStars from 'react-stars'
import { useParams } from 'react-router-dom'
import { db } from './firebase/firebase'
import { doc, getDoc } from 'firebase/firestore'

const Detail = () => {
    const {id} = useParams();
    const [data , setData] = useState({
        name:"",
        year:"",
        image:"",
        description:""
    });
    
    useEffect(()=>{
        async function getData(){
            const _doc = doc(db ,"moives", id);
            const _data = await getDoc(_doc);
            setData(_data.data());
        }
        getData()
    },[])

  return (
    <div className='p-4 flex justifly-center w-[70%] m-auto'>
        <img className='h-96' src={data.image} alt="poster" />

        <div className='ml-4 flex justify-center flex-col'>
            <h2 className='text-slate-400 font-bold text-4xl'>{data.name} <span>{data.year}</span> </h2>
            <ReactStars size={20} half={true} value={4.5} edit={false}/>
            <p>{data.description}</p>
        </div>

    </div>
  )
}

export default Detail