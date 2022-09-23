import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

export default function PreviosSearch({links, close}){
    const searches = ["pizza", "burger", "cookies", "juice", "tacos", "salad", "ice cream", " soup", "pudding"];
     return(
       <div className="" onClick={close} >
           <div className={"previous-searches section"}>
               <h2> Previous Searches</h2>
               <div className="previous-searches-container">
                   {searches.map((search, index) => (<div key={index} style={{animationDelay: index * .1 + "s"}} className="search-item">{search}</div>))}
               </div>
               <div className="search-box">
                   <input type="text" placeholder="Search ..."/>
                   <button className={"btn"}>
                       <FontAwesomeIcon icon={faSearch}/>
                   </button>
               </div>
           </div>
       </div>
    )
}