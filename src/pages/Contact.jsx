import React from 'react'
import Imglst from '../image/17 pic.jpeg'
export default function Contact() {
  return (
    <div>
    <div>
  <h1 className=' pt-[15vh] font-serif text-center pt-[9vh] font-bold text-2xl'>COSTUMERS REVIEWS</h1>
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
