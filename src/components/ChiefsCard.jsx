import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faTeamspeak, faAdn} from "@fortawesome/free-brands-svg-icons";

export default function ChiefsCard({chief}) {
    return(
        <div className="chief-card">
            <div className="chief-card-image">
                <img src={chief.img} alt="" />
            </div>
            <div className="chief-card-info">
                <h3 className="chief-card-name">{chief.name}</h3>
                <p className="chief-recipe-count">Recipes: <b>{chief.recipesCount}</b> </p>
                <p className="chief-cuisine" >Cuisine: <b>{chief.cuisine}</b> </p>
                <p className="chief-icons">
                <FontAwesomeIcon icon={faFacebook}/>
                <FontAwesomeIcon icon={faTeamspeak}/>
                <FontAwesomeIcon icon={faAdn}/>
                </p>
            </div>
        </div>
    )
}