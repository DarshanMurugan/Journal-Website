import { useState,useContext,useRef,useEffect } from "react";
import axios from "axios";
import './journal.css';
import {useNavigate,useSearchParams} from 'react-router-dom';

function Journal(){

  const [newEntry,setNewEntry] = useState([]);
  const [newTitle,setNewTitle] = useState([]);
  const [pastContent,setPastContent] = useState([]);
  const [searchContent,setSearchContent] = useState([]);
  const [isEmpty,setIsEmpty]  = useState(true);
  const navigate = useNavigate();

  // const [searchParams] = useSearchParams();

  // const getId = useSearchParams.get("id");

  const [contentById,setContentById] = useState([]);


    useEffect(()=>{
      fetchEntries();
    },[]);

    const fetchEntries = async () => {
      try {
        const token = sessionStorage.getItem("accessToken");
        const response = await axios.get("http://127.0.0.1:8000/entries_back_end/",
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
          );
        setPastContent(response.data);
      }catch (error) {
        
        console.log(error.response.data);
        alert("Error fetching data",error);
      } 
      };




  const handleSubmit = async (e) => {

    e.preventDefault();
    if (handleIsEmpty()) {
        try{
          console.log("started request");
          const token = sessionStorage.getItem("accessToken");
          const response = await axios.post('http://127.0.0.1:8000/entries_back_end/',
          {
          title_text:newTitle,
          entry_text:newEntry,
          },
            {
              headers: {
                Authorization: `Bearer ${token}`
              }
            }

            );
          window.location.reload();
          
        } catch (error) { 
          alert("an error occured while trying to saving entry");
          console.log(error.response.data);
        
        }
    }
  };


  const handleIsEmpty = () => {
    if (isEmpty){
        console.log("we here bruh");
        return true;
    }
    else {
      setContentById([]);
      setIsEmpty(true);
      return false;
    }
  }



  const searchContentById = async(id) => {
    try{
      setIsEmpty(false)
      const token = sessionStorage.getItem("accessToken");
      const response = await axios.get(`http://127.0.0.1:8000/entries_back_end/${id}`,
        { headers: {
          Authorization: `Bearer ${token}`
        }});
      setContentById(response.data);
      // navigate("/main/Content");
    
      

    }catch(error){
      console.log("error searching for data")
    }
  }

  console.log(isEmpty);

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
            <input onChange={e => setNewTitle(e.target.value)} className="tittle-input"
                placeholder="Tittle" value= {isEmpty ?  newTitle: contentById.title_text} readOnly={!isEmpty}></input>
            <textarea onChange={e => setNewEntry(e.target.value)} className="journal-entry"
            placeholder="Dear Dairy," value= {isEmpty ?  newEntry: contentById.entry_text} readOnly= {!isEmpty}/>
        </div>
      
      
    </div>
      <button type="submit" >{isEmpty ? "Save":"clear"}</button>
    </form>
    </div>
    </> 
  )
}


  
export default Journal;
