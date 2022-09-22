export default function CustomImg({imgSrc, pt}){
    return(
        <div className="custom-img" style={{paddingTop: pt}}>
            <img src={imgSrc.url} alt=""/>
        </div>
    )

}