import React, { useContext } from 'react';
import img from '../../assets/images/login/login.svg'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faG } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
const Login = () => {
  const {login} = useContext(AuthContext);
    const handelLogin = event =>{
        event.preventDefault();
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        login(email,password)
        .then(result =>{
          const user = result.user;
          console.log(user);
        })
        .then(err=>console.log(err))
    }
    return (
        <div className="hero max-w-7xl mx-auto my-20">
  <div className="hero-content grid ga-10 md:grid-cols-2 flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <img className='w-3/4' src={img} alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
      <form onSubmit={handelLogin} className="card-body">
        <h1 className="text-4xl font-bold text-center text-[#444444]">Login now!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="text" placeholder="Your email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="text" placeholder="Your password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
            <input className="btn bg-[#FF3811] border-0" type="submit" value="Sign In" />
        </div>
      </form>

      <p className='text-center text-[#737373]'>New to Genius Car? <Link to='/signup' className='text-orange-600 font-semibold
      '>Sign Up</Link> </p>
      <div className='flex justify-center mt-6 px-8'>
        
        <button className="btn btn-circle mr-4">
        <i class="text-xl fa-brands fa-facebook-f"></i>
        </button>
        <button className="btn btn-circle mr-4">
        <i class="text-xl fa-brands fa-linkedin-in"></i>
        </button>
        <button className="btn btn-circle">
        <i class="text-xl fa-brands fa-google"></i>
        </button>
    </div>
    </div>
    
  </div>
</div>
    );
};

export default Login;