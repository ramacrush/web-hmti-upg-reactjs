import React from "react";
import Post1 from "../assets/images/image8.jpeg";
import Post2 from "../assets/images/image9.jpeg";
const PostList = () => {
  return (
    <div className="mt-[50px]">
      <h1 className="text-start text-lg font-bold underline">Berita Terbaru</h1>
      <div className="mt-3 flex flex-wrap justify-around sm:gap-0 gap-3 w-full">
        <div className="card card-compact w-72 bg-base-100 shadow-xl">
          <figure>
            <img src={Post1} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">LDKS</h2>
            <p>LDKS HMTI 2023</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-72 bg-base-100 shadow-xl">
          <figure>
            <img src={Post2} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">LDKS</h2>
            <p>LDKS HMTI 2023</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostList;
