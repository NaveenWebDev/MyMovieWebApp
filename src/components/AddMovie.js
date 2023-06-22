import React, { useState } from 'react'

const AddMovie = () => {

    const [form, setform] = useState({
        name:"",
        year:"",
        description:""
    });
     
  return (
    <div >
    <section className="text-gray-600 body-font relative ">
  <div className="container px-5 py-20 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Add Movie</h1>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-white">Name</label>
            <input type="text" id="name" name="name" className="w-full  rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={form.name} onChange={(e)=>setform({...form, name:e.target.value})} />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-white">Year</label>
            <input type="email" id="email" name="email" className="w-full  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={form.year} onChange={(e)=>setform({...form, year:e.target.value})} />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="message" className="leading-7 text-sm text-white">Message</label>
            <textarea id="message" name="message" className="w-full rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" defaultValue={""} value={form.description} onChange={(e)=>setform({...form, description:e.target.value})} />
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-blue-600 border-0 py-2 px-8 focus:outline-none hover:bg-blue-500 rounded text-lg">Add</button>
        </div>

      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default AddMovie
