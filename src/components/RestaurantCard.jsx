import { CDN_URL } from '../utils/constants';

const RestaurantCard = (props) => {
  // eslint-disable-next-line react/prop-types
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla
  
  // eslint-disable-next-line no-unsafe-optional-chaining, react/prop-types
  } = resData?.info;

  return (
    <div
      className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-400"
      
    >
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="Biryani"
      />

      <div className="res-card-content">
        <h3 className='font-bold py-4 text-lg'>{name }</h3>
        <hr />
        <em>{cuisines.join(', ')}</em>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla?.deliveryTime} minutes</h4>
      </div>
    </div>
  );
};
 // eslint-disable-next-line react-refresh/only-export-components
 export const withPromtedLabel=(RestaurantCard) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
    return(
      <div>
        <label>Promoted</label>
        <RestaurantCard{...props}/>
      </div>
    );
  };
};
export default RestaurantCard;