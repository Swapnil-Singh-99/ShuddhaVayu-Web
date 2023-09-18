import axios from "axios";
import { Link , useNavigate } from "react-router-dom";
import { useState } from "react";
const Login =()=>{

    const Navigate = useNavigate();

    const [LoginInput, SetLoginInput] = useState({
      email: "",
      password: "",
    });
  
    const email = LoginInput.email;
  
    const EmailHandler = (event) => {
      SetLoginInput({ ...LoginInput, email: event.target.value });
    };
    const PasswordHandler = (event) => {
      SetLoginInput({ ...LoginInput, password: event.target.value });
    };
  
    const SubmitHandler = async (event) => {
      event.preventDefault();
      try{
        await axios.post("http://localhost:3000/login",  LoginInput )
        .then(res=>{
          console.log(res)
          if(res.data.valid=='exists'){
            Navigate("/dashboard")
          }
          else if(res.data=='not exists'){
            alert("Wrong Password or Email")
          }
        }
        )
  
      }
      catch(error){
        console.log(error);
      }
     
    };

return(

    <div className="min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8 ">
    <div className="max-w-md w-full space-y-8 ">
      <div>
        <h1 className="mt-6 text-center text-4xl font-extrabold text-nav">
        Admin Log In
        </h1>
      
      </div>
      <form
        className="mt-8 space-y-6"
        action="#"
        method="POST"
        onSubmit={SubmitHandler}
      >
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray placeholder-gray text-gray rounded-t-md focus:outline-none focus:ring-blue focus:border-blue focus:z-10 sm:text-sm"
              placeholder="Email address"
              onChange={EmailHandler}
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray placeholder-gray text-gray rounded-b-md focus:outline-none focus:ring-blue focus:border-blue focus:z-10 sm:text-sm"
              placeholder="Password"
              onChange={PasswordHandler}
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-nav focus:ring-nav border-gray rounded"
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-gray"
            >
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <a
              href="#"
              className="font-medium text-nav hover:text-nav"
            >
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-nav hover:bg-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue"
          >
            Log in
          </button>
        </div>
      </form>
   
    </div>
  </div>
   

  );
};







export default Login