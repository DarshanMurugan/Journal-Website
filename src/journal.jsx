import { useState, useContext, useRef, useEffect } from "react";
import axios from "axios";
import './journal.css';

function Journal() {

  const [newEntry, setNewEntry] = useState([]);
  const [newTitle, setNewTitle] = useState([]);
  const [pastContent, setPastContent] = useState([]);
  // const [searchContent, setSearchContent] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);
  // const navigate = useNavigate();
  const [query, setQuery] = useState([]);
  const [finderResult, setFinderResult] = useState([]);

  // const [searchParams] = useSearchParams();

  // const getId = useSearchParams.get("id");

  const [contentById, setContentById] = useState([]);


  useEffect(() => {
    fetchEntries();
  }, []);

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
    } catch (error) {

      console.log(error.response.data);
      alert("Error fetching data", error);
    }
  };




  const handleSubmit = async (e) => {

    e.preventDefault();
    if (handleIsEmpty()) {
      try {
        const token = sessionStorage.getItem("accessToken");
        const response = await axios.post('http://127.0.0.1:8000/entries_back_end/',
          {
            title_text: newTitle,
            entry_text: newEntry,
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
    if (isEmpty) {
      return true;
    }
    else {
      setContentById([]);
      setIsEmpty(true);
      return false;
    }
  }



  const searchContentById = async (id) => {
    try {
      setIsEmpty(false)
      const token = sessionStorage.getItem("accessToken");
      const response = await axios.get(`http://127.0.0.1:8000/entries_back_end/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
      setContentById(response.data);
      // navigate("/main/Content");



    } catch (error) {
      console.log("error searching for data")
    }
  }

  const findContent = async (e) => {
    try {
      const token = sessionStorage.getItem("accessToken");
      const response = await axios.post(
        'http://127.0.0.1:8000/api/finder/',
        {
          query: query,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });

      console.log(response);
      setFinderResult(response.data);
    } catch (error) {
      console.log("erorr finding data");
      console.log(error.response.data);
    }
  }


  return (
    <>


      <div className="searchContainer">
        <div>
          <input onChange={e => setQuery(e.target.value)} className="searchEntry" placeholder="Search"></input>
          <button onClick={() => findContent()} className="searchButton"></button>
        </div>
        <div>
          <ul className="finder-list">
            {finderResult.map(item => (
              <li key={item.id}>

                <button onClick={() => searchContentById(item.id)}>{item.entry_text}</button>
              </li>
            ))}
          </ul>
        </div>

      </div>
      <div className="journal">


        <form onSubmit={handleSubmit}>


          <div className="main-div">
            <div className="past-entries-div">

              <ul className="title-list">
                {pastContent.map(item => (
                  <li key={item.id}>
                    <button onClick={() => searchContentById(item.id)} type="button" className="past-entries-button">{item.title_text}</button>
                    <p>{item.save_date}</p>
                  </li>
                ))}
              </ul>
            </div>


            <div className="journal-entry-div">
              <input onChange={e => setNewTitle(e.target.value)} className="tittle-input"
                placeholder="Tittle" value={isEmpty ? newTitle : contentById.title_text} readOnly={!isEmpty}></input>
              <textarea onChange={e => setNewEntry(e.target.value)} className="journal-entry"
                placeholder="Dear Dairy," value={isEmpty ? newEntry : contentById.entry_text} readOnly={!isEmpty} />
            </div>


          </div>
          <button type="submit" >{isEmpty ? "Save" : "clear"}</button>
        </form>
      </div>
    </>
  )
}



export default Journal;
