import { useState,useContext,useRef,useEffect } from "react";

import './journal.css'

function Journal(){

  const [entry,setEntry] = useState(["FIRST ENTRY","SECOND ENTRY"])
  const [newEntry,setNewEntry] = useState()

  const [newTittle,setNewTittle] = useState()



  const saveEntry = async () => {
    await fetch("http://127.0.0.1:8000/post-entry",{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
      body: JSON.stringify({
        post:newEntry,
        tittle: newTittle
      })
      
  })
}

   useEffect(() => {
    fetch("http://127.0.0.1:8000/past-entries")
    .then((entries) => entries.json())
    .then((entries) => setEntry(entries))
    },[]);


  return(
    <>
    <div className="main-div">
      <div className="past-entries-div">
        <ul className="entry-list">
            {entry.map((entry, index) => (
          <li key={index}>
              <button className="past-entries-button">{entry}</button>
              </li>
            ))}
          </ul>
      </div>
      
        
        <div className="journal-entry-div">
            <input onChange={e => setNewTittle(e.target.value)} className="tittle-input" placeholder="Tittle"></input>
            <textarea onChange={e => setNewEntry(e.target.value)} className="journal-entry"
            placeholder="Dear Dairy,"/>
        </div>
      
      
    </div>
      <button onClick={saveEntry}>Save</button>
    
    </> 
  )
}


  
export default Journal;