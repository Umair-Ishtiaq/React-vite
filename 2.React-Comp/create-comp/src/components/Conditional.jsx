function Conditional() {
  const foodItem = ["chicken", "mutton", "fish", "veg", "nonveg"];

  return (
    <>
      <h3>Food available</h3>
      {foodItem.length === 0 && <h3>No food available</h3>}
      <ul className="list-group">
        {foodItem.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default Conditional;
