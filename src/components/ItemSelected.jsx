import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const ItemSelected = () => {
  const { dispatch } = useContext(AppContext);

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [action, setAction] = useState("Add");

  const submitEvent = () => {
    const item = {
      name: name,
      quantity: parseInt(quantity),
    };

    if (action === "Reduce") {
      dispatch({
        type: "RED_QUANTITY",
        payload: item,
      });
    } else {
      dispatch({
        type: "ADD_QUANTITY",
        payload: item,
      });
    }
  };

  return (
    <div className="item-selected-container">
      <div className="row">
        <div className="input-group mb-3 px-3">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Items
            </label>
          </div>
          <select
            className="custom-select"
            id="inputGroupSelect01"
            onChange={(event) => setName(event.target.value)}
          >
            <option defaultValue>Choose...</option>
            <option value="Shirt">Shirt</option>
            <option value="Dress">Dress</option>
            <option value="Jeans">Jeans</option>
            <option value="Dinner set">Dinner set</option>
            <option value="Bags">Bags</option>
          </select>

          <div className="input-group-prepend mx-3">
            <label className="input-group-text" htmlFor="inputGroupSelect02">
              Action
            </label>
          </div>
          <select
            className="custom-select"
            id="inputGroupSelect02"
            onChange={(event) => setAction(event.target.value)}
          >
            <option value="Add">Add</option>
            <option value="Reduce">Reduce</option>
          </select>

          <input
            required
            type="number"
            placeholder="Quantity"
            className="form-control mx-3"
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
          />

          <button className="btn btn-success" onClick={submitEvent}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemSelected;
