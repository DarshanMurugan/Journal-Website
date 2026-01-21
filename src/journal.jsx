import { useState,useContext,useRef,useEffect } from "react";
import axios from "axios";
import './journal.css';

function Journal(){

  const [newEntry,setNewEntry] = useState([]);
  const [newTitle,setNewTitle] = useState([])
  const [pastContent,setPastContent] = useState([])



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
      
    } catch (error) {
      alert("error saving entry",error);
    }
  };
  //useEffect(() => {
    //fetch("http://127.0.0.1:8000/")
    //.then((res) => res.json())
    //.then((result) => setEntry(result)) 
  //},[])

  // const sendValue = async () => {
        
  //       await fetch("http://127.0.0.1:8000/name",{
  //       method: "POST",
  //       headers: {
  //       "Content-Type": "application/json",
  //     },
  //       body: JSON.stringify({ username:name})
  //   })

    
  // }

//   const saveEntry = async () => {
//     await fetch("http://127.0.0.1:8000/post-entry",{
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//       body: JSON.stringify({
//         post:newEntry,
//         tittle: newTittle
//       })
//
//   })
// }

  // useEffect(() => {
   // fetch("http://127.0.0.1:8000/past-entries")
    // .then((entries) => entries.json())
    // .then((entries) => setEntry(entries))
    // },[]);
    //

  return(
    <>
    <form onSubmit={handleSubmit}>
      
    
    <div className="main-div">
      <div className="past-entries-div">
       
        <ul className="title-list">
          {pastContent.map(item  => (
            <li key={item.id}>
              <button type="button" className="past-entries-button">{item.title_text}</button>
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
    </> 
  )
}


  
export default Journal;
