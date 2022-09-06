import React from 'react'
export default function Sign() {
  return (
    <div className='w-[30%] mx-auto py-[22.6vh] font-semibold'>
    <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label text-2xl">Email address</label>
    <input type="email" className="form-control h-[7vh]" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label text-2xl">Password</label>
    <input type="password" className="form-control h-[7vh]" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-danger bg-[blue] text-[brown] font-bold">Submit</button>
</form>
    </div>
  )
}
