import React, { useState } from "react";
import ReactStars from "react-stars";

const Cards = () => {
  const [MovieData, setMovieData] = useState([
    {
      name: "avengers endgame",
      year: "2018",
      rating: 5,
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c618cd88432989.5dd5e72e505d1.jpg",
    },
    {
      name: "avengers endgame",
      year: "2018",
      rating: 3.5,
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c618cd88432989.5dd5e72e505d1.jpg",
    },
    {
      name: "avengers endgame",
      year: "2018",
      rating: 4,
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c618cd88432989.5dd5e72e505d1.jpg",
    },
  ]);
  return (
    <div className="flex flex-wrap justify-center gap-5 px-5 mt-2">
      {MovieData.map((ele, ind) => {
        return (
          <div className="card w-60 hover:-translate-y-1 transition-all duration-500 p-2 bg-slate-800" key={ind}>
            <img
              src={ele.img}
              alt="poster"
              height="100%"
            />
            <h2>
              <span className=" text-blue-500">Name</span> : {ele.name}
            </h2>
            <h2 className="flex items-center"> 
              <span className=" text-blue-500 mr-1"> Rating </span> : <ReactStars className="ml-1" size={20} value={ele.rating} edit={false}  />
            </h2>
            <h2>
              <span className=" text-blue-500">Date</span> : {ele.year}
            </h2>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
