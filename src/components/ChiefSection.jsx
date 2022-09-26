import ChiefsCard from "./ChiefsCard";

export default function  ChiefSection() {
        const chiefs = [
            {
                name: "robertito asdas",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKSuW1_P19EnEjxWJn_LP8xX4KB-vzqBJqg&usqp=CAU",
                recipesCount: "13",
                cuisine: "japanese"
            },
            {
                name: "rqrqr asdas",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhnyk0273hoIss7QaUzHxxXUDxryYwCbRxUA&usqp=CAU",
                recipesCount: "13",
                cuisine: "japanese"
            },
            {
                name: "weqweqw asdas",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpKiuBQpLe479zbWKFzO5SUQKAVzOQXOqayQ&usqp=CAU",
                recipesCount: "13",
                cuisine: "japanese"
            },
            {
                name: "asdasdsa asdas",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgtPNMkr3LC-7p_TgHKRcqcAm-wr0j3zff_Q&usqp=CAU",
                recipesCount: "13",
                cuisine: "japanese"
            },
            {
                name:"nñjadsñnj",
                img: "https://vamospanish.com/wp-content/uploads/Finding-Work-Job-as-a-chef-in-buenos-aires-argentina-680x380-1.jpg",
                recipesCount: "13",
                cuisine: "japanese"
            }
            ,
            {
                name:"nñjadsñnj",
                img: "https://vamospanish.com/wp-content/uploads/Finding-Work-Job-as-a-chef-in-buenos-aires-argentina-680x380-1.jpg",
                recipesCount: "13",
                cuisine: "japanese"
            }
        ]
    return(
        <div className={"section chiefs"}>
               <h1 className="title">
                   top Chiefs
               </h1>
            <div className="top-chiefs-container">
                {chiefs.map(chief => <ChiefsCard key={chief.name} chief={chief}/> )}
            </div>
        </div>
    )
}