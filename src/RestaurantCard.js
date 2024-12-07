import { CDN_URL } from "./utils/constants";
import { IoStarSharp } from "react-icons/io5";


const RestaurantCard = (props) => {
    const {resData} = props;
  
    return(
        
      <div className='m-4 p-4 w-[250px] h-[430px] bg-gray-100 hover:bg-gray-300'>
        <img className='res-logo h-[200px]' src={CDN_URL + resData.info.cloudinaryImageId} alt='res-card logo'></img>
       <h3 className="font-bold py-5 text-xl">{resData.info.name}</h3>
       <h3 className="flex">{resData.info.cuisines.join(", ")}</h3>
       <h3 className="flex">{resData.info.costForTwo}</h3>
       <h3 className="flex items-center space-x-1">{resData.info.avgRating}<IoStarSharp /></h3>
      </div>
    );
  };

  export default RestaurantCard;