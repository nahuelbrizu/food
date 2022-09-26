import CustomImg from "./CustomImg";


export default function RecipeCard({recipe}) {

    return(
        <div className="recipes-card">
            <CustomImg imgSrc={recipe.img} pt={"65%"}/>
            <div className="recipe-card-info">
                <img className="auther-img" src={recipe.authorImg} alt=""/>
                <p className="recipe-title" >{recipe.title}</p>
                <p className="recipe-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt molestias quod recusandae.</p>
                <a className="view-btn" href="#!"> VIEW RECIPE</a>
            </div>
        </div>

    )
}