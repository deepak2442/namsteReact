import {CDN_url} from "../utills/mock data"


const RestaurentCard = (props) =>{
    const {resData}=props

    const { cloudinaryImageId, name, cuisines, avgRating } = resData?.info;

    return (
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200" style={{backgroundColor: "#f0f0f0"}}>
        <img className="rounded-lg" src={ CDN_url + cloudinaryImageId} />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating}Stars</h4>
        <h4> {resData.info.sla.slaString}</h4>
         </div>
    )
}

export const withPromotedLabel = (RestaurentCard) =>{
    return (props) =>{
        return (
            <div>
                <label>promoted</label>
                <RestaurentCard {...props} />
            </div>
        )
    }
}

export default RestaurentCard;