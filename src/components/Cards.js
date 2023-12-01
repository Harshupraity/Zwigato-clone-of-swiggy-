import { CDN_IMG_URL } from "./Utils/constants";

const Cards = (props)=>{
    console.log(props);

    //object destructring.
    const {name,avgRating,costForTwo,cloudinaryImageId}  = props.details;
    
    return (
        <div>
        
        <div className="card">
            <div>
            <img src = {`${CDN_IMG_URL}${cloudinaryImageId}`}/>
            </div>
        <div className="card-content">
            <div className="title-price">
            <h3>{name}</h3>
            <div> 
            <div className="avgRating">{avgRating}</div>
                <div className = "price">{costForTwo} </div>
            
            </div>
           
            </div>
            <p>Card description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#">Read More</a>
        </div>
    </div>
       
        </div>
    )
}
export default Cards

