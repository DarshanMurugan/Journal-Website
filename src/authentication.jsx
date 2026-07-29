import { useState } from "react"
import "./auth_styles.css"
import {useNavigate} from "react-router-dom";
import axios from "axios";
import hideIcon from "./assets/close-hide-password-icon.png";
import showIcon from "./assets/open-hide-password-icon.png";
function Authenticator(){
  const [password,setPassword] = useState("")
  const [username,setUsername] = useState("")
  const navigate = useNavigate()
  const [hidePassword,setHidePassword] = useState(true)
  



  

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
    navigate("/Journal");
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
                    <h3>Enter Username</h3>
                    <input className="username-input" placeholder="Username" onChange={(e) => setUsername(e.target.value)} ></input>
                </div>

                <br></br>

                <div >
                    <h3>Enter Password</h3>
                    <div className="password-div">
                      <input type={hidePassword===true ? "password":"text" } className="password-input-login-page" placeholder="Password" onChange={(e) => setPassword(e.target.value)} ></input>
                      <button className="hide-password-button"onClick={() => setHidePassword(prev => !prev)}><img className="password-hide-icon" src={hidePassword===true ? hideIcon:showIcon}/></button>
                    </div>
                </div>

                <br></br>

                <div>
                    <button className="enter-credentials-button" onClick={handleLogin}>Log in</button>
                </div>

            </div>
    
    </>
  )

}

export default Authenticator
