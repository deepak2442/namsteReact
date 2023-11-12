 


const ItemList = ({items}) =>{
 console.log (items)
 

    return (<div>
      
        {items.map((item) => (
            <div key={item.card.info.id}  className="text-left border-gray-400 border-b-2 m-4 flex justify-between ">
                <div className="w-9/12">
                <span className="font-semibold">{item.card.info.name}</span>
                 <span>₹-{item.card.info.price? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                 <p className="font-light">{item.card.info.description}</p>
                 </div>
                 <div className="w-3/12 pb-2 justify-center">
                    <img  className="rounded-md" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+item.card.info.imageId} />
                    <button className="p-2 mx-16 absolute bg-black text-white rounded-lg shadow-lg align-bottom"> ADD </button>
                 </div>
            </div>))}
       
    </div>)
}

export default ItemList;