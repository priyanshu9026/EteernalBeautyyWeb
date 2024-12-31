import './Service.css'
function FoodCard(props) {
  return (
    <div className='style'>
      <img
        src={props.image}
        alt={props.name}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <h3>{props.name}</h3>
      <p>Price: ₹{props.price}</p>
    </div>
  );
}

export default FoodCard;
