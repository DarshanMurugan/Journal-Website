import { useState,useContext,useRef,useEffect } from "react";
import axios from "axios";
import './journal.css';
import {useOutletContext,useNavigate} from 'react-router-dom';

function Journal(){

  const [newEntry,setNewEntry] = useState([]);
  const [newTitle,setNewTitle] = useState([]);
  const [pastContent,setPastContent] = useState([]);
  const [searchContent,setSearchContent] = useState([]);

  const {setContent} = useOutletContext();
  const navigate = useNavigate();

  function fetchContent(){

    useEffect(()=>{
      fetchEntries();
    },[]);

    const fetchEntries = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/entries_back_end/");
        setPastContent(response.data);
      }catch (error) {
        alert("Error fetching data",error);
      }
      }
    };

  fetchContent();



  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const response = await axios.post('http://127.0.0.1:8000/entries_back_end/',{
      title_text:newTitle,
      entry_text:newEntry
      });
      alert('Entry saved!');
      window.location.reload();
      
    } catch (error) {
      alert("error saving entry",error);
    }
  };



  const searchContentById = async(id) => {
    try{
      const response = await axios.get(`http://127.0.0.1:8000/entries_back_end/${id}`);
      setContent(response.data);
      navigate("/main/Content");
    
      

    }catch(error){
      console.log("error searching for data")
    }
  }

  return(
    <>
    <div className="journal">
    <form onSubmit={handleSubmit}>
      
    
    <div className="main-div">
      <div className="past-entries-div">
       
        <ul className="title-list">
          {pastContent.map(item  => (
            <li key={item.id}>
              <button onClick={() => searchContentById(item.id)} type="button" className="past-entries-button">{item.title_text}</button>
              <p>{item.save_date}</p>
            </li>
          ))}
        </ul>
      </div>
      
        
        <div className="journal-entry-div">
            <input onChange={e => setNewTitle(e.target.value)} className="tittle-input" placeholder="Tittle"></input>
            <textarea onChange={e => setNewEntry(e.target.value)} className="journal-entry"
            placeholder="Dear Dairy,"/>
        </div>
      
      
    </div>
      <button type="submit" >Save</button>
    </form>
    </div>
    </> 
  )
}


  
export default Journal;
