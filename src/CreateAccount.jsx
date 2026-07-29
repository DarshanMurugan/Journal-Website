import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./auth_styles.css";
import axios from "axios";


function CreateAccount() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [checkUsername, setCheckUsername] = useState();
  const [authError, setAuthError] = useState([]);
  const [checkPassword, setCheckPassword] = useState();



  const handleCreateAccount = async (e) => {

    e.preventDefault();
    try {

      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/auth/registration/",
        {
          username: username,
          password1: password,
          password2: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
    catch (error) {
      alert("something went worng try again");

      if (error.response) {
        console.log(error.response.data);
      }

    }

  }


  const handleAuthRules = (e) => {
    setPassword(e.target.value);
    const newPassword = e.target.value;
    setAuthError([]);
    let errors = ["Password must contain at least ",];
    if (newPassword === null) {

      setAuthError([]);
      return;
    }



    if (!(/[a-zA-Z]/.test(newPassword))) {
      errors.push("one letter");
    }
    if (!(/[0-9]/.test(newPassword))) {
      errors.push("one number");
    }
    if (!(/[!@#$%^&*_<>,./?:;"()+={}`]/.test(newPassword))) {
      errors.push("one special character");
    }

    if (!(newPassword.length > 8)) {
      errors.push("greater than 8 characters");
    }


    if (errors.length === 1) {
      errors = []
      setAuthError([])
    }
    // if (errors.length === 0){
    //   setAuthError(["Password must contain at least ",
    //     ...errors.join(", ")]);
    // }


    setAuthError(prevError => ([
      ...errors.join(", ")]));







  }




  return (
    <>


      <div className="credentials-entry-container">
        <div>
          <h3>Username</h3>
          <input className="username-input" placeholder="Username" onChange={(e) => setUsername(e.target.value)} ></input>
        </div>

        <div>
          <h3>Password</h3>
          <input type="password" className="password-input" placeholder="Password" onChange={(e) => handleAuthRules(e)} ></input>
          <p>{authError.join("")}</p>
        </div>


        <br></br>



        <div>
          <h3>Confirm Password</h3>
          <input type="password" className="password-input" placeholder="Password" onChange={(e) => setCheckPassword(e.target.value)} ></input>
        </div>


        <div>
          <h3>Confrim Username</h3>
          <input className="username-input" placeholder="Username" onChange={(e) => setCheckUsername(e.target.value)} ></input>
        </div>

        <br></br>

        <div>
          <button className="enter-credentials-button" onClick={handleCreateAccount}>Create Account</button>
        </div>





      </div>
    </>
  );
}

export default CreateAccount;
