import React from 'react';
import img from '../../assets/images/login/login.svg'
import { Link } from "react-router-dom";
const SignUp = () => {
    const handelSignUp = event =>{
        event.preventDefault();
    }
    return (
        <div className="hero max-w-7xl mx-auto my-20">
  <div className="hero-content grid ga-10 md:grid-cols-2 flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <img className='w-3/4' src={img} alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
      <form onSubmit={handelSignUp} className="card-body">
        <h1 className="text-4xl font-bold text-center text-[#444444]">Sign Up</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Your name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="Your email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="text" placeholder="Your password" className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
            <input className="btn bg-[#FF3811] border-0" type="submit" value="Sign Up" />
        </div>
      </form>

      <p className='text-center text-[#737373]'>Already have an account?<Link to='/login' className='text-orange-600 font-semibold
      '>Sign In</Link> </p>
    </div>
  </div>
</div>
    );
};

export default SignUp;