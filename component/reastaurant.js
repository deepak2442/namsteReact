import {CDN_url} from "../utills/mock data"


const RestaurentCard = (props) =>{
    const {resData}=props

    const { cloudinaryImageId, name, cuisines, avgRating } = resData?.info;

    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
        <img src={ CDN_url + cloudinaryImageId}
        className="res-img"/>
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating}Stars</h4>
        <h4> {resData.info.sla.slaString}</h4>
         </div>
    )
}


export default RestaurentCard;