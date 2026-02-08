import { useState } from "react"
import "./auth_styles.css"
import {useNavigate} from "react-router-dom";
import axios from "axios";
function Authenticator(){
  const [password,setPassword] = useState("")
  const [username,setUsername] = useState("")
  const navigate = useNavigate()

  



  

  const handleLogin = async (e) => {
    e.preventDefault();

    try{
      const response = await axios.post("http://127.0.0.1:8000/api/v1/auth/login/",
        {
          
            "username": username,
            "password": password,
        },
          {
            headers: {
            "Content-Type": "application/json",
          },
          }
        
    );
    sessionStorage.setItem("accessToken",response.data.access);
    navigate("/main/journal");
    }
     catch(error){
      alert("something went wrong");
      console.log(error.response.data);
    }


  };
  //   if (username == "Vladstock" && password == "journal") {
  //     navigate("/main/journal"), {state: {username,password}};
  //
  //   }
  //
  //   else{
  //     alert("Username or Password is incorrect")
  //   }
  // }






  return(
    <>

              <div className="credentials-entry-container">
                <div>
                    <h3>Username</h3>
                    <input className="username-input" placeholder="Username" onChange={(e) => setUsername(e.target.value)} ></input>
                </div>

                <br></br>

                <div>
                    <h3>Password</h3>
                    <input type="password" className="password-input" placeholder="Password" onChange={(e) => setPassword(e.target.value)} ></input>
                </div>

                <br></br>

                <div>
                    <button className="enter-credentials-button" onClick={handleLogin}>Log in</button>
                </div>

                <div>
                  <h3> username: {username}</h3>
                  <h3>password: {password}</h3>
                </div>
            </div>
    
    </>
  )

}

export default Authenticator
