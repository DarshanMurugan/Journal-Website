import { useState } from "react"
import "./auth_styles.css"
import {useNavigate} from "react-router-dom";
function Authenticator(){
  const [password,setPassword] = useState("")
  const [username,setUsername] = useState("")
  const navigate = useNavigate()

  



  

  function handleLogin() {
    

    if (username == "Vladstock" && password == "journal") {
      navigate("/journal"), {state: {username,password}};

    }

    else{
      alert("Username or Password is incorrect")
    }
  }






  return(
    <>
    <div className="credentials-entry-container">
    <div>
      <div>
        <h3>Username</h3>
      </div>
      <div>
      <input className="username-input" placeholder="Username" onChange={(e) => setUsername(e.target.value)} ></input>
      </div>
    </div>

    <div>
      <div>
        <h3>Password</h3>
      </div>
      <div>
      <input type="password"  className="password-input" placeholder="Password" onChange={(e) => setPassword(e.target.value)} ></input>
      </div>
    </div>

    <div>
      <div ><button className="enter-credentials-button" onClick={handleLogin}>Log in</button>
      
      </div>

    </div>
    </div>
    
    <div>
      <h3> username: {username}</h3>
      <h3>password: {password}</h3>
    </div>


    </>
  )

}

export default Authenticator