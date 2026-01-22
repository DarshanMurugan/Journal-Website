import "./content.css";
import {useOutletContext,useNavigate} from "react-router-dom";
function Content(){
  const {content} = useOutletContext();
  const navigate = useNavigate()








  return(<>
   <p>{content.save_date}</p>

        <div className="past-content-div">
          <div className="past-title-div">
                <p className="past-title-text"> {content.title_text}</p>
          </div >
          <div className="past-entry-div">
                <p className="past-entry-text">{content.entry_text}</p>
          </div>

          <div>
                <button onClick={() => navigate("/main/journal")}>back</button>
          </div>
        </div>



  </>);
};

export default Content;
