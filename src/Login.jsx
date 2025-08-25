import axios from "axios";
import { useState } from "react";

const Login = () => {

  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try { 
      const res = await axios.post("http://localhost:3000/login", {
        emailId,
        password,
      } ,{
        withCredentials:true,
      });
    } catch(err){
      console.error(err);
    }
  }

  return (
      <div className="flex justify-center my-10" >
        <div className="card card-border bg-base-100 w-96 shadow-xl">
    <div className="card-body">
      <h2 className="card-title justify-center"> Login </h2>
      <div>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Email Id </legend>
          <input type="text"
           value={emailId}
           className="input" placeholder="Type here" 
           onChange={(e)=> setEmailId(e.target.value)}
          />
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">password</legend>
          <input type="text"
          value={password}
          className="input" placeholder="Type here" 
          onChange={(e)=> setPassword(e.target.value)}
          />
        </fieldset>
      </div>
      <div className="card-actions justify-center">
        <button className="btn btn-primary" onClick={handleLogin}> Login </button>
      </div>
    </div>
  </div>
      </div>
  )
}

export default Login