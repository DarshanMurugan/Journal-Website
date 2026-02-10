import {useNavigate} from "react-router-dom";
import "./WelcomePage.css";
function WelcomePage(){
  const navigate = useNavigate(); 





  return( 
  <>
      <div>
        <h1>Welcome to My Journal website!!!</h1>
        <h2>An journal website still in the works</h2>

        <a>you can save your entries and search and view them later on</a>
      </div>
      <div className= "welcome-div">
          <p className="login-text">Create an Account or Log in </p>
          <div className= "button-div">
              <button className= "sign-up-button" onClick={(e) => navigate("/create-account") }>Sign Up</button>
              <button className= "log-in-button" onClick={(e)=> navigate("/login")}>Log In</button>
          </div>
          
      </div>
    

  </>
  )

}

export default WelcomePage;
