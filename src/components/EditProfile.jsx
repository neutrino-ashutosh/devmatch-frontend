import { useState } from "react"
import UserCard from "./UserCard"
import axios from "axios";
import {BASE_URL} from "../utils/constants"
import { useDispatch } from "react-redux";
import {addUser} from "../utils/userSlice"

const EditProfile = ({user}) => {
  
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [age, setAge] = useState(user.age || "");
  const [gender, setGender] = useState(user.gender || "");
  const [about, setAbout] = useState(user.about);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const [showToast, setShowToast] = useState(false);
  
  const saveProfile = async() => {
    setError("");
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit", 
        {firstName, 
          lastName, 
          photoUrl, 
          age, 
          gender, 
          about,
        },
        {withCredentials : true}
      );
      dispatch(addUser(res?.data?.data));
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 1500);
    } catch(err) {
      setError(err.response.data);
    }
  };
 

  return (
    <>
    <div className="flex justify-center my-10">
      <div className="flex justify-center mx-10" >
        <div className="card card-border bg-base-100 w-96 shadow-xl">
    <div className="card-body">
      <h2 className="card-title justify-center"> Edit Profile </h2>
      <div>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">First Name </legend>
          <input type="text"
           value={firstName}
           className="input" placeholder="Type here" 
           onChange={(e)=> setFirstName(e.target.value)}
          />
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Last Name</legend>
          <input type="text"
          value={lastName}
          className="input" placeholder="Type here" 
          onChange={(e)=> setLastName(e.target.value)}
          />
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Gender</legend>
          <input type="text"
          value={gender}
          className="input" placeholder="Type here" 
          onChange={(e)=> setGender(e.target.value)}
          />
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Age</legend>
          <input type="text"
          value={age}
          className="input" placeholder="Type here" 
          onChange={(e)=> setAge(e.target.value)}
          />
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">About</legend>
          <input type="text"
          value={about}
          className="input" placeholder="Type here" 
          onChange={(e)=> setAbout(e.target.value)}
          />
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Profile Photo</legend>
          <input type="text"
          value={photoUrl}
          className="input" placeholder="Type here" 
          onChange={(e)=> setPhotoUrl(e.target.value)}
          />
        </fieldset>
      </div>
      <p className="text-red-500">{error}</p>
      <div className="card-actions justify-center">
        <button className="btn btn-primary" onClick={saveProfile}> Save Profile </button>
      </div>
    </div>
  </div>
      </div>
      <UserCard user={{firstName, lastName, photoUrl, age, gender, about}} />
    </div>

    {showToast && (<div className="toast toast-top toast-center"> 
      <div className="alert alert-success">
        <span> profile saved successfully </span>
      </div>
    </div>
  )}
    </>
  );
};

export default EditProfile;