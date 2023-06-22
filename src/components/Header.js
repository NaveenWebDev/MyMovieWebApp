import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='text-l border-b-2 border-slate-500 flex justify-between px-5 py-2 items-center'>
    <Link to={'/'}>

      <p className='text-blue-500 text-3xl font-bold'>Filmy<span className='text-white'>Verse</span> </p>
    </Link>

      <Link to={'/addmovie'}>
      <button className='text-1xl text-white '><AddIcon className='text-blue-500'></AddIcon>Add New</button>
      </Link>
    </div>
  )
}

export default Header
