
export default function ImproveSkills() {
    const list = [
        "learn new recipies",
        "experiment",
        "sarasa",
        "lorem",
        "experiment whit food",
        "get ranked"
    ]


    return(
        <div className="section improve-skills">
            <div className="col img">
                <img src="https://scm-assets.constant.co/scm/unilever/2bb5223be0548fcc55c230aa5f951219/ab7a9016-c3f1-444d-a29f-2084e7408128.png" alt=""/>
            </div>
            <div className="col typography">
                <h1 className="title">
                    Improve your Culinary Skills
                </h1>
                {list.map((item, index) => (
                    <p className="skill-item" key={index}>{item}</p>
                ))}
                <button className="btn">Singup Now</button>
            </div>
        </div>
    )
}