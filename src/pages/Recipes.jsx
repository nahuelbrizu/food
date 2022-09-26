import PreviosSearch from "../components/PreviosSearch";
import RecipeCard from "../components/RecipeCard";

export default function Recipes() {
    const recipes = [
        {
            title: "Chicken Pan Pizza",
            img: {
                url: "https://github.com/0shuvo0/react-recipe-app/blob/main/public/img/gallery/img_1.jpg?raw=true"
            },
            authorImg: "https://github.com/0shuvo0/react-recipe-app/blob/main/public/img/top-chiefs/img_1.jpg?raw=true",
        },
        {
            title: "Mutton Biriyani",
            img: {
                url: "https://raw.githubusercontent.com/0shuvo0/react-recipe-app/main/public/img/gallery/img_2.jpg"
            },
            authorImg: "https://github.com/0shuvo0/react-recipe-app/blob/main/public/img/top-chiefs/img_2.jpg?raw=true",
        },
        {
            title: "Japanese cSushi",
            img: {url: "https://github.com/0shuvo0/react-recipe-app/blob/main/public/img/gallery/img_3.jpg?raw=true"},
            authorImg: "https://github.com/0shuvo0/react-recipe-app/blob/main/public/img/top-chiefs/img_3.jpg?raw=true",
        },
        {
            title: "Mutton Biriyani",
            img: {url: "https://github.com/0shuvo0/react-recipe-app/blob/main/public/img/gallery/img_4.jpg?raw=true"},
            authorImg: "https://github.com/0shuvo0/react-recipe-app/blob/main/public/img/top-chiefs/img_4.jpg?raw=true",
        },
        {
            title: "American Cheese Burger",
            img: {url: "https://github.com/0shuvo0/react-recipe-app/blob/main/public/img/gallery/img_5.jpg?raw=true"},
            authorImg: "https://github.com/0shuvo0/react-recipe-app/blob/main/public/img/top-chiefs/img_5.jpg?raw=true",
        },
        {
            title: "Chicken Pan Pizza",
            img: {url:"https://github.com/0shuvo0/react-recipe-app/blob/main/public/img/gallery/img_6.jpg?raw=true"},
            authorImg: "https://github.com/0shuvo0/react-recipe-app/blob/main/public/img/top-chiefs/img_6.jpg?raw=true",
        },
        {
            title: "Spaghetti and Meatballs",
            img: {url:"https://github.com/0shuvo0/react-recipe-app/blob/main/public/img/gallery/img_7.jpg?raw=true"},
            authorImg: "https://github.com/0shuvo0/react-recipe-app/blob/main/public/img/top-chiefs/img_1.jpg?raw=true",
        },
        {
            title: "American Cheese Burger",
            img: {url:"https://github.com/0shuvo0/react-recipe-app/blob/main/public/img/gallery/img_8.jpg?raw=true"},
            authorImg: "https://github.com/0shuvo0/react-recipe-app/blob/main/public/img/top-chiefs/img_2.jpg?raw=true",
        },
        {
            title: "Carnecita Mechada",
            img: {url: "https://github.com/0shuvo0/react-recipe-app/blob/main/public/img/gallery/img_9.jpg?raw=true"},
            authorImg: "https://github.com/0shuvo0/react-recipe-app/blob/main/public/img/top-chiefs/img_3.jpg?raw=true",
        },
        {
            title: "Japanese Sushi",
            img: {url: "https://github.com/0shuvo0/react-recipe-app/blob/main/public/img/gallery/img_10.jpg?raw=true"},
            authorImg: "https://github.com/0shuvo0/react-recipe-app/blob/main/public/img/top-chiefs/img_4.jpg?raw=true",
        },
        {
            title: "American Cheese Burger",
            img: { url:"https://github.com/0shuvo0/react-recipe-app/blob/main/public/img/gallery/img_1.jpg?raw=true"},
            authorImg: "https://github.com/0shuvo0/react-recipe-app/blob/main/public/img/top-chiefs/img_5.jpg?raw=true",
        },
        {
            title: "Mutton Biriyani",
            img: { url: "https://github.com/0shuvo0/react-recipe-app/blob/main/public/img/gallery/img_3.jpg?raw=true"
            },
            authorImg: "https://github.com/0shuvo0/react-recipe-app/blob/main/public/img/top-chiefs/img_6.jpg?raw=true",
        }
    ].sort(() => Math.random() - 0.5)
     return(
         <div>
             <PreviosSearch/>
                <div className="recipes-container">
                    {recipes.map((recipe, index) =>(
                        <RecipeCard key={index} recipe={recipe}/>
                    ))}

                </div>
         </div>
    )
}