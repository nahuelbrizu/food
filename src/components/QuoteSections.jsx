import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuoteLeft} from "@fortawesome/free-solid-svg-icons";

export default function QuoteSections() {
return(
    <div className="section quote">
        <p className="quote-text">
            <FontAwesomeIcon icon={faQuoteLeft}/>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur fugit impedit maiores modi qui voluptatum. Accusantium, eum, eveniet?
        </p>
        <p className="quote-author">
            - Lorem ipsum
        </p>
    </div>
)
}