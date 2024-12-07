import { CDN_URL } from "./utils/constants";
import { UseDispatch, useDispatch } from "react-redux";
import { addItem } from "./utils/cartSlice";



const ItemsList = ({ items, dummy }) => {
    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        dispatch(addItem(item));
       };
    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="py-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                    <div className="w-9/12">
                        <div className="p-2">
                            <span>{item.card.info.name}</span>
                            <span> - ₹{(item.card.info.price / 100).toFixed(2)}</span>
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 p-4">
                    <div className="absolute">
                    <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg m-auto"
                     onClick= {()=> handleAddItem(item)}> Add + </button>
                     {/* <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg m-auto" >Add + </button> */}
                    </div>
                    <img src={CDN_URL + item.card.info.imageId} alt={item.card.info.name} />
                </div>
                </div>
            ))}
        </div>
    );
};

export default ItemsList;