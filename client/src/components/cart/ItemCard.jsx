import React from 'react'
import { useDispatch } from 'react-redux';
import { removeItemFromCart,addItemToCart } from '../../store/slices/cartSlice';

const ItemCard = ({items}) => {
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeItemFromCart(id));
    };


    const handleAddToCart = (product) => {
        dispatch(addItemToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
        }));
    };
  return (
    <div>

     {items.map((item) => (
        <div  key={item._id}  className=' flex flex-col border-b-2 border-gray-200/50 '>
                        <div className='m-2 p-2 text-start flex flex-row justify-between'>
                            {/* Product Image */}
                         
                            <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg" onError={(e) => e.target.style.display = 'none'} />
                    
                            {/* Product Info */}
                            <div className="flex-grow ml-4">
                                <h3 className="text-lg font-semibold">{item.name}</h3>
                            </div>
                          
                                                     
                                <div className="flex items-center space-x-2">
                                <button className="bg-gray-700 px-1 py-0 rounded text-white" onClick={() => handleRemove(item.id)}>-</button>
                                <span>{item.quantity}</span>
                                <button className="bg-gray-700 px-1 py-0 rounded text-white" onClick={()=>handleAddToCart(item)}>+</button>
                          
                                <span className="text-lg font-semibold">${item.totalPrice.toFixed(2)}</span>
                               </div>


                    </div>
                            <button onClick={() => handleRemove(item.id)} className="text-blue-500 text-lg">Remove</button>
                        </div>
                    ))}

    </div>
  )
}

export default ItemCard