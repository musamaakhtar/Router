import React from 'react'
import Img1 from  '../image/3rd pic.png'
import Img11 from '../image/9 pic.jpeg'
import Img22 from '../image/10 pic.jpeg'
import Img33 from '../image/11 pic.jpeg'
import Img44 from '../image/12 pic.jpeg'
import Img55 from '../image/13 pic.jpeg'
import Imglst from '../image/17 pic.jpeg'
export default function Home() {
  return (
    <div className='pt-[12vh]'>
    <div className='flex h-[80vh]'>
      <div className='w-[50vw] h-[100%]' >
       <h1 className='font-serif mt-5 ml-10 text-3xl font-semibold text-[yellow]'>Welcome to our Company</h1>
       <h1 className='font-serif mt-3 ml-10 text-3xl font-semibold text-[darkblue]'>Lorem Ipsum Dolor Sit Amet Consectetur.</h1>
       <p className='font-serif mt-7 ml-10 text- w-[90%] font-semibold text-[darkgreen]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero fugiat a explicabo quod aliquam facilis assumenda ut delectus perferendis aspernatur aut debitis tempore, nobis repellendus enim voluptas. Eligendi, molestiae est!</p>
       <p className='font-serif mt-7 ml-10 text- w-[90%] font-semibold text-[darkgreen]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero fugiat a explicabo quod aliquam facilis assumenda ut delectus perferendis aspernatur aut debitis tempore, nobis repellendus enim voluptas. Eligendi, molestiae est!</p>
       <button className='font-serif h-[6vh] w-[20vh]  border  ml-10 rounded-3xl mt-10 font-semibold bg-[yellow]'>Know More</button>
      </div>
<div className='w-[50vw]' id='pic'>
   <img className='mt-[9vh] ml-[13vw]' src={Img1} alt="" />
      </div>
      </div>
      <div className=' text-white h-[120vh] w-[98.5vw] mt-[10vh]' id='bcg'>
     <div>
      <h1 className='font-serif text-center pt-[9vh] font-bold text-3xl'>MADA WITH LOVE</h1>
      <p className='font-serif text-center mt-8 ml-[20vw] w-[60vw]'>llo unde ea saepe ratione quasi totam ullam recusandae, id cupiditate temporibus ipsum aspernatur ducimus! Aliquid cupiditate nostrum sequi? Blanditiis, excepturi ducimus.</p>
      <ul className='flex justify-around font-serif text-center mt-8 ml-[20vw] w-[60vw]'>
        <li className='font-serif h-[6vh] pt-[1vh] w-[20vh]  border  rounded-3xl font-semibold bg-[blue]'>SHOW ALL</li>
        <li>PLUMBING</li>
        <li>ISOLATION</li>
        <li>INTERIOR DESIGN</li>
        <li>BUILDING</li>
      </ul>
     </div>
     <div className=' flex mt-[6vh]'>
      <div className='h-[71vh] mt-[3vh] ml-[2vw] w-[37vw]'>
        <img className='h-[100%] w-[100%]' src={Img11} alt="" /> 
      </div>
      <div>
      <div className='h-[35vh] ml-3 mt-[3vh] w-[23vw]'>
      <img src={Img22} alt="" /> </div>
      <div className='h-[35vh] ml-3 w-[23vw]'>
      <img src={Img33} alt="" /> </div>
      <div className='h-[35vh] mt-[-70vh] ml-[25vw] w-[23vw]'>
        <img src={Img44} alt="" /> </div>
      <div className='h-[35vh] ml-[25vw] w-[23vw]'>
      <img src={Img55} alt="" /> </div>
      </div>
     </div>
    </div>
    <div>
             <h1 className='font-serif text-center pt-[9vh] font-bold text-2xl'>COSTUMERS REVIEWS</h1>
             <p  className='font-serif text-center mt-8 ml-[20vw] w-[60vw]' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus unde odit beatae enim laudantium, molestiae quam vitae provident ab quibusdam sint eos fugit reiciendis ex nisi maxime ipsum itaque illo.</p>
        </div>
        <div className='bg-[yellow] w-[97vw] ml-[1vw]'>
           <h1 className='font-serif pl-[2vw] mt-[5vh]  pt-[3vh] font-bold text-2xl'>Do YOU HAVE A QUESTION?</h1>
           <p  className='mt-[2vh] pl-[2vw]  '>Feel free to contact us! 0300-2850323</p>
        </div>
        <div className='ml-[1vw] mt-[1vh]'>
        <img className='h-auto w-[97vw] ' src={Imglst} alt=""/>
        </div>
        <div className='bg-[blue] h-[10vh] w-[97vw] ml-[1vw] mt-[1vh]'>
             <h1 className='text-center pt-[2vh] text-white font-semibold text-2xl' >All rights recoverd</h1>
        </div>
    </div>
  )
}
