import React from 'react'
import Img111 from '../image//12 pic.jpeg'
export default function About() {
  return (
    <div className='pt-[10vh]'>
    <h1 className='font-serif hover:bg-[black] pt-[10vh] pb-[5vh] text-[gray] bg-[lightcyan] text-center text-6xl hover:text-[white]'>About Us</h1>
    <div className=' flex justify-evenly '>
       <div classNameName="card ">
  <img className=" card-img-top " src={Img111}  alt="..."/>
  <div className="card-body w-[48vw]">
    <h5 className="card-title font-serif text-[blue] text-5xl ">About Construction</h5>
    <p className="card-text font-serif text-xl text-[gray]">Some quick example text to build on the building and make up the bulk of the building's content.</p>
    <a href="#" className="btn btn-primary mt-2  font-serif">Go somewhere</a>
  </div>
</div>

<div className="card w-[48vw]" aria-hidden="true">
  <img src={Img111} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title placeholder-glow">
      <span className="placeholder col-6"></span>
    </h5>
    <p className="card-text placeholder-glow">
      <span className="placeholder col-7"></span>
      <span className="placeholder col-4"></span>
      <span className="placeholder col-4"></span>
      <span className="placeholder col-6"></span>
      <span className="placeholder col-8"></span>
    </p>
    <a href="#" tabindex="-1" className="btn btn-primary disabled placeholder col-6"></a>
  </div>
</div>
</div>
    </div>
  )
}
