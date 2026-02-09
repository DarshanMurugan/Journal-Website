import {useState} from "react";
import {useNavigate} from "react-router-dom";
import "./auth_styles.css";
import axios from "axios";


function CreateAccount(){
 const [username,setUsername] = useState();
 const [password,setPassword] = useState();
 const [checkUsername,setCheckUsername] = useState();

 const [checkPassword,setCheckPassword] = useState();
  

  const handleCreateAccount = async (e) => {
    
    e.preventDefault();
    try{
  
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
    catch (error){
      alert("something went worng try again");
   
    if (error.response) {
      console.log(error.response.data);
    }

    }

  }
     

  return(
  <>
      

              <div className="credentials-entry-container">
                <div>
                    <h3>Username</h3>
                    <input className="username-input" placeholder="Username" onChange={(e) => setUsername(e.target.value)} ></input>
                </div>
                
                <div>
                    <h3>Password</h3>
                    <input type="password" className="password-input" placeholder="Password" onChange={(e) => setPassword(e.target.value)} ></input>
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
