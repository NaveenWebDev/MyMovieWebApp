import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";
import { TailSpin } from "react-loader-spinner";
import { getDocs } from "firebase/firestore";
import { moviesRef } from "./firebase/firebase";

const Cards = () => {
  // const [MovieData, setMovieData] = useState([
  //   {
  //     name: "avengers endgame",
  //     year: "2018",
  //     rating: 5,
  //     img: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c618cd88432989.5dd5e72e505d1.jpg",
  //   },
  //   {
  //     name: "avengers endgame",
  //     year: "2018",
  //     rating: 3.5,
  //     img: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c618cd88432989.5dd5e72e505d1.jpg",
  //   },
  //   {
  //     name: "avengers endgame",
  //     year: "2018",
  //     rating: 4,
  //     img: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c618cd88432989.5dd5e72e505d1.jpg",
  //   },
  // ]);

  const [MovieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    async function getData(){
      setLoading(true);
      const daata = await getDocs(moviesRef);
      daata.forEach((doc)=>{
        setMovieData((pre)=> [...pre, {...(doc.data()), id:doc.id}]);
      })
      setLoading(false);
    }
    getData()
  },[])

  return (
    <div className="flex flex-wrap justify-center gap-5 px-5 mt-2">
      {
        loading ? <TailSpin color="blue" /> : 
        MovieData.map((ele, ind) => {
        return (
          <div className="card w-60 hover:-translate-y-1 transition-all duration-500 p-2 bg-slate-800" key={ind}>
            <img
              src={ele.image}
              alt="poster"
              height="100%"
            />
            <h2>
              <span className=" text-blue-500">Name</span> : {ele.name}
            </h2>
            <h2 className="flex items-center"> 
              <span className=" text-blue-500 mr-1"> Rating </span> : <ReactStars className="ml-1" size={20} value={5} edit={false}  />
            </h2>
            <h2>
              <span className=" text-blue-500">Date</span> : {ele.year}
            </h2>
            {/* <h2>
              <span className=" text-blue-500">Desc</span> : {ele.description}
            </h2> */}
          </div>
        );
      })
      }
    </div>
  );
};

export default Cards;
