import {Outlet} from "react-router-dom";
import {useState} from "react";



function SearchPage(){
  const [content,setContent] = useState(null);

  return (
  <>
    <Outlet context= {{content,setContent}} />
  
    </>
  );
}


export default SearchPage;
