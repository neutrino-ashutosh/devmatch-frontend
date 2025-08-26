import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {

  const [emailId, setEmailId] = useState("neelam@gmail.com");
  const [password, setPassword] = useState("Neelam@123");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const handleLogin = async () => {
    
    try { 
      const res = await axios.post(BASE_URL + "/login", 
      {
        emailId,
        password,
      } ,
      { withCredentials:true }
    );
    console.log(res.data);
    dispatch(addUser(res.data)); // to add data in the store
    return navigate("/")

    } catch(err){
      setError(err?.response?.data || "something went wrong");
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
      <p className="text-red-500">{error}</p>
      <div className="card-actions justify-center">
        <button className="btn btn-primary" onClick={handleLogin}> Login </button>
      </div>
    </div>
  </div>
      </div>
  )
}

export default Login